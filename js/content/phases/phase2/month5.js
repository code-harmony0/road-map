export const MONTHS = [
  {
    "id": "m5",
    "num": "MONTH 05",
    "title": "Cross-Platform Architecture",
    "theme": "RN Web, Next.js, Universal UI",
    "color": "#10b981",
    "boss": {
      "id": "boss-m5",
      "name": "The Cross-Platform Architect",
      "challenge": "Lead 1 cross-team initiative and deliver with measurable impact",
      "reward": 3000,
      "resume": "Led cross-platform initiative, achieving 80% code reuse across iOS, Android, and Web with Next.js SSR",
      "successCriteria": [
        "Next.js web app running from shared React Native codebase",
        "80%+ code reuse measured across all three platforms",
        "SSR working for SEO-critical pages (product pages, landing pages)",
        "Universal UI components rendering correctly on all platforms",
        "CI/CD pipeline builds all three platforms from single repo",
        "Performance: web Lighthouse score >90, mobile 60 FPS maintained"
      ],
      "howToComplete": [
        "Set up Next.js with React Native Web for code sharing",
        "Extract shared components, hooks, and state management",
        "Implement platform-specific adapters for navigation, storage, and permissions",
        "Build SSR pages for SEO with Next.js data fetching",
        "Set up unified CI/CD for iOS, Android, and Web builds",
        "Measure and optimize code reuse percentage and performance"
      ],
      "deliverables": [
        "Live web app at custom domain",
        "Code reuse measurement report",
        "SSR implementation with data fetching",
        "Universal component library",
        "Unified CI/CD config",
        "Lighthouse performance report"
      ],
      "passFail": {
        "pass": "Web app live + 80% reuse + SSR working + Lighthouse >90 + mobile 60 FPS",
        "fail": "Code reuse <60% or web app not deployed or mobile performance degraded"
      }
    },
    "tasks": [
      {
        "id": "m5-w19",
        "day": "Week 19",
        "time": "31.25h",
        "depth": "Deep",
        "xp": 500,
        "text": "Set up Next.js + React Native Web with shared monorepo",
        "reason": "Foundation for code reuse"
      },
      {
        "id": "m5-w20",
        "day": "Week 20",
        "time": "31.25h",
        "depth": "Deep",
        "xp": 500,
        "text": "Extract shared layer: components, hooks, state, API client",
        "reason": "80% reuse target"
      },
      {
        "id": "m5-w21",
        "day": "Week 21",
        "time": "31.25h",
        "depth": "Deep",
        "xp": 500,
        "text": "Platform adapters: navigation, storage, permissions, gestures",
        "reason": "Platform differences handled"
      },
      {
        "id": "m5-w22",
        "day": "Week 22",
        "time": "31.25h",
        "depth": "Deep",
        "xp": 500,
        "text": "SSR, SEO, deployment, and performance optimization",
        "reason": "Production web app"
      }
    ]
  }
];

