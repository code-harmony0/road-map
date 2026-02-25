# Cloud Sync Setup Instructions

## Overview
The roadmap now supports cloud synchronization using either Firebase or Supabase. This replaces the vulnerable LocalStorage-only system with real-time sync across devices.

## Quick Setup

### Option 1: Supabase (Recommended)
1. Create a free Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Run this SQL in the Supabase SQL Editor:

```sql
-- Create user_progress table
CREATE TABLE user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  state JSONB NOT NULL,
  last_sync TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  version TEXT DEFAULT '1.0.0',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for performance
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);

-- Enable RLS (Row Level Security)
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to access their own data
CREATE POLICY "Users can access own progress" ON user_progress
  FOR ALL USING (auth.uid()::text = user_id);

-- Allow anonymous users to insert their own data
CREATE POLICY "Users can insert own progress" ON user_progress
  FOR INSERT WITH CHECK (auth.uid()::text = user_id);

-- Allow anonymous users to update their own data
CREATE POLICY "Users can update own progress" ON user_progress
  FOR UPDATE USING (auth.uid()::text = user_id);
```

4. Get your project URL and anon key from Settings → API
5. Update the `initializeSupabase()` function in `cloud-sync.ts`:

```typescript
const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm');
this.client = createClient('YOUR_PROJECT_URL', 'YOUR_ANON_KEY');
```

### Option 2: Firebase
1. Create a Firebase project at [console.firebase.com](https://console.firebase.com)
2. Enable Firestore Database
3. Create a `users` collection
4. Allow anonymous authentication in Authentication settings
5. Get your config from Project Settings
6. Update the `initializeFirebase()` function in `cloud-sync.ts`

## Features

### Real-time Sync
- Automatic sync every 30 seconds when online
- Instant sync when changes are made
- Conflict resolution (local takes precedence)

### Offline Support
- Works offline with LocalStorage fallback
- Syncs when connection is restored
- No data loss during network issues

### Cross-device Access
- Sign in anonymously on any device
- Your progress follows you
- No account required

### Security
- Anonymous authentication (no personal data needed)
- Row Level Security in Supabase
- Firestore rules in Firebase

## File Structure

```
├── cloud-sync.ts      # Service layer for cloud sync
├── app-with-cloud.ts # Main app with cloud integration
├── types.ts         # TypeScript interfaces
└── index.html       # UI with cloud sync controls
```

## Usage

1. Open the roadmap in your browser
2. Click "Sign In" in the top bar
3. Your data will automatically sync to the cloud
4. Access from any device - just sign in with anonymous session

## Migration from LocalStorage

When you first sign in:
- Local data is merged with cloud data
- Local data takes precedence for conflicts
- Backup is created automatically

## Troubleshooting

### "Cloud sync not available"
- Check your internet connection
- Verify API keys are correctly configured
- Check browser console for errors

### "Failed to sign in"
- Verify API keys are valid
- Check if anonymous auth is enabled
- Ensure CORS is configured correctly

### Sync conflicts
- Local data always takes precedence
- Manual export/import available for resolution
- Automatic backup created before sync

## Development

To switch between providers:
```typescript
// Use Supabase
cloudSync = createCloudSyncService('supabase');

// Use Firebase  
cloudSync = createCloudSyncService('firebase');
```

The system is designed to be provider-agnostic and easily extensible.
