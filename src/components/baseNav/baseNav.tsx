import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-8">
          <Link to="/contact" className="text-white text-sm font-semibold">
            Contact
          </Link>
          <Link to="/client" className="text-white text-sm font-semibold">
            Client
          </Link>
          <Link
            to="/professionals"
            className="text-white text-sm font-semibold"
          >
            Professionals
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
