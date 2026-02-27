const fs = require('fs');

try {
  // Read all files
  let indexHtml = fs.readFileSync('index.html', 'utf8');
  let m1Html = fs.readFileSync('milestone1-job-ready.html', 'utf8');
  let m2Html = fs.readFileSync('milestone2-placeholder.html', 'utf8');
  let m3Html = fs.readFileSync('milestone3-staff-engineer.html', 'utf8');

  // Extract Milestone 1 CSS (from <style> tags)
  const m1StyleMatch = m1Html.match(/<style>([\s\S]*?)<\/style>/);
  let m1Style = m1StyleMatch ? m1StyleMatch[1] : '';

  // Clean up duplicate :root variables and base styles from m1Style
  m1Style = m1Style.replace(/:root\s*{[^}]*}/g, '');
  m1Style = m1Style.replace(/\* \s*{[^}]*}/g, '');
  m1Style = m1Style.replace(/body\s*{[^}]*}/g, '');

  // Add the CSS to index.html before </style>
  indexHtml = indexHtml.replace('</style>', m1Style + '\n  </style>');

  // Extract Milestone 1 Body Content (main-content)
  const m1BodyMatch = m1Html.match(/<main class="main-content">([\s\S]*?)<\/main>/);
  const m1Body = m1BodyMatch ? m1BodyMatch[1] : '';

  // Extract Milestone 2 Body Content (container)
  const m2BodyMatch = m2Html.match(/<div class="container">([\s\S]*?)<a\s+href="#milestone-1"/);
  const m2Body = m2BodyMatch ? `<div class="container" style="text-align:center; padding: 2rem;">${m2BodyMatch[1]}</div>` : '';

  // Extract Milestone 3 Body Content (container)
  const m3BodyMatch = m3Html.match(/<div class="container">([\s\S]*?)<a\s+href="#milestone-1"/);
  const m3Body = m3BodyMatch ? `<div class="container" style="text-align:center; padding: 2rem;">${m3BodyMatch[1]}</div>` : '';

  // Prepare combined content
  const combinedContent = `
    <div id="milestone-1-section" class="milestone-section active">
      <main class="main-content">
        ${m1Body}
        <!-- Weeks 9-12 inside milestone 1 HTML layout as per roadmap -->
        <h2 class="section-title">Month 3: <span class="accent-text">The Impact</span></h2>
        <div class="weeks-grid" id="month3weeks"></div>
      </main>
    </div>
    <div id="milestone-2-section" class="milestone-section" style="display: none;">
      ${m2Body}
    </div>
    <div id="milestone-3-section" class="milestone-section" style="display: none;">
      ${m3Body}
    </div>
  `;

  // Replace iframe with combined content
  indexHtml = indexHtml.replace(
    /<iframe class="milestone-iframe" id="contentFrame"[\s\S]*?<\/iframe>/,
    combinedContent
  );

  // Add scripts right before </body>
  const scriptsToInject = `
  <script src="data.js"></script>
  <script src="app.js"></script>
  `;
  indexHtml = indexHtml.replace('</body>', scriptsToInject + '\n</body>');

  // Update switch tab logic to show/hide sections instead of using iframe
  const loadContentPattern = /function loadContent\(\) {[\s\S]*?\/\/ Progress updates/m;
  const newLoadContent = `function loadContent() {
      // Hide all sections
      document.querySelectorAll('.milestone-section').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
      });
      
      // Show active section
      const activeSection = document.getElementById('milestone-' + state.currentMilestone + '-section');
      if (activeSection) {
        activeSection.style.display = 'block';
        activeSection.classList.add('active');
      }
    }

    // Progress updates`;
    
  indexHtml = indexHtml.replace(loadContentPattern, newLoadContent);

  // Now we need to remove init() from app.js because index.html calls it? No, app.js doesn't have init().
  // Wait, milestone1-job-ready.html had init()! We can just call renderWeeks(), etc.
  
  fs.writeFileSync('index.html', indexHtml);
  console.log('Successfully combined milestones into index.html');
} catch (e) {
  console.error('Error:', e);
}
