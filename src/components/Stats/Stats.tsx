import React from "react";

const Stats: React.FC = () => {
  return (
    <div className="flex flex-row justify-center space-x-8 p-4 w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl">
      <div className="text-center border-r-2 border-[#2C2C2C] pr-4 sm:pr-6 md:pr-8">
        <p className="text-xs sm:text-sm md:text-base font-bold text-[#2C2C2C]">1,000+</p>
        <p className="text-xs sm:text-sm md:text-base text-[#2C2C2C]">Questions</p>
      </div>
      <div className="text-center border-r-2 border-[#2C2C2C] pr-4 sm:pr-6 md:pr-8">
        <p className="text-xs sm:text-sm md:text-base font-bold text-[#2C2C2C]">1.2k+</p>
        <p className="text-xs sm:text-sm md:text-base text-[#2C2C2C]">Members</p>
      </div>
      <div className="text-center">
        <p className="text-xs sm:text-sm md:text-base font-bold text-[#2C2C2C]">24 Hours</p>
        <p className="text-xs sm:text-sm md:text-base text-[#2C2C2C]">Response Time</p>
      </div>
    </div>
  );
};

export default Stats;
