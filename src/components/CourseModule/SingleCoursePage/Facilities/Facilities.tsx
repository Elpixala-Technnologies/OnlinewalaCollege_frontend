import React from "react";
import Collections from "../Overview/Collections/Collections";
import TopCourse from "../../CourseListingPage/courseListing/TopCourse/TopCourse";
import FeatureCollegeLogo from "../Overview/FeatureCollegeLogo/FeatureCollegeLogo";

function Facilities() {
  return (
    <div>
      <div className=" bg-white rounded-lg shadow-md border-2 border-blue-400 max-w-[1332px] mx-auto">
        <Collections />
      </div>
      <div className=" bg-white rounded-lg shadow-md mt-5 p-4 max-w-[1332px] mx-auto">
        <TopCourse />
      </div>
      <div className="bg-blue-300 rounded-lg shadow-md mt-5">
        <FeatureCollegeLogo />
      </div>
    </div>
  );
}

export default Facilities;
