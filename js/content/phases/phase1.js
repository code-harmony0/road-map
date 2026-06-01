/**
 * Phase 1: Interview-Ready (Weeks 3-8, ~6 weeks)
 * Get interview-ready with skills you ALREADY have. No new tech. Sharpen, don't rebuild.
 * Matches the existing repo schema: WEEKS[] + DETAILS{} keyed by task id.
 */

export const SCHEMA = {
  "version": "2.0",
  "structure": "normalized",
  "note": "Phase 1: Interview-Ready (Weeks 3-8). The user is a 4-yr RN dev already worth 15-22 LPA in India. The goal here is NOT learning new tech (PostgreSQL/Docker/AI are Phase 3) but getting interview-ready with existing skills: LeetCode, RN depth, system-design FORMAT (experience already exists), and behavioral stories. Start applying (Phase 2) around Week 7, once ~60% through this phase.",
  "layers": {
    "roadmap": "core task objects (id, day, time, depth, xp, text, reason)",
    "details": "taskDetails map keyed by task.id",
    "boss": "boss battle object per week",
    "recurring": "shared recurring task template"
  }
};

export const RECURRING_TEMPLATES = {
  "leetcodeDaily": {
    "objective": "Build pattern fluency for coding screens",
    "why": "Indian product hiring in 2026 is selective; coding screens are mandatory even for mid-senior. One problem a day compounds.",
    "steps": [
      "Solve 1 LeetCode problem in JavaScript/TypeScript (never switch to Python).",
      "Follow the pattern order: arrays/hashmaps -> two pointers -> sliding window -> strings -> stacks/queues -> trees/recursion.",
      "After solving, read the optimal solution and note the pattern.",
      "Log which patterns you struggle with and re-drill them weekly."
    ],
    "tools": ["LeetCode", "NeetCode 150 (pattern list)"],
    "deliverable": "1 solved problem logged per day",
    "definitionOfDone": "Problem solved and pattern tagged in the learning log",
    "commonMistakes": [
      "Switching to Python under interview pressure — stay in your strongest language",
      "Grinding randomly instead of by pattern",
      "Not reviewing the optimal solution after a brute-force pass"
    ],
    "resumeLine": null,
    "weeklyTarget": "5-8 mediums/week -> 30-50 total by end of Phase 1"
  }
};

