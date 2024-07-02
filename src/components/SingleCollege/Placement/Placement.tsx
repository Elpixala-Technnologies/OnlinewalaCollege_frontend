import React from "react";
import PlacementInfo from "./PlacementInfo";
import CareerAssistance from "./CareerAssistance";
import TopRecruiters from "./TopRecruiters";
import FAQSection from "@/components/ReusableComponent/FAQSections/FAQSection";

interface FAQItem {
  question: string;
  answer: string;
}

function Placement() {
  const placementData = {
    title:
      "Manipal Online, Jaipur Placement - Placement Companies & Internships Details",
    description:
      "Manipal University Online aims at aiding students with employment opportunities. The university has a vast network of well-established companies and start-ups across the country. Manipal University Online provides equal opportunities and support for students required during the recruitment process.",
    careerAssistance: [
      {
        title: "Employability Assessments",
        description:
          "Manipal Online conducts assessments to assess and prepare students for the actual job interviews.",
      },
      {
        title: "Career Counselling",
        description:
          "The university connects students with experts from the industry to educate and guide them regarding skills required for their desired careers.",
      },
      {
        title: "Virtual Placements",
        description:
          "Manipal University aids students to secure jobs in reputed companies by attending online interviews.",
      },
      {
        title: "Skill-Enhancement Programs",
        description:
          "Manipal University Online also offers training in Industrial Skills such as:",
        subItems: [
          "Communication",
          "Self-Development & Confidence Building",
          "Critical Thinking & Problem-Solving",
          "Leadership",
          "Professionalism",
          "Team Work & Collaboration",
          "Cultural Fluency",
          "Technology",
        ],
      },
    ],
    topRecruiters: [
      { name: "Row1", companies: ["Capgemini", "HP", "Accenture", "Deloitte"] },
      { name: "Row2", companies: ["EY", "Infosys", "IBM", "Wipro"] },
      {
        name: "Row3",
        companies: ["My Gate", "[24]7.ai", "Nielsen", "Tata Communications"],
      },
      { name: "Row4", companies: ["Wipro", "HP", "Cargill", "Deloitte"] },
      {
        name: "Row5",
        companies: ["Capgemini", "Wipro", "Girnar Soft", "Epsilon"],
      },
    ],
  };

  const faqData: FAQItem[] = [
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
    <>
      <div className="bg-white p-4 rounded-lg shadow-md mb-5">
        <PlacementInfo
          title={placementData.title}
          description={placementData.description}
        />
        <CareerAssistance items={placementData.careerAssistance} />
        <TopRecruiters recruiters={placementData.topRecruiters} />
      </div>
      <div>
        <FAQSection faqData={faqData} />
      </div>
    </>
  );
}

export default Placement;
