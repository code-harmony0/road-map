/**
 * Milestone Configuration
 * Re-exports from content/ (single source of truth)
 */

import {
  PHASE_0_WEEKS as M0_WEEKS,
  PHASE_1_WEEKS as M1_WEEKS,
  PHASE_2_WEEKS as M2_WEEKS,
  PHASE_3_WEEKS as M3_WEEKS,
} from "../content/index.js"

export { M0_WEEKS, M1_WEEKS, M2_WEEKS, M3_WEEKS }

/**
 * Get all milestone data combined
 * @returns {object} Object with all phases
 */
export function getAllMilestones() {
  return {
    m0: M0_WEEKS,
    m1: M1_WEEKS,
    m2: M2_WEEKS,
    m3: M3_WEEKS,
  }
}

/**
 * Find a week/month by ID
 * @param {string} id - Week/Month ID
 * @returns {object|null} Milestone object or null
 */
export function findMilestone(id) {
  return (
    M0_WEEKS.find((x) => x.id === id) ||
    M1_WEEKS.find((x) => x.id === id) ||
    M2_WEEKS.find((x) => x.id === id) ||
    M3_WEEKS.find((x) => x.id === id) ||
    null
  )
}
