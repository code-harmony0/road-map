/**
 * UI Text Content
 * Single Responsibility: All UI text strings
 */

// Job Tracker
export const JOB_TRACKER = {
  title: 'Offer Radar',
  goals: { applications: 50, interviews: 10, offers: 2 },
  labels: {
    applications: 'Applications',
    interviews: 'Interviews',
    offers: 'Offers'
  }
};

// Focus Section
export const FOCUS_SECTION = {
  title: "Execution Queue",
  emptyMessage: "Execution queue is clear.",
  setStartDatePrompt: "Set a start date to track your interview-readiness pace.",
  aheadSchedule: "Ahead of schedule! Expected Week: {expected} | Done: {completed}",
  catchUp: "Catch-up mode: Week {expected}, finished {completed}. Prioritize the queue."
};

// Timer
export const TIMER = {
  title: 'Deep Work Sprint',
  startButton: 'Start Sprint',
  pauseButton: 'Pause',
  resumeButton: 'Resume Sprint',
  completeMessage: 'Sprint complete! +100 XP',
  defaultMinutes: 50
};

// Settings
export const SETTINGS = {
  title: 'Settings',
  startDateLabel: 'Start Date (For Pace Tracker)',
  exportButton: 'Export Backup (JSON)',
  resetButton: 'Reset All Progress',
  closeButton: 'Close',
  resetConfirm: 'Erase all progress? This cannot be undone.'
};

// Quick Actions (FAB)
export const QUICK_ACTIONS = {
  logApps: { icon: 'ph-paper-plane-tilt', text: 'Log 3 Job Apps' },
  startTimer: { icon: 'ph-timer', text: 'Start 50m Sprint' },
  setDate: { icon: 'ph-calendar-plus', text: 'Set Start Date' }
};
