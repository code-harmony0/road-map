/**
 * Roadmap V2: Two-Track Escape (16 weeks, 31 Aug - 20 Dec 2026)
 *
 * Track A (the search) runs from week 1 with zero prerequisites.
 * Track B (the build) runs beside it and is NEVER allowed to delay Track A.
 * The `day` badge on every task says which track it belongs to.
 *
 * WEEKS[] plus TWO_TRACK_DETAILS{} keyed by task id (rendered as each task's
 * "How to do this" drawer). Salary figures checked against Glassdoor and
 * Recrew data, Sep 2026 — see the t0-2 detail for sources.
 * Task ids are prefixed t* so they never collide with the v1 roadmap's p* ids.
 */

const AMBER = '#f59e0b';
const BLUE = '#3b82f6';
const PURPLE = '#8b5cf6';
const GREEN = '#10b981';

// ---------------------------------------------------------------------------
// Phase T0: Launch (Weeks 1-2) - Track A only, on purpose
// ---------------------------------------------------------------------------

export const T0_WEEKS = [
  {
    id: 't0w1',
    num: 'WEEK 01',
    title: 'Reposition & Arm',
    theme: 'Launch',
    color: AMBER,
    boss: {
      id: 'boss-t0w1',
      name: 'The Repositioner',
      challenge:
        'CV, comp targets, portfolio and a Gulf-first target list, all built around Senior React Native Engineer with payments, RTL and release engineering up front',
      rewardXP: 500,
      resumeLine:
        'Owned a production marketplace app end to end: architecture, five payment rails, Arabic/RTL and every store release'
    },
    tasks: [
      {
        id: 't0-1',
        day: 'Track A',
        time: '2h',
        depth: 'Deep',
        xp: 100,
        text: 'Sharpen the Senior React Native headline: mobile first, Next.js as the secondary line',
        reason: 'Every role in your pipeline is a React Native or mobile role. Recruiters filter on "React Native"; "Product Engineer" drops you out of that search.'
      },
      {
        id: 't0-2',
        day: 'Track A',
        time: '1h',
        depth: 'Action',
        xp: 75,
        text: 'Set comp targets from live market data: India Rs 20-30L (stretch 30-40L), Gulf AED 22-30k/month',
        reason: 'The Glassdoor median for RN at 4-6 years is about Rs 7-8L. 20-30L is the product-company band, not a default, so aim it only at product companies'
      },
      {
        id: 't0-3',
        day: 'Track A',
        time: '3h',
        depth: 'Medium',
        xp: 100,
        text: 'Publish a portfolio URL and clean up GitHub — both fields are empty strings today',
        reason: 'Remote-Western and freelance both reward visible proof over interview performance'
      },
      {
        id: 't0-4',
        day: 'Track A',
        time: '2h',
        depth: 'Deep',
        xp: 75,
        text: 'Build the 40-company target list Gulf-first: companies where payments, Arabic/RTL and marketplaces are the job',
        reason: 'Gulf employers sponsor visas as standard. Europe roles that expect right-to-work rarely reply to someone who needs sponsorship.'
      },
      {
        id: 't0-9',
        day: 'Track A',
        time: '0.5h',
        depth: 'Action',
        xp: 50,
        text: 'Do the funnel math once so you stop measuring yourself by application count',
        reason: '33 targeted apps at a 15% first-round rate is 5 first rounds, 2 finals, 1-2 offers. That is the whole plan.'
      }
    ]
  },
  {
    id: 't0w2',
    num: 'WEEK 02',
    title: 'First Wave',
    theme: 'Go Live',
    color: AMBER,
    boss: {
      id: 'boss-t0w2',
      name: 'The Launcher',
      challenge:
        'GATE 1 (13 Sep) — 5 applications sent, CV live, portfolio public. If this slips, nothing after it happens.',
      rewardXP: 600,
      resumeLine: 'Ran a targeted 40-company pipeline with warm referral activation across two markets'
    },
    tasks: [
      {
        id: 't0-5',
        day: 'Track A',
        time: '2h',
        depth: 'Deep',
        xp: 100,
        text: 'Write 5 STAR stories from real CV material plus a 60-second pitch',
        reason: 'Every story must trace to cv.md — an invented number repeated twice becomes a fact you cannot walk back'
      },
      {
        id: 't0-6',
        day: 'Track A',
        time: '4h',
        depth: 'Action',
        xp: 150,
        text: 'Send the first 5 applications — about 45 minutes each, properly tailored',
        reason: 'A real application costs 45 min. Five good ones beat fifteen rushed ones, and fifteen was never possible in 4 hours.'
      },
      {
        id: 't0-7',
        day: 'Track A',
        time: '2h',
        depth: 'Action',
        xp: 75,
        text: 'Ten warm referral DMs to former colleagues and hiring managers',
        reason: 'Referrals convert several times better than cold applications and cost you one evening'
      },
      {
        id: 't0-8',
        day: 'Track A',
        time: '1h',
        depth: 'Action',
        xp: 50,
        text: 'GATE 1 check: 5 apps out, CV live, portfolio public',
        reason: 'A gate you skip is a gate that was never real'
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Phase T1: Search + Brick 1 (Weeks 3-6) - Postgres and the data model
// ---------------------------------------------------------------------------

export const T1_WEEKS = [
  {
    id: 't1w3',
    num: 'WEEK 03',
    title: 'Retarget + New Arch',
    theme: 'Depth Opens',
    color: BLUE,
    boss: {
      id: 'boss-t1w3',
      name: 'The Architect',
      challenge: 'Your live interview prepped, the pipeline retargeted, and 10 minutes on Fabric, TurboModules and JSI using your own 0.81 migration',
      rewardXP: 400,
      resumeLine: 'Migrated a production app to React Native 0.81 and the New Architecture, cutting code 39% and dependencies 29%'
    },
    tasks: [
      {
        id: 't1-13',
        day: 'Track A',
        time: '3h',
        depth: 'Deep',
        xp: 150,
        text: 'Prep your live interview first (Qrusible): story bank, prep plan, honest backend answer',
        reason: 'One live interview is worth more than ten new applications, and story-bank.md does not exist yet'
      },
      {
        id: 't1-14',
        day: 'Track A',
        time: '1h',
        depth: 'Action',
        xp: 100,
        text: 'Retarget: run career-ops patterns, cut roles that need EU right-to-work',
        reason: 'About 21 sent and 1 interview is ~5%. The plan\'s own rule: under 10% after 20, fix targeting before sending more.'
      },
      {
        id: 't1-1',
        day: 'Track A',
        time: '2h',
        depth: 'Action',
        xp: 75,
        text: '3 retargeted applications (Gulf and India-remote only); reply to every recruiter within 4 hours',
        reason: 'Response speed is the cheapest advantage in the search — and it is free, unlike volume'
      },
      {
        id: 't1-2',
        day: 'Track A',
        time: '2h',
        depth: 'Medium',
        xp: 75,
        text: 'DSA: arrays and hashmaps, 45 min/day — patterns, not volume',
        reason: 'About 30 mediums total, then stop. Mobile loops test building features more than LeetCode.'
      },
      {
        id: 't1-rn1',
        day: 'Track B',
        time: '3h',
        depth: 'Deep',
        xp: 150,
        text: 'New Architecture: explain your own 0.81 migration at Fabric, TurboModules and JSI depth',
        reason: '0.81 runs the New Architecture by default, so every senior RN loop will ask you how it works'
      }
    ]
  },
  {
    id: 't1w4',
    num: 'WEEK 04',
    title: 'Build Under The Clock',
    theme: 'Machine Coding',
    color: BLUE,
    boss: {
      id: 'boss-t1w4',
      name: 'The Builder',
      challenge: 'Two 90-minute feature builds finished under the clock, both running on a device',
      rewardXP: 400,
      resumeLine: 'Built production-grade list, search and caching features under interview time limits'
    },
    tasks: [
      {
        id: 't1-4',
        day: 'Track A',
        time: '3h',
        depth: 'Action',
        xp: 75,
        text: '3 retargeted applications; screening calls land here — cumulative ~27',
        reason: 'Screening calls are free calibration on whether the new framing lands'
      },
      {
        id: 't1-5',
        day: 'Track A',
        time: '4h',
        depth: 'Medium',
        xp: 75,
        text: 'DSA: two pointers and sliding window',
        reason: 'Two patterns a week keeps this from eating the search'
      },
      {
        id: 't1-rn2',
        day: 'Track B',
        time: '4h',
        depth: 'Deep',
        xp: 150,
        text: 'Machine coding rounds 1 and 2: a paginated list and a debounced search, 90 minutes each',
        reason: 'Indian product companies test mobile engineers by watching them build, not by LeetCode'
      }
    ]
  },
  {
    id: 't1w5',
    num: 'WEEK 05',
    title: 'Performance',
    theme: 'Make It Fast',
    color: BLUE,
    boss: {
      id: 'boss-t1w5',
      name: 'The Optimizer',
      challenge: 'A measured before-and-after on cold start or a heavy list, with the numbers written down',
      rewardXP: 400,
      resumeLine: 'Cut cold-start time with parallel initialization and a tiered LRU cache, measured on release builds'
    },
    tasks: [
      {
        id: 't1-7',
        day: 'Track A',
        time: '3h',
        depth: 'Action',
        xp: 75,
        text: '3 retargeted applications — cumulative ~30',
        reason: 'Steady four a week beats a heroic week followed by three dead ones'
      },
      {
        id: 't1-8',
        day: 'Track A',
        time: '3h',
        depth: 'Deep',
        xp: 100,
        text: 'Rehearse the 10-minute Zonesso architecture walkthrough with no notes',
        reason: 'Seniors explain their architecture fluently under pressure; that fluency is rehearsed, not innate'
      },
      {
        id: 't1-rn3',
        day: 'Track B',
        time: '4h',
        depth: 'Deep',
        xp: 150,
        text: 'Performance, measured: profile cold start and your heaviest list, fix one thing, record before and after',
        reason: 'Your cold-start work has no number on the CV yet. A number you measured is worth ten you read.'
      }
    ]
  },
  {
    id: 't1w6',
    num: 'WEEK 06',
    title: 'Gate 2',
    theme: 'The RN Answer',
    color: BLUE,
    boss: {
      id: 'boss-t1w6',
      name: 'The Specialist',
      challenge:
        'GATE 2 (11 Oct) — 3+ first-round interviews from ~33 targeted applications, and your RN depth answers rehearsed',
      rewardXP: 700,
      resumeLine:
        'Designed the mobile architecture of a production marketplace: offline caching, payments with server revalidation and deep-link handling'
    },
    tasks: [
      {
        id: 't1-10',
        day: 'Track A',
        time: '4h',
        depth: 'Deep',
        xp: 100,
        text: '3 applications (~33 total, then cold applying stops), then per-company prep for every interview',
        reason: 'The system-design format is what gets graded — most candidates lose on structure, not knowledge'
      },
      {
        id: 't1-rn4',
        day: 'Track B',
        time: '3h',
        depth: 'Deep',
        xp: 150,
        text: 'Machine coding round 3, plus a mobile system design of your own marketplace app',
        reason: 'Your marketplace, told as a design answer (offline, payments, deep links), is the easiest strong answer you own'
      },
      {
        id: 't1-12',
        day: 'Track A',
        time: '1h',
        depth: 'Action',
        xp: 75,
        text: 'GATE 2 check: ~33 sent, 3+ first-rounds. Below 3, run career-ops patterns again before sending one more',
        reason: 'A low rate is a targeting failure, not a you failure. More volume on bad targeting just wastes more weeks.'
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Phase T2: Interviews + Brick 2 (Weeks 7-12) - a service you actually own
// ---------------------------------------------------------------------------

export const T2_WEEKS = [
  {
    id: 't2w78',
    num: 'WEEK 07-08',
    title: 'Schema + Service',
    theme: 'Backend Brick Opens',
    color: PURPLE,
    boss: {
      id: 'boss-t2w78',
      name: 'The Porter',
      challenge: 'Zonesso entities in a Postgres schema you designed, served by a NestJS service with versioned migrations',
      rewardXP: 600,
      resumeLine: 'Modelled a production vehicle-marketplace domain relationally and served it from a NestJS service'
    },
    tasks: [
      {
        id: 't2-1',
        day: 'Track A',
        time: '7h',
        depth: 'Action',
        xp: 100,
        text: 'Referrals and replies only, plus interviews. DSA: trees, BFS, DFS — ~30 mediums total, then stop',
        reason: 'Applications drop because interviews now cost real hours. That is the plan working, not slipping.'
      },
      {
        id: 't2-2',
        day: 'Track A',
        time: '4h',
        depth: 'Deep',
        xp: 100,
        text: 'System design: URL shortener, then a chat system — you built real-time chat, use it',
        reason: 'Designing something you actually shipped beats reciting a blog post'
      },
      {
        id: 't1-3',
        day: 'Track B',
        time: '4h',
        depth: 'Deep',
        xp: 125,
        text: 'Backend brick opens: port user, showroom, vehicle, listing, package and subscription into a Postgres model',
        reason: 'The entities already exist in admin-v2-backend/src/schema — all your effort goes into the modelling, not the domain'
      },
      {
        id: 't2-3',
        day: 'Track B',
        time: '6h',
        depth: 'Deep',
        xp: 150,
        text: 'Brick 2 opens: new NestJS service on Postgres, migrations under version control',
        reason: 'Owning a service end to end is the difference between reading backend and doing backend'
      }
    ]
  },
  {
    id: 't2w910',
    num: 'WEEK 09-10',
    title: 'Correct, Fast, Secure',
    theme: 'Make It Real',
    color: PURPLE,
    boss: {
      id: 'boss-t2w910',
      name: 'The Gatekeeper',
      challenge: 'Database constraints, measured indexes, and role and ownership auth with refresh-token rotation, all tested',
      rewardXP: 600,
      resumeLine: 'Enforced domain rules in the database, cut search latency with measured indexing, and built token rotation with role-based access'
    },
    tasks: [
      {
        id: 't2-5',
        day: 'Track A',
        time: '7h',
        depth: 'Action',
        xp: 100,
        text: 'Final rounds. Design: your marketplace, in their vocabulary',
        reason: 'Your own product reframed in system-design language is the easiest strong answer you own'
      },
      {
        id: 't1-6',
        day: 'Track B',
        time: '4h',
        depth: 'Deep',
        xp: 125,
        text: 'Foreign keys, uniqueness and check constraints; write the listings search query and run EXPLAIN ANALYZE',
        reason: 'First contact with a query plan is the moment backend stops being someone else’s job'
      },
      {
        id: 't1-9',
        day: 'Track B',
        time: '4h',
        depth: 'Deep',
        xp: 125,
        text: 'Composite, partial and covering indexes; measure before and after and record the numbers',
        reason: 'A number you measured yourself is worth ten opinions you read'
      },
      {
        id: 't2-4',
        day: 'Track B',
        time: '5h',
        depth: 'Deep',
        xp: 125,
        text: 'Authorization for real: role guards, refresh-token rotation, revocation on logout',
        reason: 'Copied passport-jwt is the single most probed weak spot for mobile engineers moving to backend'
      }
    ]
  },
  {
    id: 't2w1112',
    num: 'WEEK 11-12',
    title: 'Deploy + Negotiate',
    theme: 'Backend Brick Closes',
    color: PURPLE,
    boss: {
      id: 'boss-t2w1112',
      name: 'The Service Owner',
      challenge:
        'GATE 3 (8 Nov) — 2 processes at final stage, and the backend brick deployed with CI, logs, a health endpoint and one real alert',
      rewardXP: 800,
      resumeLine:
        'Deployed and operated a containerized NestJS service with CI, structured logging, health checks and alerting'
    },
    tasks: [
      {
        id: 't2-8',
        day: 'Track B',
        time: '4h',
        depth: 'Medium',
        xp: 100,
        text: 'Docker Compose (API, Postgres, Redis) and GitHub Actions running tests on every push',
        reason: 'You already ship Bitbucket Pipelines for mobile — this is the same skill, rebuilt from first principles'
      },
      {
        id: 't2-9',
        day: 'Track B',
        time: '5h',
        depth: 'Deep',
        xp: 150,
        text: 'Deploy Brick 2 for real: health endpoint, structured logs with request id, one alert that reaches your phone',
        reason: 'The moment this is public, full-stack stops being a claim and becomes a demo'
      },
      {
        id: 't2-10',
        day: 'Track A',
        time: '3h',
        depth: 'Deep',
        xp: 125,
        text: 'Stop applying. Negotiate: anchor at the top of your band, walk away below Rs 20L, run career-ops offer-prep before signing',
        reason: 'Closing two live processes is worth more than opening ten new ones this late'
      },
      {
        id: 't2-11',
        day: 'Track B',
        time: '2h',
        depth: 'Medium',
        xp: 100,
        text: 'README with the architecture diagram and the trade-offs you chose',
        reason: 'An undocumented repo is a repo nobody reads — the write-up is half the artifact'
      },
      {
        id: 't1-11',
        day: 'Track B',
        time: '3h',
        depth: 'Deep',
        xp: 150,
        text: 'Write the SQL-vs-Mongo decision doc for the Zonesso domain',
        reason: 'This turns "walk me through a schema you designed" from a dead end into your strongest ten minutes'
      },
      {
        id: 't2-12',
        day: 'Track A',
        time: '4h',
        depth: 'Deep',
        xp: 75,
        text: 'GATE 3 check: 2 processes at final stage. If zero, buy two paid mocks this week',
        reason: 'Zero finals from five first-rounds is an execution problem — more applications will not fix it'
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Phase T3: Close + Brick 3 (Weeks 13-16, then month 5+)
// ---------------------------------------------------------------------------

export const T3_WEEKS = [
  {
    id: 't3w1314',
    num: 'WEEK 13-14',
    title: 'Compress + Decide',
    theme: 'Close',
    color: GREEN,
    boss: {
      id: 'boss-t3w1314',
      name: 'The Decider',
      challenge: 'Every live process has a decision date in the same week, and you chose on substance, not on who answered first',
      rewardXP: 600,
      resumeLine: 'Ran a targeted two-market search to competing offers'
    },
    tasks: [
      {
        id: 't3-1',
        day: 'Track A',
        time: '3h',
        depth: 'Action',
        xp: 125,
        text: 'Compress timelines against competing processes',
        reason: 'A competing process is worth more than every negotiation script ever written'
      },
      {
        id: 't3-2',
        day: 'Track A',
        time: '2h',
        depth: 'Action',
        xp: 100,
        text: 'Decide, log the outcome, archive the artifacts',
        reason: 'The tracker only pays off if you close the loop on every process'
      }
    ]
  },
  {
    id: 't3w1516',
    num: 'WEEK 15-16',
    title: 'Sign',
    theme: 'Gate 4',
    color: GREEN,
    boss: {
      id: 'boss-t3w1516',
      name: 'The Closer',
      challenge:
        'GATE 4 (20 Dec) — signed at Rs 20L+ (India) or AED 22k+/month (Gulf), and the backend brick live behind a public URL',
      rewardXP: 1000,
      resumeLine: 'Moved to a senior mobile role with a deployed backend service behind a public URL'
    },
    tasks: [
      {
        id: 't3-5',
        day: 'Track A',
        time: '2h',
        depth: 'Action',
        xp: 100,
        text: 'Notice period. Keep one backup process warm until you have signed',
        reason: 'Offers fall through; a warm second process costs nothing and saves everything'
      },
      {
        id: 't3-7',
        day: 'Track A',
        time: '1h',
        depth: 'Action',
        xp: 100,
        text: 'Signed. Update the tracker and thank every referrer by name',
        reason: 'The people who referred you are the people who will refer you again'
      }
    ]
  },
  {
    id: 't3m5',
    num: 'MONTH 05+',
    title: 'Compound',
    theme: 'After The Move',
    color: GREEN,
    boss: {
      id: 'boss-t3m5',
      name: 'The Full-Stack Engineer',
      challenge: 'One internal AI feature shipped to real users at the new company, on infrastructure you understand',
      rewardXP: 1200,
      resumeLine: 'Proposed and shipped an internal AI feature to production users, owning it from data model to deployment'
    },
    tasks: [
      {
        id: 't2-6',
        day: 'Track B',
        time: '5h',
        depth: 'Deep',
        xp: 150,
        text: 'Redis caching on listings and search, with an invalidation policy you can defend out loud',
        reason: 'Anyone can add a cache; the interview question is always about invalidation'
      },
      {
        id: 't2-7',
        day: 'Track B',
        time: '5h',
        depth: 'Deep',
        xp: 150,
        text: 'BullMQ image-processing queue: retries, idempotency, dead-letter',
        reason: 'Same job your service already does with sharp and tinify — this time you built the machinery'
      },
      {
        id: 't3-3',
        day: 'Track B',
        time: '5h',
        depth: 'Deep',
        xp: 150,
        text: 'Brick 3 opens: pgvector, embeddings over listing descriptions, semantic search beside the keyword filter',
        reason: 'AI on top of a real backend commands a premium; AI without one is a demo everybody has'
      },
      {
        id: 't3-4',
        day: 'Track B',
        time: '4h',
        depth: 'Deep',
        xp: 150,
        text: 'RAG properly: chunking, retrieval quality, a small eval set and a number you can quote',
        reason: 'Measured beats vibed, and the number is what makes it interview-proof'
      },
      {
        id: 't3-6',
        day: 'Track B',
        time: '3h',
        depth: 'Medium',
        xp: 150,
        text: 'Write Brick 3 up publicly with the trade-offs and the failure modes',
        reason: 'This is the artifact that changes your inbound for the next two years'
      },
      {
        id: 't3-8',
        day: 'Track B',
        time: '3h',
        depth: 'Deep',
        xp: 125,
        text: 'Reposition freelance: quote whole systems — API, database, deploy, CI — at 2-3x the RN rate',
        reason: 'RN hands compete with thousands; one throat to choke is a different market entirely'
      },
      {
        id: 't3-9',
        day: 'Track B',
        time: '8h',
        depth: 'Deep',
        xp: 200,
        text: 'Distributed systems: replication, sharding, consistency, CAP',
        reason: 'The old Phase 3 had this right — it just had the timing wrong by four months'
      },
      {
        id: 't3-10',
        day: 'Track B',
        time: '6h',
        depth: 'Deep',
        xp: 200,
        text: 'Observability and cost ownership on AWS: tracing, dashboards, and the monthly bill',
        reason: 'Knowing what your service costs is the line between senior and staff-adjacent'
      },
      {
        id: 't3-11',
        day: 'Track B',
        time: '8h',
        depth: 'Deep',
        xp: 250,
        text: 'Propose and ship one internal AI feature to real users at the new company',
        reason: 'Shipped to real users beats any side project, and it is the story for the move after this one'
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Task details: the "How to do this" drawer under every task.
// Fields: objective, steps[], resources[], doneWhen. Steps state the scope
// ("these 9 problems, then stop") so a task can't silently grow.
// ---------------------------------------------------------------------------

const a = (label, url) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;

const NEETCODE = a('NeetCode 150', 'https://neetcode.io/practice');
const SD_PRIMER = a('System Design Primer', 'https://github.com/donnemartin/system-design-primer');
const NEST = (label, path) => a(label, `https://docs.nestjs.com/${path}`);
const PG = (label, path) => a(label, `https://www.postgresql.org/docs/current/${path}`);

const APPLY_STEPS = [
  `Read the JD and write down its top 5 requirements (5 min).`,
  `Paste the link on the /interview page (Paste a link) or run career-ops on it. Skip anything that scores below B, because a low-fit application burns 45 minutes for nothing.`,
  `Tailor the top third of the CV to those 5 requirements, using only claims you can defend for 10 minutes (15 min).`,
  `Write a 3-sentence note: why them, one proof point, the ask (10 min).`,
  `Find one person at the company (hiring manager or engineer) and send a short message (10 min).`,
  `Log it in the tracker the same day.`
];

export const TWO_TRACK_DETAILS = {
  // ---- T0 · Week 1 ----
  't0-1': {
    objective: `A one-page CV that a recruiter searching "React Native" finds, and that shows you own more than screens.`,
    steps: [
      `Headline: "Senior React Native Engineer" (every role in your pipeline is RN or mobile). Add "+ Next.js web" as the secondary line.`,
      `Summary, 3 lines: 5 years, sole owner of a production marketplace app, and one number (the 0.81 migration: 39% less code, 57 dependencies removed).`,
      `Lead the Zonesso bullets with what's rare: five payment rails including N-Genius and Apple IAP, Arabic/RTL, release engineering (Fastlane, Detox in CI).`,
      `Keep backend honest: "light NestJS changes" stays light. The weeks 7-12 backend brick is what upgrades that line.`,
      `Keep it in career-ops cv.md and render with career-ops pdf.`
    ],
    resources: [a('Tech Interview Handbook: resume', 'https://www.techinterviewhandbook.org/resume/'), `career-ops cv.md`],
    doneWhen: `One page. The headline says Senior React Native Engineer. Every number traces to something you can show, and payments, RTL and releases are all above the fold.`
  },
  't0-2': {
    objective: `Set salary targets from live market data, so recruiter calls anchor in the right band and you don't chase numbers the market doesn't pay.`,
    steps: [
      `Real numbers as of Sep 2026: RN at 4-6 years has a Glassdoor median of about Rs 7-8L across all company types. RN mid-level at product companies earns Rs 12-30L. Senior backend (5+ years) at product companies earns Rs 30-55L. Senior React in Dubai earns AED 22-45k/month, tax-free.`,
      `In career-ops config/profile.yml set: India target Rs 20-30L, stretch Rs 30-40L (only after Bricks 1-2 are real and only at funded product companies), Gulf AED 22-30k/month.`,
      `Pick one walk-away number before any call. A common rule of thumb is current CTC + 30%. Below that, switching isn't worth the risk.`,
      `Apply for 20L+ only at product companies. IT services firms pay 2-3x less for identical experience, so don't expect this band there.`,
      `Before quoting, check each target company on Glassdoor/AmbitionBox, because the band varies a lot by company and city (Bangalore runs 10-20% higher).`,
      `Recruiter script: "Based on the scope I'm targeting 25-30L fixed, flexible on structure." Never state your current CTC first.`
    ],
    resources: [
      a('Glassdoor: RN developer salaries, India', 'https://www.glassdoor.co.in/Salaries/react-native-developer-salary-SRCH_KO0,22.htm'),
      a('Jobrix: React salary by experience, India 2026', 'https://www.tryjobrix.com/learn/react-developer-salary-india-2026'),
      a('Recrew: senior backend engineer salary, India 2026', 'https://www.recrew.ai/salary-guides/senior-backend-engineer'),
      a('HireDeveloper.ae: React developer pay in Dubai 2026', 'https://hiredeveloper.ae/blog/hire-react-developer-dubai')
    ],
    doneWhen: `profile.yml has target, stretch, walk-away and Gulf numbers, and you can say your number out loud without hedging.`
  },
  't0-3': {
    objective: `A public URL a recruiter can open on a phone and, within 30 seconds, see shipped work.`,
    steps: [
      `One-page portfolio. Next.js on Vercel's free tier is fine since you already know it. Sections: headline, 3 projects (screenshot, store link, one metric each), contact.`,
      `Projects: Zonesso (public motors.zonesso.com), Eco Crew (50K+ downloads), plus one more. No proprietary code or internal screens.`,
      `GitHub: pin 4-6 repos, each with a README (what it is, stack, screenshot, how to run). Archive tutorial repos and dead forks.`,
      `Put both URLs in cv.md, LinkedIn and career-ops profile.yml.`,
      `Hard cap: 3 hours. Ship the plain version and don't design a portfolio for a week.`
    ],
    resources: [a('Vercel', 'https://vercel.com'), a('GitHub: profile README', 'https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme')],
    doneWhen: `Both URLs load on a phone, the portfolio shows 3 projects with a metric each, and GitHub has 4+ pinned repos with READMEs.`
  },
  't0-4': {
    objective: `40 named companies you would actually join, each with a reason you fit.`,
    steps: [
      `25 Gulf companies (UAE/KSA) with mobile product teams: marketplaces, auto, proptech, fintech. Search LinkedIn Jobs for "React Native" in UAE/Saudi, posted in the last 30 days. Lead with what they need: N-Genius and Apple IAP payments, Arabic/RTL, a Dubai marketplace. Gulf employers sponsor visas as standard.`,
      `15 India product companies hiring remote: funded startups and product companies, no IT services.`,
      `Skip Europe roles that expect right-to-work. You need sponsorship there, and they rarely reply.`,
      `For each: role link, one-line fit, one named contact (hiring manager or ex-colleague), tier A or B.`,
      `Load them into career-ops (pipeline or portals.yml) so the tracker and /interview picker can see them.`,
      `Stop at 40.`
    ],
    resources: [a('LinkedIn Jobs', 'https://www.linkedin.com/jobs/'), a('Wellfound (India startups)', 'https://wellfound.com/jobs'), a('Bayt (Gulf)', 'https://www.bayt.com'), `career-ops scan`],
    doneWhen: `40 rows, each with a link and a fit line, and at least 10 with a named person.`
  },
  't0-9': {
    objective: `Measure the search by conversion rates, not by how many applications you sent.`,
    steps: [
      `Write it down once: 33 applications × 15% ≈ 5 first rounds → ~2 finals → 1-2 offers.`,
      `The 15% is this plan's assumption. After 20 applications, replace it with your real rate.`,
      `Track three numbers weekly: applications sent, first-round rate, final-round rate.`,
      `Rule: if the first-round rate is under 10% after 20 applications, fix targeting and the CV (career-ops patterns). Don't send more.`
    ],
    resources: [`The Job Tracker panel in this app`, `career-ops patterns`],
    doneWhen: `The three numbers are somewhere you look at every week.`
  },

  // ---- T0 · Week 2 ----
  't0-5': {
    objective: `5 rehearsed stories that cover what every interview loop asks, all traceable to your CV.`,
    steps: [
      `Pick 5 themes: hardest technical problem (the RN migration), a performance win, a disagreement you handled, leading or mentoring, a failure and what you changed afterwards.`,
      `Write each in STAR format, 200 words max. The Result needs a number that is on your CV.`,
      `60-second pitch: who you are, what you own, one proof, what you want next.`,
      `Say each one out loud with a timer, 2 minutes max per story. Record once and listen back.`,
      `Save them in career-ops interview-prep/story-bank.md. The /interview page reads that file.`
    ],
    resources: [a('Tech Interview Handbook: behavioral', 'https://www.techinterviewhandbook.org/behavioral-interview/'), `interview-prep/story-bank.md`],
    doneWhen: `5 stories, each under 2 minutes spoken, every number on your CV, and a pitch that fits in 60 seconds.`
  },
  't0-6': {
    objective: `5 properly tailored applications, about 45 minutes each.`,
    steps: APPLY_STEPS,
    resources: [`/interview → Paste a link`, `career-ops tracker`],
    doneWhen: `5 sent, all logged, each with its own tailored CV version.`
  },
  't0-7': {
    objective: `10 specific referral asks to people who already know your work.`,
    steps: [
      `List 15 people: ex-colleagues, ex-managers, clients who moved companies. Message the best 10.`,
      `Be specific: "I'm looking at Senior Product Engineer roles at X and Y. Would you be open to referring me, or telling me who's hiring there?" Include your CV link.`,
      `Follow up once after 5 days, then stop.`,
      `Log every reply in career-ops contacts.`
    ],
    resources: [`career-ops contacts`],
    doneWhen: `10 sent, follow-ups dated, replies logged.`
  },
  't0-8': {
    objective: `Confirm the launch actually happened before any building starts.`,
    steps: [
      `Check three things: 5 applications sent, CV live, portfolio public.`,
      `The gate date (13 Sep) has passed. If any of the three is still "no", that is your only job this week. Track B waits until all three are yes.`
    ],
    resources: [],
    doneWhen: `All three are yes, with the date you hit them written down.`
  },

  // ---- T1 · Weeks 3-6 ----
  't1-1': {
    objective: `3 retargeted applications (Gulf and India-remote only), and every recruiter gets a reply within 4 hours.`,
    steps: [
      ...APPLY_STEPS,
      `Turn on notifications for LinkedIn and email from recruiters. Keep a reply template ready: two time slots, notice period, target band.`
    ],
    resources: [`/interview → Paste a link`],
    doneWhen: `3 sent, all in the Gulf or India-remote groups, and no recruiter message waited more than 4 hours.`
  },
  't1-2': {
    objective: `Recognise and solve hashmap/array problems in about 25 minutes each.`,
    steps: [
      `Scope: 2h this week (the live interview comes first), finish the rest next week. The 9 problems in the ${NEETCODE} "Arrays & Hashing" section, then stop. About 30 problems is the whole DSA budget.`,
      `Contains Duplicate, Valid Anagram, Two Sum, Group Anagrams, Top K Frequent Elements, Encode and Decode Strings, Product of Array Except Self, Valid Sudoku, Longest Consecutive Sequence.`,
      `Timebox 25 min per problem. If stuck, read the solution, then redo it from scratch the next day without looking.`,
      `Write in TypeScript, the language you'll interview in, and state the time/space complexity out loud.`
    ],
    resources: [NEETCODE, a('Tech Interview Handbook: Grind 75', 'https://www.techinterviewhandbook.org/grind75/')],
    doneWhen: `You can solve an unseen easy/medium hashmap problem in ~25 minutes and explain its complexity.`
  },
  't1-3': {
    objective: `A Postgres schema for user, showroom, vehicle, listing, package and subscription that you designed yourself.`,
    steps: [
      `Read admin-v2-backend/src/schema and list each entity's fields and relations on paper (1h).`,
      `Decide each relation deliberately (one-to-many, many-to-many, what owns what) and draw an ERD.`,
      `Write schema.sql by hand, with no ORM. Primary keys, proper types: numeric for money, timestamptz for time, text with a check for enums.`,
      `Run Postgres in Docker, apply the schema, and seed about 20 rows per table with a script.`,
      `Write down every place Mongo embedded data that you normalized, and why. That note becomes the SQL-vs-Mongo decision doc in weeks 11-12.`
    ],
    resources: [PG('Postgres: data definition', 'ddl.html'), a('dbdiagram.io', 'https://dbdiagram.io'), a('Postgres Docker image', 'https://hub.docker.com/_/postgres')],
    doneWhen: `schema.sql runs clean on a fresh database, the seed loads, and you have an ERD image.`
  },
  't1-4': {
    objective: `3 more retargeted applications (~27 total), plus notes from every screening call.`,
    steps: [
      ...APPLY_STEPS,
      `Before each screen: 60-second pitch, band, notice period, and a one-line "why I'm moving".`,
      `After each call, write 3 lines: what they asked, what landed, what didn't.`
    ],
    resources: [`/interview → From pipeline → Generate prep brief`],
    doneWhen: `~27 sent total, and every screen has notes.`
  },
  't1-5': {
    objective: `Two patterns: two pointers and sliding window.`,
    steps: [
      `From ${NEETCODE}, Two Pointers: Valid Palindrome, Two Sum II, 3Sum, Container With Most Water. Leave Trapping Rain Water for later.`,
      `Sliding Window: Best Time to Buy and Sell Stock, Longest Substring Without Repeating Characters, Longest Repeating Character Replacement, Permutation in String.`,
      `8 problems, 25 min each, then stop.`,
      `Learn the trigger: "sorted array / find a pair" → two pointers, "longest or shortest contiguous substring" → sliding window.`
    ],
    resources: [NEETCODE],
    doneWhen: `You can name the pattern within 2 minutes of reading a new problem.`
  },
  't1-6': {
    objective: `The database, not the app code, rejects bad data, and you've read your first real query plan.`,
    steps: [
      `Add foreign keys with an explicit ON DELETE (CASCADE or RESTRICT), decided per relation, with the reason written as a comment.`,
      `UNIQUE constraints, including a partial unique index for rules like "one active subscription per user".`,
      `CHECK constraints (price > 0, end_date > start_date, allowed statuses) and NOT NULL wherever a value is truly required.`,
      `List the rules the app currently enforces in code and move each one that belongs in the database.`,
      `Seed ~100k listings with generate_series, write the listings search query (city, make, price range, newest first), and run EXPLAIN ANALYZE. Save the output and note any Seq Scan and the total time.`
    ],
    resources: [PG('Postgres: constraints', 'ddl-constraints.html'), PG('Postgres: using EXPLAIN', 'using-explain.html'), a('explain.dalibo.com (plan visualiser)', 'https://explain.dalibo.com')],
    doneWhen: `Inserting bad data fails at the database, and you have the saved plan with its execution time.`
  },
  't1-7': {
    objective: `3 more retargeted applications (~30 total).`,
    steps: APPLY_STEPS,
    resources: [`/interview → Paste a link`],
    doneWhen: `~30 sent total, all logged.`
  },
  't1-8': {
    objective: `A 10-minute Zonesso architecture walkthrough you can give with no notes.`,
    steps: [
      `Structure: the product in 2 sentences → diagram (client, API, database, third parties) → 2 key decisions and their trade-offs → the migration story → what you'd change now.`,
      `Draw the diagram from memory on a blank page.`,
      `Record 10 minutes and watch it back. Fix the parts where you went vague.`,
      `Do it 3 times this week, once with someone asking "why?" after every decision.`
    ],
    resources: [a('Excalidraw', 'https://excalidraw.com'), `/interview prep brief for likely follow-up questions`],
    doneWhen: `10 minutes, no notes, diagram drawn live, and you can answer "why not X?" for each decision.`
  },
  't1-9': {
    objective: `A measured before-and-after on the search query, with the numbers written down.`,
    steps: [
      `Baseline: EXPLAIN (ANALYZE, BUFFERS) on the search query from the constraints task. Record the milliseconds.`,
      `Composite index matching the filter and sort order, e.g. (city, make, created_at DESC). Re-measure.`,
      `Partial index for the common filter (WHERE status = 'active'). Re-measure.`,
      `Covering index (INCLUDE the list-page columns) and check for an Index Only Scan.`,
      `Also measure one bulk insert before and after, because indexes make writes slower.`,
      `Write a table: index, before ms, after ms, plan node used.`
    ],
    resources: [a('Use The Index, Luke', 'https://use-the-index-luke.com'), PG('Postgres: indexes', 'indexes.html')],
    doneWhen: `A before/after table with real numbers, and you can explain why column order in a composite index matters.`
  },
  't1-10': {
    objective: `The last 3 cold applications (~33 total), plus a prep plan for every interview on the calendar. After this: referrals and replies only.`,
    steps: [
      ...APPLY_STEPS,
      `For each scheduled interview: /interview → From pipeline → Build prep plan, then Save.`,
      `System design format, timed at 45 min: requirements (5 min) → API (5) → data model (10) → scale: bottlenecks, cache, queue (15) → trade-offs (5). Practise it once on the company's own product.`
    ],
    resources: [`/interview → From pipeline`, SD_PRIMER],
    doneWhen: `Every scheduled interview has a saved prep plan in interview-prep/.`
  },
  't1-11': {
    objective: `A one-page decision record for choosing Postgres over Mongo for this domain.`,
    steps: [
      `Context: the entities and the real access patterns (search, listing detail, subscriptions/billing).`,
      `Options: Mongo as it is today vs Postgres.`,
      `Criteria: relations, transactions for money, query flexibility, operations.`,
      `Decision and consequences, including what you would keep in Mongo, if anything.`,
      `Include your before/after index numbers as evidence, and link the doc from the repo README.`
    ],
    resources: [a('ADR template (Michael Nygard)', 'https://github.com/joelparkerhenderson/architecture-decision-record')],
    doneWhen: `One page, one clear decision, 3+ trade-offs backed by evidence, and you can defend it for 10 minutes.`
  },
  't1-12': {
    objective: `Check the search is converting before sending one more application.`,
    steps: [
      `Count applications sent (~33 expected) and first-round interviews (target 3+).`,
      `If you have fewer than 3: run career-ops patterns and look at where rejections cluster (seniority, stack, location, company type).`,
      `Change the CV or the target list based on what it shows, and only then resume applying.`
    ],
    resources: [`career-ops patterns`],
    doneWhen: `Numbers recorded. If below 3, a written change to targeting.`
  },

  // ---- T1 · Week 3: this week's real priorities ----
  't1-13': {
    objective: `Walk into the Qrusible interview prepared. It's the only live process you have.`,
    steps: [
      `Open career-ops interview-prep/qrusible-full-stack-senior-engineer-react-native.md. The company research is already there.`,
      `Create interview-prep/story-bank.md with your 5 STAR stories (see the Week 2 story task). This file doesn't exist yet, and every prep mode reads it.`,
      `/interview → From pipeline → Qrusible → Build prep plan with the interview date. Save it.`,
      `The title says "Full Stack". Prepare an honest backend answer: the NestJS work you actually did at Zonesso, what you haven't done yet, and how you'd ramp up (the Postgres and NestJS brick in weeks 7-12 is your concrete plan).`,
      `Say your first 10 minutes out loud once: pitch, the Zonesso walkthrough, one story.`
    ],
    resources: [`career-ops interview-prep/qrusible-*.md`, `/interview → From pipeline`],
    doneWhen: `story-bank.md exists with 5 stories, the prep plan is saved, and the honest backend answer is rehearsed.`
  },
  't1-14': {
    objective: `Stop spending applications on roles that can't hire you.`,
    steps: [
      `Run career-ops patterns on your tracker.`,
      `Tag every open application: India-remote OK / Gulf (they sponsor) / needs EU right-to-work.`,
      `Stop applying to the third group unless the posting explicitly offers sponsorship or relocation.`,
      `Next applications, in order: Gulf marketplaces, fintech and proptech (anyone on N-Genius, Arabic/RTL apps, vehicle or property marketplaces), then India product companies hiring remote.`,
      `For Gulf applications, put N-Genius and Apple IAP payments, Arabic/RTL and Zonesso (Dubai) in the first 3 lines of the CV.`
    ],
    resources: [`career-ops patterns`, a('Bayt (Gulf)', 'https://www.bayt.com'), a('LinkedIn Jobs', 'https://www.linkedin.com/jobs/')],
    doneWhen: `Every open application is tagged, and the next 3 you send are all in the first two groups.`
  },
  't1-rn1': {
    objective: `Explain the New Architecture for 10 minutes using your own 0.81 migration as the example.`,
    steps: [
      `Check the real state of the Zonesso app first: newArchEnabled in android/gradle.properties, and the iOS setting. Only claim what you can verify.`,
      `Learn the four pieces: the old bridge (async, JSON-serialized messages) vs JSI (JavaScript calling C++ directly), Fabric (the new renderer, synchronous layout, React 19 concurrent features), TurboModules (lazy-loaded, typed through Codegen), and bridgeless mode.`,
      `List the libraries that broke or needed upgrades during your migration and why. That list is your story.`,
      `Write one page: what changed in your app, and what it bought you (startup, lists, fewer dependencies).`,
      `Answer out loud: "What is JSI?", "Why are TurboModules lazy?", "How would you write a native module today?" (a Codegen spec).`
    ],
    resources: [a('React Native: architecture overview', 'https://reactnative.dev/architecture/landing-page'), a('RN 0.76: New Architecture by default', 'https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture'), a('Turbo Native Modules', 'https://reactnative.dev/docs/turbo-native-modules-introduction')],
    doneWhen: `10 minutes, no notes, with every concept tied to something that happened in your migration.`
  },
  't1-rn2': {
    objective: `Two feature builds finished inside 90 minutes each, the way Indian product companies test mobile engineers.`,
    steps: [
      `Beforehand: a blank TypeScript RN or Expo project, with navigation and TanStack Query installed, so the clock is spent building.`,
      `Round 1: a product list from dummyjson.com/products (limit/skip) with FlashList infinite scroll, pull-to-refresh, and loading, empty and error states.`,
      `Round 2: search with a 300ms debounce, cancel stale requests, cache results with TanStack Query, and show an offline banner.`,
      `Strict 90-minute timer, screen recorded. Afterwards spend 15 minutes writing down what you'd refactor and why. Interviewers ask exactly that.`
    ],
    resources: [a('DummyJSON products API', 'https://dummyjson.com/docs/products'), a('FlashList', 'https://shopify.github.io/flash-list/'), a('TanStack Query', 'https://tanstack.com/query/latest')],
    doneWhen: `Both run on a device inside the time limit, and you can explain every state and caching choice.`
  },
  't1-rn3': {
    objective: `Put a number you measured yourself on your performance work.`,
    steps: [
      `Cold start on a mid-range Android, release build: adb shell am start -W <package>/.MainActivity, 5 runs, take the median TotalTime.`,
      `Profile your heaviest list screen with the React DevTools profiler and find components that re-render when they shouldn't.`,
      `Fix one thing (memoize a row, move a heavy import behind a lazy load, trim startup work) and re-measure.`,
      `Turn your Zonesso cold-start work (Promise.allSettled, the LRU cache) into a story with a before/after number. The CV has the technique but not the number.`
    ],
    resources: [a('React Native: performance overview', 'https://reactnative.dev/docs/performance'), a('React DevTools profiler', 'https://react.dev/learn/react-developer-tools')],
    doneWhen: `A before/after number you measured on a release build, and you can quote it.`
  },
  't1-rn4': {
    objective: `One more timed build, plus your own marketplace told as a mobile system design answer.`,
    steps: [
      `Round 3 (90 min): a cart with optimistic add/remove, persisted with MMKV, rolled back on failure.`,
      `Mobile system design (45 min, timed): Zonesso. Cover the listings feed and offline cache, image loading, the payment flow with server revalidation, deep links plus the push cold-open race you solved, analytics, and releases.`,
      `Say the trade-offs out loud: what you cache and for how long, what happens offline, how you'd roll back a bad release.`
    ],
    resources: [a('MMKV', 'https://github.com/mrousavy/react-native-mmkv'), `Your Zonesso architecture notes (Week 5)`],
    doneWhen: `Round 3 done inside 90 minutes, and a 45-minute design of your own app with 3 trade-offs defended.`
  },

  // ---- T2 · Weeks 7-12 ----
  't2-1': {
    objective: `Keep the pipeline alive through referrals while interviews run, and finish the core DSA patterns.`,
    steps: [
      `No more cold applications. Chase referrals, reply fast, and apply only when someone refers you or a recruiter reaches out.`,
      `DSA, 45 min on non-interview days. From ${NEETCODE} Trees: Invert Tree, Max Depth, Same Tree, Lowest Common Ancestor of a BST, Level Order Traversal (BFS), Right Side View, Validate BST.`,
      `Graphs, just two: Number of Islands, Clone Graph (BFS and DFS).`,
      `That brings you to about 30 problems in total. Stop there. More DSA past this point is procrastination.`
    ],
    resources: [NEETCODE],
    doneWhen: `~9 problems done, and every referral lead followed up.`
  },
  't2-2': {
    objective: `Two timed system designs, one of them grounded in the chat you actually built.`,
    steps: [
      `URL shortener: requirements, API (POST /shorten, GET /:code), data model, ID generation (base62 counter vs hash, collisions), caching for a read-heavy load, rough capacity numbers.`,
      `Chat: 1:1 and groups, WebSocket connections, message storage, delivery/read receipts, offline push, ordering. Use your real-time chat as the anchor.`,
      `Each one: 45 min with a timer, draw the diagram, then compare against the written solution and note what you missed.`
    ],
    resources: [SD_PRIMER, `"System Design Interview" Vol 1 (Alex Xu), chapters on URL shortener and chat`],
    doneWhen: `Both done inside 45 minutes each, with a diagram and 3 trade-offs apiece.`
  },
  't2-3': {
    objective: `A NestJS service on Postgres that you own end to end, with versioned migrations.`,
    steps: [
      `New repo: NestJS plus Prisma or TypeORM. Pick one and don't switch.`,
      `Turn the schema you wrote by hand into migrations. synchronize/auto-sync stays off.`,
      `Endpoints: listings CRUD plus search using your indexed query.`,
      `DTO validation (class-validator) and correct HTTP status codes on errors.`,
      `One e2e test for search with Supertest.`
    ],
    resources: [a('NestJS docs', 'https://docs.nestjs.com'), NEST('NestJS: databases', 'techniques/database'), a('Prisma Migrate', 'https://www.prisma.io/docs/orm/prisma-migrate')],
    doneWhen: `Fresh clone → migrate → tests pass, and auto-sync is off.`
  },
  't2-4': {
    objective: `Auth you designed yourself: short access tokens, rotating refresh tokens, real revocation, role and ownership checks.`,
    steps: [
      `Access token: JWT, about 15 minutes. Refresh token: random and opaque, stored hashed in a table (user_id, family_id, expires_at, revoked_at).`,
      `/auth/refresh verifies the token, revokes it and issues a new pair (rotation). If a revoked token is ever reused, revoke the whole family (reuse detection).`,
      `/auth/logout revokes the family.`,
      `RolesGuard + @Roles (admin, dealer, user), plus an ownership check: a dealer can't edit another dealer's listing even though the role matches.`,
      `A test for each of the above.`
    ],
    resources: [NEST('NestJS: authentication', 'security/authentication'), NEST('NestJS: authorization', 'security/authorization'), a('OWASP JWT cheat sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html')],
    doneWhen: `Reusing an old refresh token logs the user out everywhere, and tests prove both role and ownership checks.`
  },
  't2-5': {
    objective: `Convert final rounds, with your marketplace ready as a system design answer.`,
    steps: [
      `All Track A hours go to final rounds now.`,
      `Design Zonesso as a system design question: listings search, image upload pipeline, notifications, subscriptions/payments. Give the real scale honestly.`,
      `Rehearse it twice with a 45-minute timer.`,
      `Before each final: /interview → Build prep plan.`
    ],
    resources: [`/interview`, SD_PRIMER],
    doneWhen: `Marketplace design rehearsed twice, and a prep plan saved for every final.`
  },
  't2-6': {
    objective: `Redis caching on listings and search, with an invalidation policy you can defend.`,
    steps: [
      `Cache-aside on GET /listings/:id (TTL 5-10 min) and on popular searches (key = hash of the normalised query, TTL ~60s).`,
      `Invalidation: delete the :id key on update/delete. For search, rely on the short TTL or a per-city version key. Write down why you chose each.`,
      `Measure p95 latency and hit rate before and after (autocannon).`,
      `Know one answer to cache stampede (a lock, or stale-while-revalidate), even if you don't build it.`
    ],
    resources: [NEST('NestJS: caching', 'techniques/caching'), a('Redis docs', 'https://redis.io/docs/latest/'), a('autocannon', 'https://github.com/mcollina/autocannon')],
    doneWhen: `Before/after numbers, and a clear answer to "a listing's price changed; how long until users see it, and why?"`
  },
  't2-7': {
    objective: `An image-processing queue that retries, never duplicates work, and parks failures where you can see them.`,
    steps: [
      `The upload endpoint stores the original and enqueues {listingId, imageKey}.`,
      `The worker resizes to 3 sizes with sharp, compresses (tinify), writes the outputs and updates the database.`,
      `Idempotency: use imageKey as the jobId, and have the worker skip if the outputs already exist.`,
      `attempts: 3 with exponential backoff. After that, move the job to a separate dead-letter queue you can inspect and replay (BullMQ has no built-in DLQ; its failed set or your own queue plays that role).`,
      `Kill the worker mid-job, restart it, and confirm there are no duplicate images.`
    ],
    resources: [a('BullMQ docs', 'https://docs.bullmq.io'), NEST('NestJS: queues', 'techniques/queues')],
    doneWhen: `A forced failure retries 3 times and then lands in the dead-letter queue, and re-uploading the same image doesn't redo the work.`
  },
  't2-8': {
    objective: `One command runs everything locally, and every push runs the tests.`,
    steps: [
      `docker-compose.yml with api, postgres and redis, each with a healthcheck. Multi-stage Dockerfile for the API.`,
      `GitHub Actions on push: install → lint → migrate against a Postgres service container → test.`,
      `Add the CI badge to the README.`
    ],
    resources: [a('Docker Compose docs', 'https://docs.docker.com/compose/'), a('GitHub Actions: PostgreSQL service containers', 'https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/creating-postgresql-service-containers')],
    doneWhen: `Fresh clone → docker compose up works, and a failing test turns CI red.`
  },
  't2-9': {
    objective: `Brick 2 deployed publicly, and you find out it broke before a user does.`,
    steps: [
      `Deploy to a cheap host (Render, Railway, Fly.io or a small Lightsail box) with managed Postgres and Redis.`,
      `/health checks database and Redis connectivity (@nestjs/terminus).`,
      `Structured JSON logs with a request id on every line (nestjs-pino).`,
      `An uptime monitor on /health that pushes to your phone (UptimeRobot or Better Stack free tier).`,
      `Break it on purpose (stop the database) and confirm the alert arrives.`
    ],
    resources: [NEST('NestJS: Terminus health checks', 'recipes/terminus'), a('nestjs-pino', 'https://github.com/iamolegga/nestjs-pino'), a('UptimeRobot', 'https://uptimerobot.com')],
    doneWhen: `Public URL, alert tested end to end, request ids visible in the logs.`
  },
  't2-10': {
    objective: `Convert live processes into the best offer you can get, without leaving money on the table or signing blind.`,
    steps: [
      `Once 2 processes reach the final stage, stop sending new applications.`,
      `Before any number conversation, run career-ops offer-prep in the CLI. It needs a live session, so it isn't in the web UI.`,
      `Don't share your current CTC first. Give a band: "Based on the scope I'm at Rs 26-30L fixed."`,
      `Get the offer in writing. Negotiate fixed pay first, then joining bonus or notice buyout.`,
      `Decide your walk-away before the call (below Rs 20L in India or AED 22k/month in the Gulf, unless the role is a big step up), not during it.`
    ],
    resources: [a('Patrick McKenzie: Salary Negotiation', 'https://www.kalzumeus.com/2012/01/23/salary-negotiation/'), `career-ops offer-prep`],
    doneWhen: `Every offer gets a written counter, and nothing is signed before offer-prep.`
  },
  't2-11': {
    objective: `A README that lets a stranger run the service and understand the decisions behind it.`,
    steps: [
      `Sections: what it is, architecture diagram (Excalidraw or Mermaid), how to run, API overview, key decisions and trade-offs, measured numbers, what's next.`,
      `Link the SQL-vs-Mongo decision record, the cache invalidation policy and the queue idempotency design.`
    ],
    resources: [a('Mermaid diagrams on GitHub', 'https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams')],
    doneWhen: `Someone else can run it in 10 minutes and explain 3 of your decisions back to you.`
  },
  't2-12': {
    objective: `Find out whether the finals are happening, and fix the right thing if they aren't.`,
    steps: [
      `Count processes at final stage (target 2).`,
      `If zero: book 2 mock interviews with a senior engineer this week (a paid platform like interviewing.io, or a senior friend who runs interviews).`,
      `Work out where you're losing, DSA, design or behavioral, from interview notes and your /interview history, and aim the mocks at that.`
    ],
    resources: [a('interviewing.io', 'https://interviewing.io'), `/interview → Recent prep`],
    doneWhen: `Numbers recorded. If zero finals, 2 mocks booked with a specific focus.`
  },

  // ---- T3 · Weeks 13-16 and after ----
  't3-1': {
    objective: `Line up decision dates so you choose between offers instead of accepting the first one.`,
    steps: [
      `With an offer or a late-stage process, tell the others: "I have a deadline on [date]. You're my first choice. Can we speed up the remaining steps?"`,
      `Only say it if it's true. Never invent an offer.`,
      `Ask each company for its remaining steps and dates, and try to land every decision within the same week.`
    ],
    resources: [],
    doneWhen: `Every live process has a known decision date within the same week.`
  },
  't3-2': {
    objective: `Pick the offer on substance, and close the loop on every process.`,
    steps: [
      `Compare: fixed pay, how realistic the variable is, scope (do you own backend?), team, notice buyout.`,
      `Decide, then log every process's outcome in career-ops, rejections included.`,
      `Archive JDs and notes, and decline the others politely.`
    ],
    resources: [`career-ops outcome`],
    doneWhen: `The tracker shows a final outcome for every process.`
  },
  't3-3': {
    objective: `Semantic search over listings running beside the keyword filters.`,
    steps: [
      `Enable pgvector and add an embedding vector column (sized to your model) on listings.`,
      `Generate embeddings for title + description in a BullMQ job (reuse Brick 2).`,
      `Query: normal WHERE filters (price, city) + ORDER BY embedding <=> query_embedding LIMIT 20.`,
      `Add an HNSW index and measure latency with and without it.`
    ],
    resources: [a('pgvector', 'https://github.com/pgvector/pgvector')],
    doneWhen: `A query like "family SUV under budget with low mileage" returns sensible results, with latency measured with the index.`
  },
  't3-4': {
    objective: `A retrieval quality number you can quote, not a demo that "seems good".`,
    steps: [
      `Build an eval set of 30-50 queries, each with the listings that should come back.`,
      `Metric: recall@10 (plus MRR if you want a second number).`,
      `Measure keyword only, then embeddings only, then hybrid. Record all three.`,
      `Change one thing (e.g. put make/model/year into the embedded text) and re-measure.`,
      `Only then add an LLM answer on top, grounded in the retrieved listings with citations.`
    ],
    resources: [a('pgvector: hybrid search', 'https://github.com/pgvector/pgvector#hybrid-search')],
    doneWhen: `A table of approach → recall@10, and you can quote the number.`
  },
  't3-5': {
    objective: `Nothing collapses between offer and joining.`,
    steps: [
      `Agree the resignation and notice timeline in writing.`,
      `Keep one other process alive at a courteous pace until the signed offer letter and background check are both done.`,
      `Decline the backup only after that.`
    ],
    resources: [],
    doneWhen: `Signed letter in hand before the backup is declined.`
  },
  't3-6': {
    objective: `One public write-up of Brick 3 that brings inbound interest.`,
    steps: [
      `1,200-1,800 words on dev.to, Hashnode or LinkedIn: the problem, the architecture, the eval numbers, what failed, the trade-offs.`,
      `One diagram.`,
      `Link it from the portfolio and CV, and share it on LinkedIn.`
    ],
    resources: [a('dev.to', 'https://dev.to'), a('Hashnode', 'https://hashnode.com')],
    doneWhen: `Published, and linked from the portfolio and CV.`
  },
  't3-7': {
    objective: `Close out the search and keep your network warm.`,
    steps: [
      `Update the tracker now. Update LinkedIn on your start date, not before.`,
      `Send each referrer and helper a personal message naming what actually helped.`
    ],
    resources: [],
    doneWhen: `Every referrer thanked individually.`
  },
  't3-8': {
    objective: `Sell whole systems as a freelancer, not React Native hours.`,
    steps: [
      `Check your new employment contract for moonlighting/IP clauses before anything else.`,
      `Offer a fixed-scope package: "MVP: mobile app + API + database + deploy + CI".`,
      `Price by project, not by hour. Look up what comparable full-stack freelancers actually charge before quoting.`,
      `Turn Bricks 1-3 into one case study.`
    ],
    resources: [],
    doneWhen: `Contract checked, a one-page offer, and one case study.`
  },
  't3-9': {
    objective: `A working understanding of replication, partitioning and consistency.`,
    steps: [
      `Read "Designing Data-Intensive Applications" (Kleppmann) chapters 5 (Replication) and 6 (Partitioning), plus the linearizability part of chapter 9. About 8h spread over a month.`,
      `After each chapter, write one page applying it to Zonesso or your new company's system.`
    ],
    resources: [a('Designing Data-Intensive Applications', 'https://dataintensive.net')],
    doneWhen: `You can explain replication lag, why partition keys matter, and what CAP does and doesn't say.`
  },
  't3-10': {
    objective: `Know where time goes and what the service costs.`,
    steps: [
      `OpenTelemetry tracing across API → database → queue.`,
      `One dashboard: p95 latency, error rate, queue depth.`,
      `AWS Cost Explorer: break the monthly bill down by service and find the top 3 costs. Set a billing alarm.`
    ],
    resources: [a('OpenTelemetry for Node.js', 'https://opentelemetry.io/docs/languages/js/'), a('AWS Cost Explorer', 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/')],
    doneWhen: `You know the service's monthly cost within 20%, and you have one trace showing where a slow request spends its time.`
  },
  't3-11': {
    objective: `One AI feature used by real people at the new company.`,
    steps: [
      `Find a repetitive internal task (support triage, listing moderation, internal search).`,
      `Write a one-page proposal with a success metric.`,
      `Build the smallest version, with an eval set like Brick 3's.`,
      `Ship it to a small group and measure against the metric.`
    ],
    resources: [],
    doneWhen: `Real users, and a before/after number.`
  }
};

export const TWO_TRACK_PHASES = [T0_WEEKS, T1_WEEKS, T2_WEEKS, T3_WEEKS];
