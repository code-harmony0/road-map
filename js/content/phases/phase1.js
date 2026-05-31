/**
 * Phase 1: Escape Velocity (The Full-Stack AI Engineer Overhaul)
 * Modularized structure following SOLID principles.
 */

import { WEEKS as W1_2, DETAILS as D1_2 } from './phase1/weeks1-2.js';
import { WEEKS as W3_4, DETAILS as D3_4 } from './phase1/weeks3-4.js';
import { WEEKS as W5_6, DETAILS as D5_6 } from './phase1/weeks5-6.js';
import { WEEKS as W6B } from './phase1/week6b.js';
import { WEEKS as W7_8, DETAILS as D7_8 } from './phase1/weeks7-8.js';
import { WEEKS as W9_10, DETAILS as D9_10 } from './phase1/weeks9-10.js';
import { WEEKS as W11_12, DETAILS as D11_12 } from './phase1/weeks11-12.js';
import { FALLBACK as F1 } from './phase1/fallback.js';

export const SCHEMA = {
  "version": "2.0",
  "structure": "normalized",
  "note": "Phase 1: Escape Velocity (Months 1-3). CRITICAL: Phase 1 salary target ($110K–$130K) REQUIRES changing companies. Internal promotion/raise to this level in 12 weeks is unrealistic. Plan assumes active job search and external offer acceptance.",
  "layers": {
    "roadmap": "core task objects (id, day, time, depth, xp, text, reason)",
    "details": "taskDetails map keyed by task.id",
    "boss": "boss battle object per week",
    "recurring": "shared recurring task template",
    "fallback": "strategic fallback options for failed milestones"
  }
};

export const RECURRING_TEMPLATES = {
  "behavioralStoryLibrary": {
    "objective": "Build a reusable behavioral interview story bank",
    "why": "Staff-level interviews are 60% behavioral. You need 8-10 polished STAR stories ready at all times.",
    "steps": [
      "Pick one experience from this week (leadership, failure, conflict, or performance)",
      "Write it in STAR format: Situation → Task → Action → Result",
      "Quantify the result wherever possible (%, $, time saved)",
      "Record yourself telling it in under 2 minutes",
      "Store in a Notion doc or Google Doc labeled 'Behavioral Library'",
      "Tag it: LEADERSHIP | FAILURE | CONFLICT | PERFORMANCE"
    ],
    "tools": ["Notion", "Google Docs", "Voice recorder app"],
    "deliverable": "1 new STAR story added to your Behavioral Library",
    "definitionOfDone": "Story is written, recorded, and tagged",
    "commonMistakes": [
      "Vague results ('things got better') instead of numbers",
      "Skipping the 'Task' — what YOU were responsible for",
      "Taking too long — practice the 90-second version"
    ],
    "resumeLine": null,
    "weeklyTarget": "1 story per week → 12 stories by end of Phase 1"
  }
};

export const PHASE_1_WEEKS = [
  ...W1_2,
  ...W3_4,
  ...W5_6,
  ...W6B,
  ...W7_8,
  ...W9_10,
  ...W11_12
];

export const TASK_DETAILS = {
  ...D1_2,
  ...D3_4,
  ...D5_6,
  ...D7_8,
  ...D9_10,
  ...D11_12
};

export const PHASE_1_FALLBACK = F1;
