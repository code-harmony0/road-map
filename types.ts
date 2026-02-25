// Strict TypeScript interfaces for the Roadmap application

// Base interfaces
interface BaseResource {
  url: string
  tag: string
  type: "docs" | "repo" | "blog" | "interactive" | "video" | "course"
}

interface BaseTask {
  id: string
  text: string
  time: string
  why: string
  links?: BaseResource[]
  estimated_time?: string
  difficulty?: "beginner" | "intermediate" | "advanced" | "expert"
  prerequisites?: string[]
  deliverables?: string[]
}

interface BaseWeek {
  id: string
  num: string
  color: string
  month: number
  title: string
  subtitle: string
  goal?: string
  interviewQuestion?: string
  timeEstimate?: string
  deliverable?: string
  mistakes?: string[]
  tasks: BaseTask[]
}

// Progress tracking interfaces
interface TaskProgress {
  [taskId: string]: boolean
}

interface WeekProgress {
  [weekId: string]: boolean
}

interface TaskDates {
  [taskId: string]: string | null
}

interface TaskNotes {
  [taskId: string]: string
}

interface CustomTask {
  text: string
  done: boolean
  id?: string
  createdAt?: string
}

interface CustomTasks {
  [weekId: string]: CustomTask[]
}

interface CollapsedWeeks {
  [weekId: string]: boolean
}

// Main application state
interface ProgressState {
  tasks: TaskProgress
  weeksDone: WeekProgress
  startDate: string | null
  streak: number
  lastStudyDay: string | null
  bestStreak: number
  sessions: number
  sessionsToday: number
  sessionsDate: string | null
  timerSeconds: number
  notes: TaskNotes
  customTasks: CustomTasks
  taskDates: TaskDates
  collapsedWeeks: CollapsedWeeks
  version: number
}

// Roadmap data structure
interface RoadmapMeta {
  title: string
  description: string
  version: string
  lastUpdated: string
}

interface RoadmapSettings {
  defaultTimeEstimate: string
  maxTasksPerWeek: number
  weekColors: string[]
}

interface RoadmapData {
  meta: RoadmapMeta
  settings: RoadmapSettings
  roadmap: BaseWeek[]
}

// UI component props
interface WeekCardProps {
  week: BaseWeek
  isActive: boolean
  isDone: boolean
  isCollapsed: boolean
  onToggleTask: (taskId: string, weekId: string) => void
  onToggleWeek: (weekId: string) => void
  onAddCustomTask: (weekId: string, text: string) => void
  onDeleteCustomTask: (weekId: string, index: number) => void
  onToggleCustomTask: (weekId: string, index: number) => void
  onOpenNote: (taskId: string, taskText: string) => void
}

interface TaskItemProps {
  task: BaseTask & {
    key: string
    checked: boolean
    date: string | null
    hasNote: boolean
  }
  onToggle: (taskId: string, weekId: string) => void
  onOpenNote: (taskId: string, taskText: string) => void
}

interface ProgressStatsProps {
  totalTasks: number
  completedTasks: number
  streak: number
  sessions: number
  completionPercentage: number
}

// Timer interfaces
interface TimerState {
  isRunning: boolean
  seconds: number
  mode: "focus" | "break" | "paused"
}

interface SessionStats {
  today: number
  total: number
  maxDaily: number
}

// Export types for use in components
export type {
  BaseResource,
  BaseTask,
  BaseWeek,
  TaskProgress,
  WeekProgress,
  TaskDates,
  TaskNotes,
  CustomTask,
  CustomTasks,
  CollapsedWeeks,
  ProgressState,
  RoadmapMeta,
  RoadmapSettings,
  RoadmapData,
  WeekCardProps,
  TaskItemProps,
  ProgressStatsProps,
  TimerState,
  SessionStats,
  ExtendedTask,
  ExtendedWeek,
}

// Utility types for extensibility
type ExtendedTask = BaseTask & {
  [key: string]: any // Allow additional properties
}

type ExtendedWeek = BaseWeek & {
  [key: string]: any // Allow additional properties
}

// Type guards for runtime validation
export const isTask = (obj: any): obj is BaseTask => {
  return (
    obj &&
    typeof obj.id === "string" &&
    typeof obj.text === "string" &&
    typeof obj.time === "string" &&
    typeof obj.why === "string"
  )
}

export const isWeek = (obj: any): obj is BaseWeek => {
  return (
    obj &&
    typeof obj.id === "string" &&
    typeof obj.num === "string" &&
    typeof obj.color === "string" &&
    typeof obj.month === "number" &&
    typeof obj.title === "string" &&
    typeof obj.subtitle === "string" &&
    Array.isArray(obj.tasks)
  )
}

export const isRoadmapData = (obj: any): obj is RoadmapData => {
  return (
    obj &&
    typeof obj.meta === "object" &&
    typeof obj.settings === "object" &&
    Array.isArray(obj.roadmap)
  )
}
