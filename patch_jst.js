const fs = require('fs');
try {
  let m1 = fs.readFileSync('milestone1-job-ready.html', 'utf8');
  let idx = fs.readFileSync('index.html', 'utf8');

  // Extract JST CSS
  const cssMatch = m1.match(/\/\*\s*Job Search Tracker[\s\S]*?\*\/\s*([\s\S]*?)(?=\/\*|$)/);
  if (cssMatch && cssMatch[0]) {
    idx = idx.replace('</style>', cssMatch[0] + '\n  </style>');
  }

  // Extract JST HTML
  const htmlMatch = m1.match(/<!-- Job Search Tracker -->([\s\S]*?)<!-- Today's Focus -->/);
  if (htmlMatch && htmlMatch[0]) {
    // Inject HTML into index.html
    idx = idx.replace('<iframe class="milestone-iframe"', '\n    <!-- Job Search Tracker -->\n    ' + htmlMatch[1].trim() + '\n\n    <iframe class="milestone-iframe"');
    
    // Remove from milestone1
    m1 = m1.replace(/<!-- Job Search Tracker -->[\s\S]*?<!-- Today's Focus -->/, "<!-- Today's Focus -->");
  }

  // Rewrite JS logic for JST to use rn_roadmap_v5 in index.html
  const jsLogic = `
    // Job Search Tracker Shared Logic (using rn_roadmap_v5)
    function loadRoadmapState() {
      try {
        const raw = localStorage.getItem('rn_roadmap_v5');
        return raw ? JSON.parse(raw) : {};
      } catch(e) { return {}; }
    }
    
    function saveRoadmapState(roadmapState) {
      try {
        localStorage.setItem('rn_roadmap_v5', JSON.stringify(roadmapState));
        // Update iframe if loaded to sync state
        const frame = document.getElementById('contentFrame');
        if (frame && frame.contentWindow && typeof frame.contentWindow.loadState === 'function') {
           // We might not be able to directly trigger reload, but relying on localStorage events is better
        }
      } catch(e) {}
    }

    function renderJobSearchTracker() {
      const tracker = document.getElementById('jobSearchTracker');
      if (!tracker) return;
      
      const rState = loadRoadmapState();
      const jobSearch = rState.jobSearch || {
        applications: 0, interviews: 0, offers: 0, targetSalary: 130000, lastUpdated: null
      };
      
      document.getElementById('jstApplications').value = jobSearch.applications || 0;
      document.getElementById('jstInterviews').value = jobSearch.interviews || 0;
      document.getElementById('jstOffers').value = jobSearch.offers || 0;
      document.getElementById('jstSalary').value = jobSearch.targetSalary || 130000;
    }

    function updateJobSearchMetric(field, value) {
      const rState = loadRoadmapState();
      if (!rState.jobSearch) {
        rState.jobSearch = { applications: 0, interviews: 0, offers: 0, targetSalary: 130000, lastUpdated: null };
      }
      
      const numValue = parseInt(value, 10) || 0;
      rState.jobSearch[field] = Math.max(0, numValue);
      rState.jobSearch.lastUpdated = new Date().toISOString();
      saveRoadmapState(rState);
    }

    function applyToThreeJobs() {
      const rState = loadRoadmapState();
      if (!rState.jobSearch) {
        rState.jobSearch = { applications: 0, interviews: 0, offers: 0, targetSalary: 130000, lastUpdated: null };
      }
      
      rState.jobSearch.applications = (rState.jobSearch.applications || 0) + 3;
      rState.jobSearch.lastUpdated = new Date().toISOString();
      saveRoadmapState(rState);
      renderJobSearchTracker();
      
      const toast = document.createElement('div');
      toast.textContent = '3 applications added! Keep going! 🚀';
      toast.style.cssText = \`
        position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
        background: var(--accent-green); color: white; padding: 1rem 2rem;
        border-radius: 8px; font-weight: 600; z-index: 9999;
        animation: slideUp 0.3s ease;
      \`;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }

    let jobSearchDebounceTimer;
    function setupJobSearchListeners() {
      const fields = ['jstApplications', 'jstInterviews', 'jstOffers', 'jstSalary'];
      const fieldNames = ['applications', 'interviews', 'offers', 'targetSalary'];
      
      fields.forEach((id, index) => {
        const input = document.getElementById(id);
        if (input) {
          input.addEventListener('input', (e) => {
            clearTimeout(jobSearchDebounceTimer);
            jobSearchDebounceTimer = setTimeout(() => {
              updateJobSearchMetric(fieldNames[index], e.target.value);
            }, 300);
          });
        }
      });
      
      const applyButton = document.getElementById('jstApplyButton');
      if (applyButton) {
        applyButton.addEventListener('click', applyToThreeJobs);
      }
      
      // Listen for cross-tab storage changes
      window.addEventListener('storage', (e) => {
        if (e.key === 'rn_roadmap_v5') {
          renderJobSearchTracker();
        }
      });
    }
  `;

  // Remove the old inline script from milestone1
  m1 = m1.replace(/\/\/ Job Search Tracker Functions([\s\S]*?)\/\/ Add event listeners for job search tracker with debouncing([\s\S]*?)setupJobSearchListeners\(\)\n\s*renderJobSearchTracker\(\)/, "");

  // Inject jsLogic and init hooks into index.html
  idx = idx.replace('// Initialize on load', jsLogic + '\n\n    // Initialize on load');
  idx = idx.replace('applyReducedMotion();', 'applyReducedMotion();\n      setupJobSearchListeners();\n      renderJobSearchTracker();');

  fs.writeFileSync('index.html', idx);
  fs.writeFileSync('milestone1-job-ready.html', m1);
  console.log("Done");
} catch(e) { console.error(e); }
