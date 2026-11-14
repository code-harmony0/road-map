# Design

Recorded from the built app (css/app.css, js/ui). Ground truth over intention.

## World
Night sky over a ridge. The whole route is drawn as a mountain at the top of the page with an amber marker for where you are; the single task to do now sits under it. Dark by the user's choice (laptop beside a dark editor), and deliberately rich: the user asked for something eye-appealing and tempting, not flat.

## Layout
- Top bar (frosted): peak logo, overall progress bar and count, Interview prep link, 50-minute timer.
- Fluid width: the layout uses the whole window (max 2200px) with a gutter of clamp(20px, 3vw, 56px). The task card's how-to splits into two columns (Goal and Steps | Use and Done when) when the card is wide enough (container query), and Up next tiles into a multi-column grid.
- Two columns from 900px up: a frosted, sticky route rail (284px) and the main panel (max 752px). Below 900px the rail becomes a dropdown showing "3 of 9 · System design".
- Main panel order: ridge hero (milestone title, "n of m tasks done · about Xh left", your marker "x of 63"), a segmented bar with one segment per task, the current task card, "Up next", collapsed "Done", then the milestone finish line with a single Skip action.

## Tokens
- Ground `#080d1a` with a fixed aurora (teal top-left, violet top-right, faint blue bottom). Surfaces `#101830` / `#17213f`, glass `rgba(16,24,48,.72)`, lines `rgba(255,255,255,.08 / .16)`.
- Ink `#eef2ff` (17:1), ink-2 `#c3cbe6`, ink-3 `#98a3c7` (7:1). Control borders `#6f7ba3`.
- Action gradient `#5b4ef0 -> #4561f2` (white text 5.5:1 / 4.9:1), violet text `#b3adff`. Teal `#2de2b4 -> #22c8d6` for ground covered and done. Amber `#ffc15a` only for "you are here" and the finish flag.
- Type: Bricolage Grotesque (display: hero title, task title, section heads), Atkinson Hyperlegible Next (UI and body), Atkinson Hyperlegible Mono (timer and numeric meta). Body 1rem/1.55, measure 66ch.
- Radius 12-22px. Depth: soft offset shadows and an inset top highlight; the primary button carries a violet glow.

## Components
- **Ridge hero:** stars (radial dots), a gradient sky, an SVG ridge whose covered part is teal-filled, an amber pulsing marker positioned by overall progress, a summit flag. Decoration here carries meaning: it is the progress display.
- **Task card:** frosted gradient panel with a teal-to-violet hairline on top. Chips ("Task 3 of 9", duration), display-size title, one-line reason, Goal, numbered Steps joined by a thin line, Use as pill links, a teal Done-when callout, collapsed "Why it matters". Sticky blurred bottom bar with **Mark done** (gradient, `D` hint).
- **Up next:** each task is a rounded row with a gradient checkbox, duration pill and chevron; clicking the row expands the how-to inline, the checkbox only ticks.
- **Rail item:** numbered node (gradient + halo for current, teal check when done), title, count and a thin progress bar; current item has a violet wash.
- **Milestone complete:** the card turns teal-violet with an amber flag icon and one "Yes, next milestone" button.
- **Motion:** card slide-in (360ms) when the task changes, marker pulse, check draw (240ms), hover lift on the primary button. All off under reduced motion.

## Rules
- No eyebrows, no gradient text, no emoji, no coloured side borders. Colours keep roles: teal = done, violet-blue = action, amber = where you are.
- Focus: 2px violet outline, offset 2px. Selection and caret use the action colour.
- Keyboard: D marks the current task done (ignored in inputs and with modifiers).

## Interview prep page
Same design as the route page: shared top bar (Route / Interview prep), frosted topic and mastery filter rail on the left, a hero, mastery tiles per topic, question cards (badges, segmented Gap / Studying / Mastered control, expandable answer) in a grid, and a frosted sticky Story bank on the right. Below 1320px the story bank moves under the questions; below 900px the filters become one scrolling row of pills. Styles: css/prep.css on top of css/app.css.

## Progress backup
The rail footer has Export (downloads a JSON file of ticks and milestone gates) and Import (restores it). Progress lives in the browser, so use this to move it between machines or to a deployed copy.
