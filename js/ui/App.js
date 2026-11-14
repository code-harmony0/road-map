/**
 * App: paints the rail and main panel, routes every click and key through one
 * place, and keeps scroll and keyboard focus steady across repaints.
 */
import { state } from '../core/State.js';
import { buildMain, buildRail, overall, setOpen, isOpen } from './views.js';
import { toast } from './Toast.js';
import { toggleTimer, resetTimer } from '../features/Timer.js';

let railOpen = false;
let lastItem = null;
let lastFocus = null;
let focusTaskId = null;

/** Repaint, keeping scroll and keyboard focus where the user left them. */
export function render() {
  const st = state.get();
  const main = document.getElementById('app');
  const rail = document.getElementById('rail');
  const built = buildMain(st);
  const y = window.scrollY;
  const focusKey = document.activeElement?.dataset?.focus;

  main.innerHTML = built.html;
  rail.innerHTML = buildRail(st, railOpen);
  focusTaskId = built.focusId;

  // One authored moment: the task card slides in when the task changes.
  if (built.focusId && built.focusId !== lastFocus && built.itemId === lastItem) {
    main.querySelector('.focus')?.classList.add('swap');
  }
  window.scrollTo(0, built.itemId === lastItem ? y : 0);
  lastItem = built.itemId;
  lastFocus = built.focusId;

  const { done, total } = overall(st);
  document.getElementById('overallText').textContent = `${done} of ${total}`;
  document.getElementById('overallBar').style.width = `${Math.round((done / total) * 100)}%`;
  document.getElementById('overall').setAttribute('aria-label', `${done} of ${total} tasks done`);

  if (focusKey) document.querySelector(`[data-focus="${CSS.escape(focusKey)}"]`)?.focus({ preventScroll: true });
}

function tick(id) {
  const wasDone = !!state.get().tasks[id];
  state.toggleTask(id);
  if (!wasDone) toast('Marked done', { label: 'Undo', run: () => state.toggleTask(id) });
}

const actions = {
  tick: (el) => tick(el.dataset.id),
  'toggle-row': (el) => {
    const key = `row:${el.dataset.id}`;
    setOpen(key, !isOpen(key));
    render();
  },
  select: (el) => {
    railOpen = false;
    state.select(el.dataset.id);
  },
  'set-gate': (el) => state.setGate(el.dataset.id, el.dataset.value || null),
  'toggle-rail': () => {
    railOpen = !railOpen;
    render();
  },
  export: () => {
    const st = state.get();
    const blob = new Blob([JSON.stringify({ app: 'roadmap', version: 1, savedAt: new Date().toISOString(), tasks: st.tasks, homeGates: st.homeGates }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `roadmap-progress-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
    toast('Progress saved to a file');
  },
  import: () => document.getElementById('importFile')?.click(),
  'timer-toggle': () => toggleTimer(),
  'timer-reset': () => resetTimer()
};

export function bind() {
  document.addEventListener('click', (e) => {
    // Dragging to select text ends in a click; do not act on that.
    if (window.getSelection()?.toString()) return;
    const el = e.target.closest('[data-action]');
    if (el && actions[el.dataset.action]) actions[el.dataset.action](el);
  });
  // Remember which <details> are open across repaints.
  document.addEventListener('toggle', (e) => {
    const key = e.target?.dataset?.dk;
    if (key) setOpen(key, e.target.open);
  }, true);
  // Restore progress from an exported file.
  document.getElementById('importFile')?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (!data || typeof data.tasks !== 'object' || data.tasks === null) throw new Error('not a progress file');
      state.update({ tasks: data.tasks, homeGates: data.homeGates && typeof data.homeGates === 'object' ? data.homeGates : {}, selected: null });
      toast('Progress restored');
    } catch {
      toast('That file is not a Roadmap progress export');
    }
  });
  // Escape or a click outside closes the route dropdown on narrow screens.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && railOpen) {
      railOpen = false;
      render();
      document.querySelector('.rail-toggle')?.focus();
    }
  });
  document.addEventListener('click', (e) => {
    // composedPath still lists the clicked button after a repaint has detached it.
    if (railOpen && !e.composedPath().some((n) => n.id === 'rail')) {
      railOpen = false;
      render();
    }
  });
  // D marks the current task done.
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() !== 'd' || e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable) return;
    if (focusTaskId) {
      e.preventDefault();
      tick(focusTaskId);
    }
  });
}
