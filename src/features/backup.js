export function openBackupModal() {
  document.getElementById("backupOverlay")?.classList.add("open")
}

export function closeBackupModal() {
  document.getElementById("backupOverlay")?.classList.remove("open")
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
