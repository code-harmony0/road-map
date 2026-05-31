/**
 * Gamification Module
 * Handles XP, levels, and boss battle logic
 */

import { getLevel, LEVELS } from "../config/levels.js"
import { state } from "../core/State.js"
import { eventBus, EVENTS } from "../core/EventBus.js"
import { findMilestone } from "../config/milestones.js"
import { shootConfetti } from "./Confetti.js"
import { toast } from "../ui/Toast.js"

let lastLevel = 1

/**
 * Initialize gamification system
 */
export function initGamification() {
  lastLevel = getCurrentLevel().level

  // Listen for task toggles to check boss battles
  eventBus.on(EVENTS.TASK_TOGGLED, ({ key, isDone }) => {
    if (isDone) {
      checkBossDefeat(key)
    } else {
      checkBossRevoke(key)
    }
  })

  // Listen for XP changes to check level ups
  eventBus.on(EVENTS.XP_CHANGED, ({ xp }) => {
    checkLevelUp(xp)
  })
}

/**
 * Get current level info
 * @returns {object} Current level object
 */
export function getCurrentLevel() {
  return getLevel(state.get().xp)
}

/**
 * Add XP and check for level up
 * @param {number} amount - XP amount to add
 */
export function addXP(amount) {
  state.addXP(amount)
}

/**
 * Check and handle level up
 * @param {number} xp - Current XP
 */
function checkLevelUp(xp) {
  const newLevel = getLevel(xp)
  if (newLevel.level > lastLevel) {
    lastLevel = newLevel.level
    setTimeout(() => {
      toast(`LEVEL UP! You are now Level ${newLevel.level}!`)
      shootConfetti()
    }, 500)
    eventBus.emit(EVENTS.LEVEL_UP, newLevel)
  }
}

/**
 * Check if boss should be defeated
 * @param {string} taskKey - Task key that was toggled
 */
function checkBossDefeat(taskKey) {
  const wid = taskKey.split("_")[0]
  const milestone = findMilestone(wid)

  if (milestone && state.isMilestoneComplete(milestone)) {
    // Boss defeated!
    state.addXP(milestone.boss.reward)
    toast(`Boss Defeated: ${milestone.boss.name}! +${milestone.boss.reward} XP`)
    shootConfetti()
    eventBus.emit(EVENTS.BOSS_DEFEATED, milestone)
  }
}

/**
 * Check if boss reward should be revoked
 * @param {string} taskKey - Task key that was unchecked
 */
function checkBossRevoke(taskKey) {
  const wid = taskKey.split("_")[0]
  const milestone = findMilestone(wid)

  if (milestone) {
    // Check if all other tasks are still done
    const wasAllDone = milestone.tasks.every((_, i) => {
      if (`${wid}_${i}` === taskKey) return true
      return state.get().tasks[`${wid}_${i}`]
    })

    if (wasAllDone) {
      // Remove boss reward
      state.addXP(-milestone.boss.reward)
    }
  }
}

/**
 * Get progress to next level
 * @returns {object} Progress info with current, next, and percentage
 */
export function getLevelProgress() {
  const currentXP = state.get().xp
  const current = getLevel(currentXP)
  const next = LEVELS.find((l) => l.level === current.level + 1)

  if (!next) {
    return { current, percentage: 100, remaining: 0 }
  }

  const range = next.xp - current.xp
  const progress = currentXP - current.xp
  const percentage = Math.min(100, Math.round((progress / range) * 100))

  return {
    current,
    next,
    percentage,
    remaining: next.xp - currentXP,
  }
}
