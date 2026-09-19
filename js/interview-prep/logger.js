/**
 * Logger Module
 * Handles opening the modal and saving real interview questions.
 */

import { logRealInterview } from './store.js';
import { renderLog } from './renderer.js';

export function setupLogger() {
  const overlay = document.getElementById('logModalOverlay');
  const openBtns = document.querySelectorAll('.ip-log-btn');
  const closeBtn = document.getElementById('logModalCancel');
  const form = document.getElementById('logModalForm');

  // Open modal (can pass default question text)
  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const qText = e.currentTarget.dataset.question || '';
      const qId = e.currentTarget.dataset.id || '';
      document.getElementById('logQText').value = qText;
      document.getElementById('logQId').value = qId;
      overlay.classList.add('active');
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    form.reset();
  });

  // Submit form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const qId = document.getElementById('logQId').value;
    const qText = document.getElementById('logQText').value;
    const company = document.getElementById('logCompany').value;
    const notes = document.getElementById('logNotes').value;

    const state = logRealInterview(qId, qText, company, notes);
    renderLog(state); // Update UI
    
    overlay.classList.remove('active');
    form.reset();
  });
}
