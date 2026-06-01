/**
 * Content Index
 * Barrel export for all content modules
 * Centralized access point for all app content
 */

// App Identity
export { APP_NAME, APP_TAGLINE } from './app.js';

// Levels
export { LEVELS } from './levels.js';

// Phases
export { PHASE_0_WEEKS, TASK_DETAILS as PHASE_0_DETAILS } from './phases/phase0.js';
export { PHASE_1_WEEKS, TASK_DETAILS as PHASE_1_DETAILS } from './phases/phase1.js';
export { PHASE_2_WEEKS, TASK_DETAILS as PHASE_2_DETAILS } from './phases/phase2.js';
export { PHASE_3_WEEKS, TASK_DETAILS as PHASE_3_DETAILS } from './phases/phase3.js';

// Navigation
export { SIDEBAR_LABELS, MILESTONE_HEADERS } from './navigation.js';

// UI Text
export { JOB_TRACKER, FOCUS_SECTION, TIMER, SETTINGS, QUICK_ACTIONS } from './ui-text.js';

// Commands
export { COMMANDS } from './commands.js';

// Messages
export { MESSAGES } from './messages.js';

// Helpers
export { findMilestone, getAllMilestones } from './helpers.js';
