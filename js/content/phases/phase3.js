/**
 * Phase 3: Deepen Skills (After the move, Months 4+)
 * Now funded by a 3-5x salary and adjacent work exposure. Build real depth.
 * Matches the existing repo schema: WEEKS[] + DETAILS{} keyed by task id.
 */

export const SCHEMA = {
  "version": "2.0",
  "structure": "normalized",
  "note": "Phase 3: Deepen Skills (Months 4+), AFTER landing the better-paying role. This is where full-stack depth (PostgreSQL, Docker/CI-CD owned for real) and the AI/ML pivot happen — learned faster on the job with a stable salary. Do NOT pull this earlier; doing it before the move just keeps you underpaid longer.",
  "layers": {
    "roadmap": "core task objects",
    "details": "taskDetails map keyed by task.id",
    "boss": "boss battle object per block"
  }
};

export const WEEKS = [
  {
    "id": "p3b1",
    "num": "BLOCK 01",
    "title": "PostgreSQL + Relational Modeling",
    "theme": "Fill the SQL Gap",
    "color": "#3b82f6",
    "boss": {
      "id": "boss-p3b1",
      "name": "The Data Modeler",
      "challenge": "Re-model Zonesso's core entities in PostgreSQL with JOINs, indexes, and a NestJS integration",
      "rewardXP": 800,
      "resumeLine": "Modeled a production marketplace relationally in PostgreSQL (normalized schema, indexing, JOINs) and integrated it with NestJS",
      "successCriteria": [
        "Normalized schema for users, vehicles, showrooms, images, favorites, payments",
        "Comfortable with multi-table JOINs and aggregations",
        "Can read EXPLAIN ANALYZE and justify an index",
        "NestJS + PostgreSQL endpoints working (TypeORM/Prisma)"
      ],
      "howToComplete": [
        "Re-model Zonesso's real data, not toy examples",
        "Write 5 real queries the app would need",
        "Connect it to NestJS with 2 endpoints"
      ],
      "deliverables": ["zonesso_schema.sql", "5 real queries", "NestJS + PostgreSQL mini-API"],
      "passFail": {
        "pass": "Relational re-model + NestJS integration working",
        "fail": "Only toy examples, no JOINs, no real schema"
      }
    },
    "tasks": [
      {
        "id": "p3-sql-fundamentals",
        "day": "Week 1",
        "time": "10h",
        "depth": "Deep",
        "xp": 300,
        "text": "SQL fundamentals + schema design: types, keys, constraints, relationships, JOINs",
        "reason": "MongoDB-only caps roles; SQL opens 3x more. JOINs expose the gap most."
      },
      {
        "id": "p3-sql-zonesso",
        "day": "Week 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 300,
        "text": "Re-model Zonesso in PostgreSQL: indexing, EXPLAIN ANALYZE, SQL-vs-NoSQL, NestJS integration",
        "reason": "Real-data re-model sticks better and becomes an interview story"
      }
    ]
  },
  {
    "id": "p3b2",
    "num": "BLOCK 02",
    "title": "Docker + CI/CD (For Real)",
    "theme": "Own What AI Did",
    "color": "#0ea5e9",
    "boss": {
      "id": "boss-p3b2",
      "name": "The Pipeline Owner",
      "challenge": "Build a Dockerfile + docker-compose from scratch (no AI) and explain your whole CI/CD pipeline line by line",
      "rewardXP": 800,
      "resumeLine": "Containerized a NestJS + PostgreSQL stack and authored a CI/CD pipeline from first principles",
      "successCriteria": [
        "Dockerfile + docker-compose written by hand, no AI",
        "NestJS + PostgreSQL + Redis running locally via compose",
        "Can explain every line of your Bitbucket/ECR/EC2 pipeline",
        "Rebuilt a pipeline from memory"
      ],
      "howToComplete": [
        "Write the Dockerfile yourself, no AI assist",
        "Run the full stack with docker-compose",
        "Walk through your existing pipeline and explain each stage"
      ],
      "deliverables": ["Hand-written Dockerfile", "docker-compose stack", "Pipeline explainer note"],
      "passFail": {
        "pass": "Can build and explain it all without AI",
        "fail": "Still can't explain the pipeline you shipped"
      }
    },
    "tasks": [
      {
        "id": "p3-docker",
        "day": "Week 1",
        "time": "10h",
        "depth": "Deep",
        "xp": 300,
        "text": "Docker from scratch: images vs containers, layers, Dockerfile, docker-compose (NestJS+PG+Redis)",
        "reason": "You shipped Docker with AI help; you can use it but can't explain it"
      },
      {
        "id": "p3-cicd",
        "day": "Week 2",
        "time": "8h",
        "depth": "Deep",
        "xp": 300,
        "text": "Understand and rebuild your CI/CD pipeline (Bitbucket/ECR/EC2) from first principles",
        "reason": "Senior interviews probe this; AI-built knowledge collapses under questioning"
      }
    ]
  },
  {
    "id": "p3b3",
    "num": "BLOCK 03",
    "title": "System Design Depth",
    "theme": "Toward Staff-Level",
    "color": "#8b5cf6",
    "boss": {
      "id": "boss-p3b3",
      "name": "The Distributed Thinker",
      "challenge": "Master distributed-systems fundamentals and solve 5 advanced design problems",
      "rewardXP": 800,
      "resumeLine": "Developed distributed-systems design expertise across caching, sharding, consistency, and scaling",
      "successCriteria": [
        "Comfortable with replication, sharding, consistency models, CAP",
        "Solved 5 advanced design problems beyond the basics",
        "Can reason about real scaling decisions, not just whiteboard theory"
      ],
      "howToComplete": [
        "Study distributed-systems fundamentals",
        "Practice 5 designs (rate limiter, news feed, notification system, etc.)",
        "Tie each back to decisions you now make at the new job"
      ],
      "deliverables": ["5 advanced designs", "Distributed-systems notes"],
      "passFail": {
        "pass": "Can lead a senior+ design discussion",
        "fail": "Still only comfortable with intro-level designs"
      }
    },
    "tasks": [
      {
        "id": "p3-sysdesign-depth",
        "day": "Ongoing",
        "time": "20h",
        "depth": "Deep",
        "xp": 400,
        "text": "Distributed systems: replication, sharding, consistency, CAP + 5 advanced design problems",
        "reason": "Moves you from senior toward staff-level conversations and pay"
      }
    ]
  },
  {
    "id": "p3b4",
    "num": "BLOCK 04",
    "title": "AI/ML Pivot",
    "theme": "The Next Tier",
    "color": "#ec4899",
    "boss": {
      "id": "boss-p3b4",
      "name": "The AI Engineer",
      "challenge": "Ship one real AI feature (RAG or agent) end to end, ideally inside the new company",
      "rewardXP": 1000,
      "resumeLine": "Built and shipped an AI-powered feature (RAG/agent) integrated into a production application",
      "successCriteria": [
        "Comfortable with Python fundamentals",
        "Built a working RAG pipeline (embeddings + retrieval + LLM)",
        "Built a simple agent with tool use",
        "Shipped at least one AI feature to real users"
      ],
      "howToComplete": [
        "Learn Python, then LLM app patterns (RAG, agents)",
        "Propose and build an internal AI project at the new job",
        "Ship it, measure it, write about it"
      ],
      "deliverables": ["RAG pipeline", "Agent demo", "1 shipped AI feature"],
      "passFail": {
        "pass": "A real AI feature shipped to users",
        "fail": "Tutorials only, nothing in production"
      }
    },
    "tasks": [
      {
        "id": "p3-ai-foundations",
        "day": "Months 1-3",
        "time": "ongoing",
        "depth": "Deep",
        "xp": 400,
        "text": "Python fundamentals -> RAG (embeddings, retrieval, LLM) -> agents with tool use",
        "reason": "The next salary tier; learn on the job where you get paid to use it"
      },
      {
        "id": "p3-ai-ship",
        "day": "Months 3-6",
        "time": "ongoing",
        "depth": "Deep",
        "xp": 600,
        "text": "Propose and ship one internal AI feature to real users at the new company",
        "reason": "Shipped > studied; production AI experience is what employers actually pay for"
      }
    ]
  }
];

