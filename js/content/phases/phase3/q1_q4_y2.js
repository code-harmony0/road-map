export const QUARTERS = [
  {
    "id": "m7",
    "num": "Q1-Q2 (Yr 2)",
    "title": "Advisory Consultant",
    "theme": "Consulting + Advisory",
    "color": "#f59e0b",
    "boss": {
      "id": "boss-m7",
      "name": "The Strategic Advisor",
      "challenge": "Secure 2 startup clients",
      "reward": 7500,
      "resume": "Advisory / technical consultant for early-stage startups"
    },
    "tasks": [
      { "id": "m7-p1", "day": "Phase 1", "time": "25h", "depth": "Deep", "xp": 1000, "text": "Package expertise into offering", "reason": "Audit + Strategy format" },
      { "id": "m7-p2", "day": "Phase 2", "time": "25h", "depth": "Action", "xp": 1000, "text": "Network with Seed/Series A founders", "reason": "Inbound/Outbound leads" },
      { "id": "m7-p3", "day": "Phase 3", "time": "25h", "depth": "Deep", "xp": 1000, "text": "Secure equity/retainer deals", "reason": "$80K-$120K additional income" }
    ]
  },
  {
    "id": "m9",
    "num": "Q3-Q4 (Yr 2)",
    "title": "Content + Courses",
    "theme": "Scalable Income",
    "color": "#f59e0b",
    "boss": {
      "id": "boss-m9",
      "name": "The Technical Advisor",
      "challenge": "Total Comp $250K-$350K",
      "reward": 7500,
      "resume": "Industry Expert, Multi-Stream Income"
    },
    "tasks": [
      { "id": "m9-p1", "day": "Phase 1", "time": "25h", "depth": "Medium", "xp": 1000, "text": "Launch technical newsletter", "reason": "Build audience" },
      { "id": "m9-p2", "day": "Phase 2", "time": "25h", "depth": "Medium", "xp": 1000, "text": "Create YouTube architecture series", "reason": "Authority building" },
      { "id": "m9-p3", "day": "Phase 3", "time": "25h", "depth": "Deep", "xp": 1000, "text": "Launch paid cohort/course", "reason": "$30K-$50K additional income" }
    ]
  }
];

