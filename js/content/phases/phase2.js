/**
 * Phase 2: Career Acceleration (Months 4-6)
 * Modularized structure following SOLID principles.
 */

import { WEEKS as W14_15, DETAILS as D14_15 } from './phase2/weeks14-15.js';
import { WEEKS as W16, DETAILS as D16 } from './phase2/week16.js';
import { WEEKS as W17, DETAILS as D17 } from './phase2/week17.js';
import { WEEKS as W18, DETAILS as D18 } from './phase2/week18.js';
import { WEEKS as W19_20, DETAILS as D19_20 } from './phase2/weeks19-20.js';
import { WEEKS as W21_24, DETAILS as D21_24 } from './phase2/weeks21-24.js';

export const SCHEMA = {
  "version": "2.0",
  "structure": "normalized",
  "note": "Phase 2: Career Acceleration (Months 4-6 checkpoint). Salary target: $130K–$160K. Staff promotion is a 12-18 month journey, not a 4-month sprint. Phase 1 now covers Months 1-3.",
  "extension_note": "If Staff promotion is not achievable by Month 6, EXTEND Phase 2 by 6 months (Months 7-12). Continue executing Staff track actions. Do not rush. A premature Staff promotion without Staff-level impact leads to imposter syndrome and failure. Better to be a strong Senior for 18 months than a weak Staff for 2 years.",
  "layers": {
    "roadmap": "core week objects (id, num, title, theme, tasks)",
    "details": "taskDetails map keyed by task.id",
    "boss": "boss battle object per week"
  }
};

export const PHASE_2_MONTHS = [
  ...W14_15,
  ...W16,
  ...W17,
  ...W18,
  ...W19_20,
  ...W21_24
];

export const TASK_DETAILS = {
  ...D14_15,
  ...D16,
  ...D17,
  ...D18,
  ...D19_20,
  ...D21_24
};
