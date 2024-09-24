// src/firebase/firebaseConfig.tsx
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

export { firebaseConfig, app, analytics };
