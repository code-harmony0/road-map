# Requirements Document

## Introduction

This document specifies requirements for enhancing an existing React Native roadmap application with job search tracking capabilities and personalized project references. The application currently provides a 3-milestone learning roadmap with progress tracking, timers, streaks, and task management. The enhancement will add a global job search tracker visible across all milestones, rewrite Week 1-8 tasks to reference the user's real projects, add Week 1-2 content for job preparation, enhance Week 8 with a comprehensive job readiness checklist, and resolve localStorage synchronization issues across multiple HTML files.

## Glossary

- **Application**: The React Native roadmap web application
- **Milestone**: One of three major phases in the roadmap (Job Ready, Senior, Staff Engineer)
- **Week_Card**: A collapsible card component displaying tasks for a specific week
- **Task**: An individual action item within a week that can be checked off
- **Custom_Task**: A user-created task added to a week
- **Job_Search_Tracker**: A persistent UI component displaying job application metrics
- **localStorage**: Browser storage mechanism for persisting application state
- **State**: The application's data including task completion, notes, and user progress
- **STAR_Method**: Situation, Task, Action, Result - a structured interview response format
- **Real_Project**: One of the user's actual applications (Zonesso, JIFFL, Eco Crew, Cone)

## Requirements

### Requirement 1: Global Job Search Tracker

**User Story:** As a job seeker, I want to track my job search progress across all milestones, so that I can monitor my application activity and stay motivated toward my employment goals.

#### Acceptance Criteria

1. WHEN a user views any milestone page, THE Application SHALL display the Job_Search_Tracker component in a fixed, visible position
2. THE Job_Search_Tracker SHALL display four editable numeric fields: Applications (target 50), Interviews (target 5), Offers (target 1), and Target Salary
3. WHEN a user clicks on any numeric field in the Job_Search_Tracker, THE Application SHALL allow inline editing of that value
4. WHEN a user modifies a Job_Search_Tracker value, THE Application SHALL persist the change to localStorage immediately
5. THE Job_Search_Tracker SHALL display a "Apply to 3 jobs today" call-to-action button
6. WHEN a user clicks the "Apply to 3 jobs today" button, THE Application SHALL increment the Applications counter by 3
7. THE Job_Search_Tracker SHALL remain visible when scrolling through milestone content
8. THE Job_Search_Tracker SHALL load persisted values from localStorage on page initialization

### Requirement 2: Personalized Week 1-8 Task Content

**User Story:** As a developer with existing projects, I want the roadmap tasks to reference my real work experience, so that I can build on concrete examples rather than abstract concepts.

#### Acceptance Criteria

1. THE Application SHALL replace Week 1 tasks to include "Audit Zonesso MongoDB, migrate to PostgreSQL"
2. THE Application SHALL replace Week 3 tasks to include "Add AI job matching to JIFFL"
3. THE Application SHALL replace Week 5 tasks to include "Deploy Eco Crew to AWS"
4. WHEN displaying tasks that reference Real_Projects, THE Application SHALL include specific metrics (50K downloads, 30% engagement, etc.)
5. THE Application SHALL maintain all existing task functionality (checkboxes, notes, time estimates) for rewritten tasks
6. THE Application SHALL preserve task completion state when content is updated
7. THE Application SHALL display Real_Project references in a visually distinct manner from generic tasks

### Requirement 3: Week 1-2 Job Preparation Content

**User Story:** As a job seeker preparing applications, I want dedicated tasks for resume and LinkedIn optimization, so that I can present myself professionally to employers.

#### Acceptance Criteria

1. THE Application SHALL add a new task section to Week 1 titled "Resume Rewrite with Metrics"
2. THE Week 1 resume section SHALL include tasks for quantifying achievements with metrics (50K downloads, 30% engagement)
3. THE Application SHALL add a new task section to Week 2 titled "LinkedIn Optimization"
4. THE Week 2 LinkedIn section SHALL include a checklist of profile optimization tasks
5. THE Application SHALL add a new task section to Week 2 titled "Portfolio Website Updates"
6. WHEN a user completes Week 1-2 job preparation tasks, THE Application SHALL update the overall milestone progress percentage
7. THE Application SHALL allow users to add custom tasks to Week 1-2 sections

### Requirement 4: Week 8 Job Readiness Checklist

**User Story:** As a developer completing the Job Ready milestone, I want a comprehensive checklist of job readiness criteria, so that I can verify I am fully prepared before applying to positions.

#### Acceptance Criteria

1. THE Application SHALL display a 12-item checklist in Week 8 with the following items: 50 applications sent, 2+ offers received, GitHub repos live, AWS certification obtained, Salary negotiated to $130K+, LinkedIn optimized, Resume with metrics, Portfolio live, Mock interviews completed, System design practice, Behavioral stories prepared, References contacted
2. WHEN a user views Week 8, THE Application SHALL display the checklist in a visually prominent format distinct from regular tasks
3. WHEN a user clicks a checklist item, THE Application SHALL toggle its completion state
4. THE Application SHALL persist Week 8 checklist completion state to localStorage
5. THE Application SHALL calculate and display the percentage of checklist items completed
6. WHEN all 12 checklist items are completed, THE Application SHALL display a congratulatory message
7. THE Application SHALL include the Week 8 checklist completion in the overall milestone progress calculation

### Requirement 5: localStorage Synchronization

**User Story:** As a user navigating between milestone pages, I want my progress to persist across all pages, so that I do not lose my work when switching between milestones.

#### Acceptance Criteria

1. THE Application SHALL use consistent localStorage keys across all milestone HTML files (index.html, milestone1-job-ready.html, milestone2-placeholder.html, milestone3-staff-engineer.html)
2. WHEN a user completes a task on any milestone page, THE Application SHALL save the state using the shared localStorage key
3. WHEN a user navigates to a different milestone page, THE Application SHALL load the complete state from the shared localStorage key
4. THE Application SHALL implement a state versioning system to handle schema changes
5. IF localStorage data is corrupted or invalid, THEN THE Application SHALL attempt to restore from backup localStorage key
6. THE Application SHALL create an automatic backup of state to a secondary localStorage key on every save operation
7. THE Application SHALL validate state structure before persisting to prevent data corruption

### Requirement 6: Design Preservation

**User Story:** As a user familiar with the current application, I want all existing visual design and functionality to remain unchanged, so that I can continue using the application without relearning the interface.

#### Acceptance Criteria

1. THE Application SHALL maintain all existing CSS color variables and theme definitions
2. THE Application SHALL preserve all existing font families (Bricolage Grotesque, JetBrains Mono)
3. THE Application SHALL keep all existing UI components functional (timer, streak counter, notes, custom tasks)
4. THE Application SHALL maintain the current responsive design breakpoints
5. THE Application SHALL preserve the export/import functionality for progress data
6. THE Application SHALL maintain mobile responsiveness for all new components
7. THE Application SHALL keep the existing navigation structure and tab system functional

### Requirement 7: Technical Stack Compliance

**User Story:** As a developer maintaining the application, I want all enhancements to use the existing technical stack, so that the codebase remains consistent and maintainable.

#### Acceptance Criteria

1. THE Application SHALL implement all new features using vanilla JavaScript without frameworks
2. THE Application SHALL use HTML5 and CSS3 for all new UI components
3. THE Application SHALL persist all new data using localStorage API
4. THE Application SHALL not require any backend server or API calls
5. THE Application SHALL maintain compatibility with modern browsers (Chrome, Firefox, Safari, Edge)
6. THE Application SHALL follow the existing code organization patterns (inline styles, embedded scripts)
7. THE Application SHALL use the existing state management pattern for all new features
