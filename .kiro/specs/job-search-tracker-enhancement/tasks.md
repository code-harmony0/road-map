# Implementation Plan: Job Search Tracker Enhancement

## Overview

This implementation plan breaks down the job search tracker enhancement into discrete, manageable coding tasks. The approach follows an incremental strategy: first updating the state management foundation, then adding UI components, updating content data, and finally ensuring cross-page consistency. Each task builds on previous work and includes validation through code execution.

## Tasks

- [x] 1. Update state management for v5 schema
  - [x] 1.1 Add v5 state schema with jobSearch and week8Checklist fields
    - Update `getDefaultState()` to return v5 schema with jobSearch object (applications, interviews, offers, targetSalary, lastUpdated) and week8Checklist object (12 boolean fields)
    - Update STORAGE_KEY constant to "rn_roadmap_v5"
    - Update BACKUP_KEY constant to "rn_roadmap_v5_backup"
    - _Requirements: 1.1, 1.2, 5.1_
  
  - [x] 1.2 Implement state version migration from v4 to v5
    - Create `upgradeStateV4toV5()` function that preserves existing v4 fields and adds new v5 fields with defaults
    - Update `getState()` to detect version and call upgrade function
    - Add version validation in state loading
    - _Requirements: 5.4_
  
  - [x] 1.3 Implement state validation function
    - Create `validateState()` function that checks for required fields, correct types, and valid ranges
    - Return validation result object with `valid` boolean and `errors` array
    - Integrate validation into `saveState()` to prevent corrupted data
    - _Requirements: 5.7_
  
  - [x] 1.4 Enhance backup and recovery mechanism
    - Update `saveState()` to write to both primary and backup keys
    - Update `getState()` to attempt backup recovery on primary failure
    - Add error logging for recovery operations
    - _Requirements: 5.5, 5.6_

- [x] 2. Checkpoint - Verify state management
  - Ensure all tests pass, ask the user if questions arise.

- [x] 3. Implement job search tracker component
  - [x] 3.1 Create job search tracker HTML structure
    - Add job search tracker div with header, metrics section, and CTA button to milestone1-job-ready.html
    - Include four input fields: applications, interviews, offers, targetSalary
    - Add "Apply to 3 jobs today" button with id="jstApplyButton"
    - _Requirements: 1.1, 1.2, 1.5_
  
  - [x] 3.2 Add job search tracker CSS styling
    - Create fixed positioning styles for desktop (top-right) and mobile (bottom, collapsible)
    - Style input fields with JetBrains Mono font and proper sizing
    - Add gradient styling to CTA button matching existing design
    - Implement responsive breakpoints for tablet and mobile
    - _Requirements: 1.1, 1.7, 6.6_
  
  - [x] 3.3 Implement job search tracker state management functions
    - Create `updateJobSearchMetric(field, value)` function to update individual metrics
    - Create `applyToThreeJobs()` function to increment applications by 3
    - Create `renderJobSearchTracker()` function to populate UI from state
    - Add input event listeners with debouncing (300ms)
    - _Requirements: 1.3, 1.4, 1.6_
  
  - [ ]* 3.4 Write property test for job search counter increment
    - **Property 2: Job Search Counter Increment**
    - **Validates: Requirements 1.6**
  
  - [ ]* 3.5 Write property test for state persistence round-trip
    - **Property 1: State Persistence Round-Trip**
    - **Validates: Requirements 1.4, 1.8, 4.4, 5.3**

- [ ] 4. Implement Week 8 job readiness checklist
  - [ ] 4.1 Create Week 8 checklist HTML structure
    - Add week-8-checklist section with header, progress bar, and 12-item grid
    - Each item includes checkbox, title text, and description
    - Add data-key attributes for state binding
    - _Requirements: 4.1, 4.2_
  
  - [ ] 4.2 Add Week 8 checklist CSS styling
    - Create prominent styling distinct from regular tasks (larger, different colors)
    - Implement 3-column grid for desktop, 2-column for tablet, 1-column for mobile
    - Style progress bar with gradient fill
    - Add completion animations
    - _Requirements: 4.2, 6.6_
  
  - [ ] 4.3 Implement Week 8 checklist state management
    - Create `toggleWeek8ChecklistItem(key)` function to toggle completion state
    - Create `renderWeek8Checklist()` function to update UI from state
    - Create `calculateWeek8Progress()` function to compute percentage
    - Add confetti animation trigger on 100% completion
    - _Requirements: 4.3, 4.4, 4.5, 4.6_
  
  - [ ]* 4.4 Write property test for checklist toggle idempotence
    - **Property 3: Checklist Toggle Idempotence**
    - **Validates: Requirements 4.3**
  
  - [ ]* 4.5 Write property test for progress calculation accuracy
    - **Property 4: Progress Calculation Accuracy**
    - **Validates: Requirements 3.6, 4.5, 4.7**

