import React from "react";
import ForumsAndDiscussionss from "@/components/SingleCollege/Forums and discussions/ForumsAndDiscussions";
import FeatureCollegeLogo from "../Overview/FeatureCollegeLogo/FeatureCollegeLogo";

function ForumsAndDiscussions() {
  return (
    <>
      <div className=" bg-white rounded-lg shadow-md mt-5 p-4 max-w-[1332px] mx-auto">
        <ForumsAndDiscussionss />
      </div>
      <div className="bg-blue-300 rounded-lg shadow-md mt-5">
        <FeatureCollegeLogo />
      </div>
    </>
  );
}

export default ForumsAndDiscussions;
