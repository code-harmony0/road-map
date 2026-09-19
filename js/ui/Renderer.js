/**
 * Renderer Module
 * Renders milestone content and task lists
 */

import { state } from "../core/State.js"
import { activePhases, activeRoadmap } from "../config/milestones.js"
import { goals } from "../features/JobTracker.js"
import { toggleTask } from "../features/TaskManager.js"

/**
 * Render all content sections
 */
export function renderContent() {
  renderChrome()
  activePhases().forEach((phase, i) => renderSection(`m${i}Body`, phase.weeks))
  renderPhaseRails()
}

/**
 * Repaint the labels that differ between roadmaps: mission brief, milestone
 * headers, sidebar items and mobile tabs. Task rendering is identical for both.
 */
function renderChrome() {
  const roadmap = activeRoadmap()

  setText(".mission-copy h1", roadmap.headline)

  const g = goals()
  const radar = document.querySelector(".jst-full")
  if (radar) {
    radar.hidden = !roadmap.paced
    const targets = radar.querySelectorAll(".jst-target")
    ;[g.applications, g.interviews, g.offers].forEach((v, i) => {
      if (targets[i]) targets[i].textContent = `Goal: ${v}`
    })
  }

  setText(".mission-copy p", roadmap.blurb)
  setText("#roadmapName", roadmap.short)
  setText("#roadmapTag", roadmap.tag || "")
  document.getElementById("roadmapTag")?.classList.toggle("primary", !!roadmap.primary)

  document.querySelectorAll(".mission-metrics .metric-tile").forEach((tile, i) => {
    const m = roadmap.metrics[i]
    if (!m) return
    setText("span", m.label, tile)
    setText("strong", m.value, tile)
  })

  roadmap.phases.forEach((phase, i) => {
    setText(`#m${i} .milestone-name`, phase.header.name)
    setText(`#m${i} .milestone-sub`, phase.header.sub)
    setIcon(`#m${i} .milestone-icon i`, phase.icon)

    setText(`#sideM${i} .sb-text`, phase.nav.title)
    setText(`#sideM${i} .sidebar-sub`, phase.nav.sub)
    setIcon(`#sideM${i} .sidebar-icon-only`, phase.icon)

    const tab = document.querySelectorAll(".mob-tab")[i]
    if (tab) {
      setText("span", phase.nav.mob, tab)
      setIcon("i", phase.icon, tab)
    }
  })
}

function setText(selector, value, root = document) {
  const el = root.querySelector(selector)
  if (el) el.textContent = value
}

function setIcon(selector, icon, root = document) {
  const el = root.querySelector(selector)
  if (!el) return
  const keep = ["ph-fill", "ph-bold"]
  ;[...el.classList].forEach((c) => {
    if (c.startsWith("ph-") && !keep.includes(c)) el.classList.remove(c)
  })
  el.classList.add(icon)
}

/**
 * Render a single section
 * @param {string} containerId - Container element ID
 * @param {Array} data - Milestone data array
 */
