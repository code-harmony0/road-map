export const WEEKS = [
  {
    "id": "w16",
    "num": "WEEK 16",
    "title": "Production Hardening",
    "theme": "Resilience",
    "color": "#eab308",
    "boss": {
      "id": "boss-w16",
      "name": "The Reliability Engineer",
      "challenge": "Add logging, error tracking, rate limiting, and health checks",
      "rewardXP": 500,
      "resumeLine": "Hardened production API with structured logging, Sentry, rate limiting, and health monitoring",
      "successCriteria": [
        "Structured logging in all API routes",
        "Sentry catching backend and mobile errors",
        "Rate limiting on all public endpoints",
        "Health check endpoint monitored",
        "React Native error boundaries added"
      ],
      "howToComplete": [
        "Add structured logging (Winston/Pino)",
        "Set up Sentry for backend and frontend",
        "Implement rate limiting",
        "Create /health endpoint with UptimeRobot",
        "Add RN error boundaries"
      ],
      "deliverables": [
        "Sentry dashboard screenshot",
        "Rate limit test results",
        "UptimeRobot status page"
      ],
      "passFail": {
        "pass": "Logging + Sentry + rate limits + health checks working",
        "fail": "console.log only, no error tracking"
      }
    },
    "tasks": [
      {
        "id": "w16-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Add structured logging: request ID, user ID, timestamp, response time",
        "reason": "console.log is not logging."
      },
      {
        "id": "w16-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Integrate Sentry: backend + React Native crash reporting",
        "reason": "You can't fix what you don't know is broken."
      },
      {
        "id": "w16-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Implement rate limiting: 100 req/min per user, stricter on AI endpoints",
        "reason": "Essential for AI cost control."
      },
      {
        "id": "w16-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Build /health endpoint, set up UptimeRobot",
        "reason": "Know you're down before users complain."
      },
      {
        "id": "w16-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add React Native error boundaries and network error handling",
        "reason": "Mobile apps crash. Boundaries prevent total failure."
      },
      {
        "id": "w16-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Simulate failures: kill DB, hit rate limit, trigger error. Verify alerts.",
        "reason": "Test failure before it happens in production."
      },
      {
        "id": "w16-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "LinkedIn post: 'Making My App Production-Ready'",
        "reason": "Reliability engineering is senior-level content."
      }
    ]
  }
];

