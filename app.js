const STORAGE_KEY = "rn_roadmap_v4"
const BACKUP_KEY = "rn_roadmap_v4_backup"

// Load roadmap data from global variable injected by HTML
let ROADMAP_DATA = window.ROADMAP_DATA || {}
let WEEKS = []

// Convert roadmap data to WEEKS format for backward compatibility
function convertToWeeksFormat(roadmap) {
  return roadmap.map((week) => ({
    ...week,
    tasks: week.tasks.map((task) => ({
      id: task.id,
      text: task.text,
      t: task.text, // Backward compatibility
      time: task.time,
      why: task.why,
      links: task.links || [],
    })),
  }))
}

// Initialize WEEKS when data is available
function initializeWeeks() {
  if (ROADMAP_DATA.roadmap && ROADMAP_DATA.roadmap.length > 0) {
    WEEKS = convertToWeeksFormat(ROADMAP_DATA.roadmap)
    console.log("WEEKS initialized:", WEEKS.length, "weeks")
    renderAll() // Render after data is loaded
    return true
  }
  return false
}

// Try to initialize now
if (!initializeWeeks()) {
  // If not available, wait for it
  setTimeout(() => {
    if (!initializeWeeks()) {
      console.error("Failed to load roadmap data after waiting")
    }
  }, 500)
}

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
    if (raw) {
      const parsed = JSON.parse(raw)
      // Validate state structure
      if (parsed && typeof parsed === "object" && parsed.version === 4) {
        // Create automatic backup
        createBackup(parsed)
        return { ...getDefaultState(), ...parsed }
      }
    }
  } catch (e) {
    console.warn("Failed to load state, trying backup:", e)
    try {
      const backup = localStorage.getItem(BACKUP_KEY)
      if (backup) {
        const parsed = JSON.parse(backup)
        if (parsed && typeof parsed === "object") {
          localStorage.setItem(STORAGE_KEY, backup)
          showToast("Recovered from backup", "warn")
          return { ...getDefaultState(), ...parsed }
        }
      }
    } catch (backupError) {
      console.error("Backup recovery failed:", backupError)
    }
  }
  return getDefaultState()
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    createBackup(state)
    showSaveIndicator()
  } catch (error) {
    console.error("Failed to save state:", error)
    showToast("Failed to save progress", "error")
  }
}

function showSaveIndicator() {
  const el = document.getElementById("saveIndicator")
  el.classList.add("show")
  clearTimeout(showSaveIndicator._t)
  showSaveIndicator._t = setTimeout(() => el.classList.remove("show"), 800)
}

let state = getState()

// Success sound effect for task completion
function playSuccessSound() {
  // Check if user has disabled sound effects
  if (state.soundEffectsEnabled === false) {
    return
  }

  try {
    // Create a subtle success sound using Web Audio API
    const audioContext = new (
      window.AudioContext || window.webkitAudioContext
    )()

    // Create a pleasant success chord (C major)
    const notes = [261.63, 329.63, 392.0] // C4, E4, G4
    const duration = 0.15

    notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = frequency
      oscillator.type = "sine"

      // Envelope for smooth sound
      const now = audioContext.currentTime
      gainNode.gain.setValueAtTime(0, now)
      gainNode.gain.linearRampToValueAtTime(0.1, now + 0.01) // Quick attack
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration) // Smooth decay

      oscillator.start(now + index * 0.05) // Slight delay between notes
      oscillator.stop(now + duration + index * 0.05)
    })
  } catch (error) {
    // Silently fail if audio is not supported
    console.debug("Audio not supported:", error)
  }
}

// Toggle sound effects preference
function toggleSoundEffects() {
  state.soundEffectsEnabled = state.soundEffectsEnabled !== false // Default to true
  saveState(state)

  // Update button UI
  const soundBtn = document.getElementById("soundBtn")
  const soundIcon = document.getElementById("soundIcon")

  if (state.soundEffectsEnabled) {
    soundBtn.classList.remove("muted")
    soundIcon.textContent = "🔊"
  } else {
    soundBtn.classList.add("muted")
    soundIcon.textContent = "🔇"
  }

  showToast(
    state.soundEffectsEnabled
      ? "Sound effects enabled"
      : "Sound effects disabled",
    "info",
  )
}
window.toggleSoundEffects = toggleSoundEffects

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

