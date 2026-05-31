export const WEEKS = [
  {
    "id": "b9",
    "num": "WEEK B09",
    "title": "RAG & Vector Databases",
    "theme": "Production LLM",
    "color": "#a855f7",
    "boss": {
      "id": "boss-b9",
      "name": "The RAG Architect",
      "challenge": "Build production RAG pipeline: chunk documents, embed, store in Pinecone, retrieve, generate answer with context",
      "rewardXP": 600,
      "resumeLine": "Built production RAG pipeline with Pinecone, OpenAI embeddings, and semantic search achieving sub-200ms retrieval",
      "successCriteria": [
        "Document ingestion pipeline: chunk, embed, upsert to Pinecone",
        "Pinecone index with metadata and namespace",
        "Semantic search endpoint: query → embedding → vector search → top-k results",
        "RAG endpoint: retrieve context + prompt LLM → generated answer with citations",
        "Evaluation: answer relevance, retrieval accuracy, latency <200ms",
        "React Native or web UI for Q&A",
        "55 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Sign up Pinecone (free tier)",
        "Install pinecone-client, openai, langchain",
        "Build ingestion: load documents (PDF/text), chunk with RecursiveCharacterTextSplitter, embed with text-embedding-3-small, upsert to Pinecone",
        "Build retrieval: embed query, search Pinecone, return top-5 chunks with metadata",
        "Build generation: construct prompt with context + question, call GPT-4o-mini, return answer with source citations",
        "Add evaluation: check if answer is grounded in retrieved context",
        "Measure latency: embedding time + search time + generation time",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "Ingestion script",
        "Retrieval API endpoint",
        "RAG API endpoint",
        "Pinecone index screenshot",
        "Latency benchmark",
        "55 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "RAG works end-to-end, answers are grounded, latency <200ms, 55 medium",
        "fail": "No retrieval or answers hallucinate, or <55 medium"
      }
    },
    "tasks": [
      {
        "id": "b9-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study RAG architecture: why retrieval reduces hallucination, chunking strategies, embedding models, vector similarity. Set up Pinecone account.",
        "reason": "RAG is the #1 production AI pattern. Every AI engineer must build it. Understand why it works before building."
      },
      {
        "id": "b9-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build ingestion pipeline: load 10+ documents (PDF with PyPDF2 or text), chunk with RecursiveCharacterTextSplitter (chunk_size=500, overlap=50), embed with OpenAI text-embedding-3-small, upsert to Pinecone with metadata.",
        "reason": "Chunking strategy determines search quality. Overlap prevents context loss at boundaries. Metadata enables filtering."
      },
      {
        "id": "b9-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build retrieval endpoint: accept query, generate embedding, search Pinecone (top_k=5), return chunks with metadata and similarity scores.",
        "reason": "Retrieval is the R in RAG. If retrieval fails, generation hallucinates. Test with real queries."
      },
      {
        "id": "b9-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Build generation endpoint: construct prompt with retrieved context + user question. Use system prompt: 'Answer based ONLY on the provided context. Cite sources.' Call GPT-4o-mini.",
        "reason": "System prompts control behavior. 'Only use context' reduces hallucination. Citations prove grounding."
      },
      {
        "id": "b9-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add evaluation: for 10 test questions, check if answer is in retrieved chunks. Measure retrieval accuracy (did we get the right chunk?). Measure answer relevance.",
        "reason": "Without evaluation, you don't know if RAG works. Manual evaluation is the first step. Automated eval comes later."
      },
      {
        "id": "b9-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Optimize latency: batch embeddings, cache frequent queries in Redis, use gpt-4o-mini (fastest). Measure: embed time, search time, gen time. Target <200ms total.",
        "reason": "Latency is user experience. >500ms feels broken. <200ms feels instant. Optimize the bottleneck."
      },
      {
        "id": "b9-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 25,
        "text": "LeetCode: 2 medium in Python. Blog: 'Building Production RAG: From Chunking to Sub-200ms Retrieval'. Include architecture diagram.",
        "reason": "RAG architecture content is highly valued. Sub-200ms is a specific, impressive number."
      }
    ]
  },
  {
    "id": "b10",
    "num": "WEEK B10",
    "title": "AI Agents & Tool Calling",
    "theme": "Agentic AI",
    "color": "#f43f5e",
    "boss": {
      "id": "boss-b10",
      "name": "The Agent Builder",
      "challenge": "Build autonomous AI agent with tool calling, multi-step reasoning, and memory",
      "rewardXP": 600,
      "resumeLine": "Developed autonomous AI agent with ReAct reasoning, tool calling, and persistent memory using LangChain",
      "successCriteria": [
        "Agent accepts complex goal and breaks into steps",
        "Tool calling: at least 3 tools (search, calculator, API call)",
        "ReAct loop: Thought → Action → Observation → repeat",
        "Memory: conversation history, previous actions, learnings",
        "Error recovery: handles tool failure, retries, fallback",
        "React Native or web UI showing agent reasoning steps",
        "60 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Study ReAct pattern: Reasoning + Acting",
        "Install LangChain or build custom agent loop",
        "Define 3 tools: web_search, calculator, custom_api_call",
        "Build agent loop: receive goal → think → pick tool → execute → observe → repeat until done",
        "Add memory: store conversation, actions, results in database",
        "Add guardrails: max iterations (10), timeout, cost limit",
        "Build UI showing reasoning steps in real-time",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "Agent implementation",
        "Tool definitions",
        "Memory store schema",
        "UI demo",
        "60 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "Agent completes multi-step tasks with tools and memory, 60 medium",
        "fail": "Single-turn prompt with no tool usage, or <60 medium"
      }
    },
    "tasks": [
      {
        "id": "b10-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study ReAct pattern: Reasoning (think about what to do) + Acting (use tool) + Observation (see result) → repeat. Read original ReAct paper summary.",
        "reason": "ReAct is the foundation of agentic AI. Every agent framework uses this loop. Understand it before using LangChain."
      },
      {
        "id": "b10-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Define 3 tools: web_search (DuckDuckGo API), calculator (Python eval or Wolfram), custom_api_call (your existing API). Each tool has name, description, parameters.",
        "reason": "Tool definition is the architecture of agents. Descriptions matter — the LLM chooses tools based on descriptions."
      },
      {
        "id": "b10-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build agent loop: while not done, generate thought, pick tool (function calling), execute tool, parse observation, check if done. Max 10 iterations.",
        "reason": "The loop is the engine. Everything else is plumbing. Build it from scratch once, then use frameworks."
      },
      {
        "id": "b10-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add memory: SQLite or PostgreSQL table storing (goal, step, thought, action, observation, timestamp). Agent reads previous steps before deciding next action.",
        "reason": "Memory prevents loops. Without memory, agent repeats the same failed action. Persistence enables learning."
      },
      {
        "id": "b10-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add guardrails: max iterations (10), timeout (60s), cost limit ($1 per run), error recovery (if tool fails, try alternative or ask user).",
        "reason": "Agents without guardrails are dangerous. They can loop forever or spend unlimited money. Safety first."
      },
      {
        "id": "b10-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Build UI showing reasoning steps: user sees 'Thinking...', 'Using calculator...', 'Result: 42', 'Done'. Real-time updates with SSE or WebSockets.",
        "reason": "Transparency builds trust. Users need to see what the agent is doing, not just the final answer."
      },
      {
        "id": "b10-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 25,
        "text": "LeetCode: 2 medium in Python. Blog: 'I Built an AI Agent with ReAct, Tool Calling, and Memory'. Include demo video.",
        "reason": "Agent demos are the most viral AI content. Show the reasoning loop in action."
      }
    ]
  },
  {
    "id": "b11",
    "num": "WEEK B11",
    "title": "Fine-Tuning LLMs",
    "theme": "Model Specialization",
    "color": "#14b8a6",
    "boss": {
      "id": "boss-b11",
      "name": "The Model Trainer",
      "challenge": "Fine-tune a small LLM on custom dataset using LoRA. Deploy and serve.",
      "rewardXP": 600,
      "resumeLine": "Fine-tuned open-source LLM using LoRA achieving 90% of GPT-4 quality at 10% of the cost",
      "successCriteria": [
        "Custom dataset with 500+ examples created and cleaned",
        "LoRA fine-tuning of Llama 3.1 8B or Mistral 7B",
        "Evaluation: compare base vs fine-tuned on holdout set",
        "Model deployed with vLLM or Ollama",
        "API endpoint for fine-tuned model",
        "Cost comparison: fine-tuned vs GPT-4",
        "65 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Pick domain: customer support, medical Q&A, legal docs, or your app's niche",
        "Collect/label 500+ prompt-response pairs",
        "Use Unsloth or Hugging Face TRL for training",
        "Configure LoRA: r=16, alpha=32, target_modules=q_proj,v_proj",
        "Train for 3 epochs, monitor loss",
        "Run evals: compare base vs fine-tuned on 50 holdout prompts",
        "Deploy with vLLM for fast serving",
        "Build API endpoint",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "Dataset file (JSONL)",
        "Training script and config",
        "Evaluation results table",
        "Deployed model endpoint",
        "Cost comparison doc",
        "65 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "Fine-tuned model deployed and measurably better on domain, 65 medium",
        "fail": "Only used prompt engineering, no actual weight updates, or <65 medium"
      }
    },
    "tasks": [
      {
        "id": "b11-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study fine-tuning: LoRA (Low-Rank Adaptation), QLoRA (quantized LoRA), when to fine-tune vs prompt engineer vs RAG. Install Unsloth or transformers+peft.",
        "reason": "Fine-tuning is expensive. Only do it when prompt engineering and RAG fail. LoRA makes it affordable."
      },
      {
        "id": "b11-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build domain-specific dataset: 500+ prompt-response pairs. Format: {instruction, input, output}. Clean: remove duplicates, fix formatting, ensure quality.",
        "reason": "Data quality matters more than model size. Garbage in, garbage out. Spend 2x time on data vs training."
      },
      {
        "id": "b11-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Configure LoRA: r=16, lora_alpha=32, target_modules=['q_proj','v_proj','k_proj','o_proj']. Load Llama 3.1 8B in 4-bit quantization. Set training args.",
        "reason": "LoRA trains only 1% of parameters. 4-bit quantization fits 8B model in 8GB VRAM. Config matters."
      },
      {
        "id": "b11-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Train for 3 epochs. Monitor training loss, eval loss. Watch for overfitting (eval loss increases while train loss decreases). Save checkpoints.",
        "reason": "Overfitting is the enemy. Early stopping saves compute. Checkpoints let you compare epochs."
      },
      {
        "id": "b11-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Evaluate: test base model vs fine-tuned on 50 holdout prompts. Score: relevance, accuracy, tone. Blind test if possible (don't know which is which).",
        "reason": "Without evaluation, you're guessing. Blind tests prevent bias. Metrics prove value."
      },
      {
        "id": "b11-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Deploy with vLLM: fast inference, continuous batching. Or Ollama for local testing. Build API endpoint. Compare latency: fine-tuned vs GPT-4.",
        "reason": "vLLM is the production standard for open-source LLMs. 10x faster than naive inference."
      },
      {
        "id": "b11-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 25,
        "text": "LeetCode: 2 medium in Python. Blog: 'I Fine-Tuned Llama 3.1 with LoRA: 90% of GPT-4 at 10% Cost'. Include comparison table.",
        "reason": "Concrete numbers get attention. '90% quality at 10% cost' is recruiter and founder bait."
      }
    ]
  },
  {
    "id": "b12",
    "num": "WEEK B12",
    "title": "MLOps & Model Deployment",
    "theme": "Production AI",
    "color": "#eab308",
    "boss": {
      "id": "boss-b12",
      "name": "The MLOps Engineer",
      "challenge": "Deploy AI system with monitoring, logging, A/B testing, and cost optimization",
      "rewardXP": 600,
      "resumeLine": "Deployed production AI system with monitoring, A/B testing, and cost optimization reducing inference spend by 40%",
      "successCriteria": [
        "Model serving with FastAPI + vLLM or TorchServe",
        "Monitoring: latency, throughput, error rate, cost per request",
        "A/B testing: route 10% traffic to new model, compare metrics",
        "Model versioning: track which model version serves which requests",
        "Auto-scaling: scale up on load, scale down on idle",
        "Cost optimization: model fallback, caching, batching",
        "70 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Build serving API: FastAPI + vLLM for open models, or proxy to OpenAI",
        "Add Prometheus metrics: request_count, latency_histogram, error_count",
        "Set up Grafana dashboard",
        "Implement A/B test: route traffic based on header or user_id hash",
        "Add model registry: track versions, rollback capability",
        "Add semantic cache: cache frequent queries, return cached response",
        "Implement batching: collect requests, process together, return individually",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "Serving API code",
        "Grafana dashboard screenshot",
        "A/B test implementation",
        "Model registry schema",
        "Cost optimization report",
        "70 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "AI system deployed with monitoring, A/B test, cost optimization, 70 medium",
        "fail": "No monitoring or no cost controls, or <70 medium"
      }
    },
    "tasks": [
      {
        "id": "b12-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Build serving API: FastAPI endpoint that loads model, accepts requests, returns generations. Use vLLM for open models or proxy to OpenAI for closed.",
        "reason": "Serving is deployment. FastAPI + vLLM is the production standard for open-source LLMs."
      },
      {
        "id": "b12-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Add Prometheus metrics: request_count, latency_histogram, error_count, tokens_used, cost_per_request. Expose /metrics endpoint.",
        "reason": "If you don't measure it, you can't improve it. Metrics are the foundation of MLOps."
      },
      {
        "id": "b12-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Set up Grafana dashboard: latency P50/P95/P99, requests per minute, error rate, cost per hour. Configure alerts for error rate >5% or latency >500ms.",
        "reason": "Dashboards make metrics visible. Alerts make you proactive. Grafana is the standard."
      },
      {
        "id": "b12-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Implement A/B testing: route 10% traffic to fine-tuned model, 90% to base. Compare: latency, cost, user satisfaction, error rate. Store results.",
        "reason": "A/B testing is how you prove a new model is better. Without it, you're guessing."
      },
      {
        "id": "b12-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add model registry: database table tracking model versions, deployment status, performance metrics. Rollback capability: switch to previous version in 1 minute.",
        "reason": "Bad models happen. Rollback must be fast. Registry enables reproducibility."
      },
      {
        "id": "b12-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Optimize costs: semantic cache (Pinecone or Redis), model fallback (cheap model for simple queries), request batching. Measure savings.",
        "reason": "AI is expensive. Every optimization has direct ROI. Cost optimization is a senior skill."
      },
      {
        "id": "b12-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 125,
        "text": "LeetCode: 2 medium in Python. Blog: 'Deploying LLMs in Production: Monitoring, A/B Testing, and Cost Optimization'. Include Grafana screenshot.",
        "reason": "MLOps content is the most valuable AI engineering content. Shows you ship production systems, not notebooks."
      }
    ]
  }
];