export const DETAILS = {
  "w16-d1": {
    "objective": "Add structured logging to the backend using Winston or Pino",
    "why": "console.log is insufficient for production. Structured logging allows for easy searching and analysis in log management tools.",
    "steps": [
      "Install Winston or Pino.",
      "Configure a logger with JSON format.",
      "Add middleware to log request ID, user ID, timestamp, and response time for every request.",
      "Update existing console.logs to use the new logger."
    ],
    "tools": ["Winston", "Pino", "Node.js"],
    "deliverable": "JSON-formatted logs in the console or log file",
    "definitionOfDone": "Every API request generates a structured log entry with the required metadata",
    "commonMistakes": ["Logging sensitive user data", "Not using JSON format for logs"],
    "resumeLine": "Implemented structured logging across backend services, improving debugging speed by 50%",
    "connectsTo": "w16-d2"
  },
  "w16-d2": {
    "objective": "Integrate Sentry for centralized error tracking on both backend and frontend",
    "why": "You can't fix what you don't know is broken. Sentry provides real-time alerts and detailed stack traces for all errors.",
    "steps": [
      "Create a Sentry project.",
      "Install Sentry SDK for Node.js and React Native.",
      "Configure Sentry with your DSN.",
      "Test error capturing by triggering a deliberate error.",
      "Set up Slack or email alerts for new errors."
    ],
    "tools": ["Sentry"],
    "deliverable": "Sentry dashboard showing captured errors",
    "definitionOfDone": "Both backend and mobile errors are automatically reported to Sentry with full stack traces",
    "commonMistakes": ["Not uploading source maps for React Native", "Leaving debug mode on in production"],
    "resumeLine": "Integrated Sentry for real-time error tracking and crash reporting across the full stack",
    "connectsTo": "w16-d3"
  },
  "w16-d3": {
    "objective": "Implement rate limiting on all public API endpoints with stricter limits on AI routes",
    "why": "Rate limiting prevents abuse and protects your infrastructure. Stricter limits on AI endpoints are essential for cost control.",
    "steps": [
      "Install express-rate-limit or similar.",
      "Define a global rate limit (e.g., 100 req/min).",
      "Define stricter limits for AI routes (e.g., 5 req/min).",
      "Customize the error message for rate-limited requests.",
      "Verify limits using a load testing tool or simple script."
    ],
    "tools": ["express-rate-limit", "Node.js"],
    "deliverable": "Working rate limiting implementation",
    "definitionOfDone": "Requests exceeding the limit receive a 429 Too Many Requests response",
    "commonMistakes": ["Not using a persistent store like Redis for rate limits in production"],
    "resumeLine": "Implemented granular rate limiting to prevent API abuse and control AI infrastructure costs",
    "connectsTo": "w16-d4"
  },
  "w16-d4": {
    "objective": "Build a /health endpoint and set up UptimeRobot for external monitoring",
    "why": "Knowing your app is down before your users do is critical for maintaining trust.",
    "steps": [
      "Create a `/health` endpoint that checks DB and Redis connectivity.",
      "Return a 200 OK if all systems are healthy.",
      "Create a free UptimeRobot account.",
      "Add a HTTP monitor for your health endpoint with a 5-minute interval.",
      "Configure alerts for downtime."
    ],
    "tools": ["UptimeRobot", "Express"],
    "deliverable": "UptimeRobot status page",
    "definitionOfDone": "UptimeRobot successfully monitors the /health endpoint and alerts on failure",
    "commonMistakes": ["Health check being too heavy (e.g., running complex queries)"],
    "resumeLine": "Established production health monitoring and automated uptime alerting",
    "connectsTo": "w16-d5"
  },
  "w16-d5": {
    "objective": "Add React Native error boundaries and robust network error handling",
    "why": "Mobile apps will inevitably crash or lose connectivity. Boundaries and proper handling prevent the entire app from failing.",
    "steps": [
      "Implement a top-level Error Boundary component.",
      "Add specific boundaries around complex features.",
      "Improve network error handling in your API client (e.g., Axios interceptors).",
      "Add 'Retry' buttons to error states.",
      "Test by manually triggering crashes and network failures."
    ],
    "tools": ["React Native", "Error Boundaries"],
    "deliverable": "Graceful failure UI in the mobile app",
    "definitionOfDone": "The app remains functional even if a specific component crashes or the network fails",
    "commonMistakes": ["Not logging boundary-caught errors to Sentry"],
    "resumeLine": "Enhanced mobile app resilience through global error boundaries and robust network failure handling",
    "connectsTo": "w16-d6"
  },
  "w16-d6": {
    "objective": "Simulate production failures and verify the alerting system",
    "why": "Testing failures in a controlled environment ensures your monitoring and alerting work as expected.",
    "steps": [
      "Temporarily stop the database and verify the /health endpoint fails and UptimeRobot alerts.",
      "Trigger the rate limit and verify the 429 response.",
      "Trigger a deliberate error and verify it appears in Sentry.",
      "Ensure all alerts reach the correct notification channel (Slack/Email)."
    ],
    "tools": ["Sentry", "UptimeRobot", "Docker"],
    "deliverable": "Failure simulation report",
    "definitionOfDone": "All simulated failures are correctly identified and reported by the monitoring system",
    "commonMistakes": ["Not restoring systems after simulation"],
    "resumeLine": "Conducted chaos engineering simulations to validate production monitoring and alerting resilience",
    "connectsTo": "w16-d7"
  },
  "w16-d7": {
    "objective": "Publish a LinkedIn post about your production hardening work",
    "why": "Reliability engineering is a senior-level skill. Sharing your process demonstrates technical maturity and leadership.",
    "steps": [
      "Draft a post explaining the importance of production hardening.",
      "Include a screenshot of your Sentry dashboard or UptimeRobot status page.",
      "List the key technologies used (Winston, Sentry, Rate Limiting).",
      "Tag hiring managers or tech leaders."
    ],
    "tools": ["LinkedIn"],
    "deliverable": "One professional LinkedIn update",
    "definitionOfDone": "Post is live and shared with your network",
    "commonMistakes": ["Being too technical without explaining the business value (reliability)"],
    "resumeLine": null,
    "connectsTo": "Month 5"
  }
};