function renderSection(containerId, data) {
  const container = document.getElementById(containerId)
  if (!container) return

  const { tasks, weeksCollapsed } = state.get()

  container.innerHTML = data
    .map((milestone) => {
      const tasksHtml = renderTasks(milestone, tasks)
      const isCollapsed = weeksCollapsed[milestone.id]
      const isBossDefeated = isMilestoneComplete(milestone, tasks)

      return `
      <div class="week-card glass-panel">
        <div class="week-card-top" style="background:${milestone.color}"></div>
        
        <div class="wc-header" onclick="window.toggleWeek('${milestone.id}')">
          <div class="wc-lane" style="--lane:${milestone.color}">
            <span class="wc-figure">${laneFigure(milestone.num)}</span>
            <span class="wc-unit">${laneUnit(milestone.num)}</span>
          </div>
          <div class="wc-left">
            <div class="wc-num" style="color:${milestone.color}">${milestone.theme}</div>
            <div class="wc-title">${milestone.title}</div>
          </div>
          <div class="wc-right">
            <span class="wc-load">${weekLoad(milestone)}</span>
            <i class="ph-bold ph-caret-down wc-arrow ${isCollapsed ? "" : "open"}" 
               id="${milestone.id}Arrow"></i>
          </div>
        </div>
        
        <div class="wc-body ${isCollapsed ? "hidden" : ""}" id="${milestone.id}Body">
          <div class="wc-body-inner">
            <div class="task-list" style="margin-top: 1rem;">
              ${tasksHtml}
            </div>
            
            <div class="boss-battle-box" 
                 style="${isBossDefeated ? "border-color: var(--green); box-shadow: inset 0 0 20px rgba(16,185,129,0.15);" : ""}">
              <div class="boss-title" style="${isBossDefeated ? "color: var(--green);" : ""}">
                <i class="ph-fill ph-alien"></i> 
                Boss: ${milestone.boss.name} ${isBossDefeated ? "(DEFEATED)" : ""}
              </div>
              <div class="boss-text"><strong>Challenge:</strong> ${milestone.boss.challenge}</div>
              <div class="boss-text" style="color: var(--txt3); font-size: 0.8rem;">
                <strong>Resume:</strong> ${milestone.boss.resume || milestone.boss.resumeLine}
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem;">
                <span class="boss-reward">+${milestone.boss.reward || milestone.boss.rewardXP} XP Bonus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    })
    .join("")
}

/**
 * The card's ordinal, set large. "WEEK 07-08" -> "07", "MONTH 05+" -> "05".
 * @param {string} num - Card label
 * @returns {string} Two-digit figure
 */
function laneFigure(num) {
  const match = num.match(/\d+/)
  return match ? match[0] : "--"
}

/**
 * The unit that ordinal counts in: WEEK, MONTH, GAP, MOAT, AI, LEV.
 * @param {string} num - Card label
 * @returns {string} Unit word
 */
function laneUnit(num) {
  return num.replace(/[\d\-+\s]+$/, "").trim() || "STEP"
}

/**
 * Fill each phase header's completion rail. Progress is the one number this app
 * exists to move, so it gets a real bar, not a percentage buried in text.
 */
function renderPhaseRails() {
  const { tasks } = state.get()

  activePhases().forEach((phase, i) => {
    const header = document.querySelector(`#m${i} .milestone-header`)
    if (!header) return

    const all = phase.weeks.flatMap((w) => w.tasks)
    const done = all.filter((t) => tasks[t.id]).length
    const pct = all.length ? Math.round((done / all.length) * 100) : 0

    let rail = header.querySelector(".phase-rail")
    if (!rail) {
      rail = document.createElement("div")
      rail.className = "phase-rail"
      rail.innerHTML = '<div class="phase-rail-fill"></div><span class="phase-count"></span>'
      header.appendChild(rail)
    }

    rail.querySelector(".phase-rail-fill").style.transform = `scaleX(${pct / 100})`
    rail.querySelector(".phase-count").textContent = `${done}/${all.length}`
    rail.classList.toggle("complete", pct === 100)
  })
}

/**
 * Real weekly load for a card, summed from its own tasks so the label can never
 * drift from the plan. Cards spanning two weeks (e.g. "WEEK 07-08") are halved.
 * @param {object} milestone - Milestone object
 * @returns {string} e.g. "11h/wk · A 7 · B 4"
 */
function weekLoad(milestone) {
  const hours = (t) => parseFloat(t.time) || 0
  const span = /\d+\s*-\s*\d+/.test(milestone.num) ? 2 : 1
  const unit = /^WEEK/i.test(milestone.num) ? "/wk" : /^MONTH/i.test(milestone.num) ? "/mo" : " total"

  const per = (list) => list.reduce((sum, t) => sum + hours(t), 0) / span
  const round = (n) => (Number.isInteger(n) ? n : n.toFixed(1))

  const total = per(milestone.tasks)
  const a = per(milestone.tasks.filter((t) => t.day === "Track A"))
  const b = per(milestone.tasks.filter((t) => t.day === "Track B"))

  const split = a && b ? ` · A ${round(a)} · B ${round(b)}` : a ? " · Track A only" : ""
  return `${round(total)}h${unit}${split}`
}

