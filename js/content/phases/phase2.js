/**
 * Phase 2: Apply Aggressively (Weeks 7-14, parallel with Phase 1)
 * Volume + targeting. Start ~Week 7 once interview-ready. Don't apply before.
 * Matches the existing repo schema: WEEKS[] + DETAILS{} keyed by task id.
 */

export const SCHEMA = {
  "version": "2.0",
  "structure": "normalized",
  "note": "Phase 2: Apply Aggressively (Weeks 7-14), overlapping Phase 1. Math: ~50 quality apps -> 3-5 interview processes -> 1-2 offers. Pipeline takes 8-12 weeks. Target: 15-25 LPA Indian product company OR 3-5 lakh/mo remote. Do NOT quit current job until a signed offer is in hand.",
  "layers": {
    "roadmap": "core task objects",
    "details": "taskDetails map keyed by task.id",
    "boss": "boss battle object per week"
  }
};

export const WEEKS = [
  {
    "id": "p2w1",
    "num": "WEEK 07-08",
    "title": "First Wave + Referrals",
    "theme": "Get in the Pipeline",
    "color": "#10b981",
    "boss": {
      "id": "boss-p2w1",
      "name": "The Networker",
      "challenge": "Send 15 personalized applications and activate 5 warm referral requests",
      "rewardXP": 600,
      "resumeLine": null,
      "successCriteria": [
        "15 personalized applications sent and tracked",
        "5 referral requests sent to contacts at target companies",
        "5 hiring managers DM'd with specific value props",
        "Every application logged with status and follow-up date"
      ],
      "howToComplete": [
        "Use the 30-company list from Phase 0",
        "Customize resume per role type",
        "Add a 3-sentence note referencing each company's product/stack",
        "Log everything in the tracker"
      ],
      "deliverables": ["15 applications", "5 referral requests", "5 hiring-manager DMs"],
      "passFail": {
        "pass": "15 quality apps + referrals in motion",
        "fail": "Generic mass-applying or no referrals used"
      }
    },
    "tasks": [
      {
        "id": "p2-w1-firstwave",
        "day": "Day 1-3",
        "time": "6h",
        "depth": "Deep",
        "xp": 200,
        "text": "Send first 15 personalized applications from the 30-company list",
        "reason": "Personalized apps get ~5x the response of generic blasts"
      },
      {
        "id": "p2-w1-referrals",
        "day": "Day 4-5",
        "time": "3h",
        "depth": "Medium",
        "xp": 150,
        "text": "Activate referrals: ask contacts for warm intros, DM 5 hiring managers",
        "reason": "Referred candidates get interviews ~8x more often than cold applicants"
      }
    ]
  },
  {
    "id": "p2w2",
    "num": "WEEK 09-12",
    "title": "Sustained Volume",
    "theme": "Keep the Funnel Full",
    "color": "#0ea5e9",
    "boss": {
      "id": "boss-p2w2",
      "name": "The Machine",
      "challenge": "Reach 30-50 total applications with consistent weekly volume and disciplined follow-up",
      "rewardXP": 700,
      "resumeLine": null,
      "successCriteria": [
        "30-50 total applications sent",
        "10-15 remote roles added (Wellfound, RemoteRocketship)",
        "Follow-up every 5-7 days with value-add",
        "Recruiter replies answered within 4 hours"
      ],
      "howToComplete": [
        "Send 5-10 quality apps/week",
        "Add remote roles to the mix (avoid US-only)",
        "Follow up on every open application",
        "Keep the tracker current"
      ],
      "deliverables": ["30-50 total applications", "Active follow-up log", "Recruiter pipeline"],
      "passFail": {
        "pass": "30+ apps with disciplined follow-up",
        "fail": "Stalled after the first wave, no follow-up"
      }
    },
    "tasks": [
      {
        "id": "p2-w2-volume",
        "day": "Weekly",
        "time": "3h/week",
        "depth": "Medium",
        "xp": 200,
        "text": "Send 5-10 quality apps/week; add 10-15 remote roles to reach 30-50 total",
        "reason": "Math: 5-10% response means ~50 apps for 1-2 offers"
      },
      {
        "id": "p2-w2-followup",
        "day": "Ongoing",
        "time": "1h/week",
        "depth": "Action",
        "xp": 150,
        "text": "Follow up every 5-7 days with value-add; reply to recruiters within 4h",
        "reason": "Follow-up is where most offers actually come from — most people skip it"
      }
    ]
  },
  {
    "id": "p2w3",
    "num": "WEEK 11-14",
    "title": "Interviews + Negotiate",
    "theme": "Close the Deal",
    "color": "#f59e0b",
    "boss": {
      "id": "boss-p2w3",
      "name": "The Negotiator",
      "challenge": "Convert interviews into 1-2 offers and negotiate up to 15-22 LPA",
      "rewardXP": 1000,
      "resumeLine": null,
      "successCriteria": [
        "Every interview followed by a thank-you within 4 hours",
        "Every question documented for reuse",
        "Salary bands researched before each recruiter call",
        "1-2 offers secured and negotiated up"
      ],
      "howToComplete": [
        "Complete all interview rounds",
        "Use the prepared Zonesso walkthrough and STAR stories",
        "Research comp before talking numbers",
        "Use competing offers as leverage; don't accept the first low number"
      ],
      "deliverables": ["Interview question log", "1-2 offers", "Negotiated final number"],
      "passFail": {
        "pass": "Signed offer at 15+ LPA (3-5x current)",
        "fail": "Accepting first 10-12 LPA offer without negotiating"
      }
    },
    "tasks": [
      {
        "id": "p2-w3-interviews",
        "day": "Ongoing",
        "time": "variable",
        "depth": "Deep",
        "xp": 300,
        "text": "Complete interviews: thank-you within 4h, document every question",
        "reason": "Documented questions recur; thank-yous keep you top-of-mind"
      },
      {
        "id": "p2-w3-negotiate",
        "day": "At offer",
        "time": "3h",
        "depth": "Deep",
        "xp": 400,
        "text": "Negotiate: research bands, hold for 15-22 LPA, leverage competing offers",
        "reason": "Negotiation is the highest-ROI hour of the whole search"
      }
    ]
  }
];

