#!/usr/bin/env node
/**
 * Snapshot career-ops pipeline counts into career-ops.json so the Offer Radar
 * reads the real tracker instead of being a second, hand-typed one.
 *
 * Usage: node scripts/sync-career-ops.mjs [path-to-career-ops]
 * Default path: ../career-ops (sibling of this repo), or $CAREER_OPS_DIR.
 * Statuses follow career-ops templates/states.yml.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const careerOps = path.resolve(process.argv[2] || process.env.CAREER_OPS_DIR || path.join(root, '..', 'career-ops'));
const tracker = path.join(careerOps, 'data', 'applications.md');
const out = path.join(root, 'career-ops.json');

const SENT = new Set(['applied', 'responded', 'interview', 'offer', 'rejected', 'hired']);
const INTERVIEWED = new Set(['interview', 'offer', 'hired']);
const OFFERED = new Set(['offer', 'hired']);

/**
 * Count sent applications, interviews and offers from the tracker table.
 * Header-aware, so a reordered or added column doesn't shift the Status read.
 * ponytail: "interviews" counts processes currently at interview or later; an
 * interview that ended in rejection is counted as rejected, because the tracker
 * keeps only the latest status.
 * @param {string} md - applications.md contents
 * @returns {{applications: number, interviews: number, offers: number}}
 */
export function countPipeline(md) {
  const cells = (line) => line.split('|').slice(1, -1).map((c) => c.replace(/\*/g, '').trim().toLowerCase());
  const rows = md.split('\n').filter((l) => l.trim().startsWith('|')).map(cells);
  const statusCol = rows.find((r) => r.includes('status'))?.indexOf('status');
  if (statusCol === undefined || statusCol < 0) throw new Error('No Status column found in applications.md');

  const statuses = rows.filter((r) => /^\d+$/.test(r[0])).map((r) => r[statusCol]);
  const count = (set) => statuses.filter((s) => set.has(s)).length;
  return { applications: count(SENT), interviews: count(INTERVIEWED), offers: count(OFFERED) };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (!fs.existsSync(tracker)) {
    console.error(`career-ops tracker not found at ${tracker}. Offer Radar stays manual.`);
    process.exit(0);
  }
  const counts = countPipeline(fs.readFileSync(tracker, 'utf8'));
  fs.writeFileSync(out, JSON.stringify({ ...counts, syncedAt: new Date().toISOString() }, null, 2) + '\n');
  console.log(`career-ops synced: ${counts.applications} sent, ${counts.interviews} interviewing, ${counts.offers} offers`);
}
