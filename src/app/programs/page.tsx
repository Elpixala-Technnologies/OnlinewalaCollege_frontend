import HeroSection from "@/components/CourseModule/CourseListingPage/HeroSection/HeroSection";
import StartExplore from "@/components/CourseModule/CourseListingPage/StartExplore/StartExplore";
import CourseListing from "@/components/CourseModule/CourseListingPage/courseListing/CourseListing";
import React from "react";

function page() {
  return (
    <div>
      <div className="max-w-[1450px] mx-auto p-4 xl:-mt-10">
        <HeroSection />
      </div>
      <div>
        <StartExplore />
      </div>
      <div>
        <hr />
      </div>
      <div className="bg-blue-50">
        <CourseListing />
      </div>
    </div>
  );
}

export default page;
