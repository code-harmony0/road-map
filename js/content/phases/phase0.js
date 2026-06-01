/**
 * Phase 0: Positioning (Weeks 1-2)
 * Make 4 years of real work visible and accurately represented. No new tech.
 * Matches the existing repo schema: WEEKS[] + DETAILS{} keyed by task id.
 */

export const SCHEMA = {
  "version": "2.0",
  "structure": "normalized",
  "note": "Phase 0: Positioning (Weeks 1-2). The user is severely underpaid (~57K INR/mo) for a 4-yr RN dev. The gap is positioning, not skill. This phase fixes visibility before any learning or applying. No new tech is learned here.",
  "layers": {
    "roadmap": "core task objects (id, day, time, depth, xp, text, reason)",
    "details": "taskDetails map keyed by task.id",
    "boss": "boss battle object per week"
  }
};

export const WEEKS = [
  {
    "id": "p0w1",
    "num": "WEEK 01",
    "title": "Audit & Rewrite",
    "theme": "Become Visible",
    "color": "#f59e0b",
    "boss": {
      "id": "boss-p0w1",
      "name": "The Self-Marketer",
      "challenge": "Produce a one-page resume, a 60s Zonesso demo video, and a rewritten LinkedIn that all reflect senior-level RN work",
      "rewardXP": 500,
      "resumeLine": "Repositioned professional profile around a production RN 0.75 to 0.81 migration (27% fewer files, 39% less code) and 50K+ download apps",
      "successCriteria": [
        "One-page resume leads with migration metrics and lead-role experience",
        "60-second demo video of public motors.zonesso.com is live and linked",
        "LinkedIn headline, About, and Featured all rewritten",
        "Private Zonesso architecture notes exist for interview prep"
      ],
      "howToComplete": [
        "Complete all Week 1 tasks",
        "Get resume reviewed by one trusted dev or mentor",
        "Verify demo video plays and is linked on resume + LinkedIn",
        "Turn on Open To Work (recruiters-only / private)"
      ],
      "deliverables": [
        "Resume PDF (one page)",
        "60s demo video link",
        "Rewritten LinkedIn profile",
        "ZONESSO_NOTES.md (private)"
      ],
      "passFail": {
        "pass": "Resume + demo + LinkedIn all done and consistent",
        "fail": "Still presenting as a junior/mid mobile dev with no metrics"
      }
    },
    "tasks": [
      {
        "id": "p0-d1",
        "day": "Day 1",
        "time": "2h",
        "depth": "Deep",
        "xp": 75,
        "text": "Honest skills audit: rate every tech 1-5, list every app with metrics, capture hidden wins",
        "reason": "Raw material for resume and LinkedIn. Most people forget half their wins."
      },
      {
        "id": "p0-d2",
        "day": "Day 2",
        "time": "2h",
        "depth": "Deep",
        "xp": 75,
        "text": "Write private Zonesso architecture notes for interview prep",
        "reason": "Senior engineers can explain their architecture decisions; juniors cannot"
      },
      {
        "id": "p0-d3",
        "day": "Day 3",
        "time": "2h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write one-page resume v1, lead with migration metrics and lead-role experience",
        "reason": "The first 3 bullets decide whether a human ever reads the rest"
      },
      {
        "id": "p0-d4",
        "day": "Day 4",
        "time": "1.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Record 60s demo video of public motors.zonesso.com, link on resume + LinkedIn",
        "reason": "Video proof is the strongest portfolio asset; most candidates have nothing visual"
      },
      {
        "id": "p0-d5",
        "day": "Day 5-6",
        "time": "4h",
        "depth": "Deep",
        "xp": 100,
        "text": "Overhaul LinkedIn: headline, About, Featured, skills order, Open To Work (private)",
        "reason": "Recruiter inbound is how mid-level India/Gulf roles get found"
      }
    ]
  },
  {
    "id": "p0w2",
    "num": "WEEK 02",
    "title": "Proof & Targets",
    "theme": "Set the Stage",
    "color": "#10b981",
    "boss": {
      "id": "boss-p0w2",
      "name": "The Strategist",
      "challenge": "Publish a portfolio + 1 LinkedIn post, build a 30-company target list, and stand up a tracking system",
      "rewardXP": 500,
      "resumeLine": "Built a public portfolio and a targeted 30-company pipeline as the base for an active job search",
      "successCriteria": [
        "Public portfolio page is live (no company IP exposed)",
        "One technical LinkedIn post is published",
        "30 target companies listed with role, comp estimate, and fit",
        "Application + learning + wins tracker is set up"
      ],
      "howToComplete": [
        "Complete all Week 2 tasks",
        "Confirm portfolio links all work",
        "Confirm tracker has columns for status and follow-up dates",
        "Fill the advanced Git gap in one weekend slot"
      ],
      "deliverables": [
        "Public portfolio page",
        "1 published LinkedIn post",
        "30-company target list",
        "Tracking system (Notion/Sheet)"
      ],
      "passFail": {
        "pass": "Portfolio + post + 30 targets + tracker all done",
        "fail": "No portfolio, no targets, no tracking — not ready to apply"
      }
    },
    "tasks": [
      {
        "id": "p0-d6",
        "day": "Day 7",
        "time": "2h",
        "depth": "Medium",
        "xp": 75,
        "text": "Build a public portfolio page (Notion or simple site) with Zonesso case study + past projects",
        "reason": "Recruiters Google you; give them something credible to find"
      },
      {
        "id": "p0-d7",
        "day": "Day 8-9",
        "time": "3h",
        "depth": "Medium",
        "xp": 75,
        "text": "Write and publish one 300-500 word technical LinkedIn post from real work",
        "reason": "Proves you can ship AND communicate — a differentiator most engineers skip"
      },
      {
        "id": "p0-d8",
        "day": "Day 10",
        "time": "2h",
        "depth": "Deep",
        "xp": 100,
        "text": "Identify 30 target companies with role type, comp estimate, fit, and any connection",
        "reason": "Targeting beats spraying; sharpens later interview prep toward real requirements"
      },
      {
        "id": "p0-d9",
        "day": "Day 11",
        "time": "1h",
        "depth": "Action",
        "xp": 50,
        "text": "Set up tracking system (applications, learning log, wins) + fill advanced Git gap",
        "reason": "No tracking = missed follow-ups (where offers happen); Git gaps from AI-assisted CI/CD need filling"
      }
    ]
  }
];

