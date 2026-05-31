export const QUARTERS = [
  {
    "id": "m10",
    "num": "Q1-Q2 (Yr 3)",
    "title": "Equity Scaling + Industry Expert",
    "theme": "Wealth Building + Thought Leadership",
    "color": "#6366f1",
    "boss": {
      "id": "boss-m10",
      "name": "The Industry Expert",
      "challenge": "Scale to 5+ advisory equity positions and establish industry expert status with $250K-$350K multi-stream income",
      "reward": 10000,
      "resume": "Industry Expert, Multi-Stream Income, Equity Portfolio",
      "successCriteria": [
        "5+ advisory roles with equity stakes across diverse industries",
        "1-2 equity exits or significant markups (portfolio value $500K+)",
        "Keynote speaker at major conference (React Native EU, React Summit)",
        "Book or definitive guide published (e-book or physical)",
        "Total income: $250K-$350K (salary + consulting + content + equity)",
        "Industry recognition: invited to podcast, quoted in tech media, judge at hackathons"
      ],
      "howToComplete": [
        "Expand advisory portfolio: target 1 new advisory role per quarter",
        "Diversify equity: health, fintech, AI, social (reduce single-sector risk)",
        "Publish book: compile newsletter + course content into definitive guide",
        "Keynote speaking: submit to major conferences, hire speaking coach",
        "Media presence: podcast guest, tech publication contributor, conference judge",
        "Portfolio management: track equity values, vesting schedules, exit opportunities"
      ],
      "deliverables": [
        "5 signed advisory agreements",
        "Equity portfolio tracker with $500K+ value",
        "Keynote speaking slot at major conference",
        "Published book or definitive guide",
        "Media appearance (podcast, article, interview)",
        "Income breakdown showing $250K+ multi-stream"
      ],
      "passFail": {
        "pass": "5 advisory roles + $250K+ income + keynote + book + media recognition",
        "fail": "No equity scaling or income plateau below $200K"
      }
    },
    "tasks": [
      {
        "id": "m10-p1",
        "day": "Phase 1",
        "time": "25h",
        "depth": "Deep",
        "xp": 1500,
        "text": "Scale advisory portfolio to 5+ equity positions",
        "reason": "Equity wealth building"
      },
      {
        "id": "m10-p2",
        "day": "Phase 2",
        "time": "25h",
        "depth": "Deep",
        "xp": 1500,
        "text": "Keynote speaking + Book publication",
        "reason": "Industry authority peak"
      },
      {
        "id": "m10-p3",
        "day": "Phase 3",
        "time": "25h",
        "depth": "Medium",
        "xp": 1500,
        "text": "Media presence + Portfolio management",
        "reason": "Recognition + wealth tracking"
      }
    ]
  }
];

