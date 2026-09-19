/**
 * STAR+R story bank — grounded in cv.md, nothing invented.
 *
 * PROVENANCE RULE: every number and scope claim below traces to a line in
 * cv.md. The `source` field names where. If you edit a story, keep that true —
 * a figure invented once here gets repeated in an interview, and you cannot
 * walk it back when someone asks the follow-up.
 *
 * Two stories are deliberately EMPTY (`needsInput: true`): conflict and
 * failure. cv.md records what you built, not what went wrong or who you
 * disagreed with, and those are the two most-asked behavioural questions.
 * Fill them from memory — the prompts are there to jog it. They are the only
 * stories here that cannot be written for you.
 */

export const defaultStories = [
  {
    id: 'story-migration',
    title: 'The Migration — RN 0.75 → 0.81',
    tags: ['impact', 'ownership', 'architecture', 'lead-with-this'],
    source: 'cv.md → Zonesso, bullet 1',
    situation:
      'Zonesso, a Dubai vehicle marketplace, was running React Native 0.75 and React 18 with 53,900 lines across 762 tracked files and 170 dependencies. I am the sole mobile engineer on it.',
    task:
      'Move to React Native 0.81 and React 19. I chose to treat the version bump as an architecture cleanup rather than a mechanical upgrade, because a straight bump would have carried every accumulated workaround forward.',
    action:
      'Audited the dependency tree and removed what the new versions made redundant. Rebuilt server state on TanStack Query and client state on Jotai across authentication, listings, payments and notifications, which let me delete large amounts of hand-rolled caching and sync code. Migrated incrementally so the app stayed shippable throughout.',
    result:
      'Code volume down 39% (53,900 → 33,000 lines). Tracked files down 27% (762 → 559). Dependencies down 29% (170 → 120), removing 57 packages. The app shipped on the new versions with the state layer deliberately restructured rather than patched.',
    reflection:
      'A version migration is the cheapest political window you will ever get to fix architecture — the team already expects churn and regression risk. Spending it on a mechanical bump wastes it.',
    needsInput: false
  },
  {
    id: 'story-payments',
    title: 'Five Payment Rails',
    tags: ['complexity', 'technical-depth', 'correctness'],
    source: 'cv.md → Zonesso, bullet 2',
    situation:
      'Zonesso needed to take money from buyers across both app stores and the UAE market, where the local processor matters and Apple\'s rules govern anything sold in-app.',
    task:
      'Build one payment layer covering five rails — Stripe Payment Sheet, Apple In-App Purchase, Apple Pay, Samsung Pay and N-Genius — with VAT handled correctly, without five separate half-integrated code paths.',
    action:
      'Built a single payment surface over the five providers so calling code did not branch per rail. Handled VAT in the flow rather than bolting it on. Used optimistic UI for responsiveness but revalidated every outcome against the server before treating a payment as settled, and made cache invalidation deliberate after payment, edit and delete operations.',
    result:
      'All five rails shipped in production. Payment state is server-authoritative, so an optimistic success that the server rejects is corrected rather than trusted.',
    reflection:
      'Optimistic UI is a lie you tell the user and then have to make true. The interesting engineering is entirely in what happens when the server disagrees — and that is the same idempotency problem that shows up in backend queues.',
    needsInput: false
  },
  {
    id: 'story-release-eng',
    title: 'Release Engineering From Nothing',
    tags: ['initiative', 'ownership', 'infrastructure'],
    source: 'cv.md → Zonesso, bullet 5',
    situation:
      'Zonesso had no release engineering. Builds and store uploads were manual, and nothing gated a merge.',
    task:
      'Nobody asked for this. I built it because being the sole mobile engineer meant every manual step was a single point of failure pointing at me.',
    action:
      'Set up three Gradle product flavors, Hermes and ProGuard release builds, and Fastlane lanes for store uploads. Stood up Bitbucket Pipelines running lint, type checks, unit tests and Android end-to-end tests on an emulator, using Jest, React Native Testing Library, Detox and Appium.',
    result:
      'Releases became repeatable rather than remembered, and end-to-end tests run on every pipeline instead of existing only on my machine.',
    reflection:
      'Most React Native engineers stop at "it builds on my machine". Release engineering is the part of the job that is invisible until it is missing, which is exactly why owning it is a differentiator in interviews.',
    needsInput: false
  },
  {
    id: 'story-leadership',
    title: 'Leading JIFFL',
    tags: ['leadership', 'delivery', 'mentoring'],
    source: 'cv.md → Mantiqh Technologies, Project Lead, June 2024 – February 2025',
    situation:
      'I was made project lead for JIFFL, a part-time job marketplace, at Mantiqh Technologies — moving from writing features to owning the mobile team and the client relationship.',
    task:
      'Own scoping, timelines, resourcing and delivery through release, and translate business requirements into technical execution plans the team could actually work from.',
    action:
      'Ran client communication directly rather than through a layer. Broke requirements into execution plans and managed timelines and resourcing against them. Ran code reviews and mentored the junior React Native developers on the team.',
    result:
      'Job-seeker engagement increased approximately 30% and app size dropped 15%. Releases stayed stable and on schedule, and baseline code quality across the team improved through the review process.',
    reflection:
      'The hardest part of the step up was not planning — it was resisting the urge to write the tricky code myself instead of letting a junior write it slower and learn.',
    needsInput: false
  },
  {
    id: 'story-three-apps',
    title: 'Three Apps in Two Months',
    tags: ['delivery', 'pressure', 'scope'],
    source: 'cv.md → Projects, Keys On Rent (two-month contract, 2025)',
    situation:
      'Keys On Rent needed three role-specific applications over one shared rental domain — a tenant app, a landlord portfolio app, and a building-operations app — on a two-month contract.',
    task:
      'Ship all three to both Google Play and the App Store within the contract window, without building the same domain three times.',
    action:
      'Treated it as one rental domain with three role-specific surfaces rather than three projects. The tenant app carried the widest scope: listings, viewings, owner messaging, rent payments and maintenance tickets.',
    result:
      'All three shipped to both stores inside two months. The tenant app passed 1,000+ installs.',
    reflection:
      'This was a platform problem I solved by hand under time pressure. Doing it again I would formalise the shared layer into real packages up front — which is exactly the monorepo work sitting in Rung 2 of the Skill Ladder.',
    needsInput: false
  },
  {
    id: 'story-cold-start',
    title: 'Cold Start and the Notification Race',
    tags: ['debugging', 'performance', 'measure-first'],
    source: 'cv.md → Zonesso, bullet 3',
    situation:
      'Zonesso had slow cold-start latency, and opening the app from a push notification while it was fully closed could fail to land on the right screen.',
    task:
      'Cut startup time and fix the cold-open navigation, which was a race condition rather than a slow path.',
    action:
      'Parallelised independent startup work with Promise.allSettled instead of awaiting in sequence. Added a 100-entry LRU cache over device storage with tiered TTLs so repeat launches did not refetch everything. For the notification case, added deep-link retry logic that resolves the cold-open race instead of dropping the destination.',
    result:
      'Cold-start latency reduced, and notification cold-opens land on the intended screen rather than failing intermittently.',
    reflection:
      'The startup fix was measurable and the deep-link fix was a race — different classes of problem that presented as the same user complaint. Splitting them apart was most of the work.',
    needsInput: false
  },
  {
    id: 'story-rtl',
    title: 'Arabic and RTL at Scale',
    tags: ['scope', 'market', 'differentiator'],
    source: 'cv.md → Zonesso, bullet 6',
    situation:
      'Zonesso serves the Dubai market and needed to work properly in Arabic, not just be translated.',
    task:
      'Deliver Arabic and English localization with right-to-left layout across the whole application.',
    action:
      'Implemented localization across approximately 580 translation keys and handled right-to-left layout throughout, so the interface mirrors correctly rather than displaying translated text in a left-to-right shell.',
    result:
      'The app ships in Arabic and English with full RTL layout.',
    reflection:
      'RTL is a layout problem disguised as a translation problem. It is also rare enough on a CV that in Gulf-market interviews it does more work than anything else I can say.',
    needsInput: false
  },
  {
    id: 'story-conflict',
    title: '⚠ Conflict — you need to write this one',
    tags: ['conflict', 'needs-your-input', 'high-frequency'],
    source: 'NOT IN cv.md — must come from your memory',
    situation:
      'EMPTY ON PURPOSE. cv.md records what you built, not who you disagreed with, so writing this for you would mean inventing it — and an invented conflict story collapses on the first follow-up question.',
    task:
      'Prompts to jog your memory: a client at Mantiqh who wanted scope you knew would not fit the timeline · a code review where you held a line a teammate disagreed with · a product decision on Zonesso you pushed back on as sole mobile engineer · disagreeing with the backend team about an API shape · being asked to ship something you thought was not ready.',
    action:
      'Write what you actually did — the specific conversation, not "I communicated openly". Interviewers are listening for whether you engaged with the other person\'s reasoning or just waited for your turn.',
    result:
      'Say what was decided, including if it did not go your way. A conflict story where you were right and everyone agreed is a story nobody believes.',
    reflection:
      'What you would do differently. This is the part most candidates skip, and the part that separates a real story from a rehearsed one.',
    needsInput: true
  },
  {
    id: 'story-failure',
    title: '⚠ Failure — you need to write this one',
    tags: ['failure', 'needs-your-input', 'high-frequency'],
    source: 'NOT IN cv.md — must come from your memory',
    situation:
      'EMPTY ON PURPOSE. This is asked in almost every behavioural round and it is the one you cannot improvise.',
    task:
      'Prompts: a release that broke in production · an estimate you badly missed · a bug that reached users and how it got there · a technical decision you had to reverse · something you shipped that nobody used.',
    action:
      'The rule: pick a real failure with real consequences. "I care too much about quality" reads as evasion and costs you more than the actual failure would.',
    result:
      'Own the outcome without over-apologising. State the damage plainly.',
    reflection:
      'What changed in how you work because of it. This is the entire point of the question — they are testing whether you learn, not whether you fail.',
    needsInput: true
  }
];
