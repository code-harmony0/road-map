// MCP Server for Roadmap IDE Integration
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
  ReadResourceRequestSchema,
  ReadResourceResult,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import type { RoadmapData, ProgressState, BaseTask, BaseWeek } from './types.js';

// Load roadmap data
let roadmapData: RoadmapData | null = null;
let userState: ProgressState | null = null;

// In-memory storage for MCP server
const storage = {
  async loadRoadmap(): Promise<RoadmapData> {
    try {
      const response = await fetch('./roadmap.json');
      return await response.json();
    } catch (error) {
      throw new McpError(
        ErrorCode.InternalError,
        `Failed to load roadmap: ${error}`
      );
    }
  },

  async loadUserState(): Promise<ProgressState> {
    try {
      const raw = localStorage.getItem('rn_roadmap_v4');
      if (raw) {
        return JSON.parse(raw);
      }
      // Return default state if no local data
      return {
        tasks: {},
        weeksDone: {},
        startDate: null,
        streak: 0,
        lastStudyDay: null,
        bestStreak: 0,
        sessions: 0,
        sessionsToday: 0,
        sessionsDate: null,
        timerSeconds: 25 * 60,
        notes: {},
        customTasks: {},
        taskDates: {},
        collapsedWeeks: {},
        version: 4
      };
    } catch (error) {
      throw new McpError(
        ErrorCode.InternalError,
        `Failed to load user state: ${error}`
      );
    }
  },

  async saveUserState(state: ProgressState): Promise<void> {
    try {
      localStorage.setItem('rn_roadmap_v4', JSON.stringify(state));
    } catch (error) {
      throw new McpError(
        ErrorCode.InternalError,
        `Failed to save user state: ${error}`
      );
    }
  }
};

// MCP Tools
const TOOLS: Tool[] = [
  {
    name: 'get_roadmap_data',
    description: 'Get the complete roadmap data structure',
    inputSchema: {
      type: 'object',
      properties: {},
    } as any,
  },
  {
    name: 'get_user_progress',
    description: 'Get current user progress and completed tasks',
    inputSchema: {
      type: 'object',
      properties: {},
    } as any,
  },
  {
    name: 'get_today_tasks',
    description: 'Get tasks scheduled for today based on start date',
    inputSchema: {
      type: 'object',
      properties: {
        date: {
          type: 'string',
          description: 'Optional date string (YYYY-MM-DD). Defaults to today.',
        },
      },
    } as any,
  },
  {
    name: 'get_week_tasks',
    description: 'Get all tasks for a specific week',
    inputSchema: {
      type: 'object',
      properties: {
        weekId: {
          type: 'string',
          description: 'Week ID (e.g., "w1", "w2")',
        },
      },
      required: ['weekId'],
    } as any,
  },
  {
    name: 'mark_task_complete',
    description: 'Mark a specific task as complete',
    inputSchema: {
      type: 'object',
      properties: {
        taskId: {
          type: 'string',
          description: 'Task ID (e.g., "w1_t1", "w2_t3")',
        },
        completed: {
          type: 'boolean',
          description: 'Whether the task is completed (true) or not (false)',
        },
      },
      required: ['taskId', 'completed'],
    } as any,
  },
  {
    name: 'mark_week_complete',
    description: 'Mark an entire week as complete',
    inputSchema: {
      type: 'object',
      properties: {
        weekId: {
          type: 'string',
          description: 'Week ID (e.g., "w1", "w2")',
        },
        completed: {
          type: 'boolean',
          description: 'Whether the week is completed (true) or not (false)',
        },
      },
      required: ['weekId', 'completed'],
    } as any,
  },
  {
    name: 'add_note',
    description: 'Add or update a note for a specific task',
    inputSchema: {
      type: 'object',
      properties: {
        taskId: {
          type: 'string',
          description: 'Task ID (e.g., "w1_t1", "w2_t3")',
        },
        note: {
          type: 'string',
          description: 'Note content for the task',
        },
      },
      required: ['taskId', 'note'],
    } as any,
  },
  {
    name: 'search_tasks',
    description: 'Search tasks by text content',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query to find matching tasks',
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default: 10)',
        },
      },
      required: ['query'],
    } as any,
  },
];

