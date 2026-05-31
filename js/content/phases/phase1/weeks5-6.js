export const WEEKS = [
  {
    "id": "w5",
    "num": "WEEK 05",
    "title": "DevOps & Cloud",
    "theme": "Infrastructure Foundations",
    "color": "#ef4444",
    "boss": {
      "id": "boss-w5",
      "name": "The DevOps Engineer",
      "challenge": "Dockerize your full stack, set up GitHub Actions CI/CD, and deploy to AWS",
      "rewardXP": 500,
      "resumeLine": "Dockerized full-stack application and implemented CI/CD pipelines with GitHub Actions for automated testing and deployment",
      "successCriteria": [
        "API runs in a Docker container",
        "Docker Compose orchestrates API + DB + Redis",
        "GitHub Actions runs tests on every push",
        "Deployed to AWS EC2 or ECS (or Elastic Beanstalk)",
        "Environment variables and secrets are properly managed"
      ],
      "howToComplete": [
        "Write a Dockerfile for your API",
        "Write docker-compose.yml for local development",
        "Create GitHub Actions workflow (test + build)",
        "Launch an AWS EC2 instance, install Docker, pull and run",
        "Use .env files and never commit secrets"
      ],
      "deliverables": [
        "Dockerfile and docker-compose.yml",
        "GitHub Actions YAML file",
        "Live AWS deployment URL",
        "CI/CD pipeline screenshot"
      ],
      "passFail": {
        "pass": "Docker + CI/CD + AWS deployment all working",
        "fail": "Manual deployment or no containerization"
      }
    },
    "tasks": [
      {
        "id": "w5-d1",
        "day": "Day 1",
        "time": "3.75h",
        "depth": "Deep",
        "xp": 75,
        "text": "Learn Docker basics: images, containers, Dockerfile syntax",
        "reason": "Containerization is mandatory for modern backend roles"
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
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write Dockerfile for API, build and run container locally",
        "reason": "If it doesn't run in Docker, it won't run in production"
      },
      {
        "id": "w5-d3",
        "day": "Day 3",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write docker-compose.yml (API + PostgreSQL + Redis)",
        "reason": "Compose is how teams run full stacks locally"
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
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Set up GitHub Actions: run tests and build on every push",
        "reason": "CI/CD is a non-negotiable skill for $150K+ roles"
      },
      {
        "id": "w5-d5",
        "day": "Day 5",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Launch AWS EC2, install Docker, deploy your container",
        "reason": "AWS is the market leader; you must know the basics"
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
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Set up environment variables and secrets management",
        "reason": "Leaked secrets destroy careers and companies"
      },
      {
        "id": "w5-d7",
        "day": "Day 7",
        "time": "2.5h",
        "depth": "Action",
        "xp": 25,
        "text": "Post LinkedIn carousel: 'From Mobile Dev to DevOps in 5 Weeks'",
        "reason": "Carousels perform well and show growth trajectory"
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
    "title": "Full-Stack Integration",
    "theme": "End-to-End Shipping",
    "color": "#06b6d4",
    "boss": {
      "id": "boss-w6",
      "name": "The Full-Stack Shipper",
      "challenge": "Ship one complete feature (e.g., notes, tasks, or chat) end-to-end: mobile UI → API → DB → deployed",
      "rewardXP": 500,
      "resumeLine": "Shipped a full-stack feature from React Native UI to Dockerized AWS backend with auth and caching",
      "successCriteria": [
        "Complete feature works on a real device",
        "User can create, read, update, delete data",
        "Auth is required to use the feature",
        "Backend is deployed on AWS",
        "Code is clean, commented, and on GitHub"
      ],
      "howToComplete": [
        "Design the feature scope (keep it small)",
        "Build backend endpoints first",
        "Build React Native UI second",
        "Connect them and test on device",
        "Deploy updated backend, verify production works"
      ],
      "deliverables": [
        "Demo video of feature on real device",
        "GitHub repo with both frontend and backend",
        "Live production URL",
        "Short blog post about the build"
      ],
      "passFail": {
        "pass": "Working feature on real device hitting production API",
        "fail": "Feature only works in simulator or localhost"
      }
    },
    "tasks": [
      {
        "id": "w6-d1",
        "day": "Day 1",
        "time": "3.75h",
        "depth": "Deep",
        "xp": 75,
        "text": "Plan one small feature (e.g., 'Notes with tags'), design API contract",
        "reason": "Scope control is what separates finishers from dreamers"
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
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build all backend endpoints for the feature",
        "reason": "Backend-first prevents UI rework"
      },
      {
        "id": "w6-d3",
        "day": "Day 3",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build React Native screens and state management for the feature",
        "reason": "This is where your mobile experience shines"
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
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Wire frontend to backend, handle loading and error states",
        "reason": "UX polish proves you care about the full experience"
      },
      {
        "id": "w6-d5",
        "day": "Day 5",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add pagination or search to the feature",
        "reason": "Performance at scale is a senior-level concern"
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
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Write end-to-end tests or manual test checklist",
        "reason": "Quality assurance mindset increases your market value"
      },
      {
        "id": "w6-d7",
        "day": "Day 7",
        "time": "2.5h",
        "depth": "Action",
        "xp": 25,
        "text": "Publish demo video: 'I built a full-stack app in 6 weeks'",
        "reason": "This is your portfolio anchor piece"
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
    "objective": "Learn Docker basics: images, containers, Dockerfile syntax",
    "why": "Containerization is mandatory for modern backend roles. It ensures your app runs the same on your machine as it does in production.",
    "steps": [
      "Install Docker Desktop.",
      "Learn the difference between an Image (template) and a Container (running instance).",
      "Understand the layered filesystem of Docker.",
      "Learn basic commands: `docker build`, `docker run`, `docker ps`, `docker stop`."
    ],
    "tools": ["Docker", "Docker Hub"],
    "deliverable": "A clear understanding of containerization concepts",
    "definitionOfDone": "You can explain why 'it works on my machine' is no longer a valid excuse",
    "commonMistakes": ["Confusing images with containers"],
    "resumeLine": null,
    "connectsTo": "w5-d2"
  },
  "w5-d2": {
    "objective": "Write Dockerfile for API, build and run container locally",
    "why": "If it doesn't run in Docker, it won't run in production. Mastering Dockerfiles allows you to define your environment as code.",
    "steps": [
      "Create a `Dockerfile` in your API root.",
      "Use `node:20-alpine` as the base image for a small footprint.",
      "Copy `package.json`, run `npm install`, and copy the rest of your code.",
      "Expose the port and define the CMD to start the server.",
      "Build the image and run it: `docker run -p 3000:3000 my-api`."
    ],
    "tools": ["Docker", "Node.js"],
    "deliverable": "A functional Docker image of your API",
    "definitionOfDone": "You can access your API via localhost:3000 while it's running inside a container",
    "commonMistakes": ["Including node_modules in the image (use .dockerignore)"],
    "resumeLine": "Created optimized multi-stage Docker builds for Node.js microservices",
    "connectsTo": "w5-d3"
  },
  "w5-d3": {
    "objective": "Write docker-compose.yml (API + PostgreSQL + Redis)",
    "why": "Compose is how teams run full stacks locally with a single command. It manages networking and volumes for you.",
    "steps": [
      "Create a `docker-compose.yml` file.",
      "Define three services: `app`, `db` (postgres), and `cache` (redis).",
      "Configure environment variables and internal networking.",
      "Set up a volume for the database so data isn't lost when the container stops.",
      "Run `docker-compose up` and verify all three services talk to each other."
    ],
    "tools": ["Docker Compose"],
    "deliverable": "A multi-container local development environment",
    "definitionOfDone": "`docker-compose up` starts the entire stack successfully",
    "commonMistakes": ["Incorrect network aliases", "Forgetting to wait for the DB to be ready before starting the app"],
    "resumeLine": "Orchestrated complex local development environments using Docker Compose",
    "connectsTo": "w5-d4"
  },
  "w5-d4": {
    "objective": "Set up GitHub Actions: run tests and build on every push",
    "why": "CI/CD is a non-negotiable skill for $150K+ roles. Automated testing prevents regressions and builds team trust.",
    "steps": [
      "Create `.github/workflows/ci.yml`.",
      "Set up a 'job' that runs on every push to the `main` branch.",
      "Steps: Checkout code → Setup Node.js → Install deps → Run tests.",
      "Add a 'build' step to ensure the Docker image still builds correctly.",
      "Verify that pushing a failing test turns the GitHub Action 'red'."
    ],
    "tools": ["GitHub Actions", "YAML"],
    "deliverable": "A green CI pipeline in your GitHub repo",
    "definitionOfDone": "Every commit is automatically vetted by GitHub's servers",
    "commonMistakes": ["Missing environment variables in the CI environment"],
    "resumeLine": "Implemented automated CI/CD pipelines with GitHub Actions, reducing manual deployment overhead",
    "connectsTo": "w5-d5"
  },
  "w5-d5": {
    "objective": "Launch AWS EC2, install Docker, deploy your container",
    "why": "AWS is the market leader; you must know the basics. Deploying to a raw server proves you understand infrastructure.",
    "steps": [
      "Sign up for an AWS Free Tier account.",
      "Launch a `t2.micro` EC2 instance with Amazon Linux or Ubuntu.",
      "Configure the Security Group to allow inbound traffic on port 80 and 3000.",
      "SSH into the instance and install Docker.",
      "Pull your code/image and run it. Verify the live IP works in your browser."
    ],
    "tools": ["AWS EC2", "SSH", "CloudWatch"],
    "deliverable": "A live API running on AWS infrastructure",
    "definitionOfDone": "You can reach your API via the EC2 public DNS/IP",
    "commonMistakes": ["Not opening the right ports in the Security Group"],
    "resumeLine": "Managed and deployed scalable infrastructure on AWS EC2 with Docker",
    "connectsTo": "boss-w5"
  },
  "w5-d6": {
    "objective": "Set up environment variables and secrets management",
    "why": "Leaked secrets destroy careers and companies. Proper configuration management is a senior hallmark.",
    "steps": [
      "Learn the difference between `.env` (local) and environment variables (production).",
      "Set up GitHub Secrets for your CI/CD pipeline.",
      "Use AWS Parameter Store or Secrets Manager (optional but recommended).",
      "Ensure `.env` is in your `.gitignore` and never committed."
    ],
    "tools": ["GitHub Secrets", "dotenv"],
    "deliverable": "A secure configuration strategy",
    "definitionOfDone": "No sensitive keys are visible in the codebase",
    "commonMistakes": ["Committing .env files to git", "Hardcoding API keys in the Dockerfile"],
    "resumeLine": "Implemented secure secrets management and environment configuration across dev/prod environments",
    "connectsTo": "w5-d7"
  },
  "w5-d7": {
    "objective": "Post LinkedIn carousel: 'From Mobile Dev to DevOps in 5 Weeks'",
    "why": "Carousels perform well and show growth trajectory. They position you as a lifelong learner who can master complex new domains.",
    "steps": [
      "Create 5-7 slides using Canva or Figma.",
      "Slide 1: Catchy title. Slide 2: Why DevOps matters for mobile. Slide 3: Docker basics. Slide 4: AWS deployment. Slide 5: CI/CD results. Slide 6: Call to action.",
      "Post it and engage with your network."
    ],
    "tools": ["Canva", "LinkedIn"],
    "deliverable": "One professional carousel post",
    "definitionOfDone": "Post is live and receiving engagement",
    "commonMistakes": ["Too much text per slide", "No visual diagrams"],
    "resumeLine": null,
    "connectsTo": "w6-d1"
  },
  "w6-d1": {
    "objective": "Plan one small feature (e.g., 'Notes with tags'), design API contract",
    "why": "Scope control is what separates finishers from dreamers. A clear contract prevents friction between front and backend.",
    "steps": [
      "Choose a feature that requires CRUD (e.g., Tasks, Notes, or a Wishlist).",
      "Define the DB schema: tables, columns, relationships.",
      "Write out the API endpoints: URL, Method, Request Body, Response JSON.",
      "Stick to this contract during the build phase."
    ],
    "tools": ["Notion", "Swagger (Optional)"],
    "deliverable": "A 1-page feature specification",
    "definitionOfDone": "The API contract is finalized before any code is written",
    "commonMistakes": ["Over-scoping the feature", "Changing the API contract halfway through"],
    "resumeLine": null,
    "connectsTo": "w6-d2"
  },
  "w6-d2": {
    "objective": "Build all backend endpoints for the feature",
    "why": "Backend-first prevents UI rework. It allows you to test logic with Postman before worrying about pixels.",
    "steps": [
      "Create the Prisma model for the new feature.",
      "Run migrations.",
      "Implement the controller logic for all CRUD operations.",
      "Add validation schemas (Zod).",
      "Test all routes with Postman."
    ],
    "tools": ["Prisma", "Express", "Postman"],
    "deliverable": "A complete API for your new feature",
    "definitionOfDone": "All endpoints return the expected data and handle errors correctly",
    "commonMistakes": ["Not adding auth protection to the new routes"],
    "resumeLine": "Designed and built high-performance REST APIs for complex product features",
    "connectsTo": "w6-d3"
  },
  "w6-d3": {
    "objective": "Build React Native screens and state management for the feature",
    "why": "This is where your mobile experience shines. Create a fluid, intuitive UI for your new data.",
    "steps": [
      "Create the list, create, and detail screens.",
      "Choose state management (React Query is highly recommended for server state).",
      "Implement optimistic updates for a snappy 'zero-latency' feel.",
      "Add basic styling with StyleSheet or Tailwind (NativeWind)."
    ],
    "tools": ["React Native", "React Query", "Lucide Icons"],
    "deliverable": "Functional mobile UI for the feature",
    "definitionOfDone": "UI looks professional and interacts correctly with local state",
    "commonMistakes": ["Prop drilling (use a hook or context)"],
    "resumeLine": "Built complex mobile UIs with optimized state management and real-time feedback",
    "connectsTo": "w6-d4"
  },
  "w6-d4": {
    "objective": "Wire frontend to backend, handle loading and error states",
    "why": "UX polish proves you care about the full experience. Users need to know if data is loading or if a request failed.",
    "steps": [
      "Connect UI buttons to API calls.",
      "Implement Skeletons or Spinners for loading states.",
      "Add 'Toast' notifications for success and error messages.",
      "Handle offline scenarios (retry buttons)."
    ],
    "tools": ["React Native", "Axios"],
    "deliverable": "A connected full-stack feature",
    "definitionOfDone": "The app correctly fetches and saves data to the backend with clear user feedback",
    "commonMistakes": ["Ignoring the 'Empty State' when there is no data"],
    "resumeLine": "Implemented resilient mobile-to-backend communication with robust error handling and polished UX states",
    "connectsTo": "boss-w6"
  },
  "w6-d5": {
    "objective": "Add pagination or search to the feature",
    "why": "Performance at scale is a senior-level concern. Fetching 10,000 items at once crashes apps; pagination is the fix.",
    "steps": [
      "Implement `limit` and `offset` in your Prisma queries.",
      "Update the API to return the total count.",
      "Build a 'Load More' or Infinite Scroll list in React Native.",
      "Add a search bar that filters data on the backend using SQL `LIKE` or `ILIKE`."
    ],
    "tools": ["Prisma", "FlatList"],
    "deliverable": "Optimized list management",
    "definitionOfDone": "You can search and scroll through large datasets without performance lag",
    "commonMistakes": ["Doing filtering on the frontend instead of the database"],
    "resumeLine": "Optimized mobile application performance through backend-driven pagination and search indexing",
    "connectsTo": "w6-d6"
  },
  "w6-d6": {
    "objective": "Write end-to-end tests or manual test checklist",
    "why": "Quality assurance mindset increases your market value. Shipping broken code is expensive; testing is the insurance.",
    "steps": [
      "Write a 'Happy Path' test for the feature.",
      "Create a manual test checklist covering edge cases (invalid input, no internet).",
      "Learn about Jest integration tests for controllers.",
      "Verify all tests pass before the final 'shipping' demo."
    ],
    "tools": ["Jest", "Supertest"],
    "deliverable": "A test suite or verified checklist",
    "definitionOfDone": "The feature is proven to be stable through rigorous testing",
    "commonMistakes": ["Only testing the happy path"],
    "resumeLine": "Championed code quality by implementing comprehensive automated test suites and QA protocols",
    "connectsTo": "w6-d7"
  },
  "w6-d7": {
    "objective": "Publish demo video: 'I built a full-stack app in 6 weeks'",
    "why": "This is your portfolio anchor piece. It's the ultimate proof that you can take a raw idea to a deployed product.",
    "steps": [
      "Record a high-quality walkthrough of the app.",
      "Highlight the tech stack: Node, Postgres, Docker, AWS, React Native.",
      "Share it on LinkedIn and add it to your portfolio website.",
      "Mention that you are now ready for Full-Stack / AI Engineer roles."
    ],
    "tools": ["Loom", "LinkedIn"],
    "deliverable": "A viral-ready portfolio video",
    "definitionOfDone": "The video is public and generating interest from your network",
    "commonMistakes": ["Video being too long (keep it under 90 seconds)"],
    "resumeLine": null,
    "connectsTo": "w7-d1"
  }
};
