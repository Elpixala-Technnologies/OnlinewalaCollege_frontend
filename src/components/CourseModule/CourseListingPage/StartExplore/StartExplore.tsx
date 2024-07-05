import React from "react";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import TopAll from "@/components/TopAll/TopAll";
import CourseGrid from "./CourseGrid";

const StartExplore = () => {
  return (
    <>
      <div className="bg-blue-400 p-5">
        <div className="max-w-[1450px] mx-auto p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 sm:px-14 px-5">
          <h1 className="text-white font-bold text-lg sm:text-xl lg:text-2xl sm:w-3/5">
            Explore courses designed to match your ambitions and open the door
            to limitless growth and success.
          </h1>
          <button className="bg-white text-black px-4 py-2 text-sm sm:text-lg font-medium rounded-md">
            Start Exploring
          </button>
        </div>
      </div>
      <div className="bg-blue-50">
        <CourseGrid />
        <div className="px-5 py-10 lg:px-20">
          <TopAll />
        </div>
      </div>
    </>
  );
};

export default StartExplore;
