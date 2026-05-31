/**
 * Phase 2: Career Acceleration (Months 3-6)
 * Single Responsibility: Phase 2 roadmap content
 */

export const PHASE_2_MONTHS = [
  {
    id: 'm3',
    num: 'MONTH 03',
    title: 'AI-Native Architecture',
    theme: 'MLOps, Edge AI, Security',
    color: '#8b5cf6',
    boss: {
      name: 'The AI Architect',
      challenge: 'Conceptual 1M User Arch, measurable AI cost optimization',
      reward: 3000,
      resume: 'Led 1M user design, measurable AI cost optimization via caching & batching'
    },
    tasks: [
      { day: 'Week 9', time: '5h', depth: 'Medium', xp: 500, text: 'Observability + Cost Tracking + Feature Flags', reason: 'Production reliability & rollouts' },
      { day: 'Week 10', time: '5h', depth: 'Deep', xp: 500, text: 'Edge AI: TF Lite, on-device inference', reason: 'On device compute' },
      { day: 'Week 11', time: '5h', depth: 'Deep', xp: 500, text: 'Cost optimization (FinOps)', reason: 'Measurable optimization via caching/prompt tuning' },
      { day: 'Week 12', time: '5h', depth: 'Deep', xp: 500, text: 'Technical leadership', reason: '3 ADRs, mentor 1 engineer with growth plan' }
    ]
  },
  {
    id: 'm4',
    num: 'MONTH 04',
    title: 'Platform Engineering',
    theme: 'Design Systems, Perf Eng',
    color: '#8b5cf6',
    boss: {
      name: 'The Platform Owner',
      challenge: 'Reduce bug rate 25%',
      reward: 3000,
      resume: 'Led platform team, improved velocity 40%'
    },
    tasks: [
      { day: 'Week 13', time: '5h', depth: 'Deep', xp: 500, text: 'Design System Leadership', reason: 'Consistency' },
      { day: 'Week 14', time: '5h', depth: 'Deep', xp: 500, text: 'Performance: Bundle analysis, profiling', reason: 'Speed' },
      { day: 'Week 15', time: '5h', depth: 'Medium', xp: 500, text: 'DevEx: CI/CD, debugging guides', reason: 'DX multiplier' },
      { day: 'Week 16', time: '5h', depth: 'Deep', xp: 500, text: 'Technical Roadmapping (6-month OKRs)', reason: 'Vision' }
    ]
  }
];
