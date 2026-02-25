// Updated app.ts with cloud sync integration
import type { ProgressState } from './types';
import { createCloudSyncService, CloudSyncManager } from './cloud-sync';

const STORAGE_KEY = 'rn_roadmap_v4';
const BACKUP_KEY = 'rn_roadmap_v4_backup';

// Cloud sync manager
let cloudSync: CloudSyncManager | null = null;

// Load roadmap data from global variable injected by HTML
let ROADMAP_DATA: any = (window as any).ROADMAP_DATA || {};

// Convert roadmap data to WEEKS format for backward compatibility
function convertToWeeksFormat(roadmap: any[]): any[] {
  return roadmap.map((week: any) => ({
    ...week,
    tasks: week.tasks.map((task: any) => ({
      id: task.id,
      text: task.text,
      t: task.text, // Backward compatibility
      time: task.time,
      why: task.why,
      links: task.links || [],
      estimated_time: task.estimated_time,
      difficulty: task.difficulty,
      prerequisites: task.prerequisites,
      deliverables: task.deliverables
    }))
  }));
}

let WEEKS: any[] = convertToWeeksFormat(ROADMAP_DATA.roadmap || []);

function getDefaultState(): ProgressState {
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
}

// Initialize cloud sync
async function initializeCloudSync(): Promise<void> {
  try {
    // Try Supabase first, fallback to Firebase
    cloudSync = createCloudSyncService('supabase');
    await cloudSync.initialize();
    
    // Get state from cloud sync
    const state = cloudSync.getState();
    if (state) {
      // Update global state
      (window as any).state = state;
    }
    
    console.log('Cloud sync initialized successfully');
    showToast('Connected to cloud sync', 'success');
  } catch (error) {
    console.error('Cloud sync failed, using local storage:', error);
    showToast('Using local storage only', 'warn');
    
    // Fallback to local storage
    (window as any).state = getState();
  }
}

// Local storage fallback functions
function getState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return { ...getDefaultState(), ...parsed };
      }
    }
  } catch (e) {
    console.warn('Failed to load state, trying backup:', e);
    try {
      const backup = localStorage.getItem(BACKUP_KEY);
      if (backup) {
        const parsed = JSON.parse(backup);
        if (parsed && typeof parsed === 'object') {
          localStorage.setItem(STORAGE_KEY, backup);
          showToast('Recovered from backup', 'warn');
          return { ...getDefaultState(), ...parsed };
        }
      }
    } catch (e2) {
      console.error('Backup recovery failed:', e2);
    }
  }
  
  return getDefaultState();
}

function saveStateLocal(s: ProgressState): void {
  try {
    const json = JSON.stringify(s);
    localStorage.setItem(STORAGE_KEY, json);
    if (!(saveStateLocal as any)._c) (saveStateLocal as any)._c = 0;
    if (++(saveStateLocal as any)._c % 5 === 0) localStorage.setItem(BACKUP_KEY, json);
    showSaveIndicator();
  } catch (e) {
    console.error('Local save failed:', e);
    showToast('Local save failed', 'warn');
  }
}

// Unified save function that uses cloud sync if available
async function saveState(s: ProgressState): Promise<void> {
  // Save locally first
  saveStateLocal(s);
  
  // Sync to cloud if available
  if (cloudSync) {
    try {
      await cloudSync.updateState(s);
    } catch (error) {
      console.error('Cloud sync failed:', error);
      showToast('Cloud sync failed, saved locally', 'warn');
    }
  }
}

// Get current state (from cloud sync or local)
function getCurrentState(): ProgressState {
  if (cloudSync) {
    const state = cloudSync.getState();
    if (state) return state;
  }
  
  return (window as any).state || getState();
}

// Add type annotations for function properties
declare global {
  interface Function {
    _c?: number;
    _t?: number;
  }
}

function showSaveIndicator(): void {
  const el = document.getElementById('saveIndicator');
  if (el) {
    el.classList.add('show');
    clearTimeout((showSaveIndicator as any)._t);
    (showSaveIndicator as any)._t = setTimeout(() => el.classList.remove('show'), 800);
  }
}

// Toast notification function
function showToast(msg: string, type: 'info' | 'success' | 'warn' = 'info'): void {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  clearTimeout((showToast as any)._t);
  (showToast as any)._t = setTimeout(() => toast.classList.remove('show'), 2500);
}

// Cloud sync UI functions
async function signInToCloud(): Promise<void> {
  if (!cloudSync) {
    showToast('Cloud sync not available', 'warn');
    return;
  }
  
  try {
    await cloudSync.initialize();
    showToast('Signed in to cloud sync', 'success');
    updateCloudSyncUI();
  } catch (error) {
    console.error('Sign in failed:', error);
    showToast('Failed to sign in', 'warn');
  }
}

