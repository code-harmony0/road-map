export const FALLBACK = {
  "id": "phase1_fallback",
  "title": "Phase 1 Fallback: If Job Search Fails",
  "trigger_conditions": [
    "0 offers received by end of Week 8",
    "Only 1 offer received (no leverage for negotiation)",
    "All offers below $130K base / $150K total",
    "Decision to stay at current company"
  ],
  "option_a_extend_search": {
    "title": "Option A: Extend Search by 4 Weeks (Weeks 9-12)",
    "when_to_choose": "You have 1-2 final rounds pending but no offers yet, OR you got feedback that you are close but need more experience",
    "actions": [
      {
        "week": "Week 9",
        "focus": "Diagnose failure + Fix gaps",
        "tasks": [
          "Schedule 3 informational interviews with hiring managers who rejected you. Ask: 'What was the gap?'",
          "Identify top 3 weaknesses from feedback (e.g., 'needs more system design depth', 'not enough AI production experience', 'behavioral stories weak')",
          "Create 4-week sprint plan to close top weakness",
          "Update resume with any new work from Weeks 1-8"
        ]
      },
      {
        "week": "Week 10",
        "focus": "Close gap #1",
        "tasks": [
          "If weakness = system design: complete 5 more mock interviews, record yourself, get feedback",
          "If weakness = AI experience: ship one more AI feature (chatbot, image analysis, recommendation)",
          "If weakness = behavioral: re-record all 8 stories with feedback incorporated",
          "Publish one more technical blog post addressing the gap"
        ]
      },
      {
        "week": "Week 11",
        "focus": "Close gap #2 + Re-apply",
        "tasks": [
          "Complete gap #2 fix",
          "Re-apply to 10 companies that previously rejected you (with updated resume + new work)",
          "Apply to 10 NEW companies (lower tier if needed: Series A instead of Series C)",
          "Reach out to 5 recruiters specializing in React Native / mobile"
        ]
      },
      {
        "week": "Week 12",
        "focus": "Interview blitz + Close",
        "tasks": [
          "Complete all pending interviews",
          "Follow up aggressively (every 3 days)",
          "Accept best offer OR decide to contract/freelance",
          "If still 0 offers → move to Option B"
        ]
      }
    ],
    "target": "$130K-$150K (adjusted down from $140K-$170K)",
    "success_rate": "~60% if you had 1+ final rounds in first 8 weeks"
  },
  "option_b_contracting": {
    "title": "Option B: Pivot to Contracting / Freelance (Weeks 9-16)",
    "when_to_choose": "0 offers after 12 weeks, OR offers are all below $120K, OR you prefer independence over employment",
    "actions": [
      {
        "phase": "Weeks 9-10",
        "focus": "Set up freelance business",
        "tasks": [
          "Create LLC ($500 via Stripe Atlas)",
          "Set up business bank account",
          "Create simple website: services, case studies, contact",
          "Define 3 service packages: Architecture Audit ($3K), Feature Build ($5K/week), Advisory ($2K/month)",
          "Join Toptal, Gun.io, A.Team applications"
        ]
      },
      {
        "phase": "Weeks 11-12",
        "focus": "Land first client",
        "tasks": [
          "Reach out to 20 startups via LinkedIn/Wellfound",
          "Offer free 30-minute architecture audit (converts to paid)",
          "Target: 1 client at $5K/week or 2 clients at $2.5K/week",
          "Document everything for future case studies"
        ]
      },
      {
        "phase": "Weeks 13-16",
        "focus": "Stabilize income",
        "tasks": [
          "Deliver for first client, get testimonial",
          "Land second client via referral",
          "Target: $8K-$12K/month consistent income",
          "Continue job search part-time (2-3 applications/week)",
          "If full-time offer comes in above $140K → accept and wind down clients gracefully"
        ]
      }
    ],
    "target": "$100K-$150K first year (lower base but higher growth potential)",
    "success_rate": "~70% if you have portfolio + blog + network from first 8 weeks"
  },
  "option_c_stay_current": {
    "title": "Option C: Stay at Current Company + Internal Promotion Track",
    "when_to_choose": "Current company has promotion path, OR market is down (hiring freeze), OR personal reasons (visa, family, location)",
    "actions": [
      {
        "phase": "Weeks 9-12",
        "focus": "Document value + Ask for promotion",
        "tasks": [
          "Compile all work from Weeks 1-8: AI feature, New Architecture migration, blog posts, system design docs",
          "Schedule 1:1 with manager: 'I have been leveling up significantly. Can we discuss a promotion to Senior?'",
          "Present business case: 'Here is what I shipped, here is the impact, here is what I want to own next'",
          "If promotion denied → ask for specific timeline and milestones",
          "If no path → quietly restart job search in 3 months"
        ]
      },
      {
        "phase": "Months 4-6",
        "focus": "Build internal authority",
        "tasks": [
          "Lead New Architecture migration at current company (use Zonesso learnings)",
          "Mentor 1 junior engineer",
          "Give internal tech talk on AI integration",
          "Document architecture decisions (ADRs)",
          "If still no promotion by Month 6 → move to Option A or B"
        ]
      }
    ],
    "target": "$110K-$130K internal raise (lower than external but safer)",
    "success_rate": "~40% if company has budget; ~10% if company has freeze"
  },
  "decision_tree": {
    "week_8_check": "Do you have 2+ offers above $130K?",
    "yes": "Proceed to Week 8 (Decision + Transition)",
    "no": {
      "question": "Do you have 1+ final rounds pending or close feedback?",
      "yes": "Option A: Extend 4 weeks",
      "no": {
        "question": "Do you prefer independence over employment?",
        "yes": "Option B: Contracting",
        "no": {
          "question": "Does current company have promotion path?",
          "yes": "Option C: Stay + promote",
          "no": "Option A: Extend search + lower target"
        }
      }
    }
  },
  "mental_health_note": "Job search failure is normal. 80% of developers take 3-6 months to find the right role. The skills you built in Weeks 1-8 (AI, New Architecture, system design) are permanent assets. Do not abandon the roadmap. Adjust the timeline, not the destination."
};
