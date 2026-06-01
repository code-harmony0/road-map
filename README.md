# Senior Roadmap - Mobile Systems Engineer Career Plan

An interactive, self-hosted roadmap for moving from an experienced React Native engineer into a stronger senior mobile systems profile. It keeps the plan practical: make existing work visible, sharpen interview signals, apply aggressively, and deepen systems skill after the move.

## Overview

This roadmap is divided into four phases:

- **Phase 0: Positioning** (Weeks 1-2) - Turn real shipped work into visible senior evidence.
- **Phase 1: Interview-Ready** (Weeks 3-8) - Sharpen React Native, architecture, and interview execution without rebuilding from zero.
- **Phase 2: Apply Aggressively** (Weeks 7-14) - Run a measured offer pipeline with 50 quality applications.
- **Phase 3: Deepen Skills** (Months 4+) - Improve SQL, systems, and AI depth after the job move.

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
   - `phases/phase0.js` - Weeks 1-2 positioning roadmap
   - `phases/phase1.js` - Weeks 3-8 interview roadmap
   - `phases/phase2.js` - Weeks 7-14 application roadmap
   - `phases/phase3.js` - Months 4+ depth roadmap
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
│   │   ├── phases/        # Roadmap data by phase
│   │   │   ├── phase0.js  # Weeks 1-2
│   │   │   ├── phase1.js  # Weeks 3-8
│   │   │   ├── phase2.js  # Weeks 7-14
│   │   │   └── phase3.js  # Months 4+
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

# Open directly in browser (no build step needed)
open index.html

# Or serve with any static server
python3 -m http.server 3000
```

## Data Storage

All progress is stored locally in your browser's `localStorage` under the key `rn_escape_velocity_v3`.

**Useful Shortcuts:**

- `Cmd/Ctrl + K` - Open Command Palette
- Use the **Settings** gear to export your backup as JSON, or reset all progress.

## Tech Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+ Modules)
- **Architecture:** Modular ES modules with single source of truth (`content.js`)
- **Design System:** Custom CSS properties, Phosphor Icons, Bricolage Grotesque & JetBrains Mono fonts
- **No Build Step** - Works instantly in any modern browser with native ES module support.

## License

MIT License - feel free to use, modify, and share!
