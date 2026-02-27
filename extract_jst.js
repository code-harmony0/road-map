const fs = require('fs');

try {
  let m1 = fs.readFileSync('milestone1-job-ready.html', 'utf8');
  let idx = fs.readFileSync('index.html', 'utf8');

  // Extract JST CSS
  // Need to find .job-search-tracker
  const cssMatch = m1.match(/\/\*\s*Job Search Tracker[\s\S]*?\*\/\s*([\s\S]*?)(?=\/\*|$)/);
  if (cssMatch && cssMatch[0]) {
    // Inject CSS into index.html
    idx = idx.replace('</style>', cssMatch[0] + '\n  </style>');
  }

  // Extract JST HTML
  const htmlMatch = m1.match(/<--legacy-peer-deps Job Search Tracker -->([\s\S]*?)<--legacy-peer-deps Today's Focus -->/);
  if (htmlMatch && htmlMatch[0]) {
    // Inject HTML into index.html near the top, maybe before nav-actions
    // Or underneath the header? Let's look at index.html
    // Let's inject it into main-container just above the iframe
    idx = idx.replace('<iframe class="milestone-iframe"', '\n    <!-- Job Search Tracker -->\n    ' + htmlMatch[1].trim() + '\n\n    <iframe class="milestone-iframe"');
    
    // Remove from milestone1
    m1 = m1.replace(/<--legacy-peer-deps Job Search Tracker -->[\s\S]*?<--legacy-peer-deps Today's Focus -->/, "<!-- Today's Focus -->");
  }

  // Extract JST JS
  const jsMatch = m1.match(/\/\/ Job Search Tracker Functions([\s\S]*?)\/\/ Initialize everything/);
  if (jsMatch && jsMatch[0]) {
    // Inject JS into index.html script block before </script>
    // Wait index.html has a script block inside <body> where it initializes everything
    idx = idx.replace('// Initialize on load', jsMatch[0] + '\n\n    // Initialize on load');
    
    // Replace progress.jobSearch with state.jobSearch in JS
    idx = idx.replace(/progress\.jobSearch/g, 'state.jobSearch');
    // Replace saveProgress() with saveToStorage(CONFIG.storageKeys.analytics, state.analytics) wait, no, JST requires saving to app.js state? 
    // Actually index.html has state.
  }

  fs.writeFileSync('index.html.mod', idx);
  // fs.writeFileSync('m1.mod', m1);
  console.log("Ready");
} catch(e) { console.error(e); }
