export const WEEKS = [
  {
    "id": "b17",
    "num": "WEEK B17",
    "title": "AI Job Hunt: Research & Target",
    "theme": "Market Entry",
    "color": "#f97316",
    "boss": {
      "id": "boss-b17",
      "name": "The AI Sniper",
      "challenge": "Research 50 AI companies, rank top 25, send 15 personalized applications",
      "rewardXP": 500,
      "resumeLine": "Executed targeted AI engineer job search with personalized applications to LLM and AI infrastructure companies",
      "successCriteria": [
        "50 companies researched: AI startups, LLM companies, AI infrastructure, AI-enabled products",
        "Top 25 ranked by fit: your skills match their AI stack",
        "15 personalized applications with AI-specific cover notes",
        "5 LinkedIn DMs to AI engineering managers",
        "Tracking spreadsheet active",
        "95 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Find roles: LinkedIn (AI Engineer, ML Engineer, LLM Engineer, Applied Scientist), Wellfound, AngelList",
        "Filter: companies building with LLMs, vector DBs, or AI agents. Series A–D.",
        "Avoid: generic software roles with 'AI' in title but no LLM/ML work",
        "Target: OpenAI competitors, AI infrastructure (Pinecone, Weaviate), AI-enabled SaaS",
        "Research: tech stack (PyTorch vs TensorFlow, LangChain vs LlamaIndex), model size, deployment method",
        "Customize resume: AI Engineer version for pure AI, ML Engineer for model focus",
        "Cover note: reference their model, their RAG architecture, or their recent AI feature",
        "DM hiring managers: 'I built RAG with sub-200ms latency and fine-tuned Llama 3.1. Would love to chat about your AI stack.'",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "Research spreadsheet with 50 companies",
        "Top 25 ranked list",
        "15 application confirmations",
        "5 DM screenshots",
        "95 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "50 researched, 15 apps, 5 DMs, tracking active, 95 medium",
        "fail": "Mass-applying generic resumes, no AI-specific targeting, <95 medium"
      }
    },
    "tasks": [
      {
        "id": "b17-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Research 20 AI companies on LinkedIn. Filter: AI Engineer, ML Engineer, LLM Engineer. Check if they actually use LLMs (read job description, company blog, tech stack).",
        "reason": "Many companies put 'AI' in the title for SEO. Verify they actually build with LLMs. Read their engineering blog."
      },
      {
        "id": "b17-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Research 20 more on Wellfound + AngelList. Focus: AI-native startups. Check recent funding on Crunchbase. AI startups with fresh funding are hiring aggressively.",
        "reason": "AI startups pay premium salaries for AI talent. Fresh funding = hiring budget. Series A–B is the sweet spot."
      },
      {
        "id": "b17-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Research 10 AI infrastructure companies: Pinecone, Weaviate, LangChain, LlamaIndex, Vercel AI SDK, Replicate, Baseten. These companies need AI engineers who understand the stack.",
        "reason": "AI infrastructure companies pay top dollar. They need people who've built what they sell. Your RAG experience is directly relevant."
      },
      {
        "id": "b17-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Send 8 personalized applications. Use AI Engineer resume. Cover note: reference their specific model, vector DB, or AI feature. 'I noticed you use Pinecone for semantic search — I built a similar system with sub-200ms latency.'",
        "reason": "AI engineers are scarce. Personalized apps get 5x responses. Show you understand their specific stack."
      },
      {
        "id": "b17-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Send 7 more apps + 3 DMs to AI engineering managers. DM formula: 'I built production RAG and fine-tuned Llama 3.1. I see you're hiring for X. Would love to learn about your AI architecture.'",
        "reason": "AI engineering managers are technical. They appreciate architecture discussions, not generic pitches."
      },
      {
        "id": "b17-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Set up tracking spreadsheet: Company | Role | AI Stack | Date Applied | Hiring Manager | Status | Follow-up | Notes. Color-code by priority.",
        "reason": "AI job hunt is specialized. Track their AI stack, not just company name. Follow-up references their specific technology."
      },
      {
        "id": "b17-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 25,
        "text": "LeetCode: 2 medium in Python. Follow up on apps sent 5+ days ago. Send value-add: 'I just published my RAG architecture blog — thought you'd find the latency optimization interesting.'",
        "reason": "Value-add follow-up proves you're actively building in the space. Not just job hunting."
      }
    ]
  },
  {
    "id": "b18",
    "num": "WEEK B18",
    "title": "AI Job Hunt: Apply & Follow-up",
    "theme": "Volume + Persistence",
    "color": "#8b5cf6",
    "boss": {
      "id": "boss-b18",
      "name": "The AI Grinder",
      "challenge": "Send 15 more apps (30 total), follow up on all, get 3+ AI phone screens",
      "rewardXP": 500,
      "resumeLine": "Maintained disciplined AI engineer application pipeline resulting in multiple technical interview opportunities",
      "successCriteria": [
        "30 total AI applications sent",
        "All pending applications followed up",
        "3+ phone screens or recruiter calls for AI roles",
        "1 warm intro from AI network (Week B14 connections)",
        "Referral requests to 3 AI contacts",
        "100 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Send 8 more personalized AI applications",
        "Send 7 stretch applications (slightly above level, bigger AI companies)",
        "Follow up on all Week B17 apps with AI-specific updates",
        "Ask 3 Week B14 connections for AI referrals",
        "Respond to AI recruiter messages within 4 hours",
        "Prepare 30-second AI pitch: 'I build production LLM systems: RAG, agents, fine-tuning, MLOps'",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "30 application confirmations",
        "Follow-up log",
        "3+ phone screen confirmations",
        "1 warm intro",
        "100 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "30 apps, 3+ screens, all follow-ups, 100 medium",
        "fail": "Under 30 apps, no screens, ghosting follow-ups, <100 medium"
      }
    },
    "tasks": [
      {
        "id": "b18-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 75,
        "text": "Send 8 more AI applications. Include 2 stretch: bigger names (Anthropic, Cohere, Stability AI) or well-funded Series B. Stretch keeps you growing.",
        "reason": "Stretch applications teach you interview skills even if you don't get them. AI leaders set the bar."
      },
      {
        "id": "b18-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Send 7 more apps. Focus on 'Applied AI Engineer' or 'AI Product Engineer' roles — these value your full-stack + AI combination.",
        "reason": "Pure research roles want PhDs. Applied roles want builders. Your full-stack background is an asset here."
      },
      {
        "id": "b18-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Follow up on all Week B17 apps. Value-add: 'I optimized my RAG pipeline to <150ms' or 'I just contributed to LangChain'. Show continuous improvement.",
        "reason": "AI moves fast. Showing you improve weekly signals you're actively building, not just waiting."
      },
      {
        "id": "b18-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Ask 3 AI connections for referrals. 'I'm applying to [AI Company] for [LLM Engineer]. Do you know anyone on their AI team? A warm intro would mean a lot.'",
        "reason": "AI is a small community. Referrals matter more than in general software. Your network from Week B14 is gold."
      },
      {
        "id": "b18-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Respond to all AI recruiter messages within 4 hours. Schedule calls within 48 hours. Pitch: 'I build production LLM systems — RAG with sub-200ms retrieval, fine-tuned models, agentic workflows.'",
        "reason": "AI recruiters move fast. Good candidates get multiple offers in 2 weeks. Speed signals interest."
      },
      {
        "id": "b18-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Prepare for AI phone screens: research company's models, their vector DB, their AI stack. Prepare 3 questions about their AI architecture.",
        "reason": "AI engineers ask technical questions. 'What model do you use for X?' 'How do you handle hallucination?' Shows expertise."
      },
      {
        "id": "b18-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 25,
        "text": "LeetCode: 2 medium in Python. Complete any scheduled phone screens. Send thank-you emails within 4 hours referencing AI architecture discussion.",
        "reason": "Thank-you emails increase offer rates 20%. Mentioning their AI stack proves you were engaged."
      }
    ]
  },
  {
    "id": "b19",
    "num": "WEEK B19",
    "title": "AI Technical Interviews",
    "theme": "Execute Under Pressure",
    "color": "#ec4899",
    "boss": {
      "id": "boss-b19",
      "name": "The AI Performer",
      "challenge": "Complete all AI technical interviews. Push 2+ roles to final round. Document everything.",
      "rewardXP": 600,
      "resumeLine": "Advanced multiple AI engineer roles to final rounds through strong technical and ML system design performance",
      "successCriteria": [
        "All scheduled AI technical interviews completed",
        "2+ roles in final round or offer stage",
        "ML theory questions answered: overfitting, regularization, attention, backprop",
        "AI system design: model serving, batch vs real-time, caching, cost optimization",
        "Coding: Python data structures and algorithms",
        "Every interviewer gets thank-you email within 4 hours",
        "105 LeetCode medium in Python"
      ],
      "howToComplete": [
        "ML theory: overfitting (bias/variance), regularization (L1/L2, dropout), optimizers (Adam, SGD), attention mechanism, backpropagation",
        "AI system design: model serving architecture, batch inference vs real-time, model versioning, A/B testing, caching strategies, cost per request",
        "Coding: Python LeetCode medium — arrays, hash maps, trees, graphs",
        "Take-homes: document ML approach, include README, show evaluation metrics",
        "Send thank-you emails: reference specific AI discussion",
        "Follow up every 5–7 days",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "Interview log (all rounds, questions, answers)",
        "Thank-you emails (all sent)",
        "Take-home repos with README and tests",
        "2+ final round confirmations",
        "105 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "2+ final rounds + ML theory solid + AI system design clear + 105 medium",
        "fail": "Bombed ML questions, no system design practice, <105 medium"
      }
    },
    "tasks": [
      {
        "id": "b19-d1",
        "day": "Day 1",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Complete ML theory interview. Questions: explain overfitting and 3 ways to prevent it. Explain attention mechanism with math. Explain backpropagation step by step. Explain why transformers beat RNNs.",
        "reason": "ML theory is the foundation. If you can't explain attention or backprop, you're not an AI engineer."
      },
      {
        "id": "b19-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Complete AI system design: design model serving architecture for 1000 QPS. Discuss: batch vs real-time, model versioning, caching, load balancing, GPU utilization, cost per request, fallback strategies.",
        "reason": "AI system design is different from regular backend. GPUs, latency, cost — these are AI-specific constraints."
      },
      {
        "id": "b19-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Complete coding interview: Python LeetCode medium. Focus on problems involving hash maps, two pointers, sliding window, binary search. Think out loud. Test edge cases.",
        "reason": "AI engineers still code. Python fluency is tested. Process matters more than answer."
      },
      {
        "id": "b19-d4",
        "day": "Day 4",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Complete take-home: build a small RAG system or fine-tune a model. Document approach in README. Include: data prep, model choice, training config, evaluation metrics, deployment plan.",
        "reason": "Take-homes test how you approach ML problems. Documentation and evaluation separate juniors from seniors."
      },
      {
        "id": "b19-d5",
        "day": "Day 5",
        "time": "2.5h",
        "depth": "Medium",
        "xp": 75,
        "text": "Send thank-you emails to all AI interviewers. Reference specific moment: 'I enjoyed discussing your approach to reducing hallucination with retrieval augmentation.' Reiterate interest.",
        "reason": "Thank-you emails increase offer rates 20%. Specificity about their AI approach proves engagement."
      },
      {
        "id": "b19-d6",
        "day": "Day 6",
        "time": "2h",
        "depth": "Action",
        "xp": 50,
        "text": "Follow up on pending AI decisions. Value-add: 'I just optimized my agent's reasoning loop — thought you'd find the error recovery pattern interesting.'",
        "reason": "Persistence without pestering. Value-add keeps you top of mind for AI roles."
      },
      {
        "id": "b19-d7",
        "day": "Day 7",
        "time": "2h",
        "depth": "Action",
        "xp": 100,
        "text": "LeetCode: 2 medium in Python. Rest. Review ML theory notes. Visualize success. Confidence > last-minute cramming.",
        "reason": "Mental state is 30% of interview performance. Burned-out candidates underperform. Sleep wins."
      }
    ]
  },
  {
    "id": "b20",
    "num": "WEEK B20",
    "title": "AI Offer & Transition",
    "theme": "The New Beginning",
    "color": "#10b981",
    "boss": {
      "id": "boss-b20",
      "name": "The AI Career Architect",
      "challenge": "Negotiate AI offer, plan 90 days, transition from full-stack to AI engineer",
      "rewardXP": 600,
      "resumeLine": "Negotiated competitive AI engineer offer and planned strategic 90-day entry for maximum impact",
      "successCriteria": [
        "2+ final rounds completed",
        "1+ AI engineer offer received",
        "Offer negotiated: base $130K–$160K, equity, bonus, remote, title",
        "90-day plan: learn AI stack → ship first model → optimize pipeline → lead AI initiative",
        "Pre-start 1:1s with AI team lead and manager",
        "12-month goals: senior AI engineer, conference talk, open-source contribution",
        "Graceful transition from current full-stack role",
        "LinkedIn announcement: 'Joining [Company] as AI Engineer'",
        "110 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Use competing AI offers as leverage",
        "Negotiate total comp: base $130K–$160K, equity (0.1–0.5% for Series B), bonus, signing, remote, title",
        "Get offer in writing before giving notice",
        "Write 90-day plan: Week 1 (learn their AI stack, models, data), Month 1 (ship first improvement to existing model), Month 3 (lead new AI feature)",
        "Schedule pre-start intros with AI team",
        "Document 12-month goals: promotion to Senior AI Engineer, 1 conference talk, 2 open-source PRs",
        "Write resignation: gratitude, notice, transition help",
        "Post LinkedIn: transformation story, thank previous team, excitement for AI role",
        "Solve 1 LeetCode medium daily"
      ],
      "deliverables": [
        "Signed AI engineer offer letter",
        "Negotiation notes",
        "90-day plan document",
        "Stakeholder meeting notes",
        "12-month goal document",
        "Resignation letter",
        "LinkedIn announcement post",
        "110 LeetCode medium submissions"
      ],
      "passFail": {
        "pass": "Signed AI offer $130K–$160K + 90-day plan + graceful transition + 110 medium",
        "fail": "Accepting first number with no negotiation or burning bridges"
      }
    },
    "tasks": [
      {
        "id": "b20-d1",
        "day": "Day 1",
        "time": "2h",
        "depth": "Deep",
        "xp": 75,
        "text": "Complete final rounds: AI culture fit, meet the AI team, discuss their roadmap. Ask: 'What's the biggest AI challenge you're facing right now?' Show curiosity about their specific problems.",
        "reason": "Final rounds test culture fit. They want to know if you can collaborate on AI research and engineering."
      },
      {
        "id": "b20-d2",
        "day": "Day 2",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Negotiate AI offer. Script: 'I'm excited about this AI role. Based on my research and other opportunities, I was hoping for $X. Can we discuss total comp including equity?' Target $130K–$160K base.",
        "reason": "AI engineers are scarce. You have leverage. Negotiators earn $500K+ more over a career. Don't accept the first number."
      },
      {
        "id": "b20-d3",
        "day": "Day 3",
        "time": "2.5h",
        "depth": "Deep",
        "xp": 100,
        "text": "Write 90-day plan: Week 1 (learn their models, data pipeline, evaluation metrics, on-call), Month 1 (ship first improvement: latency, accuracy, or cost reduction), Month 3 (lead new AI feature: new model, new agent, new RAG pipeline).",
        "reason": "The first 90 days define your AI reputation. Show this plan to your new manager. Demonstrate strategic thinking."
      },
      {
        "id": "b20-d4",
        "day": "Day 4",
        "time": "2h",
        "depth": "Medium",
        "xp": 75,
        "text": "Schedule pre-start 1:1s with AI team lead and manager. Ask: 'What does success look like in 30/60/90 days?' 'What's the most urgent AI problem?' 'What model are you most excited about?'",
        "reason": "Relationships built before Day 1 accelerate trust. Show initiative. Learn their AI stack before you start."
      },
      {
        "id": "b20-d5",
        "day": "Day 5",
        "time": "2h",
        "depth": "Medium",
        "xp": 75,
        "text": "Write 12-month goals: Senior AI Engineer promotion criteria, 1 conference talk (NeurIPS workshop or AI Engineer Summit), 2 open-source contributions, 1 blog post per month.",
        "reason": "You architect your AI career. Write the blueprint. Review with manager at 30 days."
      },
      {
        "id": "b20-d6",
        "day": "Day 6",
        "time": "1.5h",
        "depth": "Action",
        "xp": 50,
        "text": "Write graceful resignation from full-stack role. Thank for opportunities. Give standard notice. Offer transition documentation. Zero negativity. Tech is small.",
        "reason": "You may need references. You may want to return. Graceful exits build long-term reputation."
      },
      {
        "id": "b20-d7",
        "day": "Day 7",
        "time": "1.5h",
        "depth": "Action",
        "xp": 125,
        "text": "Celebrate. Post on LinkedIn: 'After 4 years in mobile, 6 months in full-stack, and 6 months building AI systems, I'm joining [Company] as AI Engineer. Here's my journey.' Tag mentors, thank previous teams.",
        "reason": "Public milestones inspire others and attract the next opportunity. You earned this. AI engineer."
      }
    ]
  }
];