async function signOutOfCloud(): Promise<void> {
  if (!cloudSync) {
    showToast('Cloud sync not available', 'warn');
    return;
  }
  
  if (confirm('Sign out of cloud sync? Your data will be saved locally.')) {
    try {
      await cloudSync.signOut();
      cloudSync = null;
      (window as any).state = getState();
      showToast('Signed out of cloud sync', 'success');
      updateCloudSyncUI();
      renderAll();
    } catch (error) {
      console.error('Sign out failed:', error);
      showToast('Failed to sign out', 'warn');
    }
  }
}

function updateCloudSyncUI(): void {
  const syncStatus = document.getElementById('cloudSyncStatus');
  const syncButton = document.getElementById('cloudSyncButton');
  
  if (!syncStatus || !syncButton) return;
  
  if (cloudSync && cloudSync.getState()) {
    syncStatus.textContent = '☁️ Cloud Sync Active';
    syncStatus.className = 'cloud-sync-active';
    syncButton.textContent = 'Sign Out';
    syncButton.onclick = signOutOfCloud;
  } else {
    syncStatus.textContent = '💾 Local Storage Only';
    syncStatus.className = 'cloud-sync-inactive';
    syncButton.textContent = 'Sign In';
    syncButton.onclick = signInToCloud;
  }
}

function get12hr(): string {
  const d = new Date();
  let h = d.getHours(), m = d.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, '0')} ${ampm}`;
}

// Export functions with cloud sync
async function exportData(): Promise<void> {
  const state = getCurrentState();
  const a = document.createElement('a');
  const dataStr = JSON.stringify(state, null, 2);
  a.href = URL.createObjectURL(new Blob([dataStr], { type: 'application/json' }));
  a.download = `roadmap-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  showToast('Exported', 'success');
}

// Import functions with cloud sync
async function importData(event: Event): Promise<void> {
  const fileInput = event.target as HTMLInputElement;
  const file = fileInput.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const result = e.target?.result as string;
      const imp = JSON.parse(result);
      
      if (!imp || typeof imp !== 'object' || !imp.tasks) {
        throw new Error('Invalid data structure');
      }
      
      // Save backup
      localStorage.setItem(BACKUP_KEY, JSON.stringify(getCurrentState()));
      
      // Update state
      const newState = { ...getDefaultState(), ...imp };
      (window as any).state = newState;
      
      // Save and sync
      await saveState(newState);
      renderAll();
      showToast('Imported successfully', 'success');
      closeBackupModal();
    } catch (err) {
      console.error('Import failed:', err);
      showToast('Invalid file', 'warn');
    }
  };
  reader.readAsText(file);
  fileInput.value = '';
}

function copyDataToClipboard(): void {
  const state = getCurrentState();
  navigator.clipboard.writeText(JSON.stringify(state, null, 2))
    .then(() => showToast('Copied', 'success'))
    .catch(() => showToast('Failed', 'warn'));
}

function openBackupModal(): void {
  const overlay = document.getElementById('backupOverlay');
  if (overlay) overlay.classList.add('open');
}

function closeBackupModal(): void {
  const overlay = document.getElementById('backupOverlay');
  if (overlay) overlay.classList.remove('open');
}

// Note management with cloud sync
let currentNoteKey: string | null = null;

function openNote(key: string, taskText: string, event: Event): void {
  event.stopPropagation();
  currentNoteKey = key;
  
  const noteTask = document.getElementById('noteTask');
  const noteText = document.getElementById('noteText') as HTMLTextAreaElement;
  const overlay = document.getElementById('noteOverlay');
  
  if (noteTask) noteTask.textContent = taskText;
  if (noteText) {
    const state = getCurrentState();
    noteText.value = state.notes[key] || '';
  }
  if (overlay) overlay.classList.add('open');
  
  setTimeout(() => {
    if (noteText) noteText.focus();
  }, 100);
}

function closeNote(): void {
  const overlay = document.getElementById('noteOverlay');
  if (overlay) overlay.classList.remove('open');
  currentNoteKey = null;
}

async function saveNote(): Promise<void> {
  if (!currentNoteKey) return;
  
  const noteText = document.getElementById('noteText') as HTMLTextAreaElement;
  const text = noteText?.value.trim() || '';
  
  const state = getCurrentState();
  if (text) {
    state.notes[currentNoteKey] = text;
  } else {
    delete state.notes[currentNoteKey];
  }
  
  await saveState(state);
  closeNote();
  renderWeekCards();
  showToast('Note saved', 'success');
}

