import { getCurrentDayInfo } from "../domain/roadmap.js"

export function updateWeekInfo(state) {
  const info = document.getElementById("currentWeekInfo")
  if (!info) return
  const dayInfo = getCurrentDayInfo(state.startDate)

  if (!dayInfo.isValid) {
    info.textContent = dayInfo.message
    return
  }

  info.textContent = `Week ${dayInfo.weekNumber} of 12 - Day ${dayInfo.dayNumber}`
}
