/**
 * Focus Section Module
 * Renders and manages the "Today's Focus" section
 */

import { state } from "../core/State.js"
import { activePhases, activeWeeks, activeRoadmap } from "../config/milestones.js"
import { toggleTask } from "./TaskManager.js"

/**
 * Render the focus section
 */
export function renderFocus() {
  const container = document.getElementById("todayFocus")
  if (!container) return

  const { tasks, startDate } = state.get()
  const incompleteTasks = []

  // Collect incomplete tasks in roadmap order.
  activeWeeks().forEach((w) => {
    w.tasks.forEach((t, i) => {
      const key = t.id || `${w.id}_${i}`
      if (!tasks[key]) {
        incompleteTasks.push({
          key,
          text: t.text,
          xp: t.xp,
          num: w.num,
        })
      }
    })
  })

  // Generate pace nudge HTML
  let paceNudgeHtml = ""
  if (!activeRoadmap().paced) {
    // A capability roadmap has no weeks to be behind on.
    paceNudgeHtml = ""
  } else if (startDate) {
    paceNudgeHtml = generatePaceNudge(startDate, tasks)
  } else {
    paceNudgeHtml = `
      <div class="pace-nudge">
        <i class="ph-fill ph-warning"></i>
        Set a start date to track your interview-readiness pace.
      </div>
    `
  }

  // Render content
  if (incompleteTasks.length === 0) {
    container.innerHTML =
      paceNudgeHtml +
      `
      <div class="focus-empty">
        <i class="ph-fill ph-party" style="font-size: 2.5rem; margin-bottom: 0.5rem;"></i>
        <span>Execution queue is clear.</span>
      </div>
    `
  } else {
    const listHtml = incompleteTasks
      .slice(0, 4)
      .map(
        (item, index) => `
      <div class="focus-item" 
           style=""
           onclick="window.handleFocusTask('${item.key}', ${item.xp})">
        <div class="task-cb" style="width:20px; height:20px; border-radius:6px; pointer-events:none;"></div>
        <span style="flex:1; font-weight: ${index === 0 ? "700" : "500"};">${item.text}</span>
        <span style="color:var(--signal); font-size:0.72rem; font-family:var(--font-data); font-weight:700;
                     background: var(--sunk); padding: 2px 6px; border-radius: 2px;">
          +${item.xp}
        </span>
      </div>
    `,
      )
      .join("")

    container.innerHTML = paceNudgeHtml + listHtml
  }
}

/**
 * Generate pace tracking nudge
 * @param {string} startDate - ISO start date
 * @param {object} tasks - Tasks state
 * @returns {string} HTML string
 */
function generatePaceNudge(startDate, tasks) {
  const daysPassed = Math.floor((new Date() - new Date(startDate)) / 86400000)

  if (daysPassed < 0) {
    return ""
  }

  const expectedWeek = Math.floor(daysPassed / 7) + 1
  let completedWeeks = 0

  activePhases().slice(0, 2).flatMap((p) => p.weeks).forEach((w) => {
    const allDone = w.tasks.every((task, i) => tasks[task.id || `${w.id}_${i}`])
    if (allDone) completedWeeks++
  })

  if (completedWeeks >= expectedWeek) {
    return `
      <div class="pace-nudge good">
        <i class="ph-fill ph-rocket-launch"></i>
        Ahead of schedule! Expected Week: ${expectedWeek} | Done: ${completedWeeks}
      </div>
    `
  } else {
    return `
      <div class="pace-nudge">
        <i class="ph-fill ph-warning-circle"></i>
        Catch-up Mode: Week ${expectedWeek}, but finished ${completedWeeks}. Focus!
      </div>
    `
  }
}

/**
 * Handle task click in focus section
 * @param {string} key - Task key
 * @param {number} xp - XP value
 */
export function handleFocusTask(key, xp) {
  toggleTask(key, xp)
  renderFocus()
}

// Expose to window for inline onclick handlers
if (typeof window !== "undefined") {
  window.handleFocusTask = handleFocusTask
}
