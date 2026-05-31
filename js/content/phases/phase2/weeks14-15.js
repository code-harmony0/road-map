export const WEEKS = [
  {
    "id": "w14",
    "num": "WEEK 14",
    "title": "AI Observability & Evaluation",
    "theme": "Production Readiness",
    "color": "#6366f1",
    "boss": {
      "id": "boss-w14",
      "name": "The Quality Lead",
      "challenge": "Build an evaluation suite for your RAG system and set up production tracing",
      "rewardXP": 500,
      "resumeLine": "Established AI observability and evaluation pipelines using LangSmith and Ragas, reducing hallucination rates by 40%",
      "successCriteria": [
        "Tracing enabled for all LLM calls in production",
        "Evaluation dataset created with 20+ test cases",
        "Automated accuracy and hallucination scores calculated",
        "Cost and latency tracking dashboard implemented"
      ],
      "howToComplete": [
        "Integrate LangSmith or Arize Phoenix for tracing",
        "Create a 'Golden Dataset' of question-answer pairs",
        "Run evaluation using DeepEval or Ragas",
        "Set up alerts for high-cost or high-latency calls",
        "Implement a feedback UI for users to rate AI responses"
      ],
      "deliverables": [
        "LangSmith project URL",
        "Evaluation report (CSV/PDF)",
        "Observability dashboard screenshot",
        "Feedback loop implementation"
      ],
      "passFail": {
        "pass": "Full tracing live + evaluation scores measured",
        "fail": "Shipping AI with no way to know if it's actually working"
      }
    },
    "tasks": [
      {
        "id": "w14-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study evaluation metrics: Faithfulness, Answer Relevancy, Context Precision",
        "reason": "You cannot improve what you cannot measure"
      },
      {
        "id": "w14-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Set up LangSmith or Weights & Biases for tracing and logging",
        "reason": "Tracing is the only way to debug complex agentic loops"
      },
      {
        "id": "w14-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Create evaluation dataset (Golden Set) and run automated tests",
        "reason": "Unit tests for AI are probabilistic, not deterministic"
      },
      {
        "id": "w14-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Implement prompt versioning and A/B testing framework",
        "reason": "One prompt change can break everything; versioning is mandatory"
      },
      {
        "id": "w14-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Build human-in-the-loop feedback UI in mobile app",
        "reason": "User feedback is the ultimate ground truth"
      },
      {
        "id": "w14-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Set up guardrails for PII detection and toxic content filtering",
        "reason": "Enterprise AI requires safety compliance"
      },
      {
        "id": "w14-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Case Study: 'How I Measured and Improved AI Accuracy'",
        "reason": "Signals technical maturity to engineering leaders"
      }
    ]
  },
  {
    "id": "w15",
    "num": "WEEK 15",
    "title": "Multi-Modal AI",
    "theme": "Advanced Intelligence",
    "color": "#ec4899",
    "boss": {
      "id": "boss-w15",
      "name": "The Visionary",
      "challenge": "Build a multi-modal feature using vision, voice, and text end-to-end",
      "rewardXP": 500,
      "resumeLine": "Developed multi-modal mobile features integrating vision (GPT-4V) and speech (Whisper) for immersive UX",
      "successCriteria": [
        "App can 'see' and describe images via camera",
        "App can 'hear' and transcribe voice commands",
        "App can 'speak' using high-quality TTS",
        "Multi-modal RAG working (query images by description)"
      ],
      "howToComplete": [
        "Integrate GPT-4o vision capabilities",
        "Set up OpenAI Whisper for speech-to-text",
        "Integrate ElevenLabs or OpenAI TTS for speech",
        "Build a 'Camera-to-Action' mobile workflow",
        "Implement CLIP or similar for image embeddings"
      ],
      "deliverables": [
        "Working multi-modal mobile demo",
        "Voice/Vision integration code",
        "Architecture diagram of multi-modal flow",
        "Performance report on processing time"
      ],
      "passFail": {
        "pass": "App successfully processes and responds to 2+ modalities",
        "fail": "Text-only chat with no vision or voice"
      }
    },
    "tasks": [
      {
        "id": "w15-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study Vision models and multi-modal prompt engineering",
        "reason": "Multi-modal is the next frontier of mobile UX"
      },
      {
        "id": "w15-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Integrate Whisper for real-time mobile speech-to-text",
        "reason": "Voice is the natural interface for mobile AI"
      },
      {
        "id": "w15-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Implement high-quality Text-to-Speech (TTS) for AI voice",
        "reason": "Immersive apps need a voice to match their brain"
      },
      {
        "id": "w15-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Build multi-modal RAG: embed and search images by meaning",
        "reason": "RAG is not just for text anymore"
      },
      {
        "id": "w15-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Integrate React Native Camera with Vision AI for live analysis",
        "reason": "Real-world context is the mobile developer's moat"
      },
      {
        "id": "w15-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Optimize multi-modal latency: compression and parallel calls",
        "reason": "Vision + Voice is slow; optimization is required for UX"
      },
      {
        "id": "w15-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Project: Build a 'See & Speak' Personal Assistant feature",
        "reason": "Combines all modalities into a single proof of value"
      }
    ]
  }
];

