# Design Document: Job Search Tracker Enhancement

## Overview

This design document outlines the technical approach for enhancing the React Native roadmap application with job search tracking capabilities, personalized project references, and improved data persistence. The enhancement will integrate seamlessly with the existing vanilla JavaScript application while adding new features that help users track their job search progress and relate learning tasks to their real-world projects.

The design focuses on maintaining the existing architecture patterns while extending the state management system, adding new UI components, and ensuring data consistency across multiple HTML files through a unified localStorage strategy.

## Architecture

### High-Level Architecture

The application follows a client-side, single-page architecture pattern replicated across multiple HTML files (one per milestone). The enhancement will maintain this pattern while introducing:

1. **Unified State Management**: A shared state schema and localStorage key system that ensures consistency across all milestone pages
2. **Component-Based UI Extensions**: New UI components (Job Search Tracker, Enhanced Week 8 Checklist) that integrate with existing rendering patterns
3. **Content Data Updates**: Modified week data structures that reference real projects with metrics

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser Environment                      │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              HTML Pages (Multi-File)                │    │
│  │  • index.html (navigation shell)                    │    │
│  │  • milestone1-job-ready.html                        │    │
│  │  • milestone2-senior-solid.html                     │    │
│  │  • milestone3-staff-engineer.html                   │    │
│  └────────────────────────────────────────────────────┘    │
│                          │                                   │
│                          ▼                                   │
│  ┌────────────────────────────────────────────────────┐    │
│  │           Shared State Management Layer             │    │
│  │  • getState() - Load from localStorage              │    │
│  │  • saveState() - Persist to localStorage            │    │
│  │  • State validation & versioning                    │    │
│  │  • Automatic backup creation                        │    │
│  └────────────────────────────────────────────────────┘    │
│                          │                                   │
│                          ▼                                   │
│  ┌────────────────────────────────────────────────────┐    │
│  │              localStorage (Browser API)             │    │
│  │  • Primary key: "rn_roadmap_v5"                     │    │
│  │  • Backup key: "rn_roadmap_v5_backup"               │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### State Management Architecture

The state management system will be enhanced to support new features while maintaining backward compatibility:

```javascript
// Enhanced State Schema (v5)
{
  version: 5,
  
  // Existing state properties
  tasks: {},              // Task completion status
  weeksDone: {},          // Week completion status
  customTasks: {},        // User-added tasks
  notes: {},              // Task notes
  taskDates: {},          // Completion timestamps
  collapsedWeeks: {},     // UI collapse state
  
  // Timer & streak tracking
  startDate: null,
  streak: 0,
  lastStudyDay: null,
  bestStreak: 0,
  sessions: 0,
  sessionsToday: 0,
  sessionsDate: null,
  timerSeconds: 1500,
  
  // NEW: Job search tracking
  jobSearch: {
    applications: 0,
    interviews: 0,
    offers: 0,
    targetSalary: 130000,
    lastUpdated: null
  },
  
  // NEW: Week 8 checklist
  week8Checklist: {
    applicationsComplete: false,
    offersReceived: false,
    githubLive: false,
    awsCertified: false,
    salaryNegotiated: false,
    linkedinOptimized: false,
    resumeWithMetrics: false,
    portfolioLive: false,
    mockInterviews: false,
    systemDesign: false,
    behavioralStories: false,
    referencesContacted: false
  }
}
```

## Components and Interfaces

### 1. Job Search Tracker Component

A fixed-position UI component that displays and allows editing of job search metrics.

