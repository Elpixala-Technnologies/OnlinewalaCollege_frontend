import React from "react";
import MBACourseFees from "../Eligibility/MBACourseFees/MBACourseFees";
import FeatureCollegeLogo from "../Overview/FeatureCollegeLogo/FeatureCollegeLogo";

function FeeStructure() {
  const feesData = [
    { name: "IIM Ahmedabad Fee", fee: "INR 33,00,000" },
    { name: "IIM Bangalore Fee", fee: "INR 24,50,000" },
    { name: "IIM Calcutta Fee", fee: "INR 24,50,000" },
    { name: "IIM Lucknow Fee", fee: "INR 24,50,000" },
    { name: "IIM Udaipur Fee", fee: "INR 24,50,000" },
    { name: "IIM Ranchi Fee", fee: "INR 24,50,000" },
    { name: "IIM Bangalore Fee", fee: "INR 24,50,000" },
    { name: "IIT Delhi Fee", fee: "INR 24,50,000" },
  ];
  return (
    <div>
      <div className="max-w-[1300px] mx-auto ">
        <MBACourseFees fees={feesData} />
      </div>
      <div className="max-w-[1300px] mx-auto mt-5">
        <MBACourseFees fees={feesData} />
      </div>
      <div className="bg-blue-500 mt-5">
        <div className="max-w-[1300px] mx-auto">
          <FeatureCollegeLogo />
        </div>
      </div>
    </div>
  );
}

export default FeeStructure;
