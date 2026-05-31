export const WEEKS = [
  {
    "id": "w1",
    "num": "WEEK 01",
    "title": "Backend Foundations",
    "theme": "\"Backend-First\" Identity Shift",
    "color": "#3b82f6",
    "boss": {
      "id": "boss-w1",
      "name": "The API Builder",
      "challenge": "Build and deploy a REST API with 4 CRUD endpoints and connect it to your React Native app",
      "rewardXP": 500,
      "resumeLine": "Built and deployed a production-ready Node.js REST API consumed by a React Native mobile client",
      "successCriteria": [
        "API has GET, POST, PUT, DELETE endpoints",
        "API is deployed publicly (Railway/Render/AWS)",
        "React Native app successfully fetches data from deployed API",
        "README documents how to run the project"
      ],
      "howToComplete": [
        "Complete all 7 daily tasks",
        "Test every endpoint with Postman or Thunder Client",
        "Deploy the API (use Railway or Render for free tier)",
        "Make a real network call from your React Native app to the live URL",
        "Push code to GitHub with a clean README"
      ],
      "deliverables": [
        "Live API URL",
        "GitHub repo with clean code",
        "React Native branch with network integration",
        "README with setup instructions"
      ],
      "passFail": {
        "pass": "Live API + mobile integration + GitHub repo",
        "fail": "API only runs on localhost or mobile doesn't connect"
      }
    },
    "tasks": [
      {
        "id": "w1-d1",
        "day": "Day 1",
        "time": "3.75h",
        "depth": "Deep",
        "xp": 75,
        "text": "Install Node.js, init Express project, build a 'Hello World' API",
        "reason": "You must understand the request/response cycle before anything else"
      },
      {
        "id": "w1-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w1-d2",
        "day": "Day 2",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build GET and POST endpoints with JSON body parsing",
        "reason": "Core of every API you will ever build"
      },
      {
        "id": "w1-d2-micro",
        "day": "Day 2",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w1-d3",
        "day": "Day 3",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build PUT and DELETE endpoints, add route-level error handling",
        "reason": "Full CRUD is the minimum viable backend skill"
      },
      {
        "id": "w1-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w1-d4",
        "day": "Day 4",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Connect React Native to local API using fetch/axios",
        "reason": "Proves you understand client-server architecture"
      },
      {
        "id": "w1-d4-micro",
        "day": "Day 4",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w1-d5",
        "day": "Day 5",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add input validation (Zod) and centralized error middleware",
        "reason": "Production safety — bad input crashes APIs"
      },
      {
        "id": "w1-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w1-d6",
        "day": "Day 6",
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Deploy API to Railway or Render, verify live URL works",
        "reason": "If it's not deployed, it doesn't exist to employers"
      },
      {
        "id": "w1-d6-micro",
        "day": "Day 6",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w1-d7",
        "day": "Day 7",
        "time": "2.5h",
        "depth": "Action",
        "xp": 25,
        "text": "Post on LinkedIn: 'I built my first backend API this week'",
        "reason": "Public accountability + recruiters notice backend pivots"
      },
      {
        "id": "w1-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      }
    ]
  },
  {
    "id": "w2",
    "num": "WEEK 02",
    "title": "Database Mastery",
    "theme": "Data Layer Foundations",
    "color": "#10b981",
    "boss": {
      "id": "boss-w2",
      "name": "The Data Architect",
      "challenge": "Add PostgreSQL + Redis to your API with proper schema design and caching",
      "rewardXP": 500,
      "resumeLine": "Designed relational schemas in PostgreSQL and implemented Redis caching for sub-100ms reads",
      "successCriteria": [
        "PostgreSQL database connected to API",
        "At least 2 tables with a foreign key relationship",
        "Redis caching layer implemented on at least 1 endpoint",
        "API queries use JOINs, not N+1 loops"
      ],
      "howToComplete": [
        "Set up PostgreSQL locally (Docker or native)",
        "Design schema with at least 2 related tables",
        "Use an ORM (Prisma or Sequelize) or raw SQL",
        "Implement Redis and cache a heavy query",
        "Verify cache hit improves response time"
      ],
      "deliverables": [
        "Schema diagram or migration files",
        "GitHub repo with DB integration",
        "Before/after timing for cached endpoint"
      ],
      "passFail": {
        "pass": "Working DB + Redis + relational schema",
        "fail": "Using JSON files or in-memory arrays instead of a real database"
      }
    },
    "tasks": [
      {
        "id": "w2-d1",
        "day": "Day 1",
        "time": "3.75h",
        "depth": "Deep",
        "xp": 75,
        "text": "Install PostgreSQL, learn basic SQL: CREATE TABLE, INSERT, SELECT",
        "reason": "You cannot build AI systems without understanding data storage"
      },
      {
        "id": "w2-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w2-d2",
        "day": "Day 2",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Design schema with relationships, write JOIN queries",
        "reason": "Relational data modeling is a core architecture skill"
      },
      {
        "id": "w2-d2-micro",
        "day": "Day 2",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w2-d3",
        "day": "Day 3",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Integrate ORM (Prisma), write migrations, seed data",
        "reason": "ORMs are industry standard; raw SQL alone is too slow to maintain"
      },
      {
        "id": "w2-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w2-d4",
        "day": "Day 4",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Refactor Week 1 endpoints to use real database queries",
        "reason": "Persisting data is what separates toys from products"
      },
      {
        "id": "w2-d4-micro",
        "day": "Day 4",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w2-d5",
        "day": "Day 5",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Set up Redis, cache the most-queried endpoint",
        "reason": "Caching is required knowledge for system design interviews"
      },
      {
        "id": "w2-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w2-d6",
        "day": "Day 6",
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Write a blog post: 'SQL for Mobile Developers — What I Learned'",
        "reason": "Teaching solidifies learning + builds authority"
      },
      {
        "id": "w2-d6-micro",
        "day": "Day 6",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      },
      {
        "id": "w2-d7",
        "day": "Day 7",
        "time": "2.5h",
        "depth": "Action",
        "xp": 25,
        "text": "Update LinkedIn featured section with your GitHub repo",
        "reason": "Recruiters check featured links before messaging you"
      },
      {
        "id": "w2-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: Linux CLI (grep, curl, ssh, vim)",
        "reason": "CLI proficiency is a foundational backend skill"
      }
    ]
  }
];

export const DETAILS = {
  "w1-d1": {
    "objective": "Install Node.js, init Express project, build a 'Hello World' API",
    "why": "You must understand the request/response cycle before anything else. It's the atomic unit of the web.",
    "steps": [
      "Install Node.js (v20+) and npm.",
      "Run `npm init -y` in a new directory.",
      "Install express: `npm install express`.",
      "Create `index.js`, setup a basic server listening on port 3000.",
      "Create a GET '/' route that returns 'Hello World'.",
      "Test with `curl localhost:3000` or in a browser."
    ],
    "tools": ["Node.js", "npm", "Express", "VS Code"],
    "deliverable": "A running local server returning JSON",
    "definitionOfDone": "Server starts without errors and returns the expected string on '/'",
    "commonMistakes": ["Forgetting to call app.listen()", "Using the wrong port"],
    "resumeLine": null,
    "connectsTo": "w1-d2"
  },
  "w1-d2": {
    "objective": "Build GET and POST endpoints with JSON body parsing",
    "why": "The core of every API you will ever build involves reading and creating data.",
    "steps": [
      "Add `express.json()` middleware to handle POST bodies.",
      "Create an in-memory array to simulate a database.",
      "Implement `GET /items` to return the array.",
      "Implement `POST /items` to add a new item to the array.",
      "Test with Postman or Thunder Client by sending a JSON body."
    ],
    "tools": ["Express", "Postman", "Thunder Client"],
    "deliverable": "Working GET and POST endpoints",
    "definitionOfDone": "You can send data via POST and see it immediately reflected in the next GET call",
    "commonMistakes": ["Missing express.json() middleware", "Not validating that req.body exists"],
    "resumeLine": null,
    "connectsTo": "w1-d3"
  },
  "w1-d3": {
    "objective": "Build PUT and DELETE endpoints, add route-level error handling",
    "why": "Full CRUD is the minimum viable backend skill. Managing the full lifecycle of data is essential.",
    "steps": [
      "Implement `PUT /items/:id` to update an existing item by index or ID.",
      "Implement `DELETE /items/:id` to remove an item.",
      "Add 404 handling if an item ID is not found.",
      "Test the full CRUD flow: Create → Read → Update → Delete."
    ],
    "tools": ["Express", "Postman"],
    "deliverable": "Full CRUD functionality for a local resource",
    "definitionOfDone": "All 4 HTTP methods work correctly and handle missing IDs gracefully",
    "commonMistakes": ["Not converting :id string to a number", "Returning 200 for missing resources"],
    "resumeLine": "Implemented RESTful CRUD patterns with appropriate HTTP status codes and error handling",
    "connectsTo": "w1-d4"
  },
  "w1-d4": {
    "objective": "Connect React Native to local API using fetch/axios",
    "why": "Proves you understand client-server architecture. This is where your mobile skills meet your new backend skills.",
    "steps": [
      "Open an existing React Native project.",
      "Install axios or use native fetch.",
      "Create a simple list UI to display items from the API.",
      "Use `useEffect` to fetch data on mount.",
      "Use your local machine's IP address (not 'localhost') to connect from a real device or emulator."
    ],
    "tools": ["React Native", "Axios/Fetch", "Local IP Config"],
    "deliverable": "React Native screen displaying data from your local Node.js server",
    "definitionOfDone": "Data from the backend is visible in the mobile UI",
    "commonMistakes": ["Using 'localhost' in the URL (mobile can't see it)", "Android cleartext traffic issues"],
    "resumeLine": null,
    "connectsTo": "boss-w1"
  },
  "w1-d5": {
    "objective": "Add input validation (Zod) and centralized error middleware",
    "why": "Production safety — bad input crashes APIs. Clean code requires centralized error handling.",
    "steps": [
      "Install zod: `npm install zod`.",
      "Define a schema for your POST/PUT bodies.",
      "Create a validation middleware that returns 400 if validation fails.",
      "Implement a centralized error handling middleware: `(err, req, res, next) => { ... }`.",
      "Verify that sending invalid JSON returns a clean error message."
    ],
    "tools": ["Zod", "Express Middleware"],
    "deliverable": "Hardened API with validation gates",
    "definitionOfDone": "Invalid requests are rejected with 400 before hitting controller logic",
    "commonMistakes": ["Not calling next(err) in async routes", "Vague error messages"],
    "resumeLine": "Implemented strict input validation using Zod and centralized error handling middleware",
    "connectsTo": "w1-d6"
  },
  "w1-d6": {
    "objective": "Deploy API to Railway or Render, verify live URL works",
    "why": "If it's not deployed, it doesn't exist to employers. Public availability is the ultimate proof of work.",
    "steps": [
      "Create an account on Railway.app or Render.com.",
      "Push your code to a public GitHub repo.",
      "Connect the repo to the deployment platform.",
      "Configure the PORT environment variable.",
      "Update your React Native app to use the new live URL."
    ],
    "tools": ["Railway", "Render", "GitHub", "Vercel (Alternative)"],
    "deliverable": "A live, publicly accessible API URL",
    "definitionOfDone": "The mobile app fetches data from the live URL on a real device",
    "commonMistakes": ["Hardcoding secrets", "Incorrect start script in package.json"],
    "resumeLine": "Deployed production Node.js API to cloud infrastructure (Railway/Render)",
    "connectsTo": "w1-d7"
  },
  "w1-d7": {
    "objective": "Post on LinkedIn: 'I built my first backend API this week'",
    "why": "Public accountability + recruiters notice backend pivots. Building in public is the fastest way to attract attention.",
    "steps": [
      "Draft a 3-paragraph post about your transition to backend.",
      "Include a screenshot of your Postman tests or mobile app fetching data.",
      "Link to your GitHub repo.",
      "Tag #ReactNative #NodeJS #FullStack #BuildingInPublic."
    ],
    "tools": ["LinkedIn"],
    "deliverable": "One public LinkedIn update",
    "definitionOfDone": "Post is live and repo is shared",
    "commonMistakes": ["Being too technical", "Not including a visual"],
    "resumeLine": null,
    "connectsTo": "w2-d1"
  },
  "w2-d1": {
    "objective": "Install PostgreSQL, learn basic SQL: CREATE TABLE, INSERT, SELECT",
    "why": "You cannot build AI systems without understanding data storage. SQL is the language of data.",
    "steps": [
      "Install PostgreSQL (locally or via Docker).",
      "Use `psql` or a GUI like pgAdmin/DBeaver to connect.",
      "Create a 'users' table with id, name, and email.",
      "Practice inserting data and selecting it with simple filters.",
      "Learn the difference between DDL (schema) and DML (data)."
    ],
    "tools": ["PostgreSQL", "DBeaver", "Docker"],
    "deliverable": "A local database with tables and sample data",
    "definitionOfDone": "You can manually run queries to create and retrieve data in the terminal",
    "commonMistakes": ["Missing semicolons in SQL", "Incorrect column types"],
    "resumeLine": null,
    "connectsTo": "w2-d2"
  },
  "w2-d2": {
    "objective": "Design schema with relationships, write JOIN queries",
    "why": "Relational data modeling is a core architecture skill. Data doesn't exist in isolation.",
    "steps": [
      "Create a 'posts' table linked to 'users' via a `user_id` foreign key.",
      "Learn One-to-Many and Many-to-Many relationships.",
      "Write a JOIN query to fetch a user with all their posts.",
      "Practice ON DELETE CASCADE to handle linked data cleanup."
    ],
    "tools": ["PostgreSQL", "SQL"],
    "deliverable": "Relational schema diagram + JOIN query results",
    "definitionOfDone": "JOIN query successfully returns combined data from two related tables",
    "commonMistakes": ["Ambiguous column names in JOINs", "Forgetting the foreign key constraint"],
    "resumeLine": "Designed relational database schemas with optimized JOIN queries",
    "connectsTo": "w2-d3"
  },
  "w2-d3": {
    "objective": "Integrate ORM (Prisma), write migrations, seed data",
    "why": "ORMs are industry standard; raw SQL alone is too slow to maintain. Prisma provides type-safety for your database.",
    "steps": [
      "Install Prisma: `npm install prisma @prisma/client`.",
      "Run `npx prisma init`.",
      "Translate your SQL schema into `schema.prisma`.",
      "Run `npx prisma migrate dev` to sync the database.",
      "Create a `seed.ts` script to populate the DB with test data."
    ],
    "tools": ["Prisma", "TypeScript"],
    "deliverable": "Type-safe database layer with migration history",
    "definitionOfDone": "Prisma Client can fetch data in a script and migrations are tracked in git",
    "commonMistakes": ["Mismatch between Prisma schema and existing DB", "Not awaiting Prisma calls"],
    "resumeLine": "Implemented type-safe database layer using Prisma ORM with automated migrations",
    "connectsTo": "w2-d4"
  },
  "w2-d4": {
    "objective": "Refactor Week 1 endpoints to use real database queries",
    "why": "Persisting data is what separates toys from products. In-memory arrays disappear when the server restarts.",
    "steps": [
      "Replace all in-memory array logic with Prisma calls (`prisma.user.findMany()`, etc.).",
      "Update your CRUD routes to be `async`.",
      "Ensure IDs from the request match the database ID type (e.g., Int vs String/UUID).",
      "Verify that data persists even after restarting the server."
    ],
    "tools": ["Prisma", "Express"],
    "deliverable": "Database-backed REST API",
    "definitionOfDone": "Full CRUD works and survives server restarts",
    "commonMistakes": ["Not handling database connection errors", "Zod validation mismatch with DB types"],
    "resumeLine": null,
    "connectsTo": "boss-w2"
  },
  "w2-d5": {
    "objective": "Set up Redis, cache the most-queried endpoint",
    "why": "Caching is required knowledge for system design interviews. It reduces DB load and latency.",
    "steps": [
      "Run Redis via Docker: `docker run -p 6379:6379 redis`.",
      "Install `redis` npm package.",
      "Create a caching middleware: check Redis first, if miss, fetch from DB and save to Redis.",
      "Set an expiration (TTL) of 60 seconds.",
      "Verify latency drop in Postman (e.g., 200ms → 10ms)."
    ],
    "tools": ["Redis", "Docker", "Node.js"],
    "deliverable": "Sub-100ms response time on cached endpoints",
    "definitionOfDone": "First request is slow (miss), subsequent requests are extremely fast (hit)",
    "commonMistakes": ["Cache invalidation issues", "Not handling Redis being down (it should fail gracefully)"],
    "resumeLine": "Implemented high-performance caching layer with Redis, reducing primary database load by 40%",
    "connectsTo": "w2-d6"
  },
  "w2-d6": {
    "objective": "Write a blog post: 'SQL for Mobile Developers — What I Learned'",
    "why": "Teaching solidifies learning + builds authority. Sharing your perspective as a mobile dev makes the content unique.",
    "steps": [
      "Outline the post: Why mobile devs need SQL, key concepts (JOINs, Indexes), and your experience with Prisma.",
      "Include a code snippet of a Prisma query vs a raw SQL query.",
      "Publish on Dev.to or Medium."
    ],
    "tools": ["Dev.to", "Medium"],
    "deliverable": "One technical blog post",
    "definitionOfDone": "Post is live and shared with the community",
    "commonMistakes": ["Too much theory, not enough 'I did this'", "Unformatted code blocks"],
    "resumeLine": null,
    "connectsTo": "w2-d7"
  },
  "w2-d7": {
    "objective": "Update LinkedIn featured section with your GitHub repo",
    "why": "Recruiters check featured links before messaging you. It's your digital storefront.",
    "steps": [
      "Go to LinkedIn profile → Add section → Featured.",
      "Add a link to your 'Backend Mastery' repo.",
      "Write a catchy description: 'Building the backbone: A Node.js + Postgres + Redis API for mobile apps.'",
      "Ensure repo has a high-quality README."
    ],
    "tools": ["LinkedIn", "GitHub"],
    "deliverable": "Updated professional profile",
    "definitionOfDone": "Repo is visible at the top of your LinkedIn profile",
    "commonMistakes": ["Linking to a private repo", "Broken image links in the featured card"],
    "resumeLine": null,
    "connectsTo": "w3-d1"
  }
};
