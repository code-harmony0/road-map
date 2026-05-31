/**
 * Command Palette Configuration
 * Re-exports from content/ (single source of truth)
 * Actions are bound in main.js to avoid circular dependencies
 */

import { COMMANDS as commands } from "../content/index.js"

// Action bindings (set in main.js)
const actions = {}

/**
 * Bind an action to a command ID
 * @param {string} id - Command ID
 * @param {function} action - Action function
 */
export function bindAction(id, action) {
  actions[id] = action
}

/**
 * Execute command by ID
 * @param {string} id - Command ID
 */
export function executeCommand(id) {
  if (actions[id]) {
    actions[id]()
  }
}

/**
 * Get all available commands
 * @returns {Array} Array of command objects with bound actions
 */
export function getCommands() {
  return commands.map((cmd) => ({
    ...cmd,
    action:
      actions[cmd.id] || (() => console.warn(`No action bound for ${cmd.id}`)),
  }))
}

/**
 * Filter commands by search query
 * @param {string} query - Search query
 * @returns {Array} Filtered commands
 */
export function filterCommands(query) {
  const commands = getCommands()
  if (!query) return commands
  return commands.filter((c) =>
    c.text.toLowerCase().includes(query.toLowerCase()),
  )
}
