/**
 * Store Module for Interview Prep
 * Handles localStorage for mastery states, real logs, and stories.
 */

const PREP_KEY = 'rn_interview_prep_v1';

export function getPrepState() {
  try {
    const raw = localStorage.getItem(PREP_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load prep state:', e);
  }
  return {
    mastery: {}, // { "rn-001": "mastered" }
    lastPracticed: {}, // { "rn-001": 1716301200000 }
    realLog: [],
    customStories: null // Will fall back to defaultStories if null
  };
}

export function savePrepState(state) {
  try {
    localStorage.setItem(PREP_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save prep state:', e);
  }
}

export function updateMastery(questionId, status) {
  const state = getPrepState();
  state.mastery[questionId] = status;
  state.lastPracticed[questionId] = Date.now();
  savePrepState(state);
  return state;
}

export function logRealInterview(questionId, questionText, company, notes) {
  const state = getPrepState();
  state.realLog.push({
    id: Date.now().toString(),
    questionId,
    questionText,
    company,
    notes,
    date: Date.now()
  });
  savePrepState(state);
  return state;
}

export function saveStories(stories) {
  const state = getPrepState();
  state.customStories = stories;
  savePrepState(state);
  return state;
}
