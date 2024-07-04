import React from "react";
import MBACourseFees from "../Eligibility/MBACourseFees/MBACourseFees";
import FAQSection from "@/components/ReusableComponent/FAQSections/FAQSection";
import FeatureCollegeLogo from "../Overview/FeatureCollegeLogo/FeatureCollegeLogo";

function Placement() {
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

  const faqData = [
    {
      question:
        "What are the eligibility criteria for students to avail the career and placement assistance at Online Manipal?",
      answer: "Answer details here...",
    },
    {
      question:
        "What are the services offered to students by Manipal University Online before the placement process?",
      answer: "Answer details here...",
    },
    {
      question: "Who are the top recruiters at Manipal University Online?",
      answer: "Answer details here...",
    },
    {
      question: "What skill development training is offered at Manipal Online?",
      answer: "Answer details here...",
    },
  ];
  return (
    <div>
      <div className="max-w-[1300px] mx-auto ">
        <MBACourseFees fees={feesData} />
      </div>
      <div className="max-w-[1300px] mx-auto mt-5">
        <FAQSection faqData={faqData} />
      </div>
      <div className="bg-blue-500 mt-5">
        <div className="max-w-[1300px] mx-auto">
          <FeatureCollegeLogo />
        </div>
      </div>
    </div>
  );
}

export default Placement;
