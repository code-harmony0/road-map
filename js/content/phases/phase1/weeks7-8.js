export const WEEKS = [
  {
    "id": "w7",
    "num": "WEEK 07",
    "title": "AI Foundations",
    "theme": "\"AI-Native\" Shift",
    "color": "#ec4899",
    "boss": {
      "id": "boss-w7",
      "name": "The AI Integrator",
      "challenge": "Add a working AI feature to your API with cost tracking and streaming, then connect it to your mobile app",
      "rewardXP": 500,
      "resumeLine": "Integrated OpenAI LLM into production API with streaming responses, cost tracking, and React Native UI",
      "successCriteria": [
        "AI endpoint returns generated text from OpenAI API",
        "Cost per request is logged and tracked",
        "React Native displays streamed response in real-time",
        "Rate limiting prevents runaway costs"
      ],
      "howToComplete": [
        "Set up OpenAI API key securely",
        "Build /ai/chat endpoint with prompt template",
        "Implement Server-Sent Events (SSE) for streaming",
        "Add cost calculation middleware (track tokens)",
        "Build chat UI in React Native with streaming text"
      ],
      "deliverables": [
        "Working AI chat feature in mobile app",
        "Cost tracking log or dashboard",
        "GitHub repo with AI module",
        "LinkedIn post with demo"
      ],
      "passFail": {
        "pass": "Streaming AI chat works in app with cost tracking",
        "fail": "No streaming or no cost controls"
      }
    },
    "tasks": [
      {
        "id": "w7-d1",
        "day": "Day 1",
        "time": "3.75h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study OpenAI API: models, tokens, pricing, rate limits",
        "reason": "You cannot ship AI profitably without understanding costs"
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
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build /ai/generate endpoint with GPT-4o-mini",
        "reason": "Start with cheap models; prove the integration first"
      },
      {
        "id": "w7-d3",
        "day": "Day 3",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Implement Server-Sent Events (SSE) for streaming responses",
        "reason": "Streaming UX is the difference between toy and product"
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
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add cost tracking: log tokens used and $ spent per request",
        "reason": "FinOps is what senior AI engineers do"
      },
      {
        "id": "w7-d5",
        "day": "Day 5",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Build chat UI in React Native with real-time streaming display",
        "reason": "Your mobile background is your moat here"
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
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Add rate limiting and max-token caps to prevent cost spikes",
        "reason": "Production safety — one bug can cost hundreds of dollars"
      },
      {
        "id": "w7-d7",
        "day": "Day 7",
        "time": "2.5h",
        "depth": "Action",
        "xp": 25,
        "text": "Post demo on LinkedIn: 'Adding AI to my React Native app'",
        "reason": "AI content gets high engagement from recruiters right now"
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
    "title": "RAG & Vector Search",
    "theme": "Specialist AI",
    "color": "#6366f1",
    "boss": {
      "id": "boss-w8",
      "name": "The RAG Architect",
      "challenge": "Build a semantic search system: ingest documents, generate embeddings, store in vector DB, query from mobile",
      "rewardXP": 500,
      "resumeLine": "Built production RAG pipeline with Pinecone vector DB, OpenAI embeddings, and semantic search API",
      "successCriteria": [
        "Documents are chunked and embedded into vector DB",
        "Semantic search endpoint returns relevant results",
        "React Native can search and display results",
        "System has offline fallback or caching"
      ],
      "howToComplete": [
        "Set up Pinecone or Weaviate account",
        "Build document ingestion pipeline (chunk + embed)",
        "Create /search/semantic endpoint",
        "Connect to React Native search screen",
        "Add basic fallback if vector DB is down"
      ],
      "deliverables": [
        "Vector DB index with embedded documents",
        "Working semantic search in mobile app",
        "Architecture diagram of RAG flow",
        "Blog post explaining your RAG build"
      ],
      "passFail": {
        "pass": "Semantic search works end-to-end with real embeddings",
        "fail": "Keyword search pretending to be semantic search"
      }
    },
    "tasks": [
      {
        "id": "w8-d1",
        "day": "Day 1",
        "time": "3.75h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study embeddings and vector databases: what they are and why they matter",
        "reason": "RAG is the #1 AI pattern in production right now"
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
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Set up Pinecone index, build document chunking logic",
        "reason": "Chunking strategy directly impacts search quality"
      },
      {
        "id": "w8-d3",
        "day": "Day 3",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Generate embeddings with OpenAI, upsert to Pinecone",
        "reason": "This is the core data pipeline of every RAG system"
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
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Build /search endpoint: convert query to embedding, search vector DB",
        "reason": "The query side is just as important as ingestion"
      },
      {
        "id": "w8-d5",
        "day": "Day 5",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Integrate semantic search into React Native app",
        "reason": "Mobile + RAG is a rare and valuable combination"
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
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Add hybrid search (keyword + semantic) or offline cache",
        "reason": "Resilience engineering separates seniors from juniors"
      },
      {
        "id": "w8-d7",
        "day": "Day 7",
        "time": "2.5h",
        "depth": "Action",
        "xp": 25,
        "text": "Write blog: 'How I Built RAG for React Native in One Week'",
        "reason": "RAG + Mobile is a niche with almost no competition"
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
    "objective": "Study OpenAI API: models, tokens, pricing, rate limits",
    "why": "You cannot ship AI profitably without understanding costs. Token management is the foundation of AI engineering.",
    "steps": [
      "Understand the difference between `gpt-4o` and `gpt-4o-mini`.",
      "Learn how tokens are calculated (words vs tokens).",
      "Study pricing tiers and set up billing alerts.",
      "Learn about rate limits (RPM and TPM)."
    ],
    "tools": ["OpenAI Platform", "Tokenizer Tool"],
    "deliverable": "A clear understanding of OpenAI's cost model",
    "definitionOfDone": "You can estimate the cost of a chat session with 10 turns",
    "commonMistakes": ["Ignoring the cost of input tokens in long conversations"],
    "resumeLine": null,
    "connectsTo": "w7-d2"
  },
  "w7-d2": {
    "objective": "Build /ai/generate endpoint with GPT-4o-mini",
    "why": "Start with cheap models; prove the integration first. GPT-4o-mini is perfect for rapid development and testing.",
    "steps": [
      "Securely store your API key in `.env`.",
      "Install the `openai` npm package.",
      "Create a POST route that takes a user message and returns a completion.",
      "Implement prompt templating to give the AI context (system prompt).",
      "Test with Postman."
    ],
    "tools": ["OpenAI SDK", "Express"],
    "deliverable": "A working AI text generation endpoint",
    "definitionOfDone": "The API returns valid JSON from OpenAI based on user input",
    "commonMistakes": ["Exposing the API key in the frontend client code"],
    "resumeLine": "Integrated OpenAI's GPT models into custom backend services with optimized prompt engineering",
    "connectsTo": "w7-d3"
  },
  "w7-d3": {
    "objective": "Implement Server-Sent Events (SSE) for streaming responses",
    "why": "Streaming UX is the difference between toy and product. It reduces perceived latency for the user.",
    "steps": [
      "Set up the response headers for SSE: `text/event-stream`.",
      "Iterate over the OpenAI stream chunk by chunk.",
      "Write each chunk to the response buffer immediately.",
      "Close the connection when the stream ends.",
      "Test with `curl` to see the text appearing in real-time."
    ],
    "tools": ["OpenAI Streaming API", "HTTP SSE"],
    "deliverable": "A streaming AI completion endpoint",
    "definitionOfDone": "The API sends text chunks as they are generated, rather than waiting for the full response",
    "commonMistakes": ["Forgetting to set `Connection: keep-alive`"],
    "resumeLine": "Implemented real-time AI response streaming using Server-Sent Events (SSE), improving perceived UX by 70%",
    "connectsTo": "w7-d4"
  },
  "w7-d4": {
    "objective": "Add cost tracking: log tokens used and $ spent per request",
    "why": "FinOps is what senior AI engineers do. You must be able to justify the cost of your features.",
    "steps": [
      "Log the `usage` object returned by the OpenAI API.",
      "Calculate cost based on current model rates.",
      "Store the usage data in your PostgreSQL database.",
      "Build a simple log viewer or dashboard to see daily spend."
    ],
    "tools": ["PostgreSQL", "OpenAI Usage API"],
    "deliverable": "An internal cost-tracking database",
    "definitionOfDone": "Every AI call has a corresponding row in the DB with accurate token counts and cost",
    "commonMistakes": ["Ignoring the cost of tokens during streaming (OpenAI returns usage at the end)"],
    "resumeLine": "Developed custom AI FinOps dashboards to monitor and optimize token consumption and API costs",
    "connectsTo": "w7-d5"
  },
  "w7-d5": {
    "objective": "Build chat UI in React Native with real-time streaming display",
    "why": "Your mobile background is your moat here. Creating a smooth, chat-like experience on mobile is a core value add.",
    "steps": [
      "Create a chat bubble UI with a list of messages.",
      "Use `fetch` with a readable stream or a library like `react-native-sse`.",
      "Append text chunks to the last message as they arrive.",
      "Implement auto-scroll to keep the latest text in view.",
      "Add a 'stop' button to cancel the stream."
    ],
    "tools": ["React Native", "ReadableStream", "Auto-scroll"],
    "deliverable": "A production-quality AI chat interface",
    "definitionOfDone": "User sees the AI 'typing' in real-time on their device",
    "commonMistakes": ["Re-rendering the entire list for every character chunk (performance hit)"],
    "resumeLine": "Engineered highly responsive mobile AI chat interfaces with real-time streaming and optimized rendering",
    "connectsTo": "boss-w7"
  },
  "w7-d6": {
    "objective": "Add rate limiting and max-token caps to prevent cost spikes",
    "why": "Production safety — one bug can cost hundreds of dollars. Defensive engineering is critical for AI startups.",
    "steps": [
      "Set a strict `max_tokens` limit on every OpenAI call.",
      "Implement user-level rate limits (e.g., 20 calls per hour).",
      "Add a 'Circuit Breaker' that disables AI if daily cost exceeds a threshold.",
      "Verify that exceeding the limit returns a helpful error to the user."
    ],
    "tools": ["Rate Limiter", "Circuit Breaker Pattern"],
    "deliverable": "A cost-safe AI implementation",
    "definitionOfDone": "You can't accidentally spend $50 on a single runaway request",
    "commonMistakes": ["Only setting global limits instead of user-specific ones"],
    "resumeLine": "Implemented comprehensive AI safety guardrails, including token caps and cost-based circuit breakers",
    "connectsTo": "w7-d7"
  },
  "w7-d7": {
    "objective": "Post demo on LinkedIn: 'Adding AI to my React Native app'",
    "why": "AI content gets high engagement from recruiters right now. It signals you are keeping up with the industry's rapid evolution.",
    "steps": [
      "Record your phone screen while chatting with the AI.",
      "Highlight the streaming speed and the cost tracking.",
      "Explain the tech stack: Node.js, SSE, OpenAI, React Native.",
      "Tag hiring managers at AI companies."
    ],
    "tools": ["LinkedIn", "Loom"],
    "deliverable": "A viral-ready AI demo post",
    "definitionOfDone": "The post is live and shared with your network",
    "commonMistakes": ["Being too vague about the tech used"],
    "resumeLine": null,
    "connectsTo": "w8-d1"
  },
  "w8-d1": {
    "objective": "Study embeddings and vector databases: what they are and why they matter",
    "why": "RAG is the #1 AI pattern in production right now. It allows AI to use your private data without retraining models.",
    "steps": [
      "Understand what a Vector is in the context of LLMs.",
      "Learn about Cosine Similarity and nearest-neighbor search.",
      "Compare different Vector DBs: Pinecone, Weaviate, Milvus, pgvector.",
      "Understand the RAG lifecycle: Retrieval → Augmentation → Generation."
    ],
    "tools": ["Pinecone Docs", "LangChain Blog"],
    "deliverable": "Mental map of the RAG architecture",
    "definitionOfDone": "You can explain why a standard SQL database is bad for searching meaning",
    "commonMistakes": ["Thinking RAG is the same as fine-tuning"],
    "resumeLine": null,
    "connectsTo": "w8-d2"
  },
  "w8-d2": {
    "objective": "Set up Pinecone index, build document chunking logic",
    "why": "Chunking strategy directly impacts search quality. Too small and you lose context; too large and you lose precision.",
    "steps": [
      "Create a free Pinecone account and an index with 1536 dimensions (for OpenAI).",
      "Write a script to split large text files into 'chunks' (e.g., 500 characters).",
      "Implement 'overlapping' to ensure context isn't lost between chunks.",
      "Verify chunk sizes are consistent."
    ],
    "tools": ["Pinecone", "Node.js"],
    "deliverable": "A reliable document processing pipeline",
    "definitionOfDone": "A large document is correctly broken into overlapping pieces ready for embedding",
    "commonMistakes": ["Chunking strictly by character count instead of sentences/paragraphs"],
    "resumeLine": "Architected intelligent document processing pipelines with optimized chunking and overlapping strategies",
    "connectsTo": "w8-d3"
  },
  "w8-d3": {
    "objective": "Generate embeddings with OpenAI, upsert to Pinecone",
    "why": "This is the core data pipeline of every RAG system. It turns your private text into searchable vectors.",
    "steps": [
      "Use `text-embedding-3-small` for high performance and low cost.",
      "Write a batching script to process all chunks.",
      "Upsert the vectors to Pinecone alongside their original text in the `metadata`.",
      "Confirm the vectors are visible in the Pinecone dashboard."
    ],
    "tools": ["OpenAI Embeddings API", "Pinecone SDK"],
    "deliverable": "A populated vector database",
    "definitionOfDone": "Your private data is fully indexed and searchable in vector space",
    "commonMistakes": ["Not storing the original text in metadata (required for the 'Generation' step)"],
    "resumeLine": "Implemented large-scale vector indexing using OpenAI embeddings and Pinecone vector database",
    "connectsTo": "w8-d4"
  },
  "w8-d4": {
    "objective": "Build /search endpoint: convert query to embedding, search vector DB",
    "why": "The query side is just as important as ingestion. It must be fast and accurate.",
    "steps": [
      "Create a GET `/search` endpoint that takes a user query string.",
      "Embed the query using the same OpenAI model used for the docs.",
      "Query Pinecone for the top 5 most similar chunks.",
      "Return the metadata text to the user.",
      "Test with vague queries to see the 'meaning' search in action."
    ],
    "tools": ["Express", "Pinecone"],
    "deliverable": "A semantic search API",
    "definitionOfDone": "Searching for 'affordable' returns documents about 'cheap' and 'budget'",
    "commonMistakes": ["Using different models for indexing and querying"],
    "resumeLine": "Built high-performance semantic search services with sub-200ms vector similarity lookups",
    "connectsTo": "w8-d5"
  },
  "w8-d5": {
    "objective": "Integrate semantic search into React Native app",
    "why": "Mobile + RAG is a rare and valuable combination. It creates incredibly smart mobile experiences.",
    "steps": [
      "Build a Search screen with a result list.",
      "Highlight the 'relevance score' for each result.",
      "Add a 'Chat with this result' button (preparing for full RAG).",
      "Optimize UI for quick searching."
    ],
    "tools": ["React Native"],
    "deliverable": "An AI-powered search UI on your phone",
    "definitionOfDone": "You can search your private documents directly from the mobile app",
    "commonMistakes": ["Not handling the loading state for vector search (which can take 1-2s)"],
    "resumeLine": "Developed sophisticated mobile search experiences powered by RAG and vector similarity",
    "connectsTo": "boss-w8"
  },
  "w8-d6": {
    "objective": "Add hybrid search (keyword + semantic) or offline cache",
    "why": "Resilience engineering separates seniors from juniors. Combining technologies produces better results.",
    "steps": [
      "Learn about Hybrid Search (combining SQL `LIKE` with Vector search).",
      "Implement a simple local cache (AsyncStorage) for frequent searches.",
      "Show cached results immediately while the vector search loads.",
      "Add a toggle to switch between AI search and standard search."
    ],
    "tools": ["AsyncStorage", "PostgreSQL"],
    "deliverable": "A resilient search system",
    "definitionOfDone": "Search returns results even with no internet (via cache)",
    "commonMistakes": ["Over-engineering the hybrid merging algorithm"],
    "resumeLine": "Optimized search precision and resilience by implementing hybrid search patterns and local caching",
    "connectsTo": "w8-d7"
  },
  "w8-d7": {
    "objective": "Write blog: 'How I Built RAG for React Native in One Week'",
    "why": "RAG + Mobile is a niche with almost no competition. Establishing yourself here makes you an instant authority.",
    "steps": [
      "Explain the RAG pipeline clearly for a general developer audience.",
      "Include your architecture diagram.",
      "Discuss the challenges of mobile vector search (latency, offline).",
      "Share your GitHub repo link."
    ],
    "tools": ["Dev.to", "Hashnode"],
    "deliverable": "One high-authority blog post",
    "definitionOfDone": "The post is live and shared with the community",
    "commonMistakes": ["Too much code, not enough architecture explanation"],
    "resumeLine": null,
    "connectsTo": "w9-d1"
  }
};
