/**
 * Phase 1: Escape Velocity (Weeks 1-8)
 * Single Responsibility: Phase 1 roadmap content
 */

export const PHASE_1_WEEKS = [
  {
    id: 'w1',
    num: 'WEEK 01',
    title: 'Foundation + AI POC',
    theme: '"AI-Native" Identity Shift',
    color: '#3b82f6',
    boss: {
      name: 'The AI Integrator',
      challenge: 'Feature works + cost tracked + 5 apps sent',
      reward: 450,
      resume: 'Shipped multi-modal AI (chat/voice/image) with $0.08/session cost control and streaming (<500ms first token)'
    },
    tasks: [
      { day: 'Day 1', time: '1h', depth: 'Deep', xp: 50, text: 'Audit Zonesso for AI integration points', reason: 'Document before migration' },
      { day: 'Day 2', time: '2h', depth: 'Deep', xp: 100, text: 'Set up OpenAI API, test basic integration', reason: 'Core tool evaluation' },
      { day: 'Day 3', time: '3h', depth: 'Deep', xp: 150, text: 'Implement simple AI feature (smart search)', reason: 'Proves capability' },
      { day: 'Day 4', time: '1h', depth: 'Medium', xp: 75, text: 'Add cost tracking + rate limiting', reason: 'Production safety' },
      { day: 'Day 5', time: '1h', depth: 'Medium', xp: 100, text: 'Document AI Architecture in README', reason: 'Visible proof' },
      { day: 'Day 6', time: '30m', depth: 'Action', xp: 50, text: 'Post LinkedIn: Lessons learned', reason: 'Social authority' },
      { day: 'Day 7', time: '1.5h', depth: 'Action', xp: 25, text: 'Apply to 5 target Series B/AI jobs', reason: 'Pipeline start' }
    ]
  },
  {
    id: 'w2',
    num: 'WEEK 02',
    title: 'New Architecture Migration',
    theme: '2026-Ready Technical Skills',
    color: '#10b981',
    boss: {
      name: 'The Architect',
      challenge: 'CI test gates, 60 FPS, 40% bundle reduction',
      reward: 500,
      resume: 'Reduced bundle 40%, achieved 60 FPS on 10K lists, implemented CI test gates for critical modules'
    },
    tasks: [
      { day: 'Day 1', time: '2h', depth: 'Deep', xp: 100, text: 'Enable Fabric in Zonesso, document breaks', reason: 'Migration foundation' },
      { day: 'Day 2', time: '3h', depth: 'Deep', xp: 150, text: 'Fix Fabric compatibility issues', reason: 'Actual engineering' },
      { day: 'Day 3', time: '2h', depth: 'Deep', xp: 125, text: 'Migrate 1 native module to TurboModule', reason: 'Modern native skills' },
      { day: 'Day 4', time: '1h', depth: 'Medium', xp: 75, text: 'Benchmark: Startup time, memory, FPS', reason: 'Data to brag about' },
      { day: 'Day 5', time: '1h', depth: 'Medium', xp: 75, text: 'Deploy to TestFlight, gather feedback', reason: 'App Store readiness' },
      { day: 'Day 6', time: '1h', depth: 'Action', xp: 100, text: 'Write blog: Migrating to RN New Arch', reason: 'Market leadership' },
      { day: 'Day 7', time: '2h', depth: 'Action', xp: 50, text: 'Apply to 5 jobs + follow-ups', reason: 'Keep momentum' },
      { day: 'Recurring', time: '1h', depth: 'Medium', xp: 50, text: 'Behavioral Story Library', reason: 'Document 1 leadership/failure/conflict/perf story' }
    ]
  },
  {
    id: 'w3',
    num: 'WEEK 03',
    title: 'System Design + Interview Prep',
    theme: 'Staff-Level Thinking',
    color: '#8b5cf6',
    boss: {
      name: 'The System Designer',
      challenge: '12-15 DSA patterns, working backend API',
      reward: 500,
      resume: 'Solved 12-15 LeetCode pattern-focused problems, built NestJS streaming backend with <200ms latency'
    },
    tasks: [
      { day: 'Day 1', time: '2h', depth: 'Deep', xp: 125, text: 'Design Zonesso architecture at scale', reason: '4-5 pattern-focused problems solved' },
      { day: 'Day 2', time: '2h', depth: 'Deep', xp: 150, text: 'Practice "Design WhatsApp" & record', reason: 'Repetition reduces hesitation' },
      { day: 'Day 3', time: '2h', depth: 'Deep', xp: 150, text: 'Practice "Design TikTok AI" & record', reason: 'Scale constraints' },
      { day: 'Day 4', time: '2h', depth: 'Medium', xp: 100, text: 'Study 5 design patterns (caching, sharding)', reason: 'Fundamental blocks' },
      { day: 'Day 5', time: '1h', depth: 'Action', xp: 200, text: 'Mock interview with friend/ADPList', reason: 'Real pressure' },
      { day: 'Day 6', time: '1h', depth: 'Action', xp: 75, text: 'Refine answers based on feedback', reason: 'Continuous improvement' },
      { day: 'Day 7', time: '2h', depth: 'Action', xp: 75, text: 'Apply to 10 Staff Engineer roles', reason: 'Aim higher' },
      { day: 'Recurring', time: '1h', depth: 'Medium', xp: 50, text: 'Behavioral Story Library', reason: 'Document 1 leadership/failure/conflict/perf story' }
    ]
  },
  {
    id: 'w4',
    num: 'WEEK 04',
    title: 'RAG + Semantic Search',
    theme: 'AI Specialist Differentiation',
    color: '#f59e0b',
    boss: {
      name: 'The AI Architect',
      challenge: 'Ship RAG with <100ms latency',
      reward: 300,
      resume: 'Architected RAG search, improving discovery 45%'
    },
    tasks: [
      { day: 'Day 1', time: '1.5h', depth: 'Deep', xp: 100, text: 'Set up Pinecone/Weaviate (free tier)', reason: 'Vector backend' },
      { day: 'Day 2', time: '2h', depth: 'Deep', xp: 125, text: 'Generate embeddings for Zonesso', reason: 'Data processing pipeline' },
      { day: 'Day 3', time: '3h', depth: 'Deep', xp: 175, text: 'Build semantic search API in NestJS', reason: 'Search logic' },
      { day: 'Day 4', time: '2h', depth: 'Deep', xp: 150, text: 'Integrate into React Native via React Query', reason: 'Frontend consumption' },
      { day: 'Day 5', time: '1.5h', depth: 'Medium', xp: 125, text: 'Add offline fallback + caching', reason: 'Resilience' },
      { day: 'Day 6', time: '1h', depth: 'Medium', xp: 100, text: 'Document: Building RAG for Mobile', reason: 'Authority' },
      { day: 'Day 7', time: '2h', depth: 'Action', xp: 75, text: 'Apply to 10 jobs + 2 phone screens', reason: 'Sales funnel' },
      { day: 'Recurring', time: '1h', depth: 'Medium', xp: 50, text: 'Behavioral Story Library', reason: 'Document 1 leadership/failure/conflict/perf story' }
    ]
  },
  {
    id: 'w5',
    num: 'WEEK 05',
    title: 'Backend Depth + DevOps',
    theme: 'Full-Stack Credibility',
    color: '#06b6d4',
    boss: {
      name: 'The DevOps Engineer',
      challenge: 'Deploy zero downtime, rollback <5min',
      reward: 600,
      resume: 'Built <100ms semantic search, implemented crash monitoring with Sentry to reduce production crash frequency'
    },
    tasks: [
      { day: 'Day 1', time: '2h', depth: 'Deep', xp: 125, text: 'Dockerize entire Zonesso stack', reason: 'Portability' },
      { day: 'Day 2', time: '2h', depth: 'Deep', xp: 150, text: 'Deploy to AWS EC2 + RDS', reason: 'Production host' },
      { day: 'Day 3', time: '2h', depth: 'Deep', xp: 150, text: 'Set up GitHub Actions CI/CD', reason: 'Automation' },
      { day: 'Day 4', time: '1.5h', depth: 'Medium', xp: 100, text: 'Add monitoring CloudWatch', reason: 'Visibility' },
      { day: 'Day 5', time: '1.5h', depth: 'Deep', xp: 125, text: 'Load test: Simulate 10K users', reason: 'Stress testing' },
      { day: 'Day 6', time: '1h', depth: 'Medium', xp: 100, text: 'Write post-mortem: Scaling to 10K', reason: 'Graceful degradation, improved release health' },
      { day: 'Day 7', time: '2h', depth: 'Action', xp: 75, text: 'Apply to 10 jobs + 2 tech screens', reason: 'Keep interviewing' },
      { day: 'Recurring', time: '1h', depth: 'Medium', xp: 50, text: 'Behavioral Story Library', reason: 'Document 1 leadership/failure/conflict/perf story' }
    ]
  },
  {
    id: 'w6',
    num: 'WEEK 06',
    title: 'Interview Blitz',
    theme: 'Closing the Deal',
    color: '#ec4899',
    boss: {
      name: 'The Interview Master',
      challenge: '5 mock interviews >90% score',
      reward: 500,
      resume: 'Production deployment with monitoring, alerting, and load testing (1K concurrent users)'
    },
    tasks: [
      { day: 'Day 1', time: '2h', depth: 'Medium', xp: 100, text: 'Research 20 target companies', reason: 'Target list curation' },
      { day: 'Day 2', time: '2h', depth: 'Action', xp: 150, text: 'Customize resume for 3 company types', reason: 'Tailored pitches' },
      { day: 'Day 3', time: '2h', depth: 'Deep', xp: 150, text: 'Practice STAR behavioral questions', reason: 'Confidence' },
      { day: 'Day 4', time: '1h', depth: 'Deep', xp: 200, text: 'Mock interview: System design', reason: 'Critique feedback' },
      { day: 'Day 5', time: '1h', depth: 'Deep', xp: 200, text: 'Mock interview: Behavioral', reason: 'Story delivery' },
      { day: 'Day 6', time: '1h', depth: 'Medium', xp: 100, text: 'Research salary bands on levels.fyi', reason: 'Negotiation baseline' },
      { day: 'Day 7', time: '3h', depth: 'Action', xp: 100, text: 'Apply to 15 jobs + follow-ups', reason: 'Peak volume' },
      { day: 'Recurring', time: '1h', depth: 'Medium', xp: 50, text: 'Behavioral Story Library', reason: 'Document 1 leadership/failure/conflict/perf story' }
    ]
  },
  {
    id: 'w7',
    num: 'WEEK 07',
    title: 'Offer Collection',
    theme: 'Leverage and Selection',
    color: '#14b8a6',
    boss: {
      name: 'The Negotiator',
      challenge: 'Secure 2 offers, negotiate +10%',
      reward: 600,
      resume: 'Unlocked leverage'
    },
    tasks: [
      { day: 'Day 1', time: '1h', depth: 'Action', xp: 50, text: 'Follow up on pending apps', reason: 'Close loops' },
      { day: 'Day 2', time: '3h', depth: 'Deep', xp: 300, text: 'Complete 2-3 technical interviews', reason: 'Pass rate improves' },
      { day: 'Day 3', time: '2h', depth: 'Deep', xp: 250, text: 'Complete 2-3 behavioral interviews', reason: 'Team fit' },
      { day: 'Day 4', time: '2h', depth: 'Medium', xp: 500, text: 'Refine STAR stories', reason: 'Polish the 8-10 stories collected in Behavioral Library' },
      { day: 'Day 5', time: '1h', depth: 'Action', xp: 400, text: 'Negotiate first offer (ask +15K)', reason: 'Counter offer' },
      { day: 'Day 6', time: '0h', depth: 'Action', xp: 500, text: 'Receive second offer for leverage', reason: 'Power play' },
      { day: 'Day 7', time: '2h', depth: 'Medium', xp: 200, text: 'Evaluate comp, tech stack, growth', reason: 'Make choice' },
      { day: 'Recurring', time: '1h', depth: 'Medium', xp: 50, text: 'Behavioral Story Library', reason: 'Document 1 leadership/failure/conflict/perf story' }
    ]
  },
  {
    id: 'w8',
    num: 'WEEK 08',
    title: 'Decision + Transition',
    theme: 'Deploy Your Career',
    color: '#6366f1',
    boss: {
      name: 'The Escape Artist',
      challenge: 'Sign $140K+ offer, leave gracefully',
      reward: 1000,
      resume: 'Staff Ready'
    },
    tasks: [
      { day: 'Day 1', time: '1h', depth: 'Action', xp: 500, text: 'Final negotiation on best offer', reason: 'Closing' },
      { day: 'Day 2', time: '30m', depth: 'Action', xp: 300, text: 'Accept offer, notify employer', reason: 'Transition' },
      { day: 'Day 3', time: '2h', depth: 'Medium', xp: 400, text: 'Document: How I got offers in 8 wks', reason: 'Legacy post' },
      { day: 'Day 4', time: '30m', depth: 'Action', xp: 200, text: 'Post LinkedIn: New chapter', reason: 'Network update' },
      { day: 'Day 5', time: '2h', depth: 'Medium', xp: 500, text: 'Help 2 other devs with job search', reason: 'Pay it forward' },
      { day: 'Day 6', time: '2h', depth: 'Medium', xp: 300, text: 'Plan first 90 days at new role', reason: 'Onboarding success' },
      { day: 'Day 7', time: '0h', depth: 'Action', xp: 1000, text: 'Celebrate + rest', reason: 'You made it' }
    ]
  }
];
