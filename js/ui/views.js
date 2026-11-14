/**
 * HTML for the route rail and the main panel. Pure string builders: App.js owns
 * state, events and repainting.
 */
import { PLAN, SIDE, EVIDENCE } from '../content/plan.js';

export const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const CHECK = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" /></svg>';
const CHEV = '<svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>';
const FLAG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 21V4M6 5h11l-2.5 4L17 13H6"/></svg>';

/** Which rows and "more" panels are open. Kept across repaints. */
const openKeys = new Set();
export const isOpen = (k) => openKeys.has(k);
export const setOpen = (k, open) => (open ? openKeys.add(k) : openKeys.delete(k));
const attrOpen = (k) => (openKeys.has(k) ? ' open' : '');

export const hoursLeft = (m, done) => m.tasks.reduce((s, t) => s + (done[t.id] ? 0 : t.hours), 0);
const countDone = (m, done) => m.tasks.filter((t) => done[t.id]).length;

export function currentIndex(gates) {
  return PLAN.findIndex((m) => !gates[m.id]);
}

/** The milestone or side list being viewed. */
export function resolveItem(st) {
  const cur = PLAN[currentIndex(st.homeGates)];
  const wanted = st.selected && [...PLAN, ...SIDE].find((m) => m.id === st.selected);
  return wanted || cur || PLAN[PLAN.length - 1];
}

export function overall(st) {
  const all = PLAN.flatMap((m) => m.tasks);
  return { done: all.filter((t) => st.tasks[t.id]).length, total: all.length };
}

/* ── The ridge: the whole route as a mountain, with you on it ── */
const RIDGE_W = 752;
const RIDGE_H = 150;
const RIDGE = [[0, 128], [48, 118], [96, 122], [150, 96], [205, 104], [262, 72], [318, 86], [372, 52], [430, 68], [492, 38], [552, 54], [612, 26], [672, 36], [720, 14], [752, 18]];

function ridgeY(x) {
  for (let i = 1; i < RIDGE.length; i++) {
    const [x1, y1] = RIDGE[i - 1];
    const [x2, y2] = RIDGE[i];
    if (x <= x2) return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
  }
  return RIDGE[RIDGE.length - 1][1];
}

function ridge(pct) {
  const x = Math.max(14, Math.min(RIDGE_W - 14, pct * RIDGE_W));
  const y = ridgeY(x);
  const pts = (arr) => arr.map(([a, b], i) => `${i ? 'L' : 'M'}${a.toFixed(1)} ${b.toFixed(1)}`).join(' ');
  const upto = [...RIDGE.filter(([a]) => a < x), [x, y]];
  const base = (arr) => `${pts(arr)} L${arr[arr.length - 1][0].toFixed(1)} ${RIDGE_H} L0 ${RIDGE_H} Z`;
  return `
    <svg class="ridge" viewBox="0 0 ${RIDGE_W} ${RIDGE_H}" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="gRest" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".10"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
        <linearGradient id="gDone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2de2b4" stop-opacity=".42"/><stop offset="1" stop-color="#2de2b4" stop-opacity="0"/></linearGradient>
      </defs>
      <path d="${base(RIDGE)}" fill="url(#gRest)"/>
      <path d="${base(upto)}" fill="url(#gDone)"/>
      <path d="${pts(RIDGE)}" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="1.5" stroke-dasharray="3 5" vector-effect="non-scaling-stroke"/>
      <path d="${pts(upto)}" fill="none" stroke="#2de2b4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
    </svg>
    <span class="summit" style="left:${((720 / RIDGE_W) * 100).toFixed(1)}%;top:${((14 / RIDGE_H) * 100).toFixed(1)}%">${FLAG}</span>
    <span class="you" style="left:${((x / RIDGE_W) * 100).toFixed(2)}%;top:${((y / RIDGE_H) * 100).toFixed(2)}%"></span>`;
}

function youLabel(done, total) {
  const x = Math.max(14, Math.min(RIDGE_W - 14, (done / total) * RIDGE_W));
  // Keep the pill inside the card at both ends; the dot itself stays exact.
  const left = Math.max(9, Math.min(91, (x / RIDGE_W) * 100));
  const top = (ridgeY(x) / RIDGE_H) * 100;
  return `<span class="you-label" style="left:${left.toFixed(2)}%;top:${(top * 0.76 + 24).toFixed(2)}%">${done} of ${total}</span>`;
}

/* ── How-to content ── */
const list = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const sec = (title, body, cls = '', icon = '') =>
  body ? `<section class="how-sec ${cls}"><h3>${icon}${title}</h3>${body}</section>` : '';

