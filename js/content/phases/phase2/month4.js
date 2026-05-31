export const MONTHS = [
  {
    "id": "m4",
    "num": "MONTH 04",
    "title": "Platform Engineering",
    "theme": "Design Systems, Perf Eng",
    "color": "#8b5cf6",
    "boss": {
      "id": "boss-m4",
      "name": "The Platform Owner",
      "challenge": "Get on Staff promotion track with manager buy-in and documented milestones",
      "reward": 2500,
      "resume": "Led platform team, improved velocity 40%",
      "successCriteria": [
        "Design system library with 20+ components documented and adopted",
        "Bundle size reduced 30%+ with performance budget enforced",
        "CI/CD pipeline optimized: build time <5min, test time <3min",
        "Developer onboarding guide reduces setup time from 2 days to 2 hours",
        "6-month technical roadmap with OKRs approved by leadership",
        "Bug rate reduced 25% through testing and type safety improvements"
      ],
      "howToComplete": [
        "Build or adopt design system with Storybook/docs",
        "Analyze and optimize bundle size with performance budgets",
        "Profile app startup, scroll, and navigation performance",
        "Streamline CI/CD: parallel jobs, caching, selective testing",
        "Write developer onboarding and debugging guides",
        "Create 6-month roadmap with measurable OKRs",
        "Implement stricter testing and type coverage"
      ],
      "deliverables": [
        "Design system Storybook URL",
        "Performance audit report with before/after",
        "Optimized CI/CD config",
        "Developer onboarding guide",
        "6-month roadmap document",
        "Bug rate trend chart"
      ],
      "passFail": {
        "pass": "Design system adopted + 30% bundle reduction + roadmap approved + bug rate down 25%",
        "fail": "No measurable improvement in velocity or bug rate"
      }
    },
    "tasks": [
      {
        "id": "m4-w14",
        "day": "Week 14",
        "time": "31.25h",
        "depth": "Deep",
        "xp": 500,
        "text": "Design System Leadership",
        "reason": "Consistency"
      },
      {
        "id": "m4-w15",
        "day": "Week 15",
        "time": "31.25h",
        "depth": "Deep",
        "xp": 500,
        "text": "Performance: Bundle analysis, profiling",
        "reason": "Speed"
      },
      {
        "id": "m4-w16",
        "day": "Week 16",
        "time": "31.25h",
        "depth": "Medium",
        "xp": 500,
        "text": "DevEx: CI/CD, debugging guides",
        "reason": "DX multiplier"
      }
    ]
  }
];

