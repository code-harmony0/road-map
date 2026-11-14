/**
 * Filter Module
 * Handles filtering the combined question list by category and mastery.
 */

import { rnQuestions } from './data/rn-questions.js';
import { behavioralQuestions } from './data/behavioral.js';
import { systemDesignQuestions } from './data/system-design.js';
import { backendQuestions } from './data/backend-questions.js';
import { platformQuestions } from './data/platform-questions.js';

export const allQuestions = [
  ...rnQuestions,
  ...behavioralQuestions,
  ...systemDesignQuestions,
  ...backendQuestions,
  ...platformQuestions
];

/** The categories this plan prepares you for (the "My Roadmap" filter and dashboard). */
export const PREP_CATEGORIES = ['React Native Core', 'Mobile Platform', 'Performance', 'Behavioral', 'Mobile System Design', 'Backend & Data'];

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
      catMatch = PREP_CATEGORIES.includes(q.category);
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
