export const WEEKS = [
  {
    "id": "w18",
    "num": "WEEK 18",
    "title": "System Design for Interviews",
    "theme": "Interview Prep",
    "color": "#f59e0b",
    "boss": {
      "id": "boss-w18",
      "name": "The Interview Architect",
      "challenge": "Learn fundamentals and practice one classic problem until clear",
      "rewardXP": 500,
      "resumeLine": "Demonstrated system design competency explaining caching, load balancing, and DB trade-offs",
      "successCriteria": [
        "Can explain CAP theorem with real example",
        "Can draw URL shortener or chat app from memory",
        "Can justify SQL vs NoSQL choice",
        "Can explain caching strategy",
        "Recorded mock interview showing clarity"
      ],
      "howToComplete": [
        "Read Designing Data-Intensive Applications Ch 1-3",
        "Pick one problem: URL shortener",
        "Draw architecture: client, CDN, LB, API, cache, DB",
        "Practice explaining out loud for 15 min",
        "Record yourself, review filler words"
      ],
      "deliverables": [
        "Architecture diagram",
        "15-min mock recording",
        "Study notes",
        "Flashcards"
      ],
      "passFail": {
        "pass": "Can whiteboard and defend every decision",
        "fail": "Memorized diagram without understanding why"
      }
    },
    "tasks": [
      {
        "id": "w18-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Study CAP theorem, consistency models, load balancing basics",
        "reason": "Fundamentals every interviewer expects."
      },
      {
        "id": "w18-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Read DDIA Ch 1-3, take notes on reliability, scalability, maintainability",
        "reason": "The bible. Read this if nothing else."
      },
      {
        "id": "w18-d3",
        "day": "Day 3",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Design URL shortener: draw full architecture, justify each tech choice",
        "reason": "Hello world of system design. Master it."
      },
      {
        "id": "w18-d4",
        "day": "Day 4",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Design chat app: WebSockets vs SSE, message storage, read receipts",
        "reason": "Tests real-time knowledge. Most mobile devs fail here."
      },
      {
        "id": "w18-d5",
        "day": "Day 5",
        "time": "7.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Practice explaining both designs out loud, no notes, 15 min each",
        "reason": "Communication is 50% of the interview."
      },
      {
        "id": "w18-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Record mock interview, review filler words ('um', 'like')",
        "reason": "Self-review is painful but necessary."
      },
      {
        "id": "w18-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Create flashcards for 20 system design terms, review daily",
        "reason": "Spaced repetition locks in knowledge."
      }
    ]
  }
];

