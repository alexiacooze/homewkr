import React, { useState } from "react";
import { useAuth } from "../state/authContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/companyLogo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase"; // Firebase config

const Banner: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // State to control the visibility of the login modal
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
      setIsLoginOpen(false); // Close the modal after successful login
      navigate("/profile"); // Redirect to the profile page
    } catch (err: any) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="w-full bg-white shadow-md">
      <div className="mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="">
          <img src={logo} alt="Logo" className="w-15 h-6 mb-0 mt-0" />
        </div>

        {/* Auth buttons on the right */}
        <div className="flex space-x-4 text-black">
          {user ? (
            <button
              className="text-sm font-semibold hover:text-gray-700"
              onClick={() => {
                logout();
                navigate("/"); // Redirect to the landing page after logout
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="text-sm font-semibold hover:text-gray-700"
                onClick={() => setIsLoginOpen(true)} // Open the modal when clicking login
              >
                Login
              </button>
              <button
                className="text-sm font-semibold px-4 py-1 border-2 border-red-300 text-black bg-white hover:text-gray-700 rounded"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              onClick={() => setIsLoginOpen(false)} // Close modal on X click
              className="absolute top-2 right-2 text-gray-700"
            >
              X
            </button>
            <h2 className="text-lg font-semibold mb-4">Log In</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border p-2 mb-2 w-full"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="border p-2 mb-4 w-full"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded w-full"
              >
                Login
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
