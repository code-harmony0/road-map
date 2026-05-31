export const WEEKS = [
  {
    "id": "w1",
    "num": "WEEK 01",
    "title": "PostgreSQL Migration",
    "theme": "Database Mastery",
    "color": "#3b82f6",
    "boss": {
      "id": "boss-w1",
      "name": "The Data Architect",
      "challenge": "Replace MongoDB with PostgreSQL in one existing project. Schema, migrations, queries, all working.",
      "rewardXP": 500,
      "resumeLine": "Migrated production database from MongoDB to PostgreSQL with relational schema design and query optimization",
      "successCriteria": [
        "PostgreSQL schema with 3+ tables and foreign keys",
        "All CRUD operations working via raw SQL or ORM",
        "Data seeded and queryable",
        "React Native app connects and displays data"
      ],
      "howToComplete": [
        "Pick your best project (Zonesso or Eco Crew)",
        "Design relational schema (users, items, orders, etc.)",
        "Use Prisma or Sequelize ORM",
        "Migrate data manually or via script",
        "Update API endpoints to use PostgreSQL",
        "Verify React Native still works"
      ],
      "deliverables": [
        "Schema diagram",
        "Migration files",
        "Working API with PostgreSQL",
        "GitHub commit showing before/after"
      ],
      "passFail": {
        "pass": "All endpoints work, data persists, app connects",
        "fail": "Still using MongoDB or in-memory data"
      }
    },
    "tasks": [
      {
        "id": "w1-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Install PostgreSQL locally, learn psql basics, create first database",
        "reason": "You know MongoDB. PostgreSQL is the industry standard for relational data."
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
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Design schema for your project: 3+ tables, primary keys, foreign keys, indexes",
        "reason": "Relational thinking is what separates juniors from seniors."
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
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Set up Prisma, write migrations, create tables",
        "reason": "Prisma is the modern standard. Type-safe, auto-generated queries."
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
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Rewrite all MongoDB queries to PostgreSQL (find → SELECT, insert → INSERT, etc.)",
        "reason": "Document-to-relational translation is a core skill."
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
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add JOIN queries for related data, test performance with EXPLAIN",
        "reason": "JOINs are where PostgreSQL shines. N+1 queries kill performance."
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
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Seed realistic data, verify all endpoints return correct JSON",
        "reason": "Real data reveals edge cases that empty tables hide."
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
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Connect React Native to new PostgreSQL backend, verify on real device",
        "reason": "End-to-end proof. If mobile breaks, the migration isn't done."
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
    "title": "Docker & Containerization",
    "theme": "DevOps Foundations",
    "color": "#10b981",
    "boss": {
      "id": "boss-w2",
      "name": "The Container Master",
      "challenge": "Dockerize your full stack: API + PostgreSQL + React Native build",
      "rewardXP": 500,
      "resumeLine": "Dockerized full-stack application with multi-container orchestration via Docker Compose",
      "successCriteria": [
        "Dockerfile for API builds and runs",
        "Docker Compose orchestrates API + PostgreSQL",
        "React Native can connect to Dockerized backend",
        "Environment variables managed properly"
      ],
      "howToComplete": [
        "Write Dockerfile for Node.js/NestJS API",
        "Write docker-compose.yml with API + PostgreSQL services",
        "Use .env files, never commit secrets",
        "Test: docker-compose up → app works",
        "Document setup in README"
      ],
      "deliverables": [
        "Dockerfile",
        "docker-compose.yml",
        "Working local setup",
        "README with Docker instructions"
      ],
      "passFail": {
        "pass": "docker-compose up → full app works",
        "fail": "Only works on your machine with manual setup"
      }
    },
    "tasks": [
      {
        "id": "w2-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Learn Docker: images, containers, layers, volumes. Install Docker Desktop.",
        "reason": "Containerization is mandatory for modern backend roles."
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
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write Dockerfile for your API: multi-stage build, small final image",
        "reason": "Multi-stage builds reduce image size by 80%. Size matters."
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
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write docker-compose.yml: API service + PostgreSQL service + volume persistence",
        "reason": "Compose is how teams run full stacks locally."
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
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Manage environment variables: .env file, Docker secrets, never commit to git",
        "reason": "Leaked database credentials destroy careers."
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
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Test full flow: docker-compose down → up → React Native connects → data persists",
        "reason": "Reproducibility is the point of Docker."
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
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Add Redis to docker-compose for caching layer",
        "reason": "Caching is required for system design interviews."
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
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "LinkedIn post: 'I Dockerized my React Native + PostgreSQL stack this week'",
        "reason": "DevOps content gets attention from platform teams."
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
    "objective": "Install PostgreSQL and master basic database administration via CLI",
    "why": "Understanding the underlying engine before using an ORM is critical for debugging and performance tuning. psql is the universal tool for Postgres DBAs.",
    "steps": [
      "Install PostgreSQL using Homebrew (macOS) or direct installer.",
      "Start the service: `brew services start postgresql`.",
      "Access CLI: `psql postgres`.",
      "Create a user and database: `CREATE DATABASE project_db;`.",
      "Learn basic commands: `\\l`, `\\dt`, `\\d table_name`."
    ],
    "tools": ["PostgreSQL", "psql", "Homebrew"],
    "deliverable": "A locally running PostgreSQL instance with your project database created",
    "definitionOfDone": "You can connect to your database via CLI and create a test table",
    "commonMistakes": ["Permissions issues with the default 'postgres' user", "Forgetting to start the background service"],
    "resumeLine": null,
    "connectsTo": "w1-d2"
  },
  "w1-d2": {
    "objective": "Design a normalized relational schema with strict data integrity rules",
    "why": "Relational thinking prevents data duplication and ensures referential integrity. Proper indexing from Day 1 prevents scaling bottlenecks.",
    "steps": [
      "Identify core entities: Users, Items, Orders, categories.",
      "Define relationships: One-to-Many (User -> Orders), Many-to-Many (Items -> Categories).",
      "Assign Primary Keys and Foreign Keys.",
      "Choose data types carefully: `UUID` for IDs, `TIMESTAMPTZ` for dates.",
      "Identify columns that need indexes for search optimization."
    ],
    "tools": ["dbdiagram.io", "Excalidraw"],
    "deliverable": "ER diagram showing tables, columns, and relationships",
    "definitionOfDone": "Schema is in 3rd Normal Form and handles all project use cases",
    "commonMistakes": ["Using strings for IDs instead of UUIDs", "Missing foreign key constraints"],
    "resumeLine": "Architected normalized relational schemas with optimized indexing for high-scale applications",
    "connectsTo": "w1-d3"
  },
  "w1-d3": {
    "objective": "Set up Prisma ORM and establish a migration-based development workflow",
    "why": "Migrations provide a version-controlled history of your database changes. Prisma provides type-safety from DB to Frontend.",
    "steps": [
      "Install Prisma: `npm install prisma --save-dev`.",
      "Initialize: `npx prisma init`.",
      "Define your `schema.prisma` file based on your ER diagram.",
      "Run first migration: `npx prisma migrate dev --name init`.",
      "Verify tables are created in Postgres."
    ],
    "tools": ["Prisma", "Node.js"],
    "deliverable": "Working Prisma client and documented migration history",
    "definitionOfDone": "Prisma client is generated and tables match the schema exactly",
    "commonMistakes": ["Manual DB changes without a migration file", "Incorrect DATABASE_URL in .env"],
    "resumeLine": "Implemented type-safe database access and automated migration pipelines using Prisma ORM",
    "connectsTo": "w1-d4"
  },
  "w1-d4": {
    "objective": "Translate document-based query logic into relational SQL patterns",
    "why": "MongoDB and Postgres require different mental models. Understanding how to fetch nested data in a relational way is a core backend skill.",
    "steps": [
      "Identify all current MongoDB calls in your API.",
      "Replace `collection.find()` with `prisma.table.findMany()`.",
      "Replace `collection.insertOne()` with `prisma.table.create()`.",
      "Ensure error handling (e.g., duplicate key) is updated for Postgres errors."
    ],
    "tools": ["Prisma Client", "TypeScript"],
    "deliverable": "Updated API services using Postgres storage",
    "definitionOfDone": "Basic CRUD endpoints return the same data format as before, but sourced from Postgres",
    "commonMistakes": ["Trying to store complex JSON objects in a single column (use relations instead)"],
    "resumeLine": null,
    "connectsTo": "w1-d5"
  },
  "w1-d5": {
    "objective": "Optimize data retrieval using JOINs and analyze query performance",
    "why": "N+1 queries are the silent killer of performance. JOINs allow you to fetch related data in a single database round-trip.",
    "steps": [
      "Update 'List' endpoints to include related data using Prisma `include`.",
      "Analyze the generated SQL using `DEBUG=\"prisma:query\"`.",
      "Run `EXPLAIN ANALYZE` on complex queries to check for sequence scans vs index scans.",
      "Optimize slow queries by adding missing indexes."
    ],
    "tools": ["Prisma include", "EXPLAIN ANALYZE", "SQL"],
    "deliverable": "Performance-optimized JOIN queries and index audit",
    "definitionOfDone": "Related data is fetched in single queries with <10ms execution time",
    "commonMistakes": ["Over-joining and fetching unnecessary columns"],
    "resumeLine": "Optimized database performance through advanced JOIN strategies and query execution analysis",
    "connectsTo": "w1-d6"
  },
  "w1-d6": {
    "objective": "Seed the database with high-volume, realistic test data",
    "why": "Empty databases don't reveal performance issues or layout breaks. Realistic data is required for a professional demo.",
    "steps": [
      "Create a `seed.ts` script using `@faker-js/faker`.",
      "Generate 50+ users and 200+ related items.",
      "Run `npx prisma db seed`.",
      "Verify data distributions look correct in the UI."
    ],
    "tools": ["Faker.js", "Prisma Seed"],
    "deliverable": "A fully populated local database with production-like data",
    "definitionOfDone": "Database contains enough data to test pagination and search performance",
    "commonMistakes": ["Seeding invalid data that breaks foreign key constraints"],
    "resumeLine": null,
    "connectsTo": "w1-d7"
  },
  "w1-d7": {
    "objective": "Verify the end-to-end migration on a real mobile device",
    "why": "Localhost testing isn't enough. Mobile devices have different network constraints and reveal connection issues.",
    "steps": [
      "Ensure your computer and phone are on the same WiFi.",
      "Update your API URL in React Native to your computer's local IP.",
      "Test full app flows (Login, Create, Update) on a physical device.",
      "Confirm that Postgres persistence works after an app restart."
    ],
    "tools": ["Physical Device (Android/iOS)", "Network Utilities"],
    "deliverable": "Verified full-stack mobile application",
    "definitionOfDone": "Mobile app successfully displays data from the new Postgres backend with no errors",
    "commonMistakes": ["Hardcoding 'localhost' in the mobile app (won't connect)"],
    "resumeLine": null,
    "connectsTo": "Week 2"
  },
  "w2-d1": {
    "objective": "Master Docker fundamentals and local container orchestration",
    "why": "Docker ensures your app runs the same on your machine, your teammate's machine, and in production.",
    "steps": [
      "Install Docker Desktop and verify the installation.",
      "Run a hello-world container: `docker run hello-world`.",
      "Learn core CLI: `docker ps`, `docker images`, `docker stop`, `docker rm`.",
      "Understand the difference between an Image and a Container."
    ],
    "tools": ["Docker", "Terminal"],
    "deliverable": "Working Docker installation and basic container literacy",
    "definitionOfDone": "You can pull and run a generic image (like nginx) and access it via browser",
    "commonMistakes": ["Confusing images with containers"],
    "resumeLine": null,
    "connectsTo": "w2-d2"
  },
  "w2-d2": {
    "objective": "Create a production-grade multi-stage Dockerfile for the Node.js API",
    "why": "Multi-stage builds separate the 'build' environment from the 'runtime', resulting in much smaller and more secure images.",
    "steps": [
      "Stage 1 (Build): Install dependencies, run TypeScript build, generate Prisma client.",
      "Stage 2 (Runtime): Copy only built files and production node_modules from Stage 1.",
      "Use a non-root user in the final image for security.",
      "Expose the correct port and define the CMD."
    ],
    "tools": ["Dockerfile", "Docker BuildKit"],
    "deliverable": "Optimized Dockerfile in your repo root",
    "definitionOfDone": "The image builds successfully and is <200MB",
    "commonMistakes": ["Including devDependencies or source code in the final image"],
    "resumeLine": "Optimized container images using multi-stage builds, reducing image size by 75% and improving security",
    "connectsTo": "w2-d3"
  },
  "w2-d3": {
    "objective": "Orchestrate the full API and Database stack using Docker Compose",
    "why": "Docker Compose allows you to define and run multi-container applications with a single command.",
    "steps": [
      "Create `docker-compose.yml`.",
      "Define `api` service with build context and port mapping.",
      "Define `db` service using official `postgres` image.",
      "Set up `volumes` to ensure data persists even if the container is deleted.",
      "Configure `depends_on` to ensure the DB starts before the API."
    ],
    "tools": ["Docker Compose", "YAML"],
    "deliverable": "Working docker-compose.yml configuration",
    "definitionOfDone": "Running `docker-compose up` starts both services and the API connects to the DB automatically",
    "commonMistakes": ["Forgetting volumes (leads to data loss on restart)"],
    "resumeLine": "Architected local development environments using Docker Compose for complex multi-service stacks",
    "connectsTo": "w2-d4"
  },
  "w2-d4": {
    "objective": "Implement secure environment variable management for containerized apps",
    "why": "Hardcoding secrets in Dockerfiles or Compose files is a major security risk. Proper management is a senior engineering requirement.",
    "steps": [
      "Move all secrets to a `.env.docker` file.",
      "Pass the environment file to Compose using the `env_file` key.",
      "Ensure `.env` files are in `.gitignore`.",
      "Verify the API receives variables using `process.env`."
    ],
    "tools": ["Git", "Dotenv"],
    "deliverable": "Secure configuration layer with no leaked secrets",
    "definitionOfDone": "App runs with dynamic variables and no secrets are committed to the repo",
    "commonMistakes": ["Committing `.env` files to Git", "Mapping ports that are already in use"],
    "resumeLine": null,
    "connectsTo": "w2-d5"
  },
  "w2-d5": {
    "objective": "Validate full-stack reproducibility and data persistence in Docker",
    "why": "The ultimate test of a Docker setup is 'down then up'. It proves your infrastructure is truly code.",
    "steps": [
      "Run `docker-compose down` (cleans up containers).",
      "Run `docker-compose up -d`.",
      "Verify previous data still exists (proves volume mapping).",
      "Connect mobile app and perform a write operation."
    ],
    "tools": ["Docker Compose CLI"],
    "deliverable": "A proven, reproducible development environment",
    "definitionOfDone": "Anyone can clone the repo and run the entire stack with a single command",
    "commonMistakes": ["Not checking volume mounting on different OS (Windows vs Mac)"],
    "resumeLine": null,
    "connectsTo": "w2-d6"
  },
  "w2-d6": {
    "objective": "Extend the stack with a Redis caching layer for performance scaling",
    "why": "Redis is the industry standard for caching and session management. Knowing how to integrate it into a Docker stack is highly valued.",
    "steps": [
      "Add a `cache` service to `docker-compose.yml` using the `redis` image.",
      "Update the API to connect to the Redis host.",
      "Implement a simple cache logic: 'check Redis -> if miss -> fetch DB -> save Redis'.",
      "Verify cache hits in the API logs."
    ],
    "tools": ["Redis", "Docker Compose"],
    "deliverable": "Multi-container stack with API, Postgres, and Redis",
    "definitionOfDone": "The API can successfully read/write to both Postgres and Redis within the Docker network",
    "commonMistakes": ["Hardcoding 'localhost' for Redis (containers must use service names like 'cache')"],
    "resumeLine": "Engineered scalable backends with distributed caching using Redis and container orchestration",
    "connectsTo": "w2-d7"
  },
  "w2-d7": {
    "objective": "Publish a technical summary of your DevOps transformation",
    "why": "DevOps skills are high-value. Sharing your setup proves you understand the 'how' and 'why' of modern delivery.",
    "steps": [
      "Write a LinkedIn post or short blog.",
      "Include your `docker-compose.yml` (redact secrets).",
      "Explain the benefits of this setup (portability, consistency).",
      "Target engineering managers hiring for Senior or Staff roles."
    ],
    "tools": ["LinkedIn"],
    "deliverable": "One professional technical update",
    "definitionOfDone": "Post is live and shared with your network",
    "commonMistakes": ["Sharing a screenshot of code (use text/gist instead for accessibility)"],
    "resumeLine": null,
    "connectsTo": "Week 3"
  }
};
