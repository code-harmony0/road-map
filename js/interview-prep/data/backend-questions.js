/**
 * Backend & Data questions — the Rung 1 / Brick 1-2 gaps.
 *
 * These are the questions that find the boundary between "I work in a NestJS
 * service" and "I own one". Every answer is written to be defensible out loud,
 * not recited: the interviewer's follow-up is always "why", so each one names a
 * trade-off rather than a fact.
 */

export const backendQuestions = [
  {
    id: 'be-001',
    category: 'Backend & Data',
    title: 'Walk me through a schema you designed and the trade-offs you chose.',
    answer:
      '<ul>' +
      '<li><strong>Structure the answer:</strong> entities and their relationships → the one denormalization you chose and why → the indexes that serve your hottest query → what you would change at 10x the data.</li>' +
      '<li><strong>Worked example (marketplace):</strong> <code>user</code>, <code>showroom</code>, <code>vehicle</code>, <code>listing</code>, <code>package</code>, <code>subscription</code>. A listing belongs to one showroom and references one vehicle; price and status live on the listing, not the vehicle, because they change independently.</li>' +
      '<li><strong>The deliberate denormalization:</strong> copy the vehicle make/model onto the listing row. Search filters on them constantly and they never change after publish, so the join is pure cost.</li>' +
      '<li><strong>The trap:</strong> saying "I normalized it" and stopping. Normalization is the default, not a decision. The decision is where you broke it.</li>' +
      '</ul>',
    tags: ['postgres', 'modeling', 'rung1']
  },
  {
    id: 'be-002',
    category: 'Backend & Data',
    title: 'When would you choose Postgres over MongoDB, and when the reverse?',
    answer:
      '<ul>' +
      '<li><strong>Postgres when</strong> the data has real relationships you query across, you need multi-row transactional correctness (payments, inventory, subscriptions), or you want the database to enforce invariants your app would otherwise re-implement in every code path.</li>' +
      '<li><strong>Mongo when</strong> documents are genuinely self-contained and read as a unit, the shape varies per record, or you are optimizing for write throughput on append-heavy data with no cross-document consistency requirement.</li>' +
      '<li><strong>The honest answer for most products:</strong> both, split by domain. Money and identity in Postgres; event logs, analytics payloads and CMS-ish content in a document store.</li>' +
      '<li><strong>The strong signal:</strong> naming a specific query in your product that was painful in one and trivial in the other.</li>' +
      '</ul>',
    tags: ['postgres', 'mongodb', 'rung1']
  },
  {
    id: 'be-003',
    category: 'Backend & Data',
    title: 'A listings search query got slow. Walk me through diagnosing it.',
    answer:
      '<ul>' +
      '<li><strong>Measure first:</strong> <code>EXPLAIN ANALYZE</code> on the real query with real parameters. Read the actual rows vs estimated rows — a large gap means the planner has bad statistics.</li>' +
      '<li><strong>What to look for:</strong> a Seq Scan on a large table, a Nested Loop over many rows, or a Sort that spills to disk.</li>' +
      '<li><strong>Then index deliberately:</strong> a composite index on the filter columns in selectivity order; a partial index if most queries only touch a subset (<code>WHERE status = \'active\'</code>); a covering index (INCLUDE) if it lets the query skip the heap entirely.</li>' +
      '<li><strong>Verify:</strong> re-run EXPLAIN ANALYZE and quote both numbers. "Cut it from 340ms to 12ms" is the answer; "I added an index" is not.</li>' +
      '<li><strong>The follow-up they will ask:</strong> what does that index cost on write? Every index is paid for on every insert and update.</li>' +
      '</ul>',
    tags: ['postgres', 'performance', 'rung1']
  },
  {
    id: 'be-004',
    category: 'Backend & Data',
    title: 'Explain transactions and isolation levels. Where have they mattered to you?',
    answer:
      '<ul>' +
      '<li><strong>The four anomalies:</strong> dirty read, non-repeatable read, phantom read, and lost update. Isolation levels are defined by which they permit.</li>' +
      '<li><strong>Read Committed</strong> (the Postgres default) prevents dirty reads only. <strong>Repeatable Read</strong> also prevents non-repeatable reads. <strong>Serializable</strong> prevents all of them, and can abort your transaction so you must handle retries.</li>' +
      '<li><strong>Where it bites:</strong> "check the subscription is active, then create the listing" is two statements. Between them, another request can cancel the subscription. Either take the row lock (<code>SELECT ... FOR UPDATE</code>) or express the invariant as a constraint the database enforces.</li>' +
      '<li><strong>Connect it to what you know:</strong> this is the server-side half of the payment correctness problem you already solved on mobile with optimistic UI and server revalidation.</li>' +
      '</ul>',
    tags: ['postgres', 'correctness', 'rung1']
  },
  {
    id: 'be-005',
    category: 'Backend & Data',
    title: 'How do you run a zero-downtime schema migration?',
    answer:
      '<ul>' +
      '<li><strong>The rule:</strong> never deploy a migration and the code that requires it at the same time. Expand, migrate, contract.</li>' +
      '<li><strong>Expand:</strong> add the new nullable column or new table. Old code ignores it, new code can write it. Safe to deploy alone.</li>' +
      '<li><strong>Migrate:</strong> backfill in batches, not one statement — a single UPDATE over millions of rows holds locks and bloats WAL.</li>' +
      '<li><strong>Contract:</strong> only once no running code reads the old column, drop it. Usually a release later.</li>' +
      '<li><strong>Postgres specifics:</strong> adding a column with a non-volatile default is cheap on modern versions; adding a NOT NULL constraint to a populated table is not — add it <code>NOT VALID</code>, then <code>VALIDATE</code> separately. Build indexes <code>CONCURRENTLY</code>.</li>' +
      '</ul>',
    tags: ['postgres', 'operations', 'rung1']
  },
  {
    id: 'be-006',
    category: 'Backend & Data',
    title: 'Design authentication and authorization properly. What is wrong with a long-lived JWT?',
    answer:
      '<ul>' +
      '<li><strong>The core problem:</strong> a JWT is valid until it expires. There is no logout. If it leaks, the attacker has it for its full lifetime.</li>' +
      '<li><strong>The standard shape:</strong> short-lived access token (5-15 min) plus a long-lived refresh token stored server-side so it can be revoked.</li>' +
      '<li><strong>Refresh rotation:</strong> each refresh issues a new refresh token and invalidates the old one. If an already-used token is presented again, that is a replay — revoke the whole family and force re-login.</li>' +
      '<li><strong>Authorization is separate:</strong> the token says who you are; a guard says what you may do. Check ownership at the resource level, not just role at the route level — "is this listing yours" is not answerable from a role claim.</li>' +
      '<li><strong>Mobile angle you own:</strong> refresh must be single-flight. Five concurrent 401s must trigger one refresh, not five, or rotation invalidates itself.</li>' +
      '</ul>',
    tags: ['auth', 'security', 'rung1']
  },
  {
    id: 'be-007',
    category: 'Backend & Data',
    title: 'You added a Redis cache. How do you invalidate it?',
    answer:
      '<ul>' +
      '<li><strong>Adding the cache is trivial; the interview is entirely about invalidation.</strong></li>' +
      '<li><strong>TTL only:</strong> simplest, and correct when staleness is acceptable and bounded. Say the number out loud — "60 seconds stale is fine for a listings count".</li>' +
      '<li><strong>Write-through / explicit bust:</strong> on mutation, delete the affected keys. Needs a key scheme you can actually target — <code>listing:{id}</code> and <code>showroom:{id}:listings</code>, not one opaque blob.</li>' +
      '<li><strong>The hard case:</strong> a search result page is derived from many rows, so no single write maps cleanly to it. Use a short TTL there and reserve precise invalidation for entity reads.</li>' +
      '<li><strong>Name the failure modes:</strong> thundering herd on expiry (jitter the TTL, or lock the recompute), and cache stampede on cold start.</li>' +
      '<li><strong>Connect it:</strong> this is the same problem as TanStack Query invalidation after a payment — you already reason about it, just client-side.</li>' +
      '</ul>',
    tags: ['redis', 'caching', 'rung1']
  },
  {
    id: 'be-008',
    category: 'Backend & Data',
    title: 'Design a background job pipeline. What makes it production-grade?',
    answer:
      '<ul>' +
      '<li><strong>Idempotency first:</strong> a job will run twice. Design so that is harmless — key the work by a stable id and make the write an upsert, or record a processed marker.</li>' +
      '<li><strong>Retries with backoff:</strong> exponential, jittered, capped. Immediate retries turn a downstream blip into a self-inflicted outage.</li>' +
      '<li><strong>Dead letter queue:</strong> after N failures the job stops retrying and lands somewhere a human can see it. A silently dropped job is worse than a failed one.</li>' +
      '<li><strong>Distinguish error types:</strong> a 400 from the image service will never succeed on retry; a 503 will. Retrying both identically wastes hours.</li>' +
      '<li><strong>Observability:</strong> queue depth, oldest-message age, failure rate. Oldest-message age is the alert that actually catches a stuck worker.</li>' +
      '<li><strong>Worked example:</strong> upload → enqueue resize job → worker writes derivatives to S3 and updates the row. The upload response never waits on the resize.</li>' +
      '</ul>',
    tags: ['queues', 'bullmq', 'rung1']
  },
  {
    id: 'be-009',
    category: 'Backend & Data',
    title: 'How would you know your service broke at 3am?',
    answer:
      '<ul>' +
      '<li><strong>This question separates people who deployed a service from people who operate one.</strong></li>' +
      '<li><strong>Structured logs</strong> with a request id propagated through every layer, so one user report becomes one greppable trace. JSON, not string concatenation.</li>' +
      '<li><strong>Metrics that matter:</strong> request rate, error rate, p95/p99 latency — per endpoint. Averages hide everything.</li>' +
      '<li><strong>Alert on symptoms, not causes:</strong> page on "checkout error rate above 2% for 5 minutes", not on CPU. High CPU with happy users is not an incident.</li>' +
      '<li><strong>One alert that actually reaches you.</strong> A dashboard nobody is looking at is not monitoring.</li>' +
      '<li><strong>Health endpoints:</strong> liveness (am I running) and readiness (can I serve — is the DB reachable) are different questions and must be different checks.</li>' +
      '</ul>',
    tags: ['observability', 'operations', 'rung1']
  },
  {
    id: 'be-010',
    category: 'Backend & Data',
    title: 'Design a REST API contract. What do most people get wrong?',
    answer:
      '<ul>' +
      '<li><strong>Versioning:</strong> decide before launch, not after you need to break something. URL versioning is ugly and unambiguous, which is the right trade for most teams.</li>' +
      '<li><strong>Pagination:</strong> offset pagination breaks when rows are inserted mid-scroll — the user sees duplicates. Cursor pagination on a stable sort key does not.</li>' +
      '<li><strong>Error contracts:</strong> a machine-readable code plus a human message. The client should branch on the code, never parse the message.</li>' +
      '<li><strong>Idempotency keys</strong> on any mutation that costs money. The mobile client will retry on a flaky network — you built that retry logic yourself.</li>' +
      '<li><strong>The credibility move:</strong> you have consumed hundreds of APIs and know exactly which ones hurt. Design from that, and say so.</li>' +
      '</ul>',
    tags: ['api', 'design', 'rung1']
  },
  {
    id: 'be-011',
    category: 'Backend & Data',
    title: 'Explain Docker layers and why your image is 1.2GB.',
    answer:
      '<ul>' +
      '<li><strong>An image is a stack of read-only layers;</strong> a container adds one writable layer on top. Each Dockerfile instruction is a layer, and layers are cached by their input.</li>' +
      '<li><strong>Why it is huge:</strong> you built on <code>node:20</code> (~1GB) instead of <code>node:20-alpine</code> or a distroless runtime, and you shipped devDependencies and source into the final image.</li>' +
      '<li><strong>Multi-stage build:</strong> stage one installs everything and compiles; stage two copies only <code>dist/</code> and production <code>node_modules</code>. Typically 1.2GB → under 200MB.</li>' +
      '<li><strong>Cache ordering:</strong> copy <code>package.json</code> and install before copying source. Otherwise every source edit reinstalls every dependency.</li>' +
      '<li><strong>Honest framing for you:</strong> you already ship Bitbucket Pipelines for mobile — this is rebuilding that understanding without AI holding the pen.</li>' +
      '</ul>',
    tags: ['docker', 'cicd', 'rung1']
  },
  {
    id: 'be-012',
    category: 'Backend & Data',
    title: 'What does your service cost to run per month, and how would you halve it?',
    answer:
      '<ul>' +
      '<li><strong>Almost no mid-level candidate can answer this, which is exactly why it is worth preparing.</strong></li>' +
      '<li><strong>Know the shape:</strong> compute (task count × size × hours), managed database (instance + storage + IOPS + backups), object storage (storage + egress — egress is the one that surprises people), and the load balancer.</li>' +
      '<li><strong>Where the money usually is:</strong> an over-provisioned database, images served from origin instead of a CDN, and logs retained far longer than anyone reads them.</li>' +
      '<li><strong>How to halve it:</strong> right-size from actual utilization, put a CDN in front of static assets, cut log retention, and use spot or reserved capacity where the workload tolerates it.</li>' +
      '<li><strong>Why they ask:</strong> owning a number that costs the company money is a staff-adjacent signal.</li>' +
      '</ul>',
    tags: ['aws', 'cost', 'rung1']
  }
];