export const DETAILS = {
  "m7-p1": {
    "objective": "Package your technical expertise into a high-value advisory offering for early-stage startups",
    "why": "Founders at Seed and Series A stages often lack deep mobile architecture expertise. By packaging your experience into structured offerings (architecture audits, hiring strategy, AI roadmapping), you command premium rates and equity. This is the first step toward $500+/hour advisory work.",
    "steps": [
      "Define 3 core offerings: Architecture Audit (fixed price), Tech Lead as a Service (monthly retainer), AI Strategy Workshop (day rate).",
      "Create service sheets: what is included, what are the deliverables, what is the expected ROI for the founder.",
      "Set pricing: target $3K-$5K for audits, $5K-$10K/month for retainers (5-10 hours).",
      "Build portfolio site: 1-page site highlighting your 'Zonesso' scale stories, blog posts, and conference talks.",
      "Draft standard advisory agreement: 0.5% - 1.0% equity over 2 years, 6-month cliff, monthly cash retainer.",
      "Identify target startups: Series A mobile-first companies, YC cohorts, AI-native consumer apps."
    ],
    "tools": [
      "Notion (service design)",
      "Framer or Carrd (portfolio site)",
      "Standard Advisory Agreement (FAST form)",
      "Crunchbase (startup research)"
    ],
    "deliverable": "Advisory service deck + portfolio site + standard agreement",
    "definitionOfDone": "Offerings are priced, site is live, and you are ready to pitch a founder today",
    "commonMistakes": [
      "Selling hours instead of outcomes — founders pay for 'scale' and 'reduced risk', not 'coding'",
      "Underpricing — if you save a company from a 6-month migration error, that is worth $100K+",
      "No niche — 'Mobile Consultant' is generic, 'React Native Systems Architect' is a premium specialist"
    ],
    "resumeLine": "Launched technical advisory offering for early-stage startups, specializing in React Native New Architecture and AI integration",
    "connectsTo": "m7-p2 (leads), m7-p3 (deals), boss-m7 (strategic advisor)"
  },
  "m7-p2": {
    "objective": "Network with Seed and Series A founders to generate inbound and outbound advisory leads",
    "why": "Advisory is a trust-based business. Leads come from your network, your content, and warm introductions. Founders listen to other founders and their VCs. Networking establishes you as the 'go-to' person for mobile systems when a startup hits scale issues.",
    "steps": [
      "Identify 50 target founders/CTOs: use LinkedIn, Wellfound, and YC directory.",
      "Content flywheel: share your architecture blog posts with target founders. 'I saw you are building X, thought this audit I did on scale might be useful.'",
      "VC Outreach: reach out to 10 VCs who invest in mobile/AI. Offer to do architecture due diligence for their portfolio companies.",
      "Attend 2 high-signal events: founder dinners, tech summits, or invite-only industry meetups.",
      "Warm intros: ask existing network (mentors, past colleagues) for 2 intros per week to founders of growing startups.",
      "Schedule 5 'Coffee Chats': no-pitch conversations to understand their challenges and offer quick wins."
    ],
    "tools": [
      "LinkedIn Sales Navigator",
      "Wellfound",
      "Hunter.io (email finding)",
      "VC Network lists"
    ],
    "deliverable": "50-lead target list + 10 VC contacts + 5 founder discovery calls completed",
    "definitionOfDone": "Target list complete, outreach sent, 5 calls completed with documented pain points",
    "commonMistakes": [
      "Hard selling — advisory is built on rapport, offer value first before asking for a retainer",
      "Ignoring VCs — one VC intro can lead to 5 portfolio clients",
      "Low volume — networking is a numbers game, aim for 10 meaningful touchpoints per week"
    ],
    "resumeLine": "Developed technical partnership network with 10+ VCs and 50+ startup founders",
    "connectsTo": "m7-p1 (offering), m7-p3 (deals), boss-m7 (strategic advisor)"
  },
  "m7-p3": {
    "objective": "Secure equity and retainer deals with 2 startup clients, delivering high-impact architecture strategy",
    "why": "This is where advisory income starts. Retainers cover your base expenses ($80K-$120K additional income), and equity provides long-term wealth upside. Delivering results for your first 2 clients creates the testimonials needed to scale to premium rates.",
    "steps": [
      "Execute discovery calls: identify one 'hair on fire' problem (e.g., 'our app is slow', 'we cannot hire a lead', 'AI is too expensive').",
      "Submit proposal: 1-page scope of work based on their specific pain point.",
      "Negotiate terms: anchor on the value delivered. $5K retainer + 0.5% equity for 8 hours/month.",
      "First Win (Week 1): deliver an immediate impact audit or fix a critical bottleneck to prove value.",
      "Architecture Roadmap: deliver a 6-month technical plan for their mobile team.",
      "Hiring Support: help them interview and vet their first Senior/Staff mobile hire.",
      "Document results: collect a founder testimonial and data on improvements (e.g., 'Reduced crash rate 50%')."
    ],
    "tools": [
      "FAST Advisory Agreement",
      "DocuSign",
      "Loom (audit walk-throughs)",
      "Slack (client communication)"
    ],
    "deliverable": "2 signed advisory contracts + 2 delivered architecture audits",
    "definitionOfDone": "Contracts signed, first month retainer paid, equity grant documented in Carta/Pulley",
    "commonMistakes": [
      "Doing too much coding — you are an advisor, not a freelance coder. Focus on strategy and code review",
      "No clear boundaries — if scope creeps, renegotiate the retainer",
      "Failing to document impact — you need metrics to justify your ongoing advisory role"
    ],
    "resumeLine": "Secured and delivered advisory contracts for 2 Series A startups, optimizing mobile performance and AI strategy",
    "connectsTo": "m7-p1 (offering), m7-p2 (leads), boss-m7 (strategic advisor), m9-p1 (newsletter)"
  },
  "m9-p1": {
    "objective": "Launch a technical newsletter to build a sustained audience and technical authority",
    "why": "A newsletter is your most valuable long-term asset. It owns your audience (unlike LinkedIn/Twitter algorithms). It builds deep trust over months, positioning you as an industry expert. This is the lead generation engine for your books, courses, and advisory roles.",
    "steps": [
      "Choose platform: Substack (easiest), Beehiiv (growth focus), or ConvertKit (automation focus).",
      "Define niche: 'The Mobile Systems Architect' — focus on New Arch, AI, and Engineering Leadership.",
      "First 5 issues: draft 5 high-value deep dives based on your previous blog posts and audits.",
      "Set up landing page: clear value prop ('Weekly deep dives on scaling mobile apps').",
      "Growth strategy: share newsletter on LinkedIn, Twitter, and cross-post to Dev.to with a 'Subscribe' CTA.",
      "Lead magnet: offer a free 'Mobile Architecture Audit Checklist' or 'TurboModule Template' for subscribers.",
      "Target: 500 subscribers in the first quarter."
    ],
    "tools": [
      "Substack or Beehiiv",
      "Notion (content calendar)",
      "Canva (branding)",
      "Twitter/LinkedIn"
    ],
    "deliverable": "Launched newsletter + 5 published issues + landing page",
    "definitionOfDone": "Newsletter is live, 5 issues sent, 100+ subscribers reached",
    "commonMistakes": [
      "Inconsistency — if you don't publish weekly, people forget you. Set a schedule and stick to it",
      "Too generic — 'React Native News' is a commodity. 'How I fixed a $10K/mo AI bill' is a story",
      "No lead magnet — people need a concrete reason to give you their email address"
    ],
    "resumeLine": "Launched 'The Mobile Systems Architect' newsletter, reaching 500+ developers with weekly technical deep dives",
    "connectsTo": "m9-p2 (YouTube), m9-p3 (course), boss-m9 (technical advisor)"
  },
  "m9-p2": {
    "objective": "Create a YouTube architecture series to visualize complex technical concepts and build brand authority",
    "why": "Video builds a different level of trust. Seeing you whiteboard a 1M-user architecture or debug a C++ TurboModule establishes you as a master of your craft. YouTube is the #2 search engine; it brings in a global audience you cannot reach through text alone.",
    "steps": [
      "Choose 5 topics: 'Fabric vs Bridge: The Deep Dive', 'Implementing RAG in React Native', 'My $200K Negotiation Story', etc.",
      "Equipment: good mic ($100), HD camera (phone is fine), screen recording (Loom/OBS), whiteboarding (Excalidraw).",
      "Format: 10-15 minute technical explainers with whiteboarding and code walk-throughs.",
      "SEO: optimize titles, thumbnails, and descriptions for keywords like 'React Native Architecture', 'Staff Engineer'.",
      "Cross-promotion: link videos in your newsletter and LinkedIn posts.",
      "Engagement: respond to every comment to build community.",
      "Consistency: 1 high-quality video every 2 weeks."
    ],
    "tools": [
      "YouTube",
      "OBS Studio or Loom",
      "Excalidraw",
      "CapCut or Descript (editing)"
    ],
    "deliverable": "YouTube channel launched + 3 high-quality technical videos",
    "definitionOfDone": "Channel is live, 3 videos published, each with custom thumbnails and SEO optimization",
    "commonMistakes": [
      "Over-editing — focus on the content and clarity of the technical explanation, not fancy transitions",
      "Bad audio — people will watch bad video but won't listen to bad audio. Buy a decent mic",
      "No CTA — every video should tell viewers to join your newsletter or check your book/course"
    ],
    "resumeLine": "Launched technical YouTube series on mobile architecture, generating 10K+ views and establishing visual authority",
    "connectsTo": "m9-p1 (newsletter), m9-p3 (course), boss-m9 (technical advisor)"
  },
  "m9-p3": {
    "objective": "Launch a paid cohort-based course or deep-dive digital product to create scalable income",
    "why": "Consulting and advisory still sell your time. Courses and digital products sell your knowledge while you sleep. A $500 course sold to 100 people is $50K. This is the path to the $350K+ income ceiling while working fewer hours.",
    "steps": [
      "Choose topic: 'The Staff Engineer' Guide to React Native New Architecture' or 'AI Integration for Senior Mobile Devs'.",
      "Format: Cohort-based (live sessions + community) or Self-paced (recorded videos + templates).",
      "Build curriculum: 4-6 modules covering the deepest pain points of your audience.",
      "Pre-sell: announce to your newsletter and YouTube audience. Offer an 'Early Bird' discount to validate demand.",
      "Platform: Maven (cohort-based) or Gumroad/Teachable (self-paced).",
      "Launch: 2-week marketing blitz across all channels. Use testimonials from your advisory clients.",
      "Deliver: run the first cohort or ship the final product. Gather feedback and iterate for version 2."
    ],
    "tools": [
      "Maven or Gumroad",
      "ConvertKit (email launch)",
      "Zoom (live sessions)",
      "Discord (course community)"
    ],
    "deliverable": "Published course/product + $20K+ in initial sales",
    "definitionOfDone": "Course is live, initial cohort/sales completed, revenue goal reached",
    "commonMistakes": [
      "Building before selling — validate demand with a pre-sale or waitlist first",
      "Too much theory — people pay for 'how-to' and 'templates', not 'concepts'",
      "Ignoring the launch — a great course with no marketing blitz will fail to reach its potential"
    ],
    "resumeLine": "Launched premium cohort-based course on React Native architecture, generating $50K in annual scalable income",
    "connectsTo": "m9-p1 (newsletter), m9-p2 (YouTube), boss-m9 (technical advisor), m10-p2 (speaking)"
  }
};
