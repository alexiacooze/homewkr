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
import AuthButtons from "./components/authButtons/authButtons";
import UserProfile from "./components/userProfile/userProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Banner />
        <BaseNav />
        <Routes>
          <Route path="/login" element={<AuthButtons />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
