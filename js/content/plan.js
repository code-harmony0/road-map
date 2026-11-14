/**
 * The plan: one ordered route. Generated from the three old roadmaps, then owned here.
 * Task ids are unchanged, so saved progress still matches.
 */
export const PLAN = [
 {
  "id": "funnel",
  "title": "Fix your funnel",
  "why": "Zero callbacks is a screening problem. Nobody asks about system design before they decide to interview you.",
  "doThis": "Lead the CV with Senior React Native, build a Gulf and India-remote target list, cut every role that needs sponsorship, and ask for referrals.",
  "doneWhen": "The target list is final, 10 referral messages are sent, and 5 tailored applications are out.",
  "tasks": [
   {
    "id": "t0-1",
    "text": "Sharpen the Senior React Native headline: mobile first, Next.js as the secondary line",
    "hours": 2,
    "time": "2h",
    "track": "Track A",
    "reason": "Every role in your pipeline is a React Native or mobile role. Recruiters filter on \"React Native\"; \"Product Engineer\" drops you out of that search.",
    "how": {
     "goal": "A one-page CV that a recruiter searching \"React Native\" finds, and that shows you own more than screens.",
     "why": "",
     "matters": [],
     "steps": [
      "Headline: \"Senior React Native Engineer\" (every role in your pipeline is RN or mobile). Add \"+ Next.js web\" as the secondary line.",
      "Summary, 3 lines: 5 years, sole owner of a production marketplace app, and one number (the 0.81 migration: 39% less code, 57 dependencies removed).",
      "Lead the Zonesso bullets with what's rare: five payment rails including N-Genius and Apple IAP, Arabic/RTL, release engineering (Fastlane, Detox in CI).",
      "Keep backend honest: \"light NestJS changes\" stays light. The weeks 7-12 backend brick is what upgrades that line.",
      "Keep it in career-ops cv.md and render with career-ops pdf."
     ],
     "use": [
      "<a href=\"https://www.techinterviewhandbook.org/resume/\" target=\"_blank\" rel=\"noopener\">Tech Interview Handbook: resume</a>",
      "career-ops cv.md"
     ],
     "deliverable": "",
     "doneWhen": "One page. The headline says Senior React Native Engineer. Every number traces to something you can show, and payments, RTL and releases are all above the fold.",
     "avoid": []
    }
   },
   {
    "id": "t0-2",
    "text": "Set comp targets from live market data: India Rs 20-30L (stretch 30-40L), Gulf AED 22-30k/month",
    "hours": 1,
    "time": "1h",
    "track": "Track A",
    "reason": "The Glassdoor median for RN at 4-6 years is about Rs 7-8L. 20-30L is the product-company band, not a default, so aim it only at product companies",
    "how": {
     "goal": "Set salary targets from live market data, so recruiter calls anchor in the right band and you don't chase numbers the market doesn't pay.",
     "why": "",
     "matters": [],
     "steps": [
      "Real numbers as of Sep 2026: RN at 4-6 years has a Glassdoor median of about Rs 7-8L across all company types. RN mid-level at product companies earns Rs 12-30L. Senior backend (5+ years) at product companies earns Rs 30-55L. Senior React in Dubai earns AED 22-45k/month, tax-free.",
      "In career-ops config/profile.yml set: India target Rs 20-30L, stretch Rs 30-40L (only after Bricks 1-2 are real and only at funded product companies), Gulf AED 22-30k/month.",
      "Pick one walk-away number before any call. A common rule of thumb is current CTC + 30%. Below that, switching isn't worth the risk.",
      "Apply for 20L+ only at product companies. IT services firms pay 2-3x less for identical experience, so don't expect this band there.",
      "Before quoting, check each target company on Glassdoor/AmbitionBox, because the band varies a lot by company and city (Bangalore runs 10-20% higher).",
      "Recruiter script: \"Based on the scope I'm targeting 25-30L fixed, flexible on structure.\" Never state your current CTC first."
     ],
     "use": [
      "<a href=\"https://www.glassdoor.co.in/Salaries/react-native-developer-salary-SRCH_KO0,22.htm\" target=\"_blank\" rel=\"noopener\">Glassdoor: RN developer salaries, India</a>",
      "<a href=\"https://www.tryjobrix.com/learn/react-developer-salary-india-2026\" target=\"_blank\" rel=\"noopener\">Jobrix: React salary by experience, India 2026</a>",
      "<a href=\"https://www.recrew.ai/salary-guides/senior-backend-engineer\" target=\"_blank\" rel=\"noopener\">Recrew: senior backend engineer salary, India 2026</a>",
      "<a href=\"https://hiredeveloper.ae/blog/hire-react-developer-dubai\" target=\"_blank\" rel=\"noopener\">HireDeveloper.ae: React developer pay in Dubai 2026</a>"
     ],
     "deliverable": "",
     "doneWhen": "profile.yml has target, stretch, walk-away and Gulf numbers, and you can say your number out loud without hedging.",
     "avoid": []
    }
   },
   {
    "id": "t0-3",
    "text": "Publish a portfolio URL and clean up GitHub — both fields are empty strings today",
    "hours": 3,
    "time": "3h",
    "track": "Track A",
    "reason": "Remote-Western and freelance both reward visible proof over interview performance",
    "how": {
     "goal": "A public URL a recruiter can open on a phone and, within 30 seconds, see shipped work.",
     "why": "",
     "matters": [],
     "steps": [
      "One-page portfolio. Next.js on Vercel's free tier is fine since you already know it. Sections: headline, 3 projects (screenshot, store link, one metric each), contact.",
      "Projects: Zonesso (public motors.zonesso.com), Eco Crew (50K+ downloads), plus one more. No proprietary code or internal screens.",
      "GitHub: pin 4-6 repos, each with a README (what it is, stack, screenshot, how to run). Archive tutorial repos and dead forks.",
      "Put both URLs in cv.md, LinkedIn and career-ops profile.yml.",
      "Hard cap: 3 hours. Ship the plain version and don't design a portfolio for a week."
     ],
     "use": [
      "<a href=\"https://vercel.com\" target=\"_blank\" rel=\"noopener\">Vercel</a>",
      "<a href=\"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme\" target=\"_blank\" rel=\"noopener\">GitHub: profile README</a>"
     ],
     "deliverable": "",
     "doneWhen": "Both URLs load on a phone, the portfolio shows 3 projects with a metric each, and GitHub has 4+ pinned repos with READMEs.",
     "avoid": []
    }
   },
   {
    "id": "t0-4",
    "text": "Build the 40-company target list Gulf-first: companies where payments, Arabic/RTL and marketplaces are the job",
    "hours": 2,
    "time": "2h",
    "track": "Track A",
    "reason": "Gulf employers sponsor visas as standard. Europe roles that expect right-to-work rarely reply to someone who needs sponsorship.",
    "how": {
     "goal": "40 named companies you would actually join, each with a reason you fit.",
     "why": "",
     "matters": [],
     "steps": [
      "25 Gulf companies (UAE/KSA) with mobile product teams: marketplaces, auto, proptech, fintech. Search LinkedIn Jobs for \"React Native\" in UAE/Saudi, posted in the last 30 days. Lead with what they need: N-Genius and Apple IAP payments, Arabic/RTL, a Dubai marketplace. Gulf employers sponsor visas as standard.",
      "15 India product companies hiring remote: funded startups and product companies, no IT services.",
      "Skip Europe roles that expect right-to-work. You need sponsorship there, and they rarely reply.",
      "For each: role link, one-line fit, one named contact (hiring manager or ex-colleague), tier A or B.",
      "Load them into career-ops (pipeline or portals.yml) so the tracker and /interview picker can see them.",
      "Stop at 40."
     ],
     "use": [
      "<a href=\"https://www.linkedin.com/jobs/\" target=\"_blank\" rel=\"noopener\">LinkedIn Jobs</a>",
      "<a href=\"https://wellfound.com/jobs\" target=\"_blank\" rel=\"noopener\">Wellfound (India startups)</a>",
      "<a href=\"https://www.bayt.com\" target=\"_blank\" rel=\"noopener\">Bayt (Gulf)</a>",
      "career-ops scan"
     ],
     "deliverable": "",
     "doneWhen": "40 rows, each with a link and a fit line, and at least 10 with a named person.",
     "avoid": []
    }
   },
   {
    "id": "t0-9",
    "text": "Do the funnel math once so you stop measuring yourself by application count",
    "hours": 0.5,
    "time": "0.5h",
    "track": "Track A",
    "reason": "33 targeted apps at a 15% first-round rate is 5 first rounds, 2 finals, 1-2 offers. That is the whole plan.",
    "how": {
     "goal": "Measure the search by conversion rates, not by how many applications you sent.",
     "why": "",
     "matters": [],
     "steps": [
      "Write it down once: 33 applications × 15% ≈ 5 first rounds → ~2 finals → 1-2 offers.",
      "The 15% is this plan's assumption. After 20 applications, replace it with your real rate.",
      "Track three numbers weekly: applications sent, first-round rate, final-round rate.",
      "Rule: if the first-round rate is under 10% after 20 applications, fix targeting and the CV (career-ops patterns). Don't send more."
     ],
     "use": [
      "The Job Tracker panel in this app",
      "career-ops patterns"
     ],
     "deliverable": "",
     "doneWhen": "The three numbers are somewhere you look at every week.",
     "avoid": []
    }
   },
   {
    "id": "t0-5",
    "text": "Write 5 STAR stories from real CV material plus a 60-second pitch",
    "hours": 2,
    "time": "2h",
    "track": "Track A",
    "reason": "Every story must trace to cv.md — an invented number repeated twice becomes a fact you cannot walk back",
    "how": {
     "goal": "5 rehearsed stories that cover what every interview loop asks, all traceable to your CV.",
     "why": "",
     "matters": [],
     "steps": [
      "Pick 5 themes: hardest technical problem (the RN migration), a performance win, a disagreement you handled, leading or mentoring, a failure and what you changed afterwards.",
      "Write each in STAR format, 200 words max. The Result needs a number that is on your CV.",
      "60-second pitch: who you are, what you own, one proof, what you want next.",
      "Say each one out loud with a timer, 2 minutes max per story. Record once and listen back.",
      "Save them in career-ops interview-prep/story-bank.md. The /interview page reads that file."
     ],
     "use": [
      "<a href=\"https://www.techinterviewhandbook.org/behavioral-interview/\" target=\"_blank\" rel=\"noopener\">Tech Interview Handbook: behavioral</a>",
      "interview-prep/story-bank.md"
     ],
     "deliverable": "",
     "doneWhen": "5 stories, each under 2 minutes spoken, every number on your CV, and a pitch that fits in 60 seconds.",
     "avoid": []
    }
   },
   {
    "id": "t0-7",
    "text": "Ten warm referral DMs to former colleagues and hiring managers",
    "hours": 2,
    "time": "2h",
    "track": "Track A",
    "reason": "Referrals convert several times better than cold applications and cost you one evening",
    "how": {
     "goal": "10 specific referral asks to people who already know your work.",
     "why": "",
     "matters": [],
     "steps": [
      "List 15 people: ex-colleagues, ex-managers, clients who moved companies. Message the best 10.",
      "Be specific: \"I'm looking at Senior Product Engineer roles at X and Y. Would you be open to referring me, or telling me who's hiring there?\" Include your CV link.",
      "Follow up once after 5 days, then stop.",
      "Log every reply in career-ops contacts."
     ],
     "use": [
      "career-ops contacts"
     ],
     "deliverable": "",
     "doneWhen": "10 sent, follow-ups dated, replies logged.",
     "avoid": []
    }
   },
   {
    "id": "t1-14",
    "text": "Retarget: run career-ops patterns, cut roles that need EU right-to-work",
    "hours": 1,
    "time": "1h",
    "track": "Track A",
    "reason": "About 21 sent and 1 interview is ~5%. The plan's own rule: under 10% after 20, fix targeting before sending more.",
    "how": {
     "goal": "Stop spending applications on roles that can't hire you.",
     "why": "",
     "matters": [],
     "steps": [
      "Run career-ops patterns on your tracker.",
      "Tag every open application: India-remote OK / Gulf (they sponsor) / needs EU right-to-work.",
      "Stop applying to the third group unless the posting explicitly offers sponsorship or relocation.",
      "Next applications, in order: Gulf marketplaces, fintech and proptech (anyone on N-Genius, Arabic/RTL apps, vehicle or property marketplaces), then India product companies hiring remote.",
      "For Gulf applications, put N-Genius and Apple IAP payments, Arabic/RTL and Zonesso (Dubai) in the first 3 lines of the CV."
     ],
     "use": [
      "career-ops patterns",
      "<a href=\"https://www.bayt.com\" target=\"_blank\" rel=\"noopener\">Bayt (Gulf)</a>",
      "<a href=\"https://www.linkedin.com/jobs/\" target=\"_blank\" rel=\"noopener\">LinkedIn Jobs</a>"
     ],
     "deliverable": "",
     "doneWhen": "Every open application is tagged, and the next 3 you send are all in the first two groups.",
     "avoid": []
    }
   },
   {
    "id": "t0-6",
    "text": "Send the first 5 applications — about 45 minutes each, properly tailored",
    "hours": 4,
    "time": "4h",
    "track": "Track A",
    "reason": "A real application costs 45 min. Five good ones beat fifteen rushed ones, and fifteen was never possible in 4 hours.",
    "how": {
     "goal": "5 properly tailored applications, about 45 minutes each.",
     "why": "",
     "matters": [],
     "steps": [
      "Read the JD and write down its top 5 requirements (5 min).",
      "Paste the link on the /interview page (Paste a link) or run career-ops on it. Skip anything that scores below B, because a low-fit application burns 45 minutes for nothing.",
      "Tailor the top third of the CV to those 5 requirements, using only claims you can defend for 10 minutes (15 min).",
      "Write a 3-sentence note: why them, one proof point, the ask (10 min).",
      "Find one person at the company (hiring manager or engineer) and send a short message (10 min).",
      "Log it in the tracker the same day."
     ],
     "use": [
      "/interview → Paste a link",
      "career-ops tracker"
     ],
     "deliverable": "",
     "doneWhen": "5 sent, all logged, each with its own tailored CV version.",
     "avoid": []
    }
   }
  ]
 },
 {
  "id": "rn-depth",
  "title": "React Native interview depth",
  "why": "This is what React Native interviews ask: New Architecture, machine coding, performance.",
  "doThis": "Explain your own 0.81 migration at Fabric and TurboModule depth, then practise timed machine-coding rounds.",
  "doneWhen": "You can explain your migration without notes and finish a paginated list with debounced search in 90 minutes.",
  "tasks": [
   {
    "id": "t1-rn1",
    "text": "New Architecture: explain your own 0.81 migration at Fabric, TurboModules and JSI depth",
    "hours": 3,
    "time": "3h",
    "track": "Track B",
    "reason": "0.81 runs the New Architecture by default, so every senior RN loop will ask you how it works",
    "how": {
     "goal": "Explain the New Architecture for 10 minutes using your own 0.81 migration as the example.",
     "why": "",
     "matters": [],
     "steps": [
      "Check the real state of the Zonesso app first: newArchEnabled in android/gradle.properties, and the iOS setting. Only claim what you can verify.",
      "Learn the four pieces: the old bridge (async, JSON-serialized messages) vs JSI (JavaScript calling C++ directly), Fabric (the new renderer, synchronous layout, React 19 concurrent features), TurboModules (lazy-loaded, typed through Codegen), and bridgeless mode.",
      "List the libraries that broke or needed upgrades during your migration and why. That list is your story.",
      "Write one page: what changed in your app, and what it bought you (startup, lists, fewer dependencies).",
      "Answer out loud: \"What is JSI?\", \"Why are TurboModules lazy?\", \"How would you write a native module today?\" (a Codegen spec)."
     ],
     "use": [
      "<a href=\"https://reactnative.dev/architecture/landing-page\" target=\"_blank\" rel=\"noopener\">React Native: architecture overview</a>",
      "<a href=\"https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture\" target=\"_blank\" rel=\"noopener\">RN 0.76: New Architecture by default</a>",
      "<a href=\"https://reactnative.dev/docs/turbo-native-modules-introduction\" target=\"_blank\" rel=\"noopener\">Turbo Native Modules</a>"
     ],
     "deliverable": "",
     "doneWhen": "10 minutes, no notes, with every concept tied to something that happened in your migration.",
     "avoid": []
    }
   },
   {
    "id": "t1-rn2",
    "text": "Machine coding rounds 1 and 2: a paginated list and a debounced search, 90 minutes each",
    "hours": 4,
    "time": "4h",
    "track": "Track B",
    "reason": "Indian product companies test mobile engineers by watching them build, not by LeetCode",
    "how": {
     "goal": "Two feature builds finished inside 90 minutes each, the way Indian product companies test mobile engineers.",
     "why": "",
     "matters": [],
     "steps": [
      "Beforehand: a blank TypeScript RN or Expo project, with navigation and TanStack Query installed, so the clock is spent building.",
      "Round 1: a product list from dummyjson.com/products (limit/skip) with FlashList infinite scroll, pull-to-refresh, and loading, empty and error states.",
      "Round 2: search with a 300ms debounce, cancel stale requests, cache results with TanStack Query, and show an offline banner.",
      "Strict 90-minute timer, screen recorded. Afterwards spend 15 minutes writing down what you'd refactor and why. Interviewers ask exactly that."
     ],
     "use": [
      "<a href=\"https://dummyjson.com/docs/products\" target=\"_blank\" rel=\"noopener\">DummyJSON products API</a>",
      "<a href=\"https://shopify.github.io/flash-list/\" target=\"_blank\" rel=\"noopener\">FlashList</a>",
      "<a href=\"https://tanstack.com/query/latest\" target=\"_blank\" rel=\"noopener\">TanStack Query</a>"
     ],
     "deliverable": "",
     "doneWhen": "Both run on a device inside the time limit, and you can explain every state and caching choice.",
     "avoid": []
    }
   },
   {
    "id": "t1-rn3",
    "text": "Performance, measured: profile cold start and your heaviest list, fix one thing, record before and after",
    "hours": 4,
    "time": "4h",
    "track": "Track B",
    "reason": "Your cold-start work has no number on the CV yet. A number you measured is worth ten you read.",
    "how": {
     "goal": "Put a number you measured yourself on your performance work.",
     "why": "",
     "matters": [],
     "steps": [
      "Cold start on a mid-range Android, release build: adb shell am start -W <package>/.MainActivity, 5 runs, take the median TotalTime.",
      "Profile your heaviest list screen with the React DevTools profiler and find components that re-render when they shouldn't.",
      "Fix one thing (memoize a row, move a heavy import behind a lazy load, trim startup work) and re-measure.",
      "Turn your Zonesso cold-start work (Promise.allSettled, the LRU cache) into a story with a before/after number. The CV has the technique but not the number."
     ],
     "use": [
      "<a href=\"https://reactnative.dev/docs/performance\" target=\"_blank\" rel=\"noopener\">React Native: performance overview</a>",
      "<a href=\"https://react.dev/learn/react-developer-tools\" target=\"_blank\" rel=\"noopener\">React DevTools profiler</a>"
     ],
     "deliverable": "",
     "doneWhen": "A before/after number you measured on a release build, and you can quote it.",
     "avoid": []
    }
   },
   {
    "id": "t1-8",
    "text": "Rehearse the 10-minute Zonesso architecture walkthrough with no notes",
    "hours": 3,
    "time": "3h",
    "track": "Track A",
    "reason": "Seniors explain their architecture fluently under pressure; that fluency is rehearsed, not innate",
    "how": {
     "goal": "A 10-minute Zonesso architecture walkthrough you can give with no notes.",
     "why": "",
     "matters": [],
     "steps": [
      "Structure: the product in 2 sentences → diagram (client, API, database, third parties) → 2 key decisions and their trade-offs → the migration story → what you'd change now.",
      "Draw the diagram from memory on a blank page.",
      "Record 10 minutes and watch it back. Fix the parts where you went vague.",
      "Do it 3 times this week, once with someone asking \"why?\" after every decision."
     ],
     "use": [
      "<a href=\"https://excalidraw.com\" target=\"_blank\" rel=\"noopener\">Excalidraw</a>",
      "/interview prep brief for likely follow-up questions"
     ],
     "deliverable": "",
     "doneWhen": "10 minutes, no notes, diagram drawn live, and you can answer \"why not X?\" for each decision.",
     "avoid": []
    }
   }
  ]
 },
 {
  "id": "system-design",
  "title": "System design",
  "why": "The one interview you got ended on scale questions. Practise the format before you build anything.",
  "doThis": "Learn the format, design a URL shortener and a chat system, then design your own marketplace app.",
  "doneWhen": "You can talk through a listings feed with search and chat for 40 minutes: requirements, API, data model, scale, trade-offs.",
  "tasks": [
   {
    "id": "p1-w5-sysdesign-format",
    "text": "Learn the system-design format: requirements -> API -> data model -> scale/caching -> trade-offs",
    "hours": 3,
    "time": "3h",
    "track": "Day 1-2",
    "reason": "Every senior interview has this round; you need the format, not new concepts",
    "how": {
     "goal": "Learn the standard system-design interview format.",
     "why": "Every senior interview has this round. You have real experience — you need the structure to present it.",
     "matters": [],
     "steps": [
      "Learn the flow: clarify requirements -> sketch API -> data model -> identify bottlenecks -> add caching/queues/scaling -> discuss trade-offs.",
      "Learn core building blocks: load balancer, cache (Redis), queue (BullMQ), CDN, DB replicas.",
      "Watch 2-3 system-design walkthroughs to absorb the rhythm.",
      "Write the format as a checklist you can run in any design round."
     ],
     "use": [
      "System Design Primer (GitHub)",
      "ByteByteGo / Hello Interview"
     ],
     "deliverable": "A reusable system-design checklist.",
     "doneWhen": "You can recite the 6-step format and name the core building blocks from memory.",
     "avoid": [
      "Jumping to a solution before clarifying requirements",
      "Forgetting to state trade-offs",
      "Over-engineering for scale nobody asked about"
     ]
    }
   },
   {
    "id": "t2-2",
    "text": "System design: URL shortener, then a chat system — you built real-time chat, use it",
    "hours": 4,
    "time": "4h",
    "track": "Track A",
    "reason": "Designing something you actually shipped beats reciting a blog post",
    "how": {
     "goal": "Two timed system designs, one of them grounded in the chat you actually built.",
     "why": "",
     "matters": [],
     "steps": [
      "URL shortener: requirements, API (POST /shorten, GET /:code), data model, ID generation (base62 counter vs hash, collisions), caching for a read-heavy load, rough capacity numbers.",
      "Chat: 1:1 and groups, WebSocket connections, message storage, delivery/read receipts, offline push, ordering. Use your real-time chat as the anchor.",
      "Each one: 45 min with a timer, draw the diagram, then compare against the written solution and note what you missed."
     ],
     "use": [
      "<a href=\"https://github.com/donnemartin/system-design-primer\" target=\"_blank\" rel=\"noopener\">System Design Primer</a>",
      "\"System Design Interview\" Vol 1 (Alex Xu), chapters on URL shortener and chat"
     ],
     "deliverable": "",
     "doneWhen": "Both done inside 45 minutes each, with a diagram and 3 trade-offs apiece.",
     "avoid": []
    }
   },
   {
    "id": "p1-w5-zonesso-reframe",
    "text": "Reframe Zonesso's real architecture in system-design vocabulary",
    "hours": 2,
    "time": "2h",
    "track": "Day 5",
    "reason": "You have real system-design experience (caching, queues, failover) — just never called it that",
    "how": {
     "goal": "Reframe Zonesso's real architecture in system-design vocabulary.",
     "why": "You have genuine system-design experience (5-repo system, Redis caching, BullMQ queues, S3/CDN, payment boundary) but never framed it as 'system design.' This becomes your strongest design answer because it's real.",
     "matters": [],
     "steps": [
      "Map each Zonesso component to a system-design term: API gateway, cache layer (Redis), async queue (BullMQ), CDN/image handler (S3), payment boundary.",
      "Explain the separate-repos decision (mobile, web, admin, 2 backends) as a scaling/release-risk trade-off.",
      "Explain optimistic UI + cache invalidation as a consistency trade-off.",
      "Write a narrative you can deliver when asked 'tell me about a system you designed.'"
     ],
     "use": [
      "Your Zonesso architecture notes",
      "Excalidraw"
     ],
     "deliverable": "A Zonesso-as-system-design narrative.",
     "doneWhen": "You can present Zonesso as a system design for 5-7 minutes using design vocabulary.",
     "avoid": [
      "Describing features instead of architecture",
      "Missing the trade-off framing (why, not just what)"
     ]
    }
   },
   {
    "id": "t1-rn4",
    "text": "Machine coding round 3, plus a mobile system design of your own marketplace app",
    "hours": 3,
    "time": "3h",
    "track": "Track B",
    "reason": "Your marketplace, told as a design answer (offline, payments, deep links), is the easiest strong answer you own",
    "how": {
     "goal": "One more timed build, plus your own marketplace told as a mobile system design answer.",
     "why": "",
     "matters": [],
     "steps": [
      "Round 3 (90 min): a cart with optimistic add/remove, persisted with MMKV, rolled back on failure.",
      "Mobile system design (45 min, timed): Zonesso. Cover the listings feed and offline cache, image loading, the payment flow with server revalidation, deep links plus the push cold-open race you solved, analytics, and releases.",
      "Say the trade-offs out loud: what you cache and for how long, what happens offline, how you'd roll back a bad release."
     ],
     "use": [
      "<a href=\"https://github.com/mrousavy/react-native-mmkv\" target=\"_blank\" rel=\"noopener\">MMKV</a>",
      "Your Zonesso architecture notes (Week 5)"
     ],
     "deliverable": "",
     "doneWhen": "Round 3 done inside 90 minutes, and a 45-minute design of your own app with 3 trade-offs defended.",
     "avoid": []
    }
   }
  ]
 },
 {
  "id": "backend",
  "title": "Backend brick",
  "why": "Your CV says \"light NestJS\". One deployed Postgres and NestJS service turns that into something you can defend.",
  "doThis": "Port the Zonesso data to Postgres, add constraints and indexes, secure it, then deploy it with CI.",
  "doneWhen": "The service is live, you have a before and after index measurement, and you can redo the scale design from the last milestone with your own numbers.",
  "tasks": [
   {
    "id": "t1-3",
    "text": "Backend brick opens: port user, showroom, vehicle, listing, package and subscription into a Postgres model",
    "hours": 4,
    "time": "4h",
    "track": "Track B",
    "reason": "The entities already exist in admin-v2-backend/src/schema — all your effort goes into the modelling, not the domain",
    "how": {
     "goal": "A Postgres schema for user, showroom, vehicle, listing, package and subscription that you designed yourself.",
     "why": "",
     "matters": [],
     "steps": [
      "Read admin-v2-backend/src/schema and list each entity's fields and relations on paper (1h).",
      "Decide each relation deliberately (one-to-many, many-to-many, what owns what) and draw an ERD.",
      "Write schema.sql by hand, with no ORM. Primary keys, proper types: numeric for money, timestamptz for time, text with a check for enums.",
      "Run Postgres in Docker, apply the schema, and seed about 20 rows per table with a script.",
      "Write down every place Mongo embedded data that you normalized, and why. That note becomes the SQL-vs-Mongo decision doc in weeks 11-12."
     ],
     "use": [
      "<a href=\"https://www.postgresql.org/docs/current/ddl.html\" target=\"_blank\" rel=\"noopener\">Postgres: data definition</a>",
      "<a href=\"https://dbdiagram.io\" target=\"_blank\" rel=\"noopener\">dbdiagram.io</a>",
      "<a href=\"https://hub.docker.com/_/postgres\" target=\"_blank\" rel=\"noopener\">Postgres Docker image</a>"
     ],
     "deliverable": "",
     "doneWhen": "schema.sql runs clean on a fresh database, the seed loads, and you have an ERD image.",
     "avoid": []
    }
   },
   {
    "id": "t2-3",
    "text": "Brick 2 opens: new NestJS service on Postgres, migrations under version control",
    "hours": 6,
    "time": "6h",
    "track": "Track B",
    "reason": "Owning a service end to end is the difference between reading backend and doing backend",
    "how": {
     "goal": "A NestJS service on Postgres that you own end to end, with versioned migrations.",
     "why": "",
     "matters": [],
     "steps": [
      "New repo: NestJS plus Prisma or TypeORM. Pick one and don't switch.",
      "Turn the schema you wrote by hand into migrations. synchronize/auto-sync stays off.",
      "Endpoints: listings CRUD plus search using your indexed query.",
      "DTO validation (class-validator) and correct HTTP status codes on errors.",
      "One e2e test for search with Supertest."
     ],
     "use": [
      "<a href=\"https://docs.nestjs.com\" target=\"_blank\" rel=\"noopener\">NestJS docs</a>",
      "<a href=\"https://docs.nestjs.com/techniques/database\" target=\"_blank\" rel=\"noopener\">NestJS: databases</a>",
      "<a href=\"https://www.prisma.io/docs/orm/prisma-migrate\" target=\"_blank\" rel=\"noopener\">Prisma Migrate</a>"
     ],
     "deliverable": "",
     "doneWhen": "Fresh clone → migrate → tests pass, and auto-sync is off.",
     "avoid": []
    }
   },
   {
    "id": "t1-6",
    "text": "Foreign keys, uniqueness and check constraints; write the listings search query and run EXPLAIN ANALYZE",
    "hours": 4,
    "time": "4h",
    "track": "Track B",
    "reason": "First contact with a query plan is the moment backend stops being someone else’s job",
    "how": {
     "goal": "The database, not the app code, rejects bad data, and you've read your first real query plan.",
     "why": "",
     "matters": [],
     "steps": [
      "Add foreign keys with an explicit ON DELETE (CASCADE or RESTRICT), decided per relation, with the reason written as a comment.",
      "UNIQUE constraints, including a partial unique index for rules like \"one active subscription per user\".",
      "CHECK constraints (price > 0, end_date > start_date, allowed statuses) and NOT NULL wherever a value is truly required.",
      "List the rules the app currently enforces in code and move each one that belongs in the database.",
      "Seed ~100k listings with generate_series, write the listings search query (city, make, price range, newest first), and run EXPLAIN ANALYZE. Save the output and note any Seq Scan and the total time."
     ],
     "use": [
      "<a href=\"https://www.postgresql.org/docs/current/ddl-constraints.html\" target=\"_blank\" rel=\"noopener\">Postgres: constraints</a>",
      "<a href=\"https://www.postgresql.org/docs/current/using-explain.html\" target=\"_blank\" rel=\"noopener\">Postgres: using EXPLAIN</a>",
      "<a href=\"https://explain.dalibo.com\" target=\"_blank\" rel=\"noopener\">explain.dalibo.com (plan visualiser)</a>"
     ],
     "deliverable": "",
     "doneWhen": "Inserting bad data fails at the database, and you have the saved plan with its execution time.",
     "avoid": []
    }
   },
   {
    "id": "t1-9",
    "text": "Composite, partial and covering indexes; measure before and after and record the numbers",
    "hours": 4,
    "time": "4h",
    "track": "Track B",
    "reason": "A number you measured yourself is worth ten opinions you read",
    "how": {
     "goal": "A measured before-and-after on the search query, with the numbers written down.",
     "why": "",
     "matters": [],
     "steps": [
      "Baseline: EXPLAIN (ANALYZE, BUFFERS) on the search query from the constraints task. Record the milliseconds.",
      "Composite index matching the filter and sort order, e.g. (city, make, created_at DESC). Re-measure.",
      "Partial index for the common filter (WHERE status = 'active'). Re-measure.",
      "Covering index (INCLUDE the list-page columns) and check for an Index Only Scan.",
      "Also measure one bulk insert before and after, because indexes make writes slower.",
      "Write a table: index, before ms, after ms, plan node used."
     ],
     "use": [
      "<a href=\"https://use-the-index-luke.com\" target=\"_blank\" rel=\"noopener\">Use The Index, Luke</a>",
      "<a href=\"https://www.postgresql.org/docs/current/indexes.html\" target=\"_blank\" rel=\"noopener\">Postgres: indexes</a>"
     ],
     "deliverable": "",
     "doneWhen": "A before/after table with real numbers, and you can explain why column order in a composite index matters.",
     "avoid": []
    }
   },
   {
    "id": "t2-4",
    "text": "Authorization for real: role guards, refresh-token rotation, revocation on logout",
    "hours": 5,
    "time": "5h",
    "track": "Track B",
    "reason": "Copied passport-jwt is the single most probed weak spot for mobile engineers moving to backend",
    "how": {
     "goal": "Auth you designed yourself: short access tokens, rotating refresh tokens, real revocation, role and ownership checks.",
     "why": "",
     "matters": [],
     "steps": [
      "Access token: JWT, about 15 minutes. Refresh token: random and opaque, stored hashed in a table (user_id, family_id, expires_at, revoked_at).",
      "/auth/refresh verifies the token, revokes it and issues a new pair (rotation). If a revoked token is ever reused, revoke the whole family (reuse detection).",
      "/auth/logout revokes the family.",
      "RolesGuard + @Roles (admin, dealer, user), plus an ownership check: a dealer can't edit another dealer's listing even though the role matches.",
      "A test for each of the above."
     ],
     "use": [
      "<a href=\"https://docs.nestjs.com/security/authentication\" target=\"_blank\" rel=\"noopener\">NestJS: authentication</a>",
      "<a href=\"https://docs.nestjs.com/security/authorization\" target=\"_blank\" rel=\"noopener\">NestJS: authorization</a>",
      "<a href=\"https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html\" target=\"_blank\" rel=\"noopener\">OWASP JWT cheat sheet</a>"
     ],
     "deliverable": "",
     "doneWhen": "Reusing an old refresh token logs the user out everywhere, and tests prove both role and ownership checks.",
     "avoid": []
    }
   },
   {
    "id": "t2-8",
    "text": "Docker Compose (API, Postgres, Redis) and GitHub Actions running tests on every push",
    "hours": 4,
    "time": "4h",
    "track": "Track B",
    "reason": "You already ship Bitbucket Pipelines for mobile — this is the same skill, rebuilt from first principles",
    "how": {
     "goal": "One command runs everything locally, and every push runs the tests.",
     "why": "",
     "matters": [],
     "steps": [
      "docker-compose.yml with api, postgres and redis, each with a healthcheck. Multi-stage Dockerfile for the API.",
      "GitHub Actions on push: install → lint → migrate against a Postgres service container → test.",
      "Add the CI badge to the README."
     ],
     "use": [
      "<a href=\"https://docs.docker.com/compose/\" target=\"_blank\" rel=\"noopener\">Docker Compose docs</a>",
      "<a href=\"https://docs.github.com/en/actions/use-cases-and-examples/using-containerized-services/creating-postgresql-service-containers\" target=\"_blank\" rel=\"noopener\">GitHub Actions: PostgreSQL service containers</a>"
     ],
     "deliverable": "",
     "doneWhen": "Fresh clone → docker compose up works, and a failing test turns CI red.",
     "avoid": []
    }
   },
   {
    "id": "t2-9",
    "text": "Deploy Brick 2 for real: health endpoint, structured logs with request id, one alert that reaches your phone",
    "hours": 5,
    "time": "5h",
    "track": "Track B",
    "reason": "The moment this is public, full-stack stops being a claim and becomes a demo",
    "how": {
     "goal": "Brick 2 deployed publicly, and you find out it broke before a user does.",
     "why": "",
     "matters": [],
     "steps": [
      "Deploy to a cheap host (Render, Railway, Fly.io or a small Lightsail box) with managed Postgres and Redis.",
      "/health checks database and Redis connectivity (@nestjs/terminus).",
      "Structured JSON logs with a request id on every line (nestjs-pino).",
      "An uptime monitor on /health that pushes to your phone (UptimeRobot or Better Stack free tier).",
      "Break it on purpose (stop the database) and confirm the alert arrives."
     ],
     "use": [
      "<a href=\"https://docs.nestjs.com/recipes/terminus\" target=\"_blank\" rel=\"noopener\">NestJS: Terminus health checks</a>",
      "<a href=\"https://github.com/iamolegga/nestjs-pino\" target=\"_blank\" rel=\"noopener\">nestjs-pino</a>",
      "<a href=\"https://uptimerobot.com\" target=\"_blank\" rel=\"noopener\">UptimeRobot</a>"
     ],
     "deliverable": "",
     "doneWhen": "Public URL, alert tested end to end, request ids visible in the logs.",
     "avoid": []
    }
   },
   {
    "id": "t2-11",
    "text": "README with the architecture diagram and the trade-offs you chose",
    "hours": 2,
    "time": "2h",
    "track": "Track B",
    "reason": "An undocumented repo is a repo nobody reads — the write-up is half the artifact",
    "how": {
     "goal": "A README that lets a stranger run the service and understand the decisions behind it.",
     "why": "",
     "matters": [],
     "steps": [
      "Sections: what it is, architecture diagram (Excalidraw or Mermaid), how to run, API overview, key decisions and trade-offs, measured numbers, what's next.",
      "Link the SQL-vs-Mongo decision record, the cache invalidation policy and the queue idempotency design."
     ],
     "use": [
      "<a href=\"https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams\" target=\"_blank\" rel=\"noopener\">Mermaid diagrams on GitHub</a>"
     ],
     "deliverable": "",
     "doneWhen": "Someone else can run it in 10 minutes and explain 3 of your decisions back to you.",
     "avoid": []
    }
   },
   {
    "id": "t1-11",
    "text": "Write the SQL-vs-Mongo decision doc for the Zonesso domain",
    "hours": 3,
    "time": "3h",
    "track": "Track B",
    "reason": "This turns \"walk me through a schema you designed\" from a dead end into your strongest ten minutes",
    "how": {
     "goal": "A one-page decision record for choosing Postgres over Mongo for this domain.",
     "why": "",
     "matters": [],
     "steps": [
      "Context: the entities and the real access patterns (search, listing detail, subscriptions/billing).",
      "Options: Mongo as it is today vs Postgres.",
      "Criteria: relations, transactions for money, query flexibility, operations.",
      "Decision and consequences, including what you would keep in Mongo, if anything.",
      "Include your before/after index numbers as evidence, and link the doc from the repo README."
     ],
     "use": [
      "<a href=\"https://github.com/joelparkerhenderson/architecture-decision-record\" target=\"_blank\" rel=\"noopener\">ADR template (Michael Nygard)</a>"
     ],
     "deliverable": "",
     "doneWhen": "One page, one clear decision, 3+ trade-offs backed by evidence, and you can defend it for 10 minutes.",
     "avoid": []
    }
   }
  ]
 },
 {
  "id": "close",
  "title": "Close the offer",
  "why": "Interviews turn into pay only if you negotiate and compare processes.",
  "doThis": "Negotiate from the top of your band, compress competing timelines, decide and sign.",
  "doneWhen": "An offer is signed, or you have two processes at final stage and a decision date.",
  "tasks": [
   {
    "id": "t2-10",
    "text": "Stop applying. Negotiate: anchor at the top of your band, walk away below Rs 20L, run career-ops offer-prep before signing",
    "hours": 3,
    "time": "3h",
    "track": "Track A",
    "reason": "Closing two live processes is worth more than opening ten new ones this late",
    "how": {
     "goal": "Convert live processes into the best offer you can get, without leaving money on the table or signing blind.",
     "why": "",
     "matters": [],
     "steps": [
      "Once 2 processes reach the final stage, stop sending new applications.",
      "Before any number conversation, run career-ops offer-prep in the CLI. It needs a live session, so it isn't in the web UI.",
      "Don't share your current CTC first. Give a band: \"Based on the scope I'm at Rs 26-30L fixed.\"",
      "Get the offer in writing. Negotiate fixed pay first, then joining bonus or notice buyout.",
      "Decide your walk-away before the call (below Rs 20L in India or AED 22k/month in the Gulf, unless the role is a big step up), not during it."
     ],
     "use": [
      "<a href=\"https://www.kalzumeus.com/2012/01/23/salary-negotiation/\" target=\"_blank\" rel=\"noopener\">Patrick McKenzie: Salary Negotiation</a>",
      "career-ops offer-prep"
     ],
     "deliverable": "",
     "doneWhen": "Every offer gets a written counter, and nothing is signed before offer-prep.",
     "avoid": []
    }
   },
   {
    "id": "t2-12",
    "text": "GATE 3 check: 2 processes at final stage. If zero, buy two paid mocks this week",
    "hours": 4,
    "time": "4h",
    "track": "Track A",
    "reason": "Zero finals from five first-rounds is an execution problem — more applications will not fix it",
    "how": {
     "goal": "Find out whether the finals are happening, and fix the right thing if they aren't.",
     "why": "",
     "matters": [],
     "steps": [
      "Count processes at final stage (target 2).",
      "If zero: book 2 mock interviews with a senior engineer this week (a paid platform like interviewing.io, or a senior friend who runs interviews).",
      "Work out where you're losing, DSA, design or behavioral, from interview notes and your /interview history, and aim the mocks at that."
     ],
     "use": [
      "<a href=\"https://interviewing.io\" target=\"_blank\" rel=\"noopener\">interviewing.io</a>",
      "/interview → Recent prep"
     ],
     "deliverable": "",
     "doneWhen": "Numbers recorded. If zero finals, 2 mocks booked with a specific focus.",
     "avoid": []
    }
   },
   {
    "id": "t3-1",
    "text": "Compress timelines against competing processes",
    "hours": 3,
    "time": "3h",
    "track": "Track A",
    "reason": "A competing process is worth more than every negotiation script ever written",
    "how": {
     "goal": "Line up decision dates so you choose between offers instead of accepting the first one.",
     "why": "",
     "matters": [],
     "steps": [
      "With an offer or a late-stage process, tell the others: \"I have a deadline on [date]. You're my first choice. Can we speed up the remaining steps?\"",
      "Only say it if it's true. Never invent an offer.",
      "Ask each company for its remaining steps and dates, and try to land every decision within the same week."
     ],
     "use": [],
     "deliverable": "",
     "doneWhen": "Every live process has a known decision date within the same week.",
     "avoid": []
    }
   },
   {
    "id": "t3-2",
    "text": "Decide, log the outcome, archive the artifacts",
    "hours": 2,
    "time": "2h",
    "track": "Track A",
    "reason": "The tracker only pays off if you close the loop on every process",
    "how": {
     "goal": "Pick the offer on substance, and close the loop on every process.",
     "why": "",
     "matters": [],
     "steps": [
      "Compare: fixed pay, how realistic the variable is, scope (do you own backend?), team, notice buyout.",
      "Decide, then log every process's outcome in career-ops, rejections included.",
      "Archive JDs and notes, and decline the others politely."
     ],
     "use": [
      "career-ops outcome"
     ],
     "deliverable": "",
     "doneWhen": "The tracker shows a final outcome for every process.",
     "avoid": []
    }
   },
   {
    "id": "t3-5",
    "text": "Notice period. Keep one backup process warm until you have signed",
    "hours": 2,
    "time": "2h",
    "track": "Track A",
    "reason": "Offers fall through; a warm second process costs nothing and saves everything",
    "how": {
     "goal": "Nothing collapses between offer and joining.",
     "why": "",
     "matters": [],
     "steps": [
      "Agree the resignation and notice timeline in writing.",
      "Keep one other process alive at a courteous pace until the signed offer letter and background check are both done.",
      "Decline the backup only after that."
     ],
     "use": [],
     "deliverable": "",
     "doneWhen": "Signed letter in hand before the backup is declined.",
     "avoid": []
    }
   },
   {
    "id": "t3-7",
    "text": "Signed. Update the tracker and thank every referrer by name",
    "hours": 1,
    "time": "1h",
    "track": "Track A",
    "reason": "The people who referred you are the people who will refer you again",
    "how": {
     "goal": "Close out the search and keep your network warm.",
     "why": "",
     "matters": [],
     "steps": [
      "Update the tracker now. Update LinkedIn on your start date, not before.",
      "Send each referrer and helper a personal message naming what actually helped."
     ],
     "use": [],
     "deliverable": "",
     "doneWhen": "Every referrer thanked individually.",
     "avoid": []
    }
   }
  ]
 },
 {
  "id": "backend-depth",
  "title": "After the move: backend depth",
  "why": "Caching, queues and scale thinking are what senior backend questions probe.",
  "doThis": "Add Redis caching with an invalidation policy, a background job queue, then study how systems scale and how to run them.",
  "doneWhen": "You can explain your cache invalidation and retry design, and what breaks first as traffic grows.",
  "tasks": [
   {
    "id": "t2-6",
    "text": "Redis caching on listings and search, with an invalidation policy you can defend out loud",
    "hours": 5,
    "time": "5h",
    "track": "Track B",
    "reason": "Anyone can add a cache; the interview question is always about invalidation",
    "how": {
     "goal": "Redis caching on listings and search, with an invalidation policy you can defend.",
     "why": "",
     "matters": [],
     "steps": [
      "Cache-aside on GET /listings/:id (TTL 5-10 min) and on popular searches (key = hash of the normalised query, TTL ~60s).",
      "Invalidation: delete the :id key on update/delete. For search, rely on the short TTL or a per-city version key. Write down why you chose each.",
      "Measure p95 latency and hit rate before and after (autocannon).",
      "Know one answer to cache stampede (a lock, or stale-while-revalidate), even if you don't build it."
     ],
     "use": [
      "<a href=\"https://docs.nestjs.com/techniques/caching\" target=\"_blank\" rel=\"noopener\">NestJS: caching</a>",
      "<a href=\"https://redis.io/docs/latest/\" target=\"_blank\" rel=\"noopener\">Redis docs</a>",
      "<a href=\"https://github.com/mcollina/autocannon\" target=\"_blank\" rel=\"noopener\">autocannon</a>"
     ],
     "deliverable": "",
     "doneWhen": "Before/after numbers, and a clear answer to \"a listing's price changed; how long until users see it, and why?\"",
     "avoid": []
    }
   },
   {
    "id": "t2-7",
    "text": "BullMQ image-processing queue: retries, idempotency, dead-letter",
    "hours": 5,
    "time": "5h",
    "track": "Track B",
    "reason": "Same job your service already does with sharp and tinify — this time you built the machinery",
    "how": {
     "goal": "An image-processing queue that retries, never duplicates work, and parks failures where you can see them.",
     "why": "",
     "matters": [],
     "steps": [
      "The upload endpoint stores the original and enqueues {listingId, imageKey}.",
      "The worker resizes to 3 sizes with sharp, compresses (tinify), writes the outputs and updates the database.",
      "Idempotency: use imageKey as the jobId, and have the worker skip if the outputs already exist.",
      "attempts: 3 with exponential backoff. After that, move the job to a separate dead-letter queue you can inspect and replay (BullMQ has no built-in DLQ; its failed set or your own queue plays that role).",
      "Kill the worker mid-job, restart it, and confirm there are no duplicate images."
     ],
     "use": [
      "<a href=\"https://docs.bullmq.io\" target=\"_blank\" rel=\"noopener\">BullMQ docs</a>",
      "<a href=\"https://docs.nestjs.com/techniques/queues\" target=\"_blank\" rel=\"noopener\">NestJS: queues</a>"
     ],
     "deliverable": "",
     "doneWhen": "A forced failure retries 3 times and then lands in the dead-letter queue, and re-uploading the same image doesn't redo the work.",
     "avoid": []
    }
   },
   {
    "id": "t3-9",
    "text": "Distributed systems: replication, sharding, consistency, CAP",
    "hours": 8,
    "time": "8h",
    "track": "Track B",
    "reason": "The old Phase 3 had this right — it just had the timing wrong by four months",
    "how": {
     "goal": "A working understanding of replication, partitioning and consistency.",
     "why": "",
     "matters": [],
     "steps": [
      "Read \"Designing Data-Intensive Applications\" (Kleppmann) chapters 5 (Replication) and 6 (Partitioning), plus the linearizability part of chapter 9. About 8h spread over a month.",
      "After each chapter, write one page applying it to Zonesso or your new company's system."
     ],
     "use": [
      "<a href=\"https://dataintensive.net\" target=\"_blank\" rel=\"noopener\">Designing Data-Intensive Applications</a>"
     ],
     "deliverable": "",
     "doneWhen": "You can explain replication lag, why partition keys matter, and what CAP does and doesn't say.",
     "avoid": []
    }
   },
   {
    "id": "t3-10",
    "text": "Observability and cost ownership on AWS: tracing, dashboards, and the monthly bill",
    "hours": 6,
    "time": "6h",
    "track": "Track B",
    "reason": "Knowing what your service costs is the line between senior and staff-adjacent",
    "how": {
     "goal": "Know where time goes and what the service costs.",
     "why": "",
     "matters": [],
     "steps": [
      "OpenTelemetry tracing across API → database → queue.",
      "One dashboard: p95 latency, error rate, queue depth.",
      "AWS Cost Explorer: break the monthly bill down by service and find the top 3 costs. Set a billing alarm."
     ],
     "use": [
      "<a href=\"https://opentelemetry.io/docs/languages/js/\" target=\"_blank\" rel=\"noopener\">OpenTelemetry for Node.js</a>",
      "<a href=\"https://aws.amazon.com/aws-cost-management/aws-cost-explorer/\" target=\"_blank\" rel=\"noopener\">AWS Cost Explorer</a>"
     ],
     "deliverable": "",
     "doneWhen": "You know the service's monthly cost within 20%, and you have one trace showing where a slow request spends its time.",
     "avoid": []
    }
   }
  ]
 },
 {
  "id": "mobile-moat",
  "title": "After the move: mobile moat",
  "why": "Platform depth compounds the five years you already have.",
  "doThis": "Swift and Kotlin enough to read native modules, then the New Architecture, then performance and shipping safety.",
  "doneWhen": "Someone else can install a native module you wrote and run it on both platforms.",
  "tasks": [
   {
    "id": "r1-10",
    "text": "Swift enough to build a module: optionals, protocols, async/await, ARC, and how an iOS project is laid out",
    "hours": 15,
    "time": "15h",
    "track": "Rs 30-40L",
    "reason": "The TurboModule task below assumes you can write Swift. Learn the part a module needs, not all of iOS.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "You need reading fluency plus enough writing to build a module, not full iOS app development",
      "Focus on optionals, protocols, value vs reference types, async/await, and ARC memory rules",
      "Learn how a native project is laid out: targets, Info.plist, Swift Package Manager or CocoaPods"
     ],
     "steps": [
      "Work through the language tour, then write a small Swift package with tests",
      "Build one tiny SwiftUI screen so you know what the platform expects",
      "Read the iOS half of a well-known RN library and note what you recognise"
     ],
     "use": [
      "<a href=\"https://docs.swift.org/swift-book/\" target=\"_blank\" rel=\"noopener\">The Swift Programming Language (official book)</a>",
      "<a href=\"https://www.hackingwithswift.com/100/swiftui\" target=\"_blank\" rel=\"noopener\">100 Days of SwiftUI — Paul Hudson, free</a>",
      "<a href=\"https://developer.apple.com/tutorials/swiftui\" target=\"_blank\" rel=\"noopener\">Apple — SwiftUI tutorials</a>"
     ],
     "deliverable": "A small Swift package with unit tests, plus one SwiftUI screen",
     "doneWhen": "You can read the iOS side of a popular RN library without looking up each keyword",
     "avoid": [
      "Doing 100 days of a course before touching the TurboModule. Stop when you can write the module"
     ]
    }
   },
   {
    "id": "r1-11",
    "text": "Kotlin enough to build a module: null safety, coroutines, Gradle, lifecycle and permissions",
    "hours": 15,
    "time": "15h",
    "track": "Rs 30-40L",
    "reason": "Most React Native Android breakage lives in Gradle and threading. Reading it fluently is the difference-maker.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Kotlin null safety and coroutines, then Gradle and the Android lifecycle",
      "Permissions and threading are where native modules fail in the field",
      "Learn how to read a Gradle build, because most RN Android breakage lives there"
     ],
     "steps": [
      "Do the Kotlin basics track and write a small library with tests",
      "Build one tiny Compose screen",
      "Read the Android half of a well-known RN library"
     ],
     "use": [
      "<a href=\"https://kotlinlang.org/docs/getting-started.html\" target=\"_blank\" rel=\"noopener\">Kotlin — getting started</a>",
      "<a href=\"https://kotlinlang.org/docs/koans.html\" target=\"_blank\" rel=\"noopener\">Kotlin Koans</a>",
      "<a href=\"https://developer.android.com/courses/android-basics-compose/course\" target=\"_blank\" rel=\"noopener\">Android Basics with Compose</a>"
     ],
     "deliverable": "A small Kotlin library with tests, plus one Compose screen",
     "doneWhen": "You can read the Android side of a popular RN library and explain its threading",
     "avoid": [
      "Learning Android as a full-time job. Learn what a module needs"
     ]
    }
   },
   {
    "id": "r1-1",
    "text": "JSI, Fabric, TurboModules and Hermes — how they actually work, not the marketing version",
    "hours": 10,
    "time": "10h",
    "track": "Rs 30-40L",
    "reason": "You already did the 0.75 to 0.81 migration. Very few RN engineers can explain what they migrated TO.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "JSI lets JavaScript hold direct references to C++ objects, so there is no serialised JSON bridge",
      "Fabric is the new renderer with a synchronous-capable pipeline. TurboModules are lazily loaded and typed through Codegen. Hermes runs precompiled bytecode",
      "Be able to draw the render pipeline (render, commit, mount) from memory"
     ],
     "steps": [
      "Draw the pipeline on paper, then check it against the docs",
      "Read the source of one core TurboModule in the react-native repository",
      "Explain to a colleague what your 0.75 to 0.81 migration actually changed underneath"
     ],
     "use": [
      "<a href=\"https://reactnative.dev/architecture/landing-page\" target=\"_blank\" rel=\"noopener\">React Native docs — Architecture section</a>",
      "<a href=\"https://github.com/facebook/react-native\" target=\"_blank\" rel=\"noopener\">react-native source — read one real TurboModule</a>",
      "<a href=\"https://www.callstack.com/blog\" target=\"_blank\" rel=\"noopener\">Callstack blog — deep dives on the new architecture</a>",
      "<a href=\"https://www.react-native.eu/\" target=\"_blank\" rel=\"noopener\">React Native EU — conference talks</a>"
     ],
     "deliverable": "A hand-drawn pipeline diagram and a written one-page explanation",
     "doneWhen": "You can explain JSI without saying \"it is faster\"",
     "avoid": [
      "Learning from third-party summaries that repeat the marketing version"
     ]
    }
   },
   {
    "id": "r1-2",
    "text": "Write a real TurboModule in Kotlin and Swift, published and consumed by your own app",
    "hours": 12,
    "time": "12h",
    "track": "Rs 30-40L",
    "reason": "This is the line between \"React Native developer\" and \"mobile engineer who happens to use React Native\"",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Spec first: a TypeScript spec file drives Codegen, which generates the native interfaces",
      "Keep native modules thin. Make calls async by default, because sync calls block the JS thread",
      "Test release builds on both platforms, not just debug on one"
     ],
     "steps": [
      "Write the spec and generate the native interfaces",
      "Implement it in Swift and Kotlin, then consume it from your app",
      "Extract it into its own package with an example app"
     ],
     "use": [
      "<a href=\"https://reactnative.dev/docs/turbo-native-modules-introduction\" target=\"_blank\" rel=\"noopener\">React Native docs — Turbo Native Modules</a>",
      "<a href=\"https://docs.expo.dev/modules/overview/\" target=\"_blank\" rel=\"noopener\">Expo Modules API — a friendlier way to write native modules</a>",
      "<a href=\"https://nitro.margelo.com/\" target=\"_blank\" rel=\"noopener\">Nitro Modules (Margelo) — fast native modules</a>",
      "<a href=\"https://callstack.github.io/react-native-builder-bob/\" target=\"_blank\" rel=\"noopener\">react-native-builder-bob — scaffold a library</a>"
     ],
     "deliverable": "A published module with an example app, used in your own product",
     "doneWhen": "A stranger can install the package and call it on both platforms",
     "avoid": [
      "Putting business logic in native code where only one platform tests it"
     ]
    }
   },
   {
    "id": "r1-3",
    "text": "A Fabric native component with proper prop and event plumbing",
    "hours": 8,
    "time": "8h",
    "track": "Rs 30-40L",
    "reason": "Companies with a real mobile platform hire specifically for this and cannot find people",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Props flow one way in, events flow one way out. Keep the contract small",
      "Get view lifecycle and recycling right, or you leak or show stale state",
      "Prefer a native component only when JS cannot do the job: a real platform view or a hot path"
     ],
     "steps": [
      "Define the component spec with typed props and events",
      "Implement it on both platforms",
      "Stress it: mount, unmount and update it in a list of a thousand items"
     ],
     "use": [
      "<a href=\"https://reactnative.dev/docs/fabric-native-components-introduction\" target=\"_blank\" rel=\"noopener\">React Native docs — Fabric Native Components</a>",
      "<a href=\"https://docs.expo.dev/modules/overview/\" target=\"_blank\" rel=\"noopener\">Expo Modules API — native views</a>"
     ],
     "deliverable": "A native view with typed props and events, running in a long list",
     "doneWhen": "It survives fast scrolling in a list with no leaks or stale props",
     "avoid": [
      "Testing in a single-screen example and never in a recycled list"
     ]
    }
   },
   {
    "id": "r1-4",
    "text": "Profile for real: Xcode Instruments, Android Studio Profiler, Perfetto, Flipper/Hermes traces",
    "hours": 8,
    "time": "8h",
    "track": "Rs 30-40L",
    "reason": "You already cut cold start at Zonesso. Doing it with instruments instead of intuition is the seniority signal.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Measure release builds on a low-end real device. Debug builds and simulators mislead",
      "Find which thread is slow first (JS, UI or native), then dig into that thread",
      "One change, one measurement"
     ],
     "steps": [
      "Pick one janky screen and record a baseline on a mid-range Android phone",
      "Capture it in React Native DevTools, Xcode Instruments and Android Studio Profiler",
      "Fix one thing, re-measure, and write down the number"
     ],
     "use": [
      "<a href=\"https://reactnative.dev/docs/profiling\" target=\"_blank\" rel=\"noopener\">React Native docs — profiling</a>",
      "<a href=\"https://perfetto.dev/docs/\" target=\"_blank\" rel=\"noopener\">Perfetto documentation</a>",
      "<a href=\"https://developer.android.com/studio/profile\" target=\"_blank\" rel=\"noopener\">Android Studio profilers</a>",
      "<a href=\"https://developer.apple.com/documentation/xcode/improving-your-app-s-performance\" target=\"_blank\" rel=\"noopener\">Apple — improving app performance with Instruments</a>",
      "<a href=\"https://www.callstack.com/ebooks/the-ultimate-guide-to-react-native-optimization\" target=\"_blank\" rel=\"noopener\">Callstack — Ultimate Guide to React Native Optimization (free)</a>"
     ],
     "deliverable": "A profiling note with a baseline, one fix and the measured result",
     "doneWhen": "You can show a trace, name the bottleneck thread, and quote the improvement",
     "avoid": [
      "Optimising from intuition without a baseline"
     ]
    }
   },
   {
    "id": "r1-5",
    "text": "Startup, memory and frame budgets as numbers enforced in CI, not aspirations",
    "hours": 6,
    "time": "6h",
    "track": "Rs 30-40L",
    "reason": "A budget in CI is what a platform engineer builds; a one-off fix is what a feature engineer ships",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Pick three numbers: cold start time, bundle size, and dropped frames on one key screen",
      "Fail CI when a number regresses past a threshold, against a stored baseline",
      "Measure on the same device class every time, or the numbers are noise"
     ],
     "steps": [
      "Record the three baselines",
      "Add a CI job that measures them and compares to the baseline",
      "Make one deliberate regression and watch CI fail"
     ],
     "use": [
      "<a href=\"https://callstack.github.io/reassure/\" target=\"_blank\" rel=\"noopener\">Reassure — performance regression testing for React Native</a>",
      "<a href=\"https://developer.android.com/topic/performance/benchmarking/macrobenchmark-overview\" target=\"_blank\" rel=\"noopener\">Android Macrobenchmark</a>",
      "<a href=\"https://maestro.mobile.dev/\" target=\"_blank\" rel=\"noopener\">Maestro — flows you can time in CI</a>"
     ],
     "deliverable": "A CI job that fails on a performance regression",
     "doneWhen": "A planted regression turns the pipeline red",
     "avoid": [
      "Thresholds so tight that CI is red from noise, so everyone ignores it"
     ]
    }
   },
   {
    "id": "r1-6",
    "text": "Bundle and asset pipelines: code splitting, lazy native modules, image strategy at scale",
    "hours": 6,
    "time": "6h",
    "track": "Rs 30-40L",
    "reason": "You cut Eco Crew ~30% and JIFFL 15% — systematize what you did by feel",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Look at what is in the bundle before deciding what to cut",
      "Images are usually the biggest lever. Choose formats, sizes and caching on purpose",
      "Lazy-load heavy screens and native modules that most sessions never touch"
     ],
     "steps": [
      "Analyse the bundle and list the five largest contributors",
      "Fix the top two and re-measure",
      "Set an image strategy: sizes, format, caching"
     ],
     "use": [
      "<a href=\"https://docs.expo.dev/guides/analyzing-bundles/\" target=\"_blank\" rel=\"noopener\">Expo — analysing bundles</a>",
      "<a href=\"https://metrobundler.dev/\" target=\"_blank\" rel=\"noopener\">Metro bundler documentation</a>",
      "<a href=\"https://docs.expo.dev/versions/latest/sdk/image/\" target=\"_blank\" rel=\"noopener\">expo-image — caching and formats</a>"
     ],
     "deliverable": "A before/after bundle report with the changes that mattered",
     "doneWhen": "You can name the five biggest bundle contributors and what you did about each",
     "avoid": [
      "Micro-optimising code while a few oversized images dominate"
     ]
    }
   },
   {
    "id": "r1-7",
    "text": "Monorepo tooling for mobile: shared component and native-module packages, versioning, CI caching",
    "hours": 10,
    "time": "10h",
    "track": "Rs 30-40L",
    "reason": "You shipped three Keys On Rent apps over one domain — that was a platform problem solved by hand",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Decide what is shared (design system, native modules, API client) and what is app-specific",
      "CI caching and affected-only builds are what make a monorepo affordable",
      "Metro and native builds need explicit monorepo configuration. Budget time for it"
     ],
     "steps": [
      "Move two apps into one workspace with a shared package",
      "Add remote caching and affected-only CI",
      "Version and publish one shared package internally"
     ],
     "use": [
      "<a href=\"https://docs.expo.dev/guides/monorepos/\" target=\"_blank\" rel=\"noopener\">Expo — monorepos</a>",
      "<a href=\"https://nx.dev/\" target=\"_blank\" rel=\"noopener\">Nx</a>",
      "<a href=\"https://turborepo.com/\" target=\"_blank\" rel=\"noopener\">Turborepo</a>"
     ],
     "deliverable": "A monorepo with two apps, a shared package and cached CI",
     "doneWhen": "Changing a shared package rebuilds only the apps that depend on it",
     "avoid": [
      "Sharing everything. Share stable things and leave volatile ones per app"
     ]
    }
   },
   {
    "id": "r1-8",
    "text": "OTA updates and staged rollout: what can ship over the air, what must not, and how to roll back",
    "hours": 6,
    "time": "6h",
    "track": "Rs 30-40L",
    "reason": "Release engineering is already your differentiator — this is the next rung of it",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "OTA updates change JavaScript and assets only. Anything touching native code or permissions needs a store release",
      "Tie each update to a runtime version so bad JS can never reach an incompatible binary",
      "Rehearse rollback before you need it, and combine OTA with staged store rollout"
     ],
     "steps": [
      "Set up an OTA channel with runtime versions",
      "Ship a deliberately broken update to a test channel and roll it back",
      "Read the store rules on downloaded code so you know your limits"
     ],
     "use": [
      "<a href=\"https://docs.expo.dev/eas-update/introduction/\" target=\"_blank\" rel=\"noopener\">Expo EAS Update</a>",
      "<a href=\"https://developer.apple.com/app-store/review/guidelines/\" target=\"_blank\" rel=\"noopener\">App Store Review Guidelines (see section 3.3.2)</a>"
     ],
     "deliverable": "A written OTA policy: what may ship over the air, how to roll back, and the runtime-version rule",
     "doneWhen": "You have rolled back a bad update inside five minutes, on purpose",
     "avoid": [
      "Shipping native changes through OTA, then crashing older binaries"
     ]
    }
   },
   {
    "id": "r1-9",
    "text": "Crash-free and ANR budgets wired to alerts; own the number, not just the dashboard",
    "hours": 6,
    "time": "6h",
    "track": "Rs 30-40L",
    "reason": "Owning a reliability number is what gets a mobile engineer into platform and staff conversations",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Own one reliability number, like crash-free sessions or ANR rate, and report it weekly",
      "Store consoles publish bad-behaviour thresholds. Look up the current ones and stay under them",
      "Alert on regression per release, not just an absolute level"
     ],
     "steps": [
      "Wire a crash and ANR source into a dashboard",
      "Set an alert on per-release regression",
      "Write a short post-mortem template and use it once"
     ],
     "use": [
      "<a href=\"https://developer.android.com/topic/performance/vitals\" target=\"_blank\" rel=\"noopener\">Android vitals</a>",
      "<a href=\"https://docs.sentry.io/platforms/react-native/\" target=\"_blank\" rel=\"noopener\">Sentry for React Native</a>",
      "<a href=\"https://firebase.google.com/docs/crashlytics\" target=\"_blank\" rel=\"noopener\">Firebase Crashlytics</a>"
     ],
     "deliverable": "A dashboard, an alert, and one post-mortem",
     "doneWhen": "A bad release would page you within an hour",
     "avoid": [
      "Watching dashboards without an owner or a threshold"
     ]
    }
   },
   {
    "id": "r1-12",
    "text": "End-to-end tests for the three flows that lose money when broken, running in CI on every pull request",
    "hours": 8,
    "time": "8h",
    "track": "Rs 30-40L",
    "reason": "A release train with no automated check on sign-in and payment is a train you are afraid to run",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Test the three flows that lose money when broken (sign-in, checkout, payment). Do not try to test everything",
      "Run against a release build on an emulator or simulator in CI",
      "Quarantine a flaky test the same day, or the suite loses trust"
     ],
     "steps": [
      "Write three end-to-end flows",
      "Run them in CI on every pull request",
      "Track flakiness and fix or quarantine anything over your threshold"
     ],
     "use": [
      "<a href=\"https://maestro.mobile.dev/\" target=\"_blank\" rel=\"noopener\">Maestro — simple YAML flows</a>",
      "<a href=\"https://wix.github.io/Detox/\" target=\"_blank\" rel=\"noopener\">Detox — gray-box end-to-end testing for React Native</a>"
     ],
     "deliverable": "Three passing flows running in CI",
     "doneWhen": "A broken checkout makes a pull request fail",
     "avoid": [
      "A large brittle suite that everyone learns to ignore"
     ]
    }
   }
  ]
 },
 {
  "id": "ai-layer",
  "title": "After the move: AI layer",
  "why": "Worth money only on top of the backend milestone.",
  "doThis": "Search over your own data, tools a model can call, prompt design, and defence against injection.",
  "doneWhen": "You can show with numbers that your AI feature is correct and safe.",
  "tasks": [
   {
    "id": "r2-1",
    "text": "Embeddings and vector search: pgvector on the database you already run, chunking strategy",
    "hours": 8,
    "time": "8h",
    "track": "Rs 35-50L",
    "reason": "Running vectors in Postgres instead of a fourth service is the choice that reads as senior",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Chunking and metadata usually matter more than which vector database you choose. Start with pgvector in the Postgres you already run",
      "Combining keyword and vector search often beats either alone. Test it on your own data",
      "Store source ids so every answer can cite where it came from"
     ],
     "steps": [
      "Embed a real corpus (your own docs or product data) into pgvector",
      "Compare two chunking strategies on the same questions",
      "Add keyword search and compare again"
     ],
     "use": [
      "<a href=\"https://github.com/pgvector/pgvector\" target=\"_blank\" rel=\"noopener\">pgvector</a>",
      "<a href=\"https://www.anthropic.com/news/contextual-retrieval\" target=\"_blank\" rel=\"noopener\">Anthropic — Contextual Retrieval</a>",
      "<a href=\"https://eugeneyan.com/writing/llm-patterns/\" target=\"_blank\" rel=\"noopener\">Eugene Yan — patterns for building LLM systems</a>",
      "<a href=\"https://www.postgresql.org/docs/current/textsearch.html\" target=\"_blank\" rel=\"noopener\">PostgreSQL full-text search</a>"
     ],
     "deliverable": "A retrieval endpoint over real data with citations",
     "doneWhen": "You can show which chunking choice retrieved better, using numbers",
     "avoid": [
      "Choosing tools before you have any measure of retrieval quality"
     ]
    }
   },
   {
    "id": "r2-2",
    "text": "Evaluation: a small labelled set, a retrieval metric, and a regression check in CI",
    "hours": 8,
    "time": "8h",
    "track": "Rs 35-50L",
    "reason": "Everyone has a RAG demo. Almost nobody has a number. The number is the entire premium.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Start with error analysis: read 50-100 real traces before choosing any metric",
      "Prefer binary pass/fail checks over 1-10 scores. Generic metrics like ROUGE or cosine similarity rarely tell you whether your app works",
      "Score retrieval separately from generation, for example recall@k on labelled queries"
     ],
     "steps": [
      "Collect or write 50 realistic queries with the right source for each",
      "Read the failures by hand and group them",
      "Turn the top failure modes into automated checks and run them in CI"
     ],
     "use": [
      "<a href=\"https://hamel.dev/blog/posts/evals/\" target=\"_blank\" rel=\"noopener\">Hamel Husain — Your AI Product Needs Evals</a>",
      "<a href=\"https://hamel.dev/blog/posts/evals-faq/\" target=\"_blank\" rel=\"noopener\">Hamel Husain — AI Evals FAQ</a>",
      "<a href=\"https://maven.com/parlance-labs/evals\" target=\"_blank\" rel=\"noopener\">AI Evals for Engineers and PMs (Husain and Shankar) — paid course</a>"
     ],
     "deliverable": "A labelled set, a retrieval metric, and a CI check that fails on regression",
     "doneWhen": "Changing the chunking strategy moves a number you trust",
     "avoid": [
      "Building dashboards of generic scores before reading a single failure"
     ]
    }
   },
   {
    "id": "r2-3",
    "text": "Cost and latency budgets per request: tokens, caching, model choice",
    "hours": 5,
    "time": "5h",
    "track": "Rs 35-50L",
    "reason": "The first question a real company asks about an AI feature is what it costs per user",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Budget tokens and milliseconds per request, and log both",
      "Cache the stable prefix of prompts and put variable content last",
      "Use the cheapest model that passes your evals, not the largest one"
     ],
     "steps": [
      "Log tokens, latency and cost per request",
      "Enable prompt caching and measure the change",
      "Route simple requests to a cheaper model and check your evals still pass"
     ],
     "use": [
      "<a href=\"https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching\" target=\"_blank\" rel=\"noopener\">Anthropic — prompt caching</a>",
      "<a href=\"https://eugeneyan.com/writing/llm-patterns/\" target=\"_blank\" rel=\"noopener\">Eugene Yan — patterns for building LLM systems</a>"
     ],
     "deliverable": "A cost and latency report per endpoint, with one optimisation applied",
     "doneWhen": "You can state the cost per thousand requests and what you did to lower it",
     "avoid": [
      "Optimising cost before you have evals that tell you quality held"
     ]
    }
   },
   {
    "id": "r2-4",
    "text": "Tool use and structured output against your own service — validation, retries, partial failure",
    "hours": 8,
    "time": "8h",
    "track": "Rs 35-50L",
    "reason": "This is the same idempotency and error-contract thinking as Rung 1, applied one layer up",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Start with a fixed workflow before an agent where the model chooses the steps. That is Anthropic's own guidance",
      "Validate tool arguments with a schema and return errors the model can act on",
      "Make tools idempotent and cap the number of iterations"
     ],
     "steps": [
      "Expose two tools from your own service with typed schemas",
      "Handle a malformed argument, a timeout and a partial failure",
      "Cap loops and log every tool call"
     ],
     "use": [
      "<a href=\"https://www.anthropic.com/engineering/building-effective-agents\" target=\"_blank\" rel=\"noopener\">Anthropic — Building effective agents</a>",
      "<a href=\"https://docs.anthropic.com/en/docs/build-with-claude/tool-use\" target=\"_blank\" rel=\"noopener\">Anthropic — tool use</a>",
      "<a href=\"https://zod.dev/\" target=\"_blank\" rel=\"noopener\">Zod — schema validation</a>"
     ],
     "deliverable": "An agent calling two real tools, with tested failure handling",
     "doneWhen": "A malformed model output never reaches your database",
     "avoid": [
      "Building an autonomous agent where a three-step workflow would do"
     ]
    }
   },
   {
    "id": "r2-5",
    "text": "Guardrails and constraint design: prompt injection from user content, output schema enforcement, scope limits on what the model is allowed to decide",
    "hours": 6,
    "time": "6h",
    "track": "Rs 35-50L",
    "reason": "You already treat job postings as untrusted data. Same discipline — and most teams have not learned it yet. Constraint design is what separates a demo from a production feature.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Treat model output as untrusted input, and treat retrieved and user text as untrusted too",
      "Give tools least privilege and require human confirmation for irreversible actions",
      "Decide in writing what the model must never decide"
     ],
     "steps": [
      "List every place untrusted text reaches the model",
      "Add output schema enforcement and a scope limit per tool",
      "Try five injection attempts against your own feature and record the results"
     ],
     "use": [
      "<a href=\"https://genai.owasp.org/llm-top-10/\" target=\"_blank\" rel=\"noopener\">OWASP Top 10 for LLM Applications</a>",
      "<a href=\"https://simonwillison.net/series/prompt-injection/\" target=\"_blank\" rel=\"noopener\">Simon Willison — prompt injection series</a>"
     ],
     "deliverable": "A threat list and the guardrails that answer each item",
     "doneWhen": "Your five attacks fail, and you can explain why",
     "avoid": [
      "Relying on the prompt to enforce a rule that code should enforce"
     ]
    }
   },
   {
    "id": "r2-8",
    "text": "Core prompt patterns: system prompt design, few-shot examples, chain-of-thought, role prompting — applied to your Zonesso domain",
    "hours": 6,
    "time": "6h",
    "track": "Rs 35-50L",
    "reason": "Prompt engineering is now tested directly in interviews at AI-forward companies, not just assumed as background knowledge",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Be specific about role, task, format and constraints. Show examples where format matters",
      "Version prompts like code and review them like code",
      "Change one thing at a time and compare on your eval set"
     ],
     "steps": [
      "Write the system prompt for one task in your domain",
      "Add few-shot examples and compare results on the same inputs",
      "Store prompts in the repo with a change log"
     ],
     "use": [
      "<a href=\"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview\" target=\"_blank\" rel=\"noopener\">Anthropic — prompt engineering guide</a>",
      "<a href=\"https://www.promptingguide.ai/\" target=\"_blank\" rel=\"noopener\">Prompt Engineering Guide (DAIR.AI)</a>"
     ],
     "deliverable": "A versioned prompt suite for one feature, with example inputs and outputs",
     "doneWhen": "You can show a prompt change that measurably improved results",
     "avoid": [
      "Editing prompts by feel and judging by one lucky output"
     ]
    }
   },
   {
    "id": "r2-9",
    "text": "Constraint prompting: bounding what the model is allowed to decide, output schema enforcement with Zod/JSON Schema, regression tests for prompt drift",
    "hours": 5,
    "time": "5h",
    "track": "Rs 35-50L",
    "reason": "Anyone can write a prompt that works once. Constraint design is what makes it work in production across 10,000 inputs.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Enforce output structure with a schema and validate it in code",
      "Write a regression test set so a prompt change cannot silently break old behaviour",
      "Bound what the model may decide and enforce it outside the prompt"
     ],
     "steps": [
      "Define an output schema with Zod or JSON Schema",
      "Reject and retry invalid outputs, with a retry cap",
      "Add a regression test set that runs on every prompt change"
     ],
     "use": [
      "<a href=\"https://zod.dev/\" target=\"_blank\" rel=\"noopener\">Zod</a>",
      "<a href=\"https://json-schema.org/\" target=\"_blank\" rel=\"noopener\">JSON Schema</a>",
      "<a href=\"https://hamel.dev/blog/posts/evals/\" target=\"_blank\" rel=\"noopener\">Hamel Husain — evals for catching drift</a>"
     ],
     "deliverable": "A schema-validated output path and a regression suite",
     "doneWhen": "Changing a prompt runs the suite and reports what moved",
     "avoid": [
      "Retrying forever on invalid output"
     ]
    }
   },
   {
    "id": "r2-10",
    "text": "Prompt injection taxonomy: direct injection, indirect injection via untrusted data, stored injection — and the mitigations for each",
    "hours": 6,
    "time": "6h",
    "track": "Rs 35-50L",
    "reason": "This is a named, testable attack class. Senior AI engineers are expected to know it cold, not discover it in a production incident.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Know the three families: direct injection, indirect injection via retrieved or user-supplied content, and stored injection",
      "No prompt fully stops injection. Reduce what a compromised model can do",
      "Log and review model inputs and outputs for the sensitive paths"
     ],
     "steps": [
      "Write one working example of each injection family against your own feature",
      "Add the mitigation for each",
      "Re-run the attacks and record which ones still work"
     ],
     "use": [
      "<a href=\"https://genai.owasp.org/llm-top-10/\" target=\"_blank\" rel=\"noopener\">OWASP Top 10 for LLM Applications</a>",
      "<a href=\"https://simonwillison.net/series/prompt-injection/\" target=\"_blank\" rel=\"noopener\">Simon Willison — prompt injection series</a>",
      "<a href=\"https://atlas.mitre.org/\" target=\"_blank\" rel=\"noopener\">MITRE ATLAS — adversarial threat landscape for AI systems</a>"
     ],
     "deliverable": "A red-team note: attacks tried, results, mitigations",
     "doneWhen": "You can describe each attack family and show your defence against it",
     "avoid": [
      "Believing a clever system prompt is a security boundary"
     ]
    }
   },
   {
    "id": "r2-11",
    "text": "Hallucination detection in production: confidence grounding, citation checks, output validation patterns that do not rely on the model to self-report",
    "hours": 5,
    "time": "5h",
    "track": "Rs 35-50L",
    "reason": "AI produces non-deterministic code — your service must verify its output, not trust it. This is the correctness problem of the AI era.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Do not ask the model whether it is confident. Verify against sources you control",
      "Require citations and check that the cited passage exists and supports the claim",
      "Design a fail-safe answer for \"I cannot support that from the sources\""
     ],
     "steps": [
      "Make answers cite chunk ids and verify the ids exist",
      "Add a support check that compares the claim to the cited text",
      "Add a refusal path and test it on questions outside the corpus"
     ],
     "use": [
      "<a href=\"https://hamel.dev/blog/posts/evals-faq/\" target=\"_blank\" rel=\"noopener\">Hamel Husain — evals FAQ</a>",
      "<a href=\"https://eugeneyan.com/writing/llm-patterns/\" target=\"_blank\" rel=\"noopener\">Eugene Yan — guardrails and evals patterns</a>"
     ],
     "deliverable": "A verified-citation answer path with a tested refusal",
     "doneWhen": "An out-of-corpus question gets a refusal, not an invention",
     "avoid": [
      "Trusting model self-reported confidence"
     ]
    }
   }
  ]
 },
 {
  "id": "show-work",
  "title": "After the move: show your work",
  "why": "Write-ups and talks raise your rate.",
  "doThis": "Write up your best projects with numbers and open-source one tool.",
  "doneWhen": "A stranger can read your write-up and know what you built and decided.",
  "tasks": [
   {
    "id": "r3-1",
    "text": "Name the intersection: Gulf-market mobile commerce — multi-rail payments, Arabic/RTL, RN modernization",
    "hours": 4,
    "time": "4h",
    "track": "2-3x rate",
    "reason": "Generic full-stack competes with a million people. That intersection has maybe a few hundred, and buyers with money.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "A niche is a buyer's problem in a region, not your tech stack. \"Gulf-market mobile commerce\" names a buyer, a place and a pain",
      "Test it with ten real conversations before you build anything",
      "Say it in one sentence a stranger can repeat"
     ],
     "steps": [
      "Write the one-sentence positioning",
      "Have ten conversations with people who would buy it, and record their words",
      "Adjust the sentence to their words"
     ],
     "use": [
      "<a href=\"https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/\" target=\"_blank\" rel=\"noopener\">Patrick McKenzie — Don't Call Yourself A Programmer</a>",
      "Book: The Business of Expertise (David C. Baker)"
     ],
     "deliverable": "A positioning sentence and notes from ten conversations",
     "doneWhen": "Three people repeat your positioning back correctly without prompting",
     "avoid": [
      "Picking a niche from your tech stack instead of from a buyer's problem"
     ]
    }
   },
   {
    "id": "r3-2",
    "text": "Three written case studies with numbers: the Zonesso migration, the five payment rails, three apps in two months",
    "hours": 6,
    "time": "6h",
    "track": "2-3x rate",
    "reason": "You already did the work. It is invisible because it was never written down.",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Every case study needs numbers: before and after, users, revenue, time saved",
      "Structure: situation, constraint, decision, result, what you would do differently",
      "Include what went wrong. It is the most credible part"
     ],
     "steps": [
      "Write the Zonesso migration as one page in that structure",
      "Add two more, then cut every sentence with no number or decision",
      "Publish them where you can link them"
     ],
     "use": [
      "<a href=\"https://jvns.ca/blog/brag-documents/\" target=\"_blank\" rel=\"noopener\">Julia Evans — brag documents</a>",
      "<a href=\"https://shopify.engineering/\" target=\"_blank\" rel=\"noopener\">Shopify Engineering — examples of migration write-ups</a>"
     ],
     "deliverable": "Three one-page case studies with numbers",
     "doneWhen": "Each case study has at least one number and one decision you can defend",
     "avoid": [
      "Describing technology instead of outcomes"
     ]
    }
   },
   {
    "id": "r3-3",
    "text": "A rate card for whole-system delivery, not hourly React Native hands",
    "hours": 3,
    "time": "3h",
    "track": "2-3x rate",
    "reason": "One throat to choke — API, database, deploy, CI — is a different market with different prices",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Price the outcome and the risk you take on, not hours",
      "A rate card is a floor and a signal. Do not publish it as a discount menu",
      "Never reveal your current salary or your floor first"
     ],
     "steps": [
      "Estimate what a delivered system is worth to the buyer",
      "Write three packages with fixed scope and price",
      "Read the negotiation essay and rehearse the scripts aloud"
     ],
     "use": [
      "<a href=\"https://www.kalzumeus.com/2012/01/23/salary-negotiation/\" target=\"_blank\" rel=\"noopener\">Patrick McKenzie — Salary Negotiation</a>",
      "Book: Double Your Freelancing Rate (Brennan Dunn)"
     ],
     "deliverable": "A rate card with three fixed-scope packages",
     "doneWhen": "You can state each price and its scope without apologising",
     "avoid": [
      "Anchoring on your hourly salary equivalent"
     ]
    }
   },
   {
    "id": "r3-4",
    "text": "Write the RN 0.75 to 0.81 migration up properly: what broke, what you cut, the real numbers",
    "hours": 8,
    "time": "8h",
    "track": "2-3x rate",
    "reason": "Thousands of teams face this exact migration and there is almost nothing honest written about it",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Lead with the decision and the number, not the chronology",
      "Include what broke and what you cut. Readers trust write-ups that show failure",
      "Give the reader something reusable: a checklist, a script, a table"
     ],
     "steps": [
      "Outline: context, what broke, what you cut, numbers, checklist",
      "Draft in one sitting, then trim",
      "Publish, then share in two React Native communities"
     ],
     "use": [
      "<a href=\"https://shopify.engineering/\" target=\"_blank\" rel=\"noopener\">Shopify Engineering — models of migration write-ups</a>",
      "<a href=\"https://www.callstack.com/blog\" target=\"_blank\" rel=\"noopener\">Callstack blog — models of React Native technical writing</a>"
     ],
     "deliverable": "A published migration write-up with real numbers",
     "doneWhen": "Someone you do not know reacts to it or uses the checklist",
     "avoid": [
      "Writing a diary of what you did instead of what a reader should do"
     ]
    }
   },
   {
    "id": "r3-5",
    "text": "Open-source one genuinely useful thing from your own work — a payments wrapper, an RTL helper, a Detox harness",
    "hours": 10,
    "time": "10h",
    "track": "2-3x rate",
    "reason": "A repo people actually use is worth more inbound than a hundred applications",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Small, sharp and well documented beats large and half-finished",
      "A good README, an example and a quick start are the product",
      "Extract from real work, so it solves a problem someone else really has"
     ],
     "steps": [
      "Pick the smallest useful thing from your own work",
      "Write the README and an example app first",
      "Publish, then answer the first five issues promptly"
     ],
     "use": [
      "<a href=\"https://opensource.guide/\" target=\"_blank\" rel=\"noopener\">Open Source Guides</a>",
      "<a href=\"https://callstack.github.io/react-native-builder-bob/\" target=\"_blank\" rel=\"noopener\">react-native-builder-bob — scaffold a library</a>"
     ],
     "deliverable": "A published package with README, example and a first release",
     "doneWhen": "Someone besides you has installed it and opened an issue or a pull request",
     "avoid": [
      "Publishing with no README and expecting adoption"
     ]
    }
   },
   {
    "id": "r3-6",
    "text": "One conference or meetup talk from the same material",
    "hours": 4,
    "time": "4h",
    "track": "2-3x rate",
    "reason": "Speaking converts a specialist into a known specialist, which is what changes the rate",
    "how": {
     "goal": "",
     "why": "",
     "matters": [
      "Start at a meetup, then use the recording to submit to a conference",
      "Pick one story with one takeaway. Show a measured before and after",
      "Rehearse aloud, out loud, at least three times"
     ],
     "steps": [
      "Turn the migration write-up into a 20-minute outline",
      "Give it at a local meetup",
      "Submit to a conference call for proposals with the recording attached"
     ],
     "use": [
      "<a href=\"https://www.react-native.eu/\" target=\"_blank\" rel=\"noopener\">React Native EU</a>",
      "<a href=\"https://appjs.co/\" target=\"_blank\" rel=\"noopener\">App.js Conf</a>"
     ],
     "deliverable": "A delivered talk and a submitted proposal",
     "doneWhen": "A recording of you giving the talk exists",
     "avoid": [
      "A talk that lists what you did instead of teaching one thing"
     ]
    }
   }
  ]
 }
];

