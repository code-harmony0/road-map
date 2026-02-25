// Load roadmap data from data.js into the shape this app expects.

export function convertToWeeksFormat(roadmap) {
  return roadmap.map((week) => ({
    ...week,
    tasks: (week.tasks || []).map((task) => ({
      id: task.id,
      text: task.t || task.text,
      t: task.t || task.text,
      time: task.time,
      why: task.why,
      links: task.links || [],
    })),
  }))
}

export function getCurrentDayInfo(startDate, now = new Date()) {
  if (!startDate) {
    return {
      isValid: false,
      message: "Set your start date to track active week",
    }
  }

  const start = new Date(startDate)
  const diffTime = now.getTime() - start.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 0) {
    return {
      isValid: false,
      message: "Start date is in the future",
    }
  }

  const totalDays = 12 * 7
  if (diffDays >= totalDays) {
    return {
      isValid: false,
      message: "You have completed the 12-week plan!",
    }
  }

  const weekIndex = Math.floor(diffDays / 7)
  const dayInWeek = diffDays % 7

  return {
    isValid: true,
    weekIndex,
    dayInWeek,
    weekNumber: weekIndex + 1,
    dayNumber: dayInWeek + 1,
    totalDaysCompleted: diffDays,
    daysRemaining: totalDays - diffDays,
    progressPercentage: Math.round((diffDays / totalDays) * 100),
  }
}

export function getWeekProgress(weeks, weekIndex, state) {
  const week = weeks[weekIndex]
  if (!week) return 0

  const baseTasks = (week.tasks || []).map((_, ti) => {
    const key = `${week.id}_${ti}`
    return { checked: !!state.tasks[key] }
  })

  const customTasks = state.customTasks?.[week.id] || []
  const total = baseTasks.length + customTasks.length
  const completed =
    baseTasks.filter((t) => t.checked).length +
    customTasks.filter((t) => t.done).length

  return total > 0 ? Math.round((completed / total) * 100) : 0
}

function getDaySliceIndexes(total, dayNumber) {
  // Evenly distribute tasks across 7 days, preserving order.
  // Example: 10 tasks => [2,2,2,1,1,1,1]
  const days = 7
  const base = Math.floor(total / days)
  const remainder = total % days
  let start = 0

  for (let d = 1; d <= days; d++) {
    const count = base + (d <= remainder ? 1 : 0)
    const end = start + count
    if (d === dayNumber) return { start, end }
    start = end
  }

  return { start: 0, end: 0 }
}

// Prompt 2: Filtering Today's Tasks
export function getTodaysTasks(weeks, state, dayInfo) {
  if (!dayInfo?.isValid) return []
  const week = weeks[dayInfo.weekIndex]
  if (!week) return []

  const total = week.tasks?.length || 0
  const dayNumber = dayInfo.dayNumber
  const { start, end } = getDaySliceIndexes(total, dayNumber)

  const slice = (week.tasks || []).slice(start, end)
  return slice.map((task, offset) => {
    const taskIndex = start + offset
    const key = `${week.id}_${taskIndex}`
    return {
      key,
      text: task.t,
      done: !!state.tasks[key],
      time: task.time,
      why: task.why,
      weekNum: week.num,
      activeWeek: dayInfo.weekNumber,
      activeDay: dayNumber,
    }
  })
}

export function getCurrentFocusTask(weeks, state, dayInfo) {
  const todays = getTodaysTasks(weeks, state, dayInfo)
  const firstIncomplete = todays.find((t) => !t.done)
  return firstIncomplete || todays[0] || null
}
