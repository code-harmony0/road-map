/**
 * State Module
 * Central state management with persistence
 * Uses Observer pattern via EventBus for reactivity
 */

import { loadState, saveState, getDefaultState } from './Storage.js';
import { eventBus, EVENTS } from './EventBus.js';

class StateManager {
  constructor() {
    this.state = loadState();
  }

  /**
   * Get current state (immutable copy)
   * @returns {object} Current state
   */
  get() {
    return { ...this.state };
  }

  /**
   * Get specific state path
   * @param {string} path - Dot-notation path (e.g., 'jobSearch.applications')
   * @returns {*} Value at path
   */
  getPath(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], this.state);
  }

  /**
   * Set state and persist
   * @param {object} updates - State updates
   * @param {boolean} silent - Don't emit events if true
   */
  set(updates, silent = false) {
    const prevXP = this.state.xp;
    this.state = { ...this.state, ...updates };
    saveState(this.state);

    if (!silent) {
      eventBus.emit(EVENTS.STATE_CHANGED, this.state);

      if (updates.xp !== undefined && updates.xp !== prevXP) {
        eventBus.emit(EVENTS.XP_CHANGED, { xp: updates.xp, delta: updates.xp - prevXP });
      }
    }
  }

  /**
   * Toggle a task completion status
   * @param {string} key - Task key (e.g., 'w1_0')
   * @returns {boolean} New completion status
   */
  toggleTask(key) {
    const isDone = !this.state.tasks[key];
    this.state.tasks[key] = isDone;
    saveState(this.state);

    eventBus.emit(EVENTS.TASK_TOGGLED, { key, isDone });
    eventBus.emit(EVENTS.STATE_CHANGED, this.state);

    return isDone;
  }

  /**
   * Add XP to current total
   * @param {number} amount - XP amount to add (can be negative)
   */
  addXP(amount) {
    const prevXP = this.state.xp;
    this.state.xp = Math.max(0, this.state.xp + amount);
    saveState(this.state);

    eventBus.emit(EVENTS.XP_CHANGED, { xp: this.state.xp, delta: amount });
    eventBus.emit(EVENTS.STATE_CHANGED, this.state);
  }

  /**
   * Toggle week collapsed state
   * @param {string} weekId - Week ID
   */
  toggleWeek(weekId) {
    this.state.weeksCollapsed[weekId] = !this.state.weeksCollapsed[weekId];
    saveState(this.state);
  }

  /**
   * Toggle milestone collapsed state
   * @param {string} milestoneId - Milestone ID
   */
  toggleMilestone(milestoneId) {
    this.state.milestonesCollapsed[milestoneId] = !this.state.milestonesCollapsed[milestoneId];
    saveState(this.state);
  }

  /**
   * Update job search stats
   * @param {string} field - Field to update ('applications', 'interviews', 'offers')
   * @param {number} value - New value
   */
  updateJobStats(field, value) {
    if (this.state.jobSearch[field] !== undefined) {
      this.state.jobSearch[field] = Math.max(0, parseInt(value) || 0);
      saveState(this.state);
      eventBus.emit(EVENTS.JOB_STATS_CHANGED, this.state.jobSearch);
    }
  }

  /**
   * Increment job applications
   * @param {number} amount - Amount to add
   */
  incrementApplications(amount = 1) {
    this.state.jobSearch.applications += amount;
    saveState(this.state);
    eventBus.emit(EVENTS.JOB_STATS_CHANGED, this.state.jobSearch);
  }

  /**
   * Set timer seconds
   * @param {number} seconds - Timer value in seconds
   */
  setTimer(seconds) {
    this.state.timerSecs = seconds;
    saveState(this.state);
  }

  /**
   * Set start date for pace tracking
   * @param {string} date - ISO date string
   */
  setStartDate(date) {
    this.state.startDate = date;
    saveState(this.state);
  }

  /**
   * Reset all state to defaults
   */
  reset() {
    this.state = getDefaultState();
    saveState(this.state);
    eventBus.emit(EVENTS.STATE_CHANGED, this.state);
  }

  /**
   * Check if all tasks in a milestone are complete
   * @param {object} milestone - Milestone object with tasks array
   * @returns {boolean} True if all tasks complete
   */
  isMilestoneComplete(milestone) {
    return milestone.tasks.every((task, i) => this.state.tasks[task.id || `${milestone.id}_${i}`]);
  }
}

// Singleton instance
export const state = new StateManager();
