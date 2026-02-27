export const WEEKS = [
  {
    id:'w1',
    num:'WEEK 01',
    color:'--w1',
    month:1,
    title:'PostgreSQL: From Documents to Relations',
    subtitle:'Why MongoDB habits hurt you at scale',
    goal:'Ace the "design a database schema" interview question',
    interviewQuestion:'Design a schema for Uber (drivers, riders, trips, payments)',
    timeEstimate:'6 hours',
    deliverable:'GitHub repo: nestjs-postgresql-starter with User/Post CRUD, JWT auth, deployed to Railway',
    mistakes:[
      'Installing PostgreSQL but not configuring authentication properly',
      'Skipping EXPLAIN ANALYZE - you cannot optimize what you cannot measure',
      'Using an ORM before understanding raw SQL'
    ],
    tasks:[
      {t:'Audit Zonesso MongoDB schema, migrate to PostgreSQL', time:'2 hours', why:'Real migration experience is more valuable than tutorials - prove it works', projectRef:{name:'Zonesso', metric:'50K downloads', context:'Chat app with 30% daily engagement'}, links:[
        {url:'https://github.com/FerretDB/FerretDB',tag:'FerretDB (Mongo on PostgreSQL)',type:'repo'},
        {url:'https://www.prisma.io/docs/guides/migrate-from-mongodb',tag:'Prisma MongoDB migration guide',type:'docs'},
      ]},
      {t:'Rewrite Zonesso resume entry with PostgreSQL migration metrics', time:'30 min', why:'Hiring managers read results - "migrated 50K user chat app from MongoDB to PostgreSQL"', projectRef:{name:'Zonesso', metric:'50K downloads', context:'Chat app with 30% daily engagement'}, links:[
        {url:'https://www.levels.fyi/',tag:'levels.fyi - see what seniors write',type:'interactive'},
      ]},
      {t:'Install PostgreSQL 15+ and pgAdmin (visual GUI, similar to MongoDB Compass)', time:'30 min', why:'You need local database for experimentation and learning', links:[
        {url:'https://github.com/dwyl/learn-postgresql',tag:'learn-postgresql',type:'repo'},
        {url:'https://www.postgresql.org/download/',tag:'official download',type:'docs'},
      ]},
      {t:'Practice SELECT, INSERT, UPDATE, DELETE until you can write them without looking', time:'1 hour', why:'These are 80% of your daily queries - muscle memory matters', links:[
        {url:'https://sqlbolt.com/',tag:'SQLBolt (interactive)',type:'interactive'},
        {url:'https://www.postgresqltutorial.com/postgresql-sql-syntax/',tag:'PostgreSQL tutorial',type:'docs'},
      ]},
      {t:'Master JOINs: understand what foreign keys actually mean', time:'1 hour', why:'JOINs are where relational databases shine - this is the power tool', links:[
        {url:'https://sql-joins.leozhu.me/',tag:'Visual SQL Joins',type:'interactive'},
        {url:'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/',tag:'PostgreSQL joins guide',type:'docs'},
      ]},
      {t:'Learn normalization: 3NF and when to intentionally denormalize for performance', time:'45 min', why:'Normalization prevents data anomalies; denormalization speeds up reads', links:[
        {url:'https://www.guru99.com/database-normalization.html',tag:'Normalization guide',type:'blog'},
      ]},
      {t:'Window functions: ROW_NUMBER, RANK, LEAD, LAG - SQL power tools', time:'1 hour', why:'Window functions solve problems that are painful in application code', links:[
        {url:'https://www.postgresqltutorial.com/postgresql-window-function/',tag:'PostgreSQL window functions',type:'docs'},
      ]},
      {t:'Connect PostgreSQL to NestJS with Prisma - your first integration', time:'1 hour', why:'Prisma is the modern standard for TypeScript database access', links:[
        {url:'https://github.com/notiz-dev/nestjs-prisma-starter',tag:'NestJS+Prisma starter',type:'repo'},
        {url:'https://docs.nestjs.com/recipes/prisma',tag:'official recipe',type:'docs'},
      ]},
    ]
  },
  {
    id:'w2',
    num:'WEEK 02',
    color:'--w2',
    month:1,
    title:'NestJS + PostgreSQL Production API',
    subtitle:'Connect your mobile skills to backend architecture',
    goal:'Build a production-ready API that you would actually ship',
    interviewQuestion:'Explain ACID properties and when you would sacrifice them',
    timeEstimate:'8 hours',
    deliverable:'Full CRUD NestJS API for Chit Fund or Job Matching app with authentication',
    mistakes:[
      'Not using transactions for multi-step operations',
      'Ignoring database indexes until performance degrades',
      'Storing passwords in plain text (use bcrypt, always)'
    ],
    tasks:[
      {t:'Optimize LinkedIn headline to "React Native Developer | PostgreSQL | AI Integration"', time:'45 min', why:'Recruiters search by keywords - your headline is your SEO', links:[
        {url:'https://www.linkedin.com/in/',tag:'Your LinkedIn profile',type:'interactive'},
        {url:'https://www.jobscan.co/linkedin-optimization',tag:'LinkedIn optimization guide',type:'blog'},
      ]},
      {t:'Add Zonesso and JIFFL to LinkedIn with metrics (50K downloads, 10K users)', time:'1 hour', why:'LinkedIn is your portfolio - employers check it before every interview', projectRef:{name:'Zonesso', metric:'50K downloads', context:'Chat app with 30% daily engagement'}, links:[
        {url:'https://www.linkedin.com/in/',tag:'Your LinkedIn profile',type:'interactive'},
      ]},
      {t:'Update portfolio website with PostgreSQL and AI projects', time:'1.5 hours', why:'A live demo is worth more than 100 bullet points on a resume', links:[
        {url:'https://github.com/',tag:'GitHub portfolio',type:'repo'},
      ]},
      {t:'Solidify NestJS architecture: modules, services, controllers pattern', time:'1 hour', why:'This structure scales from startup to enterprise', links:[
        {url:'https://docs.nestjs.com/',tag:'NestJS docs',type:'docs'},
        {url:'https://github.com/nestjs/nest/tree/master/sample',tag:'official samples',type:'repo'},
      ]},
      {t:'Prisma relations: one-to-one, one-to-many, many-to-many schemas', time:'1 hour', why:'Relations are where PostgreSQL outperforms MongoDB', links:[
        {url:'https://www.prisma.io/docs/orm/prisma-schema/data-model/relations',tag:'Prisma relations',type:'docs'},
      ]},
      {t:'Transactions and ACID - why they matter for chat and payment apps', time:'1 hour', why:'Your Zonesso chat needed transactions - now you know why', links:[
        {url:'https://www.prisma.io/docs/orm/prisma-client/queries/transactions',tag:'Prisma transactions',type:'docs'},
        {url:'https://www.postgresql.org/docs/current/transaction-iso.html',tag:'PostgreSQL isolation levels',type:'docs'},
      ]},
      {t:'Indexing strategies: B-tree, GIN, GiST - make queries fast', time:'1 hour', why:'Proper indexes make queries 100x faster; wrong indexes slow writes', links:[
        {url:'https://use-the-index-luke.com/',tag:'Use The Index, Luke',type:'blog'},
        {url:'https://www.postgresql.org/docs/current/indexes.html',tag:'PostgreSQL indexes docs',type:'docs'},
      ]},
      {t:'EXPLAIN ANALYZE - read a query plan for the first time', time:'45 min', why:'This is how you debug slow queries before they hit production', links:[
        {url:'https://thoughtbot.com/blog/reading-an-explain-analyze-query-plan',tag:'EXPLAIN guide',type:'blog'},
        {url:'https://www.postgresql.org/docs/current/using-explain.html',tag:'PostgreSQL official',type:'docs'},
      ]},
      {t:'CTEs (Common Table Expressions) - readable complex queries', time:'45 min', why:'CTEs make complex queries maintainable and debuggable', links:[
        {url:'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-cte/',tag:'CTE tutorial',type:'docs'},
      ]},
      {t:'Concurrency: locking, MVCC - how PostgreSQL handles multiple writes', time:'1 hour', why:'Understanding this prevents race bugs that are hard to reproduce', links:[
        {url:'https://www.postgresql.org/docs/current/mvcc.html',tag:'PostgreSQL MVCC docs',type:'docs'},
        {url:'https://www.citusdata.com/blog/2018/02/15/when-postgresql-blocks/',tag:'When PostgreSQL blocks',type:'blog'},
      ]},
      {t:'Add JWT authentication to API (you know this from mobile side)', time:'1 hour', why:'Connect your existing mobile auth knowledge to backend implementation', links:[
        {url:'https://docs.nestjs.com/security/authentication',tag:'NestJS auth docs',type:'docs'},
        {url:'https://github.com/notiz-dev/nestjs-prisma-starter',tag:'starter with auth',type:'repo'},
      ]},
    ]
  },
  {
    id:'w3',
    num:'WEEK 03',
    color:'--w3',
    month:1,
    title:'AI Integration for Mobile Developers',
    subtitle:'Add intelligence to your existing React Native apps',
    goal:'Build an AI feature that impresses in interviews',
    interviewQuestion:'How would you add AI to an existing app without breaking the bank?',
    timeEstimate:'6 hours',
    deliverable:'AI chat assistant integrated into your existing React Native app with streaming responses',
    mistakes:[
      'Calling AI APIs from mobile (expose API keys)',
      'Not implementing rate limiting (expensive mistakes)',
      'Storing AI responses without caching (redundant costs)'
    ],
    tasks:[
      {t:'Add AI job matching to JIFFL - use embeddings to match candidates to jobs', time:'3 hours', why:'This is your headline project: "added AI to 10K user job platform" - irresistible to recruiters', projectRef:{name:'JIFFL', metric:'10K users', context:'Job matching platform'}, links:[
        {url:'https://github.com/pgvector/pgvector',tag:'pgvector for embeddings',type:'repo'},
        {url:'https://platform.openai.com/docs/guides/embeddings',tag:'OpenAI embeddings',type:'docs'},
      ]},
      {t:'Call OpenAI/Claude API from your NestJS backend', time:'1 hour', why:'Backend protects API keys and adds business logic', links:[
        {url:'https://github.com/openai/openai-node',tag:'OpenAI Node SDK',type:'repo'},
        {url:'https://github.com/openai/openai-cookbook',tag:'OpenAI Cookbook',type:'repo'},
      ]},
      {t:'Stream AI responses - render in React Native', time:'1 hour', why:'Streaming improves perceived performance dramatically', links:[
        {url:'https://github.com/vercel/ai-sdk',tag:'Vercel AI SDK',type:'repo'},
      ]},
      {t:'Prompt engineering: system prompts, few-shot, chain-of-thought', time:'1 hour', why:'Better prompts are cheaper than bigger models', links:[
        {url:'https://github.com/dair-ai/Prompt-Engineering-Guide',tag:'Prompt Guide (48k stars)',type:'repo'},
        {url:'https://www.promptingguide.ai/',tag:'promptingguide.ai',type:'interactive'},
      ]},
      {t:'Function calling - AI decides which backend API to call', time:'1 hour', why:'This is how assistants actually do things', links:[
        {url:'https://platform.openai.com/docs/guides/function-calling',tag:'OpenAI function calling',type:'docs'},
        {url:'https://github.com/openai/openai-cookbook',tag:'cookbook examples',type:'repo'},
      ]},
      {t:'Store and retrieve AI responses in PostgreSQL properly', time:'1 hour', why:'History enables continuity and analytics', links:[
        {url:'https://github.com/langchain-ai/langchainjs',tag:'LangChain.js',type:'repo'},
        {url:'https://www.prisma.io/docs/orm/prisma-schema/data-model/models',tag:'Prisma models',type:'docs'},
      ]},
    ]
  },
  {
    id:'w4',
    num:'WEEK 04',
    color:'--w4',
    month:1,
    title:'AI at Scale + Backend Architecture',
    subtitle:'Production patterns that separate juniors from seniors',
    goal:'Architect AI systems that do not break under load',
    interviewQuestion:'Design a rate limiter for an AI API with cost controls',
    timeEstimate:'8 hours',
    deliverable:'Smart job matching for JIFFL using embeddings and vector search',
    mistakes:[
      'Building microservices before you need them (start with monolith)',
      'Not implementing retry logic with exponential backoff',
      'Ignoring token costs until you get a surprise bill'
    ],
    tasks:[
      {t:'Vector embeddings concept - semantic search fundamentals', time:'1 hour', why:'Embeddings turn text into math that computers can compare', links:[
        {url:'https://jalammar.github.io/illustrated-word2vec/',tag:'Illustrated Word2Vec',type:'blog'},
        {url:'https://platform.openai.com/docs/guides/embeddings',tag:'OpenAI embeddings',type:'docs'},
      ]},
      {t:'Install pgvector extension, store embeddings in PostgreSQL', time:'1 hour', why:'pgvector brings vector search to PostgreSQL - no new database needed', links:[
        {url:'https://github.com/pgvector/pgvector',tag:'pgvector repository',type:'repo'},
      ]},
      {t:'RAG: your app searches its own data using AI similarity', time:'1.5 hours', why:'RAG grounds AI responses in your actual data, reducing hallucinations', links:[
        {url:'https://www.pinecone.io/learn/retrieval-augmented-generation/',tag:'What is RAG?',type:'blog'},
      ]},
      {t:'Microservices versus Monolith - when to use which (start monolith)', time:'1 hour', why:'Most successful companies started monolithic and extracted services later', links:[
        {url:'https://microservices.io/patterns/monolithic.html',tag:'microservices.io',type:'blog'},
        {url:'https://www.youtube.com/watch?v=y8OnoxKotPQ',tag:'Monolith First (video)',type:'video'},
      ]},
      {t:'Message queues: Redis Pub/Sub, BullMQ for background jobs', time:'1.5 hours', why:'Queues decouple work from requests, making systems resilient', links:[
        {url:'https://github.com/taskforcesh/bullmq',tag:'BullMQ repository',type:'repo'},
        {url:'https://docs.nestjs.com/techniques/queues',tag:'NestJS queues',type:'docs'},
      ]},
      {t:'Rate limiting AI calls - cost control matters in production', time:'1 hour', why:'OpenAI bills by token - unlimited calls can cost thousands', links:[
        {url:'https://github.com/animir/node-rate-limiter-flexible',tag:'rate-limiter-flexible',type:'repo'},
        {url:'https://docs.nestjs.com/security/rate-limiting',tag:'NestJS throttle',type:'docs'},
      ]},
      {t:'Caching strategies: Redis, CDN, in-memory - when AI or DB is slow', time:'1 hour', why:'Cache is the fastest database - use it wisely', links:[
        {url:'https://github.com/node-cache/node-cache',tag:'node-cache',type:'repo'},
        {url:'https://docs.nestjs.com/techniques/caching',tag:'NestJS caching',type:'docs'},
        {url:'https://redis.io/docs/latest/develop/get-started/',tag:'Redis quickstart',type:'docs'},
      ]},
    ]
  },
  {
    id:'w5',
    num:'WEEK 05',
    color:'--w5',
    month:2,
    title:'AWS and Docker Foundations',
    subtitle:'Where your applications actually live',
    goal:'Deploy to production with confidence',
    interviewQuestion:'Deploy a Node.js application to AWS with zero downtime',
    timeEstimate:'8 hours',
    deliverable:'Dockerized NestJS API running on EC2 with RDS PostgreSQL',
    mistakes:[
      'Running databases on EC2 instead of using RDS (operational burden)',
      'Using root credentials instead of IAM roles (security risk)',
      'Not setting up CloudWatch alarms (you will not know when things break)'
    ],
    tasks:[
      {t:'Deploy Eco Crew to AWS EC2 + RDS PostgreSQL', time:'3 hours', why:'Real deployment experience - "deployed Eco Crew (5K downloads) to AWS production" is a resume game-changer', projectRef:{name:'Eco Crew', metric:'5K downloads', context:'Environmental tracking app'}, links:[
        {url:'https://aws.amazon.com/ec2/getting-started/',tag:'EC2 quickstart',type:'docs'},
        {url:'https://aws.amazon.com/rds/postgresql/getting-started/',tag:'RDS PostgreSQL setup',type:'docs'},
      ]},
      {t:'Create AWS Free Tier account, explore the console', time:'30 min', why:'Familiarity with the console saves hours when troubleshooting', links:[
        {url:'https://aws.amazon.com/getting-started/',tag:'AWS getting started',type:'docs'},
      ]},
      {t:'Docker: containerize your NestJS app (Dockerfile + docker-compose)', time:'2 hours', why:'Containers ensure your app runs the same everywhere', links:[
        {url:'https://docs.docker.com/get-started/',tag:'Docker get started',type:'docs'},
        {url:'https://github.com/BretFisher/node-docker-good-defaults',tag:'Node Docker defaults',type:'repo'},
        {url:'https://www.youtube.com/watch?v=pTFZFxd4hOI',tag:'Docker in 1 hour (video)',type:'video'},
      ]},
      {t:'EC2: spin up a Linux server, SSH in, run your NestJS app', time:'1.5 hours', why:'Understanding servers helps you debug deployment issues', links:[
        {url:'https://aws.amazon.com/ec2/getting-started/',tag:'EC2 quickstart',type:'docs'},
      ]},
      {t:'RDS: managed PostgreSQL - no setup, just connect', time:'1 hour', why:'RDS handles backups, patches, and scaling - focus on your app', links:[
        {url:'https://aws.amazon.com/rds/postgresql/getting-started/',tag:'RDS PostgreSQL setup',type:'docs'},
      ]},
      {t:'S3: file storage (like your Cone document handling, at real scale)', time:'1 hour', why:'S3 is infinite storage with 99.999999999% durability', links:[
        {url:'https://aws.amazon.com/s3/getting-started/',tag:'S3 basics',type:'docs'},
      ]},
      {t:'IAM: roles and policies - understand least privilege', time:'2 hours', why:'Security incidents often start with overly permissive IAM', links:[
        {url:'https://www.youtube.com/watch?v=Z3Spx6Inz80',tag:'IAM explained (video)',type:'video'},
        {url:'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',tag:'IAM docs',type:'docs'},
      ]},
    ]
  },
  {
    id:'w6',
    num:'WEEK 06',
    color:'--w6',
    month:2,
    title:'AWS for Mobile + CI/CD Pipeline',
    subtitle:'Services that directly help your React Native applications',
    goal:'Build a professional deployment pipeline',
    interviewQuestion:'Set up CI/CD for a mobile team with backend API',
    timeEstimate:'8 hours',
    deliverable:'S3 uploads + CloudFront CDN + GitHub Actions CI/CD pipeline',
    mistakes:[
      'Deploying manually (error-prone and slow)',
      'Not using staging environment (production is not a playground)',
      'Storing secrets in GitHub (use Secrets Manager instead)'
    ],
    tasks:[
      {t:'API Gateway: expose NestJS to mobile safely with throttling', time:'1.5 hours', why:'API Gateway handles auth, rate limiting, and caching at the edge', links:[
        {url:'https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html',tag:'API Gateway guide',type:'docs'},
      ]},
      {t:'Lambda: serverless functions for background jobs (cron, etc)', time:'1.5 hours', why:'Lambda scales to zero - pay only when code runs', links:[
        {url:'https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html',tag:'Lambda + Node.js',type:'docs'},
      ]},
      {t:'SNS: push notifications at scale (you know FCM, this is bigger)', time:'1 hour', why:'SNS can push to multiple platforms with one API', links:[
        {url:'https://docs.aws.amazon.com/sns/latest/dg/sns-mobile-push-notifications.html',tag:'SNS push guide',type:'docs'},
      ]},
      {t:'CloudFront CDN: faster image loading in React Native', time:'1 hour', why:'CDN puts content closer to users, reducing load times', links:[
        {url:'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html',tag:'CloudFront setup',type:'docs'},
      ]},
      {t:'CloudWatch: monitoring, alarms, logs - know when your app breaks', time:'1.5 hours', why:'You cannot fix what you cannot see - observability is critical', links:[
        {url:'https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/GettingStarted.html',tag:'CloudWatch guide',type:'docs'},
      ]},
      {t:'CI/CD: GitHub Actions to auto-deploy on push (build, test, deploy)', time:'1.5 hours', why:'Automated deployment reduces bugs and speeds up releases', links:[
        {url:'https://docs.github.com/en/actions/quickstart',tag:'Actions quickstart',type:'docs'},
        {url:'https://github.com/actions/starter-workflows',tag:'starter workflows',type:'repo'},
      ]},
      {t:'AWS Cloud Practitioner exam - study and schedule it this week', time:'2 hours', why:'This certification validates your cloud knowledge to employers', links:[
        {url:'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials',tag:'Free course (official)',type:'interactive'},
      ]},
    ]
  },
  {
    id:'w7',
    num:'WEEK 07',
    color:'--w7',
    month:2,
    title:'System Design: Mobile Architecture',
    subtitle:'You built these - now explain them at scale',
    goal:'Whiteboard mobile systems confidently',
    interviewQuestion:'Design WhatsApp: messaging for one billion users',
    timeEstimate:'8 hours',
    deliverable:'Zonesso architecture diagram on Excalidraw - full system design',
    mistakes:[
      'Designing for scale you do not have (premature optimization)',
      'Ignoring offline-first requirements (users hate loading spinners)',
      'Not considering battery life (kills user experience)'
    ],
    tasks:[
      {t:'Draw the architecture of your Zonesso chat - what breaks at 1 million users?', time:'1.5 hours', why:'Understanding your own systems reveals gaps in your knowledge', links:[
        {url:'https://github.com/donnemartin/system-design-primer',tag:'System Design Primer (285k stars)',type:'repo'},
        {url:'https://getstream.io/blog/chat-infrastructure/',tag:'Chat at scale',type:'blog'},
      ]},
      {t:'Design WhatsApp: end-to-end encrypted messaging at billion scale', time:'1.5 hours', why:'This classic interview question tests your distributed systems knowledge', links:[
        {url:'https://github.com/donnemartin/system-design-primer#design-a-chat-system',tag:'Chat system design',type:'repo'},
        {url:'https://blog.bytebytego.com/p/design-a-chat-system',tag:'ByteByteGo chat',type:'blog'},
      ]},
      {t:'Offline-first sync: how React Query + backend handle conflicts', time:'1 hour', why:'Your users are on subway, planes, and rural networks - plan for it', links:[
        {url:'https://pouchdb.com/guides/',tag:'Offline-first guide',type:'blog'},
      ]},
      {t:'Real-time: WebSockets versus SSE versus polling - when to use each', time:'1 hour', why:'Each has tradeoffs in battery, latency, and complexity', links:[
        {url:'https://blog.bytebytego.com/p/websockets-vs-sse-vs-polling',tag:'ByteByteGo comparison',type:'blog'},
        {url:'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',tag:'MDN WebSockets',type:'docs'},
      ]},
      {t:'Design Uber: real-time location tracking + matching at scale', time:'1.5 hours', why:'Tests your understanding of geospatial data and real-time systems', links:[
        {url:'https://github.com/donnemartin/system-design-primer#design-uber',tag:'Uber design (GitHub)',type:'repo'},
        {url:'https://blog.bytebytego.com/p/design-uber',tag:'ByteByteGo Uber',type:'blog'},
      ]},
      {t:'Push notification system design - at Twitter scale', time:'1 hour', why:'Notifications seem simple until you need to send millions per second', links:[
        {url:'https://firebase.google.com/docs/cloud-messaging',tag:'FCM docs',type:'docs'},
      ]},
      {t:'App performance deep dive: startup time, image cache, bundle size', time:'1.5 hours', why:'Performance is a feature - users abandon slow apps', links:[
        {url:'https://reactnative.dev/docs/performance',tag:'RN performance docs',type:'docs'},
        {url:'https://shopify.engineering/measuring-react-native-app-startup',tag:'Shopify RN performance',type:'blog'},
      ]},
    ]
  },
  {
    id:'w8',
    num:'WEEK 08',
    color:'--w8',
    month:2,
    title:'System Design: Backend Architecture',
    subtitle:'Interview mode - tie everything together',
    goal:'Pass system design interviews at top companies',
    interviewQuestion:'Design a URL shortener and a payment processing system',
    timeEstimate:'10 hours',
    deliverable:'Final portfolio project combining PostgreSQL + AWS + AI with architecture README',
    mistakes:[
      'Not explaining tradeoffs (every decision has costs)',
      'Ignoring failure modes (systems fail - plan for it)',
      'Over-engineering simple problems (KISS principle)'
    ],
    tasks:[
      {t:'Design a job feed system (whiteboard JIFFL at 10 million users)', time:'2 hours', why:'Feed systems are common and have well-understood patterns', links:[
        {url:'https://github.com/donnemartin/system-design-primer#design-the-facebook-news-feed',tag:'Feed design (GitHub)',type:'repo'},
      ]},
      {t:'Design a payment processing system (from your Cone experience)', time:'2 hours', why:'Payments require idempotency, retries, and audit trails', links:[
        {url:'https://docs.stripe.com/payments/accept-a-payment',tag:'Stripe payments',type:'docs'},
      ]},
      {t:'Classic: design a URL shortener and a rate limiter', time:'2 hours', why:'These are interview staples that test fundamental distributed systems concepts', links:[
        {url:'https://github.com/donnemartin/system-design-primer#design-a-url-shortener-like-tinyurl',tag:'URL shortener design',type:'repo'},
        {url:'https://github.com/donnemartin/system-design-primer#design-a-rate-limiter',tag:'Rate limiter design',type:'repo'},
      ]},
      {t:'Take the AWS Cloud Practitioner exam this week', time:'3 hours', why:'Schedule it, take it, pass it - add to your resume immediately', links:[
        {url:'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials',tag:'Free exam prep',type:'interactive'},
      ]},
      {t:'Ship: one project with PostgreSQL + AWS + AI + README with architecture decisions', time:'1 hour', why:'Documentation shows senior-level communication skills', links:[
        {url:'https://github.com/lujakob/nestjs-realworld-example-app',tag:'NestJS RealWorld example',type:'repo'},
      ]},
    ]
  },
  {
    id:'w9',
    num:'WEEK 09',
    color:'--w9',
    month:3,
    title:'Interview Mastery',
    subtitle:'Behavioral + coding + mock interviews',
    goal:'Confidently articulate your experience and skills',
    interviewQuestion:'Tell me about a time you had a conflict with a teammate',
    timeEstimate:'8 hours',
    deliverable:'Can confidently explain your technical decisions in 5 minutes or less',
    mistakes:[
      'Not preparing STAR stories (you will ramble)',
      'Underselling your experience (you did more than you think)',
      'Not asking questions (interviews are two-way)'
    ],
    tasks:[
      {t:'Prepare 5 STAR method stories from your real experience', time:'2 hours', why:'STAR keeps your answers structured and memorable', links:[
        {url:'https://www.themuse.com/advice/star-interview-method',tag:'STAR method guide',type:'blog'},
      ]},
      {t:'Practice LeetCode SQL problems - one per day for a week', time:'1 hour', why:'SQL interviews are common for backend-heavy roles', links:[
        {url:'https://leetcode.com/problemset/database/',tag:'LeetCode Database',type:'interactive'},
        {url:'https://www.hackerrank.com/domains/sql',tag:'HackerRank SQL',type:'interactive'},
      ]},
      {t:'Do 2 mock system design interviews on Pramp (free)', time:'2 hours', why:'Practice reduces anxiety and reveals gaps in your knowledge', links:[
        {url:'https://www.pramp.com/',tag:'Pramp (free mocks)',type:'interactive'},
        {url:'https://interviewing.io/',tag:'interviewing.io',type:'interactive'},
      ]},
      {t:'Document 3 leadership stories: conflict, failure, mentoring', time:'2 hours', why:'Senior roles require leadership examples', links:[
        {url:'https://www.youtube.com/watch?v=PJKYqLP6MRE',tag:'Amazon leadership tips',type:'video'},
      ]},
      {t:'Practice explaining your Zonesso architecture in 5 minutes', time:'1 hour', why:'The elevator pitch shows you truly understand your own work', links:[
        {url:'https://excalidraw.com/',tag:'Excalidraw (whiteboard)',type:'interactive'},
      ]},
    ]
  },
  {
    id:'w10',
    num:'WEEK 10',
    color:'--w10',
    month:3,
    title:'Docker and DevOps Deep Dive',
    subtitle:'Infrastructure as code mindset',
    goal:'Automate everything that can be automated',
    interviewQuestion:'Design a CI/CD pipeline for a mobile team',
    timeEstimate:'8 hours',
    deliverable:'Full CI/CD pipeline that auto-deploys your project on every push',
    mistakes:[
      'Not tagging Docker images (latest is not a version)',
      'Skipping health checks (Kubernetes needs to know if app is healthy)',
      'Hardcoding configuration (use environment variables)'
    ],
    tasks:[
      {t:'Multi-stage Docker builds: smaller images, faster deploys', time:'1.5 hours', why:'Multi-stage removes build dependencies from production images', links:[
        {url:'https://docs.docker.com/build/building/multi-stage/',tag:'Multi-stage builds',type:'docs'},
        {url:'https://github.com/docker/awesome-compose',tag:'awesome-compose',type:'repo'},
      ]},
      {t:'docker-compose for local dev: PostgreSQL + Redis + NestJS + React Native', time:'1.5 hours', why:'One command to start your entire stack - new developers love this', links:[
        {url:'https://docs.docker.com/compose/gettingstarted/',tag:'Compose tutorial',type:'docs'},
      ]},
      {t:'Terraform basics: define AWS infrastructure as code (EC2 + RDS)', time:'2 hours', why:'Infrastructure as code prevents configuration drift', links:[
        {url:'https://developer.hashicorp.com/terraform/tutorials/aws-get-started',tag:'Terraform AWS tutorial',type:'interactive'},
        {url:'https://github.com/terraform-aws-modules',tag:'Terraform AWS modules',type:'repo'},
      ]},
      {t:'GitHub Actions: build + test + deploy pipeline for your project', time:'2 hours', why:'Automated pipelines catch errors before they reach production', links:[
        {url:'https://github.com/sdras/awesome-actions',tag:'awesome-actions',type:'repo'},
        {url:'https://docs.github.com/en/actions/deployment',tag:'GitHub deploy docs',type:'docs'},
      ]},
      {t:'Environment secrets management: .env versus AWS Secrets Manager', time:'1 hour', why:'Secrets in code are a security incident waiting to happen', links:[
        {url:'https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html',tag:'Secrets Manager',type:'docs'},
      ]},
    ]
  },
  {
    id:'w11',
    num:'WEEK 11',
    color:'--w11',
    month:3,
    title:'Advanced Architecture Patterns',
    subtitle:'Event-driven + distributed systems',
    goal:'Design systems that handle millions of users',
    interviewQuestion:'Design a notification system that sends 10 million emails per hour',
    timeEstimate:'8 hours',
    deliverable:'Event-driven notification system for your application',
    mistakes:[
      'Not handling duplicate events (idempotency is critical)',
      'Ignoring observability (distributed systems are hard to debug)',
      'Choosing complexity over simplicity (start simple, evolve)'
    ],
    tasks:[
      {t:'Event-driven architecture: pub/sub, event sourcing concepts', time:'2 hours', why:'Events decouple systems and enable scalability', links:[
        {url:'https://microservices.io/patterns/data/event-sourcing.html',tag:'Event sourcing pattern',type:'blog'},
        {url:'https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html',tag:'AWS EventBridge',type:'docs'},
      ]},
      {t:'Redis deep dive: caching, pub/sub, rate limiting, sessions', time:'2 hours', why:'Redis is the Swiss Army knife of backend development', links:[
        {url:'https://github.com/redis/node-redis',tag:'node-redis',type:'repo'},
        {url:'https://university.redis.io/',tag:'Redis University (free)',type:'interactive'},
      ]},
      {t:'Database replication: read replicas, connection pooling', time:'1.5 hours', why:'Read replicas scale read-heavy workloads', links:[
        {url:'https://www.postgresql.org/docs/current/high-availability.html',tag:'PostgreSQL HA docs',type:'docs'},
        {url:'https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool',tag:'Prisma pooling',type:'docs'},
      ]},
      {t:'API versioning, rate limiting, pagination - production API patterns', time:'1.5 hours', why:'These patterns keep APIs maintainable over years', links:[
        {url:'https://blog.bytebytego.com/p/api-design-best-practices',tag:'ByteByteGo API design',type:'blog'},
      ]},
      {t:'Read "Designing Data-Intensive Applications" chapters 1-6', time:'1 hour', why:'This book is the bible of backend engineering - read it slowly', links:[
        {url:'https://dataintensive.net/',tag:'DDIA book site',type:'docs'},
        {url:'https://github.com/ept/ddia-references',tag:'DDIA references',type:'repo'},
      ]},
    ]
  },
  {
    id:'w12',
    num:'WEEK 12',
    color:'--w12',
    month:3,
    title:'Career Growth and Next Steps',
    subtitle:'Continue after you land the job',
    goal:'Position yourself for Staff Engineer and beyond',
    interviewQuestion:'Where do you see yourself in 5 years?',
    timeEstimate:'6 hours',
    deliverable:'Public portfolio + blog + open source contributions started',
    mistakes:[
      'Stopping learning after getting the job (tech moves fast)',
      'Not building a public reputation (hidden talent gets underpaid)',
      'Ignoring mentorship (teaching reinforces learning)'
    ],
    tasks:[
      {t:'Plan AWS Solutions Architect Associate certification (next 3 months)', time:'1 hour', why:'This certification opens doors to cloud architect roles', links:[
        {url:'https://aws.amazon.com/certification/certified-solutions-architect-associate/',tag:'SA Associate',type:'docs'},
        {url:'https://www.youtube.com/watch?v=Ia-UEYYR44s',tag:'SA course (free video)',type:'video'},
      ]},
      {t:'Kubernetes basics: pods, services, deployments - container orchestration', time:'2 hours', why:'Kubernetes is the standard for container orchestration', links:[
        {url:'https://kubernetes.io/docs/tutorials/kubernetes-basics/',tag:'Kubernetes basics',type:'interactive'},
        {url:'https://github.com/kelseyhightower/kubernetes-the-hard-way',tag:'Kubernetes the hard way',type:'repo'},
      ]},
      {t:'Start contributing to open source (NestJS, Prisma, or React Native ecosystem)', time:'1.5 hours', why:'Open source contributions demonstrate collaboration and code quality', links:[
        {url:'https://github.com/firstcontributions/first-contributions',tag:'first-contributions',type:'repo'},
        {url:'https://goodfirstissue.dev/',tag:'Good First Issues',type:'interactive'},
      ]},
      {t:'Start a technical blog or LinkedIn presence', time:'1 hour', why:'Teaching others establishes you as an expert', links:[
        {url:'https://dev.to/',tag:'dev.to',type:'interactive'},
        {url:'https://hashnode.com/',tag:'Hashnode',type:'interactive'},
      ]},
      {t:'Build your "Senior Engineer" narrative and update resume + LinkedIn', time:'1.5 hours', why:'Your story should reflect your new skills and ambitions', links:[
        {url:'https://www.levels.fyi/',tag:'levels.fyi (salary data)',type:'interactive'},
      ]},
    ]
  },
];

