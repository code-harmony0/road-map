import { WORK_SECONDS } from "../constants.js"

export function getDefaultState() {
  return {
    tasks: {},
    weeksDone: {},
    startDate: null,
    streak: 0,
    lastStudyDay: null,
    bestStreak: 0,
    sessions: 0,
    sessionsToday: 0,
    sessionsDate: null,
    timerSeconds: WORK_SECONDS,
    notes: {},
    dailyNotes: "",
    customTasks: {},
    taskDates: {},
    collapsedWeeks: {},
    soundEffectsEnabled: true,
    version: 4,
  }
}
