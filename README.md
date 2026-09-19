# Senior Roadmap - Mobile Systems Engineer Career Plan

An interactive, self-hosted roadmap for moving from an experienced React Native engineer into a stronger senior mobile systems profile. It keeps the plan practical: make existing work visible, sharpen interview signals, apply aggressively, and deepen systems skill after the move.

## Overview

The app ships **three roadmaps**. Switch between them with the button in the top bar
(or `Cmd/Ctrl + K` -> "Switch Roadmap"). Each keeps its own task progress; XP is shared.

### Roadmap 1 - Escape Velocity (the original)

Sequential: get visible, get interview-ready, apply, then deepen after the move.

- **Phase 0: Positioning** (Weeks 1-2) - Turn real shipped work into visible senior evidence.
- **Phase 1: Interview-Ready** (Weeks 3-8) - Sharpen React Native, architecture, and interview execution without rebuilding from zero.
- **Phase 2: Apply Aggressively** (Weeks 7-14) - Run a measured offer pipeline with 50 quality applications.
- **Phase 3: Deepen Skills** (Months 4+) - Improve SQL, systems, and AI depth after the job move.

### Roadmap 2 - Two-Track Escape

Parallel, for when the move is urgent *and* the backend depth is thin. Track A (the
search, ~10 hrs/week) starts in week 1 with no prerequisites. Track B (the build,
~8 hrs/week) runs beside it and is never allowed to delay Track A. Every task's first
badge says which track it belongs to.

- **Phase T0: Launch** (Weeks 1-2) - Track A only: reposition, publish, send the first 15 applications.
- **Phase T1: Search + Brick 1** (Weeks 3-6) - Applications running; Postgres data model built and indexed.
- **Phase T2: Interviews + Brick 2** (Weeks 7-12) - Interviewing while you own a real deployed service.
- **Phase T3: Close + Brick 3** (Weeks 13-16+) - Sign the offer, add semantic search, reprice freelance.

Four gates with hard dates: 5 apps out (W2), 3-5 first-rounds (W6), 2 final stages (W10),
signed offer (W16). A gate you skip is a gate that was never real.

**On volume:** ~33 tailored applications across 16 weeks, not 50. A real application costs
45 minutes, so 4/week is what 3 hours actually buys. The funnel is what makes that enough:
33 apps at a 15% first-round rate is 5 first rounds, 2 finals, 1-2 offers. Every week card
shows its real hour load in the header, computed from its own tasks, so the plan cannot
quietly drift back into fantasy.

### Roadmap 3 - Skill Ladder

Capability, not calendar. Four rungs, each naming the pay band it unlocks. The thesis:
backend is the *ticket* (Rung 1 gets you taken seriously); React Native platform depth is
the *moat* (Rung 2 - almost nobody has it, and it compounds the five years already spent).

- **Rung 1: Foundation** - Rs 28-40L · the seven gaps between reading backend and owning it
- **Rung 2: Mobile Moat** - Rs 40-55L · New Architecture, native modules, profiling, platform
- **Rung 3: AI Layer** - Rs 45-70L · retrieval with evals, agents, on-device inference
- **Rung 4: Leverage** - 2-3x rate · the niche, public proof, outcome pricing

## Features

- **Gamification & XP System** - Earn XP for daily tasks and "Level Up" from Junior to Industry Expert.
- **Boss Battles** - Complete high-stakes challenges at the end of each week/month for bonus XP.
- **Job Radar** - Track your job applications, interviews, and offers with visual progress bars and quick-logging shortcuts.
- **Deep Work Sprint Timer** - Built-in 50-minute sprint timer that dims UI distractions for one high-leverage block.
- **Execution Queue** - Identifies incomplete tasks across the current roadmap and suggests what to tackle next.
- **Pace Tracker** - Set a start date to see if you are ahead of schedule or need to catch up.
- **Local Storage & Backup** - All data is saved directly in your browser's local storage. Export/import your progress as JSON anytime.
- **Keyboard Shortcuts / Cmd+K Modal** - Fast access to timers, job logging, and navigation via command palette.

## Design Direction

The current UI uses a modern execution-cockpit theme: dark functional surfaces, restrained glass panels, bento-style metrics, sharper hierarchy, and fast command-palette interactions. It makes the roadmap, offer pipeline, and deep-work sprint feel like one focused control surface.

## For Personal Use & Open Source

