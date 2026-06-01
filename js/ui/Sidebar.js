/**
 * Sidebar Module
 * Handles sidebar navigation and collapsing
 */

import { state } from '../core/State.js';

let isAutoScrolling = false;

/**
 * Scroll to a milestone section
 * @param {string} id - Milestone ID ('m0', 'm1', 'm2', 'm3')
 */
export function scrollToId(id) {
  isAutoScrolling = true;

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Update active states
  updateActiveStates(id);

  // Expand milestone if collapsed
  if (state.get().milestonesCollapsed[id]) {
    state.toggleMilestone(id);
    updateMilestoneDOM(id);
  }

  setTimeout(() => {
    isAutoScrolling = false;
  }, 800);
}

/**
 * Update active states in sidebar and mobile nav
 * @param {string} id - Active milestone ID
 */
function updateActiveStates(id) {
  // Clear all active states
  document.querySelectorAll('.mob-tab, .sidebar-item').forEach(el => {
    el.classList.remove('active');
  });

  // Set new active states
  const sideMap = { m0: 'sideM0', m1: 'sideM1', m2: 'sideM2', m3: 'sideM3' };
  const mobIndex = { m0: 0, m1: 1, m2: 2, m3: 3 };

  const sideEl = document.getElementById(sideMap[id]);
  if (sideEl) {
    sideEl.classList.add('active');
  }

  const mobTabs = document.querySelectorAll('.mob-tab');
  if (mobTabs[mobIndex[id]]) {
    mobTabs[mobIndex[id]].classList.add('active');
  }
}

/**
 * Toggle left sidebar collapsed state
 */
export function toggleLeftSidebar() {
  const sidebar = document.getElementById('leftSidebar');
  const icon = document.getElementById('sbLeftIcon');

  if (sidebar && icon) {
    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');
    icon.className = isCollapsed
      ? 'ph-bold ph-caret-double-right'
      : 'ph-bold ph-caret-double-left';
  }
}

/**
 * Toggle right sidebar collapsed state
 */
export function toggleRightSidebar() {
  const sidebar = document.getElementById('rightSidebar');
  const icon = document.getElementById('rsideIcon');

  if (sidebar && icon) {
    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');
    icon.className = isCollapsed
      ? 'ph-bold ph-caret-double-left'
      : 'ph-bold ph-caret-double-right';
  }
}

/**
 * Update milestone DOM based on collapsed state
 * @param {string} id - Milestone ID
 */
export function updateMilestoneDOM(id) {
  const body = document.getElementById(id + 'Body');
  const toggle = document.getElementById(id + 'Toggle');
  const isCollapsed = state.get().milestonesCollapsed[id];

  if (body) {
    body.classList.toggle('open', !isCollapsed);
  }
  if (toggle) {
    toggle.classList.toggle('open', !isCollapsed);
  }
}

/**
 * Toggle milestone section
 * @param {string} id - Milestone ID
 */
export function toggleMilestone(id) {
  state.toggleMilestone(id);
  updateMilestoneDOM(id);
}

/**
 * Update all milestone DOM states
 */
export function updateAllMilestonesDOM() {
  ['m0', 'm1', 'm2', 'm3'].forEach(id => updateMilestoneDOM(id));
}

/**
 * Toggle week card collapsed state
 * @param {string} weekId - Week ID
 */
export function toggleWeek(weekId) {
  state.toggleWeek(weekId);
  updateWeekDOM(weekId);
}

/**
 * Update week card DOM
 * @param {string} weekId - Week ID
 */
function updateWeekDOM(weekId) {
  const arrow = document.getElementById(weekId + 'Arrow');
  const body = document.getElementById(weekId + 'Body');
  const isCollapsed = state.get().weeksCollapsed[weekId];

  if (arrow) {
    arrow.classList.toggle('open', !isCollapsed);
  }
  if (body) {
    body.classList.toggle('hidden', isCollapsed);
  }
}

// Expose functions to window for inline handlers
if (typeof window !== 'undefined') {
  window.scrollToId = scrollToId;
  window.toggleLeftSidebar = toggleLeftSidebar;
  window.toggleRightSidebar = toggleRightSidebar;
  window.toggleMilestone = toggleMilestone;
  window.toggleWeek = toggleWeek;
}
