export function renderWeekCards(weeks, state) {
  ;["month1weeks", "month2weeks", "month3weeks"].forEach((id, mi) => {
    const container = document.getElementById(id)
    if (!container) return
    container.innerHTML = ""

    const monthWeeks = weeks.filter((w) => w.month === mi + 1)
    monthWeeks.forEach((week) => {
      const isCollapsed = state.collapsedWeeks[week.id]
      const card = document.createElement("div")
      card.className = "week-card"
      card.dataset.weekId = week.id
      if (isCollapsed) card.classList.add("is-collapsed")

      const doneTasks = week.tasks.filter((_, ti) => state.tasks[`${week.id}_${ti}`]).length
      const customTasks = state.customTasks[week.id] || []
      const doneCustom = customTasks.filter((t) => t.done).length
      const total = week.tasks.length + customTasks.length
      const done = doneTasks + doneCustom
      const pct = total > 0 ? Math.round((done / total) * 100) : 0

      card.innerHTML = `
        <div class="wc-header" data-action="toggleCollapse" data-week-id="${week.id}" role="button" tabindex="0" aria-label="Toggle ${week.num}: ${week.title}">
          <div class="wc-header-main">
            <div class="wc-weeknum" style="color: var(${week.color})">${week.num}</div>
            <div class="wc-title">${week.title}</div>
          </div>
          <div class="wc-header-right">
            <div class="wc-progress-mini">
              <div class="wc-progress-bar"><div class="wc-progress-fill" style="width: ${pct}%"></div></div>
              <span class="wc-pct">${pct}%</span>
            </div>
            <span class="wc-icon">${isCollapsed ? "▲" : "▼"}</span>
          </div>
        </div>
        <div class="wc-body">
          <div class="wc-subtitle">${week.subtitle}</div>
          <div class="wc-tasks">
            ${week.tasks
              .map((task, ti) => {
                const key = `${week.id}_${ti}`
                const isDone = !!state.tasks[key]
                const hasNote = !!state.notes[key]
                return `
                <div class="task-item ${isDone ? "done" : ""}" data-action="toggleTask" data-key="${key}" role="button" tabindex="0" aria-label="Toggle task: ${task.t.replace(/"/g, "&quot;")}">
                  <div class="task-check"></div>
                  <div class="task-content">
                    <div class="task-head">
                      <div class="task-text">${task.t}</div>
                      ${task.time ? `<div class="task-est">⏱ ${task.time}</div>` : ""}
                    </div>
                    ${task.why ? `<div class="task-why">${task.why}</div>` : ""}
                    ${
                      task.links?.length
                        ? `
                      <div class="task-links" data-skip-toggle="true">
                        ${task.links
                          .map(
                            (l) =>
                              `<a href="${l.url}" target="_blank" class="task-link tag-${l.type}">${l.tag}</a>`,
                          )
                          .join("")}
                      </div>
                    `
                        : ""
                    }
                  </div>
                  <div class="task-actions">
                    <button class="task-note-btn ${hasNote ? "active" : ""}" data-action="openNote" data-key="${key}">
                      ${hasNote ? "📝" : "🗒️"}
                    </button>
                  </div>
                </div>
              `
              })
              .join("")}
            ${customTasks
              .map(
                (t, ti) => `
              <div class="task-item custom ${t.done ? "done" : ""}" data-action="toggleCustomTask" data-week-id="${week.id}" data-index="${ti}" role="button" tabindex="0" aria-label="Toggle custom task: ${t.text.replace(/"/g, "&quot;")}">
                <div class="task-check"></div>
                <div class="task-text">${t.text}</div>
                <button class="task-del" data-action="deleteCustomTask" data-week-id="${week.id}" data-index="${ti}">&times;</button>
              </div>
            `,
              )
              .join("")}
          </div>
          <div class="wc-add-task">
            <input type="text" placeholder="Add custom task..." data-action="addCustomTask" data-week-id="${week.id}">
          </div>
        </div>
      `

      container.appendChild(card)
    })
  })
}