// MCP Server Implementation
const server = new Server(
  {
    name: 'roadmap-mcp-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
  {
    async listTools(): Promise<Tool[]> {
      return TOOLS;
    },

    async callTool(request: CallToolRequestSchema): Promise<any> {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'get_roadmap_data':
            return await handleGetRoadmapData();

          case 'get_user_progress':
            return await handleGetUserProgress();

          case 'get_today_tasks':
            return await handleGetTodayTasks(args);

          case 'get_week_tasks':
            return await handleGetWeekTasks(args);

          case 'mark_task_complete':
            return await handleMarkTaskComplete(args);

          case 'mark_week_complete':
            return await handleMarkWeekComplete(args);

          case 'add_note':
            return await handleAddNote(args);

          case 'search_tasks':
            return await handleSearchTasks(args);

          default:
            throw new McpError(
              ErrorCode.MethodNotFound,
              `Unknown tool: ${name}`
            );
        }
      } catch (error) {
        throw new McpError(
          ErrorCode.InternalError,
          `Tool execution failed: ${error}`
        );
      }
    },

    async readResource(request: ReadResourceRequestSchema): Promise<ReadResourceResult> {
      throw new McpError(
        ErrorCode.InvalidRequest,
        'Resource reading not implemented'
      );
    },
  },
  {
    transport: new StdioServerTransport(),
  }
);

// Tool Handlers
async function handleGetRoadmapData(): Promise<any> {
  if (!roadmapData) {
    roadmapData = await storage.loadRoadmap();
  }
  
  return {
    success: true,
    data: {
      meta: roadmapData.meta,
      settings: roadmapData.settings,
      roadmap: roadmapData.roadmap.map(week => ({
        id: week.id,
        num: week.num,
        title: week.title,
        subtitle: week.subtitle,
        month: week.month,
        color: week.color,
        goal: week.goal,
        interviewQuestion: week.interviewQuestion,
        timeEstimate: week.timeEstimate,
        deliverable: week.deliverable,
        mistakes: week.mistakes,
        taskCount: week.tasks.length,
        tasks: week.tasks.map(task => ({
          id: task.id,
          text: task.text,
          time: task.time,
          why: task.why,
          difficulty: task.difficulty,
          estimatedTime: task.estimated_time,
          prerequisites: task.prerequisites,
          deliverables: task.deliverables,
          linkCount: task.links?.length || 0,
        }))
      }))
    }
  };
}

async function handleGetUserProgress(): Promise<any> {
  if (!userState) {
    userState = await storage.loadUserState();
  }
  
  return {
    success: true,
    data: {
      tasks: userState.tasks,
      weeksDone: userState.weeksDone,
      startDate: userState.startDate,
      streak: userState.streak,
      lastStudyDay: userState.lastStudyDay,
      bestStreak: userState.bestStreak,
      sessions: userState.sessions,
      sessionsToday: userState.sessionsToday,
      sessionsDate: userState.sessionsDate,
      notes: userState.notes,
      customTasks: userState.customTasks,
      taskDates: userState.taskDates,
      collapsedWeeks: userState.collapsedWeeks,
      version: userState.version,
      completedTasksCount: Object.values(userState.tasks).filter(Boolean).length,
      totalTasksCount: Object.keys(userState.tasks).length,
      completionPercentage: Math.round(
        (Object.values(userState.tasks).filter(Boolean).length / Object.keys(userState.tasks).length) * 100
      )
    }
  };
}

