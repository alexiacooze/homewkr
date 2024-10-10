import React from "react";
import { useAuth } from "../state/authContext"; // Import the useAuth hook from AuthContext

const UserProfile: React.FC = () => {
  const { user } = useAuth(); // Get the current user from AuthContext

  return (
    <div className="profile-container p-4">
      {user ? (
        <div className="max-w-md bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
          <p className="text-lg font-semibold">
            Name: {user.displayName || "Anonymous"}
          </p>
          <p className="text-lg font-semibold">Email: {user.email}</p>
        </div>
      ) : (
        <p>You need to log in to view this page.</p>
      )}
    </div>
  );
};

export default UserProfile;
