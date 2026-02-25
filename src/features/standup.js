import { getCurrentDayInfo, getCurrentFocusTask, getTodaysTasks } from "../domain/roadmap.js"
import { showToast } from "../ui/toast.js"

function syncModalOpenClass() {
  const noteOpen = document.getElementById("noteOverlay")?.classList.contains("open")
  const backupOpen = document.getElementById("backupOverlay")?.classList.contains("open")
  const standupOpen = document.getElementById("standupOverlay")?.classList.contains("open")
  document.body.classList.toggle("modal-open", !!(noteOpen || backupOpen || standupOpen))
}

function formatTaskLine(text) {
  const clean = String(text || "").replace(/\s+/g, " ").trim()
  return clean ? `- ${clean}` : ""
}

function getTodayPrefix() {
  return new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

function tasksCompletedTodayFromDates(weeks, state) {
  const prefix = getTodayPrefix()
  const doneKeys = Object.keys(state.tasks || {}).filter((k) => state.tasks[k])
  return doneKeys
    .filter((k) => {
      const d = state.taskDates?.[k]
      return typeof d === "string" && d.startsWith(prefix)
    })
    .map((k) => {
      const m = /^(.*)_(\d+)$/.exec(String(k))
      if (!m) return { key: k, text: k }
      const week = weeks.find((w) => w.id === m[1])
      const idx = Number(m[2])
      return { key: k, text: week?.tasks?.[idx]?.t || k }
    })
}

function customTasksCompletedToday(state) {
  const prefix = new Date().toISOString().slice(0, 10)
  const res = []
  const all = state.customTasks || {}
  Object.entries(all).forEach(([weekId, tasks]) => {
    ;(tasks || []).forEach((t) => {
      if (!t?.done) return
      if (!t.doneAt || String(t.doneAt).slice(0, 10) !== prefix) return
      res.push({ weekId, text: t.text })
    })
  })
  return res
}

export function buildStandupText(weeks, state) {
  const dayInfo = getCurrentDayInfo(state.startDate)
  const todays = dayInfo.isValid ? getTodaysTasks(weeks, state, dayInfo) : []
  const focus = dayInfo.isValid ? getCurrentFocusTask(weeks, state, dayInfo) : null

  const completed = [
    ...tasksCompletedTodayFromDates(weeks, state).map((t) => t.text),
    ...customTasksCompletedToday(state).map((t) => t.text),
  ]

  const completedLines = completed.length
    ? completed.map((t) => formatTaskLine(t)).filter(Boolean).join("\n")
    : "- (none logged yet today)"

  const todayLines = todays
    .filter((t) => !t.done)
    .map((t) => formatTaskLine(t.text))
    .filter(Boolean)
    .join("\n")

  const focusLine = focus?.text ? formatTaskLine(focus.text) : "- (set a Start Date to generate focus)"

  return [
    `Yesterday:\n${completedLines}`,
    "",
    `Today:\n${todayLines || focusLine}`,
    "",
    "Blockers:\n- None",
  ].join("\n")
}

export function openStandupModal(weeks, state) {
  const overlay = document.getElementById("standupOverlay")
  const text = document.getElementById("standupText")
  if (!overlay || !text) return

  text.value = buildStandupText(weeks, state)
  overlay.classList.add("open")
  syncModalOpenClass()
  setTimeout(() => text.focus(), 50)
}

export function closeStandupModal() {
  document.getElementById("standupOverlay")?.classList.remove("open")
  syncModalOpenClass()
}

export async function copyStandupToClipboard() {
  const text = document.getElementById("standupText")
  const value = text?.value || ""
  if (!value.trim()) return
  try {
    await navigator.clipboard.writeText(value)
    showToast("Standup copied", "success")
  } catch {
    showToast("Copy failed", "warn")
  }
}
