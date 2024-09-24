import React from "react";
import Banner from "./components/banner/banner";
import Landing from "./components/landing/landing";
import BaseNav from "./components/baseNav/baseNav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Banner />
        <Landing />
        <BaseNav />
      </Router>
    </div>
  );
}

export default App;
