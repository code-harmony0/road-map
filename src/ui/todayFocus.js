import { getCurrentDayInfo, getTodaysTasks } from "../domain/roadmap.js"

export function renderTodayFocus(weeks, state) {
  const container = document.getElementById("todayTasks")
  const dateEl = document.getElementById("todayDate")
  if (!container || !dateEl) return

  dateEl.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })

  const dayInfo = getCurrentDayInfo(state.startDate)
  if (!dayInfo.isValid) {
    container.innerHTML =
      '<div class="today-empty neon-prompt">Set your Start Date to unlock today\'s missions.</div>'
    return
  }

  const todaysTasks = getTodaysTasks(weeks, state, dayInfo)
  if (!todaysTasks.length) {
    container.innerHTML =
      '<div class="today-empty">No missions scheduled for today.</div>'
    return
  }

  const allDone = todaysTasks.every((t) => t.done)
  if (allDone) {
    container.innerHTML =
      '<div class="today-empty neon-success">All daily missions complete!</div>'
    return
  }

  container.innerHTML = todaysTasks
    .map((task) => {
      const doneClass = task.done ? "tt-done" : ""
      const timeInfo = task.time ? `<span class="tt-time">${task.time}</span>` : ""

      return `
        <div class="today-task ${doneClass} tt-current" data-action="toggleTask" data-key="${task.key}">
          <div class="tt-left">
            <span class="tt-week">W${task.activeWeek} · D${task.activeDay}</span>
            <div class="tt-content">
              <div class="tt-text">${task.text}</div>
              ${task.why ? `<div class="tt-why">${task.why}</div>` : ""}
              ${timeInfo}
            </div>
          </div>
          <div class="tt-check">
            ${task.done ? '<span class="tt-check-icon">✓</span>' : ""}
          </div>
        </div>
      `
    })
    .join("")
}
