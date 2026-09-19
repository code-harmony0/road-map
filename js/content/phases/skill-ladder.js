/**
 * Roadmap V3: Skill Ladder — capability, not calendar.
 *
 * The other two roadmaps answer "how do I get out of here". This one answers
 * "what am I worth, and what specifically raises it". Each phase is a rung with
 * a pay band attached; each card is a capability cluster you either have or
 * don't. The `day` badge on every task is the band that capability unlocks.
 *
 * THE THESIS: generic full-stack makes you a commodity — you'd be competing
 * with a million people on skills you're two years behind on. Backend is the
 * TICKET (Rung 1, it gets you taken seriously). RN platform depth is the MOAT
 * (Rung 2, almost nobody has it and it compounds the five years you already
 * spent). Do not abandon the thing you're rare at to become average at
 * something else.
 *
 * Task ids are prefixed r* so they never collide with p* (v1) or t* (v2).
 */

const AMBER = '#f59e0b';
const BLUE = '#3b82f6';
const PURPLE = '#8b5cf6';
const GREEN = '#10b981';

const B1 = 'Rs 20-30L';
const B2 = 'Rs 30-40L';
const B3 = 'Rs 35-50L';
const B4 = '2-3x rate';

// ---------------------------------------------------------------------------
// Rung 1: Foundation — the seven gaps between "reads backend" and "owns backend"
// ---------------------------------------------------------------------------

