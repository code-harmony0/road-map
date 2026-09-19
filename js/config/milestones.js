/**
 * Milestone Configuration
 * Resolves the ACTIVE roadmap (see content/roadmaps.js) into phase data.
 *
 * Everything downstream asks for phases through these functions rather than
 * importing a fixed set of arrays, so switching roadmaps is a state change.
 */

import { ROADMAPS, DEFAULT_ROADMAP, ROADMAP_IDS } from "../content/roadmaps.js"
import { state } from "../core/State.js"

/**
 * The currently selected roadmap object
 * @returns {object} Roadmap definition
 */
export function activeRoadmap() {
  return ROADMAPS[state.get().roadmap] || ROADMAPS[DEFAULT_ROADMAP]
}

/**
 * Phases of the active roadmap, in order (always 4)
 * @returns {Array} Phase objects with .weeks, .icon, .nav, .header
 */
export function activePhases() {
  return activeRoadmap().phases
}

/**
 * Every week/month card in the active roadmap, flattened in order
 * @returns {Array} Milestone objects
 */
export function activeWeeks() {
  return activePhases().flatMap((p) => p.weeks)
}

/**
 * Find a week/month by ID across ALL roadmaps.
 * Boss checks fire on task ids, which are globally unique, so this must not
 * be scoped to the active roadmap.
 * @param {string} id - Week/Month ID
 * @returns {object|null} Milestone object or null
 */
export function findMilestone(id) {
  for (const key of ROADMAP_IDS) {
    for (const phase of ROADMAPS[key].phases) {
      const found = phase.weeks.find((x) => x.id === id)
      if (found) return found
    }
  }
  return null
}

/**
 * Active milestone data keyed by section id
 * @returns {object} { m0, m1, m2, m3 }
 */
export function getAllMilestones() {
  const phases = activePhases()
  return { m0: phases[0].weeks, m1: phases[1].weeks, m2: phases[2].weeks, m3: phases[3].weeks }
}