export const WEEKS = [
  {
    "id": "p1w3",
    "num": "WEEK 03",
    "title": "DSA + RN Depth",
    "theme": "Sharpen the Core",
    "color": "#3b82f6",
    "boss": {
      "id": "boss-p1w3",
      "name": "The Pattern Matcher",
      "challenge": "Solve 8 LeetCode mediums across 3 patterns and write a deep-dive note on RN re-render performance",
      "rewardXP": 500,
      "resumeLine": "Demonstrated advanced React Native performance expertise (render optimization, memoization, list virtualization)",
      "successCriteria": [
        "8 mediums solved this week, tagged by pattern",
        "Can explain why a React component re-renders and how to stop it",
        "RN performance note references real Zonesso work (FlashList, image caching)",
        "Can articulate the New Architecture (Fabric, TurboModules, JSI, Hermes) at a high level"
      ],
      "howToComplete": [
        "Complete all Week 3 tasks",
        "Explain one LeetCode pattern out loud as if teaching it",
        "Connect every RN concept back to something you shipped in Zonesso"
      ],
      "deliverables": [
        "8 solved mediums (logged)",
        "RN performance deep-dive note",
        "New Architecture talking points"
      ],
      "passFail": {
        "pass": "8 mediums + RN performance note grounded in real work",
        "fail": "Can't explain re-renders or hasn't started LeetCode patterns"
      }
    },
    "tasks": [
      {
        "id": "p1-w3-dsa",
        "day": "Daily",
        "time": "0.5h/day",
        "depth": "Deep",
        "xp": 100,
        "text": "LeetCode: arrays/hashmaps + two pointers (8 mediums this week)",
        "reason": "Coding screens are the round-1 filter; patterns beat memorization"
      },
      {
        "id": "p1-w3-rn-perf",
        "day": "Day 1-3",
        "time": "3h",
        "depth": "Deep",
        "xp": 100,
        "text": "RN performance deep-dive: re-renders, memo/useMemo/useCallback, FlashList vs FlatList, image caching",
        "reason": "This is your home turf — where you should dominate the interview"
      },
      {
        "id": "p1-w3-rn-arch",
        "day": "Day 4-5",
        "time": "3h",
        "depth": "Medium",
        "xp": 75,
        "text": "Learn to talk about the New Architecture: Fabric, TurboModules, JSI, Hermes",
        "reason": "New Architecture awareness is the #1 RN salary signal in 2026"
      }
    ]
  },
  {
    "id": "p1w4",
    "num": "WEEK 04",
    "title": "RN Patterns + Backend Brush-up",
    "theme": "Full-Stack Credibility",
    "color": "#6366f1",
    "boss": {
      "id": "boss-p1w4",
      "name": "The Full-Stack Talker",
      "challenge": "Solve 8 more mediums and be able to confidently discuss REST design, JWT auth, and SQL-vs-NoSQL trade-offs using Zonesso",
      "rewardXP": 500,
      "resumeLine": "Articulated full-stack architecture decisions including REST API design, auth flows, and data-store trade-offs",
      "successCriteria": [
        "16 mediums total by end of week",
        "Can explain REST design, status codes, pagination, versioning",
        "Can explain JWT access/refresh flow and how Zonesso auth works",
        "Can explain MongoDB modeling AND where PostgreSQL would fit better (honest trade-offs)"
      ],
      "howToComplete": [
        "Complete all Week 4 tasks",
        "Practice the SQL-vs-NoSQL answer out loud using Zonesso payments as the example",
        "Map your Zonesso navigation/deep-linking as an RN talking point"
      ],
      "deliverables": [
        "16 total mediums (logged)",
        "Backend talking-points note (REST, auth, data trade-offs)",
        "RN navigation/deep-linking note"
      ],
      "passFail": {
        "pass": "Confident on REST + auth + data trade-offs, 16 mediums done",
        "fail": "Can't discuss the backend you touch daily, or behind on LeetCode"
      }
    },
    "tasks": [
      {
        "id": "p1-w4-dsa",
        "day": "Daily",
        "time": "0.5h/day",
        "depth": "Deep",
        "xp": 100,
        "text": "LeetCode: sliding window + strings (8 mediums this week)",
        "reason": "Builds on week 3 patterns; these appear constantly in screens"
      },
      {
        "id": "p1-w4-rn-nav",
        "day": "Day 1-2",
        "time": "2h",
        "depth": "Medium",
        "xp": 75,
        "text": "RN navigation patterns: stack/tab/nested, deep linking (map to Zonesso notification navigation)",
        "reason": "Navigation + deep linking is a common RN interview topic you've actually built"
      },
      {
        "id": "p1-w4-backend",
        "day": "Day 3-5",
        "time": "4h",
        "depth": "Medium",
        "xp": 100,
        "text": "Backend brush-up: REST design, JWT auth flow, MongoDB modeling + where SQL fits better",
        "reason": "You don't need to be a backend expert — just talk credibly about what you touch"
      }
    ]
  },
  {
    "id": "p1w5",
    "num": "WEEK 05",
    "title": "System Design Format",
    "theme": "Name What You Already Did",
    "color": "#8b5cf6",
    "boss": {
      "id": "boss-p1w5",
      "name": "The Architect",
      "challenge": "Whiteboard a URL shortener and a chat app, and reframe Zonesso's real architecture in system-design vocabulary",
      "rewardXP": 600,
      "resumeLine": "Designed and explained scalable system architectures including caching, queuing, and real-time messaging",
      "successCriteria": [
        "Can whiteboard URL shortener: requirements -> API -> data model -> scale/caching -> trade-offs",
        "Can whiteboard a chat app (you built real-time chat in Zonesso)",
        "Can narrate Zonesso as a system design: 5 repos, Redis caching, BullMQ queues, S3/CDN, payment boundary",
        "24 mediums total by end of week"
      ],
      "howToComplete": [
        "Complete all Week 5 tasks",
        "Record yourself whiteboarding the chat app in under 30 min",
        "Translate every Zonesso component into system-design terms (cache, queue, CDN, load)"
      ],
      "deliverables": [
        "URL shortener design (written + diagram)",
        "Chat app design (written + diagram)",
        "Zonesso-as-system-design narrative",
        "24 total mediums"
      ],
      "passFail": {
        "pass": "Both designs whiteboarded + Zonesso reframed as system design",
        "fail": "Can't structure a design or freezes on the format"
      }
    },
    "tasks": [
      {
        "id": "p1-w5-dsa",
        "day": "Daily",
        "time": "0.5h/day",
        "depth": "Deep",
        "xp": 100,
        "text": "LeetCode: stacks/queues + intro trees (8 mediums this week)",
        "reason": "Rounds out the core pattern set most screens draw from"
      },
      {
        "id": "p1-w5-sysdesign-format",
        "day": "Day 1-2",
        "time": "3h",
        "depth": "Deep",
        "xp": 100,
        "text": "Learn the system-design format: requirements -> API -> data model -> scale/caching -> trade-offs",
        "reason": "Every senior interview has this round; you need the format, not new concepts"
      },
      {
        "id": "p1-w5-sysdesign-practice",
        "day": "Day 3-4",
        "time": "3h",
        "depth": "Deep",
        "xp": 100,
        "text": "Practice URL shortener, then chat app (you built real-time chat in Zonesso)",
        "reason": "Chat app is a gift — you've shipped exactly this, so it'll click fast"
      },
      {
        "id": "p1-w5-zonesso-reframe",
        "day": "Day 5",
        "time": "2h",
        "depth": "Deep",
        "xp": 100,
        "text": "Reframe Zonesso's real architecture in system-design vocabulary",
        "reason": "You have real system-design experience (caching, queues, failover) — just never called it that"
      }
    ]
  },
  {
    "id": "p1w6",
    "num": "WEEK 06",
    "title": "Behavioral Stories",
    "theme": "Communicate Seniority",
    "color": "#ec4899",
    "boss": {
      "id": "boss-p1w6",
      "name": "The Storyteller",
      "challenge": "Build 5 polished STAR stories and a 60-second 'tell me about yourself' pitch",
      "rewardXP": 500,
      "resumeLine": "Prepared a quantified behavioral interview portfolio covering leadership, impact, and conflict resolution",
      "successCriteria": [
        "5 STAR stories written, timed to 2-3 min, recorded",
        "Stories tagged: leadership, conflict, failure, impact, collaboration",
        "60-second pitch is fluent and natural",
        "32 mediums total by end of week"
      ],
      "howToComplete": [
        "Complete all Week 6 tasks",
        "Record each story and listen back for filler words",
        "Quantify every result (%, downloads, time saved)"
      ],
      "deliverables": [
        "5 recorded STAR stories",
        "60-second pitch",
        "32 total mediums"
      ],
      "passFail": {
        "pass": "5 stories + pitch, all timed and recorded",
        "fail": "Vague stories with no numbers, or no pitch"
      }
    },
    "tasks": [
      {
        "id": "p1-w6-dsa",
        "day": "Daily",
        "time": "0.5h/day",
        "depth": "Deep",
        "xp": 100,
        "text": "LeetCode: trees/recursion + mixed review (8 mediums this week)",
        "reason": "Trees show up in mid-senior screens; mixed review prevents pattern decay"
      },
      {
        "id": "p1-w6-star",
        "day": "Day 1-4",
        "time": "3h",
        "depth": "Medium",
        "xp": 100,
        "text": "Write 5 STAR stories: leadership, conflict, failure, impact, collaboration",
        "reason": "Behavioral rounds filter out people who can't communicate; you have strong material"
      },
      {
        "id": "p1-w6-pitch",
        "day": "Day 5",
        "time": "2h",
        "depth": "Action",
        "xp": 75,
        "text": "Build and rehearse a 60-second 'tell me about yourself' pitch",
        "reason": "It's the first question in every interview and sets the tone"
      }
    ]
  },
  {
    "id": "p1w7_8",
    "num": "WEEK 07-08",
    "title": "Mock + Polish (Apply Starts)",
    "theme": "Game Time",
    "color": "#10b981",
    "boss": {
      "id": "boss-p1w7",
      "name": "The Closer",
      "challenge": "Pass 2 full mock interviews and deliver a fluent 10-minute Zonesso architecture walkthrough; begin Phase 2 applications",
      "rewardXP": 700,
      "resumeLine": "Completed structured technical and behavioral interview preparation with mock interview validation",
      "successCriteria": [
        "2 mock interviews completed (1 technical, 1 behavioral/system-design)",
        "Can walk through Zonesso architecture for 10 min without notes",
        "First 15 Phase 2 applications sent (overlaps with Phase 2)",
        "40-50 mediums total"
      ],
      "howToComplete": [
        "Complete all Week 7-8 tasks",
        "Do mocks with a peer, Pramp, or interviewing.io",
        "Begin Phase 2 Task 2.1 in parallel once prep is ~60% done"
      ],
      "deliverables": [
        "2 mock interview recordings + notes",
        "Fluent Zonesso walkthrough",
        "First 15 applications sent",
        "40-50 total mediums"
      ],
      "passFail": {
        "pass": "Mocks done + walkthrough fluent + applications started",
        "fail": "No mocks, or still not applying by end of week 8"
      }
    },
    "tasks": [
      {
        "id": "p1-w7-dsa",
        "day": "Daily",
        "time": "0.5h/day",
        "depth": "Deep",
        "xp": 100,
        "text": "LeetCode: mixed mediums + revisit weak patterns (reach 40-50 total)",
        "reason": "Final push to interview-ready volume; weak-pattern review locks it in"
      },
      {
        "id": "p1-w7-mock",
        "day": "Day 1-3",
        "time": "4h",
        "depth": "Deep",
        "xp": 150,
        "text": "Do 2 mock interviews: 1 technical (coding), 1 system-design/behavioral",
        "reason": "Mocks expose gaps no amount of solo prep reveals"
      },
      {
        "id": "p1-w7-walkthrough",
        "day": "Day 4",
        "time": "2h",
        "depth": "Action",
        "xp": 75,
        "text": "Rehearse a fluent 10-minute Zonesso architecture walkthrough, no notes",
        "reason": "Walking through a real production system fluently is what separates 'sounds senior' from 'is senior'"
      },
      {
        "id": "p1-w7-apply-start",
        "day": "Day 5+",
        "time": "ongoing",
        "depth": "Action",
        "xp": 100,
        "text": "Begin Phase 2: send first 15 applications (prep is now ~60% done)",
        "reason": "Phase 2 runs in parallel — don't wait for 'perfect readiness' that never comes"
      }
    ]
  }
];

