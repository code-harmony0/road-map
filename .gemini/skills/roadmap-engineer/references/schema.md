# Roadmap Schema (v2.0 Normalized)

The roadmap uses a normalized structure to separate the high-level timeline from technical task details.

## Week/Month Object
```json
{
  "id": "wX or mX",
  "num": "WEEK/MONTH XX",
  "title": "Title",
  "theme": "Core Theme",
  "color": "HEX_COLOR",
  "boss": {
    "id": "boss-id",
    "name": "Boss Name",
    "challenge": "High-level goal",
    "reward": 123,
    "resume": "Resume-ready bullet point",
    "successCriteria": ["list", "of", "items"],
    "howToComplete": ["steps"],
    "deliverables": ["files/urls"],
    "passFail": { "pass": "text", "fail": "text" }
  },
  "tasks": [
    {
      "id": "task-id",
      "day": "Day X or Week X",
      "time": "Xh",
      "depth": "Deep|Medium|Action",
      "xp": 100,
      "text": "Task description",
      "reason": "Why it matters"
    }
  ]
}
```

## Details Object
Keyed by `task.id`:
```json
"task-id": {
  "objective": "Detailed goal",
  "why": "Business/Career rationale",
  "steps": ["step 1", "step 2"],
  "tools": ["tool 1"],
  "deliverable": "Specific output",
  "definitionOfDone": "Verification criteria",
  "commonMistakes": ["pitfall 1"],
  "resumeLine": "Optional resume point",
  "connectsTo": "Next dependency"
}
```
