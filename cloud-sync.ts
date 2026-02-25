// Cloud sync service layer for roadmap progress
import type { ProgressState, RoadmapData } from './types';

export interface CloudSyncService {
  signIn(): Promise<void>;
  signOut(): Promise<void>;
  syncState(state: ProgressState): Promise<void>;
  getState(): Promise<ProgressState | null>;
  onStateChange(callback: (state: ProgressState) => void): void;
  isSignedIn(): boolean;
}

// Firebase implementation
export class FirebaseSyncService implements CloudSyncService {
  private db: any;
  private auth: any;
  private userId: string | null = null;
  private stateChangeListener: ((state: ProgressState) => void) | null = null;

  constructor() {
    // Initialize Firebase (would be loaded from CDN)
    this.initializeFirebase();
  }

  private async initializeFirebase(): Promise<void> {
    // This would be replaced with actual Firebase initialization
    // const firebase = await import('https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js');
    // const { getAuth, signInAnonymously, signOut } = await import('https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js');
    // const { getFirestore, doc, setDoc, getDoc, onSnapshot } = await import('https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js');
    
    // For now, mock implementation
    this.db = { doc: () => {}, setDoc: () => {}, getDoc: () => {}, onSnapshot: () => {} };
    this.auth = { signInAnonymously: () => {}, signOut: () => {}, onAuthStateChanged: () => {} };
  }

  async signIn(): Promise<void> {
    try {
      const result = await this.auth.signInAnonymously();
      this.userId = result.user.uid;
      console.log('Signed in anonymously:', this.userId);
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    }
  }

  async signOut(): Promise<void> {
    try {
      await this.auth.signOut();
      this.userId = null;
      console.log('Signed out');
    } catch (error) {
      console.error('Sign out failed:', error);
      throw error;
    }
  }

  async syncState(state: ProgressState): Promise<void> {
    if (!this.userId) {
      throw new Error('User not signed in');
    }

    try {
      const userDoc = this.db.doc(this.db.getFirestore(), 'users', this.userId);
      await this.db.setDoc(userDoc, {
        ...state,
        lastSync: new Date().toISOString(),
        version: '1.0.0'
      });
      console.log('State synced to cloud');
    } catch (error) {
      console.error('Sync failed:', error);
      throw error;
    }
  }

  async getState(): Promise<ProgressState | null> {
    if (!this.userId) {
      return null;
    }

    try {
      const userDoc = this.db.doc(this.db.getFirestore(), 'users', this.userId);
      const docSnap = await this.db.getDoc(userDoc);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        // Remove cloud-specific fields
        const { lastSync, version, ...state } = data;
        console.log('State loaded from cloud');
        return state as ProgressState;
      }
      
      return null;
    } catch (error) {
      console.error('Load state failed:', error);
      return null;
    }
  }

  onStateChange(callback: (state: ProgressState) => void): void {
    this.stateChangeListener = callback;
    
    if (!this.userId) return;

    const userDoc = this.db.doc(this.db.getFirestore(), 'users', this.userId);
    this.db.onSnapshot(userDoc, (doc: any) => {
      if (doc.exists()) {
        const data = doc.data();
        const { lastSync, version, ...state } = data;
        callback(state as ProgressState);
      }
    });
  }

  isSignedIn(): boolean {
    return this.userId !== null;
  }

  getUserId(): string | null {
    return this.userId;
  }
}

// Supabase implementation
export class SupabaseSyncService implements CloudSyncService {
  private client: any;
  private userId: string | null = null;
  private stateChangeListener: ((state: ProgressState) => void) | null = null;

  constructor() {
    this.initializeSupabase();
  }

  private async initializeSupabase(): Promise<void> {
    // This would be replaced with actual Supabase initialization
    // const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm');
    // this.client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
    
    // For now, mock implementation
    this.client = {
      auth: { signInAnonymously: () => {}, signOut: () => {}, onAuthStateChange: () => {} },
      from: () => ({ upsert: () => {}, select: () => {}, eq: () => {}, single: () => {} })
    };
  }

  async signIn(): Promise<void> {
    try {
      const { data, error } = await this.client.auth.signInAnonymously();
      if (error) throw error;
      
      this.userId = data.user?.id || null;
      console.log('Signed in anonymously:', this.userId);
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    }
  }

  async signOut(): Promise<void> {
    try {
      const { error } = await this.client.auth.signOut();
      if (error) throw error;
      
      this.userId = null;
      console.log('Signed out');
    } catch (error) {
      console.error('Sign out failed:', error);
      throw error;
    }
  }

  async syncState(state: ProgressState): Promise<void> {
    if (!this.userId) {
      throw new Error('User not signed in');
    }

    try {
      const { error } = await this.client
        .from('user_progress')
        .upsert({
          user_id: this.userId,
          state: state,
          last_sync: new Date().toISOString(),
          version: '1.0.0'
        });

      if (error) throw error;
      console.log('State synced to cloud');
    } catch (error) {
      console.error('Sync failed:', error);
      throw error;
    }
  }

  async getState(): Promise<ProgressState | null> {
    if (!this.userId) {
      return null;
    }

    try {
      const { data, error } = await this.client
        .from('user_progress')
        .select('state')
        .eq('user_id', this.userId)
        .single();

      if (error) throw error;
      if (data && data.state) {
        console.log('State loaded from cloud');
        return data.state as ProgressState;
      }

      return null;
    } catch (error) {
      console.error('Load state failed:', error);
      return null;
    }
  }

