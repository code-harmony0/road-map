/**
 * Main Entry Point
 * Initializes the application and binds all modules
 */

import { state } from './core/State.js';
import { eventBus, EVENTS } from './core/EventBus.js';
import { getLevel } from './config/levels.js';
import { bindAction } from './config/commands.js';

import { initGamification, getCurrentLevel } from './features/Gamification.js';
import { initJobTracker } from './features/JobTracker.js';
import { renderTimerUI, openTimer, closeTimer, toggleTimer, resetTimer } from './features/Timer.js';
import { renderFocus } from './features/FocusSection.js';
import { applyThree } from './features/JobTracker.js';
import { toggleTask } from './features/TaskManager.js';

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

  console.log('Escape Velocity initialized');
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

  bindAction('m1', () => scrollToId('m1'));
  bindAction('m2', () => scrollToId('m2'));
  bindAction('m3', () => scrollToId('m3'));
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
    xpDisp.textContent = `${state.get().xp} XP`;
  }
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
window.closeSettings = closeSettings;
window.applyThree = applyThree;
