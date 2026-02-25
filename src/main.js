import { WEEKS as WEEKS_RAW } from "../data.js"
import { STORAGE_KEY, BACKUP_KEY } from "./constants.js"
import { getDefaultState } from "./state/defaultState.js"
import { createStorageAdapter } from "./state/storage.js"
import { createStore } from "./state/store.js"
import { convertToWeeksFormat } from "./domain/roadmap.js"
import { updateStreak } from "./domain/streak.js"
import { showToast } from "./ui/toast.js"
import { showSaveIndicator } from "./ui/saveIndicator.js"
import { updateStats, updateMonthPct } from "./ui/stats.js"
import { updateWeekInfo } from "./ui/weekInfo.js"
import { renderTodayFocus } from "./ui/todayFocus.js"
import { renderTimeline } from "./ui/timeline.js"
import { renderWeekCards } from "./ui/weekCards.js"
import { playSuccessSound, syncSoundButtonUI } from "./features/sound.js"
import {
  openBackupModal,
  closeBackupModal,
  exportData,
  importDataFile,
  copyDataToClipboard,
} from "./features/backup.js"
import { openNote, closeNote, saveNote } from "./features/notes.js"
import { createTimer } from "./features/timer.js"
import { createStickyFab } from "./features/stickyFab.js"
import {
  openStandupModal,
  closeStandupModal,
  copyStandupToClipboard,
} from "./features/standup.js"

const WEEKS = convertToWeeksFormat(WEEKS_RAW)

const storage = createStorageAdapter(window.localStorage)
const store = createStore({
  storage,
  storageKey: STORAGE_KEY,
  backupKey: BACKUP_KEY,
  getDefaultState,
})

const timer = createTimer({
  store,
  onSessionComplete: () => {
    timer.completeSession()
    showToast("Session done! Take a 5 min break.", "success")
  },
  onTick: () => {
    stickyFab.updateContent()
  },
})

const stickyFab = createStickyFab({ weeks: WEEKS, store, timer })

function getTaskTextByKey(key) {
  const m = /^(.*)_(\d+)$/.exec(String(key))
  if (!m) return String(key)
  const weekId = m[1]
  const idx = Number(m[2])
  const week = WEEKS.find((w) => w.id === weekId)
  return week?.tasks?.[idx]?.t || String(key)
}

function renderAll() {
  const state = store.getState()

  if (state.startDate) {
    const startDateEl = document.getElementById("startDate")
    if (startDateEl) startDateEl.value = state.startDate
  }

  syncSoundButtonUI(state.soundEffectsEnabled !== false)
  renderWeekCards(WEEKS, state)
  updateStats(WEEKS, state)
  updateMonthPct(WEEKS, state)
  updateWeekInfo(state)
  renderTodayFocus(WEEKS, state)
  renderTimeline(WEEKS, state)

  const dailyNotes = document.getElementById("dailyNotes")
  if (dailyNotes && document.activeElement !== dailyNotes) {
    dailyNotes.value = state.dailyNotes || ""
    dailyNotes.style.height = "auto"
    dailyNotes.style.height = `${dailyNotes.scrollHeight}px`
  }

  timer.updateTimerDisplay()
  stickyFab.updateContent()
}

// Re-render the app on state updates.
store.subscribe(() => {
  showSaveIndicator()
  renderAll()
})

function toggleSoundEffects() {
  store.setState((state) => {
    state.soundEffectsEnabled = state.soundEffectsEnabled !== false
  })
  const enabled = store.getState().soundEffectsEnabled !== false
  showToast(enabled ? "Sound effects enabled" : "Sound effects disabled", "info")
}

function updateStartDate() {
  const value = document.getElementById("startDate")?.value || null
  store.setState((state) => {
    state.startDate = value
  })
}

function toggleCollapse(weekId) {
  store.setState((state) => {
    state.collapsedWeeks[weekId] = !state.collapsedWeeks[weekId]
  })
}

function toggleTask(key) {
  const wasDone = !!store.getState().tasks[key]

  store.setState((state) => {
    state.tasks[key] = !state.tasks[key]
    if (state.tasks[key]) {
      state.taskDates[key] = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      updateStreak(state)
    } else {
      delete state.taskDates[key]
    }
  })

  if (!wasDone && store.getState().tasks[key]) {
    playSuccessSound(store.getState())
    showToast("Task completed", "success")
  }
}

function toggleWeekComplete(weekId, e) {
  e?.stopPropagation?.()
  store.setState((state) => {
    state.weeksDone[weekId] = !state.weeksDone[weekId]
  })
  showToast(store.getState().weeksDone[weekId] ? "Week complete!" : "Week unmarked", store.getState().weeksDone[weekId] ? "success" : "info")
}

