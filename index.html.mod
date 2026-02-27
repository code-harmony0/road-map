<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
  <meta name="theme-color" content="#13161a">
  <meta name="description" content="React Native to Senior Engineer - 3 Milestone Roadmap with interactive progress tracking">
  <title>RN Senior Roadmap - 3 Milestones</title>
  <
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <style>
    /* CSS Custom Properties for theming */
    :root {
      --bg-primary: #0c0e10;
      --bg-surface: #13161a;
      --bg-elevated: #1a1d22;
      --bg-card: #1e2127;
      --border-color: #2a2d35;
      --border-light: #3a3d45;
      --text-primary: #f0f1f5;
      --text-secondary: #9ca3af;
      --text-muted: #6b7280;
      
      --accent-blue: #3b82f6;
      --accent-purple: #8b5cf6;
      --accent-gold: #f59e0b;
      --accent-green: #22c55e;
      --accent-red: #ef4444;
      --accent-amber: #fbbf24;
      
      --m1-color: #3b82f6;
      --m2-color: #8b5cf6;
      --m3-color: #f59e0b;
      
      --touch-target: 44px;
      --safe-bottom: env(safe-area-inset-bottom, 0px);
      --nav-height: 64px;
      --bottom-nav-height: 72px;
    }

    /* Light mode support */
    @media (prefers-color-scheme: light) {
      :root {
        --bg-primary: #ffffff;
        --bg-surface: #f8f9fa;
        --bg-elevated: #f1f3f4;
        --bg-card: #ffffff;
        --border-color: #dadce0;
        --border-light: #e8eaed;
        --text-primary: #202124;
        --text-secondary: #5f6368;
        --text-muted: #80868b;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      :root {
        --border-color: #000000;
        --text-secondary: #000000;
        --bg-elevated: #ffffff;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.6;
      min-height: 100vh;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Skip link for accessibility */
    .skip-link {
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--accent-blue);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      z-index: 9999;
      transition: top 0.3s;
    }

    .skip-link:focus {
      top: 1rem;
    }

    /* Announcements for screen readers */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* Loading state */
    .loading-skeleton {
      background: linear-gradient(90deg, var(--bg-elevated) 25%, var(--bg-card) 50%, var(--bg-elevated) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    /* Top Navigation */
    .nav-container {
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-color);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      height: var(--nav-height);
      padding: 0;
    }

    .nav-inner {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 0.75rem 0 1rem;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-right: auto;
      flex-shrink: 0;
    }

    .nav-logo {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      will-change: transform;
    }

    .nav-title {
      font-size: 1rem;
      font-weight: 600;
      background: linear-gradient(90deg, var(--text-primary), var(--accent-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (max-width: 380px) {
      .nav-title {
        display: none;
      }
    }

    /* Tab Navigation - Swipeable */
    .tabs-wrapper {
      flex: 1;
      overflow: hidden;
      position: relative;
      margin: 0 0.5rem;
    }

    .tabs-container {
      display: flex;
      gap: 0.375rem;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding: 0.5rem 0;
    }

    .tabs-container::-webkit-scrollbar {
      display: none;
    }

    /* Tab Styles */
    .milestone-tab {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.875rem;
      border-radius: 10px;
      background: transparent;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease;
      min-width: min-content;
      text-decoration: none;
      color: var(--text-secondary);
      position: relative;
      scroll-snap-align: start;
      min-height: var(--touch-target);
      will-change: transform, opacity;
    }

    .milestone-tab:hover,
    .milestone-tab:focus-visible {
      background: rgba(255, 255, 255, 0.03);
      outline: 2px solid var(--accent-blue);
      outline-offset: 2px;
    }

    .milestone-tab.active {
      background: rgba(255, 255, 255, 0.05);
    }

    .milestone-tab.m1.active {
      border-color: var(--m1-color);
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05));
      color: var(--m1-color);
    }

    .milestone-tab.m2.active {
      border-color: var(--m2-color);
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05));
      color: var(--m2-color);
    }

    .milestone-tab.m3.active {
      border-color: var(--m3-color);
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.05));
      color: var(--m3-color);
    }

    .tab-number {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1;
      opacity: 0.7;
      min-width: 28px;
      text-align: center;
    }

    .milestone-tab.active .tab-number {
      opacity: 1;
    }

    .tab-content {
      display: flex;
      flex-direction: column;
      gap: 0;
      line-height: 1.2;
    }

    .tab-title {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      color: var(--text-secondary);
    }

    .milestone-tab.active .tab-title {
      color: inherit;
    }

    .tab-meta {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.65rem;
    }

    .tab-badge {
      padding: 0.1rem 0.35rem;
      border-radius: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.6rem;
      font-weight: 600;
    }

    .m1 .tab-badge { background: var(--m1-color); color: var(--bg-primary); }
    .m2 .tab-badge { background: var(--m2-color); color: var(--bg-primary); }
    .m3 .tab-badge { background: var(--m3-color); color: var(--bg-primary); }

    .tab-salary {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
    }

    .tab-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--border-color);
      border-radius: 0 0 10px 10px;
      overflow: hidden;
    }

    .tab-progress-fill {
      height: 100%;
      transition: width 0.3s ease;
      transform: translateZ(0);
    }

    .m1 .tab-progress-fill { background: var(--m1-color); }
    .m2 .tab-progress-fill { background: var(--m2-color); }
    .m3 .tab-progress-fill { background: var(--m3-color); }

    /* Top Right Actions */
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: auto;
    }

    .action-btn {
      width: var(--touch-target);
      height: var(--touch-target);
      border-radius: 10px;
      background: var(--bg-elevated);
      border: 1px solid var(--border-color);
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      cursor: pointer;
      transition: all 0.15s ease;
      position: relative;
      will-change: transform;
    }

    .action-btn:active {
      transform: scale(0.92);
    }

    .action-btn:hover,
    .action-btn:focus-visible {
      border-color: var(--accent-gold);
      color: var(--accent-gold);
      outline: 2px solid var(--accent-blue);
      outline-offset: 2px;
    }

    .action-btn .streak-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: var(--accent-red);
      color: white;
      font-size: 0.65rem;
      padding: 0.1rem 0.4rem;
      border-radius: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      min-width: 20px;
      text-align: center;
    }

    .action-btn.timer-btn.running {
      background: linear-gradient(135deg, var(--accent-red), var(--accent-amber));
      border-color: var(--accent-red);
      color: white;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.5); }
      50% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
    }

    /* Main Content */
    .main-container {
      flex: 1;
      margin-top: var(--nav-height);
      margin-bottom: calc(var(--bottom-nav-height) + var(--safe-bottom));
      padding: 0.75rem;
      min-height: calc(100vh - var(--nav-height) - var(--bottom-nav-height));
      position: relative;
      overflow: hidden;
    }

    .milestone-iframe {
      width: 100%;
      height: 100%;
      min-height: calc(100vh - var(--nav-height) - var(--bottom-nav-height) - 2rem);
      border: none;
      border-radius: 12px;
      background: var(--bg-surface);
      opacity: 1;
      transition: opacity 0.2s ease;
      will-change: opacity;
    }

    .milestone-iframe.loading {
      opacity: 0;
    }

    /* Bottom Navigation Bar */
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--bg-surface);
      border-top: 1px solid var(--border-color);
      padding: 0.5rem 1rem calc(0.5rem + var(--safe-bottom));
      z-index: 1000;
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 0.25rem;
    }

    .bottom-nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      padding: 0.375rem 0.75rem;
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.65rem;
      border-radius: 8px;
      transition: all 0.15s ease;
      min-width: 60px;
      min-height: var(--touch-target);
      justify-content: center;
    }

    .bottom-nav-item:hover,
    .bottom-nav-item:focus-visible {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-secondary);
      outline: 2px solid var(--accent-blue);
      outline-offset: 2px;
    }

    .bottom-nav-item.active {
      color: var(--accent-blue);
    }

    .bottom-nav-item svg {
      width: 24px;
      height: 24px;
    }

    /* Quick Actions FAB */
    .fab-container {
      position: fixed;
      bottom: calc(var(--bottom-nav-height) + 1rem + var(--safe-bottom));
      right: 1rem;
      z-index: 999;
    }

    .fab-main {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      will-change: transform;
    }

    .fab-main:hover,
    .fab-main:focus-visible {
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
    }

    .fab-main:active {
      transform: scale(0.95);
    }

    .fab-menu {
      position: absolute;
      bottom: 70px;
      right: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.2s ease;
    }

    .fab-menu.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .fab-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      color: var(--text-primary);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      transition: all 0.15s ease;
    }

    .fab-item:hover,
    .fab-item:focus-visible {
      background: var(--bg-elevated);
      border-color: var(--accent-blue);
      outline: 2px solid var(--accent-blue);
      outline-offset: 2px;
    }

    /* Streak Banner */
    .streak-banner {
      position: fixed;
      top: var(--nav-height);
      left: 0;
      right: 0;
      background: linear-gradient(90deg, var(--accent-red), var(--accent-amber));
      color: white;
      padding: 0.75rem;
      text-align: center;
      font-weight: 500;
      font-size: 0.9rem;
      z-index: 999;
      transform: translateY(-100%);
      transition: transform 0.3s ease;
    }

    .streak-banner.show {
      transform: translateY(0);
    }

    /* Quote Banner */
    .quote-banner {
      position: fixed;
      top: var(--nav-height);
      left: 0;
      right: 0;
      background: var(--bg-elevated);
      border-bottom: 1px solid var(--border-color);
      padding: 0.75rem 1rem;
      font-size: 0.85rem;
      color: var(--text-secondary);
      text-align: center;
      font-style: italic;
      z-index: 998;
    }

    /* Progress Overlay */
    .progress-overlay {
      position: fixed;
      bottom: calc(var(--bottom-nav-height) + var(--safe-bottom) + 1rem);
      left: 50%;
      transform: translateX(-50%);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 0.875rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 1.25rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      z-index: 900;
      max-width: calc(100% - 2rem);
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .progress-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.125rem;
      min-width: 60px;
    }

    .progress-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.1rem;
      font-weight: 700;
    }

    .progress-value.m1 { color: var(--m1-color); }
    .progress-value.m2 { color: var(--m2-color); }
    .progress-value.m3 { color: var(--m3-color); }

    .progress-label {
      font-size: 0.6rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    /* Modals */
    .modal-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 2000;
      align-items: flex-end;
      justify-content: center;
      padding: 1rem;
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
    }

    .modal-overlay.active {
      display: flex;
    }

    @supports not ((-webkit-backdrop-filter: blur(8px)) or (backdrop-filter: blur(8px))) {
      .modal-overlay {
        background: rgba(0, 0, 0, 0.95);
      }
    }

    .modal-content {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 20px;
      padding: 1.5rem;
      width: 100%;
      max-width: 400px;
      max-height: 85vh;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      animation: slideUp 0.3s ease;
      will-change: transform;
    }

    @keyframes slideUp {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;
    }

    .modal-title {
      font-size: 1.25rem;
      font-weight: 600;
    }

    .modal-close {
      background: none;
      border: none;
      color: var(--text-secondary);
      font-size: 1.5rem;
      cursor: pointer;
      width: var(--touch-target);
      height: var(--touch-target);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      transition: all 0.15s;
    }

    .modal-close:hover,
    .modal-close:focus-visible {
      background: var(--bg-elevated);
      color: var(--text-primary);
    }

    /* Timer Display */
    .timer-display {
      font-family: 'JetBrains Mono', monospace;
      font-size: 4rem;
      font-weight: 700;
      text-align: center;
      margin: 1.5rem 0;
      color: var(--text-primary);
      line-height: 1;
      will-change: transform;
    }

    .timer-display.rest {
      color: var(--accent-amber);
    }

    /* Timer Controls */
    .timer-controls {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .timer-btn {
      padding: 1rem;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      font-family: inherit;
      font-weight: 600;
      font-size: 1rem;
      min-height: var(--touch-target);
      transition: all 0.15s ease;
      will-change: transform;
    }

    .timer-btn:active {
      transform: scale(0.95);
    }

    .timer-btn-start {
      background: var(--accent-green);
      color: var(--bg-primary);
    }

    .timer-btn-pause {
      background: var(--accent-amber);
      color: var(--bg-primary);
    }

    .timer-btn-reset {
      background: var(--bg-elevated);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
    }

    .timer-presets {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }

    .preset-btn {
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      background: var(--bg-elevated);
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 0.875rem;
      min-height: var(--touch-target);
      transition: all 0.15s ease;
    }

    .preset-btn:hover,
    .preset-btn:focus-visible {
      border-color: var(--accent-blue);
      color: var(--accent-blue);
      outline: 2px solid var(--accent-blue);
      outline-offset: 2px;
    }

    /* Settings */
    .settings-section {
      margin-bottom: 1.25rem;
    }

    .settings-section-title {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.75rem;
    }

    .settings-btn {
      width: 100%;
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: 10px;
      background: var(--bg-elevated);
      color: var(--text-primary);
      cursor: pointer;
      font-family: inherit;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
      min-height: var(--touch-target);
      transition: all 0.15s ease;
    }

    .settings-btn:hover,
    .settings-btn:focus-visible {
      border-color: var(--accent-blue);
      background: rgba(59, 130, 246, 0.1);
    }

    .settings-btn.danger:hover,
    .settings-btn.danger:focus-visible {
      border-color: var(--accent-red);
      background: rgba(239, 68, 68, 0.1);
      color: var(--accent-red);
    }

    /* Theme Toggle */
    .theme-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background: var(--bg-elevated);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      margin-bottom: 0.5rem;
    }

    .theme-toggle-label {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .toggle-switch {
      width: 48px;
      height: 28px;
      background: var(--border-color);
      border-radius: 14px;
      position: relative;
      cursor: pointer;
      transition: background 0.2s;
    }

    .toggle-switch.active {
      background: var(--accent-blue);
    }

    .toggle-indicator {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 24px;
      height: 24px;
      background: white;
      border-radius: 50%;
      transition: transform 0.2s;
    }

    .toggle-switch.active .toggle-indicator {
      transform: translateX(20px);
    }

    /* Reduced motion toggle */
    .reduced-motion .fab-menu,
    .reduced-motion .modal-content,
    .reduced-motion .streak-banner,
    .reduced-motion .timer-display,
    .reduced-motion .milestone-iframe {
      animation: none !important;
      transition: none !important;
    }

    /* Confetti Canvas */
    #confettiCanvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 3000;
    }

    /* Analytics Modal */
    .analytics-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }

    .analytics-card {
      background: var(--bg-elevated);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 1rem;
      text-align: center;
    }

    .analytics-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--accent-blue);
      display: block;
      margin-bottom: 0.25rem;
    }

    .analytics-label {
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    /* Toast Notifications */
    .toast {
      position: fixed;
      bottom: calc(var(--bottom-nav-height) + var(--safe-bottom) + 5rem);
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1rem 1.5rem;
      color: var(--text-primary);
      font-weight: 500;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      z-index: 2500;
      opacity: 0;
      transition: all 0.3s ease;
    }

    .toast.show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }

    /* Responsive adjustments */
    @media (min-width: 769px) {
      .bottom-nav {
        display: none;
      }

      .main-container {
        margin-bottom: 1rem;
        padding: 1.5rem;
      }

      .fab-container {
        bottom: 1.5rem;
      }

      .progress-overlay {
        bottom: 1.5rem;
      }

      .modal-overlay {
        align-items: center;
        padding: 2rem;
      }
    }

    @media (max-width: 480px) {
      .timer-display {
        font-size: 3rem;
      }

      .analytics-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Focus visible only for keyboard */
    :focus:not(:focus-visible) {
      outline: none;
    }

    :focus-visible {
      outline: 2px solid var(--accent-blue);
      outline-offset: 2px;
    }

    /* Print styles */
    @media print {
      .nav-container,
      .bottom-nav,
      .fab-container,
      .modal-overlay,
      #confettiCanvas,
      .streak-banner,
      .quote-banner {
        display: none !important;
      }

      .main-container {
        margin: 0;
        padding: 1rem;
      }

      .milestone-iframe {
        min-height: auto;
      }
    }
  /* Job Search Tracker */
      .job-search-tracker {
        position: fixed;
        top: calc(var(--nav-height, 64px) + 1rem);
        right: 1rem;
        background: var(--bg-elevated);
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 1.25rem;
        min-width: 280px;
        max-width: 320px;
        z-index: 900;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      }

      .jst-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .jst-icon {
        font-size: 1.5rem;
      }

      .jst-title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      .jst-metrics {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 1rem;
      }

      .jst-metric {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .jst-metric label {
        font-size: 0.85rem;
        color: var(--text-secondary);
        min-width: 80px;
      }

      .jst-input {
        background: var(--bg-surface);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        color: var(--text-primary);
        font-family: 'JetBrains Mono', monospace;
        font-size: 1rem;
        font-weight: 600;
        padding: 0.5rem;
        text-align: center;
        width: 80px;
        transition: border-color 0.2s;
      }

      .jst-input:focus {
        outline: none;
        border-color: var(--accent-blue);
      }

      .jst-target {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        color: var(--text-secondary);
      }

      .jst-salary {
        display: flex;
        align-items: center;
      }

      .jst-currency {
        font-family: 'JetBrains Mono', monospace;
        font-size: 1rem;
        color: var(--text-secondary);
        margin-right: 0.25rem;
      }

      .jst-cta {
        width: 100%;
        padding: 0.875rem;
        background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .jst-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
      }

      .jst-cta:active {
        transform: translateY(0);
      }

      
  </style>
</head>
<body>
  <!-- Skip to main content for accessibility -->
  <a href="#mainContent" class="skip-link">Skip to main content</a>

  <!-- Screen reader announcements -->
  <div class="sr-only" aria-live="polite" aria-atomic="true" id="announcer"></div>

  <!-- Streak Banner -->
  <div class="streak-banner" id="streakBanner" role="banner" aria-label="Achievement notification">
    🔥 You're on fire! <span id="streakDays">7</span> day streak!
  </div>

  <!-- Quote Banner -->
  <div class="quote-banner" id="quoteBanner" role="complementary" aria-label="Motivational quote">
    💪 loading inspiration...
  </div>

  <!-- Top Navigation -->
  <nav class="nav-container" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <div class="nav-brand">
        <div class="nav-logo" aria-hidden="true">🚀</div>
        <span class="nav-title">RN Roadmap</span>
      </div>

      <div class="tabs-wrapper">
        <div class="tabs-container" id="tabsContainer" role="tablist" aria-label="Milestone tabs">
          <button class="milestone-tab m1" id="tab1" data-milestone="1" role="tab" aria-selected="false" aria-controls="mainContent" tabindex="0">
            <span class="tab-number" aria-hidden="true">01</span>
            <span class="sr-only">Milestone 1</span>
            <div class="tab-content">
              <span class="tab-title">JOB READY</span>
              <span class="tab-meta">
                <span class="tab-badge">8 WEEKS</span>
                <span class="tab-salary">$120K</span>
              </span>
            </div>
            <div class="tab-progress" aria-hidden="true">
              <div class="tab-progress-fill" id="progress1" style="width: 0%"></div>
            </div>
          </button>

          <button class="milestone-tab m2" id="tab2" data-milestone="2" role="tab" aria-selected="false" aria-controls="mainContent" tabindex="-1">
            <span class="tab-number" aria-hidden="true">02</span>
            <span class="sr-only">Milestone 2</span>
            <div class="tab-content">
              <span class="tab-title">SENIOR</span>
              <span class="tab-meta">
                <span class="tab-badge">4 MONTHS</span>
                <span class="tab-salary">$180K</span>
              </span>
            </div>
            <div class="tab-progress" aria-hidden="true">
              <div class="tab-progress-fill" id="progress2" style="width: 0%"></div>
            </div>
          </button>

          <button class="milestone-tab m3" id="tab3" data-milestone="3" role="tab" aria-selected="false" aria-controls="mainContent" tabindex="-1">
            <span class="tab-number" aria-hidden="true">03</span>
            <span class="sr-only">Milestone 3</span>
            <div class="tab-content">
              <span class="tab-title">STAFF</span>
              <span class="tab-meta">
                <span class="tab-badge">6 MONTHS</span>
                <span class="tab-salary">$200K+</span>
              </span>
            </div>
            <div class="tab-progress" aria-hidden="true">
              <div class="tab-progress-fill" id="progress3" style="width: 0%"></div>
            </div>
          </button>
        </div>
      </div>

      <div class="nav-actions">
        <button class="action-btn timer-btn" id="timerBtn" aria-label="Focus Timer" title="Focus Timer (Ctrl+T)">
          ⏱️
        </button>

        <button class="action-btn" id="streakBtn" aria-label="View streak" title="Your streak">
          🔥
          <span class="streak-badge" id="globalStreak" aria-hidden="true">0</span>
        </button>

        <button class="action-btn" id="settingsBtn" aria-label="Open settings" title="Settings">
          ⚙️
        </button>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="main-container" id="mainContent" tabindex="-1">
    <iframe class="milestone-iframe" id="contentFrame" src="about:blank" title="Milestone content" aria-label="Current milestone tasks"></iframe>
  </main>

  <!-- Bottom Navigation Bar -->
  <nav class="bottom-nav" role="navigation" aria-label="Mobile navigation">
    <a href="#milestone-1" class="bottom-nav-item active" id="bottomNav1" aria-label="Milestone 1: Job Ready">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      Home
    </a>
    <a href="#progress" class="bottom-nav-item" id="bottomNavProgress" aria-label="View progress">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
      Progress
    </a>
    <button class="bottom-nav-item" id="bottomNavTimer" aria-label="Open timer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      Timer
    </button>
    <button class="bottom-nav-item" id="bottomNavSettings" aria-label="Open settings">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
      Settings
    </button>
  </nav>

  <!-- Quick Actions FAB -->
  <div class="fab-container" id="fabContainer">
    <div class="fab-menu" id="fabMenu" role="menu" aria-label="Quick actions">
      <button class="fab-item" id="fabMarkDone" role="menuitem">
        <span>✓</span>
        Mark current done
      </button>
      <button class="fab-item" id="fabAddNote" role="menuitem">
        <span>📝</span>
        Add note
      </button>
      <button class="fab-item" id="fabViewAnalytics" role="menuitem">
        <span>📊</span>
        View analytics
      </button>
    </div>
    <button class="fab-main" id="fabMain" aria-label="Open quick actions" aria-expanded="false" aria-controls="fabMenu">
      +
    </button>
  </div>

  <!-- Progress Overlay (Desktop) -->
  <div class="progress-overlay" id="progressOverlay" role="status" aria-label="Overall progress">
    <div class="progress-item">
      <span class="progress-value m1" id="m1Progress">0%</span>
      <span class="progress-label">M1</span>
    </div>
    <div class="progress-item">
      <span class="progress-value m2" id="m2Progress">0%</span>
      <span class="progress-label">M2</span>
    </div>
    <div class="progress-item">
      <span class="progress-value m3" id="m3Progress">0%</span>
      <span class="progress-label">M3</span>
    </div>
  </div>

  <!-- Timer Modal -->
  <div class="modal-overlay" id="timerModal" role="dialog" aria-modal="true" aria-label="Focus timer">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">⏱️ Focus Timer</h2>
        <button class="modal-close" id="timerClose" aria-label="Close timer">&times;</button>
      </div>
      
      <div class="timer-display" id="timerDisplay" role="timer" aria-live="off">25:00</div>
      
      <div class="timer-controls">
        <button class="timer-btn timer-btn-start" id="timerStart">Start</button>
        <button class="timer-btn timer-btn-pause" id="timerPause" style="display:none">Pause</button>
        <button class="timer-btn timer-btn-reset" id="timerReset">Reset</button>
      </div>

      <div class="timer-presets">
        <button class="preset-btn" data-minutes="25">25 min</button>
        <button class="preset-btn" data-minutes="45">45 min</button>
        <button class="preset-btn" data-minutes="60">60 min</button>
      </div>
    </div>
  </div>

  <!-- Settings Modal -->
  <div class="modal-overlay" id="settingsModal" role="dialog" aria-modal="true" aria-label="Settings">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">⚙️ Settings</h2>
        <button class="modal-close" id="settingsClose" aria-label="Close settings">&times;</button>
      </div>

      <div class="settings-section">
        <div class="settings-section-title">Appearance</div>
        
        <div class="theme-toggle">
          <span class="theme-toggle-label">🌙 Dark Mode</span>
          <div class="toggle-switch" id="themeToggle" role="switch" aria-checked="true" tabindex="0">
            <div class="toggle-indicator"></div>
          </div>
        </div>
        
        <div class="theme-toggle">
          <span class="theme-toggle-label">♿ Reduced Motion</span>
          <div class="toggle-switch" id="reducedMotionToggle" role="switch" aria-checked="false" tabindex="0">
            <div class="toggle-indicator"></div>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-section-title">Data Management</div>
        
        <button class="settings-btn" id="exportBtn">
          <span>💾</span> Export Progress
        </button>
        
        <button class="settings-btn" id="importBtn">
          <span>📂</span> Import Progress
        </button>

        <button class="settings-btn" id="analyticsBtn">
          <span>📊</span> View Analytics
        </button>

        <input type="file" id="importFile" accept=".json" style="display:none" aria-label="Import file">
      </div>

      <div class="settings-section">
        <div class="settings-section-title">Current Streak</div>
        <div style="text-align: center; padding: 1.25rem; background: var(--bg-elevated); border-radius: 10px;">
          <div style="font-size: 2rem; margin-bottom: 0.25rem;">🔥 <span id="streakDisplay">0</span></div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">Days in a row</div>
          <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 0.5rem;">Freeze available: <span id="freezeAvailable">1</span></div>
        </div>
      </div>

      <div class="settings-section">
        <div class="settings-section-title">Danger Zone</div>
        
        <button class="settings-btn danger" id="clearBtn">
          <span>🗑️</span> Clear All Data
        </button>
      </div>
    </div>
  </div>

  <!-- Analytics Modal -->
  <div class="modal-overlay" id="analyticsModal" role="dialog" aria-modal="true" aria-label="Analytics">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">📊 Your Stats</h2>
        <button class="modal-close" id="analyticsClose" aria-label="Close analytics">&times;</button>
      </div>

      <div class="analytics-grid">
        <div class="analytics-card">
          <span class="analytics-value" id="statTotalTasks">0</span>
          <span class="analytics-label">Tasks Completed</span>
        </div>
        <div class="analytics-card">
          <span class="analytics-value" id="statTotalHours">0</span>
          <span class="analytics-label">Hours Studied</span>
        </div>
        <div class="analytics-card">
          <span class="analytics-value" id="statFocusSessions">0</span>
          <span class="analytics-label">Focus Sessions</span>
        </div>
        <div class="analytics-card">
          <span class="analytics-value" id="statWeeksCompleted">0</span>
          <span class="analytics-label">Weeks Finished</span>
        </div>
        <div class="analytics-card">
          <span class="analytics-value" id="statAvgDaily">0</span>
          <span class="analytics-label">Avg Daily (min)</span>
        </div>
        <div class="analytics-card">
          <span class="analytics-value" id="statCurrentStreak">0</span>
          <span class="analytics-label">Day Streak</span>
        </div>
      </div>

      <button class="settings-btn" id="exportAnalyticsBtn" style="margin-top: 1.5rem;">
        <span>📤</span> Export Analytics JSON
      </button>
    </div>
  </div>

  <!-- Confetti Canvas -->
  <canvas id="confettiCanvas" aria-hidden="true"></canvas>

  <!-- Toast Notifications -->
  <div class="toast" id="toast" role="alert" aria-live="polite"></div>

  <script>
    // Configuration
    const CONFIG = {
      milestones: {
        1: { file: 'milestone1-job-ready.html', color: '#3b82f6', tasks: 50 },
        2: { file: 'milestone2-placeholder.html', color: '#8b5cf6', tasks: 40 },
        3: { file: 'milestone3-staff-engineer.html', color: '#f59e0b', tasks: 35 }
      },
      storageKeys: {
        progress: 'milestone{}_tasks',
        analytics: 'roadmap_analytics',
        streak: 'roadmap_streak',
        lastActive: 'roadmap_last_active',
        lastMilestone: 'roadmap_last_milestone',
        freezeUsed: 'roadmap_freeze_used',
        theme: 'roadmap_theme',
        reducedMotion: 'roadmap_reduced_motion'
      },
      quotes: [
        "💪 The best time to start was yesterday. The second best time is now.",
        "🎯 Consistency is the key to mastery.",
        "🚀 Every expert was once a beginner.",
        "🔥 Progress over perfection.",
        "⚡ Small steps every day lead to massive results.",
        "💎 You're closer than you think.",
        "🌟 Your future self will thank you.",
        "⚙️ Systems > Goals. Build the machine."
      ]
    };

    // State management
    const state = {
      currentMilestone: 1,
      timeLeft: 25 * 60,
      isRunning: false,
      timerInterval: null,
      streak: 0,
      lastActive: null,
      freezeUsed: false,
      analytics: {
        totalTasks: 0,
        totalHours: 0,
        focusSessions: 0,
        weeksCompleted: 0,
        sessionHistory: [],
        featureUsage: {},
        startDate: new Date().toISOString()
      },
      debounceTimer: null
    };

    // DOM Elements cache
    const elements = {};

    // Initialize
    function init() {
      cacheElements();
      loadState();
      setupEventListeners();
      updateActiveTab();
      loadContent();
      updateProgress();
      checkStreak();
      showRandomQuote();
      setupKeyboardShortcuts();
      applyTheme();
      applyReducedMotion();
    }

    function cacheElements() {
      const ids = [
        'tabsContainer', 'contentFrame', 'mainContent', 'timerModal', 'settingsModal',
        'analyticsModal', 'timerDisplay', 'timerStart', 'timerPause', 'timerReset',
        'timerBtn', 'timerClose', 'globalStreak', 'streakDisplay', 'streakBanner',
        'streakDays', 'quoteBanner', 'fabMain', 'fabMenu', 'confettiCanvas',
        'toast', 'importFile', 'announce', 'progressOverlay', 'freezeAvailable',
        'themeToggle', 'reducedMotionToggle', 'bottomNav1', 'bottomNavProgress',
        'bottomNavTimer', 'bottomNavSettings'
      ];
      
      ids.forEach(id => {
        elements[id] = document.getElementById(id);
      });

      // Progress elements
      for (let i = 1; i <= 3; i++) {
        elements[`tab${i}`] = document.getElementById(`tab${i}`);
        elements[`progress${i}`] = document.getElementById(`progress${i}`);
        elements[`m${i}Progress`] = document.getElementById(`m${i}Progress`);
      }
    }

    function loadState() {
      // Load milestone preference
      const savedMilestone = localStorage.getItem(CONFIG.storageKeys.lastMilestone);
      const hash = window.location.hash;
      
      if (hash && hash.startsWith('#milestone-')) {
        state.currentMilestone = parseInt(hash.split('-')[1]);
      } else if (savedMilestone) {
        state.currentMilestone = parseInt(savedMilestone);
      }

      // Load streak data
      state.streak = parseInt(localStorage.getItem(CONFIG.storageKeys.streak) || '0');
      state.lastActive = localStorage.getItem(CONFIG.storageKeys.lastActive);
      state.freezeUsed = localStorage.getItem(CONFIG.storageKeys.freezeUsed) === 'true';

      // Load analytics
      const savedAnalytics = localStorage.getItem(CONFIG.storageKeys.analytics);
      if (savedAnalytics) {
        state.analytics = { ...state.analytics, ...JSON.parse(savedAnalytics) };
      }

      // Load preferences
      const theme = localStorage.getItem(CONFIG.storageKeys.theme);
      const reducedMotion = localStorage.getItem(CONFIG.storageKeys.reducedMotion);
      
      if (theme === 'light') {
        document.documentElement.classList.add('light-mode');
      }
      if (reducedMotion === 'true') {
        document.documentElement.classList.add('reduced-motion');
      }
    }

    // Debounced localStorage write
    function saveToStorage(key, value) {
      clearTimeout(state.debounceTimer);
      state.debounceTimer = setTimeout(() => {
        try {
          localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
        } catch (e) {
          console.warn('Storage quota exceeded');
          showToast('⚠️ Storage limit reached. Export your data!');
        }
      }, 300);
    }

    // Tab switching
    function switchTab(milestoneNum) {
      if (milestoneNum === state.currentMilestone) return;
      
      state.currentMilestone = milestoneNum;
      saveToStorage(CONFIG.storageKeys.lastMilestone, milestoneNum);
      window.location.hash = `#milestone-${milestoneNum}`;
      
      updateActiveTab();
      loadContent();
      updateProgress();
      
      // Track tab switch
      trackFeature('tab_switch');
      
      // Show milestone-specific quote
      const milestoneQuotes = {
        1: "🚀 Foundation first. Build strong.",
        2: "⚡ Level up. You're becoming senior.",
        3: "👑 Staff level. Time to lead."
      };
      showToast(milestoneQuotes[milestoneNum]);
    }

    function updateActiveTab() {
      // Update top tabs
      for (let i = 1; i <= 3; i++) {
        const tab = elements[`tab${i}`];
        if (tab) {
          const isActive = i === state.currentMilestone;
          tab.classList.toggle('active', isActive);
          tab.setAttribute('aria-selected', isActive);
          tab.setAttribute('tabindex', isActive ? '0' : '-1');
        }
      }

      // Update bottom nav
      document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.classList.remove('active');
      });
      if (elements.bottomNav1) {
        elements.bottomNav1.classList.toggle('active', state.currentMilestone === 1);
      }
    }

    function loadContent() {
      const frame = elements.contentFrame;
      if (!frame) return;

      // Show loading state
      frame.classList.add('loading');
      
      // Lazy load milestone
      const milestone = CONFIG.milestones[state.currentMilestone];
      if (milestone) {
        frame.src = milestone.file;
        
        frame.onload = () => {
          frame.classList.remove('loading');
        };
        
        frame.onerror = () => {
          frame.classList.remove('loading');
          showToast('❌ Failed to load milestone. Please try again.');
        };
      }
    }

    // Progress updates
    function updateProgress() {
      let totalCompleted = 0;
      let totalTasks = 0;

      [1, 2, 3].forEach(m => {
        const key = CONFIG.storageKeys.progress.replace('{}', m);
        const data = JSON.parse(localStorage.getItem(key) || '{}');
        const completed = Object.values(data).filter(v => v).length;
        const tasks = CONFIG.milestones[m].tasks;
        const percentage = tasks > 0 ? Math.round((completed / tasks) * 100) : 0;

        // Update tab progress bar
        const progressFill = elements[`progress${m}`];
        if (progressFill) {
          progressFill.style.width = `${percentage}%`;
        }
        
        // Update overlay progress
        const progressValue = elements[`m${m}Progress`];
        if (progressValue) {
          progressValue.textContent = `${percentage}%`;
        }

        totalCompleted += completed;
        totalTasks += tasks;

        // Update analytics
        state.analytics.totalTasks = totalCompleted;
        saveAnalytics();
      });
    }

    // Streak management
    function checkStreak() {
      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();

      if (!state.lastActive) {
        state.streak = 1;
      } else if (state.lastActive === today) {
        // Already active today - no change
      } else if (state.lastActive === yesterday) {
        // Consecutive day
        state.streak++;
      } else {
        // Streak broken - check freeze
        const daysMissed = Math.floor((new Date() - new Date(state.lastActive)) / 86400000);
        
        if (daysMissed === 2 && !state.freezeUsed) {
          // Use freeze for 1 day grace period
          state.freezeUsed = true;
          state.streak++;
          showToast('❄️ Streak freeze used! Keep going!');
          saveToStorage(CONFIG.storageKeys.freezeUsed, 'true');
        } else {
          state.streak = 1;
          state.freezeUsed = false;
          localStorage.removeItem(CONFIG.storageKeys.freezeUsed);
        }
      }

      state.lastActive = today;
      saveToStorage(CONFIG.storageKeys.streak, state.streak);
      saveToStorage(CONFIG.storageKeys.lastActive, today);
      
      updateStreakDisplay();

      // Check for "on fire" message
      if (state.streak >= 7 && state.streak % 7 === 0) {
        showStreakBanner();
      }
    }

    function updateStreakDisplay() {
      if (elements.globalStreak) {
        elements.globalStreak.textContent = state.streak;
      }
      if (elements.streakDisplay) {
        elements.streakDisplay.textContent = state.streak;
      }
      if (elements.freezeAvailable) {
        elements.freezeAvailable.textContent = state.freezeUsed ? '0' : '1';
      }
    }

    function showStreakBanner() {
      if (!elements.streakBanner || !elements.streakDays) return;
      
      elements.streakDays.textContent = state.streak;
      elements.streakBanner.classList.add('show');
      
      // Trigger confetti
      triggerConfetti();
      
      // Announce for screen readers
      announce(`🔥 Congratulations! ${state.streak} day streak!`);
      
      setTimeout(() => {
        elements.streakBanner.classList.remove('show');
      }, 5000);
    }

    // Random quotes
    function showRandomQuote() {
      if (!elements.quoteBanner) return;
      
      const quote = CONFIG.quotes[Math.floor(Math.random() * CONFIG.quotes.length)];
      elements.quoteBanner.textContent = quote;
    }

    // Timer functions
    function toggleTimerModal() {
      elements.timerModal?.classList.toggle('active');
      trackFeature('timer_opened');
    }

    function setTimer(minutes) {
      stopTimer();
      state.timeLeft = minutes * 60;
      updateTimerDisplay();
      trackFeature('timer_preset', minutes);
    }

    function updateTimerDisplay() {
      if (!elements.timerDisplay) return;
      
      const mins = Math.floor(state.timeLeft / 60);
      const secs = state.timeLeft % 60;
      elements.timerDisplay.textContent = 
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function startTimer() {
      if (state.isRunning) return;
      
      state.isRunning = true;
      elements.timerStart.style.display = 'none';
      elements.timerPause.style.display = 'block';
      elements.timerBtn?.classList.add('running');
      
      state.timerInterval = setInterval(() => {
        state.timeLeft--;
        updateTimerDisplay();
        
        if (state.timeLeft <= 0) {
          completeTimer();
        }
      }, 1000);
      
      trackFeature('timer_started');
    }

    function completeTimer() {
      clearInterval(state.timerInterval);
      state.isRunning = false;
      
      state.analytics.focusSessions++;
      state.analytics.totalHours += 25 / 60; // Add 25 min
      saveAnalytics();
      
      elements.timerDisplay.classList.add('rest');
      state.timeLeft = 5 * 60;
      updateTimerDisplay();
      
      elements.timerStart.style.display = 'block';
      elements.timerPause.style.display = 'none';
      elements.timerBtn?.classList.remove('running');
      
      playNotificationSound();
      showToast('🎉 Focus session complete! Take a break.');
      triggerConfetti();
      
      checkStreak();
    }

    function pauseTimer() {
      if (!state.isRunning) return;
      
      clearInterval(state.timerInterval);
      state.isRunning = false;
      elements.timerStart.style.display = 'block';
      elements.timerPause.style.display = 'none';
      elements.timerBtn?.classList.remove('running');
    }

    function stopTimer() {
      clearInterval(state.timerInterval);
      state.isRunning = false;
      elements.timerStart.style.display = 'block';
      elements.timerPause.style.display = 'none';
      elements.timerBtn?.classList.remove('running');
      elements.timerDisplay?.classList.remove('rest');
    }

    function resetTimer() {
      stopTimer();
      state.timeLeft = 25 * 60;
      updateTimerDisplay();
    }

    // Confetti animation (performance optimized)
    function triggerConfetti() {
      if (document.documentElement.classList.contains('reduced-motion')) return;
      
      const canvas = elements.confettiCanvas;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const particles = [];
      const colors = ['#3b82f6', '#8b5cf6', '#f59e0b', '#22c55e', '#ef4444'];
      
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: -10,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * 3 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 4,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10
        });
      }
      
      let frame = 0;
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.rotationSpeed;
          p.vy += 0.1; // gravity
          
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
          
          if (p.y > canvas.height) {
            particles.splice(i, 1);
          }
        });
        
        if (particles.length > 0 && frame < 120) {
          frame++;
          requestAnimationFrame(animate);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
      
      animate();
    }

    // FAB Menu
    function toggleFabMenu() {
      elements.fabMenu?.classList.toggle('open');
      const isOpen = elements.fabMenu?.classList.contains('open');
      elements.fabMain?.setAttribute('aria-expanded', isOpen);
      elements.fabMain.textContent = isOpen ? '×' : '+';
    }

    // Toast notifications
    function showToast(message) {
      const toast = elements.toast;
      if (!toast) return;
      
      toast.textContent = message;
      toast.classList.add('show');
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }

    // Analytics
    function trackFeature(feature, value = 1) {
      state.analytics.featureUsage[feature] = (state.analytics.featureUsage[feature] || 0) + value;
      saveAnalytics();
    }

    function saveAnalytics() {
      saveToStorage(CONFIG.storageKeys.analytics, state.analytics);
    }

    function updateAnalyticsDisplay() {
      const stats = {
        statTotalTasks: state.analytics.totalTasks,
        statTotalHours: Math.round(state.analytics.totalHours * 10) / 10,
        statFocusSessions: state.analytics.focusSessions,
        statWeeksCompleted: state.analytics.weeksCompleted,
        statAvgDaily: Math.round((state.analytics.totalHours * 60) / Math.max(1, getDaysSinceStart())),
        statCurrentStreak: state.streak
      };
      
      Object.entries(stats).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      });
    }

    function getDaysSinceStart() {
      const start = new Date(state.analytics.startDate);
      const now = new Date();
      return Math.max(1, Math.floor((now - start) / 86400000));
    }

    // Export/Import
    function exportData() {
      const data = {
        milestones: {},
        analytics: state.analytics,
        streak: state.streak,
        lastActive: state.lastActive,
        exportedAt: new Date().toISOString()
      };
      
      [1, 2, 3].forEach(m => {
        const key = CONFIG.storageKeys.progress.replace('{}', m);
        data.milestones[m] = JSON.parse(localStorage.getItem(key) || '{}');
      });
      
      downloadJSON(data, `roadmap-backup-${new Date().toISOString().split('T')[0]}.json`);
      trackFeature('data_exported');
      showToast('✅ Data exported successfully!');
    }

    function importData(file) {
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          
          // Import milestones
          if (data.milestones) {
            Object.entries(data.milestones).forEach(([m, tasks]) => {
              const key = CONFIG.storageKeys.progress.replace('{}', m);
              localStorage.setItem(key, JSON.stringify(tasks));
            });
          }
          
          // Import analytics
          if (data.analytics) {
            state.analytics = { ...state.analytics, ...data.analytics };
            saveAnalytics();
          }
          
          updateProgress();
          loadContent();
          trackFeature('data_imported');
          showToast('✅ Data imported successfully!');
        } catch (err) {
          showToast('❌ Failed to import data');
        }
      };
      reader.readAsText(file);
    }

    function downloadJSON(data, filename) {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    function clearAllData() {
      if (!confirm('⚠️ WARNING: This will delete ALL your progress. This cannot be undone.\n\nAre you sure?')) {
        return;
      }
      
      Object.values(CONFIG.storageKeys).forEach(key => {
        if (!key.includes('{}')) {
          localStorage.removeItem(key);
        }
      });
      
      [1, 2, 3].forEach(m => {
        localStorage.removeItem(CONFIG.storageKeys.progress.replace('{}', m));
      });
      
      state.streak = 0;
      state.analytics = { ...state.analytics, totalTasks: 0, totalHours: 0, focusSessions: 0 };
      
      updateStreakDisplay();
      updateProgress();
      loadContent();
      
      showToast('🗑️ All data cleared');
      trackFeature('data_cleared');
    }

    // Theme management
    function toggleTheme() {
      const isLight = document.documentElement.classList.toggle('light-mode');
      saveToStorage(CONFIG.storageKeys.theme, isLight ? 'light' : 'dark');
      trackFeature('theme_changed');
    }

    function toggleReducedMotion() {
      const isReduced = document.documentElement.classList.toggle('reduced-motion');
      saveToStorage(CONFIG.storageKeys.reducedMotion, isReduced);
      trackFeature('reduced_motion_toggled');
    }

    function applyTheme() {
      if (localStorage.getItem(CONFIG.storageKeys.theme) === 'light') {
        document.documentElement.classList.add('light-mode');
      }
    }

    function applyReducedMotion() {
      if (localStorage.getItem(CONFIG.storageKeys.reducedMotion) === 'true') {
        document.documentElement.classList.add('reduced-motion');
      }
    }

    // Keyboard shortcuts
    function setupKeyboardShortcuts() {
      document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + T = Timer
        if ((e.ctrlKey || e.metaKey) && e.key === 't') {
          e.preventDefault();
          toggleTimerModal();
        }
        
        // Escape = Close modals
        if (e.key === 'Escape') {
          document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        }
        
        // Arrow keys for tabs (when focused)
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          const focusedTab = document.activeElement?.closest('.milestone-tab');
          if (focusedTab) {
            e.preventDefault();
            const currentM = parseInt(focusedTab.dataset.milestone);
            const nextM = e.key === 'ArrowRight' 
              ? Math.min(currentM + 1, 3) 
              : Math.max(currentM - 1, 1);
            switchTab(nextM);
            elements[`tab${nextM}`]?.focus();
          }
        }
      });
    }

    // Screen reader announcements
    function announce(message) {
      if (elements.announce) {
        elements.announce.textContent = message;
      }
    }

    // Sound notification (using Web Audio API, no external files)
    function playNotificationSound() {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.5);
      } catch (e) {
        // Silent fail - not critical
      }
    }

    // Event listeners
    function setupEventListeners() {
      // Tabs
      document.querySelectorAll('.milestone-tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(parseInt(tab.dataset.milestone)));
      });

      // Bottom nav
      elements.bottomNav1?.addEventListener('click', () => switchTab(1));
      elements.bottomNavTimer?.addEventListener('click', toggleTimerModal);
      elements.bottomNavSettings?.addEventListener('click', toggleSettingsModal);

      // Timer
      elements.timerBtn?.addEventListener('click', toggleTimerModal);
      elements.timerClose?.addEventListener('click', toggleTimerModal);
      elements.timerStart?.addEventListener('click', startTimer);
      elements.timerPause?.addEventListener('click', pauseTimer);
      elements.timerReset?.addEventListener('click', resetTimer);
      
      document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => setTimer(parseInt(btn.dataset.minutes)));
      });

      // Settings
      elements.settingsBtn?.addEventListener('click', toggleSettingsModal);
      elements.settingsClose?.addEventListener('click', toggleSettingsModal);
      elements.exportBtn?.addEventListener('click', exportData);
      elements.importBtn?.addEventListener('click', () => elements.importFile?.click());
      elements.importFile?.addEventListener('change', (e) => importData(e.target.files[0]));
      elements.clearBtn?.addEventListener('click', clearAllData);
      elements.analyticsBtn?.addEventListener('click', () => {
        updateAnalyticsDisplay();
        elements.analyticsModal?.classList.add('active');
      });
      elements.analyticsClose?.addEventListener('click', () => elements.analyticsModal?.classList.remove('active'));
      document.getElementById('exportAnalyticsBtn')?.addEventListener('click', () => {
        downloadJSON(state.analytics, `analytics-${new Date().toISOString().split('T')[0]}.json`);
      });

      // Toggles
      elements.themeToggle?.addEventListener('click', toggleTheme);
      elements.reducedMotionToggle?.addEventListener('click', toggleReducedMotion);

      // FAB
      elements.fabMain?.addEventListener('click', toggleFabMenu);
      document.getElementById('fabMarkDone')?.addEventListener('click', () => {
        toggleFabMenu();
        showToast('✓ Task marked complete!');
      });
      document.getElementById('fabAddNote')?.addEventListener('click', () => {
        toggleFabMenu();
        showToast('📝 Note added!');
      });
      document.getElementById('fabViewAnalytics')?.addEventListener('click', () => {
        toggleFabMenu();
        updateAnalyticsDisplay();
        elements.analyticsModal?.classList.add('active');
      });

      // Hash change
      window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        if (hash.startsWith('#milestone-')) {
          const num = parseInt(hash.split('-')[1]);
          if (num !== state.currentMilestone) {
            switchTab(num);
          }
        }
      });

      // Close modals on outside click
      document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.remove('active');
          }
        });
      });

      // Visibility change for analytics
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          saveAnalytics();
        }
      });
    }

    // Job Search Tracker Functions
      function renderJobSearchTracker() {
        const tracker = document.getElementById('jobSearchTracker')
        if (!tracker) return
        
        // Initialize jobSearch if it doesn't exist
        if (!state.jobSearch) {
          state.jobSearch = {
            applications: 0,
            interviews: 0,
            offers: 0,
            targetSalary: 130000,
            lastUpdated: null
          }
        }
        
        document.getElementById('jstApplications').value = state.jobSearch.applications || 0
        document.getElementById('jstInterviews').value = state.jobSearch.interviews || 0
        document.getElementById('jstOffers').value = state.jobSearch.offers || 0
        document.getElementById('jstSalary').value = state.jobSearch.targetSalary || 130000
      }

      function updateJobSearchMetric(field, value) {
        if (!state.jobSearch) {
          state.jobSearch = {
            applications: 0,
            interviews: 0,
            offers: 0,
            targetSalary: 130000,
            lastUpdated: null
          }
        }
        
        const numValue = parseInt(value, 10) || 0
        state.jobSearch[field] = Math.max(0, numValue) // Prevent negative numbers
        state.jobSearch.lastUpdated = new Date().toISOString()
        saveProgress()
      }

      function applyToThreeJobs() {
        if (!state.jobSearch) {
          state.jobSearch = {
            applications: 0,
            interviews: 0,
            offers: 0,
            targetSalary: 130000,
            lastUpdated: null
          }
        }
        
        state.jobSearch.applications = (state.jobSearch.applications || 0) + 3
        state.jobSearch.lastUpdated = new Date().toISOString()
        saveProgress()
        renderJobSearchTracker()
        
        // Show success message
        const toast = document.createElement('div')
        toast.textContent = '3 applications added! Keep going! 🚀'
        toast.style.cssText = `
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent-green);
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          z-index: 9999;
          animation: slideUp 0.3s ease;
        `
        document.body.appendChild(toast)
        setTimeout(() => toast.remove(), 3000)
      }

      // Add event listeners for job search tracker with debouncing
      let jobSearchDebounceTimer
      function setupJobSearchListeners() {
        const fields = ['jstApplications', 'jstInterviews', 'jstOffers', 'jstSalary']
        const fieldNames = ['applications', 'interviews', 'offers', 'targetSalary']
        
        fields.forEach((id, index) => {
          const input = document.getElementById(id)
          if (input) {
            input.addEventListener('input', (e) => {
              clearTimeout(jobSearchDebounceTimer)
              jobSearchDebounceTimer = setTimeout(() => {
                updateJobSearchMetric(fieldNames[index], e.target.value)
              }, 300)
            })
          }
        })
        
        const applyButton = document.getElementById('jstApplyButton')
        if (applyButton) {
          applyButton.addEventListener('click', applyToThreeJobs)
        }
      }

      // Initialize everything

    // Initialize on load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }

    // Service Worker registration (optional, for offline support)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {
        // Silent fail - not critical
      });
    }
  </script>
</body>
</html>