// Calculate weekly progress percentage for timeline
function getWeekProgress(weekIndex) {
  if (!WEEKS[weekIndex]) return 0

  const week = WEEKS[weekIndex]
  const tasks = week.tasks.map((task, ti) => {
    const key = `${week.id}_${ti}`
    return {
      checked: !!state.tasks[key],
    }
  })

  const customTasks = state.customTasks[week.id] || []
  const totalTasks = tasks.length + customTasks.length
  const completedTasks =
    tasks.filter((t) => t.checked).length +
    customTasks.filter((t) => t.done).length

  return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
}

// Render visual timeline
function renderTimeline() {
  const container = document.getElementById("timelineNodes")
  if (!container) return

  const dayInfo = getCurrentDayInfo()
  const currentWeekIndex = dayInfo.isValid ? dayInfo.weekIndex : -1

  // Clear existing nodes
  container.innerHTML = ""

  // Add progress bar
  const progressBar = document.createElement("div")
  progressBar.className = "timeline-progress"

  // Create timeline nodes
  WEEKS.forEach((week, index) => {
    const progress = getWeekProgress(index)
    const node = document.createElement("div")
    node.className = "timeline-node"
    node.setAttribute("data-week", `W${week.num}`)

    // Determine node state based on progress and current week
    if (index === currentWeekIndex) {
      node.classList.add("active")
      node.textContent = progress > 0 ? progress + "%" : week.num
    } else if (progress === 100) {
      node.classList.add("completed")
      node.textContent = "✓"
    } else if (progress > 0) {
      node.classList.add("partial")
      node.textContent = progress + "%"
    } else {
      node.textContent = week.num
    }

    // Add click handler to scroll to week
    node.addEventListener("click", () => {
      const weekCard = document.querySelector(
        `.week-card:has(.wc-weeknum="${week.num}")`,
      )
      if (weekCard) {
        weekCard.scrollIntoView({ behavior: "smooth", block: "center" })
        // Briefly highlight the week
        weekCard.style.transition = "box-shadow 0.3s ease"
        weekCard.style.boxShadow = "0 0 20px rgba(59, 130, 246, 0.3)"
        setTimeout(() => {
          weekCard.style.boxShadow = ""
        }, 1000)
      }
    })

    container.appendChild(node)
  })

  // Update progress bar width based on overall progress
  const overallProgress =
    WEEKS.reduce((acc, week, index) => {
      return acc + getWeekProgress(index)
    }, 0) / WEEKS.length

  // Insert progress bar before nodes
  const timelineContainer = container.parentElement
  const existingProgress = timelineContainer.querySelector(".timeline-progress")
  if (existingProgress) {
    existingProgress.remove()
  }
  timelineContainer.insertBefore(progressBar, container)

  // Animate progress bar
  setTimeout(() => {
    progressBar.style.width = `${overallProgress}%`
  }, 100)
}

// Enhanced utility function to calculate current day information
function getCurrentDayInfo() {
  if (!state.startDate) {
    return {
      isValid: false,
      message: "Set your start date to track active week",
    }
  }

  const startDate = new Date(state.startDate)
  const currentDate = new Date()
  const diffTime = currentDate.getTime() - startDate.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 0) {
    return {
      isValid: false,
      message: "Start date is in the future",
    }
  }

  const totalDays = 12 * 7 // 12 weeks, 7 days each
  if (diffDays >= totalDays) {
    return {
      isValid: false,
      message: "You have completed the 12-week plan!",
    }
  }

  const weekIndex = Math.floor(diffDays / 7)
  const dayInWeek = diffDays % 7
  const weekNumber = weekIndex + 1
  const dayNumber = dayInWeek + 1

  return {
    isValid: true,
    weekIndex,
    dayInWeek,
    weekNumber,
    dayNumber,
    totalDaysCompleted: diffDays,
    daysRemaining: totalDays - diffDays,
    progressPercentage: Math.round((diffDays / totalDays) * 100),
  }
}
function updateStartDate() {
  state.startDate = document.getElementById("startDate").value
  saveState(state)
  renderWeekCards()
  updateWeekInfo()
  updateTodayFocus()
}
function updateWeekInfo() {
  const info = document.getElementById("currentWeekInfo")
  const dayInfo = getCurrentDayInfo()

  if (!dayInfo.isValid) {
    info.textContent = dayInfo.message
    return
  }

  info.textContent = `Week ${dayInfo.weekNumber} of 12 - Day ${dayInfo.dayNumber}`
}

