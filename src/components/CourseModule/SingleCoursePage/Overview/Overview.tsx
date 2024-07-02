import React from "react";
import AboutMBA from "./AboutMBA";
import WhatIsMBA from "./WhatIsMBA";
import MBAHighlights from "./highlightsData";
import Collections from "./Collections/Collections";
import MBAInfo from "./MBAInfo/MBAInfo";
import FeatureCollegeLogo from "./FeatureCollegeLogo/FeatureCollegeLogo";
import PopularCollegeCard from "@/components/CollegeCard/PopularCollegeCard";
import CompareColleges from "@/components/SingleCollege/CompareColleges/CompareColleges";

function Overview() {
  return (
    <div className="">
      <div className="p-4 bg-white rounded-lg shadow-md max-w-[1332px] mx-auto">
        <AboutMBA />
        <WhatIsMBA />
        <MBAHighlights />
      </div>
      <div className=" bg-white rounded-lg shadow-md mt-5 border-2 border-blue-400 max-w-[1332px] mx-auto">
        <Collections />
      </div>
      <div className="max-w-[1332px] mx-auto">
        <MBAInfo />
      </div>
      <div className="bg-blue-300 rounded-lg shadow-md mt-5">
        <FeatureCollegeLogo />
      </div>
      <div className="max-w-[1332px] mx-auto bg-white p-4 rounded-lg shadow-md mt-5">
        <WhatIsMBA />
      </div>
      <div className="max-w-[1332px] mx-auto bg-white p-4 rounded-lg shadow-md mt-5">
        <MBAHighlights />
      </div>
      <div className="max-w-[1332px] mx-auto bg-white p-4 rounded-lg shadow-md mt-5">
        <PopularCollegeCard />
      </div>

      <div className=" bg-white rounded-lg shadow-md mt-40 border-2 border-blue-400 max-w-[1332px] mx-auto">
        <Collections />
      </div>

      <div className="max-w-[1332px] mx-auto bg-white p-4 rounded-lg shadow-md mt-5">
        <CompareColleges />
      </div>
    </div>
  );
}

export default Overview;
