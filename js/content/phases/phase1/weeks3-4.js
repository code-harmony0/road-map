export const WEEKS = [
  {
    "id": "w3",
    "num": "WEEK 03",
    "title": "Auth & Security",
    "theme": "Identity & Trust",
    "color": "#f59e0b",
    "boss": {
      "id": "boss-w3",
      "name": "The Security Gatekeeper",
      "challenge": "Implement JWT auth flow (register/login/protected routes) in your API and mobile app",
      "rewardXP": 500,
      "resumeLine": "Implemented secure JWT authentication with refresh tokens, bcrypt hashing, and role-based access control",
      "successCriteria": [
        "Users can register and login via API",
        "Passwords are hashed (bcrypt/Argon2)",
        "Protected routes reject requests without valid JWT",
        "React Native stores token securely and sends it with requests",
        "Refresh token rotation implemented"
      ],
      "howToComplete": [
        "Build /register and /login endpoints",
        "Hash passwords before saving to DB",
        "Create auth middleware to verify JWT",
        "Store token in React Native SecureStore/Keychain",
        "Implement refresh token endpoint"
      ],
      "deliverables": [
        "Auth flow demo video or screenshots",
        "GitHub repo with auth module",
        "Postman collection with auth headers"
      ],
      "passFail": {
        "pass": "Full JWT flow works end-to-end in mobile app",
        "fail": "Plaintext passwords or missing token validation"
      }
    },
    "tasks": [
      {
        "id": "w3-d1",
        "day": "Day 1",
        "time": "3.75h",
        "depth": "Deep",
        "xp": 75,
        "text": "Learn JWT theory: header, payload, signature, expiration",
        "reason": "Auth is non-negotiable for any production system"
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
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build /register and /login with bcrypt password hashing",
        "reason": "Never store plaintext passwords. Ever."
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
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Create auth middleware, protect private routes",
        "reason": "Middleware is how backend developers control access"
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
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Implement refresh tokens and token rotation",
        "reason": "Security best practice; shows senior-level thinking"
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
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Integrate auth flow in React Native (login screen + secure storage)",
        "reason": "End-to-end auth proves full-stack capability"
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
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Add rate limiting (express-rate-limit) and security headers (Helmet)",
        "reason": "Production hardening separates juniors from seniors"
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
        "time": "2.5h",
        "depth": "Action",
        "xp": 25,
        "text": "Record a 60-second demo of register → login → protected data",
        "reason": "Video proof is the strongest portfolio asset"
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
    "title": "System Design Basics",
    "theme": "Thinking in Systems",
    "color": "#8b5cf6",
    "boss": {
      "id": "boss-w4",
      "name": "The Systems Thinker",
      "challenge": "Design and document a scalable architecture for a chat app and optimize your API with indexing",
      "rewardXP": 500,
      "resumeLine": "Applied system design principles (caching, indexing, load balancing) to optimize API performance",
      "successCriteria": [
        "Add database indexes to slow queries",
        "Draw a system architecture diagram (client → API → DB → Cache)",
        "Explain CAP theorem trade-offs in your own words",
        "API response time improves measurably after optimization"
      ],
      "howToComplete": [
        "Identify slow queries using logs or EXPLAIN ANALYZE",
        "Add indexes to foreign keys and search columns",
        "Draw architecture diagram (use Excalidraw or Draw.io)",
        "Write a 1-page doc explaining your design decisions"
      ],
      "deliverables": [
        "Architecture diagram image",
        "Optimization report (before/after query times)",
        "System design blog post or doc"
      ],
      "passFail": {
        "pass": "Optimized API + architecture diagram + written explanation",
        "fail": "No diagram or no measurable performance improvement"
      }
    },
    "tasks": [
      {
        "id": "w4-d1",
        "day": "Day 1",
        "time": "3.75h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study client-server architecture: what happens when you press 'send'",
        "reason": "You must know how data flows before you can design systems"
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
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Learn CAP theorem and database indexing; add indexes to your schema",
        "reason": "Indexing is the #1 performance tool most juniors ignore"
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
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Draw system architecture for your app (mobile → API → DB → Redis)",
        "reason": "Visual communication is a staff+ engineer skill"
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
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Study load balancing and horizontal scaling concepts",
        "reason": "Interviewers ask this for every senior role"
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
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Optimize your slowest query; measure before/after with EXPLAIN",
        "reason": "Data-driven optimization proves engineering maturity"
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
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Write a blog: 'System Design for Mobile Devs: What I Learned in a Week'",
        "reason": "Public writing forces clarity and attracts opportunities"
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
        "time": "2.5h",
        "depth": "Action",
        "xp": 25,
        "text": "Share your architecture diagram on LinkedIn",
        "reason": "Visual posts get 3x more engagement than text"
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
    "objective": "Learn JWT theory: header, payload, signature, expiration",
    "why": "Auth is non-negotiable for any production system. Understanding JWTs is critical for secure cross-service communication.",
    "steps": [
      "Study the structure of a JWT (Header.Payload.Signature).",
      "Understand why JWTs are stateless and how they differ from session cookies.",
      "Learn about signing algorithms (HS256 vs RS256).",
      "Read about common security pitfalls like XSS and CSRF in the context of token storage."
    ],
    "tools": ["jwt.io", "MDN Web Docs"],
    "deliverable": "A clear understanding of JWT mechanics",
    "definitionOfDone": "You can explain how a server verifies a token without looking up a database",
    "commonMistakes": ["Storing sensitive info in the payload (it's only encoded, not encrypted)"],
    "resumeLine": null,
    "connectsTo": "w3-d2"
  },
  "w3-d2": {
    "objective": "Build /register and /login with bcrypt password hashing",
    "why": "Never store plaintext passwords. Ever. Bcrypt is the industry standard for safe password hashing.",
    "steps": [
      "Install bcrypt: `npm install bcrypt`.",
      "Implement a `/register` route that hashes the password before saving to the DB.",
      "Implement a `/login` route that compares the provided password with the stored hash.",
      "Return a JWT on successful login."
    ],
    "tools": ["Bcrypt", "Node.js", "Express"],
    "deliverable": "Secure registration and login endpoints",
    "definitionOfDone": "User passwords in the DB are unreadable hashes, and login returns a valid token",
    "commonMistakes": ["Using a low salt round count", "Forgetting to await the hash function"],
    "resumeLine": "Implemented secure user authentication using Bcrypt for password hashing and salting",
    "connectsTo": "w3-d3"
  },
  "w3-d3": {
    "objective": "Create auth middleware, protect private routes",
    "why": "Middleware is how backend developers control access. It centralizes security logic so you don't repeat yourself.",
    "steps": [
      "Write a `verifyToken` middleware function.",
      "Extract the token from the `Authorization` header (`Bearer <token>`).",
      "Use `jsonwebtoken.verify()` to validate the signature and expiration.",
      "Attach the decoded user ID to the `req` object for use in downstream controllers.",
      "Apply the middleware to a 'private' route (e.g., `GET /profile`)."
    ],
    "tools": ["jsonwebtoken", "Express Middleware"],
    "deliverable": "Functional auth middleware guarding routes",
    "definitionOfDone": "Requests without a valid token receive a 401 Unauthorized response",
    "commonMistakes": ["Hardcoding the JWT secret in code (use .env)"],
    "resumeLine": "Designed and implemented custom Express middleware for JWT validation and route protection",
    "connectsTo": "w3-d4"
  },
  "w3-d4": {
    "objective": "Implement refresh tokens and token rotation",
    "why": "Security best practice; shows senior-level thinking. Short-lived access tokens + refresh tokens balance security and UX.",
    "steps": [
      "Set access token expiration to 15 minutes.",
      "Create a `/refresh` endpoint that accepts a long-lived refresh token.",
      "Store refresh tokens in the database to allow for manual revocation.",
      "Implement 'rotation': issue a new refresh token every time the old one is used."
    ],
    "tools": ["Node.js", "PostgreSQL"],
    "deliverable": "Robust token management system",
    "definitionOfDone": "Access tokens expire quickly, but users stay logged in via refresh tokens unless revoked",
    "commonMistakes": ["Not checking if the refresh token was previously stolen/used"],
    "resumeLine": "Architected a secure token lifecycle strategy with refresh token rotation and revocation",
    "connectsTo": "w3-d5"
  },
  "w3-d5": {
    "objective": "Integrate auth flow in React Native (login screen + secure storage)",
    "why": "End-to-end auth proves full-stack capability. Mobile token management is a specialized skill.",
    "steps": [
      "Build a simple Login and Register screen in React Native.",
      "Install `expo-secure-store` or `react-native-keychain`.",
      "Save the JWT securely after a successful login.",
      "Add the token to the headers of all subsequent API calls.",
      "Handle 401 errors by redirecting the user back to the login screen."
    ],
    "tools": ["React Native", "SecureStore", "Axios Interceptors"],
    "deliverable": "Mobile auth UI integrated with the backend",
    "definitionOfDone": "You can sign up on your phone, log in, and see data restricted to your user",
    "commonMistakes": ["Storing tokens in AsyncStorage (not secure for secrets)"],
    "resumeLine": "Implemented secure mobile token storage and automated auth headers using Axios interceptors",
    "connectsTo": "boss-w3"
  },
  "w3-d6": {
    "objective": "Add rate limiting and security headers (Helmet)",
    "why": "Production hardening separates juniors from seniors. Protecting against brute-force attacks and common web vulnerabilities is mandatory.",
    "steps": [
      "Install `express-rate-limit` and `helmet`.",
      "Apply rate limiting to the `/login` and `/register` routes.",
      "Use Helmet to set secure HTTP headers (hide X-Powered-By, etc.).",
      "Verify headers are set using browser dev tools or curl."
    ],
    "tools": ["Helmet", "Rate-limit"],
    "deliverable": "A hardened production-ready API",
    "definitionOfDone": "API is protected against basic DDoS/brute-force and follows security header best practices",
    "commonMistakes": ["Setting rate limits too low (blocking real users)"],
    "resumeLine": "Hardened API security using Helmet.js and implemented rate-limiting to prevent brute-force attacks",
    "connectsTo": "w3-d7"
  },
  "w3-d7": {
    "objective": "Record a 60-second demo of register → login → protected data",
    "why": "Video proof is the strongest portfolio asset. It proves your code actually works and you can build a complete product.",
    "steps": [
      "Screen record your mobile emulator and terminal logs.",
      "Show the registration process.",
      "Show the login and the token being saved.",
      "Show the 'private' data being fetched and displayed.",
      "Share on LinkedIn or your portfolio."
    ],
    "tools": ["Loom", "QuickTime"],
    "deliverable": "Demo video of full-stack auth",
    "definitionOfDone": "The video clearly demonstrates a successful auth cycle",
    "commonMistakes": ["Low-resolution video", "No explanation of what is happening"],
    "resumeLine": null,
    "connectsTo": "w4-d1"
  },
  "w4-d1": {
    "objective": "Study client-server architecture: what happens when you press 'send'",
    "why": "You must know how data flows before you can design systems. Understanding the layers of the stack is fundamental.",
    "steps": [
      "Trace a request from mobile tap to DB write and back to UI update.",
      "Learn about DNS, Load Balancers, Web Servers, and Database layers.",
      "Understand the difference between Monolithic and Microservices architectures.",
      "Study synchronous vs asynchronous communication."
    ],
    "tools": ["MDN", "System Design Primer"],
    "deliverable": "Mental map of the full request lifecycle",
    "definitionOfDone": "You can describe every component a request touches in a modern web app",
    "commonMistakes": ["Thinking only about the code and ignoring the network/infrastructure"],
    "resumeLine": null,
    "connectsTo": "w4-d2"
  },
  "w4-d2": {
    "objective": "Learn CAP theorem and database indexing; add indexes to your schema",
    "why": "Indexing is the #1 performance tool most juniors ignore. CAP theorem is the cornerstone of distributed system design.",
    "steps": [
      "Understand Consistency, Availability, and Partition Tolerance.",
      "Learn how B-Tree indexes work in PostgreSQL.",
      "Identify the most used columns in your WHERE clauses.",
      "Add indexes via Prisma: `@@index([columnName])`.",
      "Verify index usage with `EXPLAIN`."
    ],
    "tools": ["PostgreSQL", "Prisma"],
    "deliverable": "Optimized database schema with indexes",
    "definitionOfDone": "Slow queries use 'Index Scan' instead of 'Seq Scan' in the query plan",
    "commonMistakes": ["Indexing every single column (slows down writes)"],
    "resumeLine": "Optimized database performance by implementing strategic indexing based on query patterns",
    "connectsTo": "w4-d3"
  },
  "w4-d3": {
    "objective": "Draw system architecture for your app (mobile → API → DB → Redis)",
    "why": "Visual communication is a staff+ engineer skill. A diagram is worth 1000 lines of code in a design review.",
    "steps": [
      "Map out your existing project components.",
      "Include the network boundary and the 'cloud' (Railway/Render).",
      "Show how Redis sits between the API and the DB.",
      "Label each connection with the protocol used (HTTP, TCP, etc.)."
    ],
    "tools": ["Excalidraw", "Draw.io"],
    "deliverable": "Professional architecture diagram",
    "definitionOfDone": "The diagram clearly represents the current state of your system",
    "commonMistakes": ["Over-complicating the diagram with too many details"],
    "resumeLine": "Designed and documented end-to-end system architectures for scalable mobile applications",
    "connectsTo": "w4-d4"
  },
  "w4-d4": {
    "objective": "Study load balancing and horizontal scaling concepts",
    "why": "Interviewers ask this for every senior role. Knowing how to grow a system from 1 server to 100 is essential.",
    "steps": [
      "Learn about Round Robin and Least Connections algorithms.",
      "Understand the difference between Vertical and Horizontal scaling.",
      "Study 'Sticky Sessions' and why they are usually avoided in modern apps.",
      "Learn how a Load Balancer performs health checks on servers."
    ],
    "tools": ["NGINX Docs", "AWS ELB Guides"],
    "deliverable": "Solid understanding of scaling strategies",
    "definitionOfDone": "You can explain how to handle 10x traffic without buying a bigger server",
    "commonMistakes": ["Thinking scaling is just 'adding more servers' without a balancer"],
    "resumeLine": null,
    "connectsTo": "w4-d5"
  },
  "w4-d5": {
    "objective": "Optimize your slowest query; measure before/after with EXPLAIN",
    "why": "Data-driven optimization proves engineering maturity. Don't guess where the bottleneck is—measure it.",
    "steps": [
      "Use `EXPLAIN ANALYZE` in SQL to find the execution time of a query.",
      "Identify if the slowness is due to a missing index or a poor JOIN.",
      "Apply the fix (index, query rewrite, or caching).",
      "Re-run `EXPLAIN ANALYZE` and document the speedup percentage."
    ],
    "tools": ["PostgreSQL", "DataGrip"],
    "deliverable": "Query optimization report",
    "definitionOfDone": "A measurable speedup is achieved and documented with raw data",
    "commonMistakes": ["Optimizing queries that are already fast"],
    "resumeLine": "Achieved a 5x reduction in query latency through execution plan analysis and query optimization",
    "connectsTo": "boss-w4"
  },
  "w4-d6": {
    "objective": "Write a blog: 'System Design for Mobile Devs: What I Learned in a Week'",
    "why": "Public writing forces clarity and attracts opportunities. It demonstrates your ability to learn new, complex domains.",
    "steps": [
      "Summarize the week: CAP theorem, indexing, and drawing diagrams.",
      "Explain a technical concept simply for other mobile developers.",
      "Embed your architecture diagram in the post.",
      "Publish on a developer platform."
    ],
    "tools": ["Medium", "Hashnode"],
    "deliverable": "One technical blog post",
    "definitionOfDone": "Post is live and shared",
    "commonMistakes": ["Writing only for experts (keep it accessible to your peers)"],
    "resumeLine": null,
    "connectsTo": "w4-d7"
  },
  "w4-d7": {
    "objective": "Share your architecture diagram on LinkedIn",
    "why": "Visual posts get 3x more engagement than text. It's a quick way to show you are 'thinking bigger' than just UI code.",
    "steps": [
      "Upload your Excalidraw image.",
      "Write a short caption about the importance of visualizing the backend.",
      "Ask a question to your network to spark engagement.",
      "Engage with the comments."
    ],
    "tools": ["LinkedIn"],
    "deliverable": "One high-engagement LinkedIn post",
    "definitionOfDone": "Diagram is shared with your professional network",
    "commonMistakes": ["Not adding a descriptive caption"],
    "resumeLine": null,
    "connectsTo": "w5-d1"
  }
};
