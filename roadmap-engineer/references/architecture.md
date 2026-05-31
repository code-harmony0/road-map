# Roadmap Architecture

The project follows a modular, segregated structure based on SOLID principles (specifically Separation of Concerns).

## Structure
```
js/content/phases/
├── phase1.js (Orchestrator)
├── phase2.js (Orchestrator)
├── phase1/
│   ├── weeks1-2.js
│   ├── weeks3-4.js
│   └── weeks5-6.js
└── phase2/
    ├── month3.js
    ├── month4.js
    └── month5.js
```

## Orchestrators
Orchestrators (e.g., `phase1.js`) must NOT contain raw data. They should only:
1. Import modules from their respective sub-directories.
2. Export a consolidated `PHASE_X_WEEKS` (or `PHASE_X_MONTHS`) array.
3. Export a consolidated `TASK_DETAILS` map.

Example:
```javascript
import { WEEKS as W1_2, DETAILS as D1_2 } from './phase1/weeks1-2.js';
export const PHASE_1_WEEKS = [...W1_2];
export const TASK_DETAILS = {...D1_2};
```

## Modules
Modules (e.g., `weeks1-2.js`) export:
- `export const WEEKS = [...]`: Array of high-level roadmap objects.
- `export const DETAILS = {...}`: Map of technical task details.
