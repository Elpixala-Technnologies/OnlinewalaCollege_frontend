import React from "react";
import NewsAndUpdatess from "@/components/SingleCollege/NewsAndUpdates/NewsAndUpdates";
import FeatureCollegeLogo from "../Overview/FeatureCollegeLogo/FeatureCollegeLogo";

function NewsAndUpdates() {
  return (
    <>
      <div className=" bg-white rounded-lg shadow-md mt-5 p-4 max-w-[1332px] mx-auto">
        <NewsAndUpdatess />
      </div>
      <div className="bg-blue-300 rounded-lg shadow-md mt-5">
        <FeatureCollegeLogo />
      </div>
    </>
  );
}

export default NewsAndUpdates;
