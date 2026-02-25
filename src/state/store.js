export function createStore({ storage, storageKey, backupKey, getDefaultState }) {
  const listeners = new Set()

  let lastLoadMeta = {
    recoveredFromBackup: false,
  }

  function load() {
    lastLoadMeta = { recoveredFromBackup: false }
    const fallback = getDefaultState()

    try {
      const raw = storage.getItem(storageKey)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed && typeof parsed === "object" && parsed.version === 4) {
          return { ...fallback, ...parsed }
        }
      }
    } catch {}

    try {
      const backupRaw = storage.getItem(backupKey)
      if (backupRaw) {
        const parsed = JSON.parse(backupRaw)
        if (parsed && typeof parsed === "object") {
          storage.setItem(storageKey, backupRaw)
          lastLoadMeta.recoveredFromBackup = true
          return { ...fallback, ...parsed }
        }
      }
    } catch {}

    return fallback
  }

  let state = load()

  function getState() {
    return state
  }

  function getLastLoadMeta() {
    return lastLoadMeta
  }

  function persist() {
    try {
      const raw = JSON.stringify(state)
      storage.setItem(storageKey, raw)
      storage.setItem(backupKey, raw)
      return true
    } catch {
      return false
    }
  }

  function backupNow() {
    try {
      storage.setItem(backupKey, JSON.stringify(state))
    } catch {}
  }

  function setState(mutator, { skipPersist = false } = {}) {
    if (typeof mutator === "function") mutator(state)
    if (!skipPersist) persist()
    listeners.forEach((fn) => fn(state))
  }

  function replaceState(next, { skipPersist = false } = {}) {
    state = next
    if (!skipPersist) persist()
    listeners.forEach((fn) => fn(state))
  }

  function reset() {
    state = getDefaultState()
    persist()
    listeners.forEach((fn) => fn(state))
  }

  function subscribe(fn) {
    listeners.add(fn)
    return () => listeners.delete(fn)
  }

  return {
    getState,
    setState,
    replaceState,
    reset,
    subscribe,
    persist,
    backupNow,
    getLastLoadMeta,
  }
}