**Component Structure:**
```html
<div class="job-search-tracker" id="jobSearchTracker">
  <div class="jst-header">
    <span class="jst-icon">🎯</span>
    <h3 class="jst-title">Job Search Progress</h3>
  </div>
  
  <div class="jst-metrics">
    <div class="jst-metric">
      <label>Applications</label>
      <input type="number" class="jst-input" id="jstApplications" />
      <span class="jst-target">/ 50</span>
    </div>
    
    <div class="jst-metric">
      <label>Interviews</label>
      <input type="number" class="jst-input" id="jstInterviews" />
      <span class="jst-target">/ 5</span>
    </div>
    
    <div class="jst-metric">
      <label>Offers</label>
      <input type="number" class="jst-input" id="jstOffers" />
      <span class="jst-target">/ 1</span>
    </div>
    
    <div class="jst-metric jst-salary">
      <label>Target Salary</label>
      <span class="jst-currency">$</span>
      <input type="number" class="jst-input" id="jstSalary" />
    </div>
  </div>
  
  <button class="jst-cta" id="jstApplyButton">
    Apply to 3 jobs today
  </button>
</div>
```

**Component Behavior:**
- Fixed positioning (top-right or bottom-right based on viewport)
- Inline editing with immediate persistence
- Visual feedback on value changes
- Responsive design for mobile devices

**CSS Styling:**
```css
.job-search-tracker {
  position: fixed;
  top: calc(var(--nav-height) + 1rem);
  right: 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.25rem;
  min-width: 280px;
  max-width: 320px;
  z-index: 900;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.jst-input {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem;
  text-align: center;
  width: 80px;
}

.jst-cta {
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}
```

### 2. Enhanced Week 8 Checklist Component

A comprehensive checklist component with visual progress tracking.

**Component Structure:**
```html
<section class="week-8-checklist" id="week8Checklist">
  <div class="w8c-header">
    <span class="w8c-badge">WEEK 08</span>
    <h2 class="w8c-title">Job Readiness Checklist</h2>
    <p class="w8c-subtitle">Deploy your career to production</p>
    <div class="w8c-progress">
      <div class="w8c-progress-bar">
        <div class="w8c-progress-fill" id="w8cProgressFill"></div>
      </div>
      <span class="w8c-percentage" id="w8cPercentage">0%</span>
    </div>
  </div>
  
  <div class="w8c-grid">
    <!-- 12 checklist items -->
    <div class="w8c-item" data-key="applicationsComplete">
      <div class="w8c-checkbox"></div>
      <div class="w8c-content">
        <div class="w8c-text">50 applications sent</div>
        <div class="w8c-desc">Consistent outreach to target companies</div>
      </div>
    </div>
    <!-- ... 11 more items ... -->
  </div>
</section>
```

**Component Behavior:**
- Click to toggle checklist items
- Real-time progress calculation
- Confetti animation on 100% completion
- Persistent state across page loads

### 3. Week Content Data Structure

Enhanced week data structure to support real project references:

```javascript
{
  id: 'w1',
  num: 'WEEK 01',
  title: 'PostgreSQL Migration',
  subtitle: 'Audit Zonesso MongoDB, migrate to PostgreSQL',
  tasks: [
    {
      t: 'Analyze Zonesso MongoDB schema and identify migration challenges',
      time: '2 hours',
      why: 'Understanding current structure prevents data loss',
      projectRef: {
        name: 'Zonesso',
        metric: '50K downloads',
        context: 'Chat application with 30% daily engagement'
      },
      links: [...]
    },
    {
      t: 'Design PostgreSQL schema with proper relations and indexes',
      time: '3 hours',
      why: 'Relational design improves query performance',
      projectRef: {
        name: 'Zonesso',
        metric: '1M+ messages/day',
        context: 'Real-time messaging requires optimized queries'
      },
      links: [...]
    }
  ]
}
```

### 4. State Management Functions

**Core Functions:**

