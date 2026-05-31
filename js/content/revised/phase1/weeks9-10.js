export const WEEKS = [
  {
    "id": "w9",
    "num": "WEEK 09",
    "title": "Job Hunt: Research & First Wave",
    "theme": "Market Entry",
    "color": "#f97316",
    "boss": {
      "id": "boss-w9",
      "name": "The Sniper",
      "challenge": "Research 40 companies, send 20 personalized applications, get 5+ recruiter responses",
      "rewardXP": 500,
      "resumeLine": "Executed targeted job search with personalized applications resulting in multiple interview opportunities",
      "successCriteria": [
        "40 companies researched and ranked by fit",
        "20 personalized applications sent (not bulk)",
        "5+ recruiter or hiring manager responses",
        "3+ intro calls or phone screens scheduled",
        "Tracking spreadsheet with status for every app",
        "5 LinkedIn DMs sent to hiring managers with specific value props"
      ],
      "howToComplete": [
        "Find roles on LinkedIn, Wellfound, AngelList, RemoteOK",
        "Filter: full-stack, backend (Node.js), or mobile-full-stack. Series A–C preferred.",
        "Customize resume version per role type",
        "Write cover note referencing their product, stack, or recent news",
        "Find hiring manager on LinkedIn, send 2-sentence personalized DM",
        "Track everything: company, role, date, contact, status, follow-up date"
      ],
      "deliverables": [
        "Research spreadsheet with 40 companies",
        "20 application confirmations",
        "5+ response screenshots",
        "3+ scheduled call confirmations",
        "5 DM screenshots"
      ],
      "passFail": {
        "pass": "20 quality apps + 5 responses + 3 calls scheduled",
        "fail": "Mass-applying generic resumes with zero responses"
      }
    },
    "tasks": [
      {
        "id": "w9-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Research 20 companies on LinkedIn Jobs: filter by Full-Stack, Node.js, React Native, Remote. Save job postings.",
        "reason": "15 perfect-fit applications beat 50 random ones. Be surgical."
      },
      {
        "id": "w9-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w9-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Research 20 more companies on Wellfound + AngelList. Startups often pay more for full-stack generalists.",
        "reason": "Startups need full-stack engineers who can wear many hats. That's you."
      },
      {
        "id": "w9-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Send 8 personalized applications: customize resume version, write cover note referencing their product or tech stack",
        "reason": "Personalized apps get 5x response rates. Mention their API, their mobile app, their recent funding."
      },
      {
        "id": "w9-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w9-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Send 7 more apps + 3 LinkedIn DMs to hiring managers: 'I noticed you're hiring for X. I just shipped Y with Node.js + PostgreSQL + Docker. Would love to chat.'",
        "reason": "Hiring managers are humans. A specific 'I can solve X' message gets replies."
      },
      {
        "id": "w9-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Send 5 final apps + 2 more DMs. Apply via referrals from Week 8 connections if possible.",
        "reason": "Referred candidates get interviews 8x more often. Use your network."
      },
      {
        "id": "w9-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w9-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Set up tracking spreadsheet: Company | Role | Date Applied | Contact | Status | Follow-up Date | Notes",
        "reason": "Without tracking, you forget to follow up. Follow-up is where offers happen."
      },
      {
        "id": "w9-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Follow up on all applications sent 5+ days ago. Send value-add update: 'I just published this blog about scaling Node.js APIs.'",
        "reason": "'Just checking in' is ignored. 'I built this' gets attention."
      },
      {
        "id": "w9-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      }
    ]
  },
  {
    "id": "w10",
    "num": "WEEK 10",
    "title": "Interview Prep Intensive",
    "theme": "Sharpen the Axe",
    "color": "#ec4899",
    "boss": {
      "id": "boss-w10",
      "name": "The Grinder",
      "challenge": "Complete 5 mock interviews: system design, behavioral, coding, backend deep-dive, full-stack architecture",
      "rewardXP": 500,
      "resumeLine": "Prepared rigorously through daily mock interviews covering system design, behavioral, and coding rounds",
      "successCriteria": [
        "5 mock interviews completed with feedback documented",
        "System design: explain URL shortener or chat app in 15 minutes with trade-offs",
        "Behavioral: 5 STAR stories polished, each 2–3 minutes, quantified impact",
        "Coding: 10 easy + 5 medium LeetCode problems solved with optimal complexity",
        "Backend deep-dive: explain PostgreSQL indexing, Docker layers, JWT flow, caching strategy",
        "Full-stack architecture: explain your Zonesso project end-to-end in 10 minutes"
      ],
      "howToComplete": [
        "Practice system design daily: draw, explain, defend",
        "Practice 1 behavioral story daily: record, time, refine",
        "Do 1 LeetCode easy/medium every other day: focus on arrays, hash maps, two pointers",
        "Do 1 mock with peer, friend, or Pramp",
        "Record yourself, review filler words ('um', 'like', 'you know')",
        "Prepare 'Tell me about yourself' — 60 seconds, mobile → backend → full-stack arc"
      ],
      "deliverables": [
        "Mock interview notes (5 sessions)",
        "Behavioral story doc (5 stories)",
        "LeetCode submission screenshots",
        "System design recording",
        "'Tell me about yourself' script"
      ],
      "passFail": {
        "pass": "Can handle any interview question without freezing, with structured answers",
        "fail": "Winging it, no stories prepared, no system design practice"
      }
    },
    "tasks": [
      {
        "id": "w10-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Mock system design: design chat app. Draw architecture, explain WebSockets vs SSE, message storage, read receipts. Record 15 min.",
        "reason": "System design is the gatekeeper for $120K+ roles. Practice out loud."
      },
      {
        "id": "w10-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w10-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Practice 2 STAR stories: (1) Leading mobile team under deadline, (2) Optimizing app performance. Record, time to 2–3 min.",
        "reason": "Behavioral rounds filter out brilliant jerks. Have stories ready."
      },
      {
        "id": "w10-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Coding practice: 3 LeetCode mediums (arrays, hash maps). Focus on optimal time/space complexity. Explain out loud.",
        "reason": "Process matters more than answer. Talk through your thinking."
      },
      {
        "id": "w10-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w10-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Backend deep-dive mock: explain PostgreSQL indexing, Docker multi-stage builds, JWT auth flow, Redis caching. No notes.",
        "reason": "Backend roles will grill you on these four topics. Know them cold."
      },
      {
        "id": "w10-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Full-stack architecture mock: explain Zonesso end-to-end in 10 min. Mobile → API → DB → Cache → Deployment.",
        "reason": "Your project is your best proof. Be able to explain it better than your resume."
      },
      {
        "id": "w10-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w10-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Peer mock interview: use Pramp or ask a friend. Get brutal feedback on clarity, speed, depth.",
        "reason": "Realistic pressure reveals gaps. Friendly mocks are too nice."
      },
      {
        "id": "w10-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Review all recordings, create improvement checklist: top 3 weaknesses to fix before live interviews",
        "reason": "Self-review is painful but necessary. Fix your top 3 gaps."
      },
      {
        "id": "w10-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      }
    ]
  }
];

export const DETAILS = {
  "w9-d1": {
    "objective": "Establish a high-signal target list of companies where your specialized skills solve clear business problems",
    "why": "Selection is the most important part of the job hunt. Focusing on companies that value both Mobile and Backend engineering increases your leverage for higher salary offers.",
    "steps": [
      "Define your 'Niche': e.g., 'React Native expert with high-scale Node.js experience'.",
      "Filter LinkedIn Jobs by 'Full-Stack' + 'Remote' + 'Posted within 24 hours'.",
      "Rank companies by 'Need': do they have a mobile app that needs an overhaul? Is their backend scaling?",
      "Identify the 'Recruiter' or 'Engineering Manager' for your top 5 targets."
    ],
    "tools": ["LinkedIn Premium", "Crunchbase", "Notion"],
    "deliverable": "A ranked list of 20 high-ROI job opportunities",
    "definitionOfDone": "List contains company names, role links, and specific 'Pain Points' you can solve",
    "commonMistakes": ["Applying to everything without checking the tech stack or company health"],
    "resumeLine": null,
    "connectsTo": "w9-d2"
  },
  "w9-d2": {
    "objective": "Expand your target pool into high-growth startups and the YC ecosystem",
    "why": "Startups often have fewer applicants and higher technical bars. They value generalist 'Solvers' over specialist 'Coders'.",
    "steps": [
      "Use Wellfound (AngelList) to filter by 'Active Hiring' and 'Venture Backed'.",
      "Look for roles that mention 'Founding Engineer' or 'Product Engineer'.",
      "Note the 'Salary + Equity' ranges to baseline your market value.",
      "Check company Glassdoor/Blind for culture signals and interview transparency."
    ],
    "tools": ["Wellfound", "Blind", "Glassdoor"],
    "deliverable": "20 additional vetted startup opportunities",
    "definitionOfDone": "The search pool is expanded with 20+ roles that offer high equity and technical ownership",
    "commonMistakes": ["Ignoring companies that don't list a salary (it's often negotiable)"],
    "resumeLine": null,
    "connectsTo": "w9-d3"
  },
  "w9-d3": {
    "objective": "Submit high-conversion applications that demonstrate immediate technical value",
    "why": "The average job posting gets 200+ resumes. Personalization is the only way to ensure yours is read by a human.",
    "steps": [
      "Match your resume Version (A/B/C) to the JD keywords.",
      "Write a 'Personalized Hook': 'I just read your engineering blog on X and think my experience with Y could help.'",
      "Attach a link to your polished project README or Demo GIF.",
      "Log the submission time and exact version of the resume sent."
    ],
    "tools": ["Custom Cover Letter Templates", "Job Search CRM"],
    "deliverable": "8 submitted high-signal applications",
    "definitionOfDone": "Each submission has a unique, non-generic intro that references the company's product",
    "commonMistakes": ["Sending the 'Backend' resume to a 'Staff Mobile' role"],
    "resumeLine": null,
    "connectsTo": "w9-d4"
  },
  "w9-d4": {
    "objective": "Bypass the 'ATS Black Hole' through direct hiring manager outreach",
    "why": "Decision makers care about results. A direct message that solves a problem gets you a phone screen faster than any application portal.",
    "steps": [
      "Find the hiring manager (EM or CTO) on LinkedIn.",
      "Send a connection request + note: 'Just applied for X. I'm the one who optimized Zonesso's API latency by 40%. Would love to chat.'",
      "Keep it low pressure: you are an expert offering a solution, not a seeker asking for a favor.",
      "Follow up on 3 DMs from yesterday."
    ],
    "tools": ["LinkedIn DMs", "Hunter.io (for email)"],
    "deliverable": "7 apps + 3 direct human touchpoints",
    "definitionOfDone": "At least 3 direct conversations are initiated with technical leaders",
    "commonMistakes": ["Asking for a referral in the first message (build rapport first)"],
    "resumeLine": null,
    "connectsTo": "w9-d5"
  },
  "w9-d5": {
    "objective": "Leverage your warm network and community signals for inbound leads",
    "why": "80% of roles are filled through referrals. You have built authority over 8 weeks; now is the time to cash it in.",
    "steps": [
      "Reach out to connections from Week 8.",
      "Share your new 'Full-Stack' resume and ask for internal intros.",
      "Check Slack communities (e.g., ZTM, React Native) for 'Hiring' channels.",
      "Apply to 5 roles where you have a direct connection or referral code."
    ],
    "tools": ["Inner Circle Network", "Slack Communities"],
    "deliverable": "5 referral-backed applications",
    "definitionOfDone": "Your resume is placed directly in front of the hiring team via an internal advocate",
    "commonMistakes": ["Being afraid to ask for a referral (most people get a bonus for it!)"],
    "resumeLine": null,
    "connectsTo": "w9-d6"
  },
  "w9-d6": {
    "objective": "Establish a professional workflow for managing a high-volume interview pipeline",
    "why": "Disorganization leads to missed follow-ups and lost leverage. A CRM ensures you never miss a beat.",
    "steps": [
      "Set up a board with columns: Target, Applied, Phone Screen, Tech Round, Final, Offer.",
      "Set 'Auto-Reminder' for follow-up emails every 5 days of silence.",
      "Link recruiters, meeting notes, and salary data to each company card.",
      "Audit your 'Conversion Rate' (how many apps -> responses?)."
    ],
    "tools": ["Trello", "Notion Job Tracker"],
    "deliverable": "Operational Job Search CRM",
    "definitionOfDone": "Every pending application has a status and a 'Next Follow-up' date",
    "commonMistakes": ["Keeping the search status in a spreadsheet with no reminders"],
    "resumeLine": null,
    "connectsTo": "w9-d7"
  },
  "w9-d7": {
    "objective": "Re-activate dormant applications through strategic value-add follow-ups",
    "why": "Silence is usually just a busy recruiter. A professional, technical follow-up signals persistence and high value.",
    "steps": [
      "Identify 5 roles that haven't responded in 5+ days.",
      "Send a follow-up: 'Just wanted to share this blog I wrote on refactoring legacy APIs while we wait for feedback.'",
      "Check LinkedIn for any status updates from those companies.",
      "Prepare your technical 'Cheat Sheet' for upcoming screens next week."
    ],
    "tools": ["Follow-up Templates", "Email Tracking"],
    "deliverable": "5 strategic follow-up emails sent",
    "definitionOfDone": "Every 'Applied' role has been touched at least once this week",
    "commonMistakes": ["Sending 'Just checking in' with no new value"],
    "resumeLine": null,
    "connectsTo": "w10-d1"
  },
  "w10-d1": {
    "objective": "Master the delivery of complex system design walkthroughs",
    "why": "System design is where Staff-level candidates prove they can think about the whole business, not just the code.",
    "steps": [
      "Topic: Design a real-time Chat App with 1M users.",
      "Draw: CDN, Load Balancer, WebSocket Manager, Message DB, Cache.",
      "Explain the trade-off of WebSockets vs SSE for mobile battery life.",
      "Justify the storage choice (e.g., Cassandra for horizontal scaling).",
      "Record and critique: are you rambling or being precise?"
    ],
    "tools": ["Excalidraw", "DDIA Summary"],
    "deliverable": "Polished System Design recording",
    "definitionOfDone": "You can design and defend a chat architecture in under 15 minutes",
    "commonMistakes": ["Getting stuck on minor UI details; focus on high-level data flow"],
    "resumeLine": null,
    "connectsTo": "w10-d2"
  },
  "w10-d2": {
    "objective": "Hardize your 'Identity Shift' narrative through high-impact STAR stories",
    "why": "Behavioral rounds test if you can lead. Your stories must prove you solve technical problems AND people problems.",
    "steps": [
      "Story 1 (Leadership): Managing a mobile migration while mentoring a junior.",
      "Story 2 (Performance): Optimizing an API and measuring the response time drop.",
      "Use the 'Metric-First' rule: start with the result (%, $, time).",
      "Record each story and time it to exactly 120 seconds."
    ],
    "tools": ["Behavioral Library", "Voice Memos"],
    "deliverable": "5 'Stage-Ready' STAR stories",
    "definitionOfDone": "Stories are memorized and delivered with confidence and clear measurable results",
    "commonMistakes": ["Rambling without a clear Result (The 'R' in STAR)"],
    "resumeLine": null,
    "connectsTo": "w10-d3"
  },
  "w10-d3": {
    "objective": "Develop the 'Think Out Loud' habit for live coding interviews",
    "why": "Interviewers care more about your process than the final answer. Constant communication is your technical safety net.",
    "steps": [
      "Solve 3 LeetCode Mediums (Arrays/Strings).",
      "State assumptions first (e.g., 'Is the input sorted?').",
      "Explain the Big O of your brute force approach, then optimize.",
      "Talk through every single line of code as you write it."
    ],
    "tools": ["LeetCode", "Recorder"],
    "deliverable": "3 solved Mediums with documented verbal process",
    "definitionOfDone": "You can solve a new problem while maintaining a constant technical monologue",
    "commonMistakes": ["Silent coding; the interviewer can't help you if they don't know your plan"],
    "resumeLine": "Mastered technical interview patterns for algorithms and data structures",
    "connectsTo": "w10-d4"
  },
  "w10-d4": {
    "objective": "Deepen technical fluency in core backend infrastructure topics",
    "why": "Senior backend roles will grill you on 'How it works under the hood'. Surface knowledge isn't enough.",
    "steps": [
      "Explain B-Tree indexing vs Hash indexing in Postgres.",
      "Describe how Docker layers work and why ordering matters in a Dockerfile.",
      "Walk through a JWT refresh token rotation flow.",
      "Explain Cache Aside vs Write Through strategies in Redis."
    ],
    "tools": ["Postgres Internals", "Docker Docs"],
    "deliverable": "Backend fluency cheat sheet",
    "definitionOfDone": "You can explain these 4 topics to a Principal Engineer without hesitation",
    "commonMistakes": ["Using terms like 'Scale' without explaining *how* (e.g., sharding keys)"],
    "resumeLine": null,
    "connectsTo": "w10-d5"
  },
  "w10-d5": {
    "objective": "Perfect the architectural walkthrough of your flagship project",
    "why": "Your project is your best evidence. You must be able to explain every decision you made during the roadmap.",
    "steps": [
      "Start with the 'Why': 'I moved to Postgres because MongoDB lacked relational integrity for X'.",
      "Walk through the flow: Mobile -> Load Balancer -> Node.js -> Redis -> Postgres.",
      "Explain 1 mistake you made and how you refactored it (Week 6 work).",
      "Mention your CI/CD pipeline and test coverage."
    ],
    "tools": ["Your GitHub Repo", "Architecture Diagram"],
    "deliverable": "Flagship Project Presentation script",
    "definitionOfDone": "You can present your full stack in 10 minutes with zero 'ums' and high confidence",
    "commonMistakes": ["Being too humble; highlight the architectural complexity YOU handled"],
    "resumeLine": null,
    "connectsTo": "w10-d6"
  },
  "w10-d6": {
    "objective": "Stress-test your interview readiness under realistic pressure",
    "why": "Friendly mocks are too easy. You need feedback from strangers to find your true blind spots.",
    "steps": [
      "Book a Pramp session or reach out to a mentor for a 'Brutal Mock'.",
      "Request feedback on: Tone, Speed, Technical Depth, and Body Language.",
      "Write down the 3 hardest questions you were asked.",
      "Draft the 'Ideal' answers to those questions."
    ],
    "tools": ["Pramp", "LinkedIn Network"],
    "deliverable": "External Mock Scorecard and gap analysis",
    "definitionOfDone": "Session completed and 3+ specific improvements identified",
    "commonMistakes": ["Defending your answers instead of listening to the feedback"],
    "resumeLine": null,
    "connectsTo": "w10-d7"
  },
  "w10-d7": {
    "objective": "Finalize your 'Interview Playbook' and prioritize recovery",
    "why": "Preparation is done. Now you need to maximize your cognitive energy for the live execution phase.",
    "steps": [
      "Review your 'Identity Shift' post (Week 8) to ground your confidence.",
      "Organize your workspace: lighting, audio, second monitor for diagrams.",
      "Plan your 'Uniform' (wear something that makes you feel senior).",
      "Stop technical study by 2 PM. Rest is a technical advantage."
    ],
    "tools": ["Workspace Setup", "Mental Prep"],
    "deliverable": "Final Interview Readiness Checklist",
    "definitionOfDone": "You feel 100% prepared, rested, and high-energy for Week 11",
    "commonMistakes": ["Cramming until 2 AM; rest is 30% of your performance"],
    "resumeLine": null,
    "connectsTo": "Week 11"
  }
};
