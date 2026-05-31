/**
 * Milestone Configuration
 * Re-exports from content/ (single source of truth)
 */

import {
  PHASE_1_WEEKS as M1_WEEKS,
  PLAN_B_WEEKS,
  PHASE_2_MONTHS as M2_MONTHS,
  PHASE_3_STAFF as M3_STAFF,
} from "../content/index.js"

export { M1_WEEKS, PLAN_B_WEEKS, M2_MONTHS, M3_STAFF }

/**
 * Get all milestone data combined
 * @returns {object} Object with all phases
 */
export function getAllMilestones() {
  return {
    m1: M1_WEEKS,
    planB: PLAN_B_WEEKS,
    m2: M2_MONTHS,
    m3: M3_STAFF,
  }
}

/**
 * Find a week/month by ID
 * @param {string} id - Week/Month ID
 * @returns {object|null} Milestone object or null
 */
export function findMilestone(id) {
  return (
    M1_WEEKS.find((x) => x.id === id) ||
    PLAN_B_WEEKS.find((x) => x.id === id) ||
    M2_MONTHS.find((x) => x.id === id) ||
    M3_STAFF.find((x) => x.id === id) ||
    null
  )
}
