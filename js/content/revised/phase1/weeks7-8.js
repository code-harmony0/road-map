export const WEEKS = [
  {
    "id": "w7",
    "num": "WEEK 07",
    "title": "Portfolio Project Polish",
    "theme": "Ship Quality",
    "color": "#84cc16",
    "boss": {
      "id": "boss-w7",
      "name": "The Finisher",
      "challenge": "Polish ONE project to recruiter-ready quality. README, tests, docs, deployment, demo.",
      "rewardXP": 500,
      "resumeLine": "Shipped portfolio-grade full-stack application with comprehensive documentation, testing, and deployment",
      "successCriteria": [
        "Professional README with architecture diagram, screenshots, setup guide",
        "80%+ test coverage with passing CI",
        "Swagger docs live and accessible",
        "Deployed to public URL with custom domain or clean subdomain",
        "Demo video or GIF showing full feature flow",
        "No TypeScript errors, no lint warnings",
        "React Native tested on low-end Android device"
      ],
      "howToComplete": [
        "Pick your best project (Zonesso recommended — most complex)",
        "Write README: hook in first 3 lines, then architecture, then setup",
        "Add architecture diagram showing all layers",
        "Record screen demo: user journey from open to close",
        "Compress GIF to < 5MB for GitHub",
        "Fix all TS errors and lint warnings",
        "Test on physical Android device (not emulator)",
        "Verify deployment is live and stable"
      ],
      "deliverables": [
        "GitHub repo with polished code",
        "README with diagram and demo GIF",
        "Live deployment URL",
        "Demo video (YouTube unlisted or Loom)",
        "CI badge showing passing tests",
        "Android device test screenshot"
      ],
      "passFail": {
        "pass": "Recruiter can understand the project in 60 seconds, run it in 5 minutes, see it live immediately",
        "fail": "No README, no tests, no live URL, or only works on your machine"
      }
    },
    "tasks": [
      {
        "id": "w7-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Audit project: list every TODO, console.error, hardcoded URL, missing test",
        "reason": "Honest audit is step one to quality. Be brutal."
      },
      {
        "id": "w7-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w7-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write README: 3-line hook, architecture diagram, tech stack, setup steps, API docs link",
        "reason": "Recruiters spend 60 seconds on a repo. Hook them in the first 3 lines."
      },
      {
        "id": "w7-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Fix all TypeScript errors and ESLint warnings. Zero tolerance.",
        "reason": "Clean code signals professionalism. Warnings signal sloppiness."
      },
      {
        "id": "w7-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w7-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Record demo: screen capture of full user journey, compress to GIF",
        "reason": "GIFs auto-play on GitHub. Videos require a click. GIFs win."
      },
      {
        "id": "w7-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Test on low-end Android device (not emulator). Fix layout issues, performance lags.",
        "reason": "If it only works on iPhone 15 Pro, it doesn't work. Test on real budget devices."
      },
      {
        "id": "w7-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w7-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Add CI badge, pin repo to GitHub profile, add topics (react-native, nestjs, postgresql, docker)",
        "reason": "GitHub topics help recruiters find you. Badges signal professionalism."
      },
      {
        "id": "w7-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "LinkedIn featured section: add repo link, write 2-sentence description, pin to profile",
        "reason": "LinkedIn featured is prime real estate. Use it."
      },
      {
        "id": "w7-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      }
    ]
  },
  {
    "id": "w8",
    "num": "WEEK 08",
    "title": "LinkedIn & Resume Overhaul",
    "theme": "Personal Brand",
    "color": "#d946ef",
    "boss": {
      "id": "boss-w8",
      "name": "The Brand Builder",
      "challenge": "Rewrite resume and LinkedIn to position as Full-Stack Engineer, not just React Native",
      "rewardXP": 500,
      "resumeLine": "Positioned as Full-Stack Engineer with mobile specialization, resulting in interview pipeline from top companies",
      "successCriteria": [
        "Resume leads with full-stack/backend achievements, not mobile-only",
        "LinkedIn headline says 'Full-Stack Engineer' or 'Backend Engineer'",
        "About section tells transformation story: mobile → backend → full-stack",
        "Featured section shows 3 projects: backend, full-stack, mobile",
        "Skills section includes: Node.js, NestJS, PostgreSQL, Docker, AWS, React Native",
        "Open to work badge or subtle signal activated"
      ],
      "howToComplete": [
        "Rewrite resume: first 3 bullets must be backend/full-stack impact",
        "Quantify everything: 'Reduced API latency by 40%', 'Dockerized stack cutting deploy time by 80%'",
        "LinkedIn headline: NOT 'React Native Developer' → 'Full-Stack Engineer | Node.js | React Native | PostgreSQL'",
        "About section: story arc — 4 years mobile, expanding to backend, shipped X, Y, Z",
        "Featured: pin Zonesso repo, one blog post, one demo video",
        "Skills: reorder — backend skills first, mobile second"
      ],
      "deliverables": [
        "Resume PDF (1 page, tight, quantified)",
        "LinkedIn profile screenshot (before/after)",
        "Resume ATS score check (use Jobscan or similar)",
        "3 tailored resume versions: Full-Stack, Backend, Mobile-Full-Stack"
      ],
      "passFail": {
        "pass": "Recruiter messages change from 'mobile roles' to 'full-stack roles' within 2 weeks",
        "fail": "Still getting only React Native recruiter spam"
      }
    },
    "tasks": [
      {
        "id": "w8-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study 5 full-stack engineer job descriptions. Highlight keywords they use.",
        "reason": "Your resume must speak their language. Mirror their keywords."
      },
      {
        "id": "w8-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w8-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Rewrite resume: lead with backend achievements, quantify impact, use JD keywords",
        "reason": "First 3 bullets determine if you get an interview. Make them backend-heavy."
      },
      {
        "id": "w8-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Create 3 resume versions: Full-Stack Engineer, Backend Engineer, Mobile-Full-Stack Engineer",
        "reason": "One resume for all roles signals laziness. Tailoring signals intent."
      },
      {
        "id": "w8-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w8-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Rewrite LinkedIn headline, About, and Experience sections. Backend first.",
        "reason": "LinkedIn is your 24/7 recruiter magnet. Most recruiters search by headline."
      },
      {
        "id": "w8-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Update Featured section: Zonesso repo, best blog post, demo video. Reorder skills.",
        "reason": "Featured is prime real estate. Skills order affects search ranking."
      },
      {
        "id": "w8-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w8-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Run resume through Jobscan or Resume Worded. Fix ATS score to 80%+.",
        "reason": "ATS filters 75% of resumes before a human sees them. Beat the bot."
      },
      {
        "id": "w8-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Post on LinkedIn: 'After 4 years in mobile, I spent 8 weeks deepening my backend skills. Here's what I built.'",
        "reason": "Public transformation stories get massive engagement. Recruiters love growth narratives."
      },
      {
        "id": "w8-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      }
    ]
  }
];

export const DETAILS = {
  "w7-d1": {
    "objective": "Perform a brutal, honest audit of your flagship project to identify all quality gaps",
    "why": "A senior engineer doesn't ship 'good enough'. Identifying every remaining flaw is the first step toward a portfolio that recruiters can't ignore.",
    "steps": [
      "Review every screen for layout breaks and unhandled empty states.",
      "Check the backend logs for persistent console.errors or warnings.",
      "Identify core user paths that lack automated tests.",
      "Look for hardcoded values (URLs, strings) that should be in .env files."
    ],
    "tools": ["ESLint", "TypeScript", "React DevTools"],
    "deliverable": "A 'Quality Checklist' of 20+ items to fix this week",
    "definitionOfDone": "You have a documented list of all technical debt and UI polish needed for the project",
    "commonMistakes": ["Being too lenient; recruiters will notice the details you ignored"],
    "resumeLine": null,
    "connectsTo": "w7-d2"
  },
  "w7-d2": {
    "objective": "Craft a high-conversion README that clearly communicates technical depth",
    "why": "The README is your project's landing page. It determines if a recruiter continues to look at your code or clicks away.",
    "steps": [
      "Write a 'Hook' that explains the business value in 3 lines.",
      "Create a professional architecture diagram (client -> LB -> API -> DB).",
      "List the tech stack with justifications for each choice.",
      "Provide clear, tested setup instructions for other developers."
    ],
    "tools": ["Markdown", "Excalidraw", "Shields.io"],
    "deliverable": "A world-class README.md file in your project root",
    "definitionOfDone": "A developer can run your project in < 5 minutes following the guide",
    "commonMistakes": ["Writing too much text; use headers, lists, and images instead"],
    "resumeLine": "Authored comprehensive technical documentation and architecture diagrams for production-grade applications",
    "connectsTo": "w7-d3"
  },
  "w7-d3": {
    "objective": "Achieve a zero-error, zero-warning codebase to signal extreme professionalism",
    "why": "Code quality is an objective metric. A repo full of warnings suggests a lack of attention to detail and technical debt.",
    "steps": [
      "Run `tsc --noEmit` and fix every TypeScript error.",
      "Run `npm run lint` and fix every warning.",
      "Refactor any `any` types into proper interfaces.",
      "Ensure all async calls are properly awaited and error-handled."
    ],
    "tools": ["TypeScript", "ESLint", "Prettier"],
    "deliverable": "A clean, passing build with no manual overrides",
    "definitionOfDone": "Both lint and TS checks pass in the CI pipeline without warnings",
    "commonMistakes": ["Using `// @ts-ignore` instead of fixing the underlying type issue"],
    "resumeLine": "Enforced strict type safety and linting standards across full-stack repositories",
    "connectsTo": "w7-d4"
  },
  "w7-d4": {
    "objective": "Record and optimize a visual demo showing the full application lifecycle",
    "why": "Recruiters are busy. A 30-second GIF or video is more effective than a live demo that they have to install and run.",
    "steps": [
      "Record a clean user journey (Login -> Core Feature -> Success).",
      "Annotate the video with technical callouts (e.g., 'Real-time WebSocket sync').",
      "Compress the final output to a high-quality GIF for the README.",
      "Upload a full video version to YouTube (unlisted) or Loom."
    ],
    "tools": ["QuickTime/Loom", "ezgif.com", "FFmpeg"],
    "deliverable": "High-quality demo GIF and video URL",
    "definitionOfDone": "The demo clearly showcases the app's 'Wow' factor in under 60 seconds",
    "commonMistakes": ["Demos that are too long or recorded on a laggy emulator"],
    "resumeLine": null,
    "connectsTo": "w7-d5"
  },
  "w7-d5": {
    "objective": "Validate app performance and reliability on mid-tier hardware",
    "why": "Software must work for everyone, not just those with the latest iPhone. Testing on budget devices reveals critical performance bottlenecks.",
    "steps": [
      "Deploy the app to a physical Android device (target a 2-3 year old model).",
      "Profile list scrolling and navigation transitions.",
      "Measure API response times over a simulated 3G connection.",
      "Fix any layout overflows or performance jank identified."
    ],
    "tools": ["Android Studio Profiler", "Physical Android Device"],
    "deliverable": "Android performance verification report",
    "definitionOfDone": "App maintains 60 FPS scrolling and stable performance on lower-tier hardware",
    "commonMistakes": ["Only testing on the iOS simulator (doesn't reveal real-world issues)"],
    "resumeLine": "Ensured broad device compatibility through rigorous testing and optimization on low-end hardware",
    "connectsTo": "w7-d6"
  },
  "w7-d6": {
    "objective": "Leverage GitHub social signals to increase recruiting visibility",
    "why": "GitHub is the primary search tool for technical recruiters. Using tags and badges increases your profile's SEO.",
    "steps": [
      "Add an active CI badge to your README.",
      "Add 10 relevant topics/tags to the repo.",
      "Pin the repo to your profile with a high-conversion description.",
      "Update your GitHub bio with your new stack (Node, Postgres, Docker)."
    ],
    "tools": ["GitHub Actions", "GitHub Profile"],
    "deliverable": "A recruiter-optimized GitHub project page",
    "definitionOfDone": "Project is pinned and correctly tagged for discovery in search results",
    "commonMistakes": ["Forgetting to add a link to the live demo in the repo description"],
    "resumeLine": "Maintained high-quality open-source portfolio with automated CI/CD and comprehensive documentation",
    "connectsTo": "w7-d7"
  },
  "w7-d7": {
    "objective": "Establish professional technical authority on LinkedIn",
    "why": "The 'Featured' section is the first thing recruiters see. Leading with your project demo proves you can ship production code.",
    "steps": [
      "Add the GitHub link and the Video Demo to your Featured section.",
      "Write a 2-sentence description for each: 'Full-stack AI assistant built with...' and 'Architecture deep-dive'.",
      "Ensure the thumbnails are clean and professional.",
      "Ask a peer for feedback on the profile layout."
    ],
    "tools": ["LinkedIn Featured", "Canva"],
    "deliverable": "An updated LinkedIn profile with active project proof",
    "definitionOfDone": "Profile visitors instantly see tangible proof of your technical capabilities",
    "commonMistakes": ["Pinning old, irrelevant mobile-only projects"],
    "resumeLine": null,
    "connectsTo": "Week 8"
  },
  "w8-d1": {
    "objective": "Align your personal brand with current market demand for Full-Stack engineers",
    "why": "If your resume looks like a mobile developer, you will only get mobile roles. You must speak the language of backend and system architecture.",
    "steps": [
      "Find 5 'Staff' or 'Senior Full-Stack' job descriptions.",
      "Highlight recurring keywords: 'Distributed Systems', 'Observability', 'Scalability', 'Schema Design'.",
      "Audit your current resume for these keywords.",
      "Map your new skills (Postgres, Docker, CI/CD) to the JD requirements."
    ],
    "tools": ["LinkedIn Jobs", "Market Analysis"],
    "deliverable": "Keyword gap analysis and re-branding strategy",
    "definitionOfDone": "You have a list of 'High-Value' keywords to integrate into your profile",
    "commonMistakes": ["Ignoring the JD and writing a resume in a vacuum"],
    "resumeLine": null,
    "connectsTo": "w8-d2"
  },
  "w8-d2": {
    "objective": "Rewrite your resume to prioritize high-impact full-stack achievements",
    "why": "The top half of your resume determines if a human spends more than 6 seconds on it. It must signal seniority immediately.",
    "steps": [
      "Rewrite the Professional Summary to lead with 'Full-Stack / Platform Engineering'.",
      "Update project bullets to use the 'Action -> Result' formula with numbers.",
      "Move backend skills to the top of the technical skills list.",
      "Remove old, low-impact mobile bullets to make room for architectural depth."
    ],
    "tools": ["Google Docs", "Resume Worded"],
    "deliverable": "A high-conversion 'Identity Shift' resume",
    "definitionOfDone": "First page contains 10+ backend/architectural keywords and 3+ quantified metrics",
    "commonMistakes": ["Quantifying mobile UI changes but not backend performance gains"],
    "resumeLine": "Engineered high-performance backends resulting in 40% reduction in API response times",
    "connectsTo": "w8-d3"
  },
  "w8-d3": {
    "objective": "Create tailored resume variants to maximize callback rates across different roles",
    "why": "One resume for all roles is lazy. Tailoring variants for 'Backend', 'Full-Stack', and 'Staff Mobile' roles increases ROI.",
    "steps": [
      "Create Version A: Lead with Node/Postgres (Backend focus).",
      "Create Version B: Balance Node and React Native (Full-Stack focus).",
      "Create Version C: Lead with New Arch and Perf Eng (Staff Mobile focus).",
      "Save all as clean, ATS-readable PDFs."
    ],
    "tools": ["PDF Export", "Version Control"],
    "deliverable": "3 distinct resume variants in PDF format",
    "definitionOfDone": "You have a ready-to-send resume for any senior role in your target family",
    "commonMistakes": ["Minor summary changes only; project highlights must be re-prioritized"],
    "resumeLine": null,
    "connectsTo": "w8-d4"
  },
  "w8-d4": {
    "objective": "Optimize your LinkedIn profile for algorithmic and human discovery",
    "why": "LinkedIn is where recruiters find you. Your headline and About section must match their search filters for full-stack talent.",
    "steps": [
      "Headline: NOT 'React Native Dev' -> 'Full-Stack Engineer | Node.js | React Native | PostgreSQL'.",
      "About: Write your 'Identity Shift' narrative: 4 years mobile, transitioning to architecture/backend.",
      "Experience: Update previous roles to mention 'cross-functional collaboration' and 'architectural ownership'.",
      "Skills: Re-order skills so the top 3 are Backend/Full-Stack related."
    ],
    "tools": ["LinkedIn SEO", "Headline Generators"],
    "deliverable": "A recruiter-optimized LinkedIn profile",
    "definitionOfDone": "Search results for 'Node.js Developer' or 'Full-Stack' trigger your profile",
    "commonMistakes": ["Using a generic headline like 'Seeking new opportunities'"],
    "resumeLine": null,
    "connectsTo": "w8-d5"
  },
  "w8-d5": {
    "objective": "Harden your public social proof through active project demos",
    "why": "Proof of work beats a resume. Showing your project's architecture and demo on your profile builds instant credibility.",
    "steps": [
      "Update Featured section with your best repo, demo video, and architecture diagram.",
      "Ask 3 colleagues for 'Recommendations' focused on your backend growth and ownership.",
      "Endorse peers for relevant skills to trigger reciprocation.",
      "Check profile for broken links or outdated summaries."
    ],
    "tools": ["LinkedIn Featured", "Peer Network"],
    "deliverable": "A high-social-proof technical profile",
    "definitionOfDone": "Profile displays tangible proof of shipping production-grade full-stack code",
    "commonMistakes": ["Ignoring the Recommendations section (it's the only place for 'trust' signals)"],
    "resumeLine": null,
    "connectsTo": "w8-d6"
  },
  "w8-d6": {
    "objective": "Ensure your resume passes the automated Applicant Tracking System (ATS) filters",
    "why": "75% of resumes are rejected by bots before a human sees them. Beating the ATS is a technical requirement for job hunting.",
    "steps": [
      "Upload your primary resume to Jobscan or Resume Worded.",
      "Cross-reference with a target Senior Full-Stack JD.",
      "Fix formatting issues (no columns, standard fonts).",
      "Add missing keywords to reach 80%+ match score."
    ],
    "tools": ["Jobscan", "Resume Worded"],
    "deliverable": "ATS-hardened resume variant",
    "definitionOfDone": "Resume achieves an 80%+ match score for your top target role",
    "commonMistakes": ["Using complex graphics or charts that break ATS parsers"],
    "resumeLine": null,
    "connectsTo": "w8-d7"
  },
  "w8-d7": {
    "objective": "Publish your technical growth narrative to the broader engineering community",
    "why": "Transformation stories get 10x more engagement than generic updates. It signals high EQ and self-directed growth to leaders.",
    "steps": [
      "Draft the post: 'Why I spent 8 weeks going deeper into the backend'.",
      "Explain the shift from 'UI-first' to 'Data-first' thinking.",
      "Tag mentors or colleagues who inspired the shift.",
      "End with: 'Excited for the next chapter as a Full-Stack Architect'."
    ],
    "tools": ["LinkedIn", "Community Feedback"],
    "deliverable": "Flagship 'Identity Shift' social post",
    "definitionOfDone": "The post is live, shared, and generating initial recruiter inbound",
    "commonMistakes": ["Being too self-deprecating; you are an expert who is expanding, not a junior starting over"],
    "resumeLine": null,
    "connectsTo": "Week 9"
  }
};