export const DETAILS = {
  "p0-d1": {
    "objective": "Produce an honest inventory of every skill, shipped app, and hidden win.",
    "why": "You are paid ~30-50% of market rate. The gap is positioning, not skill. You cannot sell what you have not catalogued, and most people write resumes from memory and forget half their wins.",
    "steps": [
      "Open a doc. Rate each tech 1-5 honestly: RN, TypeScript, JS, NestJS, Node, MongoDB, Next.js, Jotai, TanStack Query, Git, REST.",
      "List every shipped app with metrics: Zonesso, Eco Crew (50K+ downloads, 4-star, 30% size cut), JIFFL (30% engagement, 15% size cut), Qplease, Cone, My Phonebook.",
      "Capture hidden wins NOT on the resume: team lead role at India company, mentoring juniors, client communication, the RN 0.75->0.81 migration numbers (27% files, 39% code, 29% deps).",
      "Mark which items are interview-worthy vs filler."
    ],
    "tools": ["Google Docs", "Notion"],
    "deliverable": "A doc with honest ratings, full app list with metrics, and hidden wins.",
    "definitionOfDone": "Every tech is rated, every app is listed with at least one metric, and 3+ hidden wins are captured.",
    "commonMistakes": [
      "Inflating ratings — be honest, it shapes everything downstream",
      "Forgetting the lead role and migration metrics (your strongest material)",
      "Skipping metrics ('improved performance' instead of '30% size reduction')"
    ],
    "resumeLine": null,
    "connectsTo": "p0-d2"
  },
  "p0-d2": {
    "objective": "Write private interview-prep notes documenting the Zonesso architecture and your decisions.",
    "why": "Senior engineers explain their architecture decisions fluently; juniors cannot. You have genuinely senior material (5-repo system, migration, perf work) but probably can't articulate it under pressure yet. This is company IP — keep it private.",
    "steps": [
      "Write what Zonesso does in 2 sentences and the full stack with versions (RN 0.81, NestJS, MongoDB, etc.).",
      "Write the migration story: 0.75->0.81, what broke, how you fixed it, the numbers.",
      "Document key decisions: why Jotai over Redux, why TanStack Query, the server-state vs client-state split.",
      "Document one performance win: parallel startup with Promise.allSettled, LRU cache, TTL strategy.",
      "Sketch the architecture in Excalidraw (20 min): mobile -> API -> DB, plus the 5-repo structure."
    ],
    "tools": ["Excalidraw", "Notion / Google Docs"],
    "deliverable": "A private ZONESSO_NOTES.md with stack, migration story, decisions, perf win, and architecture sketch.",
    "definitionOfDone": "You can verbally walk through Zonesso's architecture for 10 minutes using only these notes as a reference.",
    "commonMistakes": [
      "Pasting proprietary code or internal admin details (IP risk)",
      "Listing tech without explaining WHY each choice was made",
      "No architecture diagram — visuals are what make it click in interviews"
    ],
    "resumeLine": null,
    "connectsTo": "p0-d3"
  },
  "p0-d3": {
    "objective": "Write a one-page resume that leads with senior-level work, not mobile-only basics.",
    "why": "Recruiters scan for ~10 seconds. Your current framing reads 'mobile dev who helped with backend.' The first 3 bullets must read 'engineer who led a major migration and ships production apps.'",
    "steps": [
      "Header: 'Senior React Native Engineer | 4+ yrs' + contact + GitHub + LinkedIn + 'Remote (India)'.",
      "Lead Zonesso bullets with migration metrics (27%/39%/29%), payment flows (Stripe/Apple IAP), and performance work.",
      "Show India-company progression: RN Dev -> Mid -> Project Lead.",
      "Projects section: Eco Crew (50K+, 4-star, 30% cut), JIFFL, Cone.",
      "Group skills: Mobile / Backend / Web / Tools. Do NOT list PostgreSQL/Docker/AWS you can't defend yet.",
      "Keep it to one page. Get one trusted dev to review."
    ],
    "tools": ["Google Docs", "Jobscan or Resume Worded (ATS check)"],
    "deliverable": "A one-page resume PDF that doesn't undersell.",
    "definitionOfDone": "Resume is one page, first 3 bullets are backend/migration-heavy with numbers, and ATS score is 80%+.",
    "commonMistakes": [
      "Leading with generic mobile bullets instead of the migration story",
      "Adding skills you can't defend in an interview",
      "Two pages — keep it tight"
    ],
    "resumeLine": "Reduced mobile app surface ~27% and code ~39% during an RN 0.75->0.81 modernization; led mobile architecture for a production vehicle marketplace.",
    "connectsTo": "p0-d4"
  },
  "p0-d4": {
    "objective": "Record and publish a 60-second demo video of the public Zonesso product.",
    "why": "Video proof is the strongest portfolio asset and auto-plays your competence. Most candidates at your level have nothing visual to show.",
    "steps": [
      "Record a 60s screen capture of public motors.zonesso.com (Loom, or QuickTime -> YouTube unlisted).",
      "Narrate: intro -> browse listings (FlashList) -> detail (TanStack Query) -> filters (Jotai) -> close with 'I led the RN migration cutting app size ~30%'.",
      "Only show the public-facing site, never internal admin screens (IP).",
      "Upload, get the link, add it to the resume (under Zonesso) and LinkedIn Featured."
    ],
    "tools": ["Loom", "QuickTime", "YouTube (unlisted)"],
    "deliverable": "A 60s demo video link added to resume + LinkedIn.",
    "definitionOfDone": "Video is under 75 seconds, narrated, public-only, and linked in two places.",
    "commonMistakes": [
      "Showing internal/admin screens (IP risk)",
      "Going over 90 seconds — recruiters won't watch",
      "No narration — silent demos don't communicate ownership"
    ],
    "resumeLine": null,
    "connectsTo": "p0-d5"
  },
  "p0-d5": {
    "objective": "Rewrite the entire LinkedIn profile to read as a senior RN engineer and attract recruiter inbound.",
    "why": "For mid-level engineers in India/Gulf, LinkedIn recruiter inbound is the primary channel for good roles. This single weekend is worth more than a month of LeetCode for your situation.",
    "steps": [
      "Headline: 'Senior React Native Engineer | 4yrs | Shipped 50K+ user apps | NestJS, Node.js'.",
      "About: 4-5 sentences — your story, what you build, what you're growing into.",
      "Featured: pin the demo video, portfolio link, and top project.",
      "Reorder Skills so RN, TypeScript, Node, NestJS are first.",
      "Match Experience entries to the resume.",
      "Turn on Open To Work (private — recruiters only). Add a good profile photo."
    ],
    "tools": ["LinkedIn"],
    "deliverable": "A fully rewritten, recruiter-magnet LinkedIn profile.",
    "definitionOfDone": "Headline, About, Featured, Skills, and Experience are all updated and Open To Work is on (private).",
    "commonMistakes": [
      "Headline still says 'React Native Developer' instead of positioning seniority",
      "Empty Featured section — it's prime real estate",
      "Public Open To Work banner (your current employer can see it)"
    ],
    "resumeLine": null,
    "connectsTo": "p0-d6"
  },
  "p0-d6": {
    "objective": "Publish a public portfolio page that presents Zonesso and past projects without exposing company IP.",
    "why": "Recruiters Google you. A portfolio connects your scattered projects into one credible story they can scan in 30 seconds.",
    "steps": [
      "Use a Notion public page or a quick Vercel/Next.js site.",
      "Zonesso case study WITHOUT internals: 'vehicle marketplace, UAE; I own mobile architecture, real-time chat, payments; RN 0.81, NestJS, MongoDB; migration cut size ~30%'.",
      "Add past projects: Eco Crew, JIFFL, Cone.",
      "Add contact + links to resume, GitHub, LinkedIn."
    ],
    "tools": ["Notion", "Vercel", "Next.js"],
    "deliverable": "A live public portfolio page.",
    "definitionOfDone": "Page is live, all links work, and no proprietary Zonesso internals are exposed.",
    "commonMistakes": [
      "Over-engineering the site instead of shipping it (2h max)",
      "Exposing internal architecture or admin details",
      "Broken links — test every one"
    ],
    "resumeLine": null,
    "connectsTo": "p0-d7"
  },
  "p0-d7": {
    "objective": "Write and publish one technical LinkedIn post from your real work.",
    "why": "It proves you can ship AND communicate. Recruiters who find your profile see you're active and articulate — a differentiator most engineers skip.",
    "steps": [
      "Pick a real story: 'How I cut Eco Crew's app size 30%', 'What I learned leading my first mobile team', or 'RN 0.75->0.81: what broke and how I fixed it'.",
      "Write 300-500 words: real story, real lessons, not self-promotion.",
      "Add the migration numbers or download metrics for credibility.",
      "Publish. Reply to every comment."
    ],
    "tools": ["LinkedIn"],
    "deliverable": "One published technical post.",
    "definitionOfDone": "Post is live, 300-500 words, anchored in real work with at least one metric.",
    "commonMistakes": [
      "Generic motivational content instead of a concrete technical story",
      "No metrics — numbers are what make it credible",
      "Posting then ignoring comments — engagement compounds reach"
    ],
    "resumeLine": null,
    "connectsTo": "p0-d8"
  },
  "p0-d8": {
    "objective": "Build a researched list of 30 target companies before applying.",
    "why": "Targeting beats spraying. Knowing what 30 real postings ask for sharpens your interview prep toward what companies actually want, not theory.",
    "steps": [
      "List ~20 Indian product companies: Zomato, Swiggy, CRED, Razorpay, Groww, Zerodha, PhonePe, Meesho, Postman, ShareChat, Slice, Khatabook, plus startups.",
      "List ~10 remote-friendly companies via Wellfound and RemoteRocketship (avoid US-only — geo-adjustment).",
      "For each: role type (from their actual posting), comp estimate (AmbitionBox/levels.fyi), why you fit, any connection.",
      "Do NOT apply yet — only identify and rank by fit."
    ],
    "tools": ["LinkedIn Jobs", "Wellfound", "RemoteRocketship", "AmbitionBox", "levels.fyi"],
    "deliverable": "A 30-company target list with role, comp estimate, fit, and connections.",
    "definitionOfDone": "30 companies are listed and ranked by fit, each with a comp estimate.",
    "commonMistakes": [
      "Applying immediately (you're not interview-ready yet — that's Phase 1)",
      "Only listing famous companies — startups have less competition",
      "No comp research — you'll waste time on underpayers"
    ],
    "resumeLine": null,
    "connectsTo": "p0-d9"
  },
  "p0-d9": {
    "objective": "Set up a tracking system and fill the advanced Git gap from your AI-assisted CI/CD work.",
    "why": "Job search without tracking means missed follow-ups, where most offers actually come from. Git gaps will get probed in interviews since you shipped CI/CD with AI help, not from first principles.",
    "steps": [
      "Build a Notion/Sheet with tabs: Applications (company, role, date, contact, status, follow-up), Learning log, Wins file.",
      "Color-code application status: applied / interviewing / rejected / offer.",
      "One weekend slot: practice advanced Git — git rebase -i (squash), conflict resolution, git stash, git cherry-pick, git reset vs git revert.",
      "Write good commit messages and one clean PR description as practice."
    ],
    "tools": ["Notion / Google Sheets", "Git"],
    "deliverable": "A working tracker + advanced Git basics covered.",
    "definitionOfDone": "Tracker has all three tabs with follow-up dates, and you can rebase, resolve a conflict, and explain reset vs revert without lookup.",
    "commonMistakes": [
      "Skipping the tracker ('I'll remember') — you won't, and you'll miss follow-ups",
      "Treating Git as 'already known' — you used it via AI, fill the real gaps",
      "Over-building the tracker instead of using it"
    ],
    "resumeLine": null,
    "connectsTo": null
  }
};

export const PHASE_0_WEEKS = WEEKS;
export const TASK_DETAILS = DETAILS;
