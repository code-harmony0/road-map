let currentNoteKey = null

export function openNote(state, key, taskText, e) {
  e?.stopPropagation?.()
  currentNoteKey = key
  const noteTask = document.getElementById("noteTask")
  const noteText = document.getElementById("noteText")
  if (noteTask) noteTask.textContent = taskText
  if (noteText) noteText.value = state.notes[key] || ""
  document.getElementById("noteOverlay")?.classList.add("open")
  setTimeout(() => document.getElementById("noteText")?.focus(), 100)
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
