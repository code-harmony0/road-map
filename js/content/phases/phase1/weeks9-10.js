export const WEEKS = [
  {
    "id": "w9",
    "num": "WEEK 09",
    "title": "On-Device AI",
    "theme": "Edge AI",
    "color": "#14b8a6",
    "boss": {
      "id": "boss-w9",
      "name": "The Edge AI Engineer",
      "challenge": "Run an AI model locally on your phone (no API calls) for a privacy-first feature",
      "rewardXP": 500,
      "resumeLine": "Implemented on-device inference with TensorFlow Lite in React Native, achieving zero-latency offline AI",
      "successCriteria": [
        "TensorFlow Lite model runs inside React Native app",
        "Feature works in airplane mode (fully offline)",
        "Compare on-device vs cloud: latency, accuracy, battery",
        "Document trade-offs and when to use each"
      ],
      "howToComplete": [
        "Download a pre-trained TFLite model (image classification or text)",
        "Set up react-native-tflite or TensorFlow Lite plugin",
        "Build a screen that uses the model",
        "Test in airplane mode",
        "Write comparison analysis"
      ],
      "deliverables": [
        "GitHub repo with on-device AI feature",
        "Demo video in airplane mode",
        "Comparison doc: on-device vs cloud AI",
        "LinkedIn post about privacy-first AI"
      ],
      "passFail": {
        "pass": "Model runs fully offline in production build",
        "fail": "Only works in simulator or requires internet"
      }
    },
    "tasks": [
      {
        "id": "w9-d1",
        "day": "Day 1",
        "time": "3.75h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study on-device ML: quantization, model size, latency trade-offs",
        "reason": "Edge AI is exploding; mobile devs who know this are rare"
      },
      {
        "id": "w9-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w9-d2",
        "day": "Day 2",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Set up TensorFlow Lite in React Native, load a pre-trained model",
        "reason": "Getting the model to run is the hardest first step"
      },
      {
        "id": "w9-d3",
        "day": "Day 3",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build UI feature using on-device model (e.g., image labeling, text classification)",
        "reason": "Proof of value — AI must solve a real user problem"
      },
      {
        "id": "w9-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w9-d4",
        "day": "Day 4",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Test in airplane mode, measure cold-start latency",
        "reason": "Offline functionality is the selling point of edge AI"
      },
      {
        "id": "w9-d5",
        "day": "Day 5",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Compare on-device vs OpenAI cloud: speed, cost, accuracy, battery drain",
        "reason": "Architectural decision-making is a senior skill"
      },
      {
        "id": "w9-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w9-d6",
        "day": "Day 6",
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Write doc: 'When to Use On-Device AI vs Cloud AI'",
        "reason": "Technical decision docs show leadership thinking"
      },
      {
        "id": "w9-d7",
        "day": "Day 7",
        "time": "2.5h",
        "depth": "Action",
        "xp": 25,
        "text": "Post LinkedIn: 'I ran an AI model on my phone with no internet'",
        "reason": "This is attention-grabbing content that proves expertise"
      },
      {
        "id": "w9-d7-micro",
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
    "id": "w10",
    "num": "WEEK 10",
    "title": "Agentic AI",
    "theme": "Agentic Systems",
    "color": "#f97316",
    "boss": {
      "id": "boss-w10",
      "name": "The Agent Builder",
      "challenge": "Build an AI agent that can use tools (search, calculator, API calls) to complete multi-step tasks autonomously",
      "rewardXP": 500,
      "resumeLine": "Developed an autonomous AI agent with tool-calling, multi-step reasoning, and memory using LangChain",
      "successCriteria": [
        "Agent accepts a complex goal (e.g., 'research X and summarize')",
        "Agent uses at least 2 tools to complete the task",
        "Agent maintains conversation memory across turns",
        "React Native UI shows agent reasoning steps"
      ],
      "howToComplete": [
        "Learn ReAct pattern (Reasoning + Acting)",
        "Set up LangChain or custom agent loop",
        "Define 2-3 tools (web search, calculation, your own API)",
        "Implement memory (conversation buffer)",
        "Build UI that shows tool calls and final output"
      ],
      "deliverables": [
        "Working agent in your API",
        "React Native agent interface",
        "GitHub repo with agent logic",
        "Blog post: 'Building My First AI Agent'"
      ],
      "passFail": {
        "pass": "Agent completes multi-step task with tool use and memory",
        "fail": "Single-turn prompt with no tool usage"
      }
    },
    "tasks": [
      {
        "id": "w10-d1",
        "day": "Day 1",
        "time": "3.75h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study AI agents: ReAct, tool calling, planning loops",
        "reason": "Agentic AI is the highest-paying niche in 2026"
      },
      {
        "id": "w10-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w10-d2",
        "day": "Day 2",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Set up LangChain/LlamaIndex, define 2 custom tools",
        "reason": "Tool definition is the architecture of agent systems"
      },
      {
        "id": "w10-d3",
        "day": "Day 3",
        "time": "5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Build agent loop: receive goal → pick tool → execute → reason → repeat",
        "reason": "The loop is the engine; everything else is plumbing"
      },
      {
        "id": "w10-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w10-d4",
        "day": "Day 4",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add memory/conversation history so agent remembers context",
        "reason": "Stateless agents are useless for real tasks"
      },
      {
        "id": "w10-d5",
        "day": "Day 5",
        "time": "3.75h",
        "depth": "Medium",
        "xp": 75,
        "text": "Build React Native UI showing agent 'thinking' steps",
        "reason": "Transparency builds user trust in autonomous systems"
      },
      {
        "id": "w10-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "w10-d6",
        "day": "Day 6",
        "time": "2.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Add guardrails: max iterations, cost limits, error recovery",
        "reason": "Safety controls are what make agents production-ready"
      },
      {
        "id": "w10-d7",
        "day": "Day 7",
        "time": "2.5h",
        "depth": "Action",
        "xp": 25,
        "text": "Publish demo: 'Watch my AI agent research and summarize topics'",
        "reason": "Agent demos are the most viral AI content right now"
      },
      {
        "id": "w10-d7-micro",
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
  "w9-d1": {
    "objective": "Study on-device ML: quantization, model size, latency trade-offs",
    "why": "Edge AI is exploding; mobile devs who know this are rare. It allows for private, instant, and offline-capable AI features.",
    "steps": [
      "Learn about FP32 vs INT8 quantization.",
      "Understand why model size matters for mobile app download rates.",
      "Study hardware acceleration: Apple Neural Engine (ANE) and Android NNAPI.",
      "Compare TFLite, Core ML, and ONNX Runtime."
    ],
    "tools": ["TensorFlow Hub", "Netron (Model Visualizer)"],
    "deliverable": "A technical comparison of on-device ML frameworks",
    "definitionOfDone": "You can explain why a 500MB model is unsuitable for a mobile app",
    "commonMistakes": ["Ignoring the 'Cold Start' time of loading large models into memory"],
    "resumeLine": null,
    "connectsTo": "w9-d2"
  },
  "w9-d2": {
    "objective": "Set up TensorFlow Lite in React Native, load a pre-trained model",
    "why": "Getting the model to run is the hardest first step. It requires bridging native code and JS environments.",
    "steps": [
      "Install `react-native-tflite` or a similar library.",
      "Download a pre-trained `.tflite` model from TensorFlow Hub.",
      "Add the model file to your Android assets and iOS bundle.",
      "Write a JS wrapper to initialize the TFLite interpreter.",
      "Verify the model loads without crashing the app."
    ],
    "tools": ["React Native", "TensorFlow Lite", "Android Studio", "Xcode"],
    "deliverable": "A React Native app with an active TFLite interpreter",
    "definitionOfDone": "The app console logs 'Model Loaded Successfully' upon startup",
    "commonMistakes": ["Incorrect file paths in the native assets directory"],
    "resumeLine": "Integrated TensorFlow Lite into React Native applications for high-performance edge computing",
    "connectsTo": "w9-d3"
  },
  "w9-d3": {
    "objective": "Build UI feature using on-device model",
    "why": "Proof of value — AI must solve a real user problem. Demonstrating a tangible feature proves you aren't just 'playing' with tech.",
    "steps": [
      "Use `react-native-vision-camera` to get a real-time image feed.",
      "Pass the image frames to the TFLite model.",
      "Map the model's output index to a human-readable label.",
      "Display the top prediction on the screen with its confidence score."
    ],
    "tools": ["React Native Vision Camera", "TFLite"],
    "deliverable": "A real-time image classification or text analysis feature",
    "definitionOfDone": "The UI updates with AI predictions as you point the camera at different objects",
    "commonMistakes": ["Running classification too frequently (drains battery/heats phone)"],
    "resumeLine": "Developed real-time computer vision features for mobile using on-device neural networks",
    "connectsTo": "w9-d4"
  },
  "w9-d4": {
    "objective": "Test in airplane mode, measure cold-start latency",
    "why": "Offline functionality is the selling point of edge AI. Reliability in low-connectivity areas is a major UX win.",
    "steps": [
      "Enable Airplane mode on your device.",
      "Launch the app and verify the AI feature still works perfectly.",
      "Use `performance.now()` to measure how long it takes to load the model vs perform one inference.",
      "Log the results for your blog post."
    ],
    "tools": ["Performance API", "Physical Device"],
    "deliverable": "A latency benchmark report",
    "definitionOfDone": "The feature is proven to work with 0ms network latency",
    "commonMistakes": ["Testing only on the latest iPhone (doesn't represent real-world users)"],
    "resumeLine": "Optimized on-device AI latency, achieving sub-100ms inference times on mid-tier hardware",
    "connectsTo": "w9-d5"
  },
  "w9-d5": {
    "objective": "Compare on-device vs OpenAI cloud: speed, cost, accuracy, battery drain",
    "why": "Architectural decision-making is a senior skill. Knowing WHEN to use edge AI vs cloud AI is more important than knowing HOW.",
    "steps": [
      "Perform the same task (e.g., text sentiment) with TFLite and GPT-4o-mini.",
      "Measure total round-trip time (including network).",
      "Calculate cost: Edge = $0, Cloud = token cost.",
      "Observe battery percentage drop after 5 minutes of continuous use for both."
    ],
    "tools": ["Postman", "Chrome DevTools", "Battery Stats"],
    "deliverable": "A data-driven trade-off matrix",
    "definitionOfDone": "You have hard data comparing both approaches for your specific use case",
    "commonMistakes": ["Assuming cloud AI is always better (it's often slower and less private)"],
    "resumeLine": "Conducted comprehensive trade-off analysis between edge and cloud AI architectures to optimize for cost and UX",
    "connectsTo": "w9-d6"
  },
  "w9-d6": {
    "objective": "Write doc: 'When to Use On-Device AI vs Cloud AI'",
    "why": "Technical decision docs show leadership thinking. It proves you can guide a team through complex architectural choices.",
    "steps": [
      "Summarize your findings from Day 5.",
      "Create a 'Decision Tree' for future projects.",
      "Include criteria like: privacy requirements, model complexity, and target device hardware.",
      "Share the doc with your network."
    ],
    "tools": ["Markdown", "Notion"],
    "deliverable": "A professional Architectural Decision Record (ADR)",
    "definitionOfDone": "The document is clear, concise, and provides actionable guidance",
    "commonMistakes": ["Being too biased toward one technology"],
    "resumeLine": "Authored architectural guidelines for AI integration, influencing cross-platform technology choices",
    "connectsTo": "w9-d7"
  },
  "w10-d1": {
    "objective": "Study AI agents: ReAct, tool calling, planning loops",
    "why": "Agentic AI is the highest-paying niche in 2026. Moving from 'Chat' to 'Agents' is the biggest leap in AI capability.",
    "steps": [
      "Understand the 'Reasoning + Acting' (ReAct) loop.",
      "Learn how LLMs can decide to use a tool by outputting structured JSON.",
      "Study different agent architectures: Plan-and-Execute vs Autonomous loops.",
      "Read about the 'Agentic Workflow' (iterative refinement)."
    ],
    "tools": ["LangChain Documentation", "AutoGPT Blog"],
    "deliverable": "Mental map of agentic systems",
    "definitionOfDone": "You can explain how an AI can 'decide' to use a calculator when it sees a math problem",
    "commonMistakes": ["Confusing simple RAG with an autonomous agent"],
    "resumeLine": null,
    "connectsTo": "w10-d2"
  },
  "w10-d2": {
    "objective": "Set up LangChain/LlamaIndex, define 2 custom tools",
    "why": "Tool definition is the architecture of agent systems. It's how you give the AI 'hands' to interact with the world.",
    "steps": [
      "Install `langchain` and `openai` packages.",
      "Define a 'Search Tool' (e.g., using Tavily API).",
      "Define a 'Custom API Tool' that talks to your own Week 1 REST API.",
      "Verify that the LLM can describe these tools and when to use them."
    ],
    "tools": ["LangChain", "Tavily API", "OpenAI"],
    "deliverable": "A toolkit of capabilities for your AI agent",
    "definitionOfDone": "The LLM correctly identifies which tool to use for a given natural language prompt",
    "commonMistakes": ["Poorly describing the tool (the LLM needs clear 'instructions' in the tool name/desc)"],
    "resumeLine": "Architected agentic toolkits using LangChain, enabling LLMs to interact with external APIs and data sources",
    "connectsTo": "w10-d3"
  },
  "w10-d3": {
    "objective": "Build agent loop: receive goal → pick tool → execute → reason → repeat",
    "why": "The loop is the engine; everything else is plumbing. Building a custom loop gives you ultimate control over the agent's behavior.",
    "steps": [
      "Write a `while` loop or use LangChain's `AgentExecutor`.",
      "Feed the user prompt into the model.",
      "Parse the model's output for a 'tool call'.",
      "Execute the tool locally and feed the result back into the model.",
      "Exit the loop when the model provides a final answer."
    ],
    "tools": ["Node.js", "LangChain"],
    "deliverable": "A working autonomous agent script",
    "definitionOfDone": "The agent can solve a multi-step problem (e.g., 'find the latest price of X and tell me if I can afford it with $Y')",
    "commonMistakes": ["Infinite loops where the agent keeps calling the same tool (set a max iteration limit)"],
    "resumeLine": "Engineered autonomous agent loops with multi-step reasoning and self-correction capabilities",
    "connectsTo": "w10-d4"
  },
  "w10-d4": {
    "objective": "Add memory/conversation history",
    "why": "Stateless agents are useless for real tasks. Memory allows the agent to follow-up on its own previous actions.",
    "steps": [
      "Implement a `BufferMemory` or store history in your PostgreSQL DB.",
      "Pass the previous 5-10 turns as context to every model call.",
      "Verify the agent remembers your name or your previous question.",
      "Learn about 'summarization memory' for long-running agents."
    ],
    "tools": ["PostgreSQL", "LangChain Memory"],
    "deliverable": "A stateful AI agent",
    "definitionOfDone": "The agent can reference its previous tool outputs in its final reasoning",
    "commonMistakes": ["Passing too much history (blows up token usage/cost)"],
    "resumeLine": "Implemented persistent context and long-term memory for AI agents using relational databases",
    "connectsTo": "w10-d5"
  },
  "w10-d5": {
    "objective": "Build React Native UI showing agent 'thinking' steps",
    "why": "Transparency builds user trust. Seeing the agent 'Searching...', 'Calculating...', and 'Thinking...' makes the autonomy feel real.",
    "steps": [
      "Add a 'Steps' or 'Logs' section to your chat UI.",
      "Emit events from your backend every time a tool is called.",
      "Display these events in real-time as the agent works.",
      "Use different icons for different tool types."
    ],
    "tools": ["React Native", "WebSockets or SSE"],
    "deliverable": "A professional AI agent dashboard",
    "definitionOfDone": "The user can follow the agent's logic live on their phone",
    "commonMistakes": ["UI being too cluttered with technical logs"],
    "resumeLine": "Designed intuitive UIs for autonomous systems, providing users with visibility into AI reasoning and tool execution",
    "connectsTo": "boss-w10"
  },
  "w10-d6": {
    "objective": "Add guardrails: max iterations, cost limits, error recovery",
    "why": "Safety controls are what make agents production-ready. Uncontrolled agents are a massive financial and security risk.",
    "steps": [
      "Implement a `max_iterations = 5` limit.",
      "Add an automated budget cap per agent session.",
      "Handle tool failures gracefully (the model should try a different approach if a tool fails).",
      "Implement 'Human-in-the-loop' for sensitive tools (e.g., 'Confirm before deleting data')."
    ],
    "tools": ["Defense-in-depth patterns"],
    "deliverable": "A production-hardened AI agent",
    "definitionOfDone": "The agent gracefully stops if it gets stuck in a loop or hits a cost limit",
    "commonMistakes": ["Allowing agents to call 'Write' tools without user confirmation"],
    "resumeLine": "Developed robust safety protocols for agentic systems, including human-in-the-loop validation and budget guardrails",
    "connectsTo": "w10-d7"
  },
  "w10-d7": {
    "objective": "Publish demo: 'Watch my AI agent research and summarize topics'",
    "why": "Agent demos are the most viral AI content right now. It positions you at the bleeding edge of the industry.",
    "steps": [
      "Record a 'Time Lapse' of the agent working through a complex task.",
      "Add captions explaining what the agent is 'thinking' at each step.",
      "Post on LinkedIn and Twitter.",
      "Mention that you are available for Agentic AI consulting or roles."
    ],
    "tools": ["Loom", "LinkedIn"],
    "deliverable": "A high-impact social media demo",
    "definitionOfDone": "The video is live and showcasing your highest-level skill",
    "commonMistakes": ["Moving too fast in the video (users need to read the 'thinking' steps)"],
    "resumeLine": null,
    "connectsTo": "w11-d1"
  }
};
