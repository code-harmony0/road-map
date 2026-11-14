/**
 * Entry point.
 */
import { eventBus, EVENTS } from './core/EventBus.js';
import { render, bind } from './ui/App.js';
import { initTimer } from './features/Timer.js';

eventBus.on(EVENTS.STATE_CHANGED, render);
bind();
initTimer();
render();
