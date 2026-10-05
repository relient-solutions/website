import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaIxVag2qL2CZYUvr0e0KN8pAWxN7zavk",
  authDomain: "relient-b9866.firebaseapp.com",
  projectId: "relient-b9866",
  storageBucket: "relient-b9866.firebasestorage.app",
  messagingSenderId: "1065034385230",
  appId: "1:1065034385230:web:88786d726c0612d8d5001f",
  measurementId: "G-JQB06ZSL0V"
};

// Initialize Firebase App singleton
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

/**
 * Saves client inquiry directly to Firestore 'inquiries' collection
 * @param {Object} data 
 * @returns {Promise<{success: boolean, id?: string, error?: any}>}
 */
export async function saveInquiryToFirebase(data) {
  try {
    const docRef = await addDoc(collection(db, 'inquiries'), {
      ...data,
      timestamp: new Date().toISOString(),
      firestoreCreatedAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Firebase Firestore error:', error);
    return { success: false, error };
  }
}
