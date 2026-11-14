# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Existing: plain static HTML, CSS and ES modules, no build step. State in localStorage. Served as static files.

## Users
One person: a ~5-year React Native engineer in India, currently employed, preparing to move to a better-paid role (product company, Gulf or India-remote). Uses the app on a laptop, open beside the work during study sessions, to see what to do next and tick tasks. (Confirmed: laptop, study sessions.)

## Product Purpose
A personal guide through three overlapping career roadmaps (old plan, a two-track schedule, a skill ladder) so the user always knows the single next thing to do. Success: the user opens it, sees the current milestone, does the task, ticks it, and moves on without deciding what to do.

## Positioning
The roadmaps are cross-referenced into one ordered path ("Start here") built from the user's own job-search data, not generic advice.

## Operating Context
Opened during study sessions on a laptop beside a code editor and docs. Tasks are ticked as they finish. A separate interview-prep question bank page exists (interview-prep.html). Job pipeline data lives in the user's career-ops project, not here.

## Capabilities and Constraints
- One ordered route of nine milestones plus two side lists, all in js/content/plan.js; task ids are stable and progress is stored per id in localStorage (milestone gates under `homeGates`).
- Removed by decision (user delegated: "u decide", then asked to remove everything unnecessary): the three-roadmap picker and the Roadmaps view, XP/levels/bosses/confetti, Offer Radar sidebar, command palette, floating action button, mobile bottom tabs, pacing settings, the elevation-profile graphic.
- Kept: route rail, current-task card with how-to, Up next/Done lists, focus timer, interview-prep link.

## Brand Commitments
Product name in the UI today: "Training Log" / "Senior Roadmap" (not binding). No logo or brand assets.

## Evidence on Hand
Real content: roadmap data in js/content; the user's CV and pipeline data in ~/Projects/career-ops (not shipped in this app). No testimonials or external claims; none should be invented.

## Product Principles
1. One next action: the screen always makes the current step obvious.
2. Read-through, not dashboard: the user glances, acts, returns to work.
3. Honest about evidence: the plan states what it rests on.
4. Decoration earns its place: it either shows progress (the ridge and your marker) or makes the next step more inviting. Nothing else.

## Accessibility & Inclusion
Keyboard operable; visible focus; sufficient contrast for long reading beside an editor; respects prefers-reduced-motion.
