export const WEEKS = [
  {
    "id": "w17",
    "num": "WEEK 17",
    "title": "Polish & Testing",
    "theme": "Ship Quality",
    "color": "#3b82f6",
    "boss": {
      "id": "boss-w17",
      "name": "The Finisher",
      "challenge": "Polish one project to portfolio quality",
      "rewardXP": 500,
      "resumeLine": "Shipped portfolio-grade full-stack application with tests, docs, and mobile optimization",
      "successCriteria": [
        "One project has >70% test coverage",
        "Professional README with architecture diagram",
        "All error states handled",
        "React Native bundle optimized",
        "No TypeScript warnings"
      ],
      "howToComplete": [
        "Pick best project from Weeks 6b–16",
        "Write missing tests",
        "Add README with screenshots",
        "Fix all lint/TS errors",
        "Analyze bundle, remove unused deps",
        "Test on low-end Android"
      ],
      "deliverables": [
        "GitHub repo with polished code",
        "README with diagram",
        "Bundle analysis screenshot",
        "Device test video"
      ],
      "passFail": {
        "pass": "Project is recruiter-ready",
        "fail": "Messy code, no README, no tests"
      }
    },
    "tasks": [
      {
        "id": "w17-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Audit project: list missing tests, TODOs, console.errors",
        "reason": "Honest audit is step one to quality."
      },
      {
        "id": "w17-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write missing tests until >70% coverage",
        "reason": "Recruiters check for tests."
      },
      {
        "id": "w17-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write professional README: demo gif, architecture, setup, tech stack",
        "reason": "README is your first impression."
      },
      {
        "id": "w17-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Fix all TypeScript errors and lint warnings",
        "reason": "Clean code signals professionalism."
      },
      {
        "id": "w17-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Analyze and optimize React Native bundle",
        "reason": "Slow apps get uninstalled."
      },
      {
        "id": "w17-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Test on low-end Android, fix layout and performance issues",
        "reason": "If it only works on iPhone 15 Pro, it doesn't work."
      },
      {
        "id": "w17-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Pin repo to profile, add to LinkedIn featured, write case study tweet",
        "reason": "Hidden projects are wasted projects."
      }
    ]
  }
];

