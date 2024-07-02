import React from "react";
import Image from "next/image";
import HomeImage from "@/assets/images/Group 39816.png";
import vectorLine from "@/assets/images/Vector 6.png";

const HeroSection: React.FC = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 p-4">
          <h1 className="text-[28px] md:text-5xl md:font-bold font-extrabold mb-2">
            Discover our{" "}
            <span className="relative inline-block md:text-[54px]">
              ONLINE{" "}
              <Image
                src={vectorLine}
                alt=""
                width={150}
                height={150}
                className="w-full absolute"
              />
            </span>
          </h1>
          <h1 className="text-[28px] md:text-5xl md:font-bold font-extrabold mb-4 md:mt-5">
            learning programs
          </h1>
          <p className="text-gray-600 mb-6">
            Improve your MBA Journey with us and become the best
          </p>
          <div className="flex items-center mb-6 lg:w-[528px]">
            <div className="relative flex-grow mr-2">
              <input
                type="text"
                placeholder="Select courses"
                className="w-full py-3 px-4 bg-gray-100 rounded-md"
              />
            </div>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 font-bold">
              Search
            </button>
          </div>
          <div className="flex sm:justify-start sm:gap-5 justify-between items-center">
            <button className="bg-blue-500 text-white md:py-4 md:text-xl font-medium md:px-6 px-3 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Explore courses
            </button>
            <button className="border border-blue-500 text-blue-500 md:py-4 md:text-xl font-medium md:px-6 px-3 py-2 rounded-full hover:bg-blue-50 transition duration-300">
              How it Works
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="flex justify-center items-center">
            <Image
              src={HomeImage}
              alt="Online learning illustration"
              width={500}
              height={500}
              className="lg:w-[80%] sm:w-[90%] w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