/**
 * Render tasks for a milestone
 * @param {object} milestone - Milestone object
 * @param {object} tasksState - Tasks state
 * @returns {string} HTML string
 */
function renderTasks(milestone, tasksState) {
  const details = activeRoadmap().details || {}

  return milestone.tasks
    .map((task, i) => {
      const key = task.id || `${milestone.id}_${i}`
      const isDone = tasksState[key]

      return `
      <div class="task-item ${isDone ? "done" : ""}" 
           onclick="window.handleTaskToggle('${key}', ${task.xp})">
        <div class="task-cb ${isDone ? "checked" : ""}">
          <i class="ph-bold ph-check"></i>
        </div>
        <div class="task-content">
          <div class="task-text">${task.text}</div>
          <div class="task-meta">
            <span class="task-badge badge-day"><i class="ph-bold ph-calendar"></i> ${task.day}</span>
            <span class="task-badge badge-depth badge-${task.depth ? task.depth.toLowerCase() : 'none'}"><i class="ph-bold ph-stack"></i> ${task.depth}</span>
            <span class="task-badge badge-time"><i class="ph-bold ph-clock"></i> ${task.time}</span>
            <span class="task-badge badge-xp">+${task.xp} XP</span>
          </div>
          ${task.reason ? `<div class="task-reason">${task.reason}</div>` : ""}
          ${renderDetail(details[key])}
        </div>
      </div>
    `
    })
    .join("")
}

/**
 * The "how to actually do this" panel under a task. Native <details> so it
 * needs no JS; stopPropagation keeps opening it from ticking the task.
 * Accepts both schemas: v1 (definitionOfDone/tools) and v2 (doneWhen/resources).
 * @param {object|undefined} d - Detail entry for the task
 * @returns {string} HTML string, empty when the task has no detail
 */
function renderDetail(d) {
  if (!d) return ""

  const list = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>`
  const block = (label, body) => (body ? `<div class="td-block"><h4>${label}</h4>${body}</div>` : "")
  const done = d.doneWhen || d.definitionOfDone
  const resources = d.resources || d.tools

  return `
    <details class="task-detail" onclick="event.stopPropagation()">
      <summary><i class="ph-bold ph-list-checks"></i> How to do this</summary>
      ${block("Goal", d.objective && `<p>${d.objective}</p>`)}
      ${block("Why", d.why && `<p>${d.why}</p>`)}
      ${block("Steps", d.steps?.length && `<ol>${d.steps.map((s) => `<li>${s}</li>`).join("")}</ol>`)}
      ${block("Use", resources?.length && list(resources))}
      ${block("Deliverable", d.deliverable && `<p>${d.deliverable}</p>`)}
      ${block("Done when", done && `<p>${done}</p>`)}
      ${block("Don't", d.commonMistakes?.length && list(d.commonMistakes))}
    </details>
  `
}

/**
 * Check if milestone is complete
 * @param {object} milestone - Milestone object
 * @param {object} tasks - Tasks state
 * @returns {boolean} True if all tasks complete
 */
function isMilestoneComplete(milestone, tasks) {
  return milestone.tasks.every((task, i) => tasks[task.id || `${milestone.id}_${i}`])
}

/**
 * Handle task toggle from inline onclick
 * @param {string} key - Task key
 * @param {number} xp - XP value
 */
function handleTaskToggle(key, xp) {
  toggleTask(key, xp)
  renderContent()
}

// Expose to window
if (typeof window !== "undefined") {
  window.handleTaskToggle = handleTaskToggle
}
