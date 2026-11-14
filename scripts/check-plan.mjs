// Sanity-checks js/content/plan.js. Run: node scripts/check-plan.mjs
import { PLAN, SIDE } from '../js/content/plan.js';

const bad = [];
const seen = new Set();
for (const m of [...PLAN, ...SIDE]) {
  if (!m.id || !m.title || !m.tasks?.length) bad.push(`milestone ${m.id}: needs id, title, tasks`);
  for (const t of m.tasks) {
    if (seen.has(t.id)) bad.push(`duplicate task id ${t.id}`);
    seen.add(t.id);
    if (!t.text || !t.how) bad.push(`task ${t.id}: needs text and how-to`);
  }
}
for (const m of PLAN) if (!m.doneWhen || !m.doThis) bad.push(`milestone ${m.id}: needs doThis and doneWhen`);
if (bad.length) { console.error(bad.join('\n')); process.exit(1); }
console.log(`ok: ${PLAN.length} milestones, ${seen.size} tasks, ids unique, every task has a how-to`);