export const DETAILS = {
  "m5-w19": {
    "objective": "Create a monorepo with Next.js web app and React Native mobile app sharing a single codebase",
    "why": "Cross-platform development is the future of mobile teams. Companies want one team shipping to iOS, Android, and Web. Engineers who can architect shared codebases are scarce and paid 20-30% above single-platform developers. This is your path to $200K+ as a mobile systems architect.",
    "steps": [
      "Choose monorepo tool: Turborepo (Vercel, fast, great caching) or Nx (enterprise, powerful) or pnpm workspaces (simple).",
      "Create repo structure: `apps/web` (Next.js), `apps/mobile` (React Native), `packages/ui` (shared components), `packages/shared` (hooks, utils, API client).",
      "Set up Next.js 15: `npx create-next-app@latest apps/web --typescript --tailwind --eslint --app`.",
      "Set up React Native 0.76+: `npx react-native init apps/mobile --template react-native-template-typescript`.",
      "Configure React Native Web: install `react-native-web` in web app, alias React Native imports to web equivalents.",
      "Configure Metro for monorepo: `watchFolders` pointing to `packages/`, `nodeModulesPaths` for shared deps.",
      "Configure TypeScript: shared `tsconfig.base.json`, extends in each app/package.",
      "Set up shared package publishing: use `workspace:*` protocol, no npm publish needed.",
      "Test: import a shared button component in both web and mobile, verify it renders.",
      "Document: `MONOREPO_SETUP.md` with architecture, commands, troubleshooting."
    ],
    "tools": [
      "Turborepo or Nx",
      "Next.js 15",
      "React Native 0.76+",
      "React Native Web",
      "pnpm workspaces",
      "TypeScript"
    ],
    "deliverable": "Working monorepo with Next.js web and React Native mobile importing shared packages",
    "definitionOfDone": "Both apps build and run, shared component renders on both platforms, no duplicate code for common UI",
    "commonMistakes": [
      "Using different React versions in web and mobile — monorepo requires single React version, use resolutions/overrides",
      "Not configuring Metro watchFolders — changes in packages won't trigger mobile reload",
      "Skipping TypeScript config sharing — type errors will cascade between packages"
    ],
    "resumeLine": "Architected cross-platform monorepo with Next.js and React Native, enabling shared component library across web and mobile",
    "connectsTo": "m5-w20 (shared layer), m5-w22 (SSR), Boss Battle (80% reuse)"
  },
  "m5-w20": {
    "objective": "Extract shared business logic, hooks, state management, and API client into platform-agnostic packages",
    "why": "Code reuse is the metric that matters. 80% reuse means you ship 3x faster with 1/3 the bugs. This is what platform engineering teams measure. Proving you can hit 80% reuse separates architects from developers.",
    "steps": [
      "Audit mobile app: list all hooks, state stores, API calls, utilities.",
      "Categorize by platform dependency: pure JS (shareable) vs native-dependent (platform-specific).",
      "Extract `packages/shared/hooks`: useAuth, useSearch, useCart, useUser — all platform-agnostic.",
      "Extract `packages/shared/stores`: Jotai/Zustand stores for global state — works in RN and Next.js.",
      "Extract `packages/shared/api`: API client with React Query hooks — same fetch logic, different cache storage.",
      "Extract `packages/shared/utils`: date formatting, currency, validation, analytics tracking.",
      "Create platform-specific adapters: `packages/shared/storage` with `asyncStorage.native.ts` and `asyncStorage.web.ts`.",
      "Use barrel exports: `packages/shared/index.ts` exports everything for clean imports.",
      "Measure reuse: `cloc` or custom script counting lines in shared vs platform-specific code.",
      "Target: shared code / total code >80%. If not, refactor more platform-specific code to shared.",
      "Document: `CODE_REUSE.md` with measurement methodology, current percentage, improvement plan."
    ],
    "tools": [
      "cloc (line counter)",
      "Jotai or Zustand",
      "React Query",
      "TypeScript path aliases",
      "Turborepo pipeline"
    ],
    "deliverable": "Shared packages with measured code reuse report showing 80%+",
    "definitionOfDone": "4+ shared packages extracted, reuse percentage calculated and documented, both apps use shared packages exclusively for business logic",
    "commonMistakes": [
      "Sharing everything — navigation and camera are platform-specific, do not force abstraction",
      "No measurement — 'we reuse a lot' is weak, '82.3% of code is shared' is strong",
      "Tight coupling — shared packages should not depend on React Native or Next.js specifics"
    ],
    "resumeLine": "Achieved 82% code reuse across iOS, Android, and Web by extracting shared hooks, state management, and API layer into platform-agnostic packages",
    "connectsTo": "m5-w19 (monorepo), m5-w21 (adapters), Boss Battle (reuse target)"
  },
  "m5-w21": {
    "objective": "Build platform adapters for navigation, storage, permissions, and gestures to handle differences between web and mobile",
    "why": "Web and mobile are different platforms. Navigation is Next.js Router vs React Navigation. Storage is localStorage vs AsyncStorage. Permissions are browser APIs vs native modules. Adapters let you write platform-agnostic code that calls the right implementation. This is the architecture pattern that makes cross-platform actually work.",
    "steps": [
      "Navigation adapter: create `packages/shared/navigation` with `navigate(path)`, `goBack()`, `getCurrentRoute()`.",
      "Implementation: web uses `next/router`, mobile uses `@react-navigation/native`.",
      "Storage adapter: create `packages/shared/storage` with `getItem(key)`, `setItem(key, value)`, `removeItem(key)`.",
      "Implementation: web uses `localStorage`, mobile uses `@react-native-async-storage/async-storage`.",
      "Permissions adapter: create `packages/shared/permissions` with `requestCamera()`, `requestLocation()`, `checkPermission(type)`.",
      "Implementation: web uses browser Permissions API, mobile uses `react-native-permissions`.",
      "Gestures adapter: create `packages/shared/gestures` with `useSwipe()`, `usePinch()`, `useTap()`.",
      "Implementation: web uses native mouse/touch events, mobile uses `react-native-gesture-handler`.",
      "Platform detection: use `Platform.OS` for native, `typeof window` for web, or create `isWeb`, `isNative` flags.",
      "Type safety: each adapter exports a TypeScript interface, web and mobile implementations satisfy it.",
      "Test: write unit tests for each adapter, mock platform-specific APIs, verify interface compliance.",
      "Document: `PLATFORM_ADAPTERS.md` with interface definitions, implementation notes, testing strategy."
    ],
    "tools": [
      "TypeScript interfaces",
      "Next.js Router",
      "React Navigation",
      "AsyncStorage / localStorage",
      "react-native-permissions",
      "react-native-gesture-handler",
      "Jest (for testing adapters)"
    ],
    "deliverable": "4 platform adapters (navigation, storage, permissions, gestures) with tests and documentation",
    "definitionOfDone": "All adapters have TypeScript interfaces, web and mobile implementations, unit tests passing, shared code uses adapters exclusively",
    "commonMistakes": [
      "Platform checks scattered everywhere — centralize in adapters, do not sprinkle `if (Platform.OS)` in components",
      "No interface contracts — without TypeScript interfaces, web and mobile implementations diverge silently",
      "Missing tests — adapters are critical infrastructure, they need unit tests"
    ],
    "resumeLine": "Built platform abstraction layer with TypeScript adapters for navigation, storage, and permissions, enabling seamless cross-platform development",
    "connectsTo": "m5-w20 (shared layer), m5-w22 (SSR), Boss Battle (cross-platform)"
  },
  "m5-w22": {
    "objective": "Implement SSR for SEO, deploy web app to production, and optimize performance for both web and mobile",
    "why": "SSR (Server-Side Rendering) is critical for SEO, social sharing, and first-load performance. Next.js makes this trivial for web, but integrating with your shared React Native codebase requires care. A deployed web app with good Lighthouse scores is proof you can ship production cross-platform products — not just experiments.",
    "steps": [
      "Implement SSR data fetching: use Next.js `getServerSideProps` or App Router `fetch` with React Server Components.",
      "SEO-critical pages: landing page, product listing, product detail, blog posts. Each needs meta tags, Open Graph, structured data.",
      "Dynamic meta tags: `next/head` with title, description, image, URL based on route params.",
      "Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url` for social sharing previews.",
      "Structured data: JSON-LD for products (schema.org/Product), articles (schema.org/Article).",
      "Image optimization: Next.js Image component with lazy loading, responsive sizes, WebP format.",
      "Core Web Vitals: optimize LCP (Largest Contentful Paint) <2.5s, FID (First Input Delay) <100ms, CLS (Cumulative Layout Shift) <0.1.",
      "Lighthouse audit: run in Chrome DevTools, target score >90 for Performance, Accessibility, Best Practices, SEO.",
      "Deploy: Vercel (easiest for Next.js) or AWS Amplify or self-hosted.",
      "Custom domain: configure DNS, SSL certificate, CDN caching.",
      "Verify mobile performance: ensure shared code changes did not degrade React Native app. Run benchmarks.",
      "Document: `WEB_DEPLOYMENT.md` with architecture, SEO strategy, performance results, monitoring."
    ],
    "tools": [
      "Next.js App Router",
      "Vercel",
      "Lighthouse CI",
      "Next.js Image",
      "Google Search Console",
      "React Native Performance tools"
    ],
    "deliverable": "Live web app with SSR + Lighthouse >90 + custom domain + verified mobile performance",
    "definitionOfDone": "Web app deployed at custom domain, Lighthouse score >90, SEO meta tags working, social sharing previews rendering, mobile app still at 60 FPS",
    "commonMistakes": [
      "SSR without hydration mismatch — server-rendered HTML must match client React tree or users see flicker",
      "No image optimization — unoptimized images are the #1 cause of bad Lighthouse scores",
      "Ignoring mobile after web changes — shared code changes can break React Native, always verify both"
    ],
    "resumeLine": "Shipped SSR-enabled web app with 92 Lighthouse score and SEO optimization, maintaining 60 FPS mobile performance through shared codebase architecture",
    "connectsTo": "m5-w19 (monorepo), m5-w21 (adapters), Boss Battle (production web), Month 6 (team leadership)"
  }
};