function howHtml(task) {
  const h = task.how;
  const more = [
    sec('Why it matters', h.why && `<p>${h.why}</p>`),
    sec('Matters most', h.matters.length && list(h.matters)),
    sec('Deliverable', h.deliverable && `<p>${h.deliverable}</p>`),
    sec('Avoid', h.avoid.length && list(h.avoid))
  ].join('');
  const key = `more:${task.id}`;
  return `
    <div class="how-cols">
      <div class="how-main">
        ${sec('Goal', h.goal && `<p>${h.goal}</p>`)}
        ${sec('Steps', h.steps.length && `<ol class="steps">${h.steps.map((s) => `<li>${s}</li>`).join('')}</ol>`)}
      </div>
      <div class="how-side">
        ${sec('Use', h.use.length && list(h.use), 'use')}
        ${sec('Done when', h.doneWhen && `<p>${h.doneWhen}</p>`, 'done-when', CHECK)}
      </div>
    </div>
    ${more.trim() ? `<details class="more" data-dk="${key}"${attrOpen(key)}><summary>Why it matters, and what to avoid${CHEV}</summary><div class="more-body">${more}</div></details>` : ''}`;
}

const meta = (t) => t.time || '';

/* ── Task pieces ── */
function focusCard(t, position, total) {
  return `
    <article class="focus" aria-label="Current task" data-task="${t.id}">
      <p class="focus-chips"><span class="chip">Task ${position} of ${total}</span>${meta(t) ? `<span class="chip chip-time">${esc(meta(t))}</span>` : ''}</p>
      <h2 class="focus-title">${esc(t.text)}</h2>
      ${t.reason ? `<p class="focus-reason">${esc(t.reason)}</p>` : ''}
      <div class="how">${howHtml(t)}</div>
      <div class="focus-actions">
        <button class="btn" data-action="tick" data-id="${t.id}" data-focus="focus-done">Mark done <kbd>D</kbd></button>
        <span class="focus-hint">Then the next task slides in.</span>
      </div>
    </article>`;
}

function queueRow(t, done) {
  const open = isOpen(`row:${t.id}`);
  return `
    <li class="q${done ? ' is-done' : ''}${open ? ' is-open' : ''}" id="task-${t.id}">
      <div class="q-row" data-action="toggle-row" data-id="${t.id}">
        <button class="check" role="checkbox" aria-checked="${done}" data-action="tick" data-id="${t.id}"
          data-focus="check:${t.id}" aria-label="${esc(t.text)}">${CHECK}</button>
        <div class="q-main">
          <p class="q-text">${esc(t.text)}</p>
          ${meta(t) ? `<p class="q-meta">${esc(meta(t))}</p>` : ''}
        </div>
        <button class="q-toggle" data-action="toggle-row" data-id="${t.id}" aria-expanded="${open}"
          aria-label="${open ? 'Hide' : 'Show'} how to do this" data-focus="row:${t.id}">${CHEV}</button>
      </div>
      ${open ? `<div class="q-how how">${howHtml(t)}</div>` : ''}
    </li>`;
}

