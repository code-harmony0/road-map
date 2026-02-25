let toastTimeout

export function showToast(msg, type = "info") {
  const t = document.getElementById("toast")
  if (!t) return
  t.textContent = msg
  t.className = `toast ${type} show`
  clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => t.classList.remove("show"), 2500)
}
