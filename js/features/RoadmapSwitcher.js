/**
 * Roadmap Switcher
 * Cycles the active roadmap and re-syncs the collapse/scroll chrome.
 * State change alone repaints content; this only handles what State can't see.
 */

import { state } from '../core/State.js';
import { ROADMAP_IDS, ROADMAPS, DEFAULT_ROADMAP } from '../content/roadmaps.js';
import { updateAllMilestonesDOM } from '../ui/Sidebar.js';
import { toast } from '../ui/Toast.js';

/**
 * Switch to the next roadmap in the registry
 * @returns {string} The roadmap id now active
 */
export function cycleRoadmap() {
  const current = state.get().roadmap || DEFAULT_ROADMAP;
  const next = ROADMAP_IDS[(ROADMAP_IDS.indexOf(current) + 1) % ROADMAP_IDS.length];

  state.setRoadmap(next);
  updateAllMilestonesDOM();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  toast(`Roadmap: ${ROADMAPS[next].name}`);

  return next;
}
