/**
 * Focus timer: a 50-minute sprint in the top bar. Held in memory only, and it
 * updates its own text, so a running timer never repaints the page.
 */
import { toast } from '../ui/Toast.js';

const SPRINT = 50 * 60;
let remaining = SPRINT;
let handle = null;

const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

function paint() {
  const text = document.getElementById('timerText');
  const btn = document.getElementById('timerToggle');
  const reset = document.getElementById('timerReset');
  if (text) text.textContent = fmt(remaining);
  document.title = handle !== null ? `${fmt(remaining)} · Roadmap` : 'Roadmap';
  if (btn) {
    const running = handle !== null;
    btn.dataset.running = String(running);
    btn.setAttribute('aria-label', running ? 'Pause focus timer' : 'Start 50-minute focus timer');
    btn.querySelector('svg').innerHTML = running ? '<path d="M4.5 3h2.6v10H4.5zM8.9 3h2.6v10H8.9z"/>' : '<path d="M5 3.2v9.6l7.6-4.8z"/>';
  }
  if (reset) reset.hidden = remaining === SPRINT && handle === null;
}

function stop() {
  clearInterval(handle);
  handle = null;
}

export function toggleTimer() {
  if (handle !== null) {
    stop();
  } else {
    handle = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        stop();
        remaining = SPRINT;
        toast('Sprint done. Take a break, then pick the next task.');
      }
      paint();
    }, 1000);
  }
  paint();
}

export function resetTimer() {
  stop();
  remaining = SPRINT;
  paint();
}

export function initTimer() {
  paint();
}
