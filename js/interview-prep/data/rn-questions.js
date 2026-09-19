export const rnQuestions = [
  {
    id: "rn-001",
    category: "React Native Core",
    title: "How does the React Native Bridge work, and what are its limitations?",
    answer: "<ul><li><strong>How it works:</strong> Asynchronous serialisation of data (JSON) between JS thread and Native threads (Main UI, Background) over a message queue.</li><li><strong>Limitations:</strong> Overhead of serialisation/deserialisation. Cannot be synchronous (except tricky JSI calls previously). Can cause frame drops if passing large data (like base64 images) or too many messages per frame.</li></ul>",
    tags: ["core", "architecture"]
  },
  {
    id: "rn-002",
    category: "React Native Core",
    title: "What is JSI (JavaScript Interface) in the New Architecture?",
    answer: "<ul><li><strong>What:</strong> A C++ API for JS engines. Replaces the Bridge.</li><li><strong>Why:</strong> Allows Native and JS to hold references to each other's objects directly. Eliminates JSON serialisation.</li><li><strong>Benefit:</strong> Synchronous execution. JS can call C++ (and Native) functions directly, avoiding the asynchronous message queue delay.</li></ul>",
    tags: ["new-architecture", "jsi"]
  },
  {
    id: "rn-003",
    category: "React Native Core",
    title: "What is Fabric?",
    answer: "<ul><li><strong>What:</strong> The new concurrent rendering system in React Native, built in C++.</li><li><strong>Benefit:</strong> Synchronous layout measurements. Better integration with host platforms (iOS/Android) views. Supports React 18 Concurrent Features (Suspense, Transitions). Reduces UI thread blocking.</li></ul>",
    tags: ["new-architecture", "fabric"]
  },
  {
    id: "rn-004",
    category: "React Native Core",
    title: "What are TurboModules?",
    answer: "<ul><li><strong>What:</strong> The New Architecture's replacement for Native Modules.</li><li><strong>Benefit:</strong> Lazy loading. In the old system, all Native Modules were initialized at startup. TurboModules are loaded only when explicitly required by JS, improving app startup time.</li></ul>",
    tags: ["new-architecture", "turbomodules"]
  },
  {
    id: "rn-005",
    category: "Performance",
    title: "How do you optimize a FlatList for performance?",
    answer: "<ul><li>Use <code>getItemLayout</code> to skip measurement if item height is fixed.</li><li>Set <code>initialNumToRender</code> to cover the screen only.</li><li>Set <code>maxToRenderPerBatch</code> and <code>windowSize</code> appropriately to prevent excessive memory usage.</li><li>Use <code>keyExtractor</code> correctly (unique strings).</li><li>Wrap <code>renderItem</code> components in <code>React.memo</code> so they don't re-render unless props change.</li><li>Avoid anonymous functions in <code>renderItem</code>.</li></ul>",
    tags: ["performance", "ui"]
  },
  {
    id: "rn-006",
    category: "Performance",
    title: "What is Hermes, and why is it preferred over JSC?",
    answer: "<ul><li><strong>What:</strong> An open-source JavaScript engine optimized for React Native.</li><li><strong>Why:</strong> It uses Ahead-of-Time (AOT) compilation. Instead of parsing/compiling JS on the device, it precompiles JS into bytecode during the build step.</li><li><strong>Benefit:</strong> Faster App Startup (TTI - Time to Interactive), decreased memory footprint, smaller APK size.</li></ul>",
    tags: ["performance", "hermes"]
  },
  {
    id: "rn-007",
    category: "React Native Core",
    title: "Explain the React Native Threading Model.",
    answer: "<ul><li><strong>JS Thread:</strong> Where React runs (logic, state).</li><li><strong>UI (Main) Thread:</strong> Native UI rendering (Android/iOS).</li><li><strong>Background/Native Modules Thread:</strong> Where native code executes (e.g., fetching network, accessing camera).</li><li><strong>Shadow Thread:</strong> Background thread for calculating layout using Yoga (Flexbox).</li></ul>",
    tags: ["core", "threads"]
  },
  {
    id: "rn-008",
    category: "Performance",
    title: "How do you profile and debug performance issues in React Native?",
    answer: "<ul><li><strong>JS side:</strong> Hermes Profiler (Chrome DevTools / Flipper) to track CPU/memory and identify long-running JS functions. React DevTools Profiler for component render times.</li><li><strong>Native side:</strong> Android Studio Profiler, Xcode Instruments (Time Profiler, Core Animation) for UI thread drops and memory leaks.</li><li><strong>Metric:</strong> Watch the JS thread FPS and UI thread FPS.</li></ul>",
    tags: ["performance", "debugging"]
  }
];
