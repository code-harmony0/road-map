/**
 * Modal Module
 * Handles settings and timer modals
 */

import { state } from '../core/State.js';
import { exportState, clearState } from '../core/Storage.js';
import { renderFocus } from '../features/FocusSection.js';

/**
 * Open settings modal
 */
export function openSettings() {
  const modal = document.getElementById('settingsModal');
  const input = document.getElementById('startDateInput');

  if (modal) {
    if (input) {
      input.value = state.get().startDate || '';
    }
    modal.classList.add('open');
  }
}

/**
 * Close settings modal
 */
export function closeSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) {
    modal.classList.remove('open');
  }
  renderFocus();
}

/**
 * Save start date
 * @param {string} value - Date value
 */
export function saveStartDate(value) {
  state.setStartDate(value);
}

/**
 * Export data to JSON file
 */
export function exportData() {
  exportState(state.get());
}

/**
 * Confirm and reset all progress
 */
export function confirmReset() {
  if (confirm('Erase all progress? This cannot be undone.')) {
    state.reset();
    location.reload();
  }
}

/**
 * Close modal on overlay click
 * @param {Event} event - Click event
 */
export function handleModalOverlayClick(event) {
  if (event.target === event.currentTarget) {
    event.target.classList.remove('open');
  }
}

// Expose functions to window for inline handlers
if (typeof window !== 'undefined') {
  window.openSettings = openSettings;
  window.closeSettings = closeSettings;
  window.saveStartDate = saveStartDate;
  window.exportData = exportData;
  window.confirmReset = confirmReset;
  window.handleModalOverlayClick = handleModalOverlayClick;
}
