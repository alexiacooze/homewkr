import React, { useEffect, useState } from "react";
import { useAuth } from "../state/authContext";
import { signInWithEmailAndPassword } from "firebase/auth"; // Ensure this import exists
import { auth } from "../../firebase/firebase"; // Import auth instance
import { useNavigate } from "react-router-dom";

const AuthButtons: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Firebase login
      setError(null);
      navigate("/profile"); // Redirect to profile after successful login
    } catch (err: any) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div>
      {user ? (
        // If logged in, show the logout button
        <button
          className="text-sm font-semibold hover:text-gray-700"
          onClick={() => {
            logout();
            navigate("/"); // Redirect to landing after logout
          }}
        >
          Logout
        </button>
      ) : (
        // If not logged in, show login form
        <>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="border p-2 mb-2"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="border p-2 mb-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Login
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
          <button
            className="text-sm font-semibold px-4 py-1 border-2 border-red-300 text-black bg-white hover:text-gray-700 rounded"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
