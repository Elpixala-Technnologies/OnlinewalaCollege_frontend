"use client";

import { useState } from "react";
import FilterSection from "./FilterSection";
import SearchBar from "./SearchBar";
import CourseList from "./CourseList";
import CallToAction from "./CallToAction";
import PopularCollegeCard from "@/components/CollegeCard/PopularCollegeCard";

export default function CourseListing() {
  const [filters, setFilters] = useState({
    duration: "3 Years",
    mode: "None",
  });

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-14">
        <div className="w-full md:w-[20%]">
          <h1 className="text-2xl font-bold mb-4">Search by filters</h1>
        </div>
        <div className="w-full md:w-[80%]">
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-14 mt-5">
        <div className="w-full md:w-[20%]">
          <FilterSection filters={filters} setFilters={setFilters} />
        </div>
        <div className="w-full md:w-[80%]">
          <CourseList />
          <CallToAction />
          <div className="mt-5">
            <PopularCollegeCard />
          </div>
        </div>
      </div>
    </div>
  );
}
