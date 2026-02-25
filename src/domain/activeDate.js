import { getCurrentDayInfo } from "./roadmap.js"

// Prompt 1: Date Calculator
// Reads startDate from persisted state and returns active week/day (1-based).
export function getActiveWeekDayFromStorage(storage, storageKey, now = new Date()) {
  try {
    const raw = storage.getItem(storageKey)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    const startDate = parsed?.startDate
    if (!startDate) return null

    const dayInfo = getCurrentDayInfo(startDate, now)
    if (!dayInfo.isValid) return null

    return {
      activeWeek: dayInfo.weekNumber,
      activeDay: dayInfo.dayNumber,
    }
  } catch {
    return null
  }
}
