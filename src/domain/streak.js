export function updateStreak(state, now = new Date()) {
  const today = now.toDateString()
  if (state.lastStudyDay === today) return

  const y = new Date(now)
  y.setDate(y.getDate() - 1)
  const y2 = new Date(now)
  y2.setDate(y2.getDate() - 2)

  if (state.lastStudyDay === y.toDateString() || state.lastStudyDay === y2.toDateString()) {
    state.streak = (state.streak || 0) + 1
  } else {
    state.streak = 1
  }

  state.lastStudyDay = today
  state.bestStreak = Math.max(state.bestStreak || 0, state.streak)
}
