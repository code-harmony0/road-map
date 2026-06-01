/**
 * Navigation Content
 * Single Responsibility: Sidebar labels and milestone headers
 */

// Sidebar Navigation Labels
export const SIDEBAR_LABELS = {
  phase0: { title: 'Positioning', subtitle: 'Weeks 1-2' },
  phase1: { title: 'Interview Ready', subtitle: 'Weeks 3-8' },
  phase2: { title: 'Apply Aggressively', subtitle: 'Weeks 7-14' },
  phase3: { title: 'Deepen Skills', subtitle: 'Months 4+' }
};

// Milestone Headers
export const MILESTONE_HEADERS = {
  phase0: {
    name: 'Phase 0: Positioning',
    subtitle: 'Weeks 1-2 · Target: Make 4 years of work visible',
    icon: 'ph-target'
  },
  phase1: {
    name: 'Phase 1: Interview-Ready',
    subtitle: 'Weeks 3-8 · Sharpen existing skills, do not rebuild',
    icon: 'ph-sword'
  },
  phase2: {
    name: 'Phase 2: Apply Aggressively',
    subtitle: 'Weeks 7-14 · 50 quality applications',
    icon: 'ph-rocket'
  },
  phase3: {
    name: 'Phase 3: Deepen Skills',
    subtitle: 'Months 4+ · SQL, systems, and AI after the move',
    icon: 'ph-crown'
  }
};