export const SIDE = [
 {
  "id": "habit",
  "title": "Standing habit while you build",
  "why": "3 targeted applications a week, and reply to every recruiter within 4 hours. Stop cold applying once you have about 33 sent.",
  "tasks": [
   {
    "id": "t1-1",
    "text": "3 retargeted applications (Gulf and India-remote only); reply to every recruiter within 4 hours",
    "hours": 2,
    "time": "2h",
    "track": "Track A",
    "reason": "Response speed is the cheapest advantage in the search — and it is free, unlike volume",
    "how": {
     "goal": "3 retargeted applications (Gulf and India-remote only), and every recruiter gets a reply within 4 hours.",
     "why": "",
     "matters": [],
     "steps": [
      "Read the JD and write down its top 5 requirements (5 min).",
      "Paste the link on the /interview page (Paste a link) or run career-ops on it. Skip anything that scores below B, because a low-fit application burns 45 minutes for nothing.",
      "Tailor the top third of the CV to those 5 requirements, using only claims you can defend for 10 minutes (15 min).",
      "Write a 3-sentence note: why them, one proof point, the ask (10 min).",
      "Find one person at the company (hiring manager or engineer) and send a short message (10 min).",
      "Log it in the tracker the same day.",
      "Turn on notifications for LinkedIn and email from recruiters. Keep a reply template ready: two time slots, notice period, target band."
     ],
     "use": [
      "/interview → Paste a link"
     ],
     "deliverable": "",
     "doneWhen": "3 sent, all in the Gulf or India-remote groups, and no recruiter message waited more than 4 hours.",
     "avoid": []
    }
   },
   {
    "id": "t1-4",
    "text": "3 retargeted applications; screening calls land here — cumulative ~27",
    "hours": 3,
    "time": "3h",
    "track": "Track A",
    "reason": "Screening calls are free calibration on whether the new framing lands",
    "how": {
     "goal": "3 more retargeted applications (~27 total), plus notes from every screening call.",
     "why": "",
     "matters": [],
     "steps": [
      "Read the JD and write down its top 5 requirements (5 min).",
      "Paste the link on the /interview page (Paste a link) or run career-ops on it. Skip anything that scores below B, because a low-fit application burns 45 minutes for nothing.",
      "Tailor the top third of the CV to those 5 requirements, using only claims you can defend for 10 minutes (15 min).",
      "Write a 3-sentence note: why them, one proof point, the ask (10 min).",
      "Find one person at the company (hiring manager or engineer) and send a short message (10 min).",
      "Log it in the tracker the same day.",
      "Before each screen: 60-second pitch, band, notice period, and a one-line \"why I'm moving\".",
      "After each call, write 3 lines: what they asked, what landed, what didn't."
     ],
     "use": [
      "/interview → From pipeline → Generate prep brief"
     ],
     "deliverable": "",
     "doneWhen": "~27 sent total, and every screen has notes.",
     "avoid": []
    }
   },
   {
    "id": "t1-7",
    "text": "3 retargeted applications — cumulative ~30",
    "hours": 3,
    "time": "3h",
    "track": "Track A",
    "reason": "Steady four a week beats a heroic week followed by three dead ones",
    "how": {
     "goal": "3 more retargeted applications (~30 total).",
     "why": "",
     "matters": [],
     "steps": [
      "Read the JD and write down its top 5 requirements (5 min).",
      "Paste the link on the /interview page (Paste a link) or run career-ops on it. Skip anything that scores below B, because a low-fit application burns 45 minutes for nothing.",
      "Tailor the top third of the CV to those 5 requirements, using only claims you can defend for 10 minutes (15 min).",
      "Write a 3-sentence note: why them, one proof point, the ask (10 min).",
      "Find one person at the company (hiring manager or engineer) and send a short message (10 min).",
      "Log it in the tracker the same day."
     ],
     "use": [
      "/interview → Paste a link"
     ],
     "deliverable": "",
     "doneWhen": "~30 sent total, all logged.",
     "avoid": []
    }
   },
   {
    "id": "t1-10",
    "text": "3 applications (~33 total, then cold applying stops), then per-company prep for every interview",
    "hours": 4,
    "time": "4h",
    "track": "Track A",
    "reason": "The system-design format is what gets graded — most candidates lose on structure, not knowledge",
    "how": {
     "goal": "The last 3 cold applications (~33 total), plus a prep plan for every interview on the calendar. After this: referrals and replies only.",
     "why": "",
     "matters": [],
     "steps": [
      "Read the JD and write down its top 5 requirements (5 min).",
      "Paste the link on the /interview page (Paste a link) or run career-ops on it. Skip anything that scores below B, because a low-fit application burns 45 minutes for nothing.",
      "Tailor the top third of the CV to those 5 requirements, using only claims you can defend for 10 minutes (15 min).",
      "Write a 3-sentence note: why them, one proof point, the ask (10 min).",
      "Find one person at the company (hiring manager or engineer) and send a short message (10 min).",
      "Log it in the tracker the same day.",
      "For each scheduled interview: /interview → From pipeline → Build prep plan, then Save.",
      "System design format, timed at 45 min: requirements (5 min) → API (5) → data model (10) → scale: bottlenecks, cache, queue (15) → trade-offs (5). Practise it once on the company's own product."
     ],
     "use": [
      "/interview → From pipeline",
      "<a href=\"https://github.com/donnemartin/system-design-primer\" target=\"_blank\" rel=\"noopener\">System Design Primer</a>"
     ],
     "deliverable": "",
     "doneWhen": "Every scheduled interview has a saved prep plan in interview-prep/.",
     "avoid": []
    }
   }
  ]
 },
 {
  "id": "dsa",
  "title": "Only if asked: DSA",
  "why": "Only 1 of 39 roles your pipeline evaluated asked for DSA, so this is not a gate. Do it if a target company says so.",
  "tasks": [
   {
    "id": "t1-2",
    "text": "DSA: arrays and hashmaps, 45 min/day — patterns, not volume",
    "hours": 2,
    "time": "2h",
    "track": "Track A",
    "reason": "About 30 mediums total, then stop. Mobile loops test building features more than LeetCode.",
    "how": {
     "goal": "Recognise and solve hashmap/array problems in about 25 minutes each.",
     "why": "",
     "matters": [],
     "steps": [
      "Scope: 2h this week (the live interview comes first), finish the rest next week. The 9 problems in the <a href=\"https://neetcode.io/practice\" target=\"_blank\" rel=\"noopener\">NeetCode 150</a> \"Arrays & Hashing\" section, then stop. About 30 problems is the whole DSA budget.",
      "Contains Duplicate, Valid Anagram, Two Sum, Group Anagrams, Top K Frequent Elements, Encode and Decode Strings, Product of Array Except Self, Valid Sudoku, Longest Consecutive Sequence.",
      "Timebox 25 min per problem. If stuck, read the solution, then redo it from scratch the next day without looking.",
      "Write in TypeScript, the language you'll interview in, and state the time/space complexity out loud."
     ],
     "use": [
      "<a href=\"https://neetcode.io/practice\" target=\"_blank\" rel=\"noopener\">NeetCode 150</a>",
      "<a href=\"https://www.techinterviewhandbook.org/grind75/\" target=\"_blank\" rel=\"noopener\">Tech Interview Handbook: Grind 75</a>"
     ],
     "deliverable": "",
     "doneWhen": "You can solve an unseen easy/medium hashmap problem in ~25 minutes and explain its complexity.",
     "avoid": []
    }
   },
   {
    "id": "t1-5",
    "text": "DSA: two pointers and sliding window",
    "hours": 4,
    "time": "4h",
    "track": "Track A",
    "reason": "Two patterns a week keeps this from eating the search",
    "how": {
     "goal": "Two patterns: two pointers and sliding window.",
     "why": "",
     "matters": [],
     "steps": [
      "From <a href=\"https://neetcode.io/practice\" target=\"_blank\" rel=\"noopener\">NeetCode 150</a>, Two Pointers: Valid Palindrome, Two Sum II, 3Sum, Container With Most Water. Leave Trapping Rain Water for later.",
      "Sliding Window: Best Time to Buy and Sell Stock, Longest Substring Without Repeating Characters, Longest Repeating Character Replacement, Permutation in String.",
      "8 problems, 25 min each, then stop.",
      "Learn the trigger: \"sorted array / find a pair\" → two pointers, \"longest or shortest contiguous substring\" → sliding window."
     ],
     "use": [
      "<a href=\"https://neetcode.io/practice\" target=\"_blank\" rel=\"noopener\">NeetCode 150</a>"
     ],
     "deliverable": "",
     "doneWhen": "You can name the pattern within 2 minutes of reading a new problem.",
     "avoid": []
    }
   }
  ]
 }
];

export const EVIDENCE = "Why this order: the system design priority rests on one interview you described, and the DSA call on 1 of 39 evaluated job descriptions (keywords extracted by a model, only 7 JDs saved verbatim). Both are thin. Re-check against the next 10 job descriptions you read.";