// Timer with cloud sync
let timerInterval: number | null = null;
let timerRunning = false;
let timerSeconds = 25 * 60;
const WORK_SECONDS = 25 * 60;

interface TimerDisplay {
  display: HTMLElement | null;
  btnText: HTMLElement | null;
  label: HTMLElement | null;
  startBtn: HTMLElement | null;
  dot: HTMLElement | null;
}

function getTimerElements(): TimerDisplay {
  return {
    display: document.getElementById('timerDisplay'),
    btnText: document.getElementById('timerBtnText'),
    label: document.getElementById('timerLabel'),
    startBtn: document.getElementById('tmStartBtn'),
    dot: document.getElementById('timerDot')
  };
}

function toggleTimer(): void {
  const modal = document.getElementById('timerModal');
  if (modal) modal.classList.toggle('open');
  updateTimerClock();
}

function closeTimerModal(): void {
  const modal = document.getElementById('timerModal');
  if (modal) modal.classList.remove('open');
}

async function startStopTimer(): Promise<void> {
  const elements = getTimerElements();
  
  if (timerRunning) {
    if (timerInterval) clearInterval(timerInterval);
    timerRunning = false;
    if (elements.startBtn) elements.startBtn.textContent = 'Start';
    const btn = document.getElementById('timerBtn');
    const dot = document.getElementById('timerDot');
    if (btn) btn.classList.remove('running');
    if (dot) dot.classList.remove('pulse');
  } else {
    timerRunning = true;
    if (elements.startBtn) elements.startBtn.textContent = 'Pause';
    const btn = document.getElementById('timerBtn');
    const dot = document.getElementById('timerDot');
    if (btn) btn.classList.add('running');
    if (dot) dot.classList.add('pulse');
    
    timerInterval = window.setInterval(async () => {
      timerSeconds--;
      if (timerSeconds <= 0) {
        if (timerInterval) clearInterval(timerInterval);
        timerRunning = false;
        if (elements.startBtn) elements.startBtn.textContent = 'Start';
        if (btn) btn.classList.remove('running');
        if (dot) dot.classList.remove('pulse');
        timerSeconds = WORK_SECONDS;
        await completeSession();
        showToast('Session done! Take a 5 min break.', 'success');
      }
      updateTimerDisplay();
    }, 1000);
  }
}

function resetTimer(): void {
  const elements = getTimerElements();
  
  if (timerInterval) clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = WORK_SECONDS;
  
  if (elements.startBtn) elements.startBtn.textContent = 'Start';
  const btn = document.getElementById('timerBtn');
  const dot = document.getElementById('timerDot');
  if (btn) btn.classList.remove('running');
  if (dot) dot.classList.remove('pulse');
  
  updateTimerDisplay();
}

function updateTimerDisplay(): void {
  const elements = getTimerElements();
  const m = Math.floor(timerSeconds / 60);
  const s = timerSeconds % 60;
  const str = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  
  if (elements.display) elements.display.textContent = str;
  if (elements.btnText) elements.btnText.textContent = str;
  
  if (elements.display) {
    elements.display.classList.toggle('warn', timerSeconds < 5 * 60);
  }
  
  if (elements.label) {
    elements.label.textContent = timerSeconds === WORK_SECONDS ? 'FOCUS SESSION' : timerRunning ? 'DEEP WORK' : 'PAUSED';
  }
  
  updateTimerClock();
}

function updateTimerClock(): void {
  const el = document.getElementById('timerClock');
  if (el) el.textContent = get12hr();
}

async function completeSession(): Promise<void> {
  const state = getCurrentState();
  const today = new Date().toDateString();
  
  if (state.sessionsDate !== today) {
    state.sessionsToday = 0;
    state.sessionsDate = today;
  }
  
  state.sessions = (state.sessions || 0) + 1;
  state.sessionsToday = Math.min((state.sessionsToday || 0) + 1, 4);
  
  await updateStreak();
  await saveState(state);
  updateStats();
  updateSessionDots();
}

async function updateStreak(): Promise<void> {
  const state = getCurrentState();
  const today = new Date().toDateString();
  
  if (state.lastStudyDay === today) return;
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dayBefore = new Date();
  dayBefore.setDate(dayBefore.getDate() - 2);
  
  if (state.lastStudyDay === yesterday.toDateString() || 
      state.lastStudyDay === dayBefore.toDateString()) {
    state.streak = (state.streak || 0) + 1;
  } else {
    state.streak = 1;
  }
  
  state.lastStudyDay = today;
  state.bestStreak = Math.max(state.bestStreak || 0, state.streak);
}

