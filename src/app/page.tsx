import React from "react";
import Navbar from "@/components/Nabvar/Navbar";
import TopAll from "@/components/TopAll/TopAll";
import CollegeCard from "@/components/CollegeCard/CollegeCard";
import MainCollegeSection from "@/components/MainCollegeSection/MainCollegeSection";
import Footer from "@/components/Footer/Footer";

function page() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="mt-12 max-w-[1450px] mx-auto p-4">
        <TopAll />
      </div>
      <div className="mt-12 max-w-[1450px] mx-auto p-2">
        <CollegeCard />
      </div>
      <hr />
      <div className="mt-12 max-w-[1450px] mx-auto p-5">
        <MainCollegeSection />
      </div>
      <div className="sm:p-0 p-4 mt-32 bg-gradient-to-b from-[#6697FC] to-[#6697FC]">
        <Footer />
      </div>
    </>
  );
}

export default page;
