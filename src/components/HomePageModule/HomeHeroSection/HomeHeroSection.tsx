import Image from "next/image";
import React from "react";

function HomeHeroSection() {
  return (
    <div className="bg-blue-600 pt-16 pb-5 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-[609px] mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-[48px] font-bold text-white mb-4 leading-snug relative">
          <span className="relative z-10">
            Colleges tailored to your unique needs and dreams
          </span>
          <span className="absolute inset-0 bg-white opacity-40 blur-[40px] -z-10"></span>
        </h1>
        <p className="text-gray-300 text-lg mb-8 sm:px-20">
          Find your favorite course and study anywhere, anytime with the best
          mentor
        </p>
        <div className="max-w-xl mx-auto">
          <div className="flex rounded-md shadow-sm relative">
            <input
              type="text"
              className="flex-1 rounded-l-md h-[42px] px-4 border-0 focus:ring-0 focus:outline-none rounded-xl"
              placeholder="Search for colleges, courses etc."
            />
            <button
              type="button"
              className="inline-flex items-center px-7 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 absolute top-[2px] right-1"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSection;
