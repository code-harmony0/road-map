/**
 * Plan B Phase 1 Orchestrator
 * Consolidates weeks 1-8 for the alternate AI engineering path.
 */

import { WEEKS as W1_2, DETAILS as D1_2 } from './phase1/weeks1-2.js';
import { WEEKS as W3_4, DETAILS as D3_4 } from './phase1/weeks3-4.js';
import { WEEKS as W5_8, DETAILS as D5_8 } from './phase1/weeks5-8.js';
import { WEEKS as W9_12, DETAILS as D9_12 } from './phase1/weeks9-12.js';
import { WEEKS as W13_16, DETAILS as D13_16 } from './phase1/weeks13-16.js';
import { WEEKS as W17_20, DETAILS as D17_20 } from './phase1/weeks17-20.js';

export const SCHEMA = {
  "version": "2.0",
  "structure": "normalized",
  "note": "Plan B Phase 1: Deep Learning & Modern NLP specialization.",
  "layers": {
    "roadmap": "core task objects (id, day, time, depth, xp, text, reason)",
    "details": "taskDetails map keyed by task.id",
    "boss": "boss battle object per week"
  }
};

export const PLAN_B_WEEKS = [
  ...W1_2,
  ...W3_4,
  ...W5_8,
  ...W9_12,
  ...W13_16,
  ...W17_20
];

export const PLAN_B_DETAILS = {
  ...D1_2,
  ...D3_4,
  ...D5_8,
  ...D9_12,
  ...D13_16,
  ...D17_20
};
