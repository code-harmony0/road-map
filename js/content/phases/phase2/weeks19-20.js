export const WEEKS = [
  {
    "id": "w19",
    "num": "WEEK 19",
    "title": "Content & Authority 1",
    "theme": "Build Voice",
    "color": "#ec4899",
    "boss": {
      "id": "boss-w19",
      "name": "The Writer",
      "challenge": "Publish first deep post and set up content system",
      "rewardXP": 400,
      "resumeLine": "Published technical content building recruiting visibility",
      "successCriteria": [
        "One 1500+ word post published",
        "Newsletter or blog set up",
        "LinkedIn strategy written (3 posts/week)",
        "GitHub profile polished"
      ],
      "howToComplete": [
        "Write: 'From React Native to Full-Stack: 6 Months of Lessons'",
        "Set up Substack or Hashnode",
        "Write 3 LinkedIn posts",
        "Pin 3 repos with descriptions",
        "Engage on 5 posts daily"
      ],
      "deliverables": [
        "Published post URL",
        "Newsletter link",
        "LinkedIn calendar",
        "Updated GitHub"
      ],
      "passFail": {
        "pass": "Post published, newsletter live, GitHub polished",
        "fail": "Zero published content"
      }
    },
    "tasks": [
      {
        "id": "w19-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Write post outline: hook, problem, solution, code, results",
        "reason": "Structure prevents writer's block."
      },
      {
        "id": "w19-d2",
        "day": "Day 2",
        "time": "10h",
        "depth": "Deep",
        "xp": 100,
        "text": "Draft full post with code snippets and screenshots",
        "reason": "Show, don't tell."
      },
      {
        "id": "w19-d3",
        "day": "Day 3",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Edit post: cut 20%, fix grammar, add diagrams",
        "reason": "Editing makes good writing great."
      },
      {
        "id": "w19-d4",
        "day": "Day 4",
        "time": "5h",
        "depth": "Medium",
        "xp": 50,
        "text": "Set up Substack, publish, schedule 2 more",
        "reason": "Consistency beats virality."
      },
      {
        "id": "w19-d5",
        "day": "Day 5",
        "time": "5h",
        "depth": "Medium",
        "xp": 50,
        "text": "Write 3 LinkedIn posts for the week",
        "reason": "3 posts/week is minimum for growth."
      },
      {
        "id": "w19-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Polish GitHub: pin 3 repos, write descriptions",
        "reason": "GitHub is your portfolio."
      },
      {
        "id": "w19-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 0,
        "text": "Comment meaningfully on 5 posts, reply to all comments on yours",
        "reason": "Lurkers don't grow."
      }
    ]
  },
  {
    "id": "w20",
    "num": "WEEK 20",
    "title": "Content & Authority 2",
    "theme": "Network",
    "color": "#f97316",
    "boss": {
      "id": "boss-w20",
      "name": "The Connector",
      "challenge": "Publish second post, offer advisory, build 5 warm connections",
      "rewardXP": 400,
      "resumeLine": "Expanded network through advisory calls and content",
      "successCriteria": [
        "Second post published",
        "3 advisory calls completed",
        "5 warm connections",
        "1 warm intro to hiring manager"
      ],
      "howToComplete": [
        "Write post 2: 'Building RAG for Mobile: Mistakes I Made'",
        "Post advisory offer on LinkedIn",
        "Conduct 3 calls, take notes",
        "Ask each for one intro",
        "Send thank-yous with resources"
      ],
      "deliverables": [
        "Post 2 URL",
        "3 call notes",
        "5 connections",
        "1 warm intro"
      ],
      "passFail": {
        "pass": "2 posts + 3 calls + 5 connections + 1 intro",
        "fail": "No calls or no connections"
      }
    },
    "tasks": [
      {
        "id": "w20-d1",
        "day": "Day 1",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Draft post 2: focus on one mistake and how you fixed it",
        "reason": "Mistake posts perform 3x better."
      },
      {
        "id": "w20-d2",
        "day": "Day 2",
        "time": "7.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Edit and publish post 2, share everywhere",
        "reason": "Distribution multiplies impact."
      },
      {
        "id": "w20-d3",
        "day": "Day 3",
        "time": "5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Post advisory offer, DM 5 targets with personalized notes",
        "reason": "Free advisory builds trust fastest."
      },
      {
        "id": "w20-d4",
        "day": "Day 4",
        "time": "5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Prepare advisory framework: 5 questions, pitfalls list",
        "reason": "Structured calls are valuable."
      },
      {
        "id": "w20-d5",
        "day": "Day 5",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Conduct 2 advisory calls, document insights",
        "reason": "Their pain points = your market research."
      },
      {
        "id": "w20-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "3rd call, ask for intro, send thank-you emails",
        "reason": "Ask comes AFTER value, never before."
      },
      {
        "id": "w20-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 0,
        "text": "Write '3 Lessons from Advising Startups' post for next week",
        "reason": "Synthesize private wisdom publicly."
      }
    ]
  }
];