```javascript
// Initialize or upgrade state to v5
function getState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    const parsed = JSON.parse(raw);
    if (parsed.version === 4) {
      return upgradeStateV4toV5(parsed);
    }
    if (parsed.version === 5) {
      return parsed;
    }
  }
  return getDefaultStateV5();
}

// Upgrade from v4 to v5
function upgradeStateV4toV5(oldState) {
  return {
    ...oldState,
    version: 5,
    jobSearch: {
      applications: 0,
      interviews: 0,
      offers: 0,
      targetSalary: 130000,
      lastUpdated: null
    },
    week8Checklist: {
      applicationsComplete: false,
      offersReceived: false,
      githubLive: false,
      awsCertified: false,
      salaryNegotiated: false,
      linkedinOptimized: false,
      resumeWithMetrics: false,
      portfolioLive: false,
      mockInterviews: false,
      systemDesign: false,
      behavioralStories: false,
      referencesContacted: false
    }
  };
}

// Save state with validation
function saveState(state) {
  if (!validateState(state)) {
    console.error('Invalid state structure');
    return false;
  }
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    createBackup(state);
    return true;
  } catch (error) {
    console.error('Failed to save state:', error);
    return false;
  }
}

// Validate state structure
function validateState(state) {
  return (
    state &&
    typeof state === 'object' &&
    state.version === 5 &&
    state.jobSearch &&
    typeof state.jobSearch.applications === 'number' &&
    state.week8Checklist &&
    typeof state.week8Checklist === 'object'
  );
}

// Update job search metrics
function updateJobSearchMetric(field, value) {
  state.jobSearch[field] = parseInt(value, 10) || 0;
  state.jobSearch.lastUpdated = new Date().toISOString();
  saveState(state);
  renderJobSearchTracker();
}

// Apply to 3 jobs action
function applyToThreeJobs() {
  state.jobSearch.applications += 3;
  state.jobSearch.lastUpdated = new Date().toISOString();
  saveState(state);
  renderJobSearchTracker();
  showToast('3 applications added! Keep going! 🚀', 'success');
  playSuccessSound();
}

// Toggle Week 8 checklist item
function toggleWeek8ChecklistItem(key) {
  state.week8Checklist[key] = !state.week8Checklist[key];
  saveState(state);
  renderWeek8Checklist();
  
  const completed = Object.values(state.week8Checklist).filter(Boolean).length;
  if (completed === 12) {
    showConfetti();
    showToast('🎉 You are job ready! Time to ship your career!', 'success');
  }
}

// Render job search tracker
function renderJobSearchTracker() {
  const tracker = document.getElementById('jobSearchTracker');
  if (!tracker) return;
  
  document.getElementById('jstApplications').value = state.jobSearch.applications;
  document.getElementById('jstInterviews').value = state.jobSearch.interviews;
  document.getElementById('jstOffers').value = state.jobSearch.offers;
  document.getElementById('jstSalary').value = state.jobSearch.targetSalary;
  
  // Update visual progress indicators
  updateJobSearchProgress();
}

// Render Week 8 checklist
function renderWeek8Checklist() {
  const items = document.querySelectorAll('.w8c-item');
  items.forEach(item => {
    const key = item.dataset.key;
    const checkbox = item.querySelector('.w8c-checkbox');
    const text = item.querySelector('.w8c-text');
    
    if (state.week8Checklist[key]) {
      checkbox.classList.add('completed');
      text.classList.add('completed');
    } else {
      checkbox.classList.remove('completed');
      text.classList.remove('completed');
    }
  });
  
  // Update progress bar
  const completed = Object.values(state.week8Checklist).filter(Boolean).length;
  const percentage = Math.round((completed / 12) * 100);
  document.getElementById('w8cProgressFill').style.width = `${percentage}%`;
  document.getElementById('w8cPercentage').textContent = `${percentage}%`;
}
```

## Data Models

### State Schema V5

