/**
 * Toast Module
 * Notification system
 */

const DEFAULT_DURATION = 3000;

/**
 * Show a toast notification
 * @param {string} message - Message to display
 * @param {number} duration - Duration in milliseconds
 */
export function toast(message, duration = DEFAULT_DURATION) {
  const el = document.getElementById('toast');
  const msgEl = document.getElementById('toastMsg');

  if (!el || !msgEl) return;

  msgEl.textContent = message;
  el.classList.add('show');

  setTimeout(() => {
    el.classList.remove('show');
  }, duration);
}
