// src/firebase/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEqHIj1boqllT5qM_LkCiE3SBjQum3jp4",
  authDomain: "homewkr-1018c.firebaseapp.com",
  projectId: "homewkr-1018c",
  storageBucket: "homewkr-1018c.appspot.com",
  messagingSenderId: "731109529098",
  appId: "1:731109529098:web:94ff6ccb0cb295004031f3",
  measurementId: "G-2M686RN6NV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { app, analytics, auth, db };
