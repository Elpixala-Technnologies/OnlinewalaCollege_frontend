import React from "react";
import CollegeFilter from "./CollegeFilter/CollegeFilter";
import PopularCollegeCard from "../CollegeCard/PopularCollegeCard";
import CollegeMain from "./CollegeAllCard/CollegeMain";

function MainCollegeSection() {
  return (
    <div className="md:flex gap-10">
      <div className="md:w-[20%] md:block hidden">
        <CollegeFilter />
      </div>
      <div className="md:w-[80%]">
        <CollegeMain />
        <PopularCollegeCard />
      </div>
    </div>
  );
}

export default MainCollegeSection;