- [ ] 5. Checkpoint - Verify UI components
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Update week content data with real project references
  - [ ] 6.1 Update Week 1 tasks in data.js
    - Replace Week 1 tasks to include "Audit Zonesso MongoDB, migrate to PostgreSQL"
    - Add projectRef objects with name: "Zonesso", metric: "50K downloads", context: "Chat application with 30% daily engagement"
    - Add new resume rewrite tasks with metrics
    - _Requirements: 2.1, 3.1, 3.2_
  
  - [ ] 6.2 Update Week 2 tasks in data.js
    - Add LinkedIn optimization checklist tasks
    - Add portfolio website update tasks
    - Ensure all tasks have time estimates and why explanations
    - _Requirements: 3.3, 3.4, 3.5_
  
  - [ ] 6.3 Update Week 3 tasks in data.js
    - Replace Week 3 tasks to include "Add AI job matching to JIFFL"
    - Add projectRef with name: "JIFFL", metric: "10K users", context: "Job matching platform"
    - _Requirements: 2.2_
  
  - [ ] 6.4 Update Week 5 tasks in data.js
    - Replace Week 5 tasks to include "Deploy Eco Crew to AWS"
    - Add projectRef with name: "Eco Crew", metric: "5K downloads", context: "Environmental tracking app"
    - _Requirements: 2.3_
  
  - [ ] 6.5 Add CSS styling for project reference badges
    - Create .project-ref-badge class with distinct styling
    - Add metric display styling with accent colors
    - Ensure visual distinction from generic tasks
    - _Requirements: 2.7_
  
  - [ ] 6.6 Update task rendering to display project references
    - Modify task rendering logic to detect projectRef field
    - Display project name, metric, and context in task UI
    - Apply project-ref-badge styling when projectRef exists
    - _Requirements: 2.4, 2.7_
  
  - [ ]* 6.7 Write property test for task completion state preservation
    - **Property 6: Task Completion State Preservation**
    - **Validates: Requirements 2.6**

- [ ] 7. Ensure cross-page localStorage consistency
  - [ ] 7.1 Update index.html to use v5 storage keys
    - Replace STORAGE_KEY with "rn_roadmap_v5"
    - Replace BACKUP_KEY with "rn_roadmap_v5_backup"
    - Ensure getState() and saveState() functions are consistent
    - _Requirements: 5.1, 5.2_
  
  - [ ] 7.2 Update milestone2-senior-solid.html to use v5 storage keys
    - Replace STORAGE_KEY with "rn_roadmap_v5"
    - Replace BACKUP_KEY with "rn_roadmap_v5_backup"
    - Copy state management functions from milestone1 for consistency
    - _Requirements: 5.1, 5.2_
  
  - [ ] 7.3 Update milestone3-staff-engineer.html to use v5 storage keys
    - Replace STORAGE_KEY with "rn_roadmap_v5"
    - Replace BACKUP_KEY with "rn_roadmap_v5_backup"
    - Copy state management functions from milestone1 for consistency
    - _Requirements: 5.1, 5.2_
  
  - [ ]* 7.4 Write property test for cross-page state consistency
    - **Property 7: Cross-Page State Consistency**
    - **Validates: Requirements 5.2, 5.3**

- [ ] 8. Integrate new components into milestone progress calculation
  - [ ] 8.1 Update progress calculation to include Week 8 checklist
    - Modify `updateStats()` to include week8Checklist items in total count
    - Update milestone progress bar to reflect checklist completion
    - Ensure progress percentage includes all task types (regular, custom, checklist)
    - _Requirements: 4.7_
  
  - [ ] 8.2 Update progress calculation to include new Week 1-2 tasks
    - Verify new tasks are counted in milestone progress
    - Test that custom tasks can be added to Week 1-2
    - Ensure progress updates in real-time as tasks are completed
    - _Requirements: 3.6, 3.7_

- [ ] 9. Checkpoint - Verify integration
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 10. Add error handling and validation
  - [ ] 10.1 Implement input validation for job search metrics
    - Add numeric validation to all job search input fields
    - Prevent negative numbers (coerce to 0)
    - Add salary formatting with commas
    - Show validation errors with toast notifications
    - _Requirements: 1.3_
  
  - [ ] 10.2 Implement localStorage error handling
    - Add try-catch around all localStorage operations
    - Handle quota exceeded errors with user notification
    - Implement automatic backup recovery on corruption
    - Log errors to console for debugging
    - _Requirements: 5.5_
  
  - [ ] 10.3 Add state validation error handling
    - Wrap validateState() calls in error handlers
    - Provide fallback to default state on validation failure
    - Show user-friendly error messages
    - Preserve safe fields from corrupted state when possible
    - _Requirements: 5.7_
  
  - [ ]* 10.4 Write property test for state validation and backup
    - **Property 5: State Validation and Backup**
    - **Validates: Requirements 5.5, 5.6, 5.7**
  
  - [ ]* 10.5 Write property test for numeric input validation
    - **Property 8: Numeric Input Validation**
    - **Validates: Requirements 1.3, 1.4**

