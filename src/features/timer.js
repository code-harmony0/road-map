import { WORK_SECONDS } from "../constants.js"
import { updateStreak } from "../domain/streak.js"

function get12hr() {
  const d = new Date()
  let h = d.getHours()
  const m = d.getMinutes()
  const ampm = h >= 12 ? "PM" : "AM"
  h = h % 12 || 12
  return `${h}:${String(m).padStart(2, "0")} ${ampm}`
}

function setText(id, v) {
  const el = document.getElementById(id)
  if (el) el.textContent = String(v)
}

export function createTimer({ store, onSessionComplete, onTick }) {
  let timerInterval = null
  let timerRunning = false
  let timerSeconds = store.getState().timerSeconds || WORK_SECONDS

  function isRunning() {
    return timerRunning
  }

  function getSeconds() {
    return timerSeconds
  }

  function toggleTimerModal() {
    document.getElementById("timerModal")?.classList.toggle("open")
    updateTimerClock()
  }

  function closeTimerModal() {
    document.getElementById("timerModal")?.classList.remove("open")
  }

  function startStop() {
    if (timerRunning) {
      clearInterval(timerInterval)
      timerRunning = false
      syncTimerButtons()
      updateTimerDisplay()
      return
    }

    timerRunning = true
    syncTimerButtons()

    timerInterval = setInterval(() => {
      timerSeconds--
      if (timerSeconds <= 0) {
        clearInterval(timerInterval)
        timerRunning = false
        timerSeconds = WORK_SECONDS
        syncTimerButtons()
        onSessionComplete?.()
      }
      updateTimerDisplay()
      onTick?.()
    }, 1000)
  }

  function reset() {
    clearInterval(timerInterval)
    timerRunning = false
    timerSeconds = WORK_SECONDS
    syncTimerButtons()
    updateTimerDisplay()
  }

  function syncTimerButtons() {
    const startBtn = document.getElementById("tmStartBtn")
    if (startBtn) startBtn.textContent = timerRunning ? "Pause" : "Start"

    const dashStartBtn = document.getElementById("dashTimerStartBtn")
    if (dashStartBtn) dashStartBtn.textContent = timerRunning ? "Pause" : "Start"

    const dashCard = document.getElementById("dashTimerCard")
    dashCard?.classList.toggle("running", timerRunning)

    const timerBtn = document.getElementById("timerBtn")
    const timerDot = document.getElementById("timerDot")
    timerBtn?.classList.toggle("running", timerRunning)
    timerDot?.classList.toggle("pulse", timerRunning)

    document.body.classList.toggle("focus-mode", timerRunning)
  }

  function updateTimerDisplay() {
    const m = Math.floor(timerSeconds / 60)
    const s = timerSeconds % 60
    const str = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`

    const timerDisplay = document.getElementById("timerDisplay")
    const timerBtnText = document.getElementById("timerBtnText")
    if (timerDisplay) {
      timerDisplay.textContent = str
      timerDisplay.classList.toggle("warn", timerSeconds < 5 * 60)
    }
    if (timerBtnText) timerBtnText.textContent = str

    setText("dashTimerDisplay", str)

    const label = document.getElementById("timerLabel")
    if (label) {
      label.textContent =
        timerSeconds === WORK_SECONDS
          ? "FOCUS SESSION"
          : timerRunning
            ? "DEEP WORK"
            : "PAUSED"
    }

    const dashLabel =
      timerSeconds === WORK_SECONDS
        ? "FOCUS SESSION"
        : timerRunning
          ? "DEEP WORK"
          : "PAUSED"
    setText("dashTimerLabel", dashLabel)

    updateTimerClock()
  }

  function updateTimerClock() {
    const el = document.getElementById("timerClock")
    if (el) el.textContent = get12hr()

    setText("dashTimerClock", get12hr())
  }

  function updateSessionDots() {
    const state = store.getState()
    const today = new Date().toDateString()
    const count = state.sessionsDate === today ? state.sessionsToday || 0 : 0
    document
      .querySelectorAll(".session-dot")
      .forEach((d, i) => d.classList.toggle("done", i < count))
  }

  function completeSession() {
    store.setState((state) => {
      const today = new Date().toDateString()
      if (state.sessionsDate !== today) {
        state.sessionsToday = 0
        state.sessionsDate = today
      }
      state.sessions = (state.sessions || 0) + 1
      state.sessionsToday = Math.min((state.sessionsToday || 0) + 1, 4)
      updateStreak(state)
    })
    updateSessionDots()
  }

  function init() {
    updateTimerDisplay()
    updateSessionDots()
    setInterval(updateTimerClock, 30000)
  }

  return {
    init,
    isRunning,
    getSeconds,
    toggleTimerModal,
    closeTimerModal,
    startStop,
    reset,
    updateTimerDisplay,
    updateTimerClock,
    updateSessionDots,
    completeSession,
  }
}
