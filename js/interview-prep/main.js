/**
 * Main Entry Point for Interview Prep App
 */

import { getPrepState, saveStories } from './store.js';
import { getFilteredQuestions, allQuestions } from './filter.js';
import { renderDashboard, renderQuestions, renderStories, renderLog } from './renderer.js';
import { setupLogger } from './logger.js';
import { defaultStories } from './data/stories.js';

let currentState;
let currentCatFilter = 'roadmap';
let currentMasteryFilter = 'all';

function init() {
  currentState = getPrepState();
  
  // Seed stories if null
  if (!currentState.customStories) {
    currentState = saveStories(defaultStories);
  }

  // Initial Renders
  renderDashboard(currentState);
  renderStories(currentState.customStories);
  renderLog(currentState);
  refreshQuestions();
  setupLogger();

  // Setup Filters
  setupFilters();
}

function refreshQuestions() {
  const searchQuery = document.getElementById('searchBar').value;
  const filtered = getFilteredQuestions(currentState, currentCatFilter, currentMasteryFilter, searchQuery);
  renderQuestions(filtered, currentState);
}

function setupFilters() {
  // Category Filters
  const catItems = document.querySelectorAll('.cat-filter');
  catItems.forEach(item => {
    item.addEventListener('click', (e) => {
      catItems.forEach(i => i.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentCatFilter = e.currentTarget.dataset.val;
      refreshQuestions();
    });
  });

  // Mastery Filters
  const mastItems = document.querySelectorAll('.mast-filter');
  mastItems.forEach(item => {
    item.addEventListener('click', (e) => {
      mastItems.forEach(i => i.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentMasteryFilter = e.currentTarget.dataset.val;
      refreshQuestions();
    });
  });

  // Search
  document.getElementById('searchBar').addEventListener('input', () => {
    refreshQuestions();
  });
}

document.addEventListener('DOMContentLoaded', init);