export const DETAILS = {
  "p1-w3-dsa": {
    "objective": "Solve 8 LeetCode mediums across arrays/hashmaps and two pointers.",
    "why": "Coding screens are the round-1 filter at Indian product companies. Pattern fluency, not memorization, is what gets you through.",
    "steps": [
      "Day 1-2: arrays/hashmaps (Two Sum variants, group anagrams, top-K).",
      "Day 3-5: two pointers (container with most water, 3Sum, sorted-array problems).",
      "Solve in JS/TS; read the optimal solution after each.",
      "Tag each problem by pattern in your learning log."
    ],
    "tools": ["LeetCode", "NeetCode 150"],
    "deliverable": "8 mediums solved and tagged.",
    "definitionOfDone": "8 problems logged, each tagged by pattern, with weak ones noted for re-drill.",
    "commonMistakes": ["Random grinding instead of by pattern", "Not reviewing optimal solutions", "Switching off JS/TS"],
    "resumeLine": null,
    "connectsTo": "p1-w3-rn-perf"
  },
  "p1-w3-rn-perf": {
    "objective": "Be able to explain RN render performance deeply, anchored in real Zonesso work.",
    "why": "RN performance is your home turf. Dominating it makes you look senior, and you have real material (FlashList, image caching, startup optimization).",
    "steps": [
      "Study what triggers a re-render and how to prevent it (memo, useMemo, useCallback, stable references).",
      "Compare FlashList vs FlatList — why you chose FlashList in Zonesso listings.",
      "Review image caching (FastImage, cache-aware props) from your real work.",
      "Write a one-page note connecting each concept to a Zonesso example."
    ],
    "tools": ["React Native docs", "Your Zonesso notes"],
    "deliverable": "A one-page RN performance note grounded in Zonesso.",
    "definitionOfDone": "You can explain re-render causes and three optimizations using real examples, without notes.",
    "commonMistakes": ["Reciting theory with no real examples", "Confusing useMemo and useCallback", "Ignoring list virtualization (a top RN topic)"],
    "resumeLine": null,
    "connectsTo": "p1-w3-rn-arch"
  },
  "p1-w3-rn-arch": {
    "objective": "Be able to talk fluently about React Native's New Architecture.",
    "why": "New Architecture awareness is the strongest RN salary signal in 2026. You don't need to have built a TurboModule — you need to discuss it credibly.",
    "steps": [
      "Learn what Fabric (new renderer) and TurboModules (new native modules) solve vs the old bridge.",
      "Understand JSI (direct JS-native calls, no serialization) and Hermes (the JS engine).",
      "Tie it to your RN 0.81 migration — the version where this matters.",
      "Write 5 bullet talking points."
    ],
    "tools": ["React Native New Architecture docs"],
    "deliverable": "5 New Architecture talking points.",
    "definitionOfDone": "You can explain Fabric, TurboModules, JSI, and Hermes in plain language in under 3 minutes.",
    "commonMistakes": ["Claiming you built native modules when you haven't", "Confusing the bridge with JSI", "Memorizing buzzwords without understanding the problem they solve"],
    "resumeLine": null,
    "connectsTo": "p1-w4-dsa"
  },
  "p1-w4-dsa": {
    "objective": "Solve 8 mediums across sliding window and strings (16 total).",
    "why": "Sliding window and string problems appear constantly in screens and build directly on week 3's patterns.",
    "steps": [
      "Day 1-2: sliding window (longest substring, min window, max sum subarray).",
      "Day 3-5: strings (valid palindrome, string compression, anagram checks).",
      "Log and tag each; re-drill any week-3 patterns that decayed."
    ],
    "tools": ["LeetCode", "NeetCode 150"],
    "deliverable": "8 more mediums (16 total).",
    "definitionOfDone": "16 total logged, sliding-window and string patterns comfortable.",
    "commonMistakes": ["Skipping the harder sliding-window variants", "Not re-reviewing earlier patterns"],
    "resumeLine": null,
    "connectsTo": "p1-w4-rn-nav"
  },
  "p1-w4-rn-nav": {
    "objective": "Be able to explain RN navigation patterns and deep linking using Zonesso.",
    "why": "Navigation and deep linking are common RN interview topics, and you built notification-driven navigation in Zonesso.",
    "steps": [
      "Review stack, tab, and nested navigators and when to use each.",
      "Review deep linking and how your Zonesso notification navigation routes users.",
      "Note the central route registry decision (stacks.tsx / pages.name.ts) and why it beats hard-coded route strings."
    ],
    "tools": ["React Navigation docs", "Your Zonesso notes"],
    "deliverable": "A navigation/deep-linking talking-points note.",
    "definitionOfDone": "You can explain your navigation architecture and a deep-link flow from memory.",
    "commonMistakes": ["Forgetting the deep-link/notification angle (your real strength)", "Vague on nested navigator trade-offs"],
    "resumeLine": null,
    "connectsTo": "p1-w4-backend"
  },
  "p1-w4-backend": {
    "objective": "Be able to discuss REST design, JWT auth, and data-store trade-offs credibly.",
    "why": "You don't need backend mastery — you need to talk credibly about the backend you touch daily so 'full-stack curious' holds up. Knowing SQL-vs-NoSQL trade-offs honestly is a senior signal.",
    "steps": [
      "REST: resources, verbs, status codes, pagination, versioning.",
      "Auth: JWT access + refresh tokens, how Zonesso handles auth/session.",
      "Data: explain your MongoDB modeling AND where PostgreSQL would fit better (payments/transactions need ACID, relational integrity for users-listings-showrooms).",
      "NestJS: modules, controllers, services, DI — articulate what you see daily."
    ],
    "tools": ["Your Zonesso notes", "REST/JWT reference docs"],
    "deliverable": "A backend talking-points note (REST, auth, data trade-offs).",
    "definitionOfDone": "You can answer 'when SQL vs NoSQL?' with a real Zonesso example, and explain JWT refresh flow.",
    "commonMistakes": ["Claiming SQL expertise you don't have", "Not knowing your own auth flow", "Textbook SQL-vs-NoSQL answer instead of a real one"],
    "resumeLine": "Discussed full-stack trade-offs including REST design, JWT auth, and SQL-vs-NoSQL data modeling grounded in a production marketplace.",
    "connectsTo": "p1-w5-dsa"
  },
  "p1-w5-dsa": {
    "objective": "Solve 8 mediums across stacks/queues and intro trees (24 total).",
    "why": "These round out the core pattern set most screens draw from.",
    "steps": [
      "Day 1-2: stacks/queues (valid parentheses, daily temperatures, queue-with-stacks).",
      "Day 3-5: intro trees (BFS/DFS traversal, max depth, level order).",
      "Log and tag; mixed-review earlier patterns."
    ],
    "tools": ["LeetCode", "NeetCode 150"],
    "deliverable": "8 more mediums (24 total).",
    "definitionOfDone": "24 total logged; comfortable with stack/queue and basic tree traversal.",
    "commonMistakes": ["Avoiding trees because they feel hard", "Not practicing BFS and DFS both"],
    "resumeLine": null,
    "connectsTo": "p1-w5-sysdesign-format"
  },
  "p1-w5-sysdesign-format": {
    "objective": "Learn the standard system-design interview format.",
    "why": "Every senior interview has this round. You have real experience — you need the structure to present it.",
    "steps": [
      "Learn the flow: clarify requirements -> sketch API -> data model -> identify bottlenecks -> add caching/queues/scaling -> discuss trade-offs.",
      "Learn core building blocks: load balancer, cache (Redis), queue (BullMQ), CDN, DB replicas.",
      "Watch 2-3 system-design walkthroughs to absorb the rhythm.",
      "Write the format as a checklist you can run in any design round."
    ],
    "tools": ["System Design Primer (GitHub)", "ByteByteGo / Hello Interview"],
    "deliverable": "A reusable system-design checklist.",
    "definitionOfDone": "You can recite the 6-step format and name the core building blocks from memory.",
    "commonMistakes": ["Jumping to a solution before clarifying requirements", "Forgetting to state trade-offs", "Over-engineering for scale nobody asked about"],
    "resumeLine": null,
    "connectsTo": "p1-w5-sysdesign-practice"
  },
  "p1-w5-sysdesign-practice": {
    "objective": "Whiteboard a URL shortener and a chat app end to end.",
    "why": "URL shortener is the canonical warm-up; the chat app is a gift because you shipped real-time chat in Zonesso.",
    "steps": [
      "URL shortener: requirements, hash/encode strategy, data model, read-heavy caching, scale.",
      "Chat app: requirements, WebSocket/Socket.IO, message storage, delivery/read receipts, presence — map directly to what Zonesso does.",
      "Sketch both with diagrams; time yourself to 30 min each.",
      "Record the chat app walkthrough and review it."
    ],
    "tools": ["Excalidraw", "System Design Primer"],
    "deliverable": "Two written designs with diagrams (URL shortener + chat app).",
    "definitionOfDone": "Both designs whiteboarded in under 30 min each, chat app recorded.",
    "commonMistakes": ["Skipping requirements clarification", "Not leveraging your real chat experience", "No diagram"],
    "resumeLine": "Designed scalable system architectures including a real-time chat service with presence and delivery semantics.",
    "connectsTo": "p1-w5-zonesso-reframe"
  },
  "p1-w5-zonesso-reframe": {
    "objective": "Reframe Zonesso's real architecture in system-design vocabulary.",
    "why": "You have genuine system-design experience (5-repo system, Redis caching, BullMQ queues, S3/CDN, payment boundary) but never framed it as 'system design.' This becomes your strongest design answer because it's real.",
    "steps": [
      "Map each Zonesso component to a system-design term: API gateway, cache layer (Redis), async queue (BullMQ), CDN/image handler (S3), payment boundary.",
      "Explain the separate-repos decision (mobile, web, admin, 2 backends) as a scaling/release-risk trade-off.",
      "Explain optimistic UI + cache invalidation as a consistency trade-off.",
      "Write a narrative you can deliver when asked 'tell me about a system you designed.'"
    ],
    "tools": ["Your Zonesso architecture notes", "Excalidraw"],
    "deliverable": "A Zonesso-as-system-design narrative.",
    "definitionOfDone": "You can present Zonesso as a system design for 5-7 minutes using design vocabulary.",
    "commonMistakes": ["Describing features instead of architecture", "Missing the trade-off framing (why, not just what)"],
    "resumeLine": null,
    "connectsTo": "p1-w6-dsa"
  },
  "p1-w6-dsa": {
    "objective": "Solve 8 mediums across trees/recursion plus mixed review (32 total).",
    "why": "Trees appear in mid-senior screens, and mixed review prevents earlier patterns from decaying.",
    "steps": [
      "Day 1-3: trees/recursion (path sum, lowest common ancestor, validate BST).",
      "Day 4-5: mixed review across all prior patterns.",
      "Re-drill the two weakest patterns from your log."
    ],
    "tools": ["LeetCode", "NeetCode 150"],
    "deliverable": "8 more mediums (32 total).",
    "definitionOfDone": "32 total logged; weakest patterns re-drilled.",
    "commonMistakes": ["Cramming new patterns without reviewing old", "Skipping recursion practice"],
    "resumeLine": null,
    "connectsTo": "p1-w6-star"
  },
  "p1-w6-star": {
    "objective": "Write and record 5 STAR behavioral stories.",
    "why": "Behavioral rounds filter out people who can't communicate. You have strong real material — a lead role, real metrics — that most people your level lack.",
    "steps": [
      "Leadership: leading the mobile team at the India company.",
      "Conflict: a real disagreement and how you resolved it.",
      "Failure: something that broke and what you learned.",
      "Impact: the RN migration (27% file cut) or Eco Crew (50K downloads).",
      "Collaboration: working with web/backend teams on Zonesso.",
      "Write each in STAR (Situation, Task, Action, Result), quantify results, record at 2-3 min, tag each."
    ],
    "tools": ["Notion / Google Docs", "Voice recorder"],
    "deliverable": "5 recorded, tagged STAR stories.",
    "definitionOfDone": "All 5 written, quantified, recorded, and under 3 minutes each.",
    "commonMistakes": ["Vague results ('things improved') instead of numbers", "Skipping the Task (what YOU owned)", "Stories that run too long"],
    "resumeLine": null,
    "connectsTo": "p1-w6-pitch"
  },
  "p1-w6-pitch": {
    "objective": "Build and rehearse a 60-second 'tell me about yourself' pitch.",
    "why": "It's the first question in every interview and sets the tone for everything after.",
    "steps": [
      "Structure: mobile background -> full-stack exposure -> shipped real apps (with one metric) -> what you're looking for.",
      "Keep it to 60 seconds, conversational not robotic.",
      "Record, listen for filler words, refine.",
      "Memorize the beats, not the script."
    ],
    "tools": ["Voice recorder"],
    "deliverable": "A polished 60-second pitch.",
    "definitionOfDone": "Pitch is fluent, under 70 seconds, and includes one concrete metric.",
    "commonMistakes": ["Reciting your whole resume", "Sounding scripted", "No hook or metric"],
    "resumeLine": null,
    "connectsTo": "p1-w7-dsa"
  },
  "p1-w7-dsa": {
    "objective": "Reach 40-50 total mediums and re-drill weak patterns.",
    "why": "Final push to interview-ready volume; weak-pattern review locks in retention before live interviews.",
    "steps": [
      "Solve mixed mediums daily, prioritizing your logged weak patterns.",
      "Do 2-3 timed sessions (45 min, one problem) to simulate interview pressure.",
      "Reach 40-50 total solved."
    ],
    "tools": ["LeetCode", "NeetCode 150"],
    "deliverable": "40-50 total mediums logged.",
    "definitionOfDone": "40+ mediums done, can solve a fresh medium under 45 min while talking aloud.",
    "commonMistakes": ["Only solving easy problems to inflate the count", "Not practicing talking while coding"],
    "resumeLine": null,
    "connectsTo": "p1-w7-mock"
  },
  "p1-w7-mock": {
    "objective": "Complete 2 mock interviews: one technical, one system-design/behavioral.",
    "why": "Mocks expose gaps no amount of solo prep reveals — pacing, communication, handling hints.",
    "steps": [
      "Book a coding mock (Pramp, interviewing.io, or a peer).",
      "Book a system-design/behavioral mock.",
      "Treat both as real: think aloud, ask clarifying questions, manage time.",
      "Write down every gap and fix the top 3."
    ],
    "tools": ["Pramp", "interviewing.io", "A peer engineer"],
    "deliverable": "2 mock interviews completed with notes.",
    "definitionOfDone": "Both mocks done, top 3 gaps identified and addressed.",
    "commonMistakes": ["Doing solo prep only and skipping mocks", "Not thinking aloud", "Ignoring the feedback"],
    "resumeLine": null,
    "connectsTo": "p1-w7-walkthrough"
  },
  "p1-w7-walkthrough": {
    "objective": "Deliver a fluent 10-minute Zonesso architecture walkthrough without notes.",
    "why": "Walking through a real production system fluently is what separates 'sounds senior' from 'is senior' in interviews.",
    "steps": [
      "Practice the full walkthrough: problem -> architecture -> key decisions -> migration -> performance wins.",
      "Use your architecture sketch as the only visual aid.",
      "Record it, cut filler, tighten to 10 min.",
      "Practice handling follow-up questions ('why MongoDB?', 'how would you scale chat?')."
    ],
    "tools": ["Excalidraw diagram", "Voice recorder"],
    "deliverable": "A fluent 10-minute Zonesso walkthrough.",
    "definitionOfDone": "You can deliver it from memory in ~10 min and field 3 follow-up questions.",
    "commonMistakes": ["Reading from notes", "Listing features instead of decisions", "No story arc"],
    "resumeLine": null,
    "connectsTo": "p1-w7-apply-start"
  },
  "p1-w7-apply-start": {
    "objective": "Begin Phase 2 applications while finishing prep.",
    "why": "Prep is ~60% done — enough to start. 'Perfect readiness' never arrives, and the hiring pipeline takes 8-12 weeks, so starting now is what compresses your timeline.",
    "steps": [
      "Send the first 15 personalized applications from your 30-company list.",
      "Customize the resume per role type; add a 3-sentence note referencing their product/stack.",
      "Log every one in your tracker.",
      "Continue Phase 1 prep in parallel — the two phases overlap by design."
    ],
    "tools": ["Your tracker", "LinkedIn", "Wellfound"],
    "deliverable": "First 15 applications sent and tracked.",
    "definitionOfDone": "15 personalized applications submitted and logged.",
    "commonMistakes": ["Waiting for 'perfect readiness'", "Sending generic applications", "Not tracking them"],
    "resumeLine": null,
    "connectsTo": null
  }
};

export const PHASE_1_WEEKS = WEEKS;
export const TASK_DETAILS = DETAILS;
