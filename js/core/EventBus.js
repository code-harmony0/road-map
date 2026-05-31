/**
 * EventBus Module
 * Simple pub/sub event system for decoupled component communication
 * Enables features to react to state changes without direct coupling
 */

class EventBus {
  constructor() {
    this.events = {};
  }

  /**
   * Subscribe to an event
   * @param {string} event - Event name
   * @param {function} callback - Event handler
   * @returns {function} Unsubscribe function
   */
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);

    // Return unsubscribe function
    return () => {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    };
  }

  /**
   * Emit an event
   * @param {string} event - Event name
   * @param {*} data - Event data
   */
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => {
        try {
          callback(data);
        } catch (e) {
          console.error(`Error in event handler for ${event}:`, e);
        }
      });
    }
  }

  /**
   * Subscribe to event once
   * @param {string} event - Event name
   * @param {function} callback - Event handler
   */
  once(event, callback) {
    const unsubscribe = this.on(event, (data) => {
      unsubscribe();
      callback(data);
    });
  }
}

// Singleton instance
export const eventBus = new EventBus();

// Event names constants
export const EVENTS = {
  STATE_CHANGED: 'state:changed',
  XP_CHANGED: 'xp:changed',
  LEVEL_UP: 'level:up',
  TASK_TOGGLED: 'task:toggled',
  BOSS_DEFEATED: 'boss:defeated',
  TIMER_COMPLETE: 'timer:complete',
  JOB_STATS_CHANGED: 'job:stats-changed'
};
