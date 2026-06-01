/**
 * Timer Module
 * Deep work sprint timer
 */

import { state } from '../core/State.js';
import { eventBus, EVENTS } from '../core/EventBus.js';
import { addXP } from './Gamification.js';
import { shootConfetti } from './Confetti.js';
import { toast } from '../ui/Toast.js';

const DEFAULT_SECONDS = 3000; // 50 minutes

let timerInterval = null;
let isRunning = false;

/**
 * Open timer modal
 */
export function openTimer() {
  const modal = document.getElementById('timerModal');
  if (modal) {
    modal.classList.add('open');
  }
  renderTimerUI();
}

/**
 * Close timer modal
 */
export function closeTimer() {
  const modal = document.getElementById('timerModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

/**
 * Toggle timer start/pause
 */
export function toggleTimer() {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

/**
 * Start the timer
 */
function startTimer() {
  isRunning = true;
  document.body.classList.add('focus-mode');
  updateStartButton();

  timerInterval = setInterval(() => {
    const currentSecs = state.get().timerSecs;

    if (currentSecs <= 0) {
      completeTimer();
      return;
    }

    state.setTimer(currentSecs - 1);
    renderTimerUI();
  }, 1000);
}

/**
 * Pause the timer
 */
function pauseTimer() {
  isRunning = false;
  clearInterval(timerInterval);
  document.body.classList.remove('focus-mode');
  updateStartButton();
  renderTimerUI();
}

/**
 * Reset timer to default
 */
export function resetTimer() {
  pauseTimer();
  state.setTimer(DEFAULT_SECONDS);
  document.body.classList.remove('focus-mode');
  renderTimerUI();
}

/**
 * Timer completed
 */
function completeTimer() {
  pauseTimer();
  state.setTimer(DEFAULT_SECONDS);
  toast('Sprint complete! +100 XP');
  addXP(100);
  shootConfetti();
  eventBus.emit(EVENTS.TIMER_COMPLETE, null);
}

/**
 * Update start button text based on state
 */
function updateStartButton() {
  const btn = document.getElementById('timerStartBtn');
  if (btn) {
    btn.innerHTML = isRunning
      ? '<i class="ph-bold ph-pause"></i> Pause'
      : '<i class="ph-bold ph-play"></i> Start Sprint';
  }
}

/**
 * Render timer UI
 */
export function renderTimerUI() {
  const seconds = state.get().timerSecs;
  const formatted = formatTime(seconds);

  // Update large display
  const lgDisplay = document.getElementById('timerDisplayLg');
  if (lgDisplay) {
    lgDisplay.textContent = formatted;
  }

  // Update mini display
  const miniDisplay = document.getElementById('miniTimerDisp');
  if (miniDisplay) {
    miniDisplay.textContent = formatted;
  }

  // Update mini button state
  const miniBtn = document.getElementById('miniTimerBtn');
  if (miniBtn) {
    miniBtn.classList.toggle('running', isRunning);
  }
}

/**
 * Format seconds to MM:SS
 * @param {number} seconds - Seconds to format
 * @returns {string} Formatted time
 */
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Check if timer is currently running
 * @returns {boolean} True if running
 */
export function isTimerRunning() {
  return isRunning;
}
