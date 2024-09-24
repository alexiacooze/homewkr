import React from "react";
import logo from "../../assets/images/landing.png";

function Landing() {
  const services = [
    "Nails",
    "Hair",
    "Massage",
    "Body Treatments",
    "Wellness",
    "Makeup",
    "Facial Treatments",
    "Physiotherapy",
  ];

  return (
    <div className="py-10">
      {/* Header Section */}
      <div className="flex pl-40 pr-20 flex-col md:flex-row justify-between items-center bg-white text-gray-700 p-8 mb-8">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            A Space That Encourages Independence and Celebrates Convenience.
          </h1>
          <p className="text-xl mb-7">Removing barriers, connecting people.</p>
          <div className="w-full">
            <button className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-400">
              Find a Provider
            </button>
          </div>
        </div>
        <img
          src={logo}
          alt="Logo"
          className="w-50 h-auto rounded ml-4" // Round the photo edges
        />
      </div>

      {/* Services section */}
      <div className="bg-gray-100 pb-20 pt-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Explore Services{" "}
        </h2>
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-7">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-4 rounded-lg shadow-md flex justify-center items-center text-center"
            >
              <h2 className="text-xl font-semibold text-gray-800">{service}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
