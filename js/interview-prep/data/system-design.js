export const systemDesignQuestions = [
  {
    id: "sys-001",
    category: "Mobile System Design",
    title: "Design a chat application like WhatsApp (Mobile Client).",
    answer: "<ul><li><strong>Networking:</strong> WebSockets for real-time. Fallback to long polling.</li><li><strong>Local Storage:</strong> SQLite (WatermelonDB) for fast local querying and offline support.</li><li><strong>Sync:</strong> Optimistic UI (show message instantly, mark as pending, update when ACK received).</li><li><strong>Media:</strong> Upload large files via presigned S3 URLs. Show blurry preview during load.</li><li><strong>Pagination:</strong> Cursor-based pagination for chat history.</li></ul>",
    tags: ["chat", "offline", "websockets"]
  },
  {
    id: "sys-002",
    category: "Mobile System Design",
    title: "Design an Offline-First architecture.",
    answer: "<ul><li><strong>Database:</strong> Local database is the single source of truth (WatermelonDB/Realm).</li><li><strong>Reads:</strong> UI strictly observes the local DB. No loading spinners for data already cached.</li><li><strong>Writes:</strong> Write to local DB first (optimistic). Queue a background sync job.</li><li><strong>Sync Queue:</strong> Persisted queue for mutations. Retry with exponential backoff on failure.</li><li><strong>Conflict Resolution:</strong> Server wins, or client timestamps, or CRDTs if collaborative.</li></ul>",
    tags: ["offline-first", "architecture"]
  },
  {
    id: "sys-003",
    category: "Mobile System Design",
    title: "Design a Feed Application like Instagram.",
    answer: "<ul><li><strong>UI:</strong> FlatList with <code>windowSize</code> tuning. Viewability configuration for auto-playing videos.</li><li><strong>Image Loading:</strong> Caching layer (FastImage). Pre-fetching images just off-screen.</li><li><strong>Pagination:</strong> Infinite scroll with cursor-based API.</li><li><strong>State:</strong> Normalized state shape (Redux/Zustand) so updating a 'like' on a post updates it everywhere instantly.</li></ul>",
    tags: ["feed", "performance"]
  },
  {
    id: "sys-004",
    category: "Mobile System Design",
    title: "How would you handle a massive App Bundle size?",
    answer: "<ul><li><strong>Analysis:</strong> Use <code>react-native-bundle-visualizer</code> to find large JS dependencies.</li><li><strong>Assets:</strong> Compress images (WebP/TinyPNG). Move large assets to remote URLs (download on demand).</li><li><strong>Code:</strong> Remove unused libraries. Beware of importing whole libraries (e.g. <code>import * as _ from 'lodash'</code> vs <code>import cloneDeep from 'lodash/cloneDeep'</code>).</li><li><strong>Native:</strong> ProGuard/R8 for Android to strip unused native code. Check ABI splits.</li></ul>",
    tags: ["bundle", "performance"]
  }
];
