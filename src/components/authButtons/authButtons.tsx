import React, { useEffect, useState } from "react";
import {
  signInWithGoogle,
  logout,
  listenToAuthState,
} from "../../firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface User {
  uid: string;
  email: string | null;
}

const AuthButtons: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = listenToAuthState((currentUser: User | null) => {
      if (currentUser) {
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
        });
        // Redirect to profile page if user is logged in
        navigate("/profile");
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="flex space-x-4 text-black">
      {user ? (
        <button
          className="text-sm font-semibold hover:text-gray-700"
          onClick={() => logout(navigate)}
        >
          Logout
        </button>
      ) : (
        <>
          <button
            className="text-sm font-semibold hover:text-gray-700"
            onClick={() => signInWithGoogle(navigate)}
          >
            Login
          </button>
          <button
            className="text-sm font-semibold px-4 py-1 border-2 border-red-300 text-black bg-white hover:text-gray-700 rounded"
            onClick={() => signInWithGoogle(navigate)}
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
