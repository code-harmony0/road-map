function syncModalOpenClass() {
  const noteOpen = document.getElementById("noteOverlay")?.classList.contains("open")
  const backupOpen = document.getElementById("backupOverlay")?.classList.contains("open")
  const standupOpen = document.getElementById("standupOverlay")?.classList.contains("open")
  document.body.classList.toggle("modal-open", !!(noteOpen || backupOpen || standupOpen))
}

export function openBackupModal() {
  document.getElementById("backupOverlay")?.classList.add("open")
  syncModalOpenClass()
}

export function closeBackupModal() {
  document.getElementById("backupOverlay")?.classList.remove("open")
  syncModalOpenClass()
}

export function exportData(state) {
  const a = document.createElement("a")
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }),
  )
  a.download = `roadmap-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
}

export function copyDataToClipboard(state) {
  return navigator.clipboard.writeText(JSON.stringify(state, null, 2))
}

export function importDataFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        resolve(JSON.parse(e.target.result))
      } catch (err) {
        reject(err)
      }
    }
    reader.onerror = reject
    reader.readAsText(file)
  })
}
