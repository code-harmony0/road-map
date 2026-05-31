export const WEEKS = [
  {
    "id": "w21",
    "num": "WEEK 21",
    "title": "Job Hunt: Research & Apply",
    "theme": "Market Entry",
    "color": "#d946ef",
    "boss": {
      "id": "boss-w21",
      "name": "The Sniper",
      "challenge": "Research 30 companies, send 15 personalized applications",
      "rewardXP": 500,
      "resumeLine": "Executed targeted job search with personalized applications",
      "successCriteria": [
        "30 companies researched",
        "3 tailored resumes",
        "15 personalized apps sent",
        "5 LinkedIn DMs",
        "Tracking spreadsheet created"
      ],
      "howToComplete": [
        "Find roles on LinkedIn, Wellfound, AngelList",
        "Filter: mobile + AI need, Series A-C, remote",
        "Customize resume per role type",
        "Write cover notes referencing their product",
        "Track everything"
      ],
      "deliverables": [
        "Research spreadsheet",
        "3 resumes",
        "15 confirmations",
        "5 DM screenshots"
      ],
      "passFail": {
        "pass": "15 quality apps + 5 DMs + tracking",
        "fail": "Mass-applying generic resumes"
      }
    },
    "tasks": [
      {
        "id": "w21-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Research 30 companies, rank top 15 by fit",
        "reason": "15 perfect fits beat 50 random apps."
      },
      {
        "id": "w21-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Create 3 resume versions: AI Engineer, Mobile AI, Full-Stack",
        "reason": "Tailoring signals intent."
      },
      {
        "id": "w21-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Send 8 apps with personalized cover notes",
        "reason": "Personalized apps get 5x response rates."
      },
      {
        "id": "w21-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Send 7 apps + 3 DMs to hiring managers",
        "reason": "Hiring managers are humans."
      },
      {
        "id": "w21-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Apply via referrals from Week 20 connections",
        "reason": "Referred candidates get interviews 8x more often."
      },
      {
        "id": "w21-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Set up tracking: company, role, date, contact, status, follow-up",
        "reason": "Without tracking, you forget to follow up."
      },
      {
        "id": "w21-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Follow up on apps, research salaries on Levels.fyi",
        "reason": "Know your value before they call."
      }
    ]
  },
  {
    "id": "w22",
    "num": "WEEK 22",
    "title": "Job Hunt: Interview Prep",
    "theme": "Sharpen Skills",
    "color": "#8b5cf6",
    "boss": {
      "id": "boss-w22",
      "name": "The Grinder",
      "challenge": "Complete 5 mock interviews and practice daily",
      "rewardXP": 500,
      "resumeLine": "Prepared rigorously through daily system design and behavioral practice",
      "successCriteria": [
        "5 mock interviews completed",
        "System design under 15 min with trade-offs",
        "5 STAR stories polished",
        "10 easy + 5 medium LeetCode done",
        "Feedback documented"
      ],
      "howToComplete": [
        "Practice system design daily",
        "Practice 1 behavioral story daily",
        "Do 1 mock with peer or Pramp",
        "Complete 2 LeetCode every other day",
        "Record yourself"
      ],
      "deliverables": [
        "Mock notes",
        "Practice recordings",
        "Behavioral story doc",
        "LeetCode screenshot"
      ],
      "passFail": {
        "pass": "5 mocks + polished stories + LeetCode practice",
        "fail": "No practice, winging it"
      }
    },
    "tasks": [
      {
        "id": "w22-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Mock system design: chat app. Record. Review.",
        "reason": "Gatekeeper for $150K+ roles."
      },
      {
        "id": "w22-d2",
        "day": "Day 2",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Practice 2 STAR stories, record, time to 2-3 min",
        "reason": "Behavioral filters out brilliant jerks."
      },
      {
        "id": "w22-d3",
        "day": "Day 3",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Mock coding: 2 LeetCode mediums, think out loud",
        "reason": "Process matters, not just answer."
      },
      {
        "id": "w22-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Mock system design 2: URL shortener with analytics",
        "reason": "Variety prevents memorization."
      },
      {
        "id": "w22-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Practice 2 more STAR stories, get external feedback",
        "reason": "External feedback catches blind spots."
      },
      {
        "id": "w22-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Mock with peer or Pramp, get detailed feedback",
        "reason": "Realistic pressure reveals gaps."
      },
      {
        "id": "w22-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Review feedback, create improvement checklist",
        "reason": "Fix your top 3 weaknesses."
      }
    ]
  },
  {
    "id": "w23",
    "num": "WEEK 23",
    "title": "Job Hunt: Execute",
    "theme": "Close Deals",
    "color": "#06b6d4",
    "boss": {
      "id": "boss-w23",
      "name": "The Closer",
      "challenge": "Complete live interviews, follow up, push 2+ to final round",
      "rewardXP": 600,
      "resumeLine": "Advanced to final rounds through strong interview performance",
      "successCriteria": [
        "All scheduled interviews completed",
        "2+ roles in final round or offer stage",
        "Every application followed up",
        "Negotiation script prepared",
        "References ready"
      ],
      "howToComplete": [
        "Complete every interview with confidence",
        "Send thank-you email within 4 hours",
        "Follow up every 5-7 days",
        "Prepare negotiation script with walk-away number",
        "Line up 3 references"
      ],
      "deliverables": [
        "Interview log",
        "Thank-you emails",
        "Follow-up sheet",
        "Negotiation script",
        "Reference contacts"
      ],
      "passFail": {
        "pass": "2+ final rounds + follow-up + negotiation prep",
        "fail": "Ghosting after interviews"
      }
    },
    "tasks": [
      {
        "id": "w23-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Complete first rounds, send thank-you emails within 4 hours",
        "reason": "Thank-you emails increase offer rates 20%."
      },
      {
        "id": "w23-d2",
        "day": "Day 2",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Complete technical screens, explain trade-offs",
        "reason": "Screen filters 70%. Be in the 30%."
      },
      {
        "id": "w23-d3",
        "day": "Day 3",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Complete take-homes, document your approach",
        "reason": "Show process, not just answer."
      },
      {
        "id": "w23-d4",
        "day": "Day 4",
        "time": "5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Follow up on pending apps, send value-add updates",
        "reason": "'I published this' beats 'just checking in'."
      },
      {
        "id": "w23-d5",
        "day": "Day 5",
        "time": "5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Prepare negotiation script: target, walk-away, competing offers",
        "reason": "Negotiation starts before the offer."
      },
      {
        "id": "w23-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Contact 3 references, brief them on target roles",
        "reason": "Briefed references sell you."
      },
      {
        "id": "w23-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 100,
        "text": "Rest, review notes, visualize success. Confidence > cramming.",
        "reason": "Confidence is the #1 differentiator in final rounds."
      }
    ]
  },
  {
    "id": "w24",
    "num": "WEEK 24",
    "title": "Offer & Transition",
    "theme": "The New Beginning",
    "color": "#10b981",
    "boss": {
      "id": "boss-w24",
      "name": "The Career Architect",
      "challenge": "Negotiate offer, plan 90 days, transition gracefully",
      "rewardXP": 600,
      "resumeLine": "Negotiated competitive offer and planned strategic 90-day entry",
      "successCriteria": [
        "Offer negotiated 10%+ or better equity",
        "90-day plan written",
        "1:1s scheduled with manager",
        "Graceful resignation delivered",
        "LinkedIn announcement posted"
      ],
      "howToComplete": [
        "Use competing offers as leverage",
        "Negotiate total comp: base, equity, bonus, signing, remote",
        "Write 90-day plan: listen → deliver → optimize → lead",
        "Schedule intros before Day 1",
        "Resign gracefully, offer 2+ weeks"
      ],
      "deliverables": [
        "Signed offer",
        "90-day plan",
        "Stakeholder notes",
        "Resignation letter",
        "LinkedIn post"
      ],
      "passFail": {
        "pass": "Signed offer + plan + graceful transition",
        "fail": "Accepting first number with no negotiation"
      }
    },
    "tasks": [
      {
        "id": "w24-d1",
        "day": "Day 1",
        "time": "5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Negotiate: practice with friend, stay data-driven",
        "reason": "Negotiators earn $500K+ more over a career."
      },
      {
        "id": "w24-d2",
        "day": "Day 2",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write 90-day plan: Week 1 (listen), Month 1 (ship), Month 3 (lead)",
        "reason": "First 90 days define reputation."
      },
      {
        "id": "w24-d3",
        "day": "Day 3",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Research team: codebase, on-call, pain points",
        "reason": "Walking in informed is senior."
      },
      {
        "id": "w24-d4",
        "day": "Day 4",
        "time": "5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Schedule pre-start 1:1s with manager and tech lead",
        "reason": "Pre-Day 1 relationships accelerate trust."
      },
      {
        "id": "w24-d5",
        "day": "Day 5",
        "time": "5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Write 12-month goals: promotion criteria, skills, network",
        "reason": "You architect your career."
      },
      {
        "id": "w24-d6",
        "day": "Day 6",
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Write graceful resignation: thank, notice, help, no negativity",
        "reason": "Tech is small. Burn no bridges."
      },
      {
        "id": "w24-d7",
        "day": "Day 7",
        "time": "2.5h",
        "depth": "Action",
        "xp": 125,
        "text": "Celebrate. Post: 'After 6 months of learning, joining [Company] as [Title]'",
        "reason": "Public milestones inspire others and attract the next opportunity."
      }
    ]
  }
];

