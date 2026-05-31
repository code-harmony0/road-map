/**
 * Content Helpers
 * Single Responsibility: Utility functions for content access
 */

import { PHASE_1_WEEKS } from './phases/phase1.js';
import { PHASE_2_MONTHS } from './phases/phase2.js';
import { PHASE_3_STAFF } from './phases/phase3.js';

/**
 * Find milestone by ID across all phases
 * @param {string} id - Milestone ID
 * @returns {object|null} Milestone object or null
 */
export function findMilestone(id) {
  return [...PHASE_1_WEEKS, ...PHASE_2_MONTHS, ...PHASE_3_STAFF].find(m => m.id === id) || null;
}

/**
 * Get all milestones grouped by phase
 * @returns {object} Object with m1, m2, m3 arrays
 */
export function getAllMilestones() {
  return {
    m1: PHASE_1_WEEKS,
    m2: PHASE_2_MONTHS,
    m3: PHASE_3_STAFF
  };
}
