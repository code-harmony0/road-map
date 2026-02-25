# MCP Server Setup for IDE Integration

## Overview
This MCP (Model Context Protocol) server allows IDE assistants to directly interact with your roadmap data through structured API calls instead of requiring you to open the web browser.

## Features

### Available Tools
- **`get_roadmap_data`** - Get complete roadmap structure
- **`get_user_progress`** - Get current progress and completed tasks
- **`get_today_tasks`** - Get today's tasks based on start date
- **`get_week_tasks`** - Get all tasks for a specific week
- **`mark_task_complete`** - Mark a task as complete/incomplete
- **`mark_week_complete`** - Mark an entire week as complete
- **`add_note`** - Add or update notes for tasks
- **`search_tasks`** - Search tasks by content

## Quick Setup

### 1. Install Dependencies
```bash
npm install @modelcontextprotocol/sdk
```

### 2. Configure MCP Server
Add to your IDE's MCP configuration (example for Windsurf):

```json
{
  "mcpServers": {
    "roadmap": {
      "command": "node",
      "args": ["/path/to/roadmap/mcp-server.js"],
      "cwd": "/path/to/roadmap"
    }
  }
}
```

### 3. Start Using
```bash
# Start the MCP server
node mcp-server.js

# Or use the package.json
npm start
```

## Usage Examples

### Query Today's Tasks
```javascript
// Ask your IDE assistant:
"What are my tasks for today?"

// Behind the scenes, it calls:
mcp.call_tool("get_today_tasks", {})
```

### Mark Task Complete
```javascript
// Ask your IDE assistant:
"Mark task w1_t3 as complete"

// Behind the scenes, it calls:
mcp.call_tool("mark_task_complete", {
  taskId: "w1_t3",
  completed: true
})
```

### Search Tasks
```javascript
// Ask your IDE assistant:
"Find all tasks about PostgreSQL"

// Behind the scenes, it calls:
mcp.call_tool("search_tasks", {
  query: "PostgreSQL",
  limit: 5
})
```

### Add Notes
```javascript
// Ask your IDE assistant:
"Add a note to task w2_t1: 'Remember to check indexes'"

// Behind the scenes, it calls:
mcp.call_tool("add_note", {
  taskId: "w2_t1",
  note: "Remember to check indexes"
})
```

## API Responses

### Get Today's Tasks Response
```json
{
  "success": true,
  "data": {
    "date": "2026-02-25",
    "weekIndex": 3,
    "totalTasks": 8,
    "completedTasks": 2,
    "tasks": [
      {
        "taskId": "w3_t1",
        "weekId": "w3",
        "weekNum": "WEEK 03",
        "text": "Master window functions...",
        "time": "1 hour",
        "completed": true,
        "hasNote": false,
        "links": [...]
      }
    ]
  }
}
```

### Search Tasks Response
```json
{
  "success": true,
  "data": {
    "query": "PostgreSQL",
    "totalResults": 12,
    "limited": false,
    "tasks": [
      {
        "taskId": "w1_t4",
        "text": "Master JOINs...",
        "matchReason": "text"
      }
    ]
  }
}
```

## Benefits

### 🚀 Productivity Boost
- **No context switching** - Stay in your IDE
- **Natural language queries** - Ask questions in plain English
- **Instant updates** - Real-time progress tracking
- **Bulk operations** - Complete multiple tasks at once

### 🔒 Data Integrity
- **Type-safe operations** - All inputs validated
- **Atomic updates** - No partial state corruption
- **Error handling** - Clear feedback on failures
- **Backup preservation** - LocalStorage as fallback

### 🔄 Real-time Sync
- **Instant reflection** - Changes appear immediately in web UI
- **Cross-platform** - Works with any MCP-compatible IDE
- **Extensible** - Easy to add new tools
- **Lightweight** - Minimal resource usage

## Advanced Usage

### Custom Queries
```javascript
// Find all advanced tasks
mcp.call_tool("search_tasks", {
  query: "advanced",
  limit: 20
})

// Get specific week details
mcp.call_tool("get_week_tasks", {
  weekId: "w5"
})
```

### Batch Operations
```javascript
// Mark multiple tasks complete
const taskIds = ["w1_t1", "w1_t2", "w1_t3"];
for (const taskId of taskIds) {
  await mcp.call_tool("mark_task_complete", {
    taskId,
    completed: true
  });
}
```

## Development

### Adding New Tools
1. Add tool definition to `TOOLS` array in `mcp-server.js`
2. Implement handler function (`handle*`)
3. Add case in `callTool` switch statement
4. Update documentation

### Testing
```bash
# Test MCP server
node -e "
const { Client } = require('@modelcontextprotocol/sdk/client');
const client = new Client({
  name: 'test-client',
  version: '1.0.0'
}, {
  command: 'node',
  args: ['./mcp-server.js']
});

client.callTool('get_roadmap_data', {}).then(console.log);
"
```

## Troubleshooting

### "Server not starting"
- Check Node.js version (>=16.0.0 required)
- Verify MCP SDK installation
- Check file paths in configuration

### "Tools not available"
- Verify MCP server is running
- Check IDE configuration
- Look for connection errors in logs

### "Data not syncing"
- Ensure roadmap.json exists in same directory
- Check LocalStorage permissions
- Verify task ID format (week_taskId)

This MCP server transforms your roadmap from a static web app into an interactive IDE companion, dramatically boosting your productivity.