export const DETAILS = {
  "w21-d1": {
    "objective": "Research 30 companies and identify roles that need your specific Mobile + AI stack",
    "why": "Aim matters more than volume. Targeting companies where your unique skills solve their exact pain points increases callback rates by 5x.",
    "steps": [
      "Search Wellfound, YC Directory, and LinkedIn for roles mentioning 'AI', 'Full-Stack', or 'Mobile'.",
      "Filter for Series A-C startups (high growth, high need).",
      "Rank companies by 'Fit Score' based on their product and tech stack.",
      "Document the hiring manager or key recruiter for each top role."
    ],
    "tools": ["LinkedIn Jobs", "Wellfound", "Crunchbase"],
    "deliverable": "Ranked company target list with 30 entries",
    "definitionOfDone": "List contains roles where your 'Identity Shift' projects provide immediate value",
    "commonMistakes": ["Mass-applying to companies with no mobile focus"],
    "resumeLine": null,
    "connectsTo": "w21-d2"
  },
  "w21-d2": {
    "objective": "Customize your resume into 3 distinct versions for different role families",
    "why": "One resume for all roles signals laziness. Tailoring signals intent and respect for the company's specific needs.",
    "steps": [
      "Version 1 (AI Engineer): Emphasize RAG, Observability, and multi-modal integration.",
      "Version 2 (Mobile AI): Emphasize React Native performance + on-device ML.",
      "Version 3 (Full-Stack): Emphasize Node.js, Docker, and end-to-end delivery.",
      "Run each through an ATS checker."
    ],
    "tools": ["Google Docs", "Resume Worded"],
    "deliverable": "3 tailored resume variants in PDF format",
    "definitionOfDone": "Each version has a unique 'Professional Summary' and re-prioritized project highlights",
    "commonMistakes": ["Only changing the job title"],
    "resumeLine": null,
    "connectsTo": "w21-d3"
  },
  "w21-d3": {
    "objective": "Submit 8 high-quality applications with personalized cover notes",
    "why": "Personalization is the only way to stand out in a crowded market. Referencing their product shows you are already thinking about their business.",
    "steps": [
      "Write a 3-sentence note referencing a specific feature they built or a problem they solve.",
      "Explain how your flagship project solves a similar problem.",
      "Attach the most relevant resume version.",
      "Log the submission date and status."
    ],
    "tools": ["Job tracking spreadsheet", "Wellfound"],
    "deliverable": "8 submitted high-signal applications",
    "definitionOfDone": "Every application has a unique, non-generic intro note",
    "commonMistakes": ["Copy-pasting the same cover letter for every role"],
    "resumeLine": null,
    "connectsTo": "w21-d4"
  },
  "w21-d4": {
    "objective": "Execute a direct-to-hiring-manager outreach campaign",
    "why": "Hiring managers are humans who want their problems solved. A direct, value-add note bypasses the ATS black hole.",
    "steps": [
      "Find the EM or Director of Engineering for your 'Tier 1' target roles.",
      "Send a low-pressure LinkedIn DM: 'Just applied for X, I'm the one who built the RAG system for mobile you might have seen.'",
      "Offer to chat for 15 minutes about their AI roadmap."
    ],
    "tools": ["LinkedIn Premium"],
    "deliverable": "7 sent apps + 3 direct messages to decision-makers",
    "definitionOfDone": "You have established at least one direct human connection with a target company",
    "commonMistakes": ["Asking for a job in the first DM; ask to 'share insights' instead"],
    "resumeLine": null,
    "connectsTo": "w21-d5"
  },
  "w21-d5": {
    "objective": "Leverage your warm network to secure referrals",
    "why": "Referrals are 8x more likely to lead to an interview than cold applications. You have built this network over the last 20 weeks.",
    "steps": [
      "Reach out to your connections from Week 11 and Week 20.",
      "Share your new tailored resume and target role links.",
      "Ask: 'Would you be open to introducing me to the team building X?'",
      "Offer to provide a 'Referral Blurb' to make their job easier."
    ],
    "tools": ["LinkedIn Feed", "Email"],
    "deliverable": "3+ referral-based applications",
    "definitionOfDone": "Your resume has been submitted internally by a current employee",
    "commonMistakes": ["Not giving your referrer a pre-written blurb about why you are a fit"],
    "resumeLine": null,
    "connectsTo": "w21-d6"
  },
  "w21-d6": {
    "objective": "Establish a centralized job search tracking system",
    "why": "A disorganized search leads to missed follow-ups and lost opportunities. You need to manage your pipeline like a sales funnel.",
    "steps": [
      "Create a Kanban board in Trello, Notion, or a spreadsheet.",
      "Columns: Target, Applied, Phone Screen, Tech Interview, Final Round, Offer.",
      "Set reminders for follow-up emails every 7 days.",
      "Document recruiter names and contact info."
    ],
    "tools": ["Notion", "Trello"],
    "deliverable": "Active Job Search CRM",
    "definitionOfDone": "Every pending role has a clear 'Next Action' and status",
    "commonMistakes": ["Keeping the search status 'in your head'"],
    "resumeLine": null,
    "connectsTo": "w21-d7"
  },
  "w21-d7": {
    "objective": "Conduct salary research to prepare for negotiation conversations",
    "why": "Negotiation starts at the first call. Knowing your 'Market Value' prevents you from under-selling yourself early.",
    "steps": [
      "Check levels.fyi for the specific level (Senior/Staff) and company.",
      "Cross-reference with Glassdoor and Blind.",
      "Define your 'Anchor Number', 'Target Number', and 'Walk-Away Number'.",
      "Practice your response to 'What are your salary expectations?'"
    ],
    "tools": ["levels.fyi", "Blind"],
    "deliverable": "Salary benchmark report for your pipeline",
    "definitionOfDone": "You have a justified salary range ready for every role in your 'Applied' column",
    "commonMistakes": ["Giving a number too early (keep it vague: 'competitive with market')"],
    "resumeLine": "Successfully negotiated multiple Staff-level offers to secure top-of-market compensation",
    "connectsTo": "w22-d1"
  },
  "w22-d1": {
    "objective": "Master the System Design interview for complex real-time applications",
    "why": "System design is the make-or-break round for roles above $160K. You must be able to design for scale and latency.",
    "steps": [
      "Topic: Design a real-time Chat application with 10M active users.",
      "Focus: WebSockets vs SSE, Database sharding, and Read receipts.",
      "Record your 45-minute walkthrough.",
      "Review: Did you identify the bottleneck (e.g., message storage at scale)?"
    ],
    "tools": ["Excalidraw", "Loom"],
    "deliverable": "Recorded system design walkthrough",
    "definitionOfDone": "You can deliver a cohesive architectural design without stuttering or notes",
    "commonMistakes": ["Getting stuck on minor UI details; focus on high-level data flow first"],
    "resumeLine": null,
    "connectsTo": "w22-d2"
  },
  "w22-d2": {
    "objective": "Polish and time your core behavioral stories",
    "why": "Behavioral rounds filter for EQ and leadership. Your stories must be concise, impactful, and data-driven.",
    "steps": [
      "Pick your 5 strongest STAR stories from your library.",
      "Record yourself telling each one.",
      "Edit for brevity: aim for exactly 2.5 minutes per story.",
      "Focus on the 'Result': What was the measurable business impact?"
    ],
    "tools": ["Behavioral Story Library", "Timer"],
    "deliverable": "5 'Stage-Ready' STAR stories",
    "definitionOfDone": "Stories are memorized and delivered with confidence and clear metrics",
    "commonMistakes": ["Rambling without a clear Result (The 'R' in STAR)"],
    "resumeLine": null,
    "connectsTo": "w22-d3"
  },
  "w22-d3": {
    "objective": "Practice thinking out loud during live coding challenges",
    "why": "In coding interviews, your process and communication are more important than the final answer.",
    "steps": [
      "Solve 2 LeetCode Medium problems (Array/String or Graph).",
      "Speak your entire thought process into a recorder.",
      "Listen back: Did you state the time complexity? Did you handle edge cases?",
      "Review alternative solutions (e.g., Space/Time trade-offs)."
    ],
    "tools": ["LeetCode", "Voice Recorder"],
    "deliverable": "Two solved mediums with documented thought process",
    "definitionOfDone": "You solved both within 40 minutes while maintaining constant verbal communication",
    "commonMistakes": ["Silent coding (death for an interview)"],
    "resumeLine": "Mastered technical interview patterns for algorithms and distributed systems",
    "connectsTo": "w22-d4"
  },
  "w22-d4": {
    "objective": "Diversify your system design patterns",
    "why": "Interviewers may pivot from your 'specialty'. You need to handle classic problems like URL shorteners or news feeds.",
    "steps": [
      "Topic: Design a URL Shortener with 100k requests/second.",
      "Focus: Hash generation, Caching (Redis), and DB consistency.",
      "Draw the request flow from CDN to DB.",
      "Justify your NoSQL vs SQL choice."
    ],
    "tools": ["Whiteboard", "Designing Data-Intensive Applications"],
    "deliverable": "URL Shortener architecture doc",
    "definitionOfDone": "You can explain the trade-offs of consistent hashing and ID generation",
    "commonMistakes": ["Ignoring the 'Collisions' problem in hashing"],
    "resumeLine": null,
    "connectsTo": "w22-d5"
  },
  "w22-d5": {
    "objective": "Get external feedback on your verbal delivery",
    "why": "You cannot see your own blind spots (e.g., 'um' counts, body language, or defensive tone).",
    "steps": [
      "Reach out to a peer or mentor for a 30-minute mock behavioral session.",
      "Ask them to be 'The Tough Interviewer'.",
      "Record the session and take notes on their feedback.",
      "List 3 specific phrases or habits to eliminate."
    ],
    "tools": ["Zoom", "Mentor Network"],
    "deliverable": "External mock feedback report",
    "definitionOfDone": "You have implemented at least 2 corrections from your peer's feedback",
    "commonMistakes": ["Taking feedback personally; it's data for your performance"],
    "resumeLine": null,
    "connectsTo": "w22-d6"
  },
  "w22-d6": {
    "objective": "Simulate a live interview environment with realistic pressure",
    "why": "Realistic pressure reveals where your mental model breaks. Pramp allows you to practice with strangers.",
    "steps": [
      "Book a Pramp session for System Design or Coding.",
      "Complete the 60-minute session.",
      "Provide feedback to your partner (teaches you what to look for as an interviewer).",
      "Review the detailed scorecard provided by the platform."
    ],
    "tools": ["Pramp", "Interviewing.io"],
    "deliverable": "Mock interview scorecard",
    "definitionOfDone": "Session is completed and score is above 'Average' for your level",
    "commonMistakes": ["Winging it without a structured approach (e.g., not gathering requirements first)"],
    "resumeLine": null,
    "connectsTo": "w22-d7"
  },
  "w22-d7": {
    "objective": "Finalize your technical 'Playbook' for the execution phase",
    "why": "Success comes from preparation. A checklist ensures you don't forget the fundamentals when under stress.",
    "steps": [
      "Create a 1-page 'Interview Cheat Sheet' with your best stories and design patterns.",
      "Review your 'Identity Shift' post to remind yourself of your technical journey.",
      "Perform a 'Mental Warmup' (visualize the call going perfectly).",
      "Organize your workspace for clear video calls."
    ],
    "tools": ["Checklist", "Mental Preparation"],
    "deliverable": "Final Interview Readiness Checklist",
    "definitionOfDone": "You feel 100% prepared to execute live interviews next week",
    "commonMistakes": ["Cramming until 2 AM; rest is a technical advantage"],
    "resumeLine": null,
    "connectsTo": "w23-d1"
  },
  "w23-d1": {
    "objective": "Master the first round and technical screen phase",
    "why": "The screen is the funnel's narrowest point. 70% of candidates fail here. You must be high-energy and technically sharp.",
    "steps": [
      "Complete all scheduled phone screens.",
      "Send a thank-you email within 4 hours for each.",
      "Summarize the technical questions asked and your answers.",
      "Highlight one specific area of their product you are excited to help with."
    ],
    "tools": ["Email", "Interview Journal"],
    "deliverable": "Completed screens + 3 sent thank-yous",
    "definitionOfDone": "Responses are sent and follow-up tasks are logged for each role",
    "commonMistakes": ["Treating the screen as 'just a chat'; it's a technical evaluation"],
    "resumeLine": "Advanced to final-round interviews for 5+ high-growth AI and mobile platforms",
    "connectsTo": "w23-d2"
  },
  "w23-d2": {
    "objective": "Demonstrate architectural maturity during technical deep-dives",
    "why": "Senior roles require explaining 'Why', not just 'How'. You must defend your tech choices under pressure.",
    "steps": [
      "Complete technical interviews focused on your stack (Node/RN/AI).",
      "Proactively mention your RAG observability and hardening work.",
      "Explain the trade-offs of your flagship project's architecture.",
      "Ask 'The Staff Question': 'What is the biggest technical debt currently slowing the team?'"
    ],
    "tools": ["Excalidraw", "Technical Specs"],
    "deliverable": "Successful tech deep-dive session",
    "definitionOfDone": "You have clearly articulated the trade-offs of your proposed solutions",
    "commonMistakes": ["Being too rigid in your thinking; be collaborative with the interviewer"],
    "resumeLine": null,
    "connectsTo": "w23-d3"
  },
  "w23-d3": {
    "objective": "Deliver a world-class take-home project or coding assessment",
    "why": "Take-homes are your chance to prove you can write production-grade code without a timer.",
    "steps": [
      "Solve the problem completely and efficiently.",
      "Add automated tests (Jest) for core logic.",
      "Write a `SUBMISSION.md` explaining your approach, trade-offs, and 'What I'd do with more time'.",
      "Ensure the code is perfectly linted and formatted."
    ],
    "tools": ["Jest", "ESLint", "Markdown"],
    "deliverable": "High-quality take-home submission",
    "definitionOfDone": "The submission includes tests, documentation, and handles all edge cases",
    "commonMistakes": ["Submitting code with no tests or poor documentation"],
    "resumeLine": "Consistently delivered top-tier take-home assessments, demonstrating high coding standards and architectural foresight",
    "connectsTo": "w23-d4"
  },
  "w23-d4": {
    "objective": "Maintain momentum in the pipeline through strategic follow-ups",
    "why": "Silence doesn't mean 'No'. It means the recruiter is busy. Staying top-of-mind increases your 'Closer' rate.",
    "steps": [
      "Check your tracking board for roles with no update for >5 days.",
      "Send a value-add follow-up: 'I just published this post on X, thought it might be relevant to our chat about Y.'",
      "Update pending companies on your status: 'Just wanted to let you know I'm moving into final rounds with another team.' (increases urgency)."
    ],
    "tools": ["Job tracking board", "Email"],
    "deliverable": "5 strategic follow-up emails",
    "definitionOfDone": "Every role in your 'Applied/Screen' column has been touched this week",
    "commonMistakes": ["Sending 'Just checking in' emails (add value instead)"],
    "resumeLine": null,
    "connectsTo": "w23-d5"
  },
  "w23-d5": {
    "objective": "Draft a personalized negotiation script for each pending offer",
    "why": "Negotiation is data-driven. You must have your 'Anchor' and 'Justification' ready before they say the number.",
    "steps": [
      "Calculate your 'Market Value' based on your specialized 'Mobile + AI' stack.",
      "Script your 'Ask': 'Based on my experience building production RAG and multi-modal systems, I was looking for $X.'",
      "List 3 specific technical wins you will deliver in the first 90 days to justify the cost.",
      "Practice your 'Competing Offer' response."
    ],
    "tools": ["Negotiation Script Template", "levels.fyi"],
    "deliverable": "Negotiation playbook per role",
    "definitionOfDone": "You have a documented ask and justification for every active role",
    "commonMistakes": ["Giving a salary range; give a specific number"],
    "resumeLine": null,
    "connectsTo": "w23-d6"
  },
  "w23-d6": {
    "objective": "Secure and brief your professional references",
    "why": "References are the final hurdle. A well-briefed reference can turn a 'Maybe' into a 'Strong Yes'.",
    "steps": [
      "Identify 3 people who can speak to your technical skill and growth.",
      "Send them a summary of the roles you are targeting and the 'Identity Shift' journey.",
      "Provide them with 3 bullet points of what you'd like them to emphasize.",
      "Thank them and offer to return the favor."
    ],
    "tools": ["Email", "LinkedIn"],
    "deliverable": "3 confirmed and briefed references",
    "definitionOfDone": "References are ready to speak enthusiastically about your transition and expertise",
    "commonMistakes": ["Sending references without warning them first"],
    "resumeLine": null,
    "connectsTo": "w23-d7"
  },
  "w23-d7": {
    "objective": "Prioritize recovery and mental clarity for final rounds",
    "why": "Final rounds are high-stakes. Confidence and energy are more valuable than last-minute cramming.",
    "steps": [
      "Stop all technical study by 12 PM.",
      "Review your 'Identity Shift' case study to build confidence.",
      "Visualize the final round going perfectly.",
      "Get 8 hours of sleep."
    ],
    "tools": ["Rest", "Meditation"],
    "deliverable": "Mental clarity and peak energy",
    "definitionOfDone": "You feel energized and ready to 'close' the hunt next week",
    "commonMistakes": ["Cramming until 3 AM (leads to brain fog in the interview)"],
    "resumeLine": null,
    "connectsTo": "w24-d1"
  },
  "w24-d1": {
    "objective": "Negotiate your first offer for maximum total compensation",
    "why": "Most people accept the first number. Successful negotiators earn $500K+ more over their careers.",
    "steps": [
      "Receive the offer call. Say: 'Thank you! I'm thrilled. I'll review and get back to you.'",
      "Identity 3 areas for improvement: Base, Equity, and Sign-on.",
      "Deliver your anchor script from Week 23.",
      "Use 'Competing Interest' (even if informal) as leverage.",
      "Wait for the counter. Silence is your best tool."
    ],
    "tools": ["Negotiation Script", "Comp Multiplier"],
    "deliverable": "Counter-offer communication",
    "definitionOfDone": "Improved terms have been requested and are being reviewed by the company",
    "commonMistakes": ["Accepting on the phone (never do it)"],
    "resumeLine": null,
    "connectsTo": "w24-d2"
  },
  "w24-d2": {
    "objective": "Draft a high-impact 90-day operational plan for the new role",
    "why": "The first 90 days define your reputation. Planning them like a military operation ensures you transition from 'New Guy' to 'Vital Leader'.",
    "steps": [
      "Week 1: Focus on listening, learning the stack, and documentation gaps.",
      "Month 1: Ship a 'Quick Win' to establish technical credibility.",
      "Month 3: Lead a multi-team initiative (e.g., an AI observability dashboard).",
      "Format as a professional PDF to share with your new manager."
    ],
    "tools": ["Notion", "Google Docs"],
    "deliverable": "90-day Transition Plan (PDF)",
    "definitionOfDone": "Plan includes specific, measurable goals for learning, shipping, and leading",
    "commonMistakes": ["Planning to 'Fix Everything' (focus on one major win instead)"],
    "resumeLine": "Developed and executed 90-day impact strategy, delivering first major production win in 30 days",
    "connectsTo": "w24-d3"
  },
  "w24-d3": {
    "objective": "Perform deep research on your new team and codebase",
    "why": "Seniority is about context. Walking in informed on Day 1 accelerates your 'Impact Time' by weeks.",
    "steps": [
      "Read all public documentation and engineering blogs from the company.",
      "Audit their mobile app: find 3 bugs or 3 performance improvements.",
      "Research your manager and tech lead's previous work on GitHub/Twitter.",
      "Prepare a list of 5 specific questions about their technical debt."
    ],
    "tools": ["GitHub", "Engineering Blog", "App Store"],
    "deliverable": "Team Intelligence Dossier",
    "definitionOfDone": "You have a list of identified team pain points and stakeholder backgrounds",
    "commonMistakes": ["Relying only on the official onboarding guide"],
    "resumeLine": null,
    "connectsTo": "w24-d4"
  },
  "w24-d4": {
    "objective": "Schedule pre-start 1:1s to align on expectations early",
    "why": "Trust is built in the gaps. Meeting your manager before Day 1 shows extreme proactivity and leadership.",
    "steps": [
      "Email your future manager: 'Super excited to start. I've drafted a 90-day plan and would love 15 mins to align.'",
      "Reach out to the Tech Lead: 'Starting soon! Would love to know the best area for me to study before my first day.'",
      "Secure meetings for your first week in the role."
    ],
    "tools": ["Email", "LinkedIn"],
    "deliverable": "Scheduled orientation meetings",
    "definitionOfDone": "At least 2 key stakeholder 1:1s are on your calendar before Day 1",
    "commonMistakes": ["Being too formal (keep it collaborative and excited)"],
    "resumeLine": null,
    "connectsTo": "w24-d5"
  },
  "w24-d5": {
    "objective": "Set long-term career goals and master-level milestones",
    "why": "Careers don't happen to you; you architect them. You need to know what 'Promotion to Staff' requires before you start.",
    "steps": [
      "Identify the promotion criteria for the next level (Staff/Principal).",
      "List 3 hard skills to master in the next 12 months (e.g., 'Core ML', 'Kubernetes').",
      "List 5 cross-functional stakeholders to build rapport with (Product, Sales, Design).",
      "Set a 'Review Date' for 6 months from now."
    ],
    "tools": ["Notion", "Growth Plan Template"],
    "deliverable": "12-month Career Blueprint",
    "definitionOfDone": "Doc contains specific promotion milestones and a skill-development timeline",
    "commonMistakes": ["Ignoring non-technical growth (networking/influence)"],
    "resumeLine": null,
    "connectsTo": "w24-d6"
  },
  "w24-d6": {
    "objective": "Deliver a graceful resignation and preserve your reputation",
    "why": "The tech industry is small. Burn no bridges. You want your old company to be a source of future referrals and business.",
    "steps": [
      "Write a letter expressing genuine gratitude for the opportunities given.",
      "Highlight 1-2 major wins you achieved during your tenure.",
      "Offer to help train your replacement and document your current projects.",
      "Commit to a smooth and professional last day."
    ],
    "tools": ["Email"],
    "deliverable": "Professional resignation letter",
    "definitionOfDone": "Letter is sent and a transition meeting with your current manager is scheduled",
    "commonMistakes": ["Venting frustrations in the resignation letter"],
    "resumeLine": null,
    "connectsTo": "w24-d7"
  },
  "w24-d7": {
    "objective": "Celebrate and announce your final public milestone",
    "why": "Public milestones inspire others and attract the next opportunity. You have successfully shifted your identity.",
    "steps": [
      "Treat yourself to a major 'win' reward (dinner, travel, or gear).",
      "Write the LinkedIn post: 'The Journey' — from 24 weeks ago to today.",
      "Thank the mentors, communities, and colleagues who helped you.",
      "Engage with your network one last time before starting the new role."
    ],
    "tools": ["LinkedIn", "Real Life"],
    "deliverable": "Final 'Identity Shift' announcement",
    "definitionOfDone": "Post is live and you have officially concluded the 'Escape Velocity' roadmap",
    "commonMistakes": ["Bragging without humility (focus on the 'lessons' and 'gratitude')"],
    "resumeLine": null,
    "connectsTo": "Phase 3"
  }
};
