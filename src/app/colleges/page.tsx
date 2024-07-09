import MainCollegeSection from "@/components/MainCollegeSection/MainCollegeSection";
import CollegeCard from "@/components/CollegeCard/CollegeCard";
import TopAll from "@/components/TopAll/TopAll";
import React from "react";

function page() {
  return (
    <div>
      <div className="mt-12 max-w-[1500px] mx-auto p-4">
        <TopAll />
      </div>
      <div className="mt-12 max-w-[1500px] mx-auto p-2">
        <CollegeCard />
      </div>
      <hr />
      <div className="mt-12 max-w-[1500px] mx-auto p-5">
        <MainCollegeSection />
      </div>
    </div>
  );
}

export default page;