function getCurrentWeekIndex(): number {
  const state = getCurrentState();
  if (!state.startDate) return -1;
  const diff = Math.floor((new Date().getTime() - new Date(state.startDate).getTime()) / 86400000);
  return diff < 0 ? -1 : Math.min(Math.floor(diff / 7), 11);
}

async function updateStartDate(): Promise<void> {
  const input = document.getElementById('startDate') as HTMLInputElement;
  if (input) {
    const state = getCurrentState();
    state.startDate = input.value;
    await saveState(state);
    renderWeekCards();
    updateWeekInfo();
    updateTodayFocus();
  }
}

function updateWeekInfo(): void {
  const idx = getCurrentWeekIndex();
  const info = document.getElementById('currentWeekInfo');
  const state = getCurrentState();
  
  if (!info) return;
  
  if (idx < 0) {
    info.textContent = 'Set your start date to track active week';
    return;
  }
  if (idx > 11) {
    info.textContent = 'You have completed the 12-week plan!';
    return;
  }
  
  const diff = Math.floor((new Date().getTime() - new Date(state.startDate!).getTime()) / 86400000);
  info.textContent = `Week ${idx + 1} of 12 - Day ${(diff % 7) + 1}`;
}

function confirmReset(): void {
  if (confirm('Reset all progress? Export first!\n\nThis cannot be undone.')) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(BACKUP_KEY);
    (window as any).state = getDefaultState();
    renderAll();
    showToast('Reset', 'info');
  }
}

// Event listeners with proper typing
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
    e.preventDefault();
    exportData();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
    e.preventDefault();
    openBackupModal();
  }
  if (e.key === 'Escape') {
    closeNote();
    closeBackupModal();
    closeTimerModal();
  }
  if (e.key === ' ' && 
      document.getElementById('timerModal')?.classList.contains('open') && 
      !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')) {
    e.preventDefault();
    startStopTimer();
  }
});

setInterval(() => {
  updateTimerClock();
}, 30000);

// Render functions (keeping existing implementation but with cloud sync)
function renderAll(): void {
  if (ROADMAP_DATA.roadmap) {
    const startDateInput = document.getElementById('startDate') as HTMLInputElement;
    const state = getCurrentState();
    if (startDateInput && state.startDate) startDateInput.value = state.startDate;
  }
  renderWeekCards();
  updateStats();
  updateMonthPct();
  updateWeekInfo();
  updateTimerDisplay();
  updateSessionDots();
  updateTodayFocus();
  updateCloudSyncUI();
}

// Initialize app with cloud sync
document.addEventListener('DOMContentLoaded', async () => {
  await initializeCloudSync();
  renderAll();
});

// Export for global access
(window as any).toggleTask = toggleTask;
(window as any).toggleWeekComplete = toggleWeekComplete;
(window as any).addCustomTask = addCustomTask;
(window as any).toggleCustomTask = toggleCustomTask;
(window as any).deleteCustomTask = deleteCustomTask;
(window as any).openNote = openNote;
(window as any).closeNote = closeNote;
(window as any).saveNote = saveNote;
(window as any).toggleTimer = toggleTimer;
(window as any).closeTimerModal = closeTimerModal;
(window as any).startStopTimer = startStopTimer;
(window as any).resetTimer = resetTimer;
(window as any).exportData = exportData;
(window as any).importData = importData;
(window as any).copyDataToClipboard = copyDataToClipboard;
(window as any).openBackupModal = openBackupModal;
(window as any).closeBackupModal = closeBackupModal;
(window as any).confirmReset = confirmReset;
(window as any).updateStartDate = updateStartDate;
(window as any).toggleCollapse = toggleCollapse;
(window as any).signInToCloud = signInToCloud;
(window as any).signOutOfCloud = signOutOfCloud;

// Placeholder functions that need to be implemented
function toggleTask(key: string, weekId: string): void {
  // Implementation needed
}

function toggleWeekComplete(weekId: string, event: Event): void {
  // Implementation needed
}

function addCustomTask(weekId: string, input: HTMLInputElement): void {
  // Implementation needed
}

function toggleCustomTask(weekId: string, index: number): void {
  // Implementation needed
}

function deleteCustomTask(weekId: string, index: number): void {
  // Implementation needed
}

function renderWeekCards(): void {
  // Implementation needed
}

function updateStats(): void {
  // Implementation needed
}

function updateMonthPct(): void {
  // Implementation needed
}

function updateSessionDots(): void {
  // Implementation needed
}

function updateTodayFocus(): void {
  // Implementation needed
}

function toggleCollapse(weekId: string): void {
  // Implementation needed
}
