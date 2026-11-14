# "Start here" home page: design

## Problem
Three roadmaps (v1 old plan, v2 two-track schedule, v3 skill ladder) with ~140 tasks and no single answer to "what do I do first?".

## Design
A new default view, **Start here**, ordered as milestones. One milestone is "Now"; the rest are collapsed. Each lists tasks pulled from the existing roadmaps by id (read-only status, hours, and an "Open in roadmap" link). Roadmap files are not modified.

Order (gate-based, no dates; v2's calendar already ran out):
1. Fix your funnel  2. React Native interview depth  3. System design  4. Backend brick  5. Close the offer  6. After the move: mobile moat, AI layer, show your work.

Standing habit (not a milestone): 3 targeted applications a week. Optional: DSA, only if a target company asks.

## Critique applied (what changed from the first proposal)
| Flaw in first proposal | Fix |
|---|---|
| Milestones 3 and 4 overlapped (DB modelling/indexing in both) | M3 is design practice only; DB, indexing and caching stay in M4. M4's gate re-does the scale design with your own measured numbers. |
| Ticking tasks on Home would put XP on the wrong roadmap (XP is per active roadmap) | Home is read-only for tasks. "Open in roadmap" switches roadmap first, then you tick there. |
| "Done when" needs persisted state the app doesn't have | New `homeGates` and `view` in state. `loadState` merges defaults, so old saves migrate safely. |
| Your real progress (20 applications sent) predates ticks in this app, so Home would send you back to step 1 | Every milestone has "Already done, skip". "Now" = first milestone not attested or skipped. |
| t2-1 mixes DSA with referrals and interviews | Left out of the optional DSA list; only t1-2 and t1-5 are listed. |
| Priority order rests on thin evidence | Page states it: system design from one interview, DSA from 1 of 39 JDs; re-check rule shown. |

## Evidence caveat (shown on the page)
System design ranks high because of one self-reported interview rejection. DSA ranks low because 1 of 39 evaluated roles asked for it (keywords LLM-extracted, only 7 JDs archived). If a company you want asks for DSA, do the optional tasks.

## Technical
- `js/content/home.js`: milestone data (ids only).
- `js/ui/Home.js`: renders `#homePanel`; resolves ids to tasks across all roadmaps; deep link = `setRoadmap` + `setView('roadmap')` + expand and scroll to the week card.
- State: `view: 'home' | 'roadmap'` (default `home`), `homeGates: { [id]: 'done' | 'skipped' }`.
- `body.home-view` hides the roadmap chrome via CSS.
- Verification: a node script asserts every id in home.js exists; a headless browser run checks render, skip, and deep-link.
