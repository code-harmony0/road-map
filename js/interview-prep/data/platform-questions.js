/**
 * Platform & AI questions — Skill Ladder Rung 2 and Rung 3.
 *
 * Rung 2 is the moat: the React Native depth almost nobody has, which compounds
 * five years of existing work instead of discarding it. Rung 3 only pays when
 * it sits on top of Rung 1.
 */

export const platformQuestions = [
  {
    id: 'pf-001',
    category: 'Mobile Platform',
    title: 'Explain JSI, and what actually changed from the old bridge.',
    answer:
      '<ul>' +
      '<li><strong>Old bridge:</strong> JS and native communicated by serialising JSON over an asynchronous message queue. Everything was async, everything was serialised, and a large payload could drop frames.</li>' +
      '<li><strong>JSI:</strong> a C++ layer that lets JavaScript hold a reference to a native object directly — a HostObject — and call its methods synchronously, with no serialisation.</li>' +
      '<li><strong>Why it matters:</strong> it removes the bridge as a bottleneck and makes synchronous native calls possible, which is what unlocks both TurboModules and Fabric.</li>' +
      '<li><strong>The credibility line:</strong> you ran the 0.75 → 0.81 migration. Very few React Native engineers can explain what they migrated <em>to</em>. That gap is your opening.</li>' +
      '</ul>',
    tags: ['new-architecture', 'jsi', 'rung2']
  },
  {
    id: 'pf-002',
    category: 'Mobile Platform',
    title: 'What is a TurboModule and how does it differ from a legacy native module?',
    answer:
      '<ul>' +
      '<li><strong>Legacy modules</strong> were all eagerly initialised at startup and registered through the bridge, so every module cost you app launch time whether it was used or not.</li>' +
      '<li><strong>TurboModules</strong> are lazily loaded on first access via JSI, and are code-generated from a TypeScript spec so the JS and native signatures cannot drift.</li>' +
      '<li><strong>Practical consequences:</strong> faster startup, real type safety across the boundary, and synchronous calls where they genuinely make sense (reading a stored value, for instance).</li>' +
      '<li><strong>Be ready for:</strong> "have you written one?" Writing a small one — in Kotlin and Swift, published and consumed by your own app — is the line between "React Native developer" and "mobile engineer who happens to use React Native".</li>' +
      '</ul>',
    tags: ['new-architecture', 'turbomodules', 'rung2']
  },
  {
    id: 'pf-003',
    category: 'Mobile Platform',
    title: 'What does Fabric change about rendering?',
    answer:
      '<ul>' +
      '<li><strong>Old renderer:</strong> the shadow tree lived on a separate thread and layout was async, so JS could not reliably know view sizes without a round trip.</li>' +
      '<li><strong>Fabric</strong> keeps an immutable C++ shadow tree shared between JS and native, enabling synchronous layout reads, safe concurrent rendering, and cheaper tree diffing.</li>' +
      '<li><strong>What it unlocks:</strong> React 18 concurrent features actually work — Suspense and transitions behave, because the renderer can interrupt and resume.</li>' +
      '<li><strong>Real-world tell:</strong> measure-then-render flows that used to flicker under the old renderer stop flickering under Fabric.</li>' +
      '</ul>',
    tags: ['new-architecture', 'fabric', 'rung2']
  },
  {
    id: 'pf-004',
    category: 'Mobile Platform',
    title: 'How do you actually profile a React Native app? Name the tools.',
    answer:
      '<ul>' +
      '<li><strong>"I used console.time" is the wrong answer.</strong> Name real instruments.</li>' +
      '<li><strong>iOS:</strong> Xcode Instruments — Time Profiler for CPU, Allocations and Leaks for memory, Core Animation for dropped frames.</li>' +
      '<li><strong>Android:</strong> Android Studio Profiler, and Perfetto or systrace for a full system trace across threads.</li>' +
      '<li><strong>JS side:</strong> the Hermes sampling profiler, loaded into Chrome DevTools, plus the React DevTools Profiler for re-render cost.</li>' +
      '<li><strong>Method:</strong> measure, change one thing, measure again, quote both numbers. You already cut cold start at Zonesso — doing it with instruments instead of intuition is the seniority signal.</li>' +
      '</ul>',
    tags: ['performance', 'profiling', 'rung2']
  },
  {
    id: 'pf-005',
    category: 'Mobile Platform',
    title: 'How would you cut cold-start time on a large React Native app?',
    answer:
      '<ul>' +
      '<li><strong>Measure the phases separately:</strong> native init → JS bundle load and parse → first render → time to interactive. Optimising the wrong phase wastes the week.</li>' +
      '<li><strong>Bundle:</strong> Hermes bytecode precompilation, RAM bundles or inline requires so you parse only what the first screen needs.</li>' +
      '<li><strong>Native:</strong> stop eagerly initialising modules at launch — TurboModules make this the default. Audit what every SDK does in <code>application:didFinishLaunching</code>.</li>' +
      '<li><strong>App code:</strong> parallelise independent startup work with <code>Promise.allSettled</code> rather than awaiting in sequence, and cache what you fetched last launch behind a tiered TTL.</li>' +
      '<li><strong>Then defend it in CI:</strong> a startup budget that fails the build is a platform engineer\'s answer; a one-off fix is a feature engineer\'s.</li>' +
      '</ul>',
    tags: ['performance', 'startup', 'rung2']
  },
  {
    id: 'pf-006',
    category: 'Mobile Platform',
    title: 'You own three apps sharing one domain. How do you structure the platform?',
    answer:
      '<ul>' +
      '<li><strong>Monorepo</strong> with shared packages: a design system, a domain/API client, and shared native modules. Each app is a thin composition layer over them.</li>' +
      '<li><strong>Versioning:</strong> internal packages move together on one version so you never debug a cross-package mismatch; only genuinely external consumers need semver.</li>' +
      '<li><strong>CI:</strong> build only what changed by hashing inputs, and cache aggressively. Without that, a three-app monorepo means every PR builds three apps.</li>' +
      '<li><strong>Release train:</strong> one cadence, one branch strategy, per-app flavors for branding — not three ad-hoc processes.</li>' +
      '<li><strong>You have lived this:</strong> the three Keys On Rent apps over one rental domain in two months. That was a platform problem solved by hand — say so, then say what you would systematize.</li>' +
      '</ul>',
    tags: ['platform', 'monorepo', 'rung2']
  },
  {
    id: 'pf-007',
    category: 'Mobile Platform',
    title: 'What can ship over the air, what cannot, and how do you roll back?',
    answer:
      '<ul>' +
      '<li><strong>Can ship OTA:</strong> JS bundle and assets. <strong>Cannot:</strong> anything requiring a native rebuild — new native modules, permission changes, SDK upgrades.</li>' +
      '<li><strong>The hard constraint:</strong> store policy forbids OTA changing the app\'s core purpose or bypassing review. Treat OTA as a hotfix and experimentation channel, not a release channel.</li>' +
      '<li><strong>Staged rollout:</strong> 1% → 10% → 50% → 100%, gated on crash-free rate at each step, with automatic halt on regression.</li>' +
      '<li><strong>Rollback:</strong> instant revert to the previous bundle. The dangerous case is a JS bundle depending on native code the user does not have — pin bundles to a native runtime version so an incompatible pairing is impossible.</li>' +
      '</ul>',
    tags: ['platform', 'releases', 'rung2']
  },
  {
    id: 'pf-008',
    category: 'Mobile Platform',
    title: 'How do you set and defend a crash-free rate?',
    answer:
      '<ul>' +
      '<li><strong>Pick the number and say it:</strong> 99.5% crash-free sessions is a common floor; 99.9% is a good product. Also track ANR rate on Android separately — Play Console gates visibility on it.</li>' +
      '<li><strong>Wire it to alerting,</strong> not just a dashboard: a regression against the previous release should halt the staged rollout automatically.</li>' +
      '<li><strong>Per-release, not global:</strong> a global number hides a bad release inside a good history.</li>' +
      '<li><strong>Why it is a seniority signal:</strong> owning a reliability number is what moves a mobile engineer into platform and staff conversations. Most candidates have only ever looked at Crashlytics after a complaint.</li>' +
      '</ul>',
    tags: ['platform', 'reliability', 'rung2']
  },
  {
    id: 'ai-001',
    category: 'AI Engineering',
    title: 'Design semantic search over a product catalogue. Why pgvector over a dedicated vector DB?',
    answer:
      '<ul>' +
      '<li><strong>The pipeline:</strong> chunk the text → embed → store the vector alongside the row → query by cosine distance → optionally re-rank.</li>' +
      '<li><strong>Why pgvector:</strong> the vectors live next to the data you already filter on, so "semantically similar AND active AND under 50k AND in Dubai" is one query with real SQL predicates. A separate vector store forces you to filter in two places and reconcile.</li>' +
      '<li><strong>When a dedicated store wins:</strong> hundreds of millions of vectors, or you need index types Postgres does not offer.</li>' +
      '<li><strong>The senior move:</strong> not adding a fourth piece of infrastructure to a system that did not need one. Say that out loud.</li>' +
      '<li><strong>Indexes:</strong> HNSW for recall and query speed at higher build cost; IVFFlat for cheaper builds and lower recall.</li>' +
      '</ul>',
    tags: ['rag', 'pgvector', 'rung3']
  },
  {
    id: 'ai-002',
    category: 'AI Engineering',
    title: 'How do you know your retrieval is any good?',
    answer:
      '<ul>' +
      '<li><strong>Everyone has a RAG demo. Almost nobody has a number. The number is the entire premium.</strong></li>' +
      '<li><strong>Build a small labelled set:</strong> 50-100 real queries with the documents that should be retrieved. Hand-labelled is fine and takes an afternoon.</li>' +
      '<li><strong>Measure recall@k</strong> (did the right document make the top k) and <strong>MRR</strong> (how high did it rank). Recall@k is the one that matters — the model cannot use what retrieval never returned.</li>' +
      '<li><strong>Regression-test it in CI</strong> so a chunking or model change that quietly degrades quality fails the build.</li>' +
      '<li><strong>Separate the two failure modes:</strong> bad retrieval and bad generation need completely different fixes, and conflating them wastes weeks.</li>' +
      '</ul>',
    tags: ['rag', 'evaluation', 'rung3']
  },
  {
    id: 'ai-003',
    category: 'AI Engineering',
    title: 'What does an LLM feature cost per request, and how do you control it?',
    answer:
      '<ul>' +
      '<li><strong>The first question a real company asks.</strong> Know the arithmetic: input tokens × input price + output tokens × output price, times requests per user per month.</li>' +
      '<li><strong>Where cost hides:</strong> retrieved context. Ten chunks of 500 tokens is 5,000 input tokens on every single call, dwarfing the user\'s question.</li>' +
      '<li><strong>Controls:</strong> prompt caching for the stable prefix, retrieve fewer and better chunks, route easy requests to a smaller model, and cap output length.</li>' +
      '<li><strong>Latency is a product constraint too:</strong> stream the response so time-to-first-token is what the user feels, not total generation time.</li>' +
      '</ul>',
    tags: ['llm', 'cost', 'rung3']
  },
  {
    id: 'ai-004',
    category: 'AI Engineering',
    title: 'You are giving a model tool access to your own API. What are the failure modes?',
    answer:
      '<ul>' +
      '<li><strong>Treat every model output as untrusted input</strong> — the same discipline as a job posting or a form field. Validate against a schema before it reaches your service.</li>' +
      '<li><strong>Prompt injection:</strong> if user-generated content enters the context, it can instruct the model. Never let a tool call perform a privileged action solely because the model asked; authorize against the real user\'s permissions.</li>' +
      '<li><strong>Idempotency and partial failure:</strong> a model may call the same tool twice or stop mid-sequence. This is the same reasoning as your background-job pipeline, one layer up.</li>' +
      '<li><strong>Bound it:</strong> cap tool-call depth and total calls per request, or a loop becomes an unbounded bill.</li>' +
      '<li><strong>Never let the model decide:</strong> anything involving money, deletion, or another user\'s data.</li>' +
      '</ul>',
    tags: ['agents', 'security', 'rung3']
  },
  {
    id: 'ai-005',
    category: 'AI Engineering',
    title: 'How do you build good streaming AI UX in React Native?',
    answer:
      '<ul>' +
      '<li><strong>Why this is your unfair angle:</strong> backend engineers cannot build this and mobile engineers do not understand the model half. You can do both.</li>' +
      '<li><strong>Transport:</strong> React Native\'s fetch does not stream response bodies reliably — use an SSE library or a native module. Know this; it is the first thing that bites.</li>' +
      '<li><strong>Rendering:</strong> batch token updates to a frame rather than setting state per token, or you will drop frames rendering text.</li>' +
      '<li><strong>Cancellation:</strong> navigating away must abort the request. An orphaned stream is a live bill.</li>' +
      '<li><strong>Bad networks:</strong> partial responses need a resume or a clean restart. This is the same offline-tolerance thinking you already apply to payments and deep-link cold opens.</li>' +
      '</ul>',
    tags: ['llm', 'react-native', 'rung3']
  },
  {
    id: 'ai-006',
    category: 'AI Engineering',
    title: 'When would you run a model on-device instead of calling an API?',
    answer:
      '<ul>' +
      '<li><strong>On-device when:</strong> the data must not leave the phone (privacy or regulation), it must work offline, you need sub-100ms latency, or per-request cost at your volume is prohibitive.</li>' +
      '<li><strong>API when:</strong> you need frontier capability, the model must be updatable without a store release, or the app size cost is unacceptable.</li>' +
      '<li><strong>The runtimes:</strong> Core ML on iOS, TFLite or ExecuTorch on Android — exposed to JS through a TurboModule you write yourself.</li>' +
      '<li><strong>The real constraints:</strong> model size against app size, thermal throttling on sustained inference, and battery.</li>' +
      '<li><strong>Why this is rare:</strong> it sits directly downstream of Rung 2. It is the intersection almost nobody in the market has.</li>' +
      '</ul>',
    tags: ['on-device', 'react-native', 'rung3']
  }
];
