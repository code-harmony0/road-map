const STORAGE_KEY = "rn_roadmap_v4"
const BACKUP_KEY = "rn_roadmap_v4_backup"

// Load roadmap data from global variable injected by HTML
let ROADMAP_DATA = window.ROADMAP_DATA || {}

// Convert roadmap data to WEEKS format for backward compatibility
function convertToWeeksFormat(roadmap) {
  return roadmap.map((week) => ({
    ...week,
    tasks: week.tasks.map((task) => ({
      t: task.text,
      time: task.time,
      why: task.why,
      links: task.links || [],
    })),
  }))
}

let WEEKS = convertToWeeksFormat(ROADMAP_DATA.roadmap || [])

function getDefaultState() {
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
    timerSeconds: 25 * 60,
    notes: {},
    customTasks: {},
    taskDates: {},
    collapsedWeeks: {},
    version: 4,
  }
}

function getState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...getDefaultState(), ...JSON.parse(raw) }
  } catch (e) {
    try {
      const backup = localStorage.getItem(BACKUP_KEY)
      if (backup) {
        localStorage.setItem(STORAGE_KEY, backup)
        showToast("Recovered from backup", "warn")
        return { ...getDefaultState(), ...JSON.parse(backup) }
      }
    } catch (e2) {}
  }
  try {
    const v3 = localStorage.getItem("rn_roadmap_v3")
    if (v3) {
      const m = { ...getDefaultState(), ...JSON.parse(v3), version: 4 }
      saveState(m)
      return m
    }
  } catch (e) {}
  return getDefaultState()
}

function saveState(s) {
  try {
    const json = JSON.stringify(s)
    localStorage.setItem(STORAGE_KEY, json)
    if (!saveState._c) saveState._c = 0
    if (++saveState._c % 5 === 0) localStorage.setItem(BACKUP_KEY, json)
    showSaveIndicator()
  } catch (e) {
    showToast("SAVE FAILED - export now!", "warn")
  }
}

function showSaveIndicator() {
  const el = document.getElementById("saveIndicator")
  el.classList.add("show")
  clearTimeout(showSaveIndicator._t)
  showSaveIndicator._t = setTimeout(() => el.classList.remove("show"), 800)
}

let state = getState()
window.addEventListener("beforeunload", () => {
  try {
    localStorage.setItem(BACKUP_KEY, JSON.stringify(state))
  } catch (e) {}
})

function get12hr() {
  const d = new Date()
  let h = d.getHours(),
    m = d.getMinutes()
  const ampm = h >= 12 ? "PM" : "AM"
  h = h % 12 || 12
  return `${h}:${String(m).padStart(2, "0")} ${ampm}`
}

