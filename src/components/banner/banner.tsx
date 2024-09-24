import logo from "../../assets/icons/companyLogo.png";
import React from "react";
import AuthButtons from "../authButtons/authButtons";

function Banner() {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="">
          <img src={logo} alt="Logo" className="w-15 h-6 mb-0 mt-0" />
        </div>

        {/* Login and Sign Up Auth */}
       <AuthButtons />
      </div>
    </div>
  );
}

export default Banner;
