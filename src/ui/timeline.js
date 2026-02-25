import { getCurrentDayInfo } from "../domain/roadmap.js"

export function renderTimeline(weeks, state) {
  const container = document.getElementById("timelineNodes")
  if (!container) return

  const dayInfo = getCurrentDayInfo(state.startDate)
  const activeWeek = dayInfo.isValid ? dayInfo.weekNumber : 0
  const totalWeeks = 12
  const activeIndex = activeWeek > 0 ? Math.min(activeWeek - 1, totalWeeks - 1) : -1

  container.innerHTML = ""

  const timelineContainer = container.parentElement
  timelineContainer?.querySelector(".timeline-progress")?.remove()

  const track = timelineContainer?.querySelector(".timeline-track")
  if (timelineContainer) {
    timelineContainer.classList.toggle("no-active-week", activeIndex < 0)
  }

  if (track) {
    const stop =
      activeIndex < 0 || totalWeeks <= 1
        ? 0
        : (activeIndex / (totalWeeks - 1)) * 100
    track.style.setProperty("--stop", `${stop}%`)
  }

  for (let index = 0; index < totalWeeks; index++) {
    const week = weeks[index]
    const node = document.createElement("div")
    node.className = "timeline-node"
    node.setAttribute("data-week", `W${index + 1}`)
    node.setAttribute("title", `Week ${index + 1}`)

    if (activeIndex < 0) node.classList.add("future")
    else if (index < activeIndex) node.classList.add("completed")
    else if (index === activeIndex) node.classList.add("active")
    else node.classList.add("future")

    node.addEventListener("click", () => {
      if (!week?.id) return
      const weekCard = document.querySelector(`.week-card[data-week-id="${week.id}"]`)
      if (!weekCard) return
      weekCard.scrollIntoView({ behavior: "smooth", block: "center" })
      weekCard.style.transition = "box-shadow 0.3s ease"
      weekCard.style.boxShadow = "0 0 20px rgba(59, 130, 246, 0.3)"
      setTimeout(() => {
        weekCard.style.boxShadow = ""
      }, 1000)
    })

    container.appendChild(node)
  }
}
