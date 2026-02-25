export function playSuccessSound({ soundEffectsEnabled }) {
  if (soundEffectsEnabled === false) return

  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const notes = [261.63, 329.63, 392.0]
    const duration = 0.15

    notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = frequency
      oscillator.type = "sine"

      const now = audioContext.currentTime
      gainNode.gain.setValueAtTime(0, now)
      gainNode.gain.linearRampToValueAtTime(0.1, now + 0.01)
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration)

      oscillator.start(now + index * 0.05)
      oscillator.stop(now + duration + index * 0.05)
    })
  } catch {}
}

export function syncSoundButtonUI(enabled) {
  const soundBtn = document.getElementById("soundBtn")
  const soundIcon = document.getElementById("soundIcon")
  if (!soundBtn || !soundIcon) return

  if (enabled) {
    soundBtn.classList.remove("muted")
    soundIcon.textContent = "🔊"
  } else {
    soundBtn.classList.add("muted")
    soundIcon.textContent = "🔇"
  }
}
