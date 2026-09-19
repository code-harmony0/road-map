/**
 * Roadmap Registry
 * Single Responsibility: which roadmaps exist, and what chrome each one shows.
 *
 * Both roadmaps have exactly 4 phases, which is what index.html renders (m0-m3).
 * Add a third roadmap by adding an entry here with 4 phases.
 */

import {
  PHASE_0_WEEKS, PHASE_1_WEEKS, PHASE_2_WEEKS, PHASE_3_WEEKS,
  PHASE_0_DETAILS, PHASE_1_DETAILS, PHASE_2_DETAILS, PHASE_3_DETAILS
} from './index.js';
import { T0_WEEKS, T1_WEEKS, T2_WEEKS, T3_WEEKS, TWO_TRACK_DETAILS } from './phases/two-track.js';
import { R0_WEEKS, R1_WEEKS, R2_WEEKS, R3_WEEKS } from './phases/skill-ladder.js';

export const ROADMAPS = {
  v1: {
    id: 'v1',
    name: 'Escape Velocity (old plan)',
    short: 'Escape Velocity',
    tag: 'old plan',
    headline: 'Become visible, interview-ready, and fairly paid.',
    blurb:
      'The original plan: position the work you already shipped, sharpen interview signals, then run a measured offer pipeline. Depth comes after the move.',
    metrics: [
      { label: 'Target', value: '20-30 LPA' },
      { label: 'Pipeline', value: '~30 apps' },
      { label: 'Sprint', value: '50 min' }
    ],
    goals: { applications: 30, interviews: 5, offers: 2 },
    paced: true,
    details: { ...PHASE_0_DETAILS, ...PHASE_1_DETAILS, ...PHASE_2_DETAILS, ...PHASE_3_DETAILS },
    phases: [
      {
        weeks: PHASE_0_WEEKS,
        icon: 'ph-target',
        nav: { title: 'Positioning', sub: 'Weeks 1-2', mob: 'Setup' },
        header: { name: 'Phase 0: Positioning', sub: 'Weeks 1-2 · Make 4 years of real work visible' }
      },
      {
        weeks: PHASE_1_WEEKS,
        icon: 'ph-sword',
        nav: { title: 'Interview Ready', sub: 'Weeks 3-8', mob: 'Ready' },
        header: { name: 'Phase 1: Interview-Ready', sub: 'Weeks 3-8 · Sharpen existing skills, do not rebuild' }
      },
      {
        weeks: PHASE_2_WEEKS,
        icon: 'ph-rocket',
        nav: { title: 'Apply Aggressively', sub: 'Weeks 7-14', mob: 'Apply' },
        header: { name: 'Phase 2: Apply Aggressively', sub: 'Weeks 7-14 · ~30 quality applications' }
      },
      {
        weeks: PHASE_3_WEEKS,
        icon: 'ph-crown',
        nav: { title: 'Deepen Skills', sub: 'Months 4+', mob: 'Depth' },
        header: { name: 'Phase 3: Deepen Skills', sub: 'Months 4+ · SQL, systems, and AI after the move' }
      }
    ]
  },

  v2: {
    id: 'v2',
    name: 'Two-Track Escape (follow this)',
    short: 'Two-Track',
    tag: 'follow this',
    primary: true,
    headline: 'Sell the mobile engineer. Build the backend one.',
    blurb:
      'The move is urgent and the backend depth is thin, so the search starts in week 1 and the build runs beside it — never in front of it. Roughly 33 tailored applications across 16 weeks, because at a 15% first-round rate that is 5 first rounds, 2 finals and 1-2 offers. 15% is a target, not a given: measure yours at 20 applications, and if it is lower, fix targeting before sending more. Volume is not the lever; targeting is. Scheduled load stays at 8-11 hrs against the 20 you have — the gap is deliberate, because interviews land without warning and a plan with no slack dies in its first bad week.',
    metrics: [
      { label: 'Target', value: '20-30 LPA' },
      { label: 'Pipeline', value: '~33 apps' },
      { label: 'Weekly load', value: '8-11 hrs' }
    ],
    goals: { applications: 33, interviews: 5, offers: 2 },
    paced: true,
    details: TWO_TRACK_DETAILS,
    phases: [
      {
        weeks: T0_WEEKS,
        icon: 'ph-flag',
        nav: { title: 'Launch', sub: 'Weeks 1-2 · Track A', mob: 'Launch' },
        header: { name: 'Phase T0: Launch', sub: 'Weeks 1-2 · Track A only — reposition and start applying' }
      },
      {
        weeks: T1_WEEKS,
        icon: 'ph-device-mobile',
        nav: { title: 'Search + RN Depth', sub: 'Weeks 3-6 · Retarget', mob: 'RN Depth' },
        header: { name: 'Phase T1: Search + RN Depth', sub: 'Weeks 3-6 · Retargeted applications, and React Native depth for the interviews they bring' }
      },
      {
        weeks: T2_WEEKS,
        icon: 'ph-stack',
        nav: { title: 'Interviews + Backend', sub: 'Weeks 7-12 · One brick', mob: 'Backend' },
        header: { name: 'Phase T2: Interviews + Backend Brick', sub: 'Weeks 7-12 · Interviewing while you build one real, deployed Postgres and NestJS service' }
      },
      {
        weeks: T3_WEEKS,
        icon: 'ph-sparkle',
        nav: { title: 'Close + Multiply', sub: 'Weeks 13-16+', mob: 'Close' },
        header: { name: 'Phase T3: Close, Then Compound', sub: 'Weeks 13-16 · Sign the offer. Redis, queues and AI come after the move' }
      }
    ]
  }
,

  v3: {
    id: 'v3',
    name: 'Skill Ladder (reference, not a schedule)',
    short: 'Skill Ladder',
    tag: 'reference',
    headline: 'What you are worth, and what specifically raises it.',
    blurb:
      'Capability, not calendar. Backend is the ticket — it gets you taken seriously at 20-30L at product companies. React Native platform depth is the moat: almost nobody has it, and it compounds the five years you already spent instead of discarding them. Generic full-stack makes you a commodity competing with a million people on skills you are two years behind on. Climb the rungs in order; each one names the band it unlocks.',
    metrics: [
      { label: 'Rungs', value: '4' },
      { label: 'Ceiling', value: '35-50 LPA' },
      { label: 'Leverage', value: '2-3x rate' }
    ],
    goals: { applications: 0, interviews: 0, offers: 0 },
    paced: false,
    phases: [
      {
        weeks: R0_WEEKS,
        icon: 'ph-cube',
        nav: { title: 'Foundation', sub: 'Rung 1 · 20-30L', mob: 'Rung 1' },
        header: { name: 'Rung 1: Foundation', sub: 'Unlocks Rs 20-30L · The seven gaps between reading backend and owning it' }
      },
      {
        weeks: R1_WEEKS,
        icon: 'ph-device-mobile',
        nav: { title: 'Mobile Moat', sub: 'Rung 2 · 30-40L', mob: 'Rung 2' },
        header: { name: 'Rung 2: Mobile Moat', sub: 'Unlocks Rs 30-40L · Where five years compound instead of being discarded' }
      },
      {
        weeks: R2_WEEKS,
        icon: 'ph-sparkle',
        nav: { title: 'AI Layer', sub: 'Rung 3 · 35-50L', mob: 'Rung 3' },
        header: { name: 'Rung 3: AI Layer', sub: 'Unlocks Rs 35-50L at product/AI companies only · Worth money only stacked on Rung 1' }
      },
      {
        weeks: R3_WEEKS,
        icon: 'ph-trend-up',
        nav: { title: 'Leverage', sub: 'Rung 4 · 2-3x rate', mob: 'Rung 4' },
        header: { name: 'Rung 4: Leverage', sub: 'Stop selling hours at the market rate for hours' }
      }
    ]
  }
};

export const DEFAULT_ROADMAP = 'v2';

/** Ordered list of roadmap ids, for cycling through them. */
export const ROADMAP_IDS = Object.keys(ROADMAPS);
