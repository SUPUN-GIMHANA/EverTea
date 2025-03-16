// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";

// Firebase configuration (available in my firestore project settings)
const firebaseConfig = {
    apiKey: "AIzaSyARtdNgB1cEAVIu5AE1bFqEnPBfQMk4AfE",
    authDomain: "growthtracker-13c04.firebaseapp.com",
    projectId: "growthtracker-13c04",
    storageBucket: "growthtracker-13c04.firebasestorage.app",
    messagingSenderId: "297562593421",
    appId: "1:297562593421:web:606afb540d63a7b09e2ac4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with the new offline persistence approach
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

export { db };