```typescript
interface StateV5 {
  version: 5;
  
  // Task tracking
  tasks: Record<string, boolean>;
  weeksDone: Record<string, boolean>;
  customTasks: Record<string, CustomTask[]>;
  notes: Record<string, string>;
  taskDates: Record<string, string>;
  collapsedWeeks: Record<string, boolean>;
  
  // Progress tracking
  startDate: string | null;
  streak: number;
  lastStudyDay: string | null;
  bestStreak: number;
  sessions: number;
  sessionsToday: number;
  sessionsDate: string | null;
  timerSeconds: number;
  
  // Job search tracking
  jobSearch: JobSearchMetrics;
  
  // Week 8 checklist
  week8Checklist: Week8Checklist;
}

interface JobSearchMetrics {
  applications: number;
  interviews: number;
  offers: number;
  targetSalary: number;
  lastUpdated: string | null;
}

interface Week8Checklist {
  applicationsComplete: boolean;
  offersReceived: boolean;
  githubLive: boolean;
  awsCertified: boolean;
  salaryNegotiated: boolean;
  linkedinOptimized: boolean;
  resumeWithMetrics: boolean;
  portfolioLive: boolean;
  mockInterviews: boolean;
  systemDesign: boolean;
  behavioralStories: boolean;
  referencesContacted: boolean;
}

interface CustomTask {
  text: string;
  done: boolean;
}

interface ProjectReference {
  name: string;
  metric: string;
  context: string;
}

interface Task {
  t: string;
  time: string;
  why: string;
  projectRef?: ProjectReference;
  links: TaskLink[];
}

interface TaskLink {
  url: string;
  tag: string;
  type: 'docs' | 'repo' | 'video' | 'interactive' | 'blog';
}
```

### Week Data Structure