export const DETAILS = {
  "m4-w14": {
    "objective": "Build or lead adoption of a design system that ensures UI consistency across the app and reduces design-dev handoff friction",
    "why": "Design systems are the foundation of platform engineering. They reduce bugs from inconsistent UI, speed up feature development, and prove you can think at the team level, not just the feature level. Platform engineers who own design systems are paid $20K-$40K more than feature developers.",
    "steps": [
      "Audit current UI: screenshot every screen, catalog components (buttons, inputs, cards, lists), identify inconsistencies.",
      "Choose approach: build custom (full control) or adopt existing (Tamagui, NativeBase, React Native Paper, Shopify Restyle).",
      "For custom: create `packages/ui` monorepo package with TypeScript, theming, and accessibility.",
      "Core components: Button, Input, Card, ListItem, Avatar, Badge, Modal, Toast, Skeleton.",
      "Theming: light/dark mode, brand colors, spacing scale (4px base), typography scale.",
      "Accessibility: screen reader labels, focus states, color contrast ratios (WCAG AA).",
      "Documentation: Storybook for React Native (or Docusaurus) with usage examples and props tables.",
      "Adoption strategy: migrate 1 screen per week, deprecate old components, track adoption percentage.",
      "Set up Figma plugin or design tokens sync: designers use same colors/spacing as code.",
      "Document: `DESIGN_SYSTEM.md` with philosophy, component API, theming guide, contribution guidelines."
    ],
    "tools": [
      "Tamagui or React Native Paper",
      "Storybook for React Native",
      "Figma (design tokens)",
      "TypeScript",
      "Monorepo (Turborepo or Nx)"
    ],
    "deliverable": "Design system library with 20+ components + Storybook docs + adoption plan",
    "definitionOfDone": "20+ components documented, 3+ screens migrated, Storybook live, team can add new components following guide",
    "commonMistakes": [
      "Building every component from scratch — adopt existing primitives, customize theme",
      "No documentation — a design system nobody can use is just code clutter",
      "Ignoring accessibility — WCAG compliance is legally required in many markets and interview-tested"
    ],
    "resumeLine": "Led design system initiative with 20+ components, reducing UI inconsistency bugs by 40% and speeding feature development 2x",
    "connectsTo": "m4-w15 (performance), m4-w16 (DevEx), Boss Battle (platform ownership)"
  },
  "m4-w15": {
    "objective": "Analyze bundle size, profile runtime performance, and enforce performance budgets to achieve 30%+ reduction",
    "why": "Performance is a feature. Slow apps lose users. In 2026, performance engineering is a specialized skill that commands premium salaries. 'Reduced bundle by 30%' is a concrete, measurable achievement that hiring managers remember.",
    "steps": [
      "Baseline measurement: `npx react-native bundle --platform ios --dev false` → record bundle size.",
      "Analyze bundle: use `react-native-bundle-visualizer` to see which packages consume the most space.",
      "Identify fat dependencies: lodash (use lodash-es), moment.js (use date-fns), large image assets.",
      "Implement tree-shaking: ensure Babel config supports ES modules, use `sideEffects: false` in package.json.",
      "Code splitting: lazy load screens with React.lazy or React Navigation dynamic imports.",
      "Image optimization: compress assets, use WebP, implement progressive loading.",
      "Profile startup: use Flipper Performance Plugin, React DevTools Profiler, Xcode Instruments.",
      "Profile runtime: measure JS thread FPS, UI thread FPS, memory leaks, render counts.",
      "Set performance budgets: bundle <5MB, startup <2s, scroll FPS >55, memory <150MB.",
      "Enforce budgets: add CI check that fails if bundle exceeds budget.",
      "Document: `PERFORMANCE_AUDIT.md` with baseline, optimizations, results, budgets."
    ],
    "tools": [
      "react-native-bundle-visualizer",
      "Flipper Performance Plugin",
      "React DevTools Profiler",
      "Xcode Instruments",
      "Android Studio Profiler",
      "Hermes bytecode analysis"
    ],
    "deliverable": "Performance audit report with 30%+ bundle reduction + enforced performance budgets",
    "definitionOfDone": "Bundle size reduced 30%+, performance budgets in CI, startup <2s, scroll FPS >55 on mid-tier device",
    "commonMistakes": [
      "Optimizing without measuring — profile first, optimize second. Guessing wastes time",
      "Ignoring Hermes — Hermes reduces bundle size 30% and improves startup. Enable it",
      "No CI enforcement — budgets without enforcement are suggestions, not rules"
    ],
    "resumeLine": "Reduced app bundle 35% and enforced performance budgets, improving startup time 40% and scroll FPS to 60",
    "connectsTo": "m4-w14 (design system), m4-w16 (DevEx), Boss Battle (bug rate reduction)"
  },
  "m4-w16": {
    "objective": "Optimize CI/CD pipeline and create developer experience guides that reduce onboarding time and debugging friction",
    "why": "Developer experience (DevEx) is the multiplier. A 10-minute faster build saves 40 hours/month for a 20-person team. Onboarding guides reduce new hire ramp time from weeks to days. This is platform engineering impact — invisible to users, visible to leadership.",
    "steps": [
      "Audit current CI/CD: measure build time, test time, deploy time. Identify bottlenecks.",
      "Parallelize jobs: lint + type-check in parallel, unit tests + integration tests in parallel.",
      "Add caching: node_modules cache, Docker layer cache, Gradle cache, CocoaPods cache.",
      "Selective testing: only run tests for changed files (Jest --changedSince=main).",
      "Optimize Docker: multi-stage builds, smaller base images, layer ordering.",
      "Target: build <5min, test <3min, deploy <2min.",
      "Write `ONBOARDING.md`: step-by-step setup from zero to running app in <2 hours.",
      "Include: prerequisites, environment setup, repo clone, dependency install, simulator setup, first build.",
      "Write `DEBUGGING.md`: common errors and solutions, how to use Flipper, how to read crash logs.",
      "Write `CONTRIBUTING.md`: branch naming, commit conventions, PR template, code review checklist.",
      "Create Makefile or npm scripts: `make setup`, `make test`, `make build`, `make deploy`.",
      "Test onboarding: ask a friend or new teammate to follow the guide, time them, fix gaps."
    ],
    "tools": [
      "GitHub Actions",
      "Docker BuildKit",
      "Jest (selective testing)",
      "Turborepo (caching)",
      "Makefile or npm scripts"
    ],
    "deliverable": "Optimized CI/CD (<5min build) + onboarding guide (<2h setup) + debugging guide",
    "definitionOfDone": "CI build <5min, new developer can onboard in <2h following guide, debugging guide covers 10+ common issues",
    "commonMistakes": [
      "Optimizing build time but not test time — slow tests kill developer flow more than slow builds",
      "Writing guides nobody tests — have a real person follow them, you will find 10 gaps immediately",
      "No contribution guidelines — code review chaos slows the whole team"
    ],
    "resumeLine": "Optimized CI/CD pipeline reducing build time 60%, created onboarding guide cutting new hire ramp time from 2 days to 2 hours",
    "connectsTo": "m4-w14 (design system), w16 (hardening), Boss Battle (velocity improvement)"
  }
};