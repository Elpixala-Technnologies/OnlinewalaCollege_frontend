import React from "react";
import Navbar from "@/components/Nabvar/Navbar";
import TopAll from "@/components/TopAll/TopAll";
import CollegeCard from "@/components/CollegeCard/CollegeCard";

function page() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="p-12">
        <TopAll />
      </div>
      <div className="p-12">
        <CollegeCard />
      </div>
    </>
  );
}

export default page;
