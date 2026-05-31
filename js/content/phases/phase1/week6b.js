export const WEEKS = [
  {
    "id": "w6b",
    "num": "WEEK 06B",
    "title": "Backend Consolidation Buffer",
    "theme": "Proof of Independence",
    "color": "#64748b",
    "boss": {
      "id": "boss-w6b",
      "name": "The Solo Builder",
      "challenge": "Without following any tutorial, build and deploy a full-stack feature end-to-end",
      "rewardXP": 500,
      "resumeLine": "Independently architected and shipped a full-stack feature from scratch",
      "successCriteria": [
        "Feature has React Native UI, Node API, PostgreSQL DB, Auth, deployed",
        "Built without copying a tutorial step-by-step",
        "Handles errors gracefully",
        "Code is clean enough for peer review"
      ],
      "howToComplete": [
        "Pick simple feature (notes, todos, bookmarks)",
        "Build backend first: schema, API, auth",
        "Build frontend second",
        "Deploy both",
        "If stuck >2 hours on one bug, repeat Weeks 3-6"
      ],
      "deliverables": [
        "GitHub repo with YOUR code",
        "Live deployment URL",
        "Screen recording on real device"
      ],
      "passFail": {
        "pass": "Shipped solo, no tutorials, handles errors, deployed",
        "fail": "Copied from YouTube or only works on localhost"
      }
    },
    "tasks": [
      {"id": "w6b-d1", "day": "Day 1", "time": "7.5h", "depth": "Deep", "xp": 75, "text": "Plan feature scope, draw schema, write API contract", "reason": "Planning prevents scope creep"},
      {
        "id": "w6b-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {"id": "w6b-d2", "day": "Day 2", "time": "10h", "depth": "Deep", "xp": 100, "text": "Build database schema and all API endpoints", "reason": "Backend first. No UI until data flows."},
      {"id": "w6b-d3", "day": "Day 3", "time": "10h", "depth": "Deep", "xp": 100, "text": "Implement JWT auth from memory, not copy-paste", "reason": "Auth is non-negotiable. Build it, don't paste it."},
      {
        "id": "w6b-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {"id": "w6b-d4", "day": "Day 4", "time": "7.5h", "depth": "Medium", "xp": 75, "text": "Build React Native UI and connect to API", "reason": "Your mobile experience should make this easy."},
      {"id": "w6b-d5", "day": "Day 5", "time": "7.5h", "depth": "Medium", "xp": 75, "text": "Add error handling, loading states, empty states", "reason": "Polish separates juniors from seniors."},
      {
        "id": "w6b-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode easy/medium",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {"id": "w6b-d6", "day": "Day 6", "time": "7.5h", "depth": "Action", "xp": 50, "text": "Deploy backend, test on real device with production URL", "reason": "Simulator doesn't count. Real device + real server = proof."},
      {"id": "w6b-d7", "day": "Day 7", "time": "5h", "depth": "Action", "xp": 25, "text": "Self code review: find 3 things to refactor, then refactor", "reason": "Self-review is a senior skill."},
      {
        "id": "w6b-d7-micro",
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
export const DETAILS = {}; // Placeholder for now
