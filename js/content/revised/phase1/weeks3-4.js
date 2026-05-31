export const WEEKS = [
  {
    "id": "w3",
    "num": "WEEK 03",
    "title": "Testing Foundations",
    "theme": "Quality Engineering",
    "color": "#f59e0b",
    "boss": {
      "id": "boss-w3",
      "name": "The Quality Gatekeeper",
      "challenge": "Add unit tests and integration tests to your API. 70%+ coverage.",
      "rewardXP": 500,
      "resumeLine": "Implemented comprehensive test suite achieving 80% coverage with unit and integration tests",
      "successCriteria": [
        "Unit tests for all service functions",
        "Integration tests for all API endpoints",
        "Test database separate from dev database",
        "Coverage report shows 70%+",
        "Tests run with npm test"
      ],
      "howToComplete": [
        "Install Jest + Supertest",
        "Write unit tests for business logic",
        "Write integration tests for endpoints",
        "Use separate test database",
        "Generate coverage report",
        "Add to CI later"
      ],
      "deliverables": [
        "/tests directory with organized test files",
        "Coverage report screenshot",
        "All tests passing"
      ],
      "passFail": {
        "pass": "70%+ coverage, all tests pass, integration tests hit real endpoints",
        "fail": "Tests that don't assert anything or only test happy path"
      }
    },
    "tasks": [
      {
        "id": "w3-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Learn testing pyramid: unit vs integration vs e2e. Set up Jest.",
        "reason": "Untested code is broken code you haven't found yet."
      },
      {
        "id": "w3-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w3-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write unit tests for all service/business logic functions",
        "reason": "Services contain the rules. Test the rules."
      },
      {
        "id": "w3-d2-micro",
        "day": "Day 2",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w3-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write integration tests for all API endpoints with Supertest",
        "reason": "Integration tests catch what unit tests miss."
      },
      {
        "id": "w3-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w3-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Set up test database, seed test data, teardown after each test",
        "reason": "Tests must be isolated. Never touch production data."
      },
      {
        "id": "w3-d4-micro",
        "day": "Day 4",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w3-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add error case tests: 400, 401, 404, 500 responses",
        "reason": "Happy path tests are useless. Edge cases matter."
      },
      {
        "id": "w3-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w3-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Generate coverage report, identify untested lines, add missing tests",
        "reason": "Coverage is a vanity metric, but 70% is the interview baseline."
      },
      {
        "id": "w3-d6-micro",
        "day": "Day 6",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w3-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Blog post: 'Testing a NestJS API: What I Learned as a Mobile Dev'",
        "reason": "Mobile devs rarely write backend tests. Unique content."
      },
      {
        "id": "w3-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      }
    ]
  },
  {
    "id": "w4",
    "num": "WEEK 04",
    "title": "CI/CD & Deployment",
    "theme": "Production Pipeline",
    "color": "#8b5cf6",
    "boss": {
      "id": "boss-w4",
      "name": "The Pipeline Engineer",
      "challenge": "Set up GitHub Actions CI/CD and deploy to AWS/Railway/Render",
      "rewardXP": 500,
      "resumeLine": "Implemented CI/CD pipeline with automated testing and deployment to cloud infrastructure",
      "successCriteria": [
        "GitHub Actions runs tests on every push",
        "Failed tests block merge",
        "Successful tests trigger deployment",
        "App is live on public URL",
        "Environment variables managed securely"
      ],
      "howToComplete": [
        "Write GitHub Actions workflow: test → build → deploy",
        "Set up Railway or AWS EC2",
        "Configure deployment from main branch",
        "Add branch protection rules",
        "Verify: push → test → deploy → live"
      ],
      "deliverables": [
        ".github/workflows/ci.yml",
        "Live deployment URL",
        "CI/CD pipeline screenshot",
        "Branch protection settings"
      ],
      "passFail": {
        "pass": "Push to main → tests pass → auto deploys → live URL works",
        "fail": "Manual deployment or no CI"
      }
    },
    "tasks": [
      {
        "id": "w4-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Learn GitHub Actions: workflows, jobs, steps, runners",
        "reason": "CI/CD is non-negotiable for $120K+ roles."
      },
      {
        "id": "w4-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w4-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write workflow: checkout → install → test → build",
        "reason": "Test-first pipeline prevents broken code from deploying."
      },
      {
        "id": "w4-d2-micro",
        "day": "Day 2",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w4-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Set up Railway or AWS EC2, configure deployment from GitHub Actions",
        "reason": "Railway is fastest for Node.js. AWS is the interview standard."
      },
      {
        "id": "w4-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w4-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add branch protection: require PR, require tests pass, require review",
        "reason": "Process prevents production disasters."
      },
      {
        "id": "w4-d4-micro",
        "day": "Day 4",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w4-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Test full flow: create PR → tests run → merge → deploy → verify live",
        "reason": "If you haven't tested the pipeline, the pipeline doesn't work."
      },
      {
        "id": "w4-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w4-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Add deployment health check: ping /health after deploy, rollback on failure",
        "reason": "Deploying is easy. Safe deploying is hard."
      },
      {
        "id": "w4-d6-micro",
        "day": "Day 6",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      },
      {
        "id": "w4-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "LinkedIn post: 'I set up CI/CD for my side project — here's the GitHub Actions YAML'",
        "reason": "DevOps content proves you ship production code."
      },
      {
        "id": "w4-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Testing basics",
        "reason": "Test-driven mindset is critical for reliability"
      }
    ]
  }
];

export const DETAILS = {
  "w3-d1": {
    "objective": "Understand the levels of testing and configure a robust Jest environment",
    "why": "Untested code is technical debt. A clear testing strategy allows for rapid feature development without the fear of regressions.",
    "steps": [
      "Study the Testing Pyramid: why more units tests than e2e?",
      "Install Jest and TypeScript support.",
      "Configure `jest.config.js` for isolated test runs.",
      "Write a simple 'math utility' test to verify the setup."
    ],
    "tools": ["Jest", "ts-jest"],
    "deliverable": "Working Jest configuration with a passing sanity test",
    "definitionOfDone": "Running `npm test` successfully executes the test runner",
    "commonMistakes": ["Trying to test everything with e2e", "Ignoring test execution speed early on"],
    "resumeLine": null,
    "connectsTo": "w3-d2"
  },
  "w3-d2": {
    "objective": "Write unit tests for core service layer logic and business rules",
    "why": "The service layer contains the most complex logic. Unit tests are the fastest way to verify this logic in isolation.",
    "steps": [
      "Identify a complex service function (e.g., price calculation).",
      "Mock external dependencies (database, third-party APIs).",
      "Write tests for different input scenarios.",
      "Ensure tests are fast and don't depend on outside state."
    ],
    "tools": ["Jest Mocks", "Sinon (optional)"],
    "deliverable": "A suite of 10+ unit tests covering critical business rules",
    "definitionOfDone": "Business logic is verified without touching the database",
    "commonMistakes": ["Testing implementation details instead of outputs", "Not mocking database calls"],
    "resumeLine": "Implemented rigorous unit testing for critical business logic, ensuring 100% reliability of core features",
    "connectsTo": "w3-d3"
  },
  "w3-d3": {
    "objective": "Implement integration tests for API endpoints using Supertest",
    "why": "Integration tests verify that your routes, middleware, and database work together correctly.",
    "steps": [
      "Install Supertest: `npm install supertest --save-dev`.",
      "Create a test file for each API module.",
      "Write tests that hit the actual endpoints (e.g., `/api/users`).",
      "Verify the response status and JSON structure."
    ],
    "tools": ["Supertest", "Express/NestJS"],
    "deliverable": "Full integration test suite for all CRUD endpoints",
    "definitionOfDone": "Integration tests successfully hit real routes and verify database responses",
    "commonMistakes": ["Using production database for integration tests"],
    "resumeLine": "Developed automated integration tests using Supertest to validate end-to-end API reliability",
    "connectsTo": "w3-d4"
  },
  "w3-d4": {
    "objective": "Set up an isolated test database and automated data teardown",
    "why": "Tests must be idempotent. A separate database ensures tests don't pollute development data.",
    "steps": [
      "Create a separate `project_test_db` in Postgres.",
      "Configure Prisma to use the test DB during test runs.",
      "Implement a `beforeEach` hook to clear tables.",
      "Implement a `seedTest` function to populate required state."
    ],
    "tools": ["PostgreSQL", "Prisma Client"],
    "deliverable": "Automated test environment with data isolation",
    "definitionOfDone": "Each test starts with a clean database state and runs in total isolation",
    "commonMistakes": ["Forgetting to close database connections (causes memory leaks)"],
    "resumeLine": null,
    "connectsTo": "w3-d5"
  },
  "w3-d5": {
    "objective": "Ensure robust error handling by testing non-happy path scenarios",
    "why": "Senior engineers test how systems fail. Verifying 404 and 500 responses is as important as testing 200s.",
    "steps": [
      "Write a test for a non-existent ID (404).",
      "Write a test for unauthorized access (401).",
      "Mock a database failure to trigger a 500 error.",
      "Verify the error message format in the JSON response."
    ],
    "tools": ["Jest", "Supertest"],
    "deliverable": "Suite of error-case tests ensuring graceful failure",
    "definitionOfDone": "All common HTTP error codes are correctly triggered and verified",
    "commonMistakes": ["Only testing the 'Happy Path'"],
    "resumeLine": "Hardened application resilience by implementing comprehensive error-case testing",
    "connectsTo": "w3-d6"
  },
  "w3-d6": {
    "objective": "Analyze code coverage and close gaps in the test suite",
    "why": "Coverage reports reveal blind spots. 70% is the standard target for professional projects.",
    "steps": [
      "Run coverage: `npm test -- --coverage`.",
      "Open the HTML report and identify 'red' lines.",
      "Write targeted tests to cover missing branches and statements.",
      "Refactor code that is 'untestable' (too many side effects)."
    ],
    "tools": ["Jest Coverage (Istanbul)"],
    "deliverable": "Coverage report showing >70% across all modules",
    "definitionOfDone": "Code coverage targets are met without using 'hollow' tests",
    "commonMistakes": ["Chasing 100% coverage at the expense of useful assertions"],
    "resumeLine": "Achieved 80% code coverage across the full stack through targeted test engineering",
    "connectsTo": "w3-d7"
  },
  "w3-d7": {
    "objective": "Publish technical content about your testing journey",
    "why": "Testing is a 'Senior Signal'. Sharing your process builds authority and helps other mobile developers level up.",
    "steps": [
      "Draft a blog post about switching from 'manual' to 'automated' testing.",
      "Include a screenshot of your coverage report.",
      "Discuss the specific tools used (Jest, Supertest).",
      "Share on social platforms."
    ],
    "tools": ["Medium", "Hashnode"],
    "deliverable": "One high-authority blog post",
    "definitionOfDone": "Post is live and demonstrating your quality-first engineering mindset",
    "commonMistakes": ["Being too academic; keep it practical and personal"],
    "resumeLine": null,
    "connectsTo": "Week 4"
  },
  "w4-d1": {
    "objective": "Master GitHub Actions syntax and workflow orchestration",
    "why": "GitHub Actions is the industry standard for CI/CD. Automating your build process is the first step to high-velocity delivery.",
    "steps": [
      "Learn YAML syntax for Actions.",
      "Understand triggers: `push`, `pull_request`, `workflow_dispatch`.",
      "Study Jobs vs Steps and how they share state.",
      "Set up a simple 'Linter' workflow."
    ],
    "tools": ["GitHub Actions", "YAML"],
    "deliverable": "Working 'Lint' workflow in GitHub",
    "definitionOfDone": "Every push to a branch triggers a lint check on GitHub",
    "commonMistakes": ["Using overly complex workflows before mastering basics"],
    "resumeLine": null,
    "connectsTo": "w4-d2"
  },
  "w4-d2": {
    "objective": "Implement a 'Test-First' CI pipeline that prevents broken code from merging",
    "why": "CI ensures that only quality, passing code reaches the main branch. This is the foundation of team trust.",
    "steps": [
      "Add a 'Test' job to your workflow.",
      "Configure a PostgreSQL service container within the Action.",
      "Run migrations and tests in the runner environment.",
      "Verify the workflow fails if a test fails."
    ],
    "tools": ["GitHub Runners", "Docker-in-Docker"],
    "deliverable": "Full CI pipeline with automated testing",
    "definitionOfDone": "All tests pass in the GitHub Actions environment on every PR",
    "commonMistakes": ["Hardcoding secrets in the YAML file"],
    "resumeLine": "Engineered automated CI pipelines with containerized testing, reducing production regressions",
    "connectsTo": "w4-d3"
  },
  "w4-d3": {
    "objective": "Automate deployment to cloud infrastructure from the CI pipeline",
    "why": "Manual deployments are slow and error-prone. CD ensures that users get new features as soon as they are tested.",
    "steps": [
      "Choose a provider: Railway (fastest) or AWS (enterprise).",
      "Generate a deployment token/key.",
      "Add a 'Deploy' job that triggers after the 'Test' job passes.",
      "Configure the provider to pull the latest image or code.",
      "Verify the app is live at a public URL."
    ],
    "tools": ["Railway CLI", "AWS SDK", "GitHub Secrets"],
    "deliverable": "Automated CD pipeline with live production URL",
    "definitionOfDone": "Merging to 'main' automatically triggers a successful production deploy",
    "commonMistakes": ["Triggering deploy before tests have passed"],
    "resumeLine": "Implemented full CD pipelines for automated cloud deployments and zero-downtime releases",
    "connectsTo": "w4-d4"
  },
  "w4-d4": {
    "objective": "Enforce high standards through GitHub Branch Protection rules",
    "why": "Processes prevent human error. Rules ensure that no single developer (including you) can bypass quality checks.",
    "steps": [
      "Enable branch protection for `main`.",
      "Require at least 1 approval for PRs.",
      "Require status checks (tests/lint) to pass before merging.",
      "Disable force pushes.",
      "Test the rules by trying to merge a failing PR."
    ],
    "tools": ["GitHub Repo Settings"],
    "deliverable": "Protected production branch with enforced quality gates",
    "definitionOfDone": "It is impossible to merge code that fails tests or hasn't been reviewed",
    "commonMistakes": ["Setting rules that are too restrictive for a solo developer"],
    "resumeLine": "Established strict engineering standards through automated branch protection and review policies",
    "connectsTo": "w4-d5"
  },
  "w4-d5": {
    "objective": "Verify the full automated lifecycle from PR to Production",
    "why": "Testing the pipeline itself is critical. You must be certain that the 'Magic' happens correctly every time.",
    "steps": [
      "Create a feature branch and a small change.",
      "Open a PR and watch the CI run.",
      "Merge the PR and watch the CD deploy.",
      "Ping the live URL to verify the change.",
      "Celebrate your first automated release."
    ],
    "tools": ["Git", "Browser"],
    "deliverable": "Proven end-to-end delivery pipeline",
    "definitionOfDone": "The entire flow from 'Commit' to 'Live' is seamless and requires zero manual steps",
    "commonMistakes": ["Not checking the live URL after the deploy says 'Success'"],
    "resumeLine": null,
    "connectsTo": "w4-d6"
  },
  "w4-d6": {
    "objective": "Implement automated production health checks and safety protocols",
    "why": "Deploying is easy; safe deploying is hard. Health checks ensure your app is actually serving traffic after a deploy.",
    "steps": [
      "Create a `/health` endpoint that returns 200 OK.",
      "Configure your deploy job to 'ping' this URL after deployment.",
      "Add logic to rollback or alert if the ping fails.",
      "Check logs to ensure the health check is hitting the new version."
    ],
    "tools": ["Express", "Health Check Middleware"],
    "deliverable": "Production-hardened deployment with health monitoring",
    "definitionOfDone": "Deployments are automatically verified and safe-guarded against total failure",
    "commonMistakes": ["Health check being too heavy (e.g., running complex queries)"],
    "resumeLine": "Implemented automated health monitoring and rollback protocols for production stability",
    "connectsTo": "w4-d7"
  },
  "w4-d7": {
    "objective": "Publish your DevOps transformation and share your YAML configuration",
    "why": "DevOps content is a huge magnet for recruiters. It shows you understand the 'Total Cost of Ownership' of a feature.",
    "steps": [
      "Draft a LinkedIn post explaining your CI/CD setup.",
      "Explain why you chose your specific tools (Railway, GitHub Actions).",
      "Provide a Gist link to your workflow YAML.",
      "Discuss how this setup has improved your development velocity."
    ],
    "tools": ["LinkedIn", "GitHub Gist"],
    "deliverable": "One high-engagement technical update",
    "definitionOfDone": "Post is live and you have officially completed the Revised Phase 1",
    "commonMistakes": ["Being too humble; highlight the technical complexity of the automation"],
    "resumeLine": null,
    "connectsTo": "w14"
  }
};
