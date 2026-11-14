# Senior Roadmap - Mobile Systems Engineer Career Plan

An interactive, self-hosted roadmap for moving from an experienced React Native engineer into a stronger senior mobile systems profile. It keeps the plan practical: make existing work visible, sharpen interview signals, apply aggressively, and deepen systems skill after the move.

## Overview

One ordered route to a better-paid role, for a React Native engineer who is already employed and studies on a laptop beside the editor. Nine milestones sit in a left rail. The main panel shows the current milestone and the one task to do now, with its goal, steps, links and a "done when" line. Press **D** (or the button) to mark it done and the next task slides in.

## Features

- **Route rail** - the nine milestones with progress and "You are here". Click any to look ahead; skipped or finished ones show a check. Two side lists sit under "Alongside": the weekly applications habit and DSA (only if a target company asks).
- **Current task card** - everything needed to do it without leaving the page, plus a sticky Mark done button and an Undo toast.
- **Up next / Done** - the rest of the milestone's tasks. Click a row to read how to do it; tick with the checkbox.
- **Focus timer** - a 50-minute sprint in the top bar.
- **Interview prep** - a question bank (`interview-prep.html`) in the same design: topic and mastery filters, Gap / Studying / Mastered per question, and a story bank.
- **Export / Import** - in the rail footer; saves progress to a file and restores it (progress is per browser).
- Progress is stored in the browser (localStorage). Removed on purpose: the three-roadmap picker, XP and levels, boss battles, confetti, the offer-radar sidebar, the command palette and the pacing settings.

## Design Direction

A night trail guide: green-black ground, off-white ink, one ultramarine route colour, sea green for done, a faint contour texture behind the current task. Type is Atkinson Hyperlegible. See `PRODUCT.md` (who it is for) and `DESIGN.md` (the system).

## How it works

- `js/content/plan.js` is the whole plan: milestones, tasks and their how-to content, by task id. Edit it directly, then run `node scripts/check-plan.mjs`.
- `css/prep.css` styles the prep page. `js/ui/views.js` builds the HTML, `js/ui/App.js` handles clicks, keys and repainting, `js/core/` holds state and storage, `css/app.css` is the whole theme.
- Task ids are stable, so saved progress survives plan edits.

## Quick Start

### Option 0: Just open it (macOS)

Double-click **`roadmap.command`** in this folder (or the `Roadmap` alias on your Desktop).
It serves the folder on `http://localhost:8642` and opens your browser. Double-clicking it
again reuses the same server instead of starting a second one.

Stop the background server with `pkill -f 'http.server 8642'`, or just leave it — it costs
nothing and dies on reboot.

> Opening `index.html` straight from Finder does **not** work: the app uses native ES modules,
> which browsers block on `file://`. It needs to be served over http, which is all the
> launcher does.

### Option 1: GitHub Pages (Recommended)

1. Fork this repository.
2. Go to **Settings → Pages**.
3. Select "Deploy from Branch" → `main` → `/ (root)`.
4. Your roadmap will be live to track your progress!

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/road-map.git
cd road-map

# Serve it (required — ES modules are blocked on file://)
python3 -m http.server 3000
# then open http://localhost:3000

# Or just use the launcher
./roadmap.command
```

## Data Storage

All progress is stored locally in your browser's `localStorage` under the key `rn_escape_velocity_v3`.

To reset, clear the site's localStorage in your browser.

## Tech Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+ Modules)
- **Architecture:** Modular ES modules with roadmap data in `js/content/`
- **Design System:** Custom CSS properties, inline SVG icons, Atkinson Hyperlegible fonts
- **No Build Step** - Works instantly in any modern browser with native ES module support.

## License

MIT License - feel free to use, modify, and share!
