/**
 * Filter Module
 * Handles filtering the combined question list by category and mastery.
 */

import { rnQuestions } from './data/rn-questions.js';
import { behavioralQuestions } from './data/behavioral.js';
import { systemDesignQuestions } from './data/system-design.js';
import { backendQuestions } from './data/backend-questions.js';
import { platformQuestions } from './data/platform-questions.js';
import { DEFAULT_ROADMAP } from '../content/roadmaps.js';

export const allQuestions = [
  ...rnQuestions,
  ...behavioralQuestions,
  ...systemDesignQuestions,
  ...backendQuestions,
  ...platformQuestions
];

/**
 * Which question categories each roadmap actually prepares you for. Prep should
 * follow the roadmap you are running, not show you TurboModule questions while
 * you are still on Rung 1.
 */
export const ROADMAP_CATEGORIES = {
  v1: ['React Native Core', 'Performance', 'Behavioral', 'Mobile System Design'],
  v2: ['React Native Core', 'Mobile Platform', 'Performance', 'Behavioral', 'Mobile System Design', 'Backend & Data'],
  v3: ['Backend & Data', 'Mobile Platform', 'AI Engineering', 'Mobile System Design']
};

/**
 * The roadmap the main app is currently on. Read from its own storage key so
 * the two pages stay in step without a shared runtime.
 * @returns {string} Roadmap id
 */
export function activeRoadmapId() {
  try {
    const raw = localStorage.getItem('rn_escape_velocity_v3');
    return raw ? JSON.parse(raw).roadmap || DEFAULT_ROADMAP : DEFAULT_ROADMAP;
  } catch {
    return DEFAULT_ROADMAP;
  }
}

export function getFilteredQuestions(state, categoryFilter = 'all', masteryFilter = 'all', searchQuery = '') {
  return allQuestions.filter(q => {
    // Category Match
    let catMatch = true;
    if (categoryFilter === 'rn') catMatch = q.category.includes('React Native') || q.category.includes('Performance');
    else if (categoryFilter === 'behavioral') catMatch = q.category === 'Behavioral';
    else if (categoryFilter === 'system-design') catMatch = q.category === 'Mobile System Design';
    else if (categoryFilter === 'backend') catMatch = q.category === 'Backend & Data';
    else if (categoryFilter === 'platform') catMatch = q.category === 'Mobile Platform';
    else if (categoryFilter === 'ai') catMatch = q.category === 'AI Engineering';
    else if (categoryFilter === 'roadmap') {
      catMatch = (ROADMAP_CATEGORIES[activeRoadmapId()] || []).includes(q.category);
    }
    
    // Mastery Match
    let masteryMatch = true;
    const m = state.mastery[q.id];
    if (masteryFilter === 'gaps') masteryMatch = (m === 'gap' || !m);
    else if (masteryFilter === 'studying') masteryMatch = (m === 'studying');
    else if (masteryFilter === 'mastered') masteryMatch = (m === 'mastered');
    else if (masteryFilter === 'due') {
      const last = state.lastPracticed[q.id];
      if (!last) masteryMatch = true; // Never practiced is due
      else {
        const daysSince = (Date.now() - last) / (1000 * 60 * 60 * 24);
        masteryMatch = daysSince > 7; // Due if older than 7 days
      }
    }

    // Search Match
    let searchMatch = true;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      searchMatch = q.title.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query);
    }

    return catMatch && masteryMatch && searchMatch;
  });
}
