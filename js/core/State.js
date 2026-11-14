/**
 * State: one persisted object, one event on every change.
 */
import { loadState, saveState } from './Storage.js';
import { eventBus, EVENTS } from './EventBus.js';

class StateManager {
  constructor() {
    this.state = loadState();
  }

  get() {
    return this.state;
  }

  update(patch) {
    this.state = { ...this.state, ...patch };
    saveState(this.state);
    eventBus.emit(EVENTS.STATE_CHANGED, this.state);
  }

  /** Tick or untick a task. Task ids are unique across the whole plan. */
  toggleTask(id) {
    this.update({ tasks: { ...this.state.tasks, [id]: !this.state.tasks[id] } });
  }

  /** Mark a milestone 'done' or 'skipped'; null reopens it. Following the route resumes. */
  setGate(id, value) {
    const gates = { ...this.state.homeGates };
    if (value) gates[id] = value;
    else delete gates[id];
    this.update({ homeGates: gates, selected: null });
  }

  /** View a specific milestone or side list; null follows the current one. */
  select(id) {
    this.update({ selected: id });
  }
}

export const state = new StateManager();
