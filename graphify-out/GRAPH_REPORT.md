# Graph Report - road-map  (2026-06-01)

## Corpus Check
- 32 files · ~17,611 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 192 nodes · 400 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d4de91e6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]

## God Nodes (most connected - your core abstractions)
1. `StateManager` - 15 edges
2. `saveState()` - 12 edges
3. `EventBus` - 11 edges
4. `init()` - 10 edges
5. `state` - 10 edges
6. `Senior Roadmap - Mobile Systems Engineer Career Plan` - 10 edges
7. `shootConfetti()` - 9 edges
8. `bindCommandActions()` - 8 edges
9. `toast()` - 8 edges
10. `EVENTS` - 7 edges

## Surprising Connections (you probably didn't know these)
- `init()` --calls--> `renderFocus()`  [EXTRACTED]
  js/main.js → js/features/FocusSection.js
- `init()` --calls--> `initJobTracker()`  [EXTRACTED]
  js/main.js → js/features/JobTracker.js
- `bindCommandActions()` --calls--> `applyThree()`  [EXTRACTED]
  js/main.js → js/features/JobTracker.js
- `bindCommandActions()` --calls--> `scrollToId()`  [EXTRACTED]
  js/main.js → js/ui/Sidebar.js
- `completeTimer()` --calls--> `toast()`  [EXTRACTED]
  js/features/Timer.js → js/ui/Toast.js

## Import Cycles
- None detected.

## Communities (11 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (29): COMMANDS, findMilestone(), getAllMilestones(), LEVELS, MESSAGES, MILESTONE_HEADERS, SIDEBAR_LABELS, FOCUS_SECTION (+21 more)

### Community 1 - "Community 1"
Cohesion: 0.16
Nodes (19): getLevel(), getNextLevel(), findMilestone(), EVENTS, COLORS, createParticles(), shootConfetti(), addXP() (+11 more)

### Community 2 - "Community 2"
Cohesion: 0.18
Nodes (21): bindAction(), getCurrentLevel(), initGamification(), closeTimer(), completeTimer(), formatTime(), openTimer(), pauseTimer() (+13 more)

### Community 3 - "Community 3"
Cohesion: 0.18
Nodes (4): StateManager, getDefaultState(), loadState(), saveState()

### Community 4 - "Community 4"
Cohesion: 0.28
Nodes (7): state, toggleTask(), PHASE_0_WEEKS, PHASE_1_WEEKS, PHASE_2_WEEKS, PHASE_3_WEEKS, handleTaskToggle()

### Community 5 - "Community 5"
Cohesion: 0.14
Nodes (13): files, code, document, image, paper, video, graphifyignore_patterns, needs_graph (+5 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (13): Data Storage, Design Direction, Features, File Structure, For Personal Use & Open Source, How to Customize for Yourself, License, Option 1: GitHub Pages (Recommended) (+5 more)

### Community 7 - "Community 7"
Cohesion: 0.30
Nodes (9): actions, filterCommands(), getCommands(), closeCmd(), currentFiltered, executeCmd(), handleKeydown(), openCmd() (+1 more)

### Community 8 - "Community 8"
Cohesion: 0.22
Nodes (7): clearState(), exportState(), generatePaceNudge(), handleFocusTask(), renderFocus(), closeSettings(), exportData()

### Community 9 - "Community 9"
Cohesion: 0.36
Nodes (6): scrollToId(), toggleMilestone(), toggleWeek(), updateActiveStates(), updateMilestoneDOM(), updateWeekDOM()

## Knowledge Gaps
- **43 isolated node(s):** `code`, `document`, `paper`, `image`, `video` (+38 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `EventBus` connect `Community 10` to `Community 1`, `Community 2`, `Community 3`, `Community 4`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **What connects `code`, `document`, `paper` to the rest of the system?**
  _43 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06282051282051282 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._