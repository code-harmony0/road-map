# Escape Velocity - 12 Week Roadmap to Senior Engineer

An interactive, self-hosted, gamified roadmap built for personal career progression, but fully open source for anyone to use, fork, and customize for their own journey from Junior/Mid to Senior, Staff, and Industry Expert levels.

## Overview

This roadmap provides a structured path focusing on backend architecture, AI integration, platform engineering, and interview preparation. It is divided into three major phases:

- **Phase 1: Escape Velocity** (Weeks 1-8) - Core skills (Backend, System Design, DevOps, AI setup) and interview blitz. Target: $160K-$200K Offer.
- **Phase 2: Career Acceleration** (Months 3-6) - AI-Native Architecture, Platform Engineering, reducing bugs, and technical roadmapping. Target: $200K-$280K.
- **Phase 3: Industry Leadership** (Years 2-3) - Advisory consulting, scalable income (newsletters, courses), and building authority. Target: $250K-$350K.

## Features

- **Gamification & XP System** - Earn XP for daily tasks and "Level Up" from Junior to Industry Expert.
- **Boss Battles** - Complete high-stakes challenges at the end of each week/month for bonus XP.
- **Job Radar** - Track your job applications, interviews, and offers with visual progress bars and quick-logging shortcuts.
- **Deep Work Timer (Focus Mode)** - Built-in 25-minute Pomodoro timer that dims UI distractions so you can enter deep flow states.
- **Daily Standup (Focus)** - Identifies incomplete tasks for current weeks and suggests what to tackle next.
- **Pace Tracker** - Set a start date to see if you are ahead of schedule or need to catch up.
- **Local Storage & Backup** - All data is saved directly in your browser's local storage. Export/import your progress as JSON anytime.
- **Keyboard Shortcuts / Cmd+K Modal** - Fast access to timers, job logging, and navigation via command palette.

## For Personal Use & Open Source

I built this roadmap for my personal jump from mid-level to Senior/Staff engineer. I've designed it to be completely self-contained—meaning **no backend database, no complicated build steps, and no accounts required**. 

If you like this structure or want to use it for your own career acceleration, **please feel free to fork, customize, and build upon it!** All data is stored locally in your browser, so you can host your own version on GitHub pages in seconds.

### How to Customize for Yourself

1. **Fork the repo** and clone it.
2. Open `index.html`.
3. Locate the data arrays (`M1_WEEKS`, `M2_MONTHS`, `M3_STAFF`).
4. Replace the "Boss Battles", tasks, or weeks with the skills **you** need to learn (e.g., iOS internals, Android Compose, Flutter).
5. Deploy to GitHub Pages!

## File Structure

```
├── index.html      # Main HTML structure, styling, gamification logic, and data
└── README.md       # This document
```

*(Note: Data and logic have been consolidated directly into `index.html` for pure portability).*

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

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Design System:** Custom CSS properties, Phosphor Icons, Bricolage Grotesque & JetBrains Mono fonts
- **No Build Step** - Works instantly in any modern browser.

## License

MIT License - feel free to use, modify, and share!