This roadmap is completely self-contained: **no backend database, no complicated build steps, and no accounts required**.

If you like this structure or want to use it for your own career acceleration, **please feel free to fork, customize, and build upon it!** All data is stored locally in your browser, so you can host your own version on GitHub pages in seconds.

### How to Customize for Yourself

1. **Fork the repo** and clone it.
2. Open `js/content/` folder - this is your **single source of truth** organized by responsibility:
   - `app.js` - App name and tagline
   - `levels.js` - XP thresholds and titles
   - `roadmaps.js` - **the registry**: which roadmaps exist, their names, headlines, metric tiles, phase labels and icons
   - `phases/phase0.js` - Roadmap 1, Weeks 1-2 positioning
   - `phases/phase1.js` - Roadmap 1, Weeks 3-8 interview
   - `phases/phase2.js` - Roadmap 1, Weeks 7-14 application
   - `phases/phase3.js` - Roadmap 1, Months 4+ depth
   - `phases/two-track.js` - Roadmap 2, all four phases in one file
   - `phases/skill-ladder.js` - Roadmap 3, all four rungs in one file
   - `navigation.js` - Sidebar and milestone headers
   - `ui-text.js` - Job tracker, focus, timer, settings text
   - `commands.js` - Command palette items
   - `messages.js` - Toast notifications
3. Edit the relevant file for what you want to change
4. Deploy to GitHub Pages!

## File Structure

```
├── index.html              # Main HTML structure
├── css/                    # Stylesheets
│   ├── variables.css       # CSS custom properties
│   ├── base.css           # Reset, typography, animations
│   ├── layout.css         # Topbar, sidebars, mobile nav
│   ├── components.css     # UI components
│   ├── sections.css       # Milestones, tasks, focus
│   └── modals.css         # Modals, command palette, toast
├── js/
│   ├── content/           # SINGLE SOURCE OF TRUTH (SOLID organized)
│   │   ├── index.js       # Barrel exports
│   │   ├── app.js         # App identity
│   │   ├── levels.js      # Gamification levels
│   │   ├── roadmaps.js    # Roadmap registry (both roadmaps + their chrome)
│   │   ├── phases/        # Roadmap data by phase
│   │   │   ├── phase0.js  # R1 · Weeks 1-2
│   │   │   ├── phase1.js  # R1 · Weeks 3-8
│   │   │   ├── phase2.js  # R1 · Weeks 7-14
│   │   │   ├── phase3.js  # R1 · Months 4+
│   │   │   ├── two-track.js # R2 · all four phases
│   │   │   └── skill-ladder.js # R3 · all four rungs
│   │   ├── navigation.js  # Sidebar & headers
│   │   ├── ui-text.js     # All UI text
│   │   ├── commands.js    # Command palette
│   │   ├── messages.js    # Toast messages
│   │   └── helpers.js     # Content utilities
│   ├── main.js            # Entry point
│   ├── config/            # Re-exports from content/
│   │   ├── levels.js
│   │   ├── milestones.js
│   │   └── commands.js
│   ├── core/              # Core modules
│   │   ├── State.js       # State management
│   │   ├── Storage.js     # localStorage
│   │   └── EventBus.js    # Pub/sub events
│   ├── features/          # Feature modules
│   │   ├── Gamification.js
│   │   ├── TaskManager.js
│   │   ├── JobTracker.js
│   │   ├── RoadmapSwitcher.js
│   │   ├── Timer.js
│   │   ├── FocusSection.js
│   │   └── Confetti.js
│   └── ui/                # UI modules
│       ├── Renderer.js
│       ├── Sidebar.js
│       ├── CommandPalette.js
│       ├── Modal.js
│       └── Toast.js
└── README.md              # This document
```

**To update content:** Edit the specific file in `js/content/` (e.g., edit `phases/phase1.js` to change week tasks).

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

**Useful Shortcuts:**

- `Cmd/Ctrl + K` - Open Command Palette (includes "Switch Roadmap")
- Use the **Settings** gear to export your backup as JSON, or reset all progress.

## Tech Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+ Modules)
- **Architecture:** Modular ES modules with single source of truth (`content.js`)
- **Design System:** Custom CSS properties, Phosphor Icons, Bricolage Grotesque & JetBrains Mono fonts
- **No Build Step** - Works instantly in any modern browser with native ES module support.

## License

MIT License - feel free to use, modify, and share!