function addCustomTask(weekId, input) {
  const text = input.value.trim()
  if (!text) return
  store.setState((state) => {
    if (!state.customTasks[weekId]) state.customTasks[weekId] = []
    state.customTasks[weekId].push({ text, done: false })
  })
  input.value = ""
}

function toggleCustomTask(weekId, idx) {
  const st = store.getState()
  const existing = st.customTasks?.[weekId]?.[idx]
  if (!existing) return

  const wasCompleted = existing.done
  store.setState((state) => {
    state.customTasks[weekId][idx].done = !state.customTasks[weekId][idx].done
    if (state.customTasks[weekId][idx].done) {
      state.customTasks[weekId][idx].doneAt = new Date().toISOString()
    } else {
      delete state.customTasks[weekId][idx].doneAt
    }
  })

  if (!wasCompleted && store.getState().customTasks[weekId][idx].done) {
    playSuccessSound(store.getState())
  }
}

function deleteCustomTask(weekId, idx) {
  store.setState((state) => {
    if (!state.customTasks[weekId]) return
    state.customTasks[weekId].splice(idx, 1)
  })
}

function confirmReset() {
  if (confirm("Reset all progress? Export first!\n\nThis cannot be undone.")) {
    storage.removeItem(STORAGE_KEY)
    storage.removeItem(BACKUP_KEY)
    store.reset()
    showToast("Reset", "info")
  }
}

async function importData(event) {
  const file = event.target.files[0]
  if (!file) return
  try {
    const imp = await importDataFile(file)
    if (!imp.tasks) throw new Error("invalid")
    const next = { ...getDefaultState(), ...imp }
    store.replaceState(next)
    showToast("Imported!", "success")
    closeBackupModal()
  } catch {
    showToast("Invalid file", "warn")
  } finally {
    event.target.value = ""
  }
}

function onExportData() {
  exportData(store.getState())
  showToast("Exported", "success")
}

function onCopyDataToClipboard() {
  copyDataToClipboard(store.getState())
    .then(() => showToast("Copied", "success"))
    .catch(() => showToast("Failed", "warn"))
}

function onSaveNote() {
  store.setState((state) => {
    const res = saveNote(state)
    if (res.changed) showToast("Note saved", "success")
  })
}

function bindUI() {
  document.getElementById("soundBtn")?.addEventListener("click", toggleSoundEffects)
  document.getElementById("timerBtn")?.addEventListener("click", timer.toggleTimerModal)
  document.getElementById("backupBtn")?.addEventListener("click", openBackupModal)
  document.getElementById("resetBtn")?.addEventListener("click", confirmReset)
  document.getElementById("fabActionBtn")?.addEventListener("click", () => {
    timer.startStop()
    stickyFab.updateContent()
  })
  document
    .getElementById("fabTimerDisplay")
    ?.addEventListener("click", timer.toggleTimerModal)
  document.getElementById("fabTaskTitle")?.addEventListener("click", timer.toggleTimerModal)

  document.getElementById("timerCloseBtn")?.addEventListener("click", timer.closeTimerModal)
  document.getElementById("tmStartBtn")?.addEventListener("click", timer.startStop)
  document.getElementById("tmResetBtn")?.addEventListener("click", timer.reset)

  document.getElementById("dashTimerStartBtn")?.addEventListener("click", timer.startStop)
  document.getElementById("dashTimerResetBtn")?.addEventListener("click", timer.reset)

  document.getElementById("noteCancelBtn")?.addEventListener("click", closeNote)
  document.getElementById("noteSaveBtn")?.addEventListener("click", onSaveNote)
  document.getElementById("noteOverlay")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeNote()
  })

  document.getElementById("backupExportBtn")?.addEventListener("click", onExportData)
  document.getElementById("backupCopyBtn")?.addEventListener("click", onCopyDataToClipboard)
  document.getElementById("backupCloseBtn")?.addEventListener("click", closeBackupModal)
  document.getElementById("backupOverlay")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeBackupModal()
  })

  document.getElementById("standupBtn")?.addEventListener("click", () => {
    openStandupModal(WEEKS, store.getState())
  })
  document.getElementById("standupCloseBtn")?.addEventListener("click", closeStandupModal)
  document.getElementById("standupCloseX")?.addEventListener("click", closeStandupModal)
  document.getElementById("standupCopyBtn")?.addEventListener("click", copyStandupToClipboard)
  document.getElementById("standupOverlay")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeStandupModal()
  })

  const importFile = document.getElementById("importFile")
  document.getElementById("backupImportBtn")?.addEventListener("click", () => {
    importFile?.click()
  })
  importFile?.addEventListener("change", importData)

  document.getElementById("backupResetBtn")?.addEventListener("click", () => {
    confirmReset()
    closeBackupModal()
  })

  document.getElementById("startDate")?.addEventListener("change", updateStartDate)

  const dailyNotes = document.getElementById("dailyNotes")
  if (dailyNotes && !dailyNotes.dataset.bound) {
    const autosize = () => {
      dailyNotes.style.height = "auto"
      dailyNotes.style.height = `${dailyNotes.scrollHeight}px`
    }
    dailyNotes.addEventListener("input", () => {
      autosize()
      store.setState((state) => {
        state.dailyNotes = dailyNotes.value
      })
    })
    dailyNotes.dataset.bound = "1"
    autosize()
  }

  ;["month1weeks", "month2weeks", "month3weeks"].forEach((id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.addEventListener("click", onWeeksGridClick)
    el.addEventListener("keydown", onWeeksGridKeydown)
  })
  document.getElementById("todayTasks")?.addEventListener("click", onTodayTasksClick)
  document.getElementById("todayTasks")?.addEventListener("keydown", onTodayTasksKeydown)
}

