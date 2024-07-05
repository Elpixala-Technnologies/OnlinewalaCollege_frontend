import React from "react";
import MBAAdmissionProcess from "./MBAAdmissionProcess/MBAAdmissionProcess";
import FeatureCollegeLogo from "../Overview/FeatureCollegeLogo/FeatureCollegeLogo";
import CurriculumSection from "../Curriculum/CurriculumSection/CurriculumSection";

function Eligibility() {
  const steps = [
    {
      number: 1,
      title: "Apply for entrance exams",
      description:
        "The first step is to apply for the MBA entrance exams accepted by the college one is seeking admission to.",
    },
    {
      number: 2,
      title: "Apply for entrance exams",
      description:
        "The first step is to apply for the MBA entrance exams accepted by the college one is seeking admission to.",
    },
    {
      number: 3,
      title: "Apply for entrance exams",
      description:
        "The first step is to apply for the MBA entrance exams accepted by the college one is seeking admission to.",
    },
    {
      number: 4,
      title: "Apply for entrance exams",
      description:
        "The first step is to apply for the MBA entrance exams accepted by the college one is seeking admission to.",
    },
    {
      number: 5,
      title: "Apply for entrance exams",
      description:
        "The first step is to apply for the MBA entrance exams accepted by the college one is seeking admission to.",
    },
  ];

  const mbaCurriculumContent =
    "The MBA syllabus covers core subjects like finance, marketing, human resources, operations management, and economics. Students can choose electives to focus on specific areas such as entrepreneurship, digital marketing, or international business. The program often includes hands-on experiences like internships, group projects, and case studies to apply theoretical knowledge to real-world situations. The curriculum is designed to provide students with the necessary skills and knowledge to succeed in managerial and leadership roles in various industries.";

  return (
    <div>
      <div className="max-w-[1300px] mx-auto">
        <MBAAdmissionProcess steps={steps} />
      </div>
      <div className="bg-blue-500 mt-5">
        <div className="max-w-[1300px] mx-auto">
          <FeatureCollegeLogo />
        </div>
      </div>
      <div className="mt-5">
        <CurriculumSection
          title="MBA curriculum"
          content={mbaCurriculumContent}
        />
      </div>
    </div>
  );
}

export default Eligibility;
