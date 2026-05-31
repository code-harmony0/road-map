/**
 * Command Palette Module
 * Cmd+K interface for quick actions
 */

import { getCommands } from '../config/commands.js';

let selectedIndex = 0;
let currentFiltered = [];
let isOpen = false;

/**
 * Open command palette
 */
export function openCmd() {
  const overlay = document.getElementById('cmdPalette');
  const input = document.getElementById('cmdInput');

  if (!overlay) return;

  isOpen = true;
  overlay.classList.add('open');

  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 100);
  }

  selectedIndex = 0;
  renderCmdList('');
}

/**
 * Close command palette
 */
export function closeCmd() {
  const overlay = document.getElementById('cmdPalette');
  if (overlay) {
    overlay.classList.remove('open');
  }
  isOpen = false;
}

/**
 * Render command list
 * @param {string} query - Search query
 */
function renderCmdList(query) {
  const list = document.getElementById('cmdList');
  if (!list) return;

  const commands = getCommands();
  currentFiltered = query
    ? commands.filter(c => c.text.toLowerCase().includes(query.toLowerCase()))
    : commands;

  if (!currentFiltered.length) {
    list.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--txt3);">No commands found</div>`;
    return;
  }

  selectedIndex = Math.min(selectedIndex, currentFiltered.length - 1);

  list.innerHTML = currentFiltered.map((cmd, i) => `
    <div class="cmd-item ${i === selectedIndex ? 'selected' : ''}" 
         onclick="window.executeCmd(${i})">
      <i class="ph-bold ${cmd.icon}"></i>
      <span>${cmd.text}</span>
    </div>
  `).join('');
}

/**
 * Execute command at index
 * @param {number} index - Command index
 */
export function executeCmd(index) {
  if (currentFiltered[index]) {
    closeCmd();
    currentFiltered[index].action();
  }
}

/**
 * Handle keyboard navigation
 * @param {KeyboardEvent} e - Keyboard event
 */
function handleKeydown(e) {
  // Cmd/Ctrl+K to open
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openCmd();
    return;
  }

  if (!isOpen) return;

  // Escape to close
  if (e.key === 'Escape') {
    closeCmd();
    return;
  }

  // Arrow navigation
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedIndex = Math.min(selectedIndex + 1, currentFiltered.length - 1);
    renderCmdList(document.getElementById('cmdInput')?.value || '');
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedIndex = Math.max(selectedIndex - 1, 0);
    renderCmdList(document.getElementById('cmdInput')?.value || '');
  }

  // Enter to execute
  if (e.key === 'Enter') {
    e.preventDefault();
    executeCmd(selectedIndex);
  }
}

/**
 * Initialize command palette
 */
export function initCommandPalette() {
  document.addEventListener('keydown', handleKeydown);

  const input = document.getElementById('cmdInput');
  if (input) {
    input.addEventListener('input', (e) => {
      selectedIndex = 0;
      renderCmdList(e.target.value);
    });
  }
}

// Expose to window
if (typeof window !== 'undefined') {
  window.executeCmd = executeCmd;
  window.openCmd = openCmd;
  window.closeCmd = closeCmd;
}