function updateTodayFocus() {
  const container = document.getElementById("todayTasks")
  const dateEl = document.getElementById("todayDate")

  // Update current date/time display
  dateEl.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })

  const dayInfo = getCurrentDayInfo()

  if (!dayInfo.isValid) {
    container.innerHTML = `<div class="today-empty">${dayInfo.message}</div>`
    return
  }

  // Get tasks from current week and previous week for context
  let focusTasks = []

  // Add current week tasks (highest priority)
  if (WEEKS[dayInfo.weekIndex]) {
    WEEKS[dayInfo.weekIndex].tasks.forEach((task, taskIndex) => {
      const key = `${WEEKS[dayInfo.weekIndex].id}_${taskIndex}`
      focusTasks.push({
        text: task.t,
        key,
        done: !!state.tasks[key],
        weekNum: WEEKS[dayInfo.weekIndex].num,
        priority: "current",
        time: task.time,
        why: task.why,
      })
    })
  }

  // Add previous week incomplete tasks (lower priority)
  if (dayInfo.weekIndex > 0 && WEEKS[dayInfo.weekIndex - 1]) {
    WEEKS[dayInfo.weekIndex - 1].tasks.forEach((task, taskIndex) => {
      const key = `${WEEKS[dayInfo.weekIndex - 1].id}_${taskIndex}`
      if (!state.tasks[key]) {
        focusTasks.push({
          text: task.t,
          key,
          done: false,
          weekNum: WEEKS[dayInfo.weekIndex - 1].num,
          priority: "backlog",
          time: task.time,
          why: task.why,
        })
      }
    })
  }

  // Sort tasks: incomplete current week first, then backlog, then completed
  const incompleteCurrent = focusTasks.filter(
    (t) => t.priority === "current" && !t.done,
  )
  const incompleteBacklog = focusTasks.filter(
    (t) => t.priority === "backlog" && !t.done,
  )
  const completed = focusTasks.filter((t) => t.done)

  // Limit display to actionable items
  const displayTasks = [
    ...incompleteCurrent.slice(0, 5), // Show up to 5 current week tasks
    ...incompleteBacklog.slice(0, 2), // Show up to 2 backlog tasks
    ...completed.slice(0, 1), // Show 1 completed for context
  ]

  if (!displayTasks.length) {
    container.innerHTML =
      '<div class="today-empty">All caught up! Great job! 🎉</div>'
    return
  }

  // Render tasks with enhanced UI
  container.innerHTML = displayTasks
    .map((task) => {
      const priorityClass =
        task.priority === "current" ? "tt-current" : "tt-backlog"
      const doneClass = task.done ? "tt-done" : ""
      const timeInfo = task.time
        ? `<span class="tt-time">${task.time}</span>`
        : ""

      return `
        <div class="today-task ${doneClass} ${priorityClass}" onclick="toggleTask('${task.key}','${WEEKS[dayInfo.weekIndex].id}')">
          <div class="tt-left">
            <span class="tt-week">${task.weekNum}</span>
            <div class="tt-content">
              <div class="tt-text">${task.text}</div>
              ${task.why ? `<div class="tt-why">${task.why}</div>` : ""}
              ${timeInfo}
            </div>
          </div>
          <div class="tt-check">
            ${task.done ? '<span class="tt-check-icon">✓</span>' : ""}
          </div>
        </div>
      `
    })
    .join("")

  // Add progress indicator
  const totalTasks = focusTasks.length
  const completedTasks = focusTasks.filter((t) => t.done).length
  const progressPercent =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  if (totalTasks > 0) {
    container.innerHTML += `
      <div class="today-progress">
        <div class="today-progress-bar">
          <div class="today-progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div class="today-progress-text">${completedTasks}/${totalTasks} completed</div>
      </div>
    `
  }

  // Update FAB content when today's focus changes
  updateFabContent()
}

