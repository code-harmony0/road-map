---
name: roadmap-engineer
description: Architect and maintain modular roadmap content using SOLID principles. Use when adding new weeks/months to the roadmap, refactoring large data files into modules, or validating milestone schema compliance.
---

# Roadmap Engineer

Maintain the structural integrity and modularity of the roadmap codebase. Follow established SOLID principles to ensure content is segregated, reusable, and easy to extend.

## Workflow

### 1. Identify Target Phase
Determine if the change belongs to Phase 1 (Foundation), Phase 2 (Career Acceleration), or Phase 3 (Leadership).

### 2. Locate Orchestrator
Check the relevant orchestrator file:
- `js/content/phases/phase1.js`
- `js/content/phases/phase2.js`
- `js/content/phases/phase3.js`

See [architecture.md](references/architecture.md) for structural patterns.

### 3. Implement or Update Module
- **New Module**: Create a new file in the phase's sub-directory (e.g., `js/content/phases/phase1/weeks7-8.js`).
- **Template**: Use the boilerplate from [module_template.js](assets/module_template.js).
- **Update**: Append new data to existing modules if they cover the relevant timeline block.

### 4. Wire to Orchestrator
Import the new module into the orchestrator and spread its contents into the consolidated exports.

### 5. Validate Schema
Ensure all new objects comply with the [schema.md](references/schema.md) specification. Check for:
- Unique IDs for tasks and bosses.
- Presence of required fields (`definitionOfDone`, `resumeLine`, etc.).
- Proper `color` and `xp` values.

## Core Rules
- **No Monoliths**: Never add raw data directly to `phaseX.js` orchestrators.
- **ID Integrity**: Use hierarchical IDs (e.g., `m5-w17-d1` for Month 5, Week 17, Day 1).
- **Technical Depth**: Every task must have a corresponding `DETAILS` entry with a clear `objective` and `definitionOfDone`.
