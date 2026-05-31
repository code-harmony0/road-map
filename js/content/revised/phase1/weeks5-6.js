export const WEEKS = [
  {
    "id": "w5",
    "num": "WEEK 05",
    "title": "System Design Fundamentals",
    "theme": "Architecture Thinking",
    "color": "#ef4444",
    "boss": {
      "id": "boss-w5",
      "name": "The Systems Thinker",
      "challenge": "Design a chat app architecture and explain every decision with trade-offs",
      "rewardXP": 500,
      "resumeLine": "Demonstrated system design competency explaining caching strategies, database scaling, and API design trade-offs",
      "successCriteria": [
        "Architecture diagram with all layers (client → CDN → LB → API → DB → Cache)",
        "Written trade-off analysis for 3+ decisions",
        "Can explain CAP theorem with real example",
        "Can defend SQL vs NoSQL choice",
        "Can explain caching strategy",
        "15-minute mock presentation recorded"
      ],
      "howToComplete": [
        "Read 'Designing Data-Intensive Applications' Ch 1–3 (or summary)",
        "Pick one problem: URL shortener OR chat app",
        "Draw architecture: every box, every arrow, every protocol",
        "Write 1-page doc: 'Why I chose X over Y' for each major decision",
        "Practice explaining out loud for 15 minutes",
        "Record yourself, review filler words and clarity"
      ],
      "deliverables": [
        "Architecture diagram (Excalidraw/Figma/Draw.io)",
        "Written design document (3+ pages)",
        "Trade-off analysis doc",
        "15-minute mock recording",
        "Flashcards for 20 system design terms"
      ],
      "passFail": {
        "pass": "Can whiteboard and defend every decision without notes",
        "fail": "Memorized diagram without understanding why"
      }
    },
    "tasks": [
      {
        "id": "w5-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study CAP theorem: consistency, availability, partition tolerance. Real-world examples where each matters.",
        "reason": "CAP is the foundation of every distributed system interview question."
      },
      {
        "id": "w5-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w5-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Study load balancing: round-robin, least connections, IP hash. When to use each.",
        "reason": "Load balancers are the traffic cops of the internet. You must understand them."
      },
      {
        "id": "w5-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Study caching: CDN, application cache, database cache, cache invalidation strategies",
        "reason": "Caching is the #1 performance tool. 'There are only two hard things in computer science: cache invalidation and naming things.'"
      },
      {
        "id": "w5-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w5-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Study database scaling: vertical vs horizontal, read replicas, sharding, indexing",
        "reason": "Database is always the bottleneck. Scaling it is the senior engineer's job."
      },
      {
        "id": "w5-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Design URL shortener: draw full architecture, write trade-off doc for each layer",
        "reason": "URL shortener is the 'hello world' of system design. Master it completely."
      },
      {
        "id": "w5-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w5-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Design chat app: WebSockets vs SSE, message storage, read receipts, presence",
        "reason": "Chat tests real-time knowledge. Most mobile devs fail here."
      },
      {
        "id": "w5-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Record 15-minute mock: explain URL shortener architecture with no notes. Review recording.",
        "reason": "Communication is 50% of the interview. Record yourself. It's painful but necessary."
      },
      {
        "id": "w5-d7-micro",
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
    "id": "w6",
    "num": "WEEK 06",
    "title": "API Design Patterns",
    "theme": "Backend Craftsmanship",
    "color": "#06b6d4",
    "boss": {
      "id": "boss-w6",
      "name": "The API Craftsman",
      "challenge": "Refactor one module into clean layered architecture and add advanced patterns",
      "rewardXP": 500,
      "resumeLine": "Refactored monolithic API into Controller-Service-Repository pattern with dependency injection and middleware",
      "successCriteria": [
        "One module refactored into 3 layers: Controller → Service → Repository",
        "Dependency injection used (no new Service() in controllers)",
        "Middleware for auth, logging, error handling",
        "Input validation with Zod or class-validator",
        "Rate limiting implemented",
        "API documentation with Swagger/OpenAPI"
      ],
      "howToComplete": [
        "Pick your messiest module",
        "Extract business logic into Service layer",
        "Extract data access into Repository layer",
        "Add middleware chain",
        "Add validation schemas",
        "Generate Swagger docs",
        "Verify all tests still pass"
      ],
      "deliverables": [
        "Before/after code comparison",
        "Architecture diagram of layers",
        "Swagger docs URL",
        "All tests passing"
      ],
      "passFail": {
        "pass": "Clean separation, no logic in controllers, tests pass, docs generated",
        "fail": "Still spaghetti code with business logic scattered everywhere"
      }
    },
    "tasks": [
      {
        "id": "w6-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study clean architecture: controllers handle HTTP, services handle business logic, repositories handle data",
        "reason": "Separation of concerns is what makes code maintainable at scale."
      },
      {
        "id": "w6-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w6-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Refactor one module: extract all business logic into Service class",
        "reason": "Services are testable, reusable, and independent of HTTP framework."
      },
      {
        "id": "w6-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Extract data access into Repository class, inject into Service",
        "reason": "Repositories abstract the database. Swap PostgreSQL for MongoDB without touching business logic."
      },
      {
        "id": "w6-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w6-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add middleware: auth verification, request logging, global error handler",
        "reason": "Middleware is the backbone of Express/NestJS. Master it."
      },
      {
        "id": "w6-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add input validation with Zod: validate every request body, query, param",
        "reason": "Bad input is the #1 cause of production crashes. Validate everything."
      },
      {
        "id": "w6-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w6-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Generate Swagger/OpenAPI docs from your routes and validation schemas",
        "reason": "Docs are not optional. Swagger auto-generation saves hours."
      },
      {
        "id": "w6-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Blog post: 'From Spaghetti to Layered: Refactoring a NestJS API'",
        "reason": "Refactoring stories show you improve legacy code, not just write greenfield."
      },
      {
        "id": "w6-d7-micro",
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
  "w5-d1": {
    "objective": "Understand the core trade-offs of distributed systems via the CAP Theorem",
    "why": "System design interviews focus on trade-offs. CAP is the definitive framework for explaining why a system is built a certain way.",
    "steps": [
      "Define Consistency, Availability, and Partition Tolerance.",
      "Identify why a system cannot have all three in the presence of a network partition.",
      "Categorize common databases: CP (HBase, MongoDB) vs AP (Cassandra, DynamoDB).",
      "Draft 3 real-world scenarios where you would prioritize A over C (and vice-versa)."
    ],
    "tools": ["Whiteboard", "Designing Data-Intensive Applications"],
    "deliverable": "Summary doc of CAP theorem with 3 case studies",
    "definitionOfDone": "You can explain the 'Picking 2' concept to a non-technical peer",
    "commonMistakes": ["Thinking 'Consistency' means 'Always correct' (it means 'Atomic read/write')"],
    "resumeLine": null,
    "connectsTo": "w5-d2"
  },
  "w5-d2": {
    "objective": "Master the mechanics of high-availability traffic management",
    "why": "Load balancing is the first line of defense against system failure and the primary tool for horizontal scaling.",
    "steps": [
      "Compare Layer 4 (Transport) vs Layer 7 (Application) load balancing.",
      "Study algorithms: Weighted Round Robin, Sticky Sessions, Least Bandwidth.",
      "Understand Health Checks and how LBs remove failing nodes.",
      "Learn about Global Server Load Balancing (GSLB) for multi-region setups."
    ],
    "tools": ["NGINX", "HAProxy", "AWS ELB Documentation"],
    "deliverable": "Comparison matrix of load balancing strategies",
    "definitionOfDone": "You can justify the choice of a specific LB algorithm for a stateful vs stateless app",
    "commonMistakes": ["Ignoring the 'Single Point of Failure' problem of the LB itself"],
    "resumeLine": "Architected high-availability systems using advanced load balancing and traffic management patterns",
    "connectsTo": "w5-d3"
  },
  "w5-d3": {
    "objective": "Optimize system performance through multi-layered caching strategies",
    "why": "Caching is the most effective way to reduce latency and database load. Invalidation is where most engineers fail.",
    "steps": [
      "Learn Write-through, Write-around, and Write-back caching.",
      "Study Cache Eviction policies: LRU (Least Recently Used), LFU, FIFO.",
      "Understand Content Delivery Networks (CDNs) for static asset acceleration.",
      "Identify 'Hot Keys' in your project and design a caching layer for them."
    ],
    "tools": ["Redis", "Cloudflare", "Node-cache"],
    "deliverable": "Multi-tier caching architecture plan",
    "definitionOfDone": "You can explain the 'Thundering Herd' problem and how to prevent it",
    "commonMistakes": ["Caching data forever (missing TTLs)", "Ignoring the 'Stale Data' problem"],
    "resumeLine": "Improved system response times by 60% through multi-tier caching and optimized invalidation logic",
    "connectsTo": "w5-d4"
  },
  "w5-d4": {
    "objective": "Design database architectures that scale with user growth",
    "why": "Vertical scaling has a hard limit. Understanding horizontal patterns (sharding, replication) is mandatory for senior roles.",
    "steps": [
      "Compare Read Replicas vs Multi-leader replication.",
      "Study Sharding keys and how to avoid 'Hot Partitions'.",
      "Learn about Database Proxying and Connection Pooling (e.g., PgBouncer).",
      "Analyze when to move from a single DB to a microservices-based polyglot persistence model."
    ],
    "tools": ["PostgreSQL Sharding", "Amazon Aurora", "Vitess"],
    "deliverable": "Database scaling roadmap for 1M+ users",
    "definitionOfDone": "You can draw a sharded database architecture and explain the routing logic",
    "commonMistakes": ["Sharding too early (premature optimization)"],
    "resumeLine": "Scalability expert with experience in database sharding, replication, and performance tuning",
    "connectsTo": "w5-d5"
  },
  "w5-d5": {
    "objective": "Design a globally scalable URL Shortening service",
    "why": "This problem tests your ability to handle read-heavy workloads, coordinate unique ID generation, and choose storage.",
    "steps": [
      "Clarify requirements: how many new URLs/day? what is the retention period?",
      "Design ID generation: Base62 encoding vs Snowflake IDs.",
      "Select storage: NoSQL (Key-Value) for redirects vs SQL for management.",
      "Add caching: How to handle 100k+ requests/sec for viral links?",
      "Draw full architecture in Excalidraw."
    ],
    "tools": ["Excalidraw", "Loom"],
    "deliverable": "Complete URL shortener design doc and diagram",
    "definitionOfDone": "The design handles 1B+ URLs and provides sub-50ms redirect latency",
    "commonMistakes": ["Using a slow auto-increment ID for a distributed system"],
    "resumeLine": "Designed high-throughput distributed systems capable of handling 100K+ requests per second",
    "connectsTo": "w5-d6"
  },
  "w5-d6": {
    "objective": "Design a real-time messaging system with global presence",
    "why": "Chat apps reveal your understanding of persistent connections, message ordering, and offline synchronization.",
    "steps": [
      "Compare WebSockets vs SSE vs Long Polling for mobile battery efficiency.",
      "Design the message storage: Wide-column (Cassandra) vs Relational.",
      "Implement a 'Presence' service (who is online?).",
      "Handle 'Fan-out' for large group chats.",
      "Address multi-device sync (how does phone see what desktop sent?)."
    ],
    "tools": ["Socket.io", "Cassandra", "Redis Pub/Sub"],
    "deliverable": "Real-time system architecture blueprint",
    "definitionOfDone": "Architecture handles message delivery guarantees and 'last seen' status at scale",
    "commonMistakes": ["Ignoring message ordering issues in distributed environments"],
    "resumeLine": "Architected real-time communication platforms supporting persistent connections and complex sync logic",
    "connectsTo": "w5-d7"
  },
  "w5-d7": {
    "objective": "Perfect your technical communication and architectural storytelling",
    "why": "If you can't explain it, you don't know it. Communication is the primary metric for Staff-level interviews.",
    "steps": [
      "Set a 15-minute timer.",
      "Record a walkthrough of your URL Shortener design.",
      "Review the recording for: confidence, technical depth, and 'filler' words.",
      "Identify 3 areas where your explanation was 'fuzzy' and refine them.",
      "Write a 'Self-Correction' list."
    ],
    "tools": ["Loom", "Zoom"],
    "deliverable": "Self-critique report and polished mock recording",
    "definitionOfDone": "You can deliver a 15-minute design walkthrough with zero 'ums' and clear trade-offs",
    "commonMistakes": ["Being too academic; focus on the *engineering* decisions"],
    "resumeLine": null,
    "connectsTo": "Week 6"
  },
  "w6-d1": {
    "objective": "Adopt a 'Clean Architecture' mindset for backend development",
    "why": "Separating concerns into layers makes your code easy to test, swap, and scale without breaking unrelated parts.",
    "steps": [
      "Learn the roles: Controllers (Input), Services (Business), Repositories (Data).",
      "Identify 'Logic Leaks' (e.g., database queries in your controllers).",
      "Draft the interface contracts for your new layers.",
      "Map out the data flow from HTTP request to DB response."
    ],
    "tools": ["SOLID Principles", "TypeScript Interfaces"],
    "deliverable": "Refactoring map for your messiest module",
    "definitionOfDone": "You can explain why a Controller should never know about your Database schema",
    "commonMistakes": ["Putting business logic in the Repository layer"],
    "resumeLine": "Mastered clean architecture principles, ensuring high maintainability and testability of backend systems",
    "connectsTo": "w6-d2"
  },
  "w6-d2": {
    "objective": "Decouple business rules from the delivery mechanism (HTTP/API)",
    "why": "Services are the 'Brain' of your app. They should be testable without running a server.",
    "steps": [
      "Extract all validation and logic from a controller method.",
      "Create a Service class with a clear method signature.",
      "Move all conditional logic and data transformation to the Service.",
      "Write a unit test for the Service using mocks for data access."
    ],
    "tools": ["NestJS Services", "Jest Mocks"],
    "deliverable": "Pure logic Service class with 100% test coverage",
    "definitionOfDone": "The Service can be called by a CLI tool or an API with no changes",
    "commonMistakes": ["Importing `req` or `res` objects into the Service layer"],
    "resumeLine": "Decoupled business logic from delivery frameworks, enabling modular and portable services",
    "connectsTo": "w6-d3"
  },
  "w6-d3": {
    "objective": "Abstract the persistence layer using the Repository pattern",
    "why": "Repositories allow you to swap database engines (e.g., SQLite to Postgres) without changing a single line of business logic.",
    "steps": [
      "Create a Repository class that wraps your Prisma/DB calls.",
      "Use Dependency Injection to provide the Repository to the Service.",
      "Implement standardized 'Find', 'Save', 'Delete' methods.",
      "Ensure the Repository only returns 'Domain Objects', not raw DB rows."
    ],
    "tools": ["Prisma", "NestJS Injectable"],
    "deliverable": "Clean data access layer with DI integration",
    "definitionOfDone": "Business logic uses the Repository interface instead of raw DB clients",
    "commonMistakes": ["Returning raw Prisma/Mongoose objects to the Controller layer"],
    "resumeLine": "Implemented advanced Repository patterns with Dependency Injection, optimizing database portability",
    "connectsTo": "w6-d4"
  },
  "w6-d4": {
    "objective": "Build a robust middleware chain for cross-cutting concerns",
    "why": "Logging, Auth, and Error handling should happen automatically. Middleware keeps your business code clean.",
    "steps": [
      "Implement a Global Error Filter to catch all exceptions and return clean JSON.",
      "Add a Request Logger that logs method, path, and execution time.",
      "Create an Auth Guard to protect routes based on JWTs.",
      "Test the chain by triggering different failure modes."
    ],
    "tools": ["NestJS Middleware/Guards", "Winston Logger"],
    "deliverable": "Automated middleware pipeline for the API",
    "definitionOfDone": "Every request is logged and every error is formatted consistently without manual try/catches",
    "commonMistakes": ["Scattering `console.log` and `try/catch` inside every route"],
    "resumeLine": "Developed comprehensive middleware frameworks for automated logging, authentication, and error handling",
    "connectsTo": "w6-d5"
  },
  "w6-d5": {
    "objective": "Harden API security through strict schema-based input validation",
    "why": "Unvalidated input is the root cause of most security vulnerabilities. Zod provides type-safety and runtime validation.",
    "steps": [
      "Define Zod schemas for every POST and PUT body.",
      "Integrate validation into the middleware/pipe layer.",
      "Ensure the API returns clear 400 Bad Request errors with field-specific feedback.",
      "Verify that malicious or malformed JSON is rejected before reaching your logic."
    ],
    "tools": ["Zod", "class-validator", "Pipes"],
    "deliverable": "Zero-trust input validation layer",
    "definitionOfDone": "API rejects invalid types, missing fields, and out-of-range values automatically",
    "commonMistakes": ["Validating on the frontend only (never trust the client)"],
    "resumeLine": "Enforced zero-trust security through schema-based input validation and strict runtime type checking",
    "connectsTo": "w6-d6"
  },
  "w6-d6": {
    "objective": "Automate technical documentation for internal and external consumers",
    "why": "Stale documentation is worse than no documentation. Swagger ensures your docs are always in sync with your code.",
    "steps": [
      "Install Swagger UI into your API.",
      "Add decorators to your controllers and DTOs to describe endpoints.",
      "Configure 'Auth' headers in the Swagger UI.",
      "Export the `openapi.json` file for frontend consumption."
    ],
    "tools": ["Swagger", "OpenAPI 3.0"],
    "deliverable": "Interactive API Documentation portal",
    "definitionOfDone": "A new developer can understand and test every endpoint without looking at the source code",
    "commonMistakes": ["Not documenting error responses (401, 403, 404)"],
    "resumeLine": "Established professional API documentation standards using Swagger/OpenAPI for multi-team integration",
    "connectsTo": "w6-d7"
  },
  "w6-d7": {
    "objective": "Publish a technical refactoring case study to build authority",
    "why": "Hiring managers look for 'Refactoring' skills because it shows you can work on existing codebases, not just start new ones.",
    "steps": [
      "Draft a post: 'Why I moved from a monolith to a layered architecture'.",
      "Include a 'Before vs After' architecture diagram.",
      "Share your Zod validation snippets.",
      "Discuss the increase in testability and developer velocity."
    ],
    "tools": ["Medium", "LinkedIn"],
    "deliverable": "One high-authority refactoring blog post",
    "definitionOfDone": "Post is live and demonstrating your backend craftsmanship to your network",
    "commonMistakes": ["Being too critical of your 'Before' code; frame it as a natural evolution"],
    "resumeLine": null,
    "connectsTo": "Week 7"
  }
};
