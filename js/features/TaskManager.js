/**
 * Task Manager Module
 * Handles task toggling and related operations
 */

import { state } from "../core/State.js"
import { eventBus, EVENTS } from "../core/EventBus.js"
import { addXP } from "./Gamification.js"
import { M1_WEEKS, M2_MONTHS, M3_STAFF } from "../config/milestones.js"

/**
 * Toggle task completion
 * @param {string} key - Task key (e.g., 'w1_0')
 * @param {number} xpValue - XP value for this task
 * @returns {boolean} New completion status
 */
export function toggleTask(key, xpValue) {
  const isDone = state.toggleTask(key)

  if (isDone) {
    addXP(xpValue)
    if (navigator.vibrate) {
      navigator.vibrate(40)
    }
  } else {
    // Remove XP when unchecking
    const currentXP = state.get().xp
    state.set({ xp: Math.max(0, currentXP - xpValue) }, true)
  }

  return isDone
}

/**
 * Check if a task is complete
 * @param {string} key - Task key
 * @returns {boolean} True if complete
 */
export function isTaskComplete(key) {
  return !!state.get().tasks[key]
}

/**
 * Get all incomplete tasks
 * @returns {Array} Array of incomplete task objects
 */
export function getIncompleteTasks() {
  const { tasks } = state.get()
  const allMilestones = [...M1_WEEKS, ...M2_MONTHS, ...M3_STAFF]
  const incomplete = []

  allMilestones.forEach((m) => {
    m.tasks.forEach((t, i) => {
      const key = `${m.id}_${i}`
      if (!tasks[key]) {
        incomplete.push({
          key,
          text: t.text,
          xp: t.xp,
          num: m.num,
          milestone: m,
        })
      }
    })
  })

  return incomplete
}