function renderWeekCards() {
  const dayInfo = getCurrentDayInfo()
  const activeIdx = dayInfo.isValid ? dayInfo.weekIndex : -1

  // TEMPORARY FIX: Force all weeks to be expanded for debugging
  Object.keys(state.collapsedWeeks).forEach((weekId) => {
    delete state.collapsedWeeks[weekId]
  })

  // Auto-collapse future weeks, expand current and past weeks
  WEEKS.forEach((week, index) => {
    if (dayInfo.isValid) {
      // Auto-collapse future weeks, keep current and past weeks expanded
      if (index > dayInfo.weekIndex) {
        state.collapsedWeeks[week.id] = true
      } else {
        delete state.collapsedWeeks[week.id]
      }
    } else {
      // If no start date is set, expand all weeks
      delete state.collapsedWeeks[week.id]
    }
  })
  ;["month1weeks", "month2weeks", "month3weeks"].forEach((id, mi) => {
    const c = document.getElementById(id)
    if (!c) return
    c.innerHTML = ""
    WEEKS.filter((w) => w.month === mi + 1).forEach((week) => {
      console.log(
        `Rendering week ${week.id}, tasks count:`,
        week.tasks?.length || 0,
      )
      const gi = WEEKS.indexOf(week),
        isActive = gi === activeIdx,
        isDone = state.weeksDone[week.id]
      const isCollapsed = !!state.collapsedWeeks[week.id]
      const isFuture = dayInfo.isValid && gi > dayInfo.weekIndex

      const tasks = week.tasks.map((task, ti) => {
        const key = `${week.id}_${ti}`
        console.log(`Task ${ti}:`, task)
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
      card.className = `week-card${isActive ? " active-week" : ""}${isDone ? " completed-week" : ""}${isCollapsed ? " is-collapsed" : ""}${isFuture ? " future-week" : ""}`
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

      // Add future week indicator
      let futureIndicator = ""
      if (isFuture) {
        futureIndicator =
          '<div class="future-week-indicator">🔒 Future Week - Auto-collapsed</div>'
      }

      card.innerHTML = `
        <div class="wc-top-line"></div>
        <div class="wc-header" onclick="toggleCollapse('${week.id}')">
          <div class="wc-meta">
            <div class="wc-weeknum">${week.num}</div>
            <div class="wc-status">
              ${isActive ? '<span class="active-pill">ACTIVE</span>' : ""}
              ${isFuture ? '<span class="future-pill">FUTURE</span>' : ""}
              ${isDone ? '<span style="color:var(--green);font-size:11px">Done</span>' : `${doneCount}/${total}`}
              <span class="collapse-icon">${isFuture ? "🔒" : isCollapsed ? "▶" : "▼"}</span>
            </div>
          </div>
          <div class="wc-title">${week.title}</div>
          <div class="wc-subtitle">${week.subtitle}</div>
          ${week.goal ? `<div class="wc-goal">Goal: ${week.goal}</div>` : ""}
          ${week.interviewQuestion ? `<div class="wc-interview">Interview: "${week.interviewQuestion}"</div>` : ""}
          <div class="wc-progress"><div class="wc-pb"><div class="wc-pb-fill" style="width:${pct}%"></div></div><div class="wc-pct-text">${pct}%</div></div>
        </div>
        <div class="wc-body">
          ${futureIndicator}
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
  renderTimeline()
  updateFabContent()
  if (state.tasks[key]) showToast("Task completed", "success")
}

function toggleWeekComplete(weekId, e) {
  e.stopPropagation()
  state.weeksDone[weekId] = !state.weeksDone[weekId]
  saveState(state)
  renderWeekCards()
  renderTimeline()
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
  renderTimeline()
}
function toggleCustomTask(weekId, idx) {
  if (state.customTasks[weekId]?.[idx]) {
    const wasCompleted = state.customTasks[weekId][idx].done
    state.customTasks[weekId][idx].done = !state.customTasks[weekId][idx].done

    // Play success sound when custom task is completed (not when unchecked)
    if (!wasCompleted && state.customTasks[weekId][idx].done) {
      playSuccessSound()
    }

    saveState(state)
    renderWeekCards()
    renderTimeline()
  }
}
function deleteCustomTask(weekId, idx) {
  if (state.customTasks[weekId]) {
    state.customTasks[weekId].splice(idx, 1)
    saveState(state)
    renderWeekCards()
    renderTimeline()
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

  // Initialize sound button state
  const soundBtn = document.getElementById("soundBtn")
  const soundIcon = document.getElementById("soundIcon")
  if (soundBtn && soundIcon) {
    if (state.soundEffectsEnabled === false) {
      soundBtn.classList.add("muted")
      soundIcon.textContent = "🔇"
    } else {
      soundBtn.classList.remove("muted")
      soundIcon.textContent = "🔊"
    }
  }

  renderWeekCards()
  updateStats()
  updateMonthPct()
  updateWeekInfo()
  updateTimerDisplay()
  updateSessionDots()
  updateTodayFocus()
  renderTimeline()
  initializeStickyFab()
}

document.addEventListener("DOMContentLoaded", renderAll)

// Sticky Focus FAB functionality
let lastScrollY = 0
let scrollThreshold = 100
let fabVisible = false

function initializeStickyFab() {
  const fab = document.getElementById("stickyFocusFab")
  if (!fab) return

  // Show/hide FAB based on scroll
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    // Show FAB when scrolling down past threshold
    if (currentScrollY > scrollThreshold && !fabVisible) {
      fab.classList.add("visible")
      fabVisible = true
    }
    // Hide FAB when scrolling back to top
    else if (currentScrollY < scrollThreshold && fabVisible) {
      fab.classList.remove("visible")
      fabVisible = false
    }

    lastScrollY = currentScrollY
  })

  // Initialize FAB content
  updateFabContent()
}

function updateFabContent() {
  const fabTimerDisplay = document.getElementById("fabTimerDisplay")
  const fabTimerStatus = document.getElementById("fabTimerStatus")
  const fabTaskTitle = document.getElementById("fabTaskTitle")
  const fab = document.getElementById("stickyFocusFab")

  if (!fabTimerDisplay || !fabTimerStatus || !fabTaskTitle || !fab) return

  // Update timer display
  const m = Math.floor(timerSeconds / 60)
  const s = timerSeconds % 60
  const timerStr = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
  fabTimerDisplay.textContent = timerStr

  // Update timer status
  if (timerRunning) {
    fabTimerStatus.textContent =
      timerSeconds === WORK_SECONDS ? "FOCUS" : "DEEP WORK"
    fab.classList.add("timer-running")
  } else {
    fabTimerStatus.textContent = "READY"
    fab.classList.remove("timer-running")
  }

  // Update current focus task
  const currentTask = getCurrentFocusTask()
  fabTaskTitle.textContent = currentTask || "No active task"
}

function getCurrentFocusTask() {
  const dayInfo = getCurrentDayInfo()
  if (!dayInfo.isValid) return null

  // Get incomplete current week tasks
  if (WEEKS[dayInfo.weekIndex]) {
    const incompleteTasks = WEEKS[dayInfo.weekIndex].tasks.filter(
      (task, taskIndex) => {
        const key = `${WEEKS[dayInfo.weekIndex].id}_${taskIndex}`
        return !state.tasks[key]
      },
    )

    if (incompleteTasks.length > 0) {
      return incompleteTasks[0].t
    }
  }

  return null
}

function toggleTimerFromFab() {
  toggleTimer()
}

// Enhanced timer display update to include FAB
const originalUpdateTimerDisplay = updateTimerDisplay
updateTimerDisplay = function () {
  originalUpdateTimerDisplay()
  updateFabContent()
}
