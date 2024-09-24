// src/firebase/auth.tsx
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "./firebase";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = (navigate: (path: string) => void) => {
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      // Redirect to profile page after successful login
      navigate("/profile");
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
    });
};

export const logout = (navigate: (path: string) => void) => {
  return signOut(auth).then(() => {
    // Redirect to landing page after logout
    navigate("/");
  });
};

export const listenToAuthState = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