export const DETAILS = {
  "p2-w1-firstwave": {
    "objective": "Send the first 15 highly personalized applications.",
    "why": "Personalized applications get roughly 5x the response of generic blasts. Your first wave targets your highest-fit companies while you're freshest.",
    "steps": [
      "Pull the top 15 from your 30-company list, ranked by fit.",
      "Tailor the resume per role type (RN-heavy vs full-stack-leaning).",
      "Write a 3-sentence note per company referencing their product, stack, or recent news.",
      "Apply through referral where possible, else the careers page (not just LinkedIn Easy Apply).",
      "Log each: company, role, date, contact, status, next follow-up date."
    ],
    "tools": ["Tracker", "LinkedIn", "Company careers pages"],
    "deliverable": "15 personalized applications sent and logged.",
    "definitionOfDone": "15 apps submitted, each customized, all tracked with follow-up dates.",
    "commonMistakes": ["Generic copy-paste applications", "Easy Apply only (low signal)", "Not logging them"],
    "resumeLine": null,
    "connectsTo": "p2-w1-referrals"
  },
  "p2-w1-referrals": {
    "objective": "Activate your network for warm referrals.",
    "why": "Referred candidates get interviews about 8x more often than cold applicants. Your India-company network is an underused asset.",
    "steps": [
      "List everyone you know at target companies (ex-colleagues, college, LinkedIn).",
      "Send a specific ask: 'I'm applying to X for the Y role — would a referral be possible?'",
      "DM 5 hiring managers with a one-line value prop tied to their team.",
      "Track who you've asked and follow up politely if no reply in a week."
    ],
    "tools": ["LinkedIn", "WhatsApp", "Tracker"],
    "deliverable": "5 referral requests + 5 hiring-manager DMs sent.",
    "definitionOfDone": "5 warm intros requested and 5 HMs contacted, all logged.",
    "commonMistakes": ["Vague 'can you help me get a job' asks", "Not following up", "Ignoring weak ties (they often help most)"],
    "resumeLine": null,
    "connectsTo": "p2-w2-volume"
  },
  "p2-w2-volume": {
    "objective": "Sustain 5-10 quality applications per week to reach 30-50 total.",
    "why": "It's a numbers game with a 5-10% response rate. ~50 quality apps yields 3-5 interview processes and 1-2 offers.",
    "steps": [
      "Send 5-10 tailored apps each week — quality over raw volume.",
      "Add 10-15 remote roles via Wellfound and RemoteRocketship (avoid US-only due to geo-adjustment).",
      "Keep customizing; reuse a template but always tailor the opening.",
      "Update the tracker after every batch."
    ],
    "tools": ["Wellfound", "RemoteRocketship", "LinkedIn", "Tracker"],
    "deliverable": "30-50 total applications.",
    "definitionOfDone": "30+ apps sent across Indian + remote roles, all tracked.",
    "commonMistakes": ["Burning out with a single huge batch then stopping", "US-only remote (pay gets geo-adjusted down)", "Dropping personalization"],
    "resumeLine": null,
    "connectsTo": "p2-w2-followup"
  },
  "p2-w2-followup": {
    "objective": "Follow up consistently and respond to recruiters fast.",
    "why": "Follow-up is where most offers actually originate, and most candidates never do it. Speed signals seriousness.",
    "steps": [
      "Follow up on each open application every 5-7 days with a value-add (a new post, a relevant project update).",
      "Reply to any recruiter within 4 hours; schedule calls within 48 hours.",
      "Keep a 'next action + date' column in the tracker for every live thread.",
      "Politely close out dead leads so the funnel stays clean."
    ],
    "tools": ["Tracker", "Email", "LinkedIn"],
    "deliverable": "An active, disciplined follow-up log.",
    "definitionOfDone": "Every live application has a logged next-action date; recruiters answered within 4h.",
    "commonMistakes": ["Going silent after applying", "Slow recruiter replies", "No system for who to follow up when"],
    "resumeLine": null,
    "connectsTo": "p2-w3-interviews"
  },
  "p2-w3-interviews": {
    "objective": "Run interviews well and capture every question.",
    "why": "The pipeline takes 8-12 weeks and questions recur across companies. Thank-yous and documentation compound your advantage.",
    "steps": [
      "Use your prepared Zonesso walkthrough, STAR stories, and system-design checklist.",
      "Send a thank-you email within 4 hours referencing a specific discussion point.",
      "Document every question asked (coding, design, behavioral) right after each round.",
      "Review and patch any weak answer before the next interview."
    ],
    "tools": ["Your prep notes", "Tracker", "Email"],
    "deliverable": "A growing interview-question log + thank-you cadence.",
    "definitionOfDone": "Every interview has a thank-you sent and questions logged within 24h.",
    "commonMistakes": ["Not sending thank-yous", "Forgetting questions (you'll see them again)", "Not patching weak answers between rounds"],
    "resumeLine": null,
    "connectsTo": "p2-w3-negotiate"
  },
  "p2-w3-negotiate": {
    "objective": "Negotiate offers up to the 15-22 LPA range.",
    "why": "Negotiation is the single highest-ROI hour of the whole search. Most people accept the first number and leave lakhs on the table — especially dangerous coming from a 57K/mo anchor.",
    "steps": [
      "Research salary bands for each role before talking numbers (AmbitionBox, levels.fyi).",
      "Never anchor on your current salary — anchor on market rate for 4 YOE.",
      "If you have competing offers, use them as leverage (factually, not bluffing).",
      "Don't accept the first 10-12 LPA offer; hold for 15-22 LPA.",
      "Get the final offer in writing before resigning."
    ],
    "tools": ["AmbitionBox", "levels.fyi", "Email"],
    "deliverable": "1-2 negotiated offers, signed.",
    "definitionOfDone": "A signed offer at 15+ LPA (3-5x current), in writing.",
    "commonMistakes": ["Revealing current salary as the anchor", "Accepting the first number", "Resigning before the offer is in writing"],
    "resumeLine": null,
    "connectsTo": null
  }
};

export const PHASE_2_WEEKS = WEEKS;
export const TASK_DETAILS = DETAILS;