async function handleGetTodayTasks(args: any): Promise<any> {
  if (!userState) {
    userState = await storage.loadUserState();
  }

  const targetDate = args.date || new Date().toISOString().slice(0, 10);
  const today = new Date(targetDate);
  
  if (!userState.startDate) {
    return {
      success: true,
      data: {
        date: targetDate,
        message: 'Set a start date to track active week',
        tasks: []
      }
    };
  }

  const startDate = new Date(userState.startDate);
  const daysDiff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const weekIndex = Math.floor(daysDiff / 7);
  
  if (weekIndex < 0 || weekIndex > 11) {
    return {
      success: true,
      data: {
        date: targetDate,
        message: weekIndex < 0 ? 'Before start date' : 'After 12 weeks',
        tasks: []
      }
    };
  }

  // Get tasks for current and previous week
  const todayTasks = [];
  const roadmap = await storage.loadRoadmap();
  
  for (let i = Math.max(0, weekIndex - 1); i <= Math.min(weekIndex, 11); i++) {
    const week = roadmap.roadmap[i];
    week.tasks.forEach(task => {
      const taskKey = `${week.id}_${task.id}`;
      const isCompleted = userState.tasks[taskKey] || false;
      const hasNote = userState.notes[taskKey];
      
      todayTasks.push({
        taskId: taskKey,
        weekId: week.id,
        weekNum: week.num,
        text: task.text,
        time: task.time,
        why: task.why,
        difficulty: task.difficulty,
        completed: isCompleted,
        hasNote: !!hasNote,
        note: hasNote || null,
        links: task.links || []
      });
    });
  }

  return {
    success: true,
    data: {
      date: targetDate,
      weekIndex: weekIndex + 1,
      totalTasks: todayTasks.length,
      completedTasks: todayTasks.filter(t => t.completed).length,
      tasks: todayTasks
    }
  };
}

async function handleGetWeekTasks(args: any): Promise<any> {
  if (!userState) {
    userState = await storage.loadUserState();
  }

  const { weekId } = args;
  const roadmap = await storage.loadRoadmap();
  const week = roadmap.roadmap.find(w => w.id === weekId);
  
  if (!week) {
    throw new McpError(
      ErrorCode.InvalidParams,
      `Week not found: ${weekId}`
    );
  }

  const tasks = week.tasks.map(task => {
    const taskKey = `${weekId}_${task.id}`;
    const isCompleted = userState.tasks[taskKey] || false;
    const hasNote = userState.notes[taskKey];
    const completionDate = userState.taskDates[taskKey] || null;
    
    return {
      taskId: taskKey,
      text: task.text,
      time: task.time,
      why: task.why,
      difficulty: task.difficulty,
      estimatedTime: task.estimated_time,
      prerequisites: task.prerequisites,
      deliverables: task.deliverables,
      completed: isCompleted,
      hasNote: !!hasNote,
      note: hasNote || null,
      completionDate,
      links: task.links || []
    };
  });

  return {
    success: true,
    data: {
      weekId,
      weekNum: week.num,
      title: week.title,
      subtitle: week.subtitle,
      goal: week.goal,
      interviewQuestion: week.interviewQuestion,
      timeEstimate: week.timeEstimate,
      deliverable: week.deliverable,
      mistakes: week.mistakes,
      totalTasks: tasks.length,
      completedTasks: tasks.filter(t => t.completed).length,
      tasks
    }
  };
}

async function handleMarkTaskComplete(args: any): Promise<any> {
  if (!userState) {
    userState = await storage.loadUserState();
  }

  const { taskId, completed } = args;
  
  // Validate task exists
  const roadmap = await storage.loadRoadmap();
  const [weekId, taskNum] = taskId.split('_');
  const week = roadmap.roadmap.find(w => w.id === weekId);
  const task = week?.tasks.find(t => t.id === taskNum);
  
  if (!task) {
    throw new McpError(
      ErrorCode.InvalidParams,
      `Task not found: ${taskId}`
    );
  }

  // Update task completion
  if (completed) {
    userState.tasks[taskId] = true;
    userState.taskDates[taskId] = new Date().toISOString();
  } else {
    userState.tasks[taskId] = false;
    delete userState.taskDates[taskId];
  }

  await storage.saveUserState(userState);

  return {
    success: true,
    data: {
      taskId,
      completed,
      previousState: !completed,
      completionDate: completed ? new Date().toISOString() : null,
      message: `Task ${taskId} marked as ${completed ? 'complete' : 'incomplete'}`
    }
  };
}