/* ── Main panel ── */
export function buildMain(st) {
  const item = resolveItem(st);
  const isSide = SIDE.includes(item);
  const gate = st.homeGates[item.id];
  const done = st.tasks;
  const open = item.tasks.filter((t) => !done[t.id]);
  const finished = item.tasks.filter((t) => done[t.id]);
  const focus = !gate && !isSide ? open[0] : null;
  const queue = focus ? open.slice(1) : open;
  const n = countDone(item, done);
  const left = Math.round(hoursLeft(item, done));
  const { done: allDone, total: allTotal } = overall(st);
  const firstOpenIdx = item.tasks.findIndex((t) => !done[t.id]);

  const segs = item.tasks
    .map((t, i) => `<span class="seg${done[t.id] ? ' is-done' : i === firstOpenIdx && !gate ? ' is-current' : ''}"></span>`)
    .join('');

  const head = `
    <header class="hero">
      ${ridge(allDone / allTotal)}
      <div class="hero-text">
        <h1>${esc(item.title)}</h1>
        <p class="head-meta"><span class="num">${n} of ${item.tasks.length}</span> tasks done${left ? ` · about <span class="num">${left}h</span> left` : ''}</p>
      </div>
      ${youLabel(allDone, allTotal)}
    </header>
    <div class="segs" role="img" aria-label="${n} of ${item.tasks.length} tasks done in ${esc(item.title)}">${segs}</div>
    ${isSide ? `<p class="head-why">${esc(item.why)}</p>` : ''}`;

  const banner = gate
    ? `<p class="banner">${gate === 'skipped' ? 'You skipped this milestone.' : 'You marked this milestone done.'}
        <button class="link" data-action="set-gate" data-id="${item.id}" data-value="">Reopen</button></p>`
    : '';

  let top = '';
  if (focus) top = focusCard(focus, firstOpenIdx + 1, item.tasks.length);
  else if (!gate && !isSide && !open.length) {
    top = `<article class="focus confirm win" aria-label="Milestone check">
      <span class="win-icon">${FLAG}</span>
      <h2 class="focus-title">All tasks ticked. Do you meet this?</h2>
      <p class="focus-reason">${esc(item.doneWhen)}</p>
      <div class="focus-actions"><button class="btn" data-action="set-gate" data-id="${item.id}" data-value="done" data-focus="meet">Yes, next milestone</button></div></article>`;
  }

  const queueHtml = queue.length
    ? `<section class="queue"><h2>${focus ? 'Up next' : 'Tasks'} <span class="count">${queue.length}</span></h2><ul class="qlist">${queue.map((t) => queueRow(t, false)).join('')}</ul></section>`
    : '';
  const doneHtml = finished.length
    ? `<details class="finished" data-dk="fin:${item.id}"${attrOpen(`fin:${item.id}`)}><summary>Done <span class="count">${finished.length}</span>${CHEV}</summary><ul class="qlist">${finished.map((t) => queueRow(t, true)).join('')}</ul></details>`
    : '';

  const actions = !gate && !isSide
    ? `<section class="m-foot" aria-label="Milestone finish line">
        <h2>${FLAG}Finish line</h2>
        <p class="m-done">${esc(item.doneWhen)}</p>
        <details class="m-about" data-dk="about:${item.id}"${attrOpen(`about:${item.id}`)}><summary>About this milestone${CHEV}</summary><div class="about-body"><p>${esc(item.why)}</p><p>${esc(item.doThis)}</p></div></details>
        <div class="m-actions"><button class="btn-ghost" data-action="set-gate" data-id="${item.id}" data-value="skipped">Skip milestone</button>
        <span class="m-note">Use this if you have already done it. It stays on the route and you can reopen it.</span></div>
      </section>`
    : '';

  return { html: `${head}${banner}${top}${queueHtml}${doneHtml}${actions}`, focusId: focus?.id || null, itemId: item.id };
}

/* ── Route rail ── */
export function buildRail(st, railOpen) {
  const item = resolveItem(st);
  const curIdx = currentIndex(st.homeGates);
  const row = (m, i, side) => {
    const g = st.homeGates[m.id];
    const n = countDone(m, st.tasks);
    const pct = Math.round((n / m.tasks.length) * 100);
    const cls = [g ? 'is-gated' : '', !side && i === curIdx ? 'is-current' : '', m.id === item.id ? 'is-viewing' : ''].join(' ');
    const node = side ? '<span class="node side"></span>' : `<span class="node">${g ? CHECK : i + 1}</span>`;
    return `<li><button class="rail-item ${cls}" data-action="select" data-id="${m.id}" data-focus="rail:${m.id}" ${m.id === item.id ? 'aria-current="true"' : ''}>
      ${node}<span class="rail-text"><span class="rail-title">${esc(m.title)}</span>
      <span class="rail-sub">${side ? '' : (i === curIdx ? 'You are here · ' : '')}<span class="num">${n}/${m.tasks.length}</span></span>
      <span class="rail-bar" aria-hidden="true"><i style="width:${g === 'done' ? 100 : pct}%"></i></span></span></button></li>`;
  };
  const label = SIDE.includes(item) ? item.title : `${PLAN.indexOf(item) + 1} of ${PLAN.length} · ${item.title}`;
  return `
    <button class="rail-toggle" data-action="toggle-rail" aria-expanded="${railOpen}" aria-controls="railList">
      <span>${esc(label)}</span>${CHEV}</button>
    <div class="rail-body${railOpen ? ' open' : ''}" id="railList">
      <ol class="rail-list">${PLAN.map((m, i) => row(m, i, false)).join('')}</ol>
      <p class="rail-sep">Alongside</p>
      <ul class="rail-list">${SIDE.map((m, i) => row(m, i, true)).join('')}</ul>
      <div class="rail-data"><span>Your progress</span><span><button class="link" data-action="export">Export</button><button class="link" data-action="import">Import</button></span></div>
      <details class="rail-note" data-dk="evidence"${attrOpen('evidence')}><summary>What this order rests on${CHEV}</summary><p>${esc(EVIDENCE)}</p></details>
    </div>`;
}
