/**
 * Renderer Module
 * Updates the DOM for questions, dashboard, and stories.
 */

import { updateMastery } from './store.js';
import { allQuestions, ROADMAP_CATEGORIES, activeRoadmapId } from './filter.js';

export function renderDashboard(state) {
  const container = document.querySelector('.ip-dashboard');
  if (!container) return;

  // The dashboard tracks whichever categories the active roadmap prepares for,
  // so switching roadmaps changes what mastery means.
  const cats = ROADMAP_CATEGORIES[activeRoadmapId()] || [];
  const shown = cats.filter((c) => c !== 'Performance');

  container.innerHTML = shown
    .map((cat) => {
      const inCat = allQuestions.filter((q) =>
        cat === 'React Native Core'
          ? q.category.includes('React Native') || q.category.includes('Performance')
          : q.category === cat
      );
      const mastered = inCat.filter((q) => state.mastery[q.id] === 'mastered').length;
      const pct = inCat.length ? Math.round((mastered / inCat.length) * 100) : 0;
      const label = cat === 'Mobile System Design' ? 'System Design' : cat.replace(' Core', '');

      return `
        <div class="ip-dash-item">
          <div class="ip-dash-header">
            <span>${label}</span>
            <span class="ip-dash-pct">${mastered}/${inCat.length} · ${pct}%</span>
          </div>
          <div class="ip-dash-bar"><div class="ip-dash-fill" style="width:${pct}%"></div></div>
        </div>`;
    })
    .join('');
}

export function renderQuestions(questions, state) {
  const container = document.getElementById('questionList');
  container.innerHTML = '';

  if (questions.length === 0) {
    container.innerHTML = `<div class="ip-q-card"><p style="color:var(--txt3)">No questions found.</p></div>`;
    return;
  }

  questions.forEach(q => {
    const status = state.mastery[q.id] || 'gap';
    
    // Check if due
    let isDue = false;
    const last = state.lastPracticed[q.id];
    if (!last) isDue = true;
    else if ((Date.now() - last) / (1000 * 60 * 60 * 24) > 7) isDue = true;

    const dueBadge = isDue ? `<span class="ip-badge due">Due for review</span>` : '';

    const card = document.createElement('div');
    card.className = 'ip-q-card';
    card.innerHTML = `
      <div class="ip-q-header">
        <div class="ip-q-title">${q.title}</div>
        <div class="ip-q-meta">
          ${dueBadge}
          <span class="ip-badge">${q.category}</span>
        </div>
      </div>
      <div class="ip-mastery-group" data-id="${q.id}">
        <button class="ip-mastery-btn ${status === 'gap' ? 'active gap' : ''}" data-val="gap">Gap</button>
        <button class="ip-mastery-btn ${status === 'studying' ? 'active studying' : ''}" data-val="studying">Studying</button>
        <button class="ip-mastery-btn ${status === 'mastered' ? 'active mastered' : ''}" data-val="mastered">Mastered</button>
      </div>
      <div class="ip-q-actions">
        <a class="ip-action-link toggle-answer"><i class="ph ph-caret-down"></i> Show Answer</a>
        <a class="ip-action-link ip-log-btn" data-id="${q.id}" data-question="${q.title}"><i class="ph ph-pencil-simple"></i> Log IRL</a>
      </div>
      <div class="ip-answer">${q.answer}</div>
    `;
    container.appendChild(card);
  });

  // Attach Mastery Click Listeners
  container.querySelectorAll('.ip-mastery-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const qId = e.currentTarget.closest('.ip-mastery-group').dataset.id;
      const val = e.currentTarget.dataset.val;
      const newState = updateMastery(qId, val);
      
      // Update UI classes locally
      const group = e.currentTarget.parentElement;
      group.querySelectorAll('.ip-mastery-btn').forEach(b => {
        b.className = 'ip-mastery-btn'; // reset
      });
      e.currentTarget.className = `ip-mastery-btn active ${val}`;
      
      // Update Dashboard live
      renderDashboard(newState);
    });
  });

  // Attach Answer Toggles
  container.querySelectorAll('.toggle-answer').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const answerDiv = e.currentTarget.closest('.ip-q-card').querySelector('.ip-answer');
      const isExpanded = answerDiv.classList.contains('expanded');
      
      if (isExpanded) {
        answerDiv.classList.remove('expanded');
        e.currentTarget.innerHTML = '<i class="ph ph-caret-down"></i> Show Answer';
      } else {
        answerDiv.classList.add('expanded');
        e.currentTarget.innerHTML = '<i class="ph ph-caret-up"></i> Hide Answer';
      }
    });
  });

  // Re-attach logger events for new buttons (simplistic approach: import setup here or dispatch custom event)
  // We'll rely on the global listener in logger.js which we can't easily rebind without exposing it,
  // so we'll just open the modal directly here.
  container.querySelectorAll('.ip-log-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const overlay = document.getElementById('logModalOverlay');
      document.getElementById('logQText').value = e.currentTarget.dataset.question || '';
      document.getElementById('logQId').value = e.currentTarget.dataset.id || '';
      overlay.classList.add('active');
    });
  });
}

export function renderStories(stories) {
  const container = document.getElementById('storyList');
  container.innerHTML = '';
  
  if (!stories || stories.length === 0) {
    container.innerHTML = `<p style="color:var(--txt3); padding: 1rem;">No stories yet.</p>`;
    return;
  }

  stories.forEach(s => {
    const card = document.createElement('div');
    card.className = 'ip-story-card' + (s.needsInput ? ' needs-input' : '');
    card.innerHTML = `
      <div class="ip-story-header toggle-story">
        <span class="ip-story-name">${s.title}</span>
        <i class="ph ph-caret-down" style="color:var(--txt3)"></i>
      </div>
      <div class="ip-story-body">
        <div class="ip-story-field">
          <label>Situation</label>
          <p>${s.situation}</p>
        </div>
        <div class="ip-story-field">
          <label>Task</label>
          <p>${s.task}</p>
        </div>
        <div class="ip-story-field">
          <label>Action</label>
          <p>${s.action}</p>
        </div>
        <div class="ip-story-field">
          <label>Result</label>
          <p>${s.result}</p>
        </div>
        <div class="ip-story-field">
          <label>Reflection (What I learned)</label>
          <p>${s.reflection}</p>
        </div>
        ${s.source ? `<div class="ip-story-source"><i class="ph ph-seal-check"></i> ${s.source}</div>` : ''}
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('.toggle-story').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.ip-story-card');
      card.classList.toggle('expanded');
      const icon = e.currentTarget.querySelector('i');
      if (card.classList.contains('expanded')) {
        icon.className = 'ph ph-caret-up';
      } else {
        icon.className = 'ph ph-caret-down';
      }
    });
  });
}

export function renderLog(state) {
  const container = document.getElementById('realLogList');
  if(!container) return; // if it exists
  // For now, we will render it inside the Story Bank column as a separate list, or just keep it in state.
}