export const DETAILS = {
  "w17-d1": {
    "objective": "Perform a comprehensive audit of your best project to identify gaps in quality and completeness",
    "why": "An honest audit is the first step toward professional-grade software. You need to know exactly what needs fixing before you can polish.",
    "steps": [
      "Review the codebase for `TODO` comments and unfinished features.",
      "Check the console for any persistent warnings or errors during app use.",
      "Identify core logic paths that lack automated tests.",
      "List any UI/UX friction points (e.g., missing loading states)."
    ],
    "tools": ["ESLint", "TypeScript", "React DevTools"],
    "deliverable": "A 'Quality Gap' checklist for the week",
    "definitionOfDone": "You have a documented list of all technical debt and missing features for the project",
    "commonMistakes": ["Being too lenient on your own code", "Ignoring minor UI glitches"],
    "resumeLine": null,
    "connectsTo": "w17-d2"
  },
  "w17-d2": {
    "objective": "Write unit and integration tests to achieve at least 70% code coverage",
    "why": "Tests are proof of reliability. Recruiters and senior engineers often check for test coverage as a proxy for technical maturity.",
    "steps": [
      "Set up Jest and React Native Testing Library if not already configured.",
      "Write unit tests for complex business logic and utilities.",
      "Write integration tests for key user flows (e.g., login, create item).",
      "Run coverage reports: `npm test -- --coverage`."
    ],
    "tools": ["Jest", "React Native Testing Library", "Supertest"],
    "deliverable": "Code coverage report showing >70% coverage",
    "definitionOfDone": "Critical paths are verified by automated tests and coverage metrics are met",
    "commonMistakes": ["Testing implementation details instead of behavior", "Writing 'hollow' tests just for coverage"],
    "resumeLine": "Achieved 70%+ test coverage on core features using Jest and React Native Testing Library",
    "connectsTo": "w17-d3"
  },
  "w17-d3": {
    "objective": "Create a world-class README that clearly communicates the value and architecture of your project",
    "why": "The README is your first impression. A professional README can be the difference between a recruiter clicking 'next' and scheduling a call.",
    "steps": [
      "Create a high-quality demo GIF or video of the app in action.",
      "Draft a clear project description and value proposition.",
      "Create an architecture diagram showing front-to-back data flow.",
      "Add clear 'Quick Start' instructions for developers."
    ],
    "tools": ["Markdown", "Excalidraw", "Loom/QuickTime"],
    "deliverable": "Professional README.md with visual assets",
    "definitionOfDone": "The README contains a demo, architecture diagram, tech stack list, and setup guide",
    "commonMistakes": ["Writing too much text", "Not including a visual demo"],
    "resumeLine": "Authored comprehensive technical documentation and architecture diagrams for production-grade applications",
    "connectsTo": "w17-d4"
  },
  "w17-d4": {
    "objective": "Eliminate all TypeScript errors and ESLint warnings to ensure codebase health",
    "why": "Clean code signals professionalism. A repo full of warnings suggests a lack of attention to detail.",
    "steps": [
      "Run `tsc --noEmit` to find all hidden TS errors.",
      "Fix any `any` types with proper interfaces or types.",
      "Run `npm run lint` and fix all warnings.",
      "Enforce these rules in your pre-commit hooks (optional but recommended)."
    ],
    "tools": ["TypeScript", "ESLint", "Husky"],
    "deliverable": "Zero-error, zero-warning codebase",
    "definitionOfDone": "Lint and TS checks pass with no manual overrides or suppresses",
    "commonMistakes": ["Using `// @ts-ignore` instead of fixing the underlying type issue"],
    "resumeLine": "Enforced strict type safety and linting standards across large-scale codebases",
    "connectsTo": "w17-d5"
  },
  "w17-d5": {
    "objective": "Analyze the React Native bundle and optimize for size and startup performance",
    "why": "Slow apps get uninstalled. Optimizing the bundle proves you understand the constraints of mobile environments.",
    "steps": [
      "Use `react-native-bundle-visualizer` to identify large dependencies.",
      "Remove or replace heavy libraries (e.g., replace Moment.js with date-fns).",
      "Implement code splitting or lazy loading for heavy screens.",
      "Verify bundle size reduction."
    ],
    "tools": ["react-native-bundle-visualizer", "Hermes"],
    "deliverable": "Bundle analysis report with optimization results",
    "definitionOfDone": "Bundle size is reduced and startup time is measurably improved",
    "commonMistakes": ["Optimizing without measuring first"],
    "resumeLine": "Optimized mobile application bundle size by 30% through dependency auditing and lazy loading",
    "connectsTo": "w17-d6"
  },
  "w17-d6": {
    "objective": "Validate app performance and layout on lower-end Android hardware",
    "why": "Software must work for everyone, not just those with the latest flagship phones. Testing on low-end devices uncovers performance bottlenecks.",
    "steps": [
      "Run the app on a physical low-end Android device or a throttled emulator.",
      "Check for layout overflows on smaller screens.",
      "Profile list scrolling and navigation transitions.",
      "Fix any jank or crashes identified during testing."
    ],
    "tools": ["Android Studio Profiler", "Physical Android Device"],
    "deliverable": "Android performance verification video",
    "definitionOfDone": "The app maintains 60 FPS scrolling and stable performance on lower-tier hardware",
    "commonMistakes": ["Only testing on the iOS simulator"],
    "resumeLine": "Ensured broad device compatibility through rigorous testing and optimization on low-end Android hardware",
    "connectsTo": "w17-d7"
  },
  "w17-d7": {
    "objective": "Market your project and establish your technical brand in the developer community",
    "why": "Hidden projects are wasted projects. Publicly sharing your work builds authority and attracts opportunities.",
    "steps": [
      "Pin the project to the top of your GitHub profile.",
      "Add the project to your LinkedIn 'Featured' section with a strong description.",
      "Write a 'Case Study' thread on Twitter/X or a post on LinkedIn explaining the tech challenges you solved.",
      "Submit the project to community galleries (e.g., 'Made with React Native')."
    ],
    "tools": ["LinkedIn", "Twitter/X", "GitHub"],
    "deliverable": "One public project launch campaign",
    "definitionOfDone": "The project is visible on all professional profiles and has been shared with your network",
    "commonMistakes": ["Being too modest (it's okay to brag about hard work)"],
    "resumeLine": null,
    "connectsTo": "Month 5"
  }
};
