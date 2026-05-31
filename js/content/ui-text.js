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
  title: "Daily Standup (Focus)",
  emptyMessage: "All caught up! Excellent work.",
  setStartDatePrompt: "Set a Start Date in Settings to track your 8-week pace!",
  aheadSchedule: "Ahead of schedule! Expected Week: {expected} | Done: {completed}",
  catchUp: "Catch-up Mode: Week {expected}, but finished {completed}. Focus!"
};

// Timer
export const TIMER = {
  title: 'Deep Work Timer',
  startButton: 'Start Focus',
  pauseButton: 'Pause',
  resumeButton: 'Resume Focus',
  completeMessage: 'Session Complete! +100 XP',
  defaultMinutes: 25
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
  startTimer: { icon: 'ph-timer', text: 'Start Deep Work' },
  setDate: { icon: 'ph-calendar-plus', text: 'Set Start Date' }
};
