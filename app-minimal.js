// Minimal version to test week card rendering
console.log('Minimal app starting...');

let ROADMAP_DATA = {};
let WEEKS = [];

// Load roadmap data
fetch("./roadmap.json")
    .then(response => response.json())
    .then(data => {
        console.log('Data loaded:', data);
        ROADMAP_DATA = data;
        WEEKS = data.roadmap || [];
        console.log('WEEKS set:', WEEKS.length);
        renderWeekCards();
    })
    .catch(error => {
        console.error('Failed to load data:', error);
    });

// Simple render function
function renderWeekCards() {
    console.log('Rendering week cards...');
    
    const container = document.getElementById('month1weeks');
    if (!container) {
        console.error('month1weeks container not found');
        return;
    }
    
    container.innerHTML = '';
    
    const month1Weeks = WEEKS.filter(w => w.month === 1);
    console.log('Month 1 weeks:', month1Weeks.length);
    
    month1Weeks.forEach((week, index) => {
        console.log(`Rendering week ${week.id}`);
        
        const card = document.createElement('div');
        card.className = 'week-card';
        card.style.cssText = `
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            margin-bottom: 16px;
            overflow: hidden;
        `;
        
        card.innerHTML = `
            <div class="wc-header" style="padding: 18px 20px; cursor: pointer;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-weight: bold; color: var(--accent);">${week.num}</div>
                        <div style="font-size: 18px; margin: 4px 0;">${week.title}</div>
                        <div style="color: var(--muted); font-size: 14px;">${week.subtitle}</div>
                    </div>
                    <div style="font-size: 20px;">▼</div>
                </div>
            </div>
            <div class="wc-body" style="padding: 0 20px 20px;">
                <div class="wc-tasks">
                    ${week.tasks.map(task => `
                        <div class="task-item" style="
                            display: flex;
                            align-items: center;
                            padding: 12px 0;
                            border-bottom: 1px solid var(--border);
                            cursor: pointer;
                        ">
                            <div style="
                                width: 20px;
                                height: 20px;
                                border: 2px solid var(--border);
                                border-radius: 4px;
                                margin-right: 12px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            ">✓</div>
                            <div style="flex: 1;">
                                <div style="font-size: 14px;">${task.text}</div>
                                <div style="font-size: 12px; color: var(--muted); margin-top: 4px;">${task.why}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        container.appendChild(card);
        console.log(`Week ${week.id} added to container`);
    });
    
    console.log('Week cards rendering complete');
}

// Simple test on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, WEEKS length:', WEEKS.length);
    if (WEEKS.length > 0) {
        renderWeekCards();
    }
});