export const WEEK8_ITEMS = [
  {
    id: "w8-1",
    text: "GitHub repo: finance-api-postgres",
    desc: "PostgreSQL + NestJS + JWT with tests",
  },
  {
    id: "w8-2",
    text: "GitHub repo: ai-expense-tracker",
    desc: "OpenAI integration + demo video on README",
  },
  {
    id: "w8-3",
    text: "AWS Cloud Practitioner certification",
    desc: "Or AWS Developer Associate (preferred)",
  },
  {
    id: "w8-4",
    text: "3 Excalidraw architecture diagrams",
    desc: "Posted to LinkedIn or blog",
  },
  {
    id: "w8-5",
    text: "5 STAR stories written and practiced",
    desc: "Situation, Task, Action, Result",
  },
  {
    id: "w8-6",
    text: 'Resume updated with "PostgreSQL, AI Integration, AWS"',
    desc: "Focus on outcomes, not duties",
  },
  {
    id: "w8-7",
    text: "LinkedIn headline updated",
    desc: "React Native + AI + AWS specialist",
  },
  {
    id: "w8-8",
    text: "50 job applications sent",
    desc: "With personalized cover letters",
  },
  {
    id: "w8-9",
    text: "3-5 interview calls scheduled",
    desc: "Focus on remote-first companies",
  },
];

// Backward compatibility for any non-module consumers.
if (typeof window !== "undefined") {
  window.WEEKS = WEEKS
  window.WEEK8_ITEMS = WEEK8_ITEMS
}
