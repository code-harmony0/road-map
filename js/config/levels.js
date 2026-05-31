/**
 * Level Configuration
 * Re-exports from content/ (single source of truth)
 */

import { LEVELS } from "../content/index.js"

export { LEVELS }

/**
 * Get current level based on XP
 * @param {number} xp - Current XP
 * @returns {object} Level object
 */
export function getLevel(xp) {
  return (
    LEVELS.slice()
      .reverse()
      .find((l) => xp >= l.xp) || LEVELS[0]
  )
}

/**
 * Get next level info
 * @param {number} xp - Current XP
 * @returns {object|null} Next level or null if at max
 */
export function getNextLevel(xp) {
  const current = getLevel(xp)
  return LEVELS.find((l) => l.level === current.level + 1) || null
}