function exportData() {
  const a = document.createElement("a")
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }),
  )
  a.download = `roadmap-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  showToast("Exported", "success")
}
function importData(event) {
  const file = event.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const imp = JSON.parse(e.target.result)
      if (!imp.tasks) throw 0
      localStorage.setItem(BACKUP_KEY, JSON.stringify(state))
      state = { ...getDefaultState(), ...imp }
      saveState(state)
      renderAll()
      showToast("Imported!", "success")
      closeBackupModal()
    } catch (err) {
      showToast("Invalid file", "warn")
    }
  }
  reader.readAsText(file)
  event.target.value = ""
}
function copyDataToClipboard() {
  navigator.clipboard
    .writeText(JSON.stringify(state, null, 2))
    .then(() => showToast("Copied", "success"))
    .catch(() => showToast("Failed", "warn"))
}
function openBackupModal() {
  document.getElementById("backupOverlay").classList.add("open")
}
function closeBackupModal() {
  document.getElementById("backupOverlay").classList.remove("open")
}

let currentNoteKey = null
function openNote(key, taskText, e) {
  e.stopPropagation()
  currentNoteKey = key
  document.getElementById("noteTask").textContent = taskText
  document.getElementById("noteText").value = state.notes[key] || ""
  document.getElementById("noteOverlay").classList.add("open")
  setTimeout(() => document.getElementById("noteText").focus(), 100)
}
function closeNote() {
  document.getElementById("noteOverlay").classList.remove("open")
  currentNoteKey = null
}
function saveNote() {
  if (!currentNoteKey) return
  const text = document.getElementById("noteText").value.trim()
  if (text) state.notes[currentNoteKey] = text
  else delete state.notes[currentNoteKey]
  saveState(state)
  closeNote()
  renderWeekCards()
  showToast("Note saved", "success")
}

let timerInterval = null,
  timerRunning = false
let timerSeconds = state.timerSeconds || 25 * 60
const WORK_SECONDS = 25 * 60

function toggleTimer() {
  document.getElementById("timerModal").classList.toggle("open")
  updateTimerClock()
}
function closeTimerModal() {
  document.getElementById("timerModal").classList.remove("open")
}
function startStopTimer() {
  if (timerRunning) {
    clearInterval(timerInterval)
    timerRunning = false
    document.getElementById("tmStartBtn").textContent = "Start"
    document.getElementById("timerBtn").classList.remove("running")
    document.getElementById("timerDot").classList.remove("pulse")
  } else {
    timerRunning = true
    document.getElementById("tmStartBtn").textContent = "Pause"
    document.getElementById("timerBtn").classList.add("running")
    document.getElementById("timerDot").classList.add("pulse")
    timerInterval = setInterval(() => {
      timerSeconds--
      if (timerSeconds <= 0) {
        clearInterval(timerInterval)
        timerRunning = false
        document.getElementById("tmStartBtn").textContent = "Start"
        document.getElementById("timerBtn").classList.remove("running")
        document.getElementById("timerDot").classList.remove("pulse")
        timerSeconds = WORK_SECONDS
        completeSession()
        showToast("Session done! Take a 5 min break.", "success")
      }
      updateTimerDisplay()
    }, 1000)
  }
}
function resetTimer() {
  clearInterval(timerInterval)
  timerRunning = false
  timerSeconds = WORK_SECONDS
  document.getElementById("tmStartBtn").textContent = "Start"
  document.getElementById("timerBtn").classList.remove("running")
  document.getElementById("timerDot").classList.remove("pulse")
  updateTimerDisplay()
}
function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60),
    s = timerSeconds % 60
  const str = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
  document.getElementById("timerDisplay").textContent = str
  document.getElementById("timerBtnText").textContent = str
  document
    .getElementById("timerDisplay")
    .classList.toggle("warn", timerSeconds < 5 * 60)
  document.getElementById("timerLabel").textContent =
    timerSeconds === WORK_SECONDS
      ? "FOCUS SESSION"
      : timerRunning
        ? "DEEP WORK"
        : "PAUSED"
  updateTimerClock()
}
function updateTimerClock() {
  const el = document.getElementById("timerClock")
  if (el) el.textContent = get12hr()
}
function completeSession() {
  const today = new Date().toDateString()
  if (state.sessionsDate !== today) {
    state.sessionsToday = 0
    state.sessionsDate = today
  }
  state.sessions = (state.sessions || 0) + 1
  state.sessionsToday = Math.min((state.sessionsToday || 0) + 1, 4)
  updateStreak()
  saveState(state)
  updateStats()
  updateSessionDots()
}
function updateSessionDots() {
  const today = new Date().toDateString()
  const count = state.sessionsDate === today ? state.sessionsToday || 0 : 0
  document
    .querySelectorAll(".session-dot")
    .forEach((d, i) => d.classList.toggle("done", i < count))
}

function updateStreak() {
  const today = new Date().toDateString()
  if (state.lastStudyDay === today) return
  const y = new Date()
  y.setDate(y.getDate() - 1)
  const y2 = new Date()
  y2.setDate(y2.getDate() - 2)
  if (
    state.lastStudyDay === y.toDateString() ||
    state.lastStudyDay === y2.toDateString()
  ) {
    state.streak = (state.streak || 0) + 1
  } else {
    state.streak = 1
  }
  state.lastStudyDay = today
  state.bestStreak = Math.max(state.bestStreak || 0, state.streak)
}

function getCurrentWeekIndex() {
  if (!state.startDate) return -1
  const diff = Math.floor((new Date() - new Date(state.startDate)) / 864e5)
  return diff < 0 ? -1 : Math.min(Math.floor(diff / 7), 11)
}
function updateStartDate() {
  state.startDate = document.getElementById("startDate").value
  saveState(state)
  renderWeekCards()
  updateWeekInfo()
  updateTodayFocus()
}
function updateWeekInfo() {
  const idx = getCurrentWeekIndex()
  const info = document.getElementById("currentWeekInfo")
  if (idx < 0) {
    info.textContent = "Set your start date to track active week"
    return
  }
  if (idx > 11) {
    info.textContent = "You have completed the 12-week plan!"
    return
  }
  const d = Math.floor((new Date() - new Date(state.startDate)) / 864e5)
  info.textContent = `Week ${idx + 1} of 12 - Day ${(d % 7) + 1}`
}

function updateTodayFocus() {
  const container = document.getElementById("todayTasks")
  const dateEl = document.getElementById("todayDate")
  dateEl.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
  const idx = getCurrentWeekIndex()
  if (idx < 0 || idx > 11) {
    container.innerHTML =
      '<div class="today-empty">Set a start date to see today\'s tasks</div>'
    return
  }
  let ft = []
  for (let i = Math.max(0, idx - 1); i <= Math.min(idx, 11); i++) {
    WEEKS[i].tasks.forEach((task, ti) => {
      const key = `${WEEKS[i].id}_${ti}`
      ft.push({
        text: task.t,
        key,
        done: !!state.tasks[key],
        weekNum: WEEKS[i].num,
      })
    })
  }
  const inc = ft.filter((t) => !t.done),
    comp = ft.filter((t) => t.done)
  const disp = [...inc.slice(0, 5), ...comp.slice(0, 2)]
  if (!disp.length) {
    container.innerHTML =
      '<div class="today-empty">All caught up! Move to next week.</div>'
    return
  }
  container.innerHTML = disp
    .map(
      (t) =>
        `<div class="today-task${t.done ? " tt-done" : ""}"><span class="tt-week">${t.weekNum}</span>${t.text}</div>`,
    )
    .join("")
}

function renderWeekCards() {
  const activeIdx = getCurrentWeekIndex()
  ;["month1weeks", "month2weeks", "month3weeks"].forEach((id, mi) => {
    const c = document.getElementById(id)
    c.innerHTML = ""
    WEEKS.filter((w) => w.month === mi + 1).forEach((week) => {
      const gi = WEEKS.indexOf(week),
        isActive = gi === activeIdx,
        isDone = state.weeksDone[week.id]
      const isCollapsed = !!state.collapsedWeeks[week.id]
      const tasks = week.tasks.map((task, ti) => {
        const key = `${week.id}_${ti}`
        return {
          ...task,
          key,
          checked: !!state.tasks[key],
          date: state.taskDates[key] || null,
          hasNote: !!state.notes[key],
        }
      })
      const ct = state.customTasks[week.id] || []
      const doneCount =
        tasks.filter((t) => t.checked).length + ct.filter((t) => t.done).length
      const total = tasks.length + ct.length
      const pct = Math.round((doneCount / total) * 100)

      const card = document.createElement("div")
      card.className = `week-card${isActive ? " active-week" : ""}${isDone ? " completed-week" : ""}${isCollapsed ? " is-collapsed" : ""}`
      card.style.setProperty("--card-color", `var(${week.color})`)

      let mistakesHtml = ""
      if (week.mistakes && week.mistakes.length) {
        mistakesHtml = `
          <div class="mistakes-box">
            <div class="mistakes-title">Common Mistakes to Avoid</div>
            ${week.mistakes.map((m) => `<div class="mistake-item">${m}</div>`).join("")}
          </div>
        `
      }

      let deliverableHtml = ""
      if (week.deliverable) {
        deliverableHtml = `<div class="deliverable-box">Deliverable: ${week.deliverable}</div>`
      }

      card.innerHTML = `
        <div class="wc-top-line"></div>
        <div class="wc-header" onclick="toggleCollapse('${week.id}')">
          <div class="wc-meta">
            <div class="wc-weeknum">${week.num}</div>
            <div class="wc-status">
              ${isActive ? '<span class="active-pill">ACTIVE</span>' : ""}
              ${isDone ? '<span style="color:var(--green);font-size:11px">Done</span>' : `${doneCount}/${total}`}
              <span class="collapse-icon">&#9660;</span>
            </div>
          </div>
          <div class="wc-title">${week.title}</div>
          <div class="wc-subtitle">${week.subtitle}</div>
          ${week.goal ? `<div class="wc-goal">Goal: ${week.goal}</div>` : ""}
          ${week.interviewQuestion ? `<div class="wc-interview">Interview: "${week.interviewQuestion}"</div>` : ""}
          <div class="wc-progress"><div class="wc-pb"><div class="wc-pb-fill" style="width:${pct}%"></div></div><div class="wc-pct-text">${pct}%</div></div>
        </div>
        <div class="wc-body">
          <div class="wc-tasks">
            ${tasks
              .map(
                (t) => `
              <div class="task-item${t.checked ? " done" : ""}" onclick="toggleTask('${t.key}','${week.id}')">
                <div class="task-check"><span class="task-check-icon">&#10003;</span></div>
                <div class="task-content">
                  <div class="task-text">${t.t}</div>
                  ${t.why ? `<div class="task-why">${t.why}</div>` : ""}
                  <div class="task-meta">
                    ${t.time ? `<span class="task-time">${t.time}</span>` : ""}
                    ${t.date ? `<span class="task-date">${t.date}</span>` : ""}
                    <button class="task-note-btn${t.hasNote ? " has-note" : ""}" onclick="openNote('${t.key}','${t.t.replace(/'/g, "\\'")}',event)">${t.hasNote ? "notes" : "+ note"}</button>
                    ${(t.links || []).map((l) => `<a class="task-resource res-${l.type || "docs"}" href="${l.url}" target="_blank" onclick="event.stopPropagation()">${l.tag}</a>`).join("")}
                  </div>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
          ${mistakesHtml}
          ${deliverableHtml}
          ${
            ct.length
              ? `<div class="custom-tasks">${ct
                  .map(
                    (x, ci) => `
            <div class="custom-task-item${x.done ? " done" : ""}">
              <div class="ct-check${x.done ? " checked" : ""}" onclick="toggleCustomTask('${week.id}',${ci})">${x.done ? "&#10003;" : ""}</div>
              <span style="flex:1">${x.text}</span>
              <span class="ct-del" onclick="deleteCustomTask('${week.id}',${ci})">x</span>
            </div>
          `,
                  )
                  .join("")}</div>`
              : ""
          }
          <div class="add-task-row">
            <input class="add-task-input" placeholder="Add your own task..." onkeydown="if(event.key==='Enter')addCustomTask('${week.id}',this)">
            <button class="add-task-btn" onclick="addCustomTask('${week.id}',this.previousElementSibling)">+</button>
          </div>
          <div class="wc-footer">
            <div class="build-badge"><div class="build-dot"></div>${week.timeEstimate ? `~${week.timeEstimate} total` : ""}</div>
            <button class="complete-btn${isDone ? " done-btn" : ""}" onclick="toggleWeekComplete('${week.id}',event)">${isDone ? "Done" : "Mark Done"}</button>
          </div>
        </div>
      `
      c.appendChild(card)
    })
  })
  updateStats()
  updateMonthPct()
}

