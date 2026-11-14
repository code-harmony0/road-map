/**
 * Storage: localStorage persistence with error handling.
 * `tasks` and `homeGates` keep their old names so saved progress carries over.
 */
const STORAGE_KEY = 'rn_escape_velocity_v3';

// Keys from earlier versions of the UI. Dropped on load.
const LEGACY_KEYS = ['xp', 'xpByRoadmap', 'weeksCollapsed', 'milestonesCollapsed', 'jobSearch', 'timerSecs', 'startDate', 'roadmap', 'view', 'weeksOpen'];

export function getDefaultState() {
  return { tasks: {}, homeGates: {}, selected: null };
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const loaded = { ...getDefaultState(), ...JSON.parse(raw) };
      LEGACY_KEYS.forEach((k) => delete loaded[k]);
      return loaded;
    }
  } catch (e) {
    console.error('Failed to load state from localStorage:', e);
  }
  return getDefaultState();
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state to localStorage:', e);
  }
}
