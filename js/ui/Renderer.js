/**
 * Renderer Module
 * Renders milestone content and task lists
 */

import { state } from "../core/State.js"
import { M0_WEEKS, M1_WEEKS, M2_WEEKS, M3_WEEKS } from "../config/milestones.js"
import { toggleTask } from "../features/TaskManager.js"

/**
 * Render all content sections
 */
export function renderContent() {
  renderSection("m0Body", M0_WEEKS)
  renderSection("m1Body", M1_WEEKS)
  renderSection("m2Body", M2_WEEKS)
  renderSection("m3Body", M3_WEEKS)
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
        <div class="week-card-top" 
             style="background:${milestone.color}; box-shadow: 0 0 15px ${milestone.color}; opacity: 0.8;">
        </div>
        
        <div class="wc-header" onclick="window.toggleWeek('${milestone.id}')">
          <div class="wc-left">
            <div class="wc-num" style="color:${milestone.color}">
              <i class="ph-bold ph-hash"></i> ${milestone.num} | ${milestone.theme}
            </div>
            <div class="wc-title">${milestone.title}</div>
          </div>
          <i class="ph-bold ph-caret-down wc-arrow ${isCollapsed ? "" : "open"}" 
             id="${milestone.id}Arrow"></i>
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
 * Render tasks for a milestone
 * @param {object} milestone - Milestone object
 * @param {object} tasksState - Tasks state
 * @returns {string} HTML string
 */
function renderTasks(milestone, tasksState) {
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
            <span class="task-badge badge-depth"><i class="ph-bold ph-stack"></i> ${task.depth}</span>
            <span class="task-badge"><i class="ph-bold ph-clock"></i> ${task.time}</span>
            <span class="task-badge badge-xp">+${task.xp} XP</span>
            <span style="font-size: 0.8rem; color: var(--txt3); margin-left: 0.5rem;">${task.reason}</span>
          </div>
        </div>
      </div>
    `
    })
    .join("")
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