function runWeeksGridAction(el, e) {
  const action = el.dataset.action
  if (action === "toggleCollapse") {
    toggleCollapse(el.dataset.weekId)
    return true
  }

  if (action === "toggleTask") {
    toggleTask(el.dataset.key)
    return true
  }

  if (action === "openNote") {
    const key = el.dataset.key
    openNote(store.getState(), key, getTaskTextByKey(key), e)
    return true
  }

  if (action === "toggleCustomTask") {
    toggleCustomTask(el.dataset.weekId, Number(el.dataset.index))
    return true
  }

  if (action === "deleteCustomTask") {
    deleteCustomTask(el.dataset.weekId, Number(el.dataset.index))
    return true
  }

  return false
}

function onWeeksGridKeydown(e) {
  const target = e.target
  if (target instanceof HTMLInputElement && target.dataset.action === "addCustomTask") {
    if (e.key !== "Enter") return
    addCustomTask(target.dataset.weekId, target)
    return
  }

  if (e.key !== "Enter" && e.key !== " ") return
  if (e.target.closest("[data-skip-toggle]")) return

  // Let native controls handle their own keyboard interactions.
  if (target instanceof HTMLButtonElement) return
  if (target instanceof HTMLAnchorElement) return
  if (target instanceof HTMLTextAreaElement) return

  const el = target.closest?.("[data-action]")
  if (!el) return
  e.preventDefault()
  runWeeksGridAction(el, e)
}

function onWeeksGridClick(e) {
  if (e.target.closest("[data-skip-toggle]")) return

  const el = e.target.closest("[data-action]")
  if (!el) return

  runWeeksGridAction(el, e)
}

function onTodayTasksClick(e) {
  const el = e.target.closest("[data-action]")
  if (!el) return
  if (el.dataset.action === "toggleTask") toggleTask(el.dataset.key)
}

function onTodayTasksKeydown(e) {
  if (e.key !== "Enter" && e.key !== " ") return
  const target = e.target
  if (!(target instanceof Element)) return
  const el = target.closest("[data-action]")
  if (!el) return
  if (el.dataset.action !== "toggleTask") return
  e.preventDefault()
  toggleTask(el.dataset.key)
}

function renderWhenReady() {
  const meta = store.getLastLoadMeta()
  bindUI()
  timer.init()
  stickyFab.initialize()
  renderAll()
  if (meta.recoveredFromBackup) showToast("Recovered from backup", "warn")

  // Auto-refresh date-driven UI (midnight rollover, clock label, etc).
  setInterval(() => {
    const state = store.getState()
    updateWeekInfo(state)
    renderTodayFocus(WEEKS, state)
    renderTimeline(WEEKS, state)
    stickyFab.updateContent()
  }, 60 * 1000)
}

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "e") {
    e.preventDefault()
    onExportData()
  }
  if ((e.ctrlKey || e.metaKey) && e.key === "b") {
    e.preventDefault()
    openBackupModal()
  }
  if (e.key === "Escape") {
    closeNote()
    closeBackupModal()
    closeStandupModal()
    timer.closeTimerModal()
  }
  if (
    e.key === " " &&
    document.getElementById("timerModal")?.classList.contains("open") &&
    !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
  ) {
    e.preventDefault()
    timer.startStop()
  }
})

window.addEventListener("beforeunload", () => {
  store.backupNow()
})

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderWhenReady)
} else {
  renderWhenReady()
}