```typescript
interface Week {
  id: string;
  num: string;
  color: string;
  month: number;
  title: string;
  subtitle: string;
  goal?: string;
  interviewQuestion?: string;
  timeEstimate?: string;
  deliverable?: string;
  mistakes?: string[];
  tasks: Task[];
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Before defining correctness properties, let me analyze the acceptance criteria for testability.


### Correctness Properties

Based on the prework analysis and property reflection, here are the key correctness properties for this enhancement:

**Property 1: State Persistence Round-Trip**
*For any* valid state object containing job search metrics and Week 8 checklist data, saving the state to localStorage and then loading it should produce an equivalent state object with all fields preserved.
**Validates: Requirements 1.4, 1.8, 4.4, 5.3**

**Property 2: Job Search Counter Increment**
*For any* initial applications count value, clicking the "Apply to 3 jobs today" button should result in the applications count increasing by exactly 3.
**Validates: Requirements 1.6**

**Property 3: Checklist Toggle Idempotence**
*For any* Week 8 checklist item, toggling it twice should return it to its original state (completed → not completed → completed, or not completed → completed → not completed).
**Validates: Requirements 4.3**

**Property 4: Progress Calculation Accuracy**
*For any* combination of completed tasks, custom tasks, and checklist items within a milestone, the displayed progress percentage should equal (completed items / total items) * 100, rounded to the nearest integer.
**Validates: Requirements 3.6, 4.5, 4.7**

**Property 5: State Validation and Backup**
*For any* save operation, if the state passes validation, both the primary localStorage key and backup key should be updated with identical data; if validation fails, neither key should be modified.
**Validates: Requirements 5.5, 5.6, 5.7**

**Property 6: Task Completion State Preservation**
*For any* task with a completion state, updating the task's content (text, time estimate, or project reference) should not change its completion status in the state object.
**Validates: Requirements 2.6**

**Property 7: Cross-Page State Consistency**
*For any* state modification on one milestone page, navigating to a different milestone page should reflect the same state changes when loaded from the shared localStorage key.
**Validates: Requirements 5.2, 5.3**

**Property 8: Numeric Input Validation**
*For any* job search metric input field, entering a non-numeric value should either be rejected or coerced to a valid number (0 if invalid), and the persisted value should always be a valid number.
**Validates: Requirements 1.3, 1.4**

**Property 9: Task Interaction Consistency**
*For any* task (original or rewritten with project references), clicking the checkbox should toggle its completion state, clicking the note button should open the note modal, and these interactions should work identically regardless of whether the task has a projectRef field.
**Validates: Requirements 2.5, 6.3**

**Property 10: State Version Migration**
*For any* state object with version 4, loading it through getState() should automatically upgrade it to version 5 with jobSearch and week8Checklist fields initialized to default values, preserving all existing v4 fields.
**Validates: Requirements 5.4**

## Error Handling

### localStorage Errors

**Quota Exceeded:**
- Detect when localStorage quota is exceeded during save operations
- Display user-friendly error message: "Storage full. Please export your progress and clear old data."
- Provide immediate export functionality in error state

**Corrupted Data:**
- Wrap all JSON.parse operations in try-catch blocks
- On parse failure, attempt to load from backup key
- If backup also fails, initialize with default state and notify user
- Log corruption details to console for debugging

**Browser Compatibility:**
- Check for localStorage availability on page load
- If unavailable (private browsing, disabled), show warning banner
- Provide in-memory fallback for session-only persistence

### State Validation Errors

**Invalid State Structure:**
```javascript
function validateState(state) {
  const errors = [];
  
  if (!state || typeof state !== 'object') {
    errors.push('State must be an object');
  }
  
  if (state.version !== 5) {
    errors.push('Invalid state version');
  }
  
  if (!state.jobSearch || typeof state.jobSearch !== 'object') {
    errors.push('Missing jobSearch object');
  }
  
  if (typeof state.jobSearch?.applications !== 'number') {
    errors.push('Invalid applications count');
  }
  
  if (!state.week8Checklist || typeof state.week8Checklist !== 'object') {
    errors.push('Missing week8Checklist object');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}
```

**Recovery Strategy:**
1. Attempt to load from backup key
2. If backup is valid, restore and notify user
3. If backup is also invalid, merge valid fields from corrupted state with defaults
4. As last resort, initialize with default state

### UI Interaction Errors

**Input Validation:**
- Numeric inputs: Reject non-numeric characters, allow only integers
- Salary input: Format with commas, validate range (0 - 1,000,000)
- Negative numbers: Prevent or coerce to 0

**Event Handler Errors:**
- Wrap all event handlers in try-catch
- Log errors to console
- Show user-friendly toast notification
- Prevent error from breaking entire application

### Migration Errors

**Version Upgrade Failures:**
```javascript
function upgradeStateV4toV5(oldState) {
  try {
    const newState = {
      ...oldState,
      version: 5,
      jobSearch: {
        applications: 0,
        interviews: 0,
        offers: 0,
        targetSalary: 130000,
        lastUpdated: null
      },
      week8Checklist: getDefaultWeek8Checklist()
    };
    
    // Validate upgraded state
    const validation = validateState(newState);
    if (!validation.valid) {
      throw new Error('Upgraded state failed validation: ' + validation.errors.join(', '));
    }
    
    return newState;
  } catch (error) {
    console.error('State upgrade failed:', error);
    // Return default v5 state, preserving what we can
    return {
      ...getDefaultStateV5(),
      // Preserve safe fields from old state
      streak: oldState.streak || 0,
      sessions: oldState.sessions || 0
    };
  }
}
```

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests to ensure comprehensive coverage:

**Unit Tests** focus on:
- Specific examples of state transitions
- Edge cases (empty state, maximum values, boundary conditions)
- Error conditions (corrupted data, quota exceeded)
- Integration points between components

**Property-Based Tests** focus on:
- Universal properties that hold for all inputs
- State persistence round-trips with randomized data
- Progress calculations with various task combinations
- Input validation across all possible numeric values

### Property-Based Testing Configuration

**Testing Library:** Use `fast-check` for JavaScript property-based testing

**Test Configuration:**
- Minimum 100 iterations per property test
- Each test must reference its design document property
- Tag format: `Feature: job-search-tracker-enhancement, Property {number}: {property_text}`

**Example Property Test:**
```javascript
// Property 1: State Persistence Round-Trip
// Feature: job-search-tracker-enhancement, Property 1: State persistence round-trip
test('state persistence round-trip preserves all fields', () => {
  fc.assert(
    fc.property(
      fc.record({
        applications: fc.integer({ min: 0, max: 1000 }),
        interviews: fc.integer({ min: 0, max: 100 }),
        offers: fc.integer({ min: 0, max: 10 }),
        targetSalary: fc.integer({ min: 0, max: 1000000 })
      }),
      (jobSearch) => {
        const state = {
          ...getDefaultStateV5(),
          jobSearch
        };
        
        // Save to localStorage
        saveState(state);
        
        // Load from localStorage
        const loadedState = getState();
        
        // Verify all fields match
        expect(loadedState.jobSearch.applications).toBe(jobSearch.applications);
        expect(loadedState.jobSearch.interviews).toBe(jobSearch.interviews);
        expect(loadedState.jobSearch.offers).toBe(jobSearch.offers);
        expect(loadedState.jobSearch.targetSalary).toBe(jobSearch.targetSalary);
      }
    ),
    { numRuns: 100 }
  );
});
```

### Unit Test Examples

**Example Unit Tests:**

```javascript
// Test: Job search tracker displays on page load
test('job search tracker is visible on milestone page', () => {
  renderMilestonePage();
  const tracker = document.getElementById('jobSearchTracker');
  expect(tracker).toBeInTheDocument();
  expect(tracker).toBeVisible();
});

// Test: Apply to 3 jobs button increments counter
test('apply to 3 jobs button adds 3 to applications', () => {
  state.jobSearch.applications = 10;
  const button = document.getElementById('jstApplyButton');
  button.click();
  expect(state.jobSearch.applications).toBe(13);
});

// Test: Week 8 checklist shows 12 items
test('week 8 checklist contains exactly 12 items', () => {
  renderWeek8Checklist();
  const items = document.querySelectorAll('.w8c-item');
  expect(items).toHaveLength(12);
});

// Test: Corrupted localStorage falls back to backup
test('corrupted primary storage loads from backup', () => {
  localStorage.setItem(STORAGE_KEY, 'invalid json{');
  localStorage.setItem(BACKUP_KEY, JSON.stringify(getDefaultStateV5()));
  
  const state = getState();
  expect(state.version).toBe(5);
  expect(state.jobSearch).toBeDefined();
});

// Test: State validation rejects invalid structure
test('validateState rejects state without jobSearch', () => {
  const invalidState = { version: 5, tasks: {} };
  const result = validateState(invalidState);
  expect(result.valid).toBe(false);
  expect(result.errors).toContain('Missing jobSearch object');
});
```

### Integration Testing

**Cross-Page State Persistence:**
1. Load milestone1-job-ready.html
2. Complete a task and update job search metrics
3. Navigate to milestone2-senior-solid.html
4. Verify state is identical
5. Modify state on milestone 2
6. Navigate back to milestone 1
7. Verify changes are reflected

**Export/Import with New Schema:**
1. Create state with job search data and checklist
2. Export to JSON file
3. Clear localStorage
4. Import JSON file
5. Verify all fields restored correctly

### Manual Testing Checklist

- [ ] Job search tracker visible on all milestone pages
- [ ] Tracker remains fixed during scroll
- [ ] All numeric inputs accept valid numbers
- [ ] Invalid inputs are rejected or coerced
- [ ] Apply to 3 jobs button works correctly
- [ ] Week 8 checklist toggles items
- [ ] Progress bar updates in real-time
- [ ] Confetti shows on 100% completion
- [ ] State persists across page refreshes
- [ ] State syncs across milestone pages
- [ ] Export includes new fields
- [ ] Import handles v4 and v5 states
- [ ] Mobile responsive design works
- [ ] Existing features still functional
- [ ] No console errors during normal use

### Performance Testing

**localStorage Performance:**
- Measure save operation time with large state objects
- Verify save operations complete in < 50ms
- Test with state containing 1000+ tasks

**Rendering Performance:**
- Measure time to render job search tracker
- Measure time to render Week 8 checklist
- Verify initial page load < 2 seconds

**Memory Usage:**
- Monitor memory consumption with large states
- Verify no memory leaks on repeated saves
- Test with 100+ save/load cycles

## Implementation Notes

### File Modification Strategy

**Files to Modify:**
1. `data.js` - Update WEEKS array with new content for weeks 1-8
2. `milestone1-job-ready.html` - Add job search tracker and Week 8 checklist HTML/CSS
3. `app.js` - Add state management functions and rendering logic
4. `index.html` - Update to use consistent localStorage key
5. `milestone2-senior-solid.html` - Update to use consistent localStorage key
6. `milestone3-staff-engineer.html` - Update to use consistent localStorage key

### localStorage Key Migration

**Current State:**
- Each file may use different keys or inconsistent access patterns

**Target State:**
- All files use `STORAGE_KEY = "rn_roadmap_v5"`
- All files use `BACKUP_KEY = "rn_roadmap_v5_backup"`
- Centralized state management functions

**Migration Steps:**
1. Update STORAGE_KEY constant in all files
2. Implement state version detection
3. Auto-upgrade v4 states to v5 on first load
4. Preserve existing user data during upgrade

### Responsive Design Considerations

**Job Search Tracker Positioning:**
- Desktop: Fixed top-right, below navigation
- Tablet: Fixed top-right, smaller padding
- Mobile: Fixed bottom, above bottom navigation, collapsible

**Week 8 Checklist Layout:**
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: Single column, full width

### Accessibility Considerations

**Keyboard Navigation:**
- All inputs focusable with Tab key
- Enter key submits numeric inputs
- Space bar toggles checklist items
- Escape key closes modals

**Screen Reader Support:**
- ARIA labels on all interactive elements
- Live regions for dynamic updates
- Semantic HTML structure
- Focus management for modals

**Visual Accessibility:**
- Sufficient color contrast (WCAG AA)
- Focus indicators on all interactive elements
- Text alternatives for icons
- Scalable text (no fixed pixel sizes for body text)

## Deployment Considerations

### Backward Compatibility

**Handling Existing Users:**
- Detect v4 state on load
- Automatically upgrade to v5
- Preserve all existing data
- Show one-time notification about new features

**Rollback Strategy:**
- Keep v4 state in backup key
- If critical issues found, can revert to v4
- Document downgrade procedure

### Browser Support

**Target Browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Polyfills Not Required:**
- localStorage is universally supported
- CSS Grid is widely supported
- ES6 features are standard

### Performance Optimization

**Initial Load:**
- Inline critical CSS
- Defer non-critical JavaScript
- Lazy load Week 8 checklist until viewed

**Runtime Performance:**
- Debounce input changes (300ms)
- Batch localStorage writes
- Use CSS transforms for animations
- Minimize DOM reflows

### Monitoring and Analytics

**Key Metrics to Track:**
- Job search tracker usage rate
- Average applications per user
- Week 8 checklist completion rate
- localStorage error rate
- Page load performance

**Error Tracking:**
- Log localStorage quota errors
- Track state validation failures
- Monitor migration success rate
- Capture unhandled exceptions

## Future Enhancements

### Potential Additions

1. **Job Application Tracker:**
   - Detailed list of applications with company names
   - Application status tracking (applied, interviewed, offered, rejected)
   - Date tracking for follow-ups

2. **Interview Preparation:**
   - STAR story builder
   - Mock interview timer
   - Common question bank

3. **Salary Negotiation Tools:**
   - Salary comparison data
   - Negotiation script templates
   - Offer evaluation checklist

4. **Progress Visualization:**
   - Charts showing progress over time
   - Streak calendar view
   - Milestone timeline

5. **Data Export Enhancements:**
   - Export to PDF resume format
   - Export to LinkedIn profile format
   - Share progress with mentors

### Technical Debt Considerations

**Current Limitations:**
- No backend synchronization (data only in browser)
- No multi-device sync
- Limited to localStorage capacity (~5-10MB)
- No collaborative features

**Potential Refactoring:**
- Extract state management to separate module
- Implement proper TypeScript types
- Add build system for code optimization
- Consider framework migration for complex features

## Conclusion

This design provides a comprehensive approach to enhancing the roadmap application with job search tracking capabilities while maintaining the existing architecture and user experience. The implementation focuses on reliability through robust state management, backward compatibility through version migration, and user experience through responsive design and accessibility features.

The correctness properties ensure that critical behaviors are testable and verifiable, while the error handling strategy provides resilience against common failure modes. The testing strategy combines property-based testing for universal correctness with unit tests for specific scenarios and edge cases.