export const R0_WEEKS = [
  {
    id: 'r0g1',
    num: 'GAP 01',
    title: 'Data',
    theme: 'Model It Yourself',
    color: AMBER,
    boss: {
      id: 'boss-r0g1',
      name: 'The Modeler',
      challenge: 'Answer "walk me through a schema you designed and why" for ten minutes without flinching',
      rewardXP: 500,
      resumeLine: 'Designed the relational data model for a production marketplace, including indexing strategy and storage-choice rationale'
    },
    tasks: [
      {
        id: 'r0-1',
        day: B1,
        time: '10h',
        depth: 'Deep',
        xp: 150,
        text: 'Relational modelling: normalization, keys, nullability, and when to deliberately denormalize',
        reason: 'You have never chosen a data model — you have inherited one. This is the single biggest gap on your CV.'
      },
      {
        id: 'r0-2',
        day: B1,
        time: '8h',
        depth: 'Deep',
        xp: 150,
        text: 'Indexing and query plans: composite, partial, covering; read EXPLAIN ANALYZE fluently',
        reason: 'The difference between "I used Postgres" and "I made Postgres fast" is worth several lakh'
      },
      {
        id: 'r0-3',
        day: B1,
        time: '6h',
        depth: 'Deep',
        xp: 125,
        text: 'Transactions and isolation levels; what actually happens under concurrent writes',
        reason: 'You shipped payments on mobile. This is the server-side half of the same correctness problem.'
      },
      {
        id: 'r0-4',
        day: B1,
        time: '4h',
        depth: 'Medium',
        xp: 100,
        text: 'Migrations as version-controlled, reversible, zero-downtime changes',
        reason: 'Anyone can create a table; seniors change one on a live system without an outage'
      }
    ]
  },
  {
    id: 'r0g2',
    num: 'GAP 02',
    title: 'Service',
    theme: 'Own The Contract',
    color: AMBER,
    boss: {
      id: 'boss-r0g2',
      name: 'The Contract Keeper',
      challenge: 'A service where auth, caching and background work are all decisions you can defend, not defaults you copied',
      rewardXP: 500,
      resumeLine: 'Owned API design, authorization and asynchronous processing for a production service'
    },
    tasks: [
      {
        id: 'r0-5',
        day: B1,
        time: '8h',
        depth: 'Deep',
        xp: 150,
        text: 'Authorization past copied passport-jwt: roles, refresh rotation, revocation, session invalidation',
        reason: 'This is the first thing every backend interviewer probes on a mobile engineer, and the first thing they find hollow'
      },
      {
        id: 'r0-6',
        day: B1,
        time: '6h',
        depth: 'Deep',
        xp: 125,
        text: 'Caching and invalidation with Redis — the invalidation half is the interview',
        reason: 'You already do cache invalidation in TanStack Query. Same problem, server side, higher stakes.'
      },
      {
        id: 'r0-7',
        day: B1,
        time: '8h',
        depth: 'Deep',
        xp: 150,
        text: 'Queues and background jobs: retries, idempotency, dead letters, backpressure',
        reason: 'Idempotency is the concept that connects your payment work to backend seniority — you already understand why it matters'
      },
      {
        id: 'r0-8',
        day: B1,
        time: '5h',
        depth: 'Medium',
        xp: 100,
        text: 'API design: versioning, pagination, error contracts, idempotency keys',
        reason: 'You have consumed hundreds of APIs and know exactly which ones hurt. Design from that.'
      }
    ]
  },
  {
    id: 'r0g3',
    num: 'GAP 03',
    title: 'Operate',
    theme: 'Run It In Production',
    color: AMBER,
    boss: {
      id: 'boss-r0g3',
      name: 'The Operator',
      challenge: 'A deployed service where you can answer "how would you know it broke?" and "what does it cost per month?"',
      rewardXP: 600,
      resumeLine: 'Containerized, deployed and operated a production service with structured logging, tracing and alerting'
    },
    tasks: [
      {
        id: 'r0-9',
        day: B1,
        time: '8h',
        depth: 'Deep',
        xp: 150,
        text: 'Docker from first principles: images vs containers, layers, multi-stage builds, Compose',
        reason: 'You already ship Bitbucket Pipelines for mobile — rebuild that understanding without AI holding the pen'
      },
      {
        id: 'r0-10',
        day: B1,
        time: '6h',
        depth: 'Deep',
        xp: 150,
        text: 'Observability: structured logs with request ids, tracing, dashboards, one alert that pages you',
        reason: '"How would you know it broke at 3am?" separates people who built a service from people who deployed one'
      },
      {
        id: 'r0-11',
        day: B1,
        time: '6h',
        depth: 'Medium',
        xp: 125,
        text: 'AWS enough to be dangerous: ECS or Fly, RDS, S3, CloudWatch — and the monthly bill',
        reason: 'Knowing what your service costs is a staff-adjacent signal almost no mid-level engineer offers'
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Rung 2: Mobile Moat — where your five years compound instead of being discarded
// ---------------------------------------------------------------------------

export const R1_WEEKS = [
  {
    id: 'r1m1',
    num: 'MOAT 01',
    title: 'New Architecture',
    theme: 'Below The JS',
    color: BLUE,
    boss: {
      id: 'boss-r1m1',
      name: 'The Bridge Burner',
      challenge: 'Ship a real TurboModule and a Fabric component, and explain JSI to a room without hand-waving',
      rewardXP: 700,
      resumeLine: 'Authored native TurboModules and Fabric components; migrated an application onto the React Native New Architecture'
    },
    tasks: [
      {
        id: 'r1-1',
        day: B2,
        time: '10h',
        depth: 'Deep',
        xp: 200,
        text: 'JSI, Fabric, TurboModules and Hermes — how they actually work, not the marketing version',
        reason: 'You already did the 0.75 to 0.81 migration. Very few RN engineers can explain what they migrated TO.'
      },
      {
        id: 'r1-2',
        day: B2,
        time: '12h',
        depth: 'Deep',
        xp: 250,
        text: 'Write a real TurboModule in Kotlin and Swift, published and consumed by your own app',
        reason: 'This is the line between "React Native developer" and "mobile engineer who happens to use React Native"'
      },
      {
        id: 'r1-3',
        day: B2,
        time: '8h',
        depth: 'Deep',
        xp: 200,
        text: 'A Fabric native component with proper prop and event plumbing',
        reason: 'Companies with a real mobile platform hire specifically for this and cannot find people'
      }
    ]
  },
  {
    id: 'r1m2',
    num: 'MOAT 02',
    title: 'Performance',
    theme: 'Measure, Never Guess',
    color: BLUE,
    boss: {
      id: 'boss-r1m2',
      name: 'The Profiler',
      challenge: 'A measured before-and-after on startup, memory and list performance, using real instruments',
      rewardXP: 600,
      resumeLine: 'Established mobile performance budgets and cut cold-start and memory footprint against instrumented baselines'
    },
    tasks: [
      {
        id: 'r1-4',
        day: B2,
        time: '8h',
        depth: 'Deep',
        xp: 200,
        text: 'Profile for real: Xcode Instruments, Android Studio Profiler, Perfetto, Flipper/Hermes traces',
        reason: 'You already cut cold start at Zonesso. Doing it with instruments instead of intuition is the seniority signal.'
      },
      {
        id: 'r1-5',
        day: B2,
        time: '6h',
        depth: 'Deep',
        xp: 175,
        text: 'Startup, memory and frame budgets as numbers enforced in CI, not aspirations',
        reason: 'A budget in CI is what a platform engineer builds; a one-off fix is what a feature engineer ships'
      },
      {
        id: 'r1-6',
        day: B2,
        time: '6h',
        depth: 'Medium',
        xp: 150,
        text: 'Bundle and asset pipelines: code splitting, lazy native modules, image strategy at scale',
        reason: 'You cut Eco Crew ~30% and JIFFL 15% — systematize what you did by feel'
      }
    ]
  },
  {
    id: 'r1m3',
    num: 'MOAT 03',
    title: 'Platform',
    theme: 'Many Apps, One Pipeline',
    color: BLUE,
    boss: {
      id: 'boss-r1m3',
      name: 'The Platform Owner',
      challenge: 'A monorepo shipping multiple apps through one release train, with OTA updates and crash budgets',
      rewardXP: 800,
      resumeLine: 'Built the mobile platform: monorepo tooling, shared release train, OTA delivery and crash/performance budgets across multiple apps'
    },
    tasks: [
      {
        id: 'r1-7',
        day: B2,
        time: '10h',
        depth: 'Deep',
        xp: 200,
        text: 'Monorepo tooling for mobile: shared component and native-module packages, versioning, CI caching',
        reason: 'You shipped three Keys On Rent apps over one domain — that was a platform problem solved by hand'
      },
      {
        id: 'r1-8',
        day: B2,
        time: '6h',
        depth: 'Deep',
        xp: 175,
        text: 'OTA updates and staged rollout: what can ship over the air, what must not, and how to roll back',
        reason: 'Release engineering is already your differentiator — this is the next rung of it'
      },
      {
        id: 'r1-9',
        day: B2,
        time: '6h',
        depth: 'Medium',
        xp: 175,
        text: 'Crash-free and ANR budgets wired to alerts; own the number, not just the dashboard',
        reason: 'Owning a reliability number is what gets a mobile engineer into platform and staff conversations'
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Rung 3: AI Layer — only worth money stacked on Rung 1
// ---------------------------------------------------------------------------

export const R2_WEEKS = [
  {
    id: 'r2a1',
    num: 'AI 01',
    title: 'Retrieval',
    theme: 'Measured, Not Vibed',
    color: PURPLE,
    boss: {
      id: 'boss-r2a1',
      name: 'The Retriever',
      challenge: 'A RAG feature with an evaluation set and a retrieval quality number you can defend',
      rewardXP: 700,
      resumeLine: 'Shipped embedding-based retrieval with a measured evaluation baseline, not a demo'
    },
    tasks: [
      {
        id: 'r2-1',
        day: B3,
        time: '8h',
        depth: 'Deep',
        xp: 200,
        text: 'Embeddings and vector search: pgvector on the database you already run, chunking strategy',
        reason: 'Running vectors in Postgres instead of a fourth service is the choice that reads as senior'
      },
      {
        id: 'r2-2',
        day: B3,
        time: '8h',
        depth: 'Deep',
        xp: 200,
        text: 'Evaluation: a small labelled set, a retrieval metric, and a regression check in CI',
        reason: 'Everyone has a RAG demo. Almost nobody has a number. The number is the entire premium.'
      },
      {
        id: 'r2-3',
        day: B3,
        time: '5h',
        depth: 'Medium',
        xp: 150,
        text: 'Cost and latency budgets per request: tokens, caching, model choice',
        reason: 'The first question a real company asks about an AI feature is what it costs per user'
      }
    ]
  },
  {
    id: 'r2a2',
    num: 'AI 02',
    title: 'Agents',
    theme: 'Tools And Guardrails',
    color: PURPLE,
    boss: {
      id: 'boss-r2a2',
      name: 'The Tool User',
      challenge: 'An agent with real tool calls against your own API, structured output, and failure handling that does not lie',
      rewardXP: 700,
      resumeLine: 'Built an agentic workflow with tool use, structured output validation and explicit failure handling'
    },
    tasks: [
      {
        id: 'r2-4',
        day: B3,
        time: '8h',
        depth: 'Deep',
        xp: 200,
        text: 'Tool use and structured output against your own service — validation, retries, partial failure',
        reason: 'This is the same idempotency and error-contract thinking as Rung 1, applied one layer up'
      },
      {
        id: 'r2-5',
        day: B3,
        time: '6h',
        depth: 'Deep',
        xp: 175,
        text: 'Guardrails: prompt injection from user content, output validation, what the model must never decide',
        reason: 'You already treat job postings as untrusted data. Same discipline, and most teams have not learned it yet.'
      }
    ]
  },
  {
    id: 'r2a3',
    num: 'AI 03',
    title: 'On Device',
    theme: 'Your Unfair Angle',
    color: PURPLE,
    boss: {
      id: 'boss-r2a3',
      name: 'The Edge Runner',
      challenge: 'Streaming AI UX in React Native that stays usable offline and on a bad connection',
      rewardXP: 800,
      resumeLine: 'Delivered on-device and streaming AI experiences in React Native with offline-tolerant UX'
    },
    tasks: [
      {
        id: 'r2-6',
        day: B3,
        time: '8h',
        depth: 'Deep',
        xp: 225,
        text: 'Streaming UX in React Native: token streaming, cancellation, optimistic and interruptible states',
        reason: 'Backend engineers cannot build this and mobile engineers do not understand the model half. You can do both.'
      },
      {
        id: 'r2-7',
        day: B3,
        time: '8h',
        depth: 'Deep',
        xp: 225,
        text: 'On-device inference: Core ML / TFLite / ExecuTorch via a TurboModule you wrote in Rung 2',
        reason: 'This is the rarest intersection in the market right now, and it is directly downstream of your existing skills'
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// Rung 4: Leverage — stop selling hours at the market rate for hours
// ---------------------------------------------------------------------------

export const R3_WEEKS = [
  {
    id: 'r3l1',
    num: 'LEV 01',
    title: 'The Niche',
    theme: 'Be A Category Of One',
    color: GREEN,
    boss: {
      id: 'boss-r3l1',
      name: 'The Specialist',
      challenge: 'A one-line positioning nobody else can honestly claim, and three case studies backing it',
      rewardXP: 600,
      resumeLine: 'Positioned as a specialist in Gulf-market mobile commerce: multi-rail payments, Arabic/RTL and React Native modernization'
    },
    tasks: [
      {
        id: 'r3-1',
        day: B4,
        time: '4h',
        depth: 'Deep',
        xp: 150,
        text: 'Name the intersection: Gulf-market mobile commerce — multi-rail payments, Arabic/RTL, RN modernization',
        reason: 'Generic full-stack competes with a million people. That intersection has maybe a few hundred, and buyers with money.'
      },
      {
        id: 'r3-2',
        day: B4,
        time: '6h',
        depth: 'Deep',
        xp: 175,
        text: 'Three written case studies with numbers: the Zonesso migration, the five payment rails, three apps in two months',
        reason: 'You already did the work. It is invisible because it was never written down.'
      },
      {
        id: 'r3-3',
        day: B4,
        time: '3h',
        depth: 'Medium',
        xp: 125,
        text: 'A rate card for whole-system delivery, not hourly React Native hands',
        reason: 'One throat to choke — API, database, deploy, CI — is a different market with different prices'
      }
    ]
  },
  {
    id: 'r3l2',
    num: 'LEV 02',
    title: 'Proof',
    theme: 'Be Findable',
    color: GREEN,
    boss: {
      id: 'boss-r3l2',
      name: 'The Published',
      challenge: 'Inbound arrives without you applying for it',
      rewardXP: 700,
      resumeLine: 'Published technical writing and open-source tooling on React Native modernization and payments integration'
    },
    tasks: [
      {
        id: 'r3-4',
        day: B4,
        time: '8h',
        depth: 'Deep',
        xp: 200,
        text: 'Write the RN 0.75 to 0.81 migration up properly: what broke, what you cut, the real numbers',
        reason: 'Thousands of teams face this exact migration and there is almost nothing honest written about it'
      },
      {
        id: 'r3-5',
        day: B4,
        time: '10h',
        depth: 'Deep',
        xp: 200,
        text: 'Open-source one genuinely useful thing from your own work — a payments wrapper, an RTL helper, a Detox harness',
        reason: 'A repo people actually use is worth more inbound than a hundred applications'
      },
      {
        id: 'r3-6',
        day: B4,
        time: '4h',
        depth: 'Medium',
        xp: 150,
        text: 'One conference or meetup talk from the same material',
        reason: 'Speaking converts a specialist into a known specialist, which is what changes the rate'
      }
    ]
  },
  {
    id: 'r3l3',
    num: 'LEV 03',
    title: 'Pricing',
    theme: 'Sell Outcomes',
    color: GREEN,
    boss: {
      id: 'boss-r3l3',
      name: 'The Principal',
      challenge: 'A retainer or fixed-scope contract priced on the outcome, not on your hours',
      rewardXP: 800,
      resumeLine: 'Delivered fixed-scope mobile and backend engagements priced on outcomes, with defined acceptance criteria'
    },
    tasks: [
      {
        id: 'r3-7',
        day: B4,
        time: '4h',
        depth: 'Deep',
        xp: 175,
        text: 'Scope and price one fixed-scope engagement with written acceptance criteria',
        reason: 'Hourly billing caps you at hours in a day; fixed scope pays for the five years that made you fast'
      },
      {
        id: 'r3-8',
        day: B4,
        time: '3h',
        depth: 'Medium',
        xp: 150,
        text: 'Contract basics: IP ownership, payment terms, kill fee, scope-change clause',
        reason: 'The expensive freelance lessons are all contractual, not technical'
      },
      {
        id: 'r3-9',
        day: B4,
        time: '4h',
        depth: 'Deep',
        xp: 175,
        text: 'Convert one delivered project into an ongoing retainer',
        reason: 'Retainers are the difference between freelancing and a business that survives a slow month'
      }
    ]
  }
];

export const SKILL_LADDER_PHASES = [R0_WEEKS, R1_WEEKS, R2_WEEKS, R3_WEEKS];