function toggleCollapse(weekId) {
  state.collapsedWeeks[weekId] = !state.collapsedWeeks[weekId]
  saveState(state)
  document.querySelectorAll(".week-card").forEach((card) => {
    const weeknum = card.querySelector(".wc-weeknum")
    const week = WEEKS.find((w) => w.id === weekId)
    if (weeknum && week && weeknum.textContent === week.num) {
      card.classList.toggle("is-collapsed", state.collapsedWeeks[weekId])
    }
  })
}

function toggleTask(key, weekId) {
  state.tasks[key] = !state.tasks[key]
  if (state.tasks[key])
    state.taskDates[key] = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  else delete state.taskDates[key]
  updateStreak()
  saveState(state)
  renderWeekCards()
  updateTodayFocus()
  if (state.tasks[key]) showToast("Task completed", "success")
}
function toggleWeekComplete(weekId, e) {
  e.stopPropagation()
  state.weeksDone[weekId] = !state.weeksDone[weekId]
  saveState(state)
  renderWeekCards()
  showToast(
    state.weeksDone[weekId] ? "Week complete!" : "Week unmarked",
    state.weeksDone[weekId] ? "success" : "info",
  )
}
function addCustomTask(weekId, input) {
  const text = input.value.trim()
  if (!text) return
  if (!state.customTasks[weekId]) state.customTasks[weekId] = []
  state.customTasks[weekId].push({ text, done: false })
  input.value = ""
  saveState(state)
  renderWeekCards()
}
function toggleCustomTask(weekId, idx) {
  if (state.customTasks[weekId]?.[idx]) {
    state.customTasks[weekId][idx].done = !state.customTasks[weekId][idx].done
    saveState(state)
    renderWeekCards()
  }
}
function deleteCustomTask(weekId, idx) {
  if (state.customTasks[weekId]) {
    state.customTasks[weekId].splice(idx, 1)
    saveState(state)
    renderWeekCards()
  }
}