export const DETAILS = {
  "w19-d1": {
    "objective": "Create a high-conversion outline for your primary technical case study",
    "why": "Structure prevents rambling. A well-hooked post attracts engineering managers who value clear communication.",
    "steps": [
      "Define the 'Hook': Why should a reader care about your full-stack AI journey?",
      "Identify the 'Gap': What was the hardest backend concept to learn coming from mobile?",
      "List the 'Pillars': AI Observability, RAG, and Multi-modal integration.",
      "Summarize the 'ROI': Measurable results from your flagship project."
    ],
    "tools": ["Notion", "Markdown"],
    "deliverable": "Detailed blog post outline with specific headers and code snippet placeholders",
    "definitionOfDone": "Outline covers the full 6-month journey with a clear technical takeaway",
    "commonMistakes": ["Being too personal without enough technical 'meat'"],
    "resumeLine": null,
    "connectsTo": "w19-d2"
  },
  "w19-d2": {
    "objective": "Draft the full technical case study with embedded code and visual proof",
    "why": "Show, don't tell. Code snippets and screenshots prove you didn't just 'use' AI, but engineered it.",
    "steps": [
      "Write 1500+ words based on your outline.",
      "Integrate your best LangSmith trace screenshots.",
      "Add a visual comparison of your early Week 1 API vs your Week 15 Agentic loop.",
      "Embed a Loom video of your multi-modal personal assistant."
    ],
    "tools": ["VS Code", "Loom", "Excalidraw"],
    "deliverable": "Complete first draft of 'From React Native to Full-Stack AI'",
    "definitionOfDone": "Draft is technically comprehensive and contains at least 3 distinct code blocks",
    "commonMistakes": ["Writing a generic listicle instead of a deep case study"],
    "resumeLine": "Authored comprehensive technical guides on full-stack AI integration, establishing thought leadership in the mobile ecosystem",
    "connectsTo": "w19-d3"
  },
  "w19-d3": {
    "objective": "Polish and edit the case study for clarity, tone, and visual impact",
    "why": "Editing makes good writing great. High-quality visuals ensure readers actually finish the post.",
    "steps": [
      "Run the text through Hemingway or Grammarly to simplify complex sentences.",
      "Cut 20% of the filler words.",
      "Create a professional 'hero image' for the post using Canva or Figma.",
      "Ensure all technical terms are linked to relevant documentation."
    ],
    "tools": ["Grammarly", "Canva", "Hemingway Editor"],
    "deliverable": "Publish-ready final draft",
    "definitionOfDone": "Post is free of errors, visually engaging, and has a clear 'Call to Action' at the end",
    "commonMistakes": ["Neglecting the 'First 10%': the title and hero image determine 80% of clicks"],
    "resumeLine": null,
    "connectsTo": "w19-d4"
  },
  "w19-d4": {
    "objective": "Launch your technical newsletter and establish a publishing system",
    "why": "Newsletters own your audience. You need a platform that you control to build a long-term network.",
    "steps": [
      "Create a Substack or Hashnode account.",
      "Import your initial list (Week 11 connections).",
      "Publish your first deep-dive post.",
      "Draft 2 'Short Tips' to be automatically sent over the next 10 days."
    ],
    "tools": ["Substack", "Hashnode"],
    "deliverable": "Live technical blog/newsletter with your first flagship post",
    "definitionOfDone": "Landing page is live and the first email has been successfully sent to subscribers",
    "commonMistakes": ["Spending too much time on logo/theme instead of content"],
    "resumeLine": "Launched and scaled a technical newsletter focused on Mobile AI and platform engineering",
    "connectsTo": "w19-d5"
  },
  "w19-d5": {
    "objective": "Establish a consistent LinkedIn presence with a weekly content calendar",
    "why": "3 posts/week is the minimum for the algorithm to surface you to recruiters and hiring managers.",
    "steps": [
      "Monday: Share a 'Lesson Learned' from the roadmap.",
      "Wednesday: Share a 'Technical Tip' or a snippet of code.",
      "Friday: Share a 'Project Update' with a visual demo.",
      "Schedule these using Buffer or Hypefury."
    ],
    "tools": ["Hypefury", "Buffer", "LinkedIn"],
    "deliverable": "A 4-week automated content calendar",
    "definitionOfDone": "LinkedIn posts are scheduled and ready to go for the next month",
    "commonMistakes": ["Posting only once and stopping when it doesn't go viral"],
    "resumeLine": null,
    "connectsTo": "w19-d6"
  },
  "w19-d6": {
    "objective": "Transform your GitHub profile into a high-signal portfolio",
    "why": "GitHub is your technical resume. Recruiters will check your pinned repos to see code quality and documentation standards.",
    "steps": [
      "Pin your 3 best projects: Backend API, RAG System, and Multi-modal Assistant.",
      "Ensure every pinned repo has a 'Setup' section that works in under 5 minutes.",
      "Write a 'Personal README' for your profile using stats and icons.",
      "Check all links are live and not pointing to localhost."
    ],
    "tools": ["GitHub Profile README", "Shields.io"],
    "deliverable": "A 'Staff-Ready' GitHub profile",
    "definitionOfDone": "Your profile bio, pinned repos, and contributions clearly signal 'Full-Stack AI Expert'",
    "commonMistakes": ["Leaving messy, half-finished experiments pinned to the top"],
    "resumeLine": "Maintained high-quality open-source contributions and production-grade portfolio repositories",
    "connectsTo": "w19-d7"
  },
  "w19-d7": {
    "objective": "Engage with the community and build relationships through technical comments",
    "why": "Authority is built in the comments. Helping others solve technical problems proves you are an expert and humanizes your profile.",
    "steps": [
      "Search for keywords: 'Pinecone', 'Whisper', 'React Native New Arch'.",
      "Provide high-value answers to 5 questions on LinkedIn or Reddit.",
      "Connect with the authors of the posts you comment on.",
      "Reply to every comment on your own newly published post."
    ],
    "tools": ["Reddit r/reactnative", "Twitter/X Search", "LinkedIn Feed"],
    "deliverable": "Engagement log with 5+ meaningful technical connections",
    "definitionOfDone": "Daily engagement becomes a 15-minute habit, not a chore",
    "commonMistakes": ["Spamming 'Great post!' without adding value"],
    "resumeLine": null,
    "connectsTo": "w20-d1"
  },
  "w20-d1": {
    "objective": "Draft a 'Mistake-First' technical post to humanize your authority",
    "why": "'I failed at X and learned Y' posts perform 3x better than generic guides. They show vulnerability and deep understanding.",
    "steps": [
      "Pick a specific failure: e.g., 'Why my RAG system was slow' or 'How I leaked an API key'.",
      "Explain the technical root cause (The 'Why').",
      "Detail the fix (The 'How').",
      "Write the 'Senior Takeaway': How to prevent this in a team setting."
    ],
    "tools": ["Notion", "Markdown"],
    "deliverable": "Draft of 'Mistakes I Made Building Mobile AI'",
    "definitionOfDone": "The post focuses on a specific technical challenge and provides a clear solution",
    "commonMistakes": ["Being too vague about the mistake to save face"],
    "resumeLine": null,
    "connectsTo": "w20-d2"
  },
  "w20-d2": {
    "objective": "Publish and distribute your second major post across multiple platforms",
    "why": "Distribution multiplies impact. You want your work to be seen by peers, mentors, and hiring leads simultaneously.",
    "steps": [
      "Finalize the 'Mistake' post and publish on your newsletter/Substack.",
      "Share on Hacker News and specialized subreddits.",
      "Tag relevant influencers who have spoken about the same problem.",
      "Check metrics (views, shares, comments) to see which platforms respond best."
    ],
    "tools": ["Reddit", "Hacker News", "Substack"],
    "deliverable": "Published post distributed across 4+ channels",
    "definitionOfDone": "Post is visible on at least 2 community platforms and generating discussion",
    "commonMistakes": ["Posting once and moving on; 'The Money is in the Distribution'"],
    "resumeLine": "Published authoritative post-mortems and technical lessons, influencing best practices in the mobile AI niche",
    "connectsTo": "w20-d3"
  },
  "w20-d3": {
    "objective": "Leverage your expertise to offer free technical advisory and build high-leverage connections",
    "why": "Giving advice before asking for a job builds extreme trust. It positions you as a peer to founders and CTOs.",
    "steps": [
      "Post on LinkedIn: 'I've spent 6 months building AI for mobile. Offering 3 free 30-min audits for founders.'",
      "Identify 5 'Dream Companies' and find their tech leads.",
      "Send a personalized note: 'Loved your work on X. Just published a case study on Y. Would love to share insights.'",
      "Book your first audit call."
    ],
    "tools": ["LinkedIn Premium", "Calendly"],
    "deliverable": "3 booked advisory sessions + 5 high-value outreaches",
    "definitionOfDone": "You have scheduled time with at least one founder or technical decision-maker",
    "commonMistakes": ["Sounding like a job seeker; you are an 'Expert Advisor'"],
    "resumeLine": "Provided technical advisory to AI-focused startups, influencing architecture and roadmap decisions",
    "connectsTo": "w20-d4"
  },
  "w20-d4": {
    "objective": "Prepare a professional advisory framework to deliver extreme value in 30 minutes",
    "why": "Structured calls are valuable; rambling is a waste of time. A framework ensures you look like a pro.",
    "steps": [
      "Draft 5 'Diagnostic Questions' to uncover their biggest technical pain points.",
      "Create a 'Common Pitfalls' checklist (e.g., Latency, Cost, Context Window).",
      "List 3 specific tools you recommend for most mobile AI startups.",
      "Have a 'Next Steps' template ready for after the call."
    ],
    "tools": ["Google Slides", "Notion"],
    "deliverable": "Advisory Audit Toolkit",
    "definitionOfDone": "You have a clear script and resources to guide a high-value technical conversation",
    "commonMistakes": ["Going into an advisory call without a clear structure"],
    "resumeLine": null,
    "connectsTo": "w20-d5"
  },
  "w20-d5": {
    "objective": "Conduct advisory calls and perform market research through technical consulting",
    "why": "Their pain points are your market research. You are learning what companies actually pay for.",
    "steps": [
      "Listen 80%, talk 20%.",
      "Document the #1 technical challenge every founder mentions.",
      "Offer 1 immediate 'Quick Win' and 1 'Long-Term Architecture' fix.",
      "Ask for a testimonial at the end of the call."
    ],
    "tools": ["Zoom/Google Meet", "Notion"],
    "deliverable": "Call notes and identified 'Market Pains'",
    "definitionOfDone": "Calls are completed and high-level technical notes are recorded",
    "commonMistakes": ["Giving 'Generic' advice; be specific to their actual codebase/product"],
    "resumeLine": "Conducted technical audits for early-stage AI startups, identifying critical architectural bottlenecks",
    "connectsTo": "w20-d6"
  },
  "w20-d6": {
    "objective": "Convert advisory calls into network leverage and warm introductions",
    "why": "Asking for an intro after delivering value is the 'cheat code' for high-end job hunting.",
    "steps": [
      "Send a thank-you email within 2 hours with the resources you promised.",
      "Ask: 'Who else do you know building in this space that I should talk to?'",
      "If you liked the company, ask: 'Are you guys looking for help on this, or should I talk to [Target Company X]?'",
      "Add them to your 'Warm Network' list."
    ],
    "tools": ["Email", "CRM or Spreadsheet"],
    "deliverable": "3 value-add follow-up emails + 1 warm introduction",
    "definitionOfDone": "Follow-ups are sent and connections are moved to your inner network",
    "commonMistakes": ["Waiting too long to follow up (momentum dies after 24 hours)"],
    "resumeLine": null,
    "connectsTo": "w20-d7"
  },
  "w20-d7": {
    "objective": "Synthesize private advisory wisdom into public technical authority",
    "why": "Sharing 'what I learned' from advising startups builds your brand as a consultant-grade engineer.",
    "steps": [
      "Summarize the top 3 recurring problems you saw this week.",
      "Write a 'Mobile AI Trends 2026' post for LinkedIn.",
      "Hint at your upcoming 'Job Hunt' (e.g., 'Looking to solve these at scale').",
      "Tag the founders you spoke with to thank them for the insights."
    ],
    "tools": ["LinkedIn"],
    "deliverable": "Flagship 'Lessons from Advising' social post",
    "definitionOfDone": "Post is live and demonstrating your bird's-eye view of the industry",
    "commonMistakes": ["Sharing confidential company data; focus on the *patterns*"],
    "resumeLine": null,
    "connectsTo": "w21-d1"
  }
};
