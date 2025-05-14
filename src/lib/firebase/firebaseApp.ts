import { initializeApp, getApps } from 'firebase/app';
import { firebaseConfig } from './config';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = initializeFirestore(firebaseApp, { experimentalAutoDetectLongPolling: true });
export const storage = getStorage(firebaseApp);