export const DETAILS = {
  "p3-sql-fundamentals": {
    "objective": "Learn SQL and relational schema design properly.",
    "why": "Your entire Zonesso stack is MongoDB. MongoDB-only caps your roles; every Indian product company runs PostgreSQL. JOINs are the single skill that most exposes a MongoDB-only background.",
    "steps": [
      "Install PostgreSQL 16 + DBeaver; learn psql basics (don't live in the GUI).",
      "Core SQL: SELECT/INSERT/UPDATE/DELETE, WHERE, ORDER BY, LIMIT/OFFSET (pagination).",
      "Schema design: types (NUMERIC for money, never FLOAT), primary/foreign keys, constraints.",
      "Relationships: one-to-many, many-to-many, ON DELETE CASCADE vs SET NULL.",
      "JOINs: INNER, LEFT, 3-table joins, GROUP BY, HAVING, aggregations."
    ],
    "tools": ["PostgreSQL 16", "DBeaver", "psql"],
    "deliverable": "A relational schema with users, vehicles, showrooms, favorites, images + working JOINs.",
    "definitionOfDone": "You can write a 3-table JOIN with filtering, sorting, and aggregation without lookup.",
    "commonMistakes": ["Living in the GUI, never learning raw SQL", "FLOAT for money", "Avoiding JOINs"],
    "resumeLine": null,
    "connectsTo": "p3-sql-zonesso"
  },
  "p3-sql-zonesso": {
    "objective": "Re-model Zonesso's real data in PostgreSQL and connect it to NestJS.",
    "why": "Re-modeling a real production system sticks far better than toy examples and gives you an interview story: 'I migrated a document model to a normalized relational schema.'",
    "steps": [
      "Design the full schema: users, vehicles, showrooms, images, favorites, payments (amount NUMERIC, provider, status).",
      "Add indexes on common filters (make, price, foreign keys); learn EXPLAIN ANALYZE.",
      "Write 5 real queries: paginated filtered listing, a user's ads with image counts, revenue per showroom, most-favorited vehicles, recent active listings.",
      "Write a one-page SQL-vs-NoSQL note using Zonesso as the case study.",
      "Connect PostgreSQL to NestJS with TypeORM/Prisma; build 2 endpoints."
    ],
    "tools": ["PostgreSQL", "NestJS", "TypeORM / Prisma", "Excalidraw"],
    "deliverable": "zonesso_schema.sql + 5 queries + NestJS + PostgreSQL mini-API.",
    "definitionOfDone": "Schema, seed data, 5 queries, and 2 working NestJS+PG endpoints all run.",
    "commonMistakes": ["Indexing everything (ignoring write cost)", "Toy data instead of Zonesso's real model", "Skipping the SQL-vs-NoSQL reasoning"],
    "resumeLine": "Re-modeled a production MongoDB marketplace as a normalized PostgreSQL schema and integrated it with NestJS via TypeORM.",
    "connectsTo": "p3-docker"
  },
  "p3-docker": {
    "objective": "Understand Docker from first principles and run your stack with compose.",
    "why": "You shipped Docker at Zonesso with AI help — you can use it but can't explain it. That gap collapses under senior interview questioning.",
    "steps": [
      "Learn images vs containers, layers, and the build cache.",
      "Write a Dockerfile for a NestJS app by hand, no AI.",
      "Write docker-compose to run NestJS + PostgreSQL + Redis together locally.",
      "Break and fix it deliberately to understand failure modes."
    ],
    "tools": ["Docker Desktop", "docker-compose"],
    "deliverable": "A hand-written Dockerfile + working docker-compose stack.",
    "definitionOfDone": "The full stack runs via compose, and you can explain every line of the Dockerfile.",
    "commonMistakes": ["Copy-pasting a Dockerfile without understanding it", "Not learning layer caching", "Skipping compose for multi-service setups"],
    "resumeLine": null,
    "connectsTo": "p3-cicd"
  },
  "p3-cicd": {
    "objective": "Understand and rebuild your CI/CD pipeline from first principles.",
    "why": "Senior interviews probe deployment. AI-built knowledge doesn't survive 'walk me through your pipeline.' Owning it converts a liability into a strength.",
    "steps": [
      "Map your existing Bitbucket/ECR/EC2 pipeline stage by stage.",
      "Explain what each step does: build, test, image push, deploy, staging vs prod.",
      "Rebuild a minimal pipeline yourself for a side project.",
      "Write a one-page explainer you could deliver in an interview."
    ],
    "tools": ["Bitbucket Pipelines / GitHub Actions", "AWS ECR/EC2"],
    "deliverable": "A pipeline explainer note + a rebuilt minimal pipeline.",
    "definitionOfDone": "You can explain your whole pipeline line by line and rebuild a basic one from scratch.",
    "commonMistakes": ["Treating CI/CD as a black box", "Not knowing staging-vs-prod differences", "Can't explain the deploy step"],
    "resumeLine": "Authored CI/CD pipelines (build, test, containerize, deploy) for a NestJS backend on AWS.",
    "connectsTo": "p3-sysdesign-depth"
  },
  "p3-sysdesign-depth": {
    "objective": "Build genuine distributed-systems depth beyond intro problems.",
    "why": "This moves you from senior toward staff-level conversations and the pay that comes with them.",
    "steps": [
      "Study replication, sharding, consistency models, CAP theorem, idempotency.",
      "Practice 5 advanced designs: rate limiter, news feed, notification system, distributed cache, payment system.",
      "Tie each to real decisions you now make at the new job.",
      "Get feedback from a senior+ engineer where possible."
    ],
    "tools": ["System Design Primer", "ByteByteGo", "DDIA (book)"],
    "deliverable": "5 advanced designs + distributed-systems notes.",
    "definitionOfDone": "You can lead a senior+ design discussion and reason about real trade-offs.",
    "commonMistakes": ["Memorizing designs instead of understanding trade-offs", "Ignoring consistency/idempotency", "Never getting feedback"],
    "resumeLine": null,
    "connectsTo": "p3-ai-foundations"
  },
  "p3-ai-foundations": {
    "objective": "Learn Python and core LLM application patterns (RAG, agents).",
    "why": "This is the next salary tier — but only worth pursuing once your full-stack foundation is solid and you have a stable, well-paying base.",
    "steps": [
      "Python fundamentals (you'll pick it up fast coming from TS).",
      "Embeddings + vector search; build a basic RAG pipeline (retrieve -> augment -> generate).",
      "Build a simple agent with tool use.",
      "Keep it applied — build small, working things, not just courses."
    ],
    "tools": ["Python", "An LLM API", "A vector DB (pgvector/Pinecone)"],
    "deliverable": "A working RAG pipeline + a simple agent demo.",
    "definitionOfDone": "Both run end to end and you can explain how retrieval and tool use work.",
    "commonMistakes": ["Endless courses with nothing built", "Skipping fundamentals and cargo-culting frameworks", "Starting this before the job move (stays underpaid longer)"],
    "resumeLine": null,
    "connectsTo": "p3-ai-ship"
  },
  "p3-ai-ship": {
    "objective": "Ship one real AI feature to users, ideally inside the new company.",
    "why": "Shipped beats studied. Production AI experience is what employers actually pay for, and doing it on the job means you're paid to learn the highest-value skill.",
    "steps": [
      "Identify an internal use case at the new company (search, support, summarization).",
      "Propose it, scope it small, build it.",
      "Ship to real users, measure impact, iterate.",
      "Write about it (internal doc or LinkedIn) to cement the credential."
    ],
    "tools": ["Your new company's stack", "An LLM API", "Vector DB"],
    "deliverable": "One AI feature shipped to real users.",
    "definitionOfDone": "Feature is live, used, and you have a metric and a write-up.",
    "commonMistakes": ["Over-scoping the first project", "Building in isolation with no users", "Not measuring impact"],
    "resumeLine": "Designed and shipped a production AI feature (RAG/agent) to real users, with measured impact.",
    "connectsTo": null
  }
};

export const PHASE_3_WEEKS = WEEKS;
export const TASK_DETAILS = DETAILS;