export const DETAILS = {
  "b9-d1": {
    "objective": "Understand the architectural components of Retrieval-Augmented Generation (RAG)",
    "why": "Standard LLMs have cut-off dates and can't access your private data. RAG is the industry standard for grounding LLMs in factual, up-to-date, and private information.",
    "steps": [
      "Set up a free Pinecone account and create an index with 1536 dimensions (for OpenAI embeddings).",
      "Learn the difference between Dense Retrieval (Embeddings) and Sparse Retrieval (BM25).",
      "Research the 'RAG Stack': Ingestion, Storage, Retrieval, and Generation."
    ],
    "tools": ["Pinecone", "RAG Concepts"],
    "deliverable": "A system architecture diagram for a production RAG pipeline",
    "definitionOfDone": "You can explain how a Vector Database differs from a Relational Database",
    "commonMistakes": ["Thinking RAG requires fine-tuning (RAG is retrieval, not training)"],
    "resumeLine": null,
    "connectsTo": "b9-d2"
  },
  "b9-d2": {
    "objective": "Implement a robust document ingestion and embedding pipeline",
    "why": "How you chunk and embed data determines the upper bound of your search quality. Poor chunking leads to irrelevant context and hallucinations.",
    "steps": [
      "Use `LangChain` to load local PDF or text files.",
      "Implement `RecursiveCharacterTextSplitter` with chunk overlap to maintain context.",
      "Generate embeddings using OpenAI's `text-embedding-3-small`.",
      "Upsert the vectors to Pinecone along with relevant metadata (filename, page number)."
    ],
    "tools": ["LangChain", "OpenAI Embeddings", "Pinecone"],
    "deliverable": "A script that populates a vector index with document chunks",
    "definitionOfDone": "The Pinecone dashboard shows successfully upserted vectors with associated metadata",
    "commonMistakes": ["Creating chunks that are too large (dilutes meaning) or too small (loses context)"],
    "resumeLine": "Engineered automated document ingestion pipelines using LangChain and Pinecone for semantic search",
    "connectsTo": "b9-d3"
  },
  "b9-d3": {
    "objective": "Build a high-performance Semantic Search retrieval engine",
    "why": "Semantic search allows systems to find information based on meaning rather than keyword matching, significantly improving user query results.",
    "steps": [
      "Create a FastAPI endpoint that accepts a user string.",
      "Embed the query using the same model used for ingestion.",
      "Query Pinecone for the top 5 most similar vectors.",
      "Return the raw text content associated with those vectors."
    ],
    "tools": ["FastAPI", "Cosine Similarity"],
    "deliverable": "A search API that returns the most relevant document snippets for any query",
    "definitionOfDone": "The API returns relevant text chunks even when the query uses synonyms not present in the text",
    "commonMistakes": ["Using different embedding models for ingestion and retrieval (results will be garbage)"],
    "resumeLine": "Developed low-latency semantic search engines leveraging vector databases and neural embeddings",
    "connectsTo": "b9-d4"
  },
  "b9-d4": {
    "objective": "Integrate Retrieval with Generation for a grounded Q&A experience",
    "why": "The 'Generation' phase must be strictly constrained by the 'Retrieved' context to prevent the LLM from making things up.",
    "steps": [
      "Construct a 'System Prompt' that instructs the LLM to only use provided context.",
      "Concatenate the top-k retrieved chunks into a single context block.",
      "Pass the user question and context block to GPT-4o-mini.",
      "Verify the output contains citations or references to the source chunks."
    ],
    "tools": ["GPT-4o-mini", "Prompt Engineering"],
    "deliverable": "A complete RAG endpoint producing factually grounded answers",
    "definitionOfDone": "The LLM successfully answers 'I don't know' if the answer isn't in the provided context",
    "commonMistakes": ["Passing too much context, exceeding the context window or confusing the model"],
    "resumeLine": "Built factually-grounded AI systems using RAG to eliminate model hallucinations in production",
    "connectsTo": "b9-d5"
  },
  "b9-d5": {
    "objective": "Implement RAG evaluation metrics (RAGAS / TruLens approach)",
    "why": "In AI, 'it looks okay' is not a metric. You must quantitatively measure Retrieval Accuracy and Generation Faithfulness.",
    "steps": [
      "Create a 'Golden Dataset' of 10 question-answer pairs.",
      "Measure 'Hit Rate' (is the correct chunk in the top-k?).",
      "Measure 'Faithfulness' (is the answer derived *only* from the context?).",
      "Document the baseline scores for your pipeline."
    ],
    "tools": ["Evaluation Frameworks", "Precision/Recall"],
    "deliverable": "An evaluation report detailing the accuracy and reliability of your RAG system",
    "definitionOfDone": "You have a quantitative 'Accuracy' percentage for both retrieval and generation",
    "commonMistakes": ["Only testing with simple queries that 'work' instead of edge cases"],
    "resumeLine": null,
    "connectsTo": "b9-d6"
  },
  "b9-d6": {
    "objective": "Optimize the RAG pipeline for sub-200ms production latency",
    "why": "User experience dies at high latency. A production-grade AI system must feel instantaneous.",
    "steps": [
      "Implement a Redis cache for exact query matches.",
      "Batch embedding requests if processing multiple queries.",
      "Use asynchronous calls for Pinecone and OpenAI to prevent blocking.",
      "Benchmark the time taken for each stage: Embedding, Search, and Generation."
    ],
    "tools": ["Redis", "Asyncio", "Profiling"],
    "deliverable": "A latency-optimized API with a performance benchmark report",
    "definitionOfDone": "Total end-to-end latency for the retrieval phase is under 200ms",
    "commonMistakes": ["Optimizing the wrong bottleneck (e.g., tweaking prompt length when the DB is slow)"],
    "resumeLine": "Optimized AI pipeline performance to achieve sub-200ms response times for enterprise RAG systems",
    "connectsTo": "b9-d7"
  },
  "b9-d7": {
    "objective": "Publish a deep-dive on Production RAG Architecture",
    "why": "RAG is the hottest topic in AI engineering. Sharing a data-backed, latency-optimized case study is the fastest way to signal expertise to hiring managers.",
    "steps": [
      "Write a blog post detailing your chunking, retrieval, and evaluation strategy.",
      "Include a screenshot of your performance benchmarks.",
      "Share your 'Lessons Learned' regarding hallucination control.",
      "Publish on LinkedIn/Medium/Dev.to."
    ],
    "tools": ["Technical Writing", "Personal Branding"],
    "deliverable": "A published technical authority piece on RAG systems",
    "definitionOfDone": "Post is live and clearly articulates the difference between 'toy' RAG and 'production' RAG",
    "commonMistakes": ["Being too generic; focus on the specific numbers and optimizations you achieved"],
    "resumeLine": null,
    "connectsTo": "Week 10"
  },
  "b10-d1": {
    "objective": "Understand the ReAct reasoning loop for autonomous agents",
    "why": "Simple LLMs are passive. Agents are active; they can think, act, and observe. ReAct is the standard pattern for multi-step problem solving.",
    "steps": [
      "Read the ReAct paper summary: 'Reasoning and Acting in Language Models'.",
      "Trace a 'Thought -> Action -> Observation' loop manually for a complex goal.",
      "Identify why the 'Observation' step is critical for error correction."
    ],
    "tools": ["ReAct Framework", "Cognitive Architecture"],
    "deliverable": "A manual trace of an agentic reasoning loop",
    "definitionOfDone": "You can explain the difference between a 'Chain' and an 'Agent'",
    "commonMistakes": ["Confusing an agent with a long prompt; agents *change* their behavior based on tool output"],
    "resumeLine": null,
    "connectsTo": "b10-d2"
  },
  "b10-d2": {
    "objective": "Define and build standardized 'Tools' for LLM consumption",
    "why": "Models don't have internet access or calculators. Tools are the 'limbs' of the LLM, allowing it to interact with the real world.",
    "steps": [
      "Create a `web_search` tool using DuckDuckGo or Tavily.",
      "Create a `calculator` tool that safely executes math expressions.",
      "Write high-quality docstrings for each tool (the LLM uses these to choose which tool to use).",
      "Test each tool independently with raw Python."
    ],
    "tools": ["Function Calling", "Tavily API"],
    "deliverable": "A library of 3 validated tools with clear semantic descriptions",
    "definitionOfDone": "The LLM consistently chooses the correct tool for a given task based on your descriptions",
    "commonMistakes": ["Writing vague tool descriptions, leading to the LLM picking the wrong tool"],
    "resumeLine": "Developed custom toolkits for LLMs, enabling autonomous interaction with external APIs and search engines",
    "connectsTo": "b10-d3"
  },
  "b10-d3": {
    "objective": "Implement the core Agent Loop from scratch",
    "why": "While LangChain is popular, building a loop from scratch proves you understand the 'Stopping Condition' and the 'Parsing' logic required for agents.",
    "steps": [
      "Write a `while` loop that continues until the LLM produces a 'Final Answer'.",
      "Implement logic to parse the LLM output into 'Action' and 'Action Input'.",
      "Call the selected tool and feed the output back into the LLM as an 'Observation'.",
      "Add a 'Max Iterations' cap to prevent infinite loops."
    ],
    "tools": ["Python Control Flow", "Regex/Parsing"],
    "deliverable": "A functioning, framework-less Agent loop",
    "definitionOfDone": "The agent successfully solves a task requiring 2 different tools in sequence",
    "commonMistakes": ["Not handling malformed LLM outputs, causing the loop to crash"],
    "resumeLine": "Architected custom autonomous agent loops featuring multi-step reasoning and tool integration",
    "connectsTo": "b10-d4"
  },
  "b10-d4": {
    "objective": "Implement persistent Conversation and Action Memory",
    "why": "Agents are forgetful. Memory allows them to remember what they've already tried, preventing them from repeating failed actions.",
    "steps": [
      "Set up a SQLite database to store chat history.",
      "Store the agent's 'Internal Monologue' (thoughts and observations) in a structured table.",
      "Implement 'Window Memory' to only pass the last N interactions to the model.",
      "Test the agent's ability to refer back to an observation from 3 steps ago."
    ],
    "tools": ["SQLite", "Memory Management"],
    "deliverable": "An agent with a persistent memory layer",
    "definitionOfDone": "The agent can answer questions about its own previous actions and tool results",
    "commonMistakes": ["Passing the *entire* history every time (explodes context window and cost)"],
    "resumeLine": "Integrated persistent memory systems into AI agents, enabling long-running task execution and historical context awareness",
    "connectsTo": "b10-d5"
  },
  "b10-d5": {
    "objective": "Architect Agent Guardrails and Error Recovery",
    "why": "Autonomous agents can be unpredictable and expensive. Guardrails ensure safety, cost control, and reliability.",
    "steps": [
      "Implement a cost-tracking layer that kills the process if it exceeds $1.00.",
      "Add a 'Self-Correction' step where the agent is asked to review its own plan for errors.",
      "Implement a 'Human-in-the-Loop' flag for sensitive tools (like sending an email).",
      "Write unit tests for tool failure scenarios."
    ],
    "tools": ["Pydantic Guardrails", "Cost Monitoring"],
    "deliverable": "A 'Hardened' agent with safety and cost constraints",
    "definitionOfDone": "The agent gracefully handles a tool throwing an error without crashing the loop",
    "commonMistakes": ["Allowing agents to run without an iteration cap (can cost hundreds of dollars in minutes)"],
    "resumeLine": "Implemented robust guardrails and human-in-the-loop protocols for autonomous AI agents",
    "connectsTo": "b10-d6"
  },
  "b10-d6": {
    "objective": "Develop a 'Reasoning Trace' UI for transparency",
    "why": "A black-box agent is frustrating. A senior engineer provides visibility into the 'Why' and 'How' of the agent's decisions.",
    "steps": [
      "Use Streamlit or React to build a chat interface.",
      "Display 'Thought' bubbles and 'Tool Execution' logs in the UI.",
      "Use Server-Sent Events (SSE) to stream the agent's internal monologue in real-time.",
      "Add a 'Pause/Resume' button for the agent loop."
    ],
    "tools": ["Streamlit", "WebSockets/SSE"],
    "deliverable": "A transparent agent dashboard showing real-time reasoning",
    "definitionOfDone": "A user can watch the agent 'think' and see the results of its tool usage as they happen",
    "commonMistakes": ["Only showing the final answer, making it impossible to debug intermediate failures"],
    "resumeLine": null,
    "connectsTo": "b10-d7"
  },
  "b10-d7": {
    "objective": "Showcase Autonomous Agency through video and documentation",
    "why": "Agents are the most impressive AI demo. A video showing an agent solving a complex, multi-step problem is a high-signal asset for your portfolio.",
    "steps": [
      "Record a 60-second video of your agent solving a 3-step goal (e.g., 'Find the price of NVDA, calculate how many shares I can buy with $5k, and draft an email').",
      "Write a blog post on 'The Challenges of Building Autonomous Agents'.",
      "Share the repo and video on LinkedIn.",
      "Tag #LangChain and #AI_Agents."
    ],
    "tools": ["Loom", "Social Media"],
    "deliverable": "A viral-ready video demo and technical write-up",
    "definitionOfDone": "Demonstration successfully proves the agent can recover from a tool error and still reach the goal",
    "commonMistakes": ["Using a demo that is too simple; show off the multi-step reasoning!"],
    "resumeLine": null,
    "connectsTo": "Week 11"
  },
  "b11-d1": {
    "objective": "Master the principles of Parameter-Efficient Fine-Tuning (PEFT)",
    "why": "Full fine-tuning is too expensive for most companies. LoRA allows you to achieve high performance by training only 1% of the weights.",
    "steps": [
      "Understand the math of Low-Rank Adaptation (decomposing weight matrices).",
      "Install `unsloth` for 2x faster training or `peft` from Hugging Face.",
      "Identify scenarios where fine-tuning beats RAG (style transfer, rigid formats, deep domain logic)."
    ],
    "tools": ["LoRA", "PEFT", "Unsloth"],
    "deliverable": "A conceptual comparison of Fine-Tuning vs RAG",
    "definitionOfDone": "You can explain *why* LoRA reduces VRAM requirements during training",
    "commonMistakes": ["Fine-tuning to add new knowledge (use RAG for that; fine-tuning is for style/format)"],
    "resumeLine": null,
    "connectsTo": "b11-d2"
  },
  "b11-d2": {
    "objective": "Curate and clean a high-quality Instruction Dataset",
    "why": "In fine-tuning, data quality is everything. 500 perfect examples are better than 50,000 messy ones.",
    "steps": [
      "Define a niche domain (e.g., 'Medical Billing Assistant' or 'React Native Expert').",
      "Gather or synthesize 500+ Instruction/Input/Output triplets.",
      "Use `pydantic` to validate the JSON structure of your dataset.",
      "Manually audit 50 random samples for accuracy and tone."
    ],
    "tools": ["JSONL", "Data Cleaning"],
    "deliverable": "A validated `.jsonl` dataset ready for training",
    "definitionOfDone": "Dataset passes a structural lint and manual quality check",
    "commonMistakes": ["Including inconsistent formats in the output, which the model will then mimic"],
    "resumeLine": "Curated high-fidelity instruction datasets for specialized LLM fine-tuning",
    "connectsTo": "b11-d3"
  },
  "b11-d3": {
    "objective": "Configure and initialize a QLoRA training run",
    "why": "QLoRA allows you to fine-tune 8B-parameter models on consumer GPUs (like a 3090 or Mac M2) by using 4-bit quantization.",
    "steps": [
      "Load Llama 3.1 8B in 4-bit using `bitsandbytes`.",
      "Configure LoRA parameters: `r=16`, `lora_alpha=32`, and target the 'q_proj' and 'v_proj' modules.",
      "Set up the `SFTTrainer` (Supervised Fine-tuning Trainer) from the TRL library.",
      "Verify the 'Trainable Parameters' is less than 2% of the total model."
    ],
    "tools": ["QLoRA", "bitsandbytes", "TRL"],
    "deliverable": "A verified training configuration script",
    "definitionOfDone": "Training starts without 'Out of Memory' (OOM) errors on your hardware",
    "commonMistakes": ["Setting the rank (`r`) too high, which increases VRAM and slows down training"],
    "resumeLine": "Implemented QLoRA fine-tuning pipelines to specialize open-source models (Llama/Mistral) on niche domains",
    "connectsTo": "b11-d4"
  },
  "b11-d4": {
    "objective": "Execute training and monitor for Catastrophic Forgetting",
    "why": "Fine-tuning can make a model better at one task but 'stupid' at everything else. Monitoring the loss curve is essential to finding the 'sweet spot'.",
    "steps": [
      "Run the training for 3 epochs on a GPU (local or rented via Vast.ai/Lambda Labs).",
      "Monitor `wandb` (Weights & Biases) to watch the training loss decline.",
      "Watch the evaluation loss—if it starts rising while training loss falls, you are overfitting.",
      "Save the 'LoRA Adapters' (the small trained files)."
    ],
    "tools": ["Weights & Biases", "GPU Cloud"],
    "deliverable": "A set of trained LoRA adapters and a loss curve graph",
    "definitionOfDone": "Training completes and the final loss is significantly lower than the starting loss",
    "commonMistakes": ["Training for too many epochs, leading to a model that repeats itself"],
    "resumeLine": null,
    "connectsTo": "b11-d5"
  },
  "b11-d5": {
    "objective": "Conduct a side-by-side (A/B) Model Evaluation",
    "why": "You must prove your model is better than the base model. A 'Blind Test' is the gold standard for subjective AI quality.",
    "steps": [
      "Generate responses for 50 holdout prompts using both the Base model and your Fine-tuned model.",
      "Use an 'LLM-as-a-Judge' (e.g., GPT-4o) to rate which response is better based on your criteria.",
      "Calculate the 'Win Rate' of your fine-tuned model.",
      "Perform a 'Tone Check' to ensure the model adopted the target persona."
    ],
    "tools": ["LLM-as-a-Judge", "A/B Testing"],
    "deliverable": "A comprehensive evaluation report with Win Rate metrics",
    "definitionOfDone": "The fine-tuned model achieves a >70% win rate against the base model on domain-specific tasks",
    "commonMistakes": ["Evaluating on the same data you trained on (this is cheating and won't work in production)"],
    "resumeLine": "Quantified model performance gains through rigorous A/B testing and LLM-as-a-Judge evaluation frameworks",
    "connectsTo": "b11-d6"
  },
  "b11-d6": {
    "objective": "Serve the Fine-Tuned model using high-throughput inference engines",
    "why": "A model in a `.bin` file is useless. Serving it with `vLLM` provides continuous batching and PagedAttention, making it 10x faster for users.",
    "steps": [
      "Install `vLLM` or use `Ollama` for a simpler local setup.",
      "Merge your LoRA adapters with the base model weights.",
      "Launch an OpenAI-compatible API server using vLLM.",
      "Benchmark the 'Tokens Per Second' (TPS) to ensure it's viable for production."
    ],
    "tools": ["vLLM", "Ollama", "Model Merging"],
    "deliverable": "A production-ready model endpoint",
    "definitionOfDone": "The model can be queried via standard HTTP requests and responds in under 1 second",
    "commonMistakes": ["Serving the adapters without merging, which can increase latency"],
    "resumeLine": "Deployed high-throughput AI inference services using vLLM, significantly reducing latency and compute costs",
    "connectsTo": "b11-d7"
  },
  "b11-d7": {
    "objective": "Publish a model specialization case study",
    "why": "Specialization is the future of AI. Showing you can take a general model and make it a 'domain expert' for 1/10th the cost of GPT-4 is a massive differentiator.",
    "steps": [
      "Draft a blog post: 'How I Fine-Tuned Llama 3 for [Your Domain]'.",
      "Highlight the cost savings vs using a massive closed-source model.",
      "Include a few 'Before vs After' response examples.",
      "Share on Twitter/X and LinkedIn to attract tech founders."
    ],
    "tools": ["Blogging", "Market Positioning"],
    "deliverable": "A published case study proving the ROI of fine-tuning",
    "definitionOfDone": "The post clearly communicates the business value (cost/latency/privacy) of your specialized model",
    "commonMistakes": ["Focusing on the training loss (nobody cares) instead of the user-facing quality (everyone cares)"],
    "resumeLine": null,
    "connectsTo": "Week 12"
  },
  "b12-d1": {
    "objective": "Build a production-grade AI Serving Layer",
    "why": "AI models are heavy. A simple Flask app will choke. You need an asynchronous serving layer that can handle concurrent users and streaming responses.",
    "steps": [
      "Create a FastAPI wrapper around your model (or a vLLM server).",
      "Implement Streaming responses using `StreamingResponse` (essential for LLM UX).",
      "Add a 'Circuit Breaker' to handle model timeouts or GPU crashes gracefully.",
      "Dockerize the entire serving layer."
    ],
    "tools": ["FastAPI", "Docker", "Streaming"],
    "deliverable": "A containerized, streaming AI API",
    "definitionOfDone": "The API can stream tokens to a client with minimal initial latency (TTFT)",
    "commonMistakes": ["Using synchronous code that blocks the event loop during heavy inference"],
    "resumeLine": "Engineered production-grade AI serving layers featuring asynchronous streaming and robust error handling",
    "connectsTo": "b12-d2"
  },
  "b12-d2": {
    "objective": "Implement deep Observability for AI systems",
    "why": "AI is non-deterministic. You must track not just 'is it up', but 'is it slow' and 'is it expensive'.",
    "steps": [
      "Expose custom metrics: `tokens_per_second`, `time_to_first_token`, and `cost_per_request`.",
      "Set up Prometheus to scrape these metrics every 15 seconds.",
      "Use structured logging (JSON) to track the full prompt and completion for every request (essential for debugging)."
    ],
    "tools": ["Prometheus", "Structured Logging"],
    "deliverable": "An observability-enabled API with a `/metrics` endpoint",
    "definitionOfDone": "You can see live token-usage and latency metrics in your terminal or a browser",
    "commonMistakes": ["Logging PII (Personally Identifiable Information) in your prompt logs"],
    "resumeLine": "Developed comprehensive observability suites for LLM deployments, tracking latency, throughput, and unit costs",
    "connectsTo": "b12-d3"
  },
  "b12-d3": {
    "objective": "Build a Grafana Monitoring Dashboard",
    "why": "Visualizing metrics allows you to spot trends (e.g., 'every Tuesday our cost spikes') and set alerts before the bill arrives.",
    "steps": [
      "Connect Grafana to your Prometheus data source.",
      "Build a 'Production AI' dashboard with 4 key panels: Latency (P95), Throughput (RPM), Error Rate, and Projected Monthly Cost.",
      "Configure a Slack/Email alert if the error rate exceeds 2%."
    ],
    "tools": ["Grafana", "Alerting"],
    "deliverable": "A professional-grade monitoring dashboard",
    "definitionOfDone": "The dashboard displays real-time data as you send test requests to your API",
    "commonMistakes": ["Setting alerts too sensitive, leading to 'alert fatigue'"],
    "resumeLine": "Deployed real-time monitoring and alerting systems for AI infrastructure using Prometheus and Grafana",
    "connectsTo": "b12-d4"
  },
  "b12-d4": {
    "objective": "Implement an A/B Testing and Canary Deployment pipeline",
    "why": "You should never 'hope' a new model is better. You should prove it by routing a small percentage of traffic to the new version first.",
    "steps": [
      "Implement a 'Router' logic in your API: if `user_id % 10 == 0`, use Model B, else Model A.",
      "Tag every response log with the model version used.",
      "Compare the 'User Feedback' (e.g., thumbs up/down) between the two versions.",
      "Implement a one-click rollback mechanism."
    ],
    "tools": ["Canary Deployments", "Feature Flags"],
    "deliverable": "An A/B testing framework integrated into your API",
    "definitionOfDone": "You can quantitatively show that Model B has a higher user satisfaction score than Model A",
    "commonMistakes": ["Switching 100% of traffic at once (high risk of catastrophic failure)"],
    "resumeLine": "Architected A/B testing and Canary deployment frameworks for AI models to ensure safe production rollouts",
    "connectsTo": "b12-d5"
  },
  "b12-d5": {
    "objective": "Establish a Model Registry and Versioning system",
    "why": "MLOps requires reproducibility. You must know exactly which dataset and which config produced the model currently running in production.",
    "steps": [
      "Create a 'Model Registry' (can be a simple SQL table) tracking: Model ID, Version, Commit Hash, Dataset ID, and Eval Score.",
      "Use `MLflow` or `W&B Artifacts` to version-control the actual model weights.",
      "Automate the 'Promotion' flow (moving a model from Staging to Production)."
    ],
    "tools": ["MLflow", "Model Registry"],
    "deliverable": "A documented model versioning and promotion workflow",
    "definitionOfDone": "You can roll back the production API to 'Version 1.0' in under 60 seconds",
    "commonMistakes": ["Using vague names like 'model_final_v2.bin' (use semantic versioning!)"],
    "resumeLine": "Implemented enterprise model registries to manage the lifecycle, versioning, and promotion of AI assets",
    "connectsTo": "b12-d6"
  },
  "b12-d6": {
    "objective": "Implement Semantic Caching and Cost Controls",
    "why": "AI is expensive. Caching repeated queries can reduce your inference bill by 40-70% while improving latency for users.",
    "steps": [
      "Implement a Semantic Cache: before calling the LLM, check your Vector DB for a 'similar enough' previous query.",
      "If a match is found (>0.95 similarity), return the cached result instantly.",
      "Implement 'Token Quotas' per user to prevent abuse and runaway costs.",
      "Implement batching: combine multiple single requests into one GPU batch for efficiency."
    ],
    "tools": ["Semantic Caching", "GPTCache", "Rate Limiting"],
    "deliverable": "A cost-optimized API with semantic caching and rate limiting",
    "definitionOfDone": "The system correctly serves a cached response for a paraphrased query (e.g., 'What is AI?' vs 'Explain AI')",
    "commonMistakes": ["Setting the cache similarity threshold too low (returns wrong answers for different questions)"],
    "resumeLine": "Reduced AI inference costs by 40% through the implementation of semantic caching and request batching",
    "connectsTo": "b12-d7"
  },
  "b12-d7": {
    "objective": "Synthesize MLOps mastery into a flagship industry article",
    "why": "Companies are terrified of AI costs and reliability. Proving you can deploy *safely* and *efficiently* makes you a top 1% hire.",
    "steps": [
      "Write a 'Staff Level' article: 'How to Build a Production-Grade AI Serving Layer'.",
      "Focus on Monitoring, A/B Testing, and Cost Optimization.",
      "Include a sample 'Grafana Dashboard for LLMs' screenshot.",
      "Publish on LinkedIn and share with CTOs and Engineering Managers."
    ],
    "tools": ["Industry Leadership", "Technical Marketing"],
    "deliverable": "A flagship technical article on MLOps best practices",
    "definitionOfDone": "The piece demonstrates a focus on 'Engineering Rigor' over 'AI Hype'",
    "commonMistakes": ["Making the article too basic; focus on the enterprise-grade challenges (scale, cost, safety)"],
    "resumeLine": null,
    "connectsTo": "Final Certification"
  }
};
