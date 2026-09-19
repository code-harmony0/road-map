# Graph Report - road-map  (2026-09-19)

## Corpus Check
- 48 files · ~41,071 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 285 nodes · 608 edges · 11 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `76c43c33`
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
1. `StateManager` - 17 edges
2. `saveState()` - 13 edges
3. `state` - 12 edges
4. `EventBus` - 11 edges
5. `init()` - 10 edges
6. `toast()` - 10 edges
7. `init()` - 10 edges
8. `Senior Roadmap - Mobile Systems Engineer Career Plan` - 10 edges
9. `bindCommandActions()` - 9 edges
10. `activeRoadmap()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `init()` --calls--> `renderFocus()`  [EXTRACTED]
  js/main.js → js/features/FocusSection.js
- `init()` --calls--> `renderContent()`  [EXTRACTED]
  js/main.js → js/ui/Renderer.js
- `bindCommandActions()` --calls--> `scrollToId()`  [EXTRACTED]
  js/main.js → js/ui/Sidebar.js
- `renderChrome()` --calls--> `goals()`  [EXTRACTED]
  js/ui/Renderer.js → js/features/JobTracker.js
- `renderTasks()` --calls--> `activeRoadmap()`  [EXTRACTED]
  js/ui/Renderer.js → js/config/milestones.js

## Communities (11 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (26): COMMANDS, findMilestone(), getAllMilestones(), LEVELS, MESSAGES, MILESTONE_HEADERS, SIDEBAR_LABELS, FOCUS_SECTION (+18 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (46): bindAction(), getLevel(), getNextLevel(), findMilestone(), ROADMAP_IDS, ROADMAPS, EventBus, EVENTS (+38 more)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (24): backendQuestions, behavioralQuestions, platformQuestions, rnQuestions, defaultStories, systemDesignQuestions, activeRoadmapId(), allQuestions (+16 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (8): StateManager, clearState(), exportState(), getDefaultState(), loadState(), saveState(), closeSettings(), exportData()

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (21): activePhases(), activeRoadmap(), activeWeeks(), getAllMilestones(), state, generatePaceNudge(), handleFocusTask(), renderFocus() (+13 more)

### Community 5 - "Community 5"
Cohesion: 0.14
Nodes (13): files, code, document, image, paper, video, graphifyignore_patterns, needs_graph (+5 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (19): code:block1 (├── index.html              # Main HTML structure), code:bash (# Clone the repository), Data Storage, Design Direction, Features, File Structure, For Personal Use & Open Source, How to Customize for Yourself (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.30
Nodes (9): actions, filterCommands(), getCommands(), closeCmd(), currentFiltered, executeCmd(), handleKeydown(), openCmd() (+1 more)

### Community 8 - "Community 8"
Cohesion: 0.13
Nodes (20): TASK_DETAILS, TASK_DETAILS, TASK_DETAILS, R0_WEEKS, R1_WEEKS, R2_WEEKS, R3_WEEKS, SKILL_LADDER_PHASES (+12 more)

### Community 9 - "Community 9"
Cohesion: 0.36
Nodes (6): scrollToId(), toggleMilestone(), toggleWeek(), updateActiveStates(), updateMilestoneDOM(), updateWeekDOM()

### Community 10 - "Community 10"
Cohesion: 0.20
Nodes (8): careerOps, counts, INTERVIEWED, OFFERED, out, root, SENT, tracker

## Knowledge Gaps
- **57 isolated node(s):** `code`, `document`, `paper`, `image`, `video` (+52 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `EventBus` connect `Community 1` to `Community 3`, `Community 4`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `code`, `document`, `paper` to the rest of the system?**
  _57 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06906906906906907 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08196721311475409 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.13109243697478992 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.11954022988505747 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.14962121212121213 - nodes in this community are weakly interconnected._