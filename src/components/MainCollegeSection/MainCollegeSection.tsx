import React from "react";
import CollegeFilter from "./CollegeFilter/CollegeFilter";
import CollegeAllCard from "@/components/MainCollegeSection/CollegeAllCard/CollegeAllCard";
import PopularCollegeCard from "../CollegeCard/PopularCollegeCard";

function MainCollegeSection() {
  return (
    <div className="md:flex gap-10">
      <div className="md:w-[20%] md:block hidden">
        <CollegeFilter />
      </div>
      <div className="md:w-[80%]">
        <CollegeAllCard />
        <PopularCollegeCard />
      </div>
    </div>
  );
}

export default MainCollegeSection;