async function handleMarkWeekComplete(args: any): Promise<any> {
  if (!userState) {
    userState = await storage.loadUserState();
  }

  const { weekId, completed } = args;
  
  // Validate week exists
  const roadmap = await storage.loadRoadmap();
  const week = roadmap.roadmap.find(w => w.id === weekId);
  
  if (!week) {
    throw new McpError(
      ErrorCode.InvalidParams,
      `Week not found: ${weekId}`
    );
  }

  // Update week completion
  userState.weeksDone[weekId] = completed;

  await storage.saveUserState(userState);

  const weekTasks = week.tasks.map(task => `${weekId}_${task.id}`);
  const completedTasksInWeek = weekTasks.filter(taskId => userState.tasks[taskId]).length;

  return {
    success: true,
    data: {
      weekId,
      weekNum: week.num,
      completed,
      totalTasks: week.tasks.length,
      completedTasks: completedTasksInWeek,
      completionPercentage: Math.round((completedTasksInWeek / week.tasks.length) * 100),
      message: `Week ${weekId} marked as ${completed ? 'complete' : 'incomplete'}`
    }
  };
}

async function handleAddNote(args: any): Promise<any> {
  if (!userState) {
    userState = await storage.loadUserState();
  }

  const { taskId, note } = args;
  
  // Validate task exists
  const roadmap = await storage.loadRoadmap();
  const [weekId, taskNum] = taskId.split('_');
  const week = roadmap.roadmap.find(w => w.id === weekId);
  const task = week?.tasks.find(t => t.id === taskNum);
  
  if (!task) {
    throw new McpError(
      ErrorCode.InvalidParams,
      `Task not found: ${taskId}`
    );
  }

  // Update note
  if (note.trim()) {
    userState.notes[taskId] = note;
  } else {
    delete userState.notes[taskId];
  }

  await storage.saveUserState(userState);

  return {
    success: true,
    data: {
      taskId,
      note: note.trim() || null,
      previousNote: userState.notes[taskId] || null,
      message: `Note ${note.trim() ? 'added' : 'removed'} for task ${taskId}`
    }
  };
}

async function handleSearchTasks(args: any): Promise<any> {
  if (!userState) {
    userState = await storage.loadUserState();
  }

  const { query, limit = 10 } = args;
  const roadmap = await storage.loadRoadmap();
  const searchQuery = query.toLowerCase();
  
  const results = [];
  
  // Search through all weeks and tasks
  for (const week of roadmap.roadmap) {
    for (const task of week.tasks) {
      const taskKey = `${week.id}_${task.id}`;
      const isCompleted = userState.tasks[taskKey] || false;
      const hasNote = userState.notes[taskKey];
      
      // Check if task matches search query
      const matchesQuery = 
        task.text.toLowerCase().includes(searchQuery) ||
        task.why.toLowerCase().includes(searchQuery) ||
        (task.difficulty && task.difficulty.toLowerCase().includes(searchQuery));
      
      if (matchesQuery) {
        results.push({
          taskId: taskKey,
          weekId: week.id,
          weekNum: week.num,
          text: task.text,
          time: task.time,
          why: task.why,
          difficulty: task.difficulty,
          completed: isCompleted,
          hasNote: !!hasNote,
          note: hasNote || null,
          links: task.links || [],
          matchReason: task.text.toLowerCase().includes(searchQuery) ? 'text' : 
                     task.why.toLowerCase().includes(searchQuery) ? 'why' : 'difficulty'
        });
      }
      
      if (results.length >= limit) break;
    }
    if (results.length >= limit) break;
  }

  return {
    success: true,
    data: {
      query,
      totalResults: results.length,
      limited: results.length >= limit,
      tasks: results
    }
  };
}

// Start the MCP server
async function main() {
  console.log('Starting Roadmap MCP Server...');
  
  try {
    await server.start();
    console.log('Roadmap MCP Server running on stdio');
  } catch (error) {
    console.error('Failed to start MCP server:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down Roadmap MCP Server...');
  await server.close();
  process.exit(0);
});

if (require.main === module) {
  main();
}
