import React, { useState, useEffect } from "react";
import { getAuth, updateProfile, User } from "firebase/auth";

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setDisplayName(currentUser.displayName || "");
      setPhotoURL(currentUser.photoURL || "");
    }
  }, []);

  const handleSave = () => {
    if (user) {
      updateProfile(user, {
        displayName,
        photoURL,
      })
        .then(() => {
          setIsEditing(false);
          // Optionally, you can refresh the user data here
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    }
  };

  return (
    <div className="profile-container p-4">
      {user ? (
        <div className="max-w-md bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
          {isEditing ? (
            <div className="space-y-4">
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Display Name"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Photo URL"
                className="w-full px-4 py-2 border rounded"
              />
              <div className="flex space-x-4">
                <button
                  onClick={handleSave}
                  className="text-sm font-semibold px-4 py-2 border-2 border-green-300 text-black bg-white hover:text-gray-700 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-sm font-semibold px-4 py-2 border-2 border-red-300 text-black bg-white hover:text-gray-700 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <img
                src={user.photoURL || ""}
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
              <p className="text-lg font-semibold">Name: {user.displayName}</p>
              <p className="text-lg font-semibold">Email: {user.email}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="text-sm font-semibold px-4 py-2 border-2 border-red-300 text-black bg-white hover:text-gray-700 rounded"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
