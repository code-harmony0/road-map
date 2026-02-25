export function showSaveIndicator() {
  const el = document.getElementById("saveIndicator")
  if (!el) return
  el.classList.add("show")
  clearTimeout(showSaveIndicator._t)
  showSaveIndicator._t = setTimeout(() => el.classList.remove("show"), 800)
}