- [ ] 11. Verify existing functionality preservation
  - [ ] 11.1 Test timer functionality with new state schema
    - Verify timer starts, pauses, and resets correctly
    - Ensure timer state persists with v5 schema
    - Test session completion increments sessions counter
    - _Requirements: 6.3_
  
  - [ ] 11.2 Test streak counter with new state schema
    - Verify streak increments on daily activity
    - Ensure streak persists across page loads
    - Test best streak tracking
    - _Requirements: 6.3_
  
  - [ ] 11.3 Test notes functionality with new state schema
    - Verify notes can be added to tasks
    - Ensure notes persist with v5 schema
    - Test note modal open/close
    - _Requirements: 6.3_
  
  - [ ] 11.4 Test custom tasks functionality with new state schema
    - Verify custom tasks can be added to any week
    - Ensure custom tasks persist with v5 schema
    - Test custom task completion and deletion
    - _Requirements: 6.3, 3.7_
  
  - [ ] 11.5 Test export/import with v5 schema
    - Verify export includes all v5 fields (jobSearch, week8Checklist)
    - Test import of v5 JSON file
    - Test import of v4 JSON file with automatic upgrade
    - Ensure export/import preserves all data
    - _Requirements: 6.5_
  
  - [ ]* 11.6 Write property test for task interaction consistency
    - **Property 9: Task Interaction Consistency**
    - **Validates: Requirements 2.5, 6.3**

- [ ] 12. Responsive design and accessibility
  - [ ] 12.1 Implement responsive job search tracker positioning
    - Desktop: fixed top-right below navigation
    - Tablet: fixed top-right with reduced padding
    - Mobile: fixed bottom above bottom nav, collapsible
    - Test at breakpoints: 1024px, 768px, 480px
    - _Requirements: 6.6_
  
  - [ ] 12.2 Implement responsive Week 8 checklist layout
    - Desktop: 3-column grid
    - Tablet: 2-column grid
    - Mobile: single column full width
    - Test at breakpoints: 1024px, 768px, 480px
    - _Requirements: 6.6_
  
  - [ ] 12.3 Add keyboard navigation support
    - Tab key focuses all inputs and buttons
    - Enter key submits numeric inputs
    - Space bar toggles checklist items
    - Escape key closes modals
    - _Requirements: 6.3_
  
  - [ ] 12.4 Add ARIA labels and screen reader support
    - Add aria-label to all interactive elements
    - Add aria-live regions for dynamic updates
    - Ensure semantic HTML structure
    - Test with screen reader (NVDA or VoiceOver)
    - _Requirements: 6.3_

- [ ] 13. Final integration and testing
  - [ ] 13.1 Test complete user flow across all milestones
    - Load milestone 1, complete tasks, update job search metrics
    - Navigate to milestone 2, verify state persists
    - Navigate to milestone 3, verify state persists
    - Return to milestone 1, verify all changes preserved
    - _Requirements: 5.2, 5.3, 6.7_
  
  - [ ] 13.2 Test state migration from v4 to v5
    - Create v4 state in localStorage
    - Load application
    - Verify automatic upgrade to v5
    - Verify all v4 data preserved
    - Verify new v5 fields initialized
    - _Requirements: 5.4_
  
  - [ ]* 13.3 Write property test for state version migration
    - **Property 10: State Version Migration**
    - **Validates: Requirements 5.4**
  
  - [ ] 13.4 Verify no console errors during normal use
    - Load each milestone page
    - Interact with all features
    - Check browser console for errors
    - Fix any warnings or errors found
    - _Requirements: 6.3, 7.7_
  
  - [ ] 13.5 Performance testing
    - Measure page load time (target < 2 seconds)
    - Measure localStorage save time (target < 50ms)
    - Test with large state (1000+ tasks)
    - Verify no memory leaks over 100 save/load cycles
    - _Requirements: 6.3_

- [ ] 14. Final checkpoint - Complete verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional property-based tests and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation and provide opportunities for user feedback
- Property tests validate universal correctness properties across randomized inputs
- Unit tests validate specific examples and edge cases
- The implementation follows an incremental approach: state management → UI components → content updates → integration → testing
- All code should use vanilla JavaScript without frameworks, maintaining consistency with existing codebase
- localStorage operations should be wrapped in try-catch for error handling
- All new UI components should follow existing design patterns (colors, fonts, spacing)
