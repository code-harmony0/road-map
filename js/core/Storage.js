/**
 * Storage Module
 * Handles all localStorage operations with error handling
 * Single Responsibility: Abstracts persistence layer
 */

const STORAGE_KEY = 'rn_escape_velocity_v3';

/**
 * Default application state
 * @returns {object} Default state object
 */
export function getDefaultState() {
  return {
    tasks: {},
    xp: 0,
    weeksCollapsed: {},
    milestonesCollapsed: { m2: true, m3: true },
    jobSearch: { applications: 0, interviews: 0, offers: 0 },
    timerSecs: 1500,
    startDate: null
  };
}

/**
 * Load state from localStorage
 * @returns {object} Loaded state or default state
 */
export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return { ...getDefaultState(), ...JSON.parse(raw) };
    }
  } catch (e) {
    console.error('Failed to load state from localStorage:', e);
  }
  return getDefaultState();
}

/**
 * Save state to localStorage
 * @param {object} state - State to save
 */
export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state to localStorage:', e);
  }
}

/**
 * Export state as JSON file download
 * @param {object} state - State to export
 */
export function exportState(state) {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'rn-roadmap-backup.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Clear all stored data
 */
export function clearState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear localStorage:', e);
  }
}
