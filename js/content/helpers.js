/**
 * Content Helpers
 * Single Responsibility: Utility functions for content access
 */

import { PHASE_1_WEEKS } from './phases/phase1.js';
import { PHASE_0_WEEKS } from './phases/phase0.js';
import { PHASE_2_WEEKS } from './phases/phase2.js';
import { PHASE_3_WEEKS } from './phases/phase3.js';

/**
 * Find milestone by ID across all phases
 * @param {string} id - Milestone ID
 * @returns {object|null} Milestone object or null
 */
export function findMilestone(id) {
  return [...PHASE_0_WEEKS, ...PHASE_1_WEEKS, ...PHASE_2_WEEKS, ...PHASE_3_WEEKS].find(m => m.id === id) || null;
}

/**
 * Get all milestones grouped by phase
 * @returns {object} Object with m1, m2, m3 arrays
 */
export function getAllMilestones() {
  return {
    m0: PHASE_0_WEEKS,
    m1: PHASE_1_WEEKS,
    m2: PHASE_2_WEEKS,
    m3: PHASE_3_WEEKS
  };
}