function updateStats() {
  const base = WEEKS.reduce((a, w) => a + w.tasks.length, 0)
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
  document.getElementById("stat-done").textContent = done
  document.getElementById("stat-total").textContent = total
  document.getElementById("stat-streak").textContent = state.streak || 0
  document.getElementById("stat-sessions").textContent = state.sessions || 0
  document.getElementById("streakCount").textContent = state.streak || 0
  document.getElementById("globalBar").style.width = pct + "%"
  document.getElementById("globalPct").textContent = pct + "%"
}
function updateMonthPct() {
  ;[1, 2, 3].forEach((mo) => {
    const weeks = WEEKS.filter((w) => w.month === mo)
    const total = weeks.reduce(
      (a, w) => a + w.tasks.length + (state.customTasks[w.id] || []).length,
      0,
    )
    const done = weeks.reduce((a, w) => {
      return (
        a +
        w.tasks.filter((_, ti) => state.tasks[`${w.id}_${ti}`]).length +
        (state.customTasks[w.id] || []).filter((t) => t.done).length
      )
    }, 0)
    document.getElementById(`month${mo}pct`).textContent =
      (total > 0 ? Math.round((done / total) * 100) : 0) + "%"
  })
}

let toastTimeout
function showToast(msg, type = "info") {
  const t = document.getElementById("toast")
  t.textContent = msg
  t.className = `toast ${type} show`
  clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => t.classList.remove("show"), 2500)
}

function confirmReset() {
  if (confirm("Reset all progress? Export first!\n\nThis cannot be undone.")) {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(BACKUP_KEY)
    state = getDefaultState()
    renderAll()
    showToast("Reset", "info")
  }
}

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "e") {
    e.preventDefault()
    exportData()
  }
  if ((e.ctrlKey || e.metaKey) && e.key === "b") {
    e.preventDefault()
    openBackupModal()
  }
  if (e.key === "Escape") {
    closeNote()
    closeBackupModal()
    closeTimerModal()
  }
  if (
    e.key === " " &&
    document.getElementById("timerModal").classList.contains("open") &&
    !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
  ) {
    e.preventDefault()
    startStopTimer()
  }
})

setInterval(() => {
  updateTimerClock()
}, 30000)

function renderAll() {
  if (state.startDate)
    document.getElementById("startDate").value = state.startDate
  renderWeekCards()
  updateStats()
  updateMonthPct()
  updateWeekInfo()
  updateTimerDisplay()
  updateSessionDots()
  updateTodayFocus()
}

document.addEventListener("DOMContentLoaded", renderAll)