export const DETAILS = {
  "w18-d1": {
    "objective": "Master core distributed systems concepts: CAP theorem, consistency models, and load balancing",
    "why": "Interviewers use these concepts to test if you understand the fundamental trade-offs of building systems at scale.",
    "steps": [
      "Explain CAP theorem (Consistency, Availability, Partition Tolerance) and why you can only pick two.",
      "Understand Eventual vs. Strong consistency.",
      "Learn load balancing algorithms: Round Robin, Least Connections, IP Hash.",
      "Study Layer 4 vs. Layer 7 load balancing."
    ],
    "tools": ["Whiteboard", "Notion"],
    "deliverable": "Summary notes on distributed systems fundamentals",
    "definitionOfDone": "You can explain the trade-off of any given architecture choice in terms of CAP.",
    "commonMistakes": ["Thinking consistency is only about SQL", "Ignoring the cost of partition tolerance"],
    "resumeLine": null,
    "connectsTo": "w18-d2"
  },
  "w18-d2": {
    "objective": "Read the foundational chapters of Designing Data-Intensive Applications (DDIA)",
    "why": "DDIA is the industry standard for understanding how data systems work. Chapters 1-3 provide the mental model for reliability and scalability.",
    "steps": [
      "Read Chapter 1: Reliability, Scalability, and Maintainability.",
      "Read Chapter 2: Data Models and Query Languages.",
      "Read Chapter 3: Storage and Retrieval.",
      "Focus on 'Log-Structured' vs 'B-Tree' storage engines."
    ],
    "tools": ["DDIA Book", "Highlighter"],
    "deliverable": "Key takeaways from DDIA Ch 1-3",
    "definitionOfDone": "You can describe the internal mechanics of a database index.",
    "commonMistakes": ["Skipping to diagrams without reading the text", "Ignoring the history of data models"],
    "resumeLine": "In-depth understanding of database internals and distributed system architecture trade-offs",
    "connectsTo": "w18-d3"
  },
  "w18-d3": {
    "objective": "Design a high-scale URL Shortener from scratch",
    "why": "The URL shortener tests your ability to handle read-heavy traffic, choose a storage layer, and handle unique ID generation.",
    "steps": [
      "Clarify requirements: Read vs Write ratio, latency targets.",
      "Design ID generation: Base62 encoding, Snowflake IDs, or DB auto-increment.",
      "Select storage: NoSQL (Key-Value) for speed vs SQL for ACID.",
      "Add caching: Redis/Memcached for hot links.",
      "Draw the full request flow from User to Redirect."
    ],
    "tools": ["Excalidraw", "Loom"],
    "deliverable": "URL Shortener architecture diagram",
    "definitionOfDone": "The design handles 100k+ requests per second with <100ms latency.",
    "commonMistakes": ["Forgetting to handle hash collisions", "Not calculating storage requirements"],
    "resumeLine": "Designed high-throughput URL shortening service with optimized caching and ID generation",
    "connectsTo": "w18-d4"
  },
  "w18-d4": {
    "objective": "Design a real-time Chat Application architecture",
    "why": "Chat apps test your knowledge of persistent connections (WebSockets), message ordering, and offline synchronization.",
    "steps": [
      "Compare WebSockets vs SSE (Server-Sent Events) vs Long Polling.",
      "Design the storage schema for messages and 'last seen' timestamps.",
      "Handle push notifications for offline users.",
      "Explain how to scale the connection manager across multiple servers.",
      "Address read receipts and delivery status."
    ],
    "tools": ["Excalidraw"],
    "deliverable": "Chat system design document",
    "definitionOfDone": "Architecture handles multi-device synchronization and out-of-order message delivery.",
    "commonMistakes": ["Ignoring message durability during server failure", "Using SQL for millions of messages without sharding"],
    "resumeLine": "Architected real-time messaging systems using WebSockets and scalable pub/sub infrastructure",
    "connectsTo": "w18-d5"
  },
  "w18-d5": {
    "objective": "Practice verbal delivery and technical communication of your designs",
    "why": "Interviews are a performance. You must be able to guide the interviewer through your mental model without getting stuck in the weeds.",
    "steps": [
      "Set a timer for 15 minutes per problem.",
      "Speak out loud as if explaining to a Principal Engineer.",
      "Identify the 'Bottle-necks' and address them proactively.",
      "Avoid 'Analysis Paralysis' — make a choice and defend it."
    ],
    "tools": ["Timer", "Mirror"],
    "deliverable": "Confident verbal walkthrough of two major systems",
    "definitionOfDone": "You can explain the entire data flow of both systems in under 15 minutes without referring to notes.",
    "commonMistakes": ["Rambling", "Waiting for the interviewer to prompt you for the next step"],
    "resumeLine": null,
    "connectsTo": "w18-d6"
  },
  "w18-d6": {
    "objective": "Record and self-critique a mock system design interview",
    "why": "Watching yourself is the only way to catch filler words, poor body language, and weak technical explanations.",
    "steps": [
      "Record a 20-minute session explaining the Chat App design.",
      "Listen for: 'Um', 'Like', 'Actually', 'Basically'.",
      "Check if your diagram is legible and drawn in a logical order.",
      "Verify that you answered the 'How do we scale?' question convincingly."
    ],
    "tools": ["Loom", "Zoom"],
    "deliverable": "Self-critique report with 3 areas for improvement",
    "definitionOfDone": "You have a list of 'Filler Words' to avoid and a plan to improve diagram clarity.",
    "commonMistakes": ["Being too hard on yourself", "Ignoring non-verbal cues (eye contact, confidence)"],
    "resumeLine": null,
    "connectsTo": "w18-d7"
  },
  "w18-d7": {
    "objective": "Use spaced repetition to memorize and internalize system design terminology",
    "why": "System design has a specific vocabulary. Using the right terms (e.g., 'Gossip Protocol', 'Quorum', 'Idempotency') signals seniority.",
    "steps": [
      "Create 20 flashcards (Anki or physical cards).",
      "Front: Term (e.g., 'Consistent Hashing'). Back: Definition + When to use it.",
      "Perform your first review session.",
      "Schedule daily reviews for the next 14 days."
    ],
    "tools": ["Anki", "Quizlet"],
    "deliverable": "A deck of 20+ master-level system design flashcards",
    "definitionOfDone": "You can define every term in the deck instantly and provide a use-case for each.",
    "commonMistakes": ["Memorizing definitions without understanding the underlying tech"],
    "resumeLine": null,
    "connectsTo": "Month 5"
  }
};
