/**
 * Job Tracker Module
 * Handles job search metrics (applications, interviews, offers)
 */

import { state } from '../core/State.js';
import { eventBus, EVENTS } from '../core/EventBus.js';
import { shootConfetti } from './Confetti.js';
import { toast } from '../ui/Toast.js';
import { activeRoadmap } from '../config/milestones.js';

const FALLBACK_GOALS = { applications: 50, interviews: 10, offers: 2 };

/** Snapshot from scripts/sync-career-ops.mjs; when present, career-ops is the tracker. */
let synced = null;

/**
 * Pipeline goals for the active roadmap. A 33-application plan should not show
 * a 50-application goal.
 * @returns {object} { applications, interviews, offers }
 */
export function goals() {
  return activeRoadmap().goals || FALLBACK_GOALS;
}

/**
 * Update job search stat
 * @param {string} field - Field to update ('applications', 'interviews', 'offers')
 * @param {number} value - New value
 */
export function updateJobStats(field, value) {
  state.updateJobStats(field, value);
  updateUI();
}

/** index.html calls this name from its oninput attributes. */
export const updateJST = updateJobStats;

/**
 * Log 3 applications at once (quick action)
 */
export function applyThree() {
  if (synced) {
    toast('Log applications in career-ops. This panel syncs from it.');
    return;
  }
  state.incrementApplications(3);
  updateUI();
  toast('+3 Apps Logged! Get it!');
  shootConfetti();
}

/**
 * Get current job stats
 * @returns {object} Job stats object
 */
export function getJobStats() {
  return { ...state.get().jobSearch };
}

/**
 * Get progress percentage for a field
 * @param {string} field - Field name
 * @returns {number} Percentage (0-100)
 */
export function getProgress(field) {
  const stats = state.get().jobSearch;
  const goal = goals()[field] || 1;
  return Math.min(100, (stats[field] / goal) * 100);
}

/**
 * Update UI elements
 */
function updateUI() {
  const stats = state.get().jobSearch;

  // Update inputs
  const inputs = { applications: 'jstApp', interviews: 'jstInt', offers: 'jstOff' };

  Object.entries(inputs).forEach(([field, id]) => {
    const el = document.getElementById(id);
    if (el && document.activeElement !== el) {
      el.value = stats[field];
    }
  });

  // Update progress bars
  const appBar = document.getElementById('jstAppBar');
  const intBar = document.getElementById('jstIntBar');
  const offBar = document.getElementById('jstOffBar');

  if (appBar) appBar.style.width = getProgress('applications') + '%';
  if (intBar) intBar.style.width = getProgress('interviews') + '%';
  if (offBar) offBar.style.width = getProgress('offers') + '%';

  // Update mini view
  const miniApp = document.getElementById('jstMiniApp');
  const miniInt = document.getElementById('jstMiniInt');

  if (miniApp) miniApp.textContent = stats.applications;
  if (miniInt) miniInt.textContent = stats.interviews;
}

/**
 * Initialize job tracker UI
 */
export function initJobTracker() {
  updateUI();
  eventBus.on(EVENTS.STATE_CHANGED, updateUI);
  loadCareerOps();
}

/**
 * Pull counts from career-ops.json (written by roadmap.command on launch).
 * Missing file means career-ops isn't set up: the panel stays manual.
 */
async function loadCareerOps() {
  try {
    const res = await fetch('career-ops.json', { cache: 'no-store' });
    if (!res.ok) return;
    synced = await res.json();
  } catch {
    return;
  }

  ['applications', 'interviews', 'offers'].forEach((f) => state.updateJobStats(f, synced[f]));
  ['jstApp', 'jstInt', 'jstOff'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.readOnly = true;
      el.title = 'Synced from career-ops';
    }
  });

  const cta = document.querySelector('.jst-cta');
  if (cta) cta.style.display = 'none';

  const title = document.querySelector('.jst-title');
  if (title && !document.querySelector('.jst-sync')) {
    const note = document.createElement('div');
    note.className = 'jst-sync';
    const when = new Date(synced.syncedAt).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
    note.textContent = `Synced from career-ops · ${when}`;
    title.after(note);
  }
  updateUI();
}
