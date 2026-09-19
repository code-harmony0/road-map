/**
 * Main Entry Point
 * Initializes the application and binds all modules
 */

import { state } from './core/State.js';
import { eventBus, EVENTS } from './core/EventBus.js';
import { getLevel } from './config/levels.js';
import { bindAction } from './config/commands.js';

import { initGamification, getCurrentLevel } from './features/Gamification.js';
import { initJobTracker, updateJST } from './features/JobTracker.js';
import { renderTimerUI, openTimer, closeTimer, toggleTimer, resetTimer } from './features/Timer.js';
import { renderFocus } from './features/FocusSection.js';
import { applyThree } from './features/JobTracker.js';
import { toggleTask } from './features/TaskManager.js';
import { cycleRoadmap } from './features/RoadmapSwitcher.js';

import { renderContent } from './ui/Renderer.js';
import { updateAllMilestonesDOM, scrollToId } from './ui/Sidebar.js';
import { openSettings, closeSettings } from './ui/Modal.js';
import { initCommandPalette } from './ui/CommandPalette.js';

/**
 * Initialize the application
 */
function init() {
  // Initialize state
  const currentState = state.get();

  // Initialize gamification system
  initGamification();

  // Initialize job tracker
  initJobTracker();

  // Initialize command palette
  initCommandPalette();

  // Bind command palette actions
  bindCommandActions();

  // Subscribe to state changes for UI updates
  eventBus.on(EVENTS.STATE_CHANGED, () => {
    updateTopBar();
    renderContent();
    renderFocus();
  });

  // Initial render
  updateTopBar();
  renderContent();
  renderFocus();
  updateAllMilestonesDOM();
  renderTimerUI();

  console.log('Senior Roadmap initialized');
}

/**
 * Bind command palette actions
 */
function bindCommandActions() {
  bindAction('timer', () => {
    openTimer();
    toggleTimer();
  });

  bindAction('apply', () => {
    applyThree();
  });

  bindAction('m0', () => scrollToId('m0'));
  bindAction('m1', () => scrollToId('m1'));
  bindAction('m2', () => scrollToId('m2'));
  bindAction('m3', () => scrollToId('m3'));
  bindAction('roadmap', () => cycleRoadmap());
  bindAction('settings', () => openSettings());
}

/**
 * Update top bar display
 */
function updateTopBar() {
  const lvl = getCurrentLevel();
  const levelDisp = document.getElementById('levelDisp');
  const xpDisp = document.getElementById('xpDisp');

  if (levelDisp) {
    levelDisp.textContent = `Lvl ${lvl.level}: ${lvl.title}`;
  }
  if (xpDisp) {
    countTo(xpDisp, state.get().xp);
  }
}

/**
 * Count the XP figure up to its new value. The only authored motion in the app:
 * the number you are here to move is the number that moves.
 * @param {HTMLElement} el - Element displaying the figure
 * @param {number} target - Value to land on
 */
function countTo(el, target) {
  const from = parseInt(el.dataset.value || '0', 10);
  el.dataset.value = String(target);

  if (from === target || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = `${target} XP`;
    return;
  }

  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / 480, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = `${Math.round(from + (target - from) * eased)} XP`;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/**
 * Toggle the quick-action FAB menu.
 * index.html has always called this from onclick; it was never exported.
 */
function toggleFab() {
  const fab = document.getElementById('quickFab');
  if (fab) fab.classList.toggle('open');
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Expose necessary functions for inline handlers
window.toggleTask = toggleTask;
window.openTimer = openTimer;
window.closeTimer = closeTimer;
window.toggleTimer = toggleTimer;
window.resetTimer = resetTimer;
window.openSettings = openSettings;
window.cycleRoadmap = cycleRoadmap;
window.closeSettings = closeSettings;
window.applyThree = applyThree;
window.updateJST = updateJST;
window.toggleFab = toggleFab;
