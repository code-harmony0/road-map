/**
 * Revised Phase 1: Backend Modernization & Quality (Months 1-3)
 * Modularized structure focused on PostgreSQL, Docker, CI/CD, and System Design.
 */

import { WEEKS as W1_2, DETAILS as D1_2 } from './phase1/weeks1-2.js';
import { WEEKS as W3_4, DETAILS as D3_4 } from './phase1/weeks3-4.js';
import { WEEKS as W5_6, DETAILS as D5_6 } from './phase1/weeks5-6.js';
import { WEEKS as W7_8, DETAILS as D7_8 } from './phase1/weeks7-8.js';
import { WEEKS as W9_10, DETAILS as D9_10 } from './phase1/weeks9-10.js';
import { WEEKS as W11_12, DETAILS as D11_12 } from './phase1/weeks11-12.js';

export const SCHEMA = {
  "version": "2.0",
  "structure": "normalized",
  "note": "Revised Phase 1: Transitioning from Mobile-First to Backend-First with production-grade tooling and professional job hunt.",
  "layers": {
    "roadmap": "core task objects (id, day, time, depth, xp, text, reason)",
    "details": "taskDetails map keyed by task.id",
    "boss": "boss battle object per week",
    "recurring": "shared recurring task template"
  }
};

export const PHASE_1_WEEKS = [
  ...W1_2,
  ...W3_4,
  ...W5_6,
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