export const DETAILS = {
  "b17-d1": {
    "objective": "Identify high-fit AI roles and companies matching your specialized stack",
    "why": "AI is a broad field. Focusing on companies using the specific tools you've mastered (RAG, PyTorch, OpenAI) increases your response rate by 300%.",
    "steps": [
      "Set up LinkedIn alerts for 'AI Engineer', 'LLM Engineer', and 'Applied Scientist'.",
      "Read the last 3 blog posts of top-tier target companies to identify their active model usage.",
      "Check their GitHub repositories for contributions to open-source AI tooling."
    ],
    "tools": ["LinkedIn Jobs", "Crunchbase", "Company Blogs"],
    "deliverable": "A prioritized list of 20 high-fit AI companies",
    "definitionOfDone": "You have confirmed that each company on your list is actively shipping LLM-based products",
    "commonMistakes": ["Applying to 'Data Scientist' roles that require PhD-level research focus"],
    "resumeLine": null,
    "connectsTo": "b17-d2"
  },
  "b18-d1": {
    "objective": "Target industry-leading AI labs and well-funded unicorns",
    "why": "Stretch applications force you to raise your technical bar. Interviewing with leaders like Anthropic or Cohere provides invaluable feedback on the industry's highest standards.",
    "steps": [
      "Identify 2 'Tier 1' AI companies with open engineering roles.",
      "Analyze their open-source contributions to find specific technical gaps or themes.",
      "Draft a highly technical cover note referencing their specific research or infrastructure."
    ],
    "tools": ["Wellfound", "AngelList", "GitHub"],
    "deliverable": "2 high-impact applications to industry-leading AI firms",
    "definitionOfDone": "Applications are submitted with custom notes referencing their specific AI stack",
    "commonMistakes": ["Thinking you are 'not ready' for top-tier companies; let them decide"],
    "resumeLine": "Advanced through competitive application pipelines at leading AI infrastructure firms",
    "connectsTo": "b18-d2"
  },
  "b19-d1": {
    "objective": "Validate foundational Machine Learning and Deep Learning theory",
    "why": "AI Engineer interviews always include a 'Theory Check'. If you cannot explain the math of Attention or Backprop, you won't pass the first technical screen.",
    "steps": [
      "Review the mathematical derivation of the Attention mechanism ($Q, K, V$).",
      "Prepare explanations for 'Bias vs Variance' and 'Vanishing Gradients'.",
      "Conduct a mock theory interview focusing on the difference between BERT and GPT architectures."
    ],
    "tools": ["Deep Learning Specialization", "Jay Alammar's Blog"],
    "deliverable": "Confidence in answering 10+ core AI theory questions",
    "definitionOfDone": "You can explain the forward and backward pass of a neural network without referencing notes",
    "commonMistakes": ["Vague hand-waving instead of using specific technical terminology (e.g., 'Softmax', 'Dot-product')"],
    "resumeLine": null,
    "connectsTo": "b19-d2"
  },
  "b20-d1": {
    "objective": "Execute final-round 'Deep Dives' and Cultural Alignment sessions",
    "why": "The final round is where you meet your future peers. Showing curiosity about their specific AI roadmap proves you are a long-term strategic asset, not just a contractor.",
    "steps": [
      "Prepare 3 technical questions about their GPU orchestration or data labeling strategy.",
      "Research the AI team lead's background on LinkedIn or Twitter.",
      "Visualize success and prepare your 'Transformation Story' (Mobile to AI)."
    ],
    "tools": ["Company Roadmap", "Stakeholder Bios"],
    "deliverable": "Completed final rounds with strong positive signal from the AI team",
    "definitionOfDone": "You have articulated a clear 12-month vision for your contribution to their AI initiatives",
    "commonMistakes": ["Focusing only on the technical; cultural alignment is 50% of the final decision"],
    "resumeLine": "Advanced to final offer stages for multiple high-growth AI engineering roles",
    "connectsTo": "b20-d2"
  }
};
