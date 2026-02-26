export function updateStreak(state, now = new Date()) {
  const today = now.toDateString()
  if (state.lastStudyDay === today) return

  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)

  if (state.lastStudyDay === yesterday.toDateString()) {
    state.streak = (state.streak || 0) + 1
  } else {
    state.streak = 1
  }

  state.lastStudyDay = today
  state.bestStreak = Math.max(state.bestStreak || 0, state.streak)
}
