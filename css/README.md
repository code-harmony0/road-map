# CSS Structure

This folder exists to keep the "Midnight & Neon" dashboard maintainable.

Load order (see `index.html`):

- `styles.css` - base + dashboard + roadmap (still the largest file)
- `css/modals.css` - Notes + Backup overlays/modals
- `css/sections.css` - long-form sections (AI tools, podcasts, outcomes) + standup modal + focus-mode effects
- `css/toast-responsive-animations.css` - toast/save indicator + animations + responsive rules
- `css/timeline.css` - 12-week visual timeline
- `css/fab.css` - sticky focus FAB

Next recommended split:

- Move roadmap/task styles out of `styles.css` into `css/roadmap.css`.
