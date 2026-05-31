/**
 * Phase 3: Industry Leadership (Years 2-3)
 * Modularized structure following SOLID principles.
 */

import { QUARTERS as Q1_4_Y2, DETAILS as D1_4_Y2 } from './phase3/q1_q4_y2.js';
import { QUARTERS as Q1_2_Y3, DETAILS as D1_2_Y3 } from './phase3/q1_q2_y3.js';

export const SCHEMA = {
  "version": "2.0",
  "structure": "normalized",
  "note": "Phase 3: Industry Leadership (Years 2-3). Salary targets: Month 12: $160K–$190K, Year 2: $200K+. Q1-Q2 Year 3: Equity Scaling + Industry Expert",
  "layers": {
    "roadmap": "core quarter objects (id, num, title, theme, tasks)",
    "details": "taskDetails map keyed by task.id",
    "boss": "boss battle object per quarter"
  }
};

export const PHASE_3_STAFF = [
  ...Q1_4_Y2,
  ...Q1_2_Y3
];

export const TASK_DETAILS = {
  ...D1_4_Y2,
  ...D1_2_Y3
};