export const DETAILS = {
  "m10-p1": {
    "objective": "Expand advisory portfolio to 5+ equity positions across health, fintech, AI, and social startups while managing vesting and exit strategies",
    "why": "Year 3 is about wealth multiplication. One advisory role with 0.5% equity in a $50M startup is worth $250K at exit. Five roles diversify risk and multiply upside. This is how you build generational wealth without betting on a single startup lottery ticket. The key is portfolio thinking: some will fail, one might 10x.",
    "steps": [
      "Portfolio review: assess current 2 advisory roles. Are they on track? Are founders executing? Reallocate if not.",
      "Target 3 new roles: 1 healthtech (stable, regulated, high barriers), 1 fintech (high growth, complex compliance needs your architecture skills), 1 AI-native (highest risk/reward, your specialization).",
      "Sourcing: warm intros from existing founders, VC introductions, inbound from content (newsletter/YouTube).",
      "Due diligence: evaluate founders (track record, coachability, market size), product (traction, technical debt, team), and terms (valuation, equity %, vesting, pro-rata rights).",
      "Negotiation: standardize terms. 0.5% equity, 2-year vest, 6-month cliff, monthly retainer $3K-$5K, 5-10 hours/month.",
      "Pro-rata rights: negotiate right to invest cash in future rounds. This is where real wealth is built.",
      "Portfolio tracker: Notion or spreadsheet tracking each role, equity %, vesting schedule, estimated value, next milestone.",
      "Value-add per quarter: deliver 1 major win per client (architecture audit, hiring key engineer, cost optimization). Document for testimonials.",
      "Exit planning: track acquisition rumors, IPO timelines, secondary sale opportunities. Some equity can be sold before IPO via secondary markets (EquityZen, Forge).",
      "Tax planning: QSBS qualification (0% capital gains on first $10M), 83(b) election for early exercise, work with tax attorney."
    ],
    "tools": [
      "Notion (portfolio tracker)",
      "EquityZen or Forge (secondary markets)",
      "Carta or Pulley (cap table management)",
      "Tax attorney/CPA",
      "VC introductions (warm network)"
    ],
    "deliverable": "5 advisory roles with equity + portfolio tracker + pro-rata rights + tax optimization plan",
    "definitionOfDone": "5 signed agreements, portfolio value estimated at $500K+, quarterly value-add documented for each client",
    "commonMistakes": [
      "Same-sector concentration — 5 fintech advisors fail together in a downturn, diversify",
      "No pro-rata rights — missing the chance to invest $25K in a Series B that becomes $2M",
      "Ignoring 83(b) elections — pay taxes on exercise price now, save millions on exit"
    ],
    "resumeLine": "Built advisory equity portfolio across 5 startups in health, fintech, and AI, with pro-rata investment rights and QSBS tax optimization",
    "connectsTo": "m10-p2 (speaking), m10-p3 (media), Phase 3 Year 3+ (exit strategy)"
  },
  "m10-p2": {
    "objective": "Deliver keynote at major tech conference and publish definitive book or guide establishing peak industry authority",
    "why": "Keynotes and books are the apex of technical authority. They open doors to the highest-value opportunities: board seats, acquisition advisory, speaking fees ($10K-$50K per talk), and premium consulting ($500+/hour). A book is a business card that nobody throws away. It lives on shelves and Kindle libraries for decades.",
    "steps": [
      "Keynote: target React Native EU (September), React Summit (October), or JSConf. Submit CFP 6 months in advance.",
      "Keynote topic: 'The Future of Mobile: AI, New Architecture, and Cross-Platform in 2027' or 'From $100K to $300K: A Mobile Engineer's Decade'.",
      "Preparation: hire speaking coach ($500-$1000) for 3 sessions. Practice with timer, record, review.",
      "Slide design: minimal text, bold visuals, one idea per slide. Use Keynote or Figma Slides.",
      "Delivery: 30-minute keynote + 15-minute Q&A. Engage audience with questions, demos, stories.",
      "Book topic: 'The Mobile Systems Engineer: Building, Scaling, and Leading Mobile Teams' or 'React Native at Scale: Architecture, AI, and Cross-Platform Strategy'.",
      "Book structure: 10 chapters, 200 pages. Part 1: Foundation (New Architecture, TurboModules). Part 2: AI Integration (API, On-Device, RAG). Part 3: Scale (System Design, Backend, DevOps). Part 4: Leadership (Mentoring, Roadmapping, Staff Track). Part 5: Independence (Consulting, Content, Equity).",
      "Writing: 500 words/day, 5 days/week = 10K words/month = first draft in 2 months. Use Notion or Scrivener.",
      "Publishing: self-publish on Amazon KDP (70% royalty, full control) or traditional (advance + 15% royalty, slower).",
      "Marketing: newsletter launch, YouTube series, podcast tour, launch team (50 early reviewers).",
      "Target: 1000 copies sold in first month, 5000 in year 1, ongoing passive income."
    ],
    "tools": [
      "Keynote or Figma Slides",
      "Speaking coach (ADPList or local)",
      "Notion or Scrivener (writing)",
      "Amazon KDP (publishing)",
      "Canva (book cover)",
      "ConvertKit (launch email list)"
    ],
    "deliverable": "Keynote delivered at major conference + published book with 1000+ first-month sales",
    "definitionOfDone": "Keynote completed with recording, book published on Amazon, 1000 copies sold, 50+ reviews",
    "commonMistakes": [
      "Keynote without coaching — even great engineers ramble, a coach fixes pacing and presence",
      "Writing without outline — 200 pages without structure becomes 200 pages of rambling",
      "No launch strategy — great books die without marketing, build launch team before publishing"
    ],
    "resumeLine": "Delivered keynote at React Native EU and published 'The Mobile Systems Engineer' reaching 5000+ developers",
    "connectsTo": "m10-p1 (advisory), m10-p3 (media), Phase 3 Year 3+ (board seats)"
  },
  "m10-p3": {
    "objective": "Establish consistent media presence through podcasts, tech publications, and industry judging while managing equity portfolio for optimal returns",
    "why": "Media presence is the flywheel that feeds everything else: advisory clients find you, speaking invites arrive, book sales grow, course enrollments spike. It is not vanity — it is the most efficient lead generation for a technical advisor. Meanwhile, portfolio management ensures your equity actually converts to wealth, not just paper gains.",
    "steps": [
      "Podcast guesting: target 20 podcast appearances this year. Focus: React Native Radio, Software Engineering Daily, Frontend Happy Hour, DevDiscuss.",
      "Pitch template: 'I am a Staff Engineer who built production AI in React Native and now advises 5 startups. I can share [specific topic] for your audience.'",
      "Tech publications: write 4 articles for major outlets: InfoQ, Smashing Magazine, LogRocket Blog, or React Native official blog.",
      "Topics: 'React Native New Architecture in Production: 1 Year Later' or 'How to Add AI to Your Mobile App Without Breaking the Bank'.",
      "Industry judging: apply to judge at React Native hackathons, YC Demo Day selections, or startup pitch competitions.",
      "Social media: daily Twitter presence, weekly LinkedIn long-form, monthly YouTube video. Consistency > virality.",
      "Portfolio management: quarterly review of each advisory role. Track: revenue growth, team size, funding stage, exit timeline.",
      "Secondary sales: if a startup raises Series C at 5x valuation, explore selling 20% of your equity via secondary market.",
      "Tax optimization: annual review with CPA. QSBS tracking, state tax minimization, charitable giving strategies.",
      "Income tracking: monthly breakdown of salary (if any), consulting retainers, course revenue, newsletter subscriptions, equity value.",
      "Target: $250K-$350K total. Breakdown: $100K consulting + $50K courses + $30K newsletter + $70K equity value growth."
    ],
    "tools": [
      "Notion (media tracker)",
      "Podcast booking service (MatchMaker.fm)",
      "Google Sheets (income tracker)",
      "Carta (equity tracking)",
      "Twitter / LinkedIn scheduling (Buffer or Hypefury)"
    ],
    "deliverable": "20 podcast appearances + 4 published articles + judging role + $250K+ income tracked + equity portfolio managed",
    "definitionOfDone": "20 podcasts completed, 4 articles published, 1 judging role secured, income tracker shows $250K+, quarterly portfolio reviews completed",
    "commonMistakes": [
      "Saying yes to every podcast — low-quality shows with 100 listeners waste time, target 10K+ audience",
      "Ignoring equity management — paper gains are not wealth, track secondary sale opportunities",
      "No income diversification — if consulting dries up, courses and newsletter should cover base expenses"
    ],
    "resumeLine": "Established industry expert presence through 20+ podcast appearances, 4 major publications, and conference judging while managing $500K+ equity advisory portfolio",
    "connectsTo": "m10-p1 (advisory), m10-p2 (speaking), Phase 3 Year 3+ (exit strategy)"
  }
};