export const DETAILS = {
  "w14-d1": {
    "objective": "Understand the theoretical foundation of AI evaluation metrics",
    "why": "AI outputs are probabilistic. You need specific metrics to quantify performance improvement.",
    "steps": [
      "Learn the 'RAG Triad': Context Relevance, Groundedness, Answer Relevance.",
      "Understand BLEU and ROUGE scores vs. LLM-as-a-judge.",
      "Study how to use models to evaluate other models."
    ],
    "tools": ["DeepEval", "Ragas Documentation"],
    "deliverable": "Comparison notes on deterministic vs probabilistic testing",
    "definitionOfDone": "You can explain the RAG Triad to a peer",
    "commonMistakes": ["Using word-overlap metrics for semantic meaning"],
    "resumeLine": null,
    "connectsTo": "w14-d2"
  },
  "w14-d2": {
    "objective": "Implement full tracing for all AI backend calls",
    "why": "Without tracing, you cannot debug multi-step agentic failures or identify latency bottlenecks.",
    "steps": [
      "Integrate LangSmith SDK into your Node.js backend.",
      "Wrap OpenAI calls with tracing decorators.",
      "Verify traces are appearing in the dashboard with full prompt/response history.",
      "Enable cost tracking per trace."
    ],
    "tools": ["LangSmith", "Weights & Biases"],
    "deliverable": "Production tracing dashboard with active data",
    "definitionOfDone": "Every AI request generates a trace with latency and token metrics",
    "commonMistakes": ["Forgetting to redact PII in logs"],
    "resumeLine": "Integrated comprehensive AI tracing and logging, improving debugging efficiency by 60%",
    "connectsTo": "w14-d3"
  },
  "w14-d3": {
    "objective": "Build and run an automated evaluation pipeline",
    "why": "Manual testing doesn't scale. Automated eval allows you to iterate on prompts with confidence.",
    "steps": [
      "Create a CSV of 20 'Golden' question-answer pairs for your project.",
      "Use DeepEval or Ragas to run the dataset through your pipeline.",
      "Generate an accuracy report.",
      "Identify the bottom 3 failing cases and analyze why."
    ],
    "tools": ["DeepEval", "Pandas", "Python or Node.js"],
    "deliverable": "Automated evaluation report with accuracy scores",
    "definitionOfDone": "Evaluation pipeline runs automatically on prompt changes",
    "commonMistakes": ["Evaluatng with a dataset that is too small or biased"],
    "resumeLine": "Built automated AI evaluation pipelines, achieving measurable accuracy gains through prompt engineering",
    "connectsTo": "w14-d4"
  },
  "w14-d4": {
    "objective": "Establish prompt versioning and A/B testing infrastructure",
    "why": "Prompts are code. They need version control and safe deployment strategies.",
    "steps": [
      "Move prompts from code to a versioned repository or CMS.",
      "Implement a toggle to serve different prompt versions to different users.",
      "Log version IDs with each trace in LangSmith.",
      "Compare accuracy scores between Version A and Version B."
    ],
    "tools": ["PromptLayer", "Portkey", "Custom Redis Store"],
    "deliverable": "Prompt versioning system",
    "definitionOfDone": "You can roll back a prompt change without redeploying code",
    "commonMistakes": ["Hard-coding prompts and losing track of changes"],
    "resumeLine": "Designed and implemented prompt management systems for rapid iteration and safe AI deployments",
    "connectsTo": "w14-d5"
  },
  "w14-d5": {
    "objective": "Integrate a user feedback loop to collect ground truth data",
    "why": "Synthetic evaluation is good; real user feedback is better. It's the ultimate signal for RLHF.",
    "steps": [
      "Add 'Thumbs Up/Down' buttons to AI chat bubbles in React Native.",
      "Allow users to report 'Hallucinations' or 'Poor Quality'.",
      "Sync feedback to your backend and link it to the specific trace ID.",
      "Create a 'Failing Prompts' list for manual review."
    ],
    "tools": ["React Native", "PostgreSQL"],
    "deliverable": "User feedback UI and backend storage",
    "definitionOfDone": "Feedback is captured and correlated with technical traces",
    "commonMistakes": ["UI being too intrusive (feedback should be optional and easy)"],
    "resumeLine": "Implemented closed-loop AI feedback systems to continuously refine model performance based on user intent",
    "connectsTo": "w14-d6"
  },
  "w14-d6": {
    "objective": "Secure the AI pipeline with content guardrails",
    "why": "Production AI must be safe. Guardrails prevent toxic output and sensitive data leaks.",
    "steps": [
      "Integrate NeMo Guardrails or a simple regex/LLM-based classifier.",
      "Check inputs for PII (emails, SSNs) before sending to OpenAI.",
      "Check outputs for brand-inappropriate content.",
      "Implement retry logic for flagged content."
    ],
    "tools": ["Llama Guard", "NeMo Guardrails", "Presidio"],
    "deliverable": "Hardened AI pipeline with active safety checks",
    "definitionOfDone": "App gracefully rejects toxic or unsafe requests without crashing",
    "commonMistakes": ["Overly restrictive guardrails that kill useful functionality"],
    "resumeLine": "Engineered robust AI safety protocols, including PII detection and content moderaton guardrails",
    "connectsTo": "w14-d7"
  },
  "w14-d7": {
    "objective": "Publish a deep-dive on AI metrics and quality",
    "why": "Most developers stop at 'it works on my machine'. Proving you understand production metrics is a massive senior signal.",
    "steps": [
      "Write 1000 words on your evaluation methodology.",
      "Show charts of accuracy improvements.",
      "Discuss the trade-off between cost, latency, and quality.",
      "Share on LinkedIn and target AI Engineering leads."
    ],
    "tools": ["Medium", "LinkedIn"],
    "deliverable": "High-authority technical case study",
    "definitionOfDone": "Post is live and demonstrating your engineering-first approach to AI",
    "commonMistakes": ["Sharing generic tips instead of your specific metrics/learnings"],
    "resumeLine": null,
    "connectsTo": "w15-d1"
  },
  "w15-d1": {
    "objective": "Master Multi-Modal prompt engineering for vision and images",
    "why": "Multi-modal models like GPT-4o require different prompting techniques to handle visual context accurately.",
    "steps": [
      "Learn how to structure multi-modal messages (text + image_url).",
      "Compare GPT-4o vision with Claude 3.5 Sonnet for object detection.",
      "Study 'Spatial Prompting' (explaining where things are in an image).",
      "Learn about image tokenization and cost."
    ],
    "tools": ["OpenAI Vision API", "Claude Vision"],
    "deliverable": "Vision prompting cheat sheet",
    "definitionOfDone": "You can consistently extract structured data from complex images",
    "commonMistakes": ["Sending too many high-res images and blowing the budget"],
    "resumeLine": null,
    "connectsTo": "w15-d2"
  },
  "w15-d2": {
    "objective": "Integrate low-latency mobile speech recognition",
    "why": "Typing is a barrier on mobile. Voice integration creates a frictionless AI experience.",
    "steps": [
      "Set up `react-native-audio-recorder-player` or similar.",
      "Send audio chunks to OpenAI Whisper API.",
      "Implement a 'Streaming Transcription' UI.",
      "Handle background noise and silences."
    ],
    "tools": ["OpenAI Whisper", "React Native Audio"],
    "deliverable": "Working voice-to-text mobile feature",
    "definitionOfDone": "User can speak a goal and see it transcribed with >95% accuracy",
    "commonMistakes": ["Not compressing audio before upload (leads to high latency)"],
    "resumeLine": "Integrated OpenAI Whisper for high-accuracy, low-latency mobile speech transcription",
    "connectsTo": "w15-d3"
  },
  "w15-d3": {
    "objective": "Add human-like AI voice output to the app",
    "why": "Voice output completes the multi-modal loop, allowing for eyes-free interaction.",
    "steps": [
      "Integrate OpenAI TTS or ElevenLabs SDK.",
      "Implement audio streaming to start playback before the full file is generated.",
      "Allow users to select different voice personas.",
      "Optimize for mobile speaker performance."
    ],
    "tools": ["ElevenLabs", "OpenAI TTS API"],
    "deliverable": "AI text-to-speech module",
    "definitionOfDone": "The app can read AI responses aloud with natural-sounding intonation",
    "commonMistakes": ["Blocking the UI thread during audio playback"],
    "resumeLine": "Implemented expressive AI voice synthesis using ElevenLabs, creating immersive eyes-free mobile experiences",
    "connectsTo": "w15-d4"
  },
  "w15-d4": {
    "objective": "Extend RAG to handle image and visual data",
    "why": "Businesses have vast visual data. Multi-modal RAG allows searching 'for the image that shows X'.",
    "steps": [
      "Use CLIP or a multi-modal embedding model to index images.",
      "Store image vectors in Pinecone alongside text vectors.",
      "Implement a search that takes a text query and returns relevant images.",
      "Build a UI for 'Search by Photo'."
    ],
    "tools": ["CLIP Model", "Pinecone", "Multi-Modal Embeddings"],
    "deliverable": "Multi-modal vector search engine",
    "definitionOfDone": "Searching for 'blue car' returns images of blue cars from your dataset",
    "commonMistakes": ["Ignoring image metadata (tags, labels) during search"],
    "resumeLine": "Architected multi-modal RAG systems, enabling semantic search across both text and visual assets",
    "connectsTo": "w15-d5"
  },
  "w15-d5": {
    "objective": "Build live camera-to-AI analysis workflows",
    "why": "This is the most powerful mobile AI use case: 'Point your camera at X and let AI solve Y'.",
    "steps": [
      "Implement a camera view that captures frames every 2 seconds.",
      "Send frames to GPT-4o vision with a specific instruction (e.g., 'What is this nutrition label saying?').",
      "Overlay the AI analysis results directly on the camera preview.",
      "Implement 'Snap to Analyze' to save costs."
    ],
    "tools": ["React Native Vision Camera", "GPT-4o"],
    "deliverable": "Live vision analysis feature",
    "definitionOfDone": "The app provides real-time insights based on what the camera sees",
    "commonMistakes": ["Sending a constant video stream (too expensive/slow)"],
    "resumeLine": "Developed real-time computer vision workflows using GPT-4o, enabling intelligent camera-first mobile features",
    "connectsTo": "w15-d6"
  },
  "w15-d6": {
    "objective": "Optimize multi-modal processing for production performance",
    "why": "Multi-modal pipelines have many points of failure and high latency. Optimization is what makes them usable.",
    "steps": [
      "Implement parallel API calls for Vision and TTS.",
      "Use aggressive caching for frequent visual queries.",
      "Compress images on-device before upload to save bandwidth.",
      "Add a 'Perceived Latency' UI (e.g., 'Analyzing image...') to manage expectations."
    ],
    "tools": ["Image Resizer", "Promise.all", "Cache Store"],
    "deliverable": "Performance-optimized multi-modal pipeline",
    "definitionOfDone": "Total multi-modal round-trip time is reduced by 30%",
    "commonMistakes": ["Not handling network timeouts gracefully"],
    "resumeLine": "Optimized complex multi-modal AI pipelines, achieving 30% reduction in end-to-end latency",
    "connectsTo": "w15-d7"
  },
  "w15-d7": {
    "objective": "Build a flagship multi-modal project",
    "why": "A single impressive multi-modal feature is worth more than 10 text-only CRUD apps in the current market.",
    "steps": [
      "Combine snap, transcribe, and speak into one workflow (e.g., 'Voice Photo Journal').",
      "Ensure the UI is polished and intuitive.",
      "Record a high-quality demo for your portfolio.",
      "Write a 'Lessons from Multi-modal' blog post."
    ],
    "tools": ["React Native", "OpenAI Suite"],
    "deliverable": "One flagship multi-modal feature demo",
    "definitionOfDone": "The feature works end-to-end and is documented in your portfolio",
    "commonMistakes": ["Making the UI too complicated for a mobile user"],
    "resumeLine": null,
    "connectsTo": "w16-d1"
  }
};
