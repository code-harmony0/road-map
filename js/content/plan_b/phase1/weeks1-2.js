export const WEEKS = [
  {
    "id": "b1",
    "num": "WEEK B01",
    "title": "Python Core + FastAPI",
    "theme": "Python Fluency",
    "color": "#3b82f6",
    "boss": {
      "id": "boss-b1",
      "name": "The Python Native",
      "challenge": "Build a complete FastAPI application with PostgreSQL, testing, and deployment. Prove Python fluency.",
      "rewardXP": 500,
      "resumeLine": "Built production-grade FastAPI application with SQLAlchemy, Pydantic, and comprehensive testing",
      "successCriteria": [
        "FastAPI app with 6+ CRUD endpoints",
        "SQLAlchemy ORM with PostgreSQL",
        "Pydantic models for all request/response validation",
        "Alembic migrations",
        "Pytest with 70%+ coverage",
        "Dockerized and deployed",
        "10 LeetCode medium in Python"
      ],
      "howToComplete": [
        "Install Python 3.11, pyenv, poetry (dependency management)",
        "Learn Python: lists, dicts, sets, comprehensions, generators, decorators, context managers",
        "Build FastAPI app: main.py, models.py, schemas.py, crud.py, api.py",
        "Connect to PostgreSQL with SQLAlchemy async",
        "Add Alembic for migrations",
        "Write Pytest tests: unit + integration",
        "Dockerize with multi-stage build",
        "Deploy to Railway or AWS",
        "Solve 1 LeetCode medium daily in Python"
      ],
      "deliverables": [
        "FastAPI repo with clean structure",
        "Swagger docs at /docs",
        "Dockerfile + docker-compose.yml",
        "Live deployment URL",
        "10 LeetCode medium Python submissions"
      ],
      "passFail": {
        "pass": "FastAPI app works, tested, deployed, 10 LeetCode medium in Python",
        "fail": "Only print('hello world') or no deployment"
      }
    },
    "tasks": [
      {
        "id": "b1-d1",
        "day": "Day 1",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 75,
        "text": "Install Python 3.11, pyenv, poetry. Learn Python basics: variables, types, lists, dicts, tuples, sets. Practice in REPL.",
        "reason": "You know JavaScript. Python is similar but different. Lists instead of arrays, dicts instead of objects. Learn the idioms."
      },
      {
        "id": "b1-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b1-d2",
        "day": "Day 2",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 100,
        "text": "Learn advanced Python: list/dict/set comprehensions, generators (yield), decorators (@app.get), context managers (with), type hints (def foo(x: int) -> str).",
        "reason": "These are Python superpowers. Comprehensions replace loops. Generators save memory. Decorators are everywhere in FastAPI."
      },
      {
        "id": "b1-d3",
        "day": "Day 3",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 100,
        "text": "Install FastAPI, Uvicorn, SQLAlchemy, Alembic, asyncpg. Create project structure. Define SQLAlchemy models with relationships.",
        "reason": "FastAPI is the modern Python web framework. Async SQLAlchemy is the modern ORM. Learn the stack that AI teams use."
      },
      {
        "id": "b1-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b1-d4",
        "day": "Day 4",
        "time": "6.25h",
        "depth": "Medium",
        "xp": 75,
        "text": "Build CRUD endpoints: GET list, GET one, POST, PUT, DELETE. Use Pydantic for validation. Test with Swagger UI.",
        "reason": "Pydantic is Python's Zod. Type validation at the boundary. FastAPI auto-generates Swagger from Pydantic models."
      },
      {
        "id": "b1-d5",
        "day": "Day 5",
        "time": "6.25h",
        "depth": "Medium",
        "xp": 75,
        "text": "Add Alembic migrations. Write initial migration. Add seed data script. Test rollback and upgrade.",
        "reason": "Alembic is the standard for database migrations in Python. Like Prisma Migrate, but for SQLAlchemy."
      },
      {
        "id": "b1-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b1-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Write Pytest tests: unit tests for services, integration tests for endpoints. Use pytest-asyncio for async tests.",
        "reason": "Testing in Python is different from Jest. Learn pytest fixtures, parametrize, and async testing."
      },
      {
        "id": "b1-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "Dockerize and deploy. LeetCode: 2 medium in Python (Two Sum II, 3Sum). LinkedIn post: 'My first FastAPI app — from JavaScript to Python in a week'.",
        "reason": "Learning in public signals adaptability. Recruiters value engineers who can switch languages."
      },
      {
        "id": "b1-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      }
    ]
  },
  {
    "id": "b2",
    "num": "WEEK B02",
    "title": "Python Data Structures + Algorithms",
    "theme": "Pythonic Problem Solving",
    "color": "#10b981",
    "boss": {
      "id": "boss-b2",
      "name": "The Algorithmist",
      "challenge": "Master Python data structures and solve 20 LeetCode medium in Python",
      "rewardXP": 500,
      "resumeLine": "Solved 30+ algorithmic problems in Python demonstrating strong computer science fundamentals",
      "successCriteria": [
        "Custom implementations: linked list, stack, queue, hash map, binary tree, heap",
        "20 LeetCode medium in Python",
        "Understanding of time/space complexity in Python",
        "Knowledge of Python's built-in data structures: list, dict, set, collections.deque, heapq",
        "Can explain why Python is slow and how to optimize"
      ],
      "howToComplete": [
        "Implement linked list, stack, queue from scratch in Python",
        "Implement hash map with collision handling",
        "Implement binary tree traversal: in-order, pre-order, post-order, level-order",
        "Implement min-heap with heapq",
        "Solve 1 LeetCode medium daily in Python: focus on arrays, hash maps, two pointers, sliding window, binary search",
        "Study Python's time complexity: list append is O(1) amortized, dict lookup is O(1) average, set operations are O(1)"
      ],
      "deliverables": [
        "Data structures implementations in Python",
        "20 LeetCode medium Python submissions",
        "Complexity analysis notes",
        "Python optimization tips doc"
      ],
      "passFail": {
        "pass": "Custom DS implemented, 20 medium in Python, can explain complexity",
        "fail": "Only using built-ins without understanding, or <20 medium"
      }
    },
    "tasks": [
      {
        "id": "b2-d1",
        "day": "Day 1",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 75,
        "text": "Implement linked list: Node class, insert, delete, reverse. Implement stack with list and with linked list.",
        "reason": "Linked lists are interview fundamentals. Python doesn't have built-in linked lists. You must implement them."
      },
      {
        "id": "b2-d1-micro",
        "day": "Day 1",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b2-d2",
        "day": "Day 2",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 100,
        "text": "Implement queue: with list (slow), with collections.deque (fast), with linked list. Implement circular buffer.",
        "reason": "deque is O(1) for both ends. List is O(n) for left pops. Know the difference."
      },
      {
        "id": "b2-d3",
        "day": "Day 3",
        "time": "6.25h",
        "depth": "Deep",
        "xp": 100,
        "text": "Implement hash map: hash function, collision handling with chaining. Test with 1000 entries.",
        "reason": "Understanding hash maps at the implementation level helps you use dicts effectively and debug hash-related issues."
      },
      {
        "id": "b2-d3-micro",
        "day": "Day 3",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b2-d4",
        "day": "Day 4",
        "time": "6.25h",
        "depth": "Medium",
        "xp": 75,
        "text": "Implement binary tree: Node class, insert, search, delete. Implement all traversals: in-order, pre-order, post-order, level-order (BFS).",
        "reason": "Tree traversals are interview staples. Recursive and iterative versions both matter."
      },
      {
        "id": "b2-d5",
        "day": "Day 5",
        "time": "6.25h",
        "depth": "Medium",
        "xp": 75,
        "text": "Implement min-heap with heapq. Understand heapify, heappush, heappop. Solve Top K Frequent Elements and Merge K Sorted Lists.",
        "reason": "Heaps are used in scheduling, priority queues, and graph algorithms. heapq is Python's hidden gem."
      },
      {
        "id": "b2-d5-micro",
        "day": "Day 5",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      },
      {
        "id": "b2-d6",
        "day": "Day 6",
        "time": "5h",
        "depth": "Action",
        "xp": 50,
        "text": "Study Python time complexity: list operations, dict operations, set operations. Write cheat sheet.",
        "reason": "Python is slow. Knowing which operations are fast saves you in interviews and production."
      },
      {
        "id": "b2-d7",
        "day": "Day 7",
        "time": "5h",
        "depth": "Action",
        "xp": 25,
        "text": "LeetCode: 2 medium in Python (Longest Substring Without Repeating Characters, Trapping Rain Water). Review solutions for patterns.",
        "reason": "Patterns repeat. Sliding window, two pointers, dynamic programming. Recognize them in Python."
      },
      {
        "id": "b2-d7-micro",
        "day": "Day 7",
        "time": "1.25h",
        "depth": "Action",
        "xp": 25,
        "text": "Micro-session: 1 LeetCode medium in Python",
        "reason": "Algorithmic thinking is tested in every senior interview"
      }
    ]
  }
];

export const DETAILS = {
  "b1-d1": {
    "objective": "Establish a professional Python development environment and master syntax",
    "why": "Python relies heavily on environment management. `poetry` and `pyenv` are the modern standards, replacing `pip` and `virtualenv` for robust dependency management.",
    "steps": [
      "Install `pyenv` to manage Python versions and install Python 3.11.",
      "Install `poetry` and initialize a new project.",
      "Practice type hinting in Python: `age: int = 25`.",
      "Explore standard data structures: Lists, Dictionaries, Tuples, and Sets."
    ],
    "tools": ["pyenv", "poetry", "Python REPL"],
    "deliverable": "Working Poetry environment with `pyproject.toml`",
    "definitionOfDone": "You can create a script that uses typed dictionaries and lists and runs successfully",
    "commonMistakes": ["Using global pip packages instead of a virtual environment"],
    "resumeLine": null,
    "connectsTo": "b1-d2"
  },
  "b1-d2": {
    "objective": "Master Python's advanced idioms and meta-programming features",
    "why": "Writing 'Pythonic' code means using comprehensions, generators, and decorators. FastAPI relies entirely on decorators to route requests.",
    "steps": [
      "Write a list comprehension to filter and map an array of dicts.",
      "Create a generator function using `yield` and iterate over it.",
      "Write a custom decorator that times the execution of a function.",
      "Use the `with` statement to safely open and close a file."
    ],
    "tools": ["Python Decorators", "Generators"],
    "deliverable": "A script demonstrating advanced Python idioms",
    "definitionOfDone": "You can explain the difference between returning a list and yielding a generator",
    "commonMistakes": ["Using `for` loops when a comprehension is more readable"],
    "resumeLine": null,
    "connectsTo": "b1-d3"
  },
  "b1-d3": {
    "objective": "Scaffold a FastAPI application with async database connectivity",
    "why": "FastAPI is the standard for high-performance Python web services. SQLAlchemy with `asyncpg` provides non-blocking database access, crucial for scaling.",
    "steps": [
      "Set up `main.py` with a basic FastAPI instance.",
      "Configure SQLAlchemy to connect to a PostgreSQL database using `asyncpg`.",
      "Define 2-3 relational models matching an existing project.",
      "Set up Alembic for database migrations."
    ],
    "tools": ["FastAPI", "SQLAlchemy", "Alembic"],
    "deliverable": "Project scaffolding with working DB connection",
    "definitionOfDone": "FastAPI server starts without errors and connects to PostgreSQL",
    "commonMistakes": ["Using synchronous database drivers (psycopg2) in an async framework"],
    "resumeLine": "Architected high-performance async backends using FastAPI and SQLAlchemy",
    "connectsTo": "b1-d4"
  },
  "b1-d4": {
    "objective": "Implement strict validation and CRUD operations via API endpoints",
    "why": "Pydantic ensures data integrity at the boundary. It prevents bad data from ever reaching your business logic.",
    "steps": [
      "Create Pydantic models for incoming requests (Create/Update) and outgoing responses.",
      "Build GET, POST, PUT, and DELETE endpoints.",
      "Use FastAPI's Dependency Injection (`Depends`) to provide the DB session.",
      "Test all endpoints using the auto-generated Swagger UI at `/docs`."
    ],
    "tools": ["Pydantic", "FastAPI Docs"],
    "deliverable": "Working CRUD endpoints with validation",
    "definitionOfDone": "Sending invalid JSON results in a clean 422 Unprocessable Entity error",
    "commonMistakes": ["Returning SQLAlchemy models directly instead of Pydantic schemas"],
    "resumeLine": null,
    "connectsTo": "b1-d5"
  },
  "b1-d5": {
    "objective": "Manage database schema evolution using Alembic migrations",
    "why": "Migrations provide version control for your database. Manual schema changes are a massive risk in production environments.",
    "steps": [
      "Initialize Alembic: `alembic init alembic`.",
      "Configure `env.py` to read your SQLAlchemy models.",
      "Generate an initial migration: `alembic revision --autogenerate -m 'init'`.",
      "Apply the migration: `alembic upgrade head`."
    ],
    "tools": ["Alembic"],
    "deliverable": "A working migration pipeline",
    "definitionOfDone": "You can add a new column to a model, generate a migration, and apply it to the database",
    "commonMistakes": ["Forgetting to import models in the Alembic `env.py` file"],
    "resumeLine": "Managed automated database schema evolution using Alembic migration pipelines",
    "connectsTo": "b1-d6"
  },
  "b1-d6": {
    "objective": "Establish a test-driven development workflow using Pytest",
    "why": "Testing in Python relies heavily on `pytest` fixtures. Mastering fixtures is key to writing clean, isolated tests.",
    "steps": [
      "Install `pytest`, `pytest-asyncio`, and `httpx`.",
      "Create a `conftest.py` file to define a test database fixture.",
      "Write an integration test for your POST endpoint using `AsyncClient`.",
      "Assert response codes and database state changes."
    ],
    "tools": ["Pytest", "pytest-asyncio"],
    "deliverable": "Automated test suite with >70% coverage",
    "definitionOfDone": "Running `pytest` successfully executes tests against an isolated database",
    "commonMistakes": ["Not isolating the test database, leading to polluted data"],
    "resumeLine": "Implemented rigorous automated testing suites in Python using Pytest and asyncio",
    "connectsTo": "b1-d7"
  },
  "b1-d7": {
    "objective": "Containerize and deploy the Python backend",
    "why": "Deploying the app proves your Python environment is portable. Dockerizing Python requires specific steps to keep image size small.",
    "steps": [
      "Write a `Dockerfile` using `python:3.11-slim`.",
      "Export your poetry dependencies to `requirements.txt` or install poetry in the container.",
      "Set up `docker-compose.yml` with the API and PostgreSQL.",
      "Deploy the container to Railway, Render, or AWS."
    ],
    "tools": ["Docker", "Railway/AWS"],
    "deliverable": "Live production URL of your FastAPI app",
    "definitionOfDone": "The API is accessible publicly and the Swagger docs render correctly",
    "commonMistakes": ["Running Uvicorn with `--reload` in the production Dockerfile"],
    "resumeLine": "Containerized and deployed Python microservices using Docker and cloud platforms",
    "connectsTo": "Week 2"
  },
  "b2-d1": {
    "objective": "Master pointer-based data structures in Python",
    "why": "Python's built-in `list` hides the mechanics of memory allocation. Implementing linked lists and stacks builds core algorithmic intuition.",
    "steps": [
      "Create a `Node` class and a `LinkedList` class.",
      "Implement `append`, `prepend`, `delete`, and `reverse` methods.",
      "Implement a `Stack` class using a Python list.",
      "Solve a LeetCode easy/medium involving Linked Lists."
    ],
    "tools": ["Python Classes"],
    "deliverable": "Custom LinkedList and Stack implementations",
    "definitionOfDone": "You can reverse a linked list in Python without looking up the solution",
    "commonMistakes": ["Losing the pointer to the head node during operations"],
    "resumeLine": null,
    "connectsTo": "b2-d2"
  },
  "b2-d2": {
    "objective": "Understand queue mechanics and optimized double-ended queues",
    "why": "Popping from the front of a standard Python list is O(n). You must know when to use `collections.deque` for O(1) performance.",
    "steps": [
      "Implement a basic queue using a standard list (note the performance hit).",
      "Refactor using `collections.deque`.",
      "Implement a Circular Buffer.",
      "Solve a LeetCode problem requiring a queue (e.g., BFS traversal)."
    ],
    "tools": ["collections.deque"],
    "deliverable": "Optimized queue implementations",
    "definitionOfDone": "You can explain why `deque.popleft()` is faster than `list.pop(0)`",
    "commonMistakes": ["Using lists for queues in high-performance or interview settings"],
    "resumeLine": null,
    "connectsTo": "b2-d3"
  },
  "b2-d3": {
    "objective": "Deconstruct hash maps and collision resolution",
    "why": "Python's `dict` is a highly optimized hash map. Understanding how it works under the hood helps you debug performance issues and hashing errors.",
    "steps": [
      "Create a custom `HashMap` class with a fixed array size.",
      "Implement a basic hash function using Python's `hash()`.",
      "Implement collision resolution using chaining (linked lists).",
      "Test resizing the map when the load factor gets too high."
    ],
    "tools": ["Hashing Algorithms"],
    "deliverable": "A working custom Hash Map",
    "definitionOfDone": "You can successfully store and retrieve 1000 items with collisions handled",
    "commonMistakes": ["Using mutable types (like lists) as dictionary keys"],
    "resumeLine": null,
    "connectsTo": "b2-d4"
  },
  "b2-d4": {
    "objective": "Master tree data structures and traversal algorithms",
    "why": "Trees are the foundation of database indexes and hierarchical data. Traversal algorithms are guaranteed interview questions.",
    "steps": [
      "Implement a `TreeNode` class and a Binary Search Tree (BST).",
      "Write recursive functions for In-order, Pre-order, and Post-order traversal.",
      "Write an iterative function for Level-order (BFS) traversal using a queue.",
      "Solve 'Invert Binary Tree' on LeetCode."
    ],
    "tools": ["Recursion", "Queues"],
    "deliverable": "BST implementation with all 4 traversals",
    "definitionOfDone": "You can write an in-order traversal from memory",
    "commonMistakes": ["Forgetting the base case in recursive functions"],
    "resumeLine": "Demonstrated strong computer science fundamentals through custom data structure implementations",
    "connectsTo": "b2-d5"
  },
  "b2-d5": {
    "objective": "Utilize priority queues and the heapq module",
    "why": "Heaps are essential for scheduling, finding top K elements, and graph algorithms like Dijkstra's. Python provides `heapq` for this.",
    "steps": [
      "Import `heapq` and understand `heapify`, `heappush`, and `heappop`.",
      "Learn how to implement a Max-Heap using Python's Min-Heap by negating values.",
      "Solve 'Top K Frequent Elements' using a heap.",
      "Solve 'Merge K Sorted Lists'."
    ],
    "tools": ["heapq"],
    "deliverable": "Heap-based algorithm solutions",
    "definitionOfDone": "You can extract the top 5 largest items from an array in O(n log k) time",
    "commonMistakes": ["Trying to sort the entire array instead of using a fixed-size heap"],
    "resumeLine": null,
    "connectsTo": "b2-d6"
  },
  "b2-d6": {
    "objective": "Internalize Python's specific time and space complexities",
    "why": "Knowing the Big O of built-in operations prevents you from writing O(n^2) code disguised as clean syntax.",
    "steps": [
      "Study the time complexity of list operations (`append`, `insert`, `slice`).",
      "Study dict operations (`get`, `set`, `delete`).",
      "Study set operations (`union`, `intersection`).",
      "Create a cheat sheet and memorize the worst-case scenarios."
    ],
    "tools": ["Big O Notation", "Python Wiki"],
    "deliverable": "Python Time Complexity Cheat Sheet",
    "definitionOfDone": "You know instantly that searching a list is O(n) but searching a set is O(1)",
    "commonMistakes": ["Using `x in list` inside a loop instead of converting the list to a set"],
    "resumeLine": null,
    "connectsTo": "b2-d7"
  },
  "b2-d7": {
    "objective": "Synthesize Pythonic patterns to solve complex algorithmic challenges",
    "why": "Algorithmic thinking must be paired with language fluency. Translating patterns like sliding window into clean Python shows seniority.",
    "steps": [
      "Solve 'Longest Substring Without Repeating Characters'.",
      "Solve 'Trapping Rain Water'.",
      "Review the discussions to find the most 'Pythonic' solutions.",
      "Refactor your code to match these clean idioms."
    ],
    "tools": ["LeetCode", "Two Pointers", "Sliding Window"],
    "deliverable": "Two solved hard/medium problems with highly optimized Python code",
    "definitionOfDone": "Solutions are accepted and run in the top 80% of Python submissions",
    "commonMistakes": ["Using excessive global variables instead of passing state"],
    "resumeLine": "Solved 30+ algorithmic problems focusing on optimization and idiomatic Python execution",
    "connectsTo": "Week 3"
  }
};