/**
 * Job Tracker Module
 * Handles job search metrics (applications, interviews, offers)
 */

import { state } from '../core/State.js';
import { eventBus, EVENTS } from '../core/EventBus.js';
import { shootConfetti } from './Confetti.js';
import { toast } from '../ui/Toast.js';

const GOALS = {
  applications: 50,
  interviews: 10,
  offers: 2
};

/**
 * Update job search stat
 * @param {string} field - Field to update ('applications', 'interviews', 'offers')
 * @param {number} value - New value
 */
export function updateJobStats(field, value) {
  state.updateJobStats(field, value);
  updateUI();
}

/**
 * Log 3 applications at once (quick action)
 */
export function applyThree() {
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
  const goal = GOALS[field] || 1;
  return Math.min(100, (stats[field] / goal) * 100);
}

/**
 * Update UI elements
 */
function updateUI() {
  const stats = state.get().jobSearch;

  // Update inputs
  const appInput = document.getElementById('jstApp');
  const intInput = document.getElementById('jstInt');

  if (appInput && document.activeElement !== appInput) {
    appInput.value = stats.applications;
  }
  if (intInput && document.activeElement !== intInput) {
    intInput.value = stats.interviews;
  }

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
}
