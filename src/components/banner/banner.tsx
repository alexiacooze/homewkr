import logo from "../../assets/icons/companyLogo.png";
import React from "react";

function Banner() {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="">
          <img src={logo} alt="Logo" className="w-15 h-6 mb-0 mt-0" />
        </div>

        {/* Login and Sign Up on the right */}
        <div className="flex space-x-4 text-black">
          <button className="text-sm font-semibold  hover:text-gray-700">
            Login
          </button>
          <button className="text-sm font-semibold px-4 py-1 border-2 border-red-300 text-black bg-white hover:text-gray-700 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
