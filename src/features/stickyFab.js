import { getCurrentDayInfo, getCurrentFocusTask } from "../domain/roadmap.js"
import { WORK_SECONDS } from "../constants.js"

export function createStickyFab({ weeks, store, timer }) {
  function initialize() {
    const fab = document.getElementById("stickyFocusFab")
    if (!fab) return

    // Bottom timer is pinned; keep it visible.
    fab.classList.add("visible")

    updateContent()
  }

  function updateContent() {
    const fabTimerDisplay = document.getElementById("fabTimerDisplay")
    const fabTimerStatus = document.getElementById("fabTimerStatus")
    const fabTaskTitle = document.getElementById("fabTaskTitle")
    const fabActionText = document.getElementById("fabActionText")
    const fab = document.getElementById("stickyFocusFab")
    if (!fabTimerDisplay || !fabTimerStatus || !fabTaskTitle || !fab) return

    const seconds = timer.getSeconds()
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    const timerStr = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
    fabTimerDisplay.textContent = timerStr

    if (timer.isRunning()) {
      fabTimerStatus.textContent = seconds === WORK_SECONDS ? "FOCUS" : "DEEP WORK"
      fab.classList.add("timer-running")
      if (fabActionText) fabActionText.textContent = "Pause"
    } else {
      fabTimerStatus.textContent = "READY"
      fab.classList.remove("timer-running")
      if (fabActionText) fabActionText.textContent = "Start"
    }

    const state = store.getState()
    const dayInfo = getCurrentDayInfo(state.startDate)
    const task = getCurrentFocusTask(weeks, state, dayInfo)
    fabTaskTitle.textContent = task ? task.text : "No active task"
  }

  return { initialize, updateContent }
}
