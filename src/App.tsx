import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Banner from "./components/banner/banner";
import Landing from "./components/landing/landing";
import BaseNav from "./components/baseNav/baseNav";
import AuthButtons from "./components/authentication/authButtons";
import UserProfile from "./components/userProfile/userProfile";
import SignUpForm from "./components/signUpForm/SignUpForm";
import { useAuth } from "./components/state/authContext"; // Correct import

function App() {
  const { user } = useAuth(); // Use user state to check authentication

  return (
    <div className="App">
      <Router>
        <Banner />
        <BaseNav />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<AuthButtons />} />
          <Route path="/signup" element={<SignUpForm />} />

          {/* Protected routes */}
          <Route
            path="/profile"
            element={user ? <UserProfile /> : <Navigate to="/login" />}
          />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
