/**
 * Toast: one short status message, optionally with one action (Undo).
 * Announced to screen readers.
 */
let timer = null;

export function toast(message, action, duration = 5000) {
  const el = document.getElementById('toast');
  const msg = document.getElementById('toastMsg');
  const btn = document.getElementById('toastAction');
  if (!el || !msg || !btn) return;
  msg.textContent = message;
  btn.hidden = !action;
  btn.onclick = action ? () => { action.run(); el.classList.remove('show'); } : null;
  if (action) btn.textContent = action.label;
  el.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => el.classList.remove('show'), duration);
}
