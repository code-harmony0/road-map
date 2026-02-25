export function updateStats(weeks, state) {
  const base = weeks.reduce((a, w) => a + (w.tasks?.length || 0), 0)
  const custom = Object.values(state.customTasks || {}).reduce(
    (a, arr) => a + arr.length,
    0,
  )
  const total = base + custom
  const done =
    Object.values(state.tasks).filter(Boolean).length +
    Object.values(state.customTasks || {}).reduce(
      (a, arr) => a + arr.filter((t) => t.done).length,
      0,
    )

  const pct = total > 0 ? Math.round((done / total) * 100) : 0
  const set = (id, v) => {
    const el = document.getElementById(id)
    if (el) el.textContent = String(v)
  }

  set("stat-done", done)
  set("stat-total", total)
  set("stat-streak", state.streak || 0)
  set("stat-sessions", state.sessions || 0)
  set("streakCount", state.streak || 0)

  const bar = document.getElementById("globalBar")
  if (bar) bar.style.width = pct + "%"
  set("globalPct", pct + "%")
}

export function updateMonthPct(weeks, state) {
  ;[1, 2, 3].forEach((mo) => {
    const monthWeeks = weeks.filter((w) => w.month === mo)
    const total = monthWeeks.reduce(
      (a, w) => a + (w.tasks?.length || 0) + (state.customTasks[w.id] || []).length,
      0,
    )
    const done = monthWeeks.reduce((a, w) => {
      const baseDone = (w.tasks || []).filter((_, ti) => state.tasks[`${w.id}_${ti}`]).length
      const customDone = (state.customTasks[w.id] || []).filter((t) => t.done).length
      return a + baseDone + customDone
    }, 0)

    const el = document.getElementById(`month${mo}pct`)
    if (el) el.textContent = (total > 0 ? Math.round((done / total) * 100) : 0) + "%"
  })
}