  onStateChange(callback: (state: ProgressState) => void): void {
    this.stateChangeListener = callback;
    
    if (!this.userId) return;

    // Real-time subscription
    const subscription = this.client
      .from('user_progress')
      .on('UPDATE', (payload: any) => {
        if (payload.new?.state) {
          callback(payload.new.state as ProgressState);
        }
      })
      .subscribe();

    // Store subscription for cleanup
    (this as any).subscription = subscription;
  }

  isSignedIn(): boolean {
    return this.userId !== null;
  }

  getUserId(): string | null {
    return this.userId;
  }

  async cleanup(): Promise<void> {
    if ((this as any).subscription) {
      await (this as any).subscription.unsubscribe();
    }
  }
}

// Cloud sync manager
export class CloudSyncManager {
  private service: CloudSyncService;
  private localState: ProgressState | null = null;
  private syncInterval: number | null = null;
  private isOnline: boolean = navigator.onLine;

  constructor(service: CloudSyncService) {
    this.service = service;
    this.setupNetworkListeners();
  }

  async initialize(): Promise<void> {
    try {
      // Try to sign in anonymously
      await this.service.signIn();
      
      // Load cloud state
      const cloudState = await this.service.getState();
      
      if (cloudState) {
        // Merge with local state (local takes precedence for recent changes)
        const localState = this.loadLocalState();
        this.localState = this.mergeStates(localState, cloudState);
        
        // Save merged state locally
        this.saveLocalState(this.localState);
        
        // Sync merged state to cloud
        await this.service.syncState(this.localState);
      } else {
        // No cloud state, use local
        this.localState = this.loadLocalState();
        
        // Sync local state to cloud
        if (this.localState) {
          await this.service.syncState(this.localState);
        }
      }
      
      // Setup real-time sync
      this.setupRealtimeSync();
      
      // Setup periodic sync
      this.setupPeriodicSync();
      
      console.log('Cloud sync initialized');
    } catch (error) {
      console.error('Cloud sync initialization failed:', error);
      // Fallback to local-only mode
      this.localState = this.loadLocalState();
    }
  }

  private loadLocalState(): ProgressState | null {
    try {
      const raw = localStorage.getItem('rn_roadmap_v4');
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.error('Failed to load local state:', error);
      return null;
    }
  }

  private saveLocalState(state: ProgressState): void {
    try {
      localStorage.setItem('rn_roadmap_v4', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save local state:', error);
    }
  }

  private mergeStates(local: ProgressState | null, cloud: ProgressState): ProgressState {
    if (!local) return cloud;
    
    // Simple merge strategy: local takes precedence for most fields
    // More sophisticated merge logic could be added here
    return {
      ...cloud,
      ...local,
      // Keep the most recent timestamps
      lastStudyDay: local.lastStudyDay || cloud.lastStudyDay,
      sessionsDate: local.sessionsDate || cloud.sessionsDate,
      // Merge custom tasks and notes
      customTasks: { ...cloud.customTasks, ...local.customTasks },
      notes: { ...cloud.notes, ...local.notes }
    };
  }

  private setupRealtimeSync(): void {
    this.service.onStateChange((cloudState: ProgressState) => {
      if (this.localState) {
        const merged = this.mergeStates(this.localState, cloudState);
        this.localState = merged;
        this.saveLocalState(merged);
        
        // Trigger UI update
        this.notifyStateChange(merged);
      }
    });
  }

  private setupPeriodicSync(): void {
    // Sync every 30 seconds when online
    this.syncInterval = window.setInterval(async () => {
      if (this.isOnline && this.localState && this.service.isSignedIn()) {
        try {
          await this.service.syncState(this.localState);
        } catch (error) {
          console.error('Periodic sync failed:', error);
        }
      }
    }, 30000);
  }

  private setupNetworkListeners(): void {
    window.addEventListener('online', () => {
      this.isOnline = true;
      console.log('Network restored, enabling sync');
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      console.log('Network lost, disabling sync');
    });
  }

  private notifyStateChange(state: ProgressState): void {
    // This would trigger UI updates
    window.dispatchEvent(new CustomEvent('stateChange', { detail: state }));
  }

  async updateState(updates: Partial<ProgressState>): Promise<void> {
    if (!this.localState) return;

    // Update local state
    this.localState = { ...this.localState, ...updates };
    this.saveLocalState(this.localState);

    // Sync to cloud if online
    if (this.isOnline && this.service.isSignedIn()) {
      try {
        await this.service.syncState(this.localState);
      } catch (error) {
        console.error('Sync failed, will retry later:', error);
      }
    }

    // Notify UI
    this.notifyStateChange(this.localState);
  }

  getState(): ProgressState | null {
    return this.localState;
  }

  async signOut(): Promise<void> {
    // Clear periodic sync
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }

    // Sign out from service
    await this.service.signOut();
    
    // Clear local state
    localStorage.removeItem('rn_roadmap_v4');
    this.localState = null;
    
    console.log('Signed out and cleared data');
  }

  async cleanup(): Promise<void> {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
    }
    
    if ('cleanup' in this.service) {
      await (this.service as any).cleanup();
    }
  }
}

// Export factory function
export function createCloudSyncService(provider: 'firebase' | 'supabase'): CloudSyncManager {
  const service = provider === 'firebase' 
    ? new FirebaseSyncService()
    : new SupabaseSyncService();
    
  return new CloudSyncManager(service);
}
