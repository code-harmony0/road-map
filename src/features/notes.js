let currentNoteKey = null

function autosizeTextarea(el) {
  if (!el) return
  el.style.height = "auto"
  el.style.height = `${el.scrollHeight}px`
}

export function openNote(state, key, taskText, e) {
  e?.stopPropagation?.()
  currentNoteKey = key
  const noteTask = document.getElementById("noteTask")
  const noteText = document.getElementById("noteText")
  if (noteTask) noteTask.textContent = taskText
  if (noteText) {
    noteText.value = state.notes[key] || ""
    if (!noteText.dataset.autosizeBound) {
      noteText.addEventListener("input", () => autosizeTextarea(noteText))
      noteText.dataset.autosizeBound = "1"
    }
    autosizeTextarea(noteText)
  }
  document.getElementById("noteOverlay")?.classList.add("open")
  setTimeout(() => {
    document.getElementById("noteText")?.focus()
    autosizeTextarea(document.getElementById("noteText"))
  }, 100)
}

export function closeNote() {
  document.getElementById("noteOverlay")?.classList.remove("open")
  currentNoteKey = null
}

export function saveNote(state) {
  if (!currentNoteKey) return { changed: false }
  const text = document.getElementById("noteText")?.value?.trim() || ""
  if (text) state.notes[currentNoteKey] = text
  else delete state.notes[currentNoteKey]
  const savedKey = currentNoteKey
  closeNote()
  return { changed: true, key: savedKey }
}
