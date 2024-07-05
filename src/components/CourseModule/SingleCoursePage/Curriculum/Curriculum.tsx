import React from "react";
import CurriculumSection from "./CurriculumSection/CurriculumSection";
import FeatureCollegeLogo from "../Overview/FeatureCollegeLogo/FeatureCollegeLogo";
import ImportantMBA from "./ImportantMBA/ImportantMBA";
import Collections from "../Overview/Collections/Collections";
import MBASyllabus from "./MBASyllabus/MBASyllabus";
import FAQSection from "@/components/ReusableComponent/FAQSections/FAQSection";
import PopularCollegeCard from "@/components/CollegeCard/PopularCollegeCard";

function Curriculum() {
  const mbaCurriculumContent =
    "The MBA syllabus covers core subjects like finance, marketing, human resources, operations management, and economics. Students can choose electives to focus on specific areas such as entrepreneurship, digital marketing, or international business. The program often includes hands-on experiences like internships, group projects, and case studies to apply theoretical knowledge to real-world situations. The curriculum is designed to provide students with the necessary skills and knowledge to succeed in managerial and leadership roles in various industries.";
  const whatIsMbaCurriculumContent =
    "The MBA syllabus aims to provide students with a deep understanding of management principles and their application in the business world. Emphasizing managerial and entrepreneurial skills, the program fosters effective leadership development. Key MBA subjects like Business Law, Entrepreneurship, Corporate Finance, and Financial Accounting are covered to promote individual excellence, initiative, and creativity. By focusing on these areas, MBA students are equipped with the tools needed to thrive in todays dynamic business landscape. The MBA course syllabus 2024 includes core subjects and elective subjects, tailored to the students chosen specialization. These MBA subjects are designed to impart a comprehensive understanding of business concepts, theories, and strategies applicable to real-world scenarios. Additionally, practical opportunities such as internships and group projects are offered in an MBA course to develop hands-on experience and professional skills necessary for future careers. If youre a prospective MBA aspirant, take a closer look at the MBA syllabus and subjects its your first step towards an exciting journey in business education!";

  const semesters = [
    {
      id: 1,
      semester: 1,
      courses: [
        { name: "Quantitative Methods" },
        { name: "Business Communication" },
        // ... add other courses
      ],
    },
    {
      id: 2,
      semester: 2,
      courses: [
        { name: "Quantitative Methods" },
        { name: "Business Communication" },
        // ... add other courses
      ],
    },
    {
      id: 3,
      semester: 3,
      courses: [
        { name: "Quantitative Methods" },
        { name: "Business Communication" },
        // ... add other courses
      ],
    },
    {
      id: 4,
      semester: 4,
      courses: [
        { name: "Quantitative Methods" },
        { name: "Business Communication" },
        // ... add other courses
      ],
    },
    // ... add data for other semesters
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
      <CurriculumSection
        title="MBA curriculum"
        content={mbaCurriculumContent}
      />
      <CurriculumSection
        title="What is MBA Curriculum?"
        content={whatIsMbaCurriculumContent}
      />
      <div className="bg-blue-500">
        <div className="max-w-[1300px] mx-auto">
          <FeatureCollegeLogo />
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto mt-5 bg-white shadow-md rounded-lg">
        <ImportantMBA />
      </div>
      <div className="max-w-[1300px] mx-auto mt-5 shadow-md rounded-lg">
        <Collections />
      </div>
      <div className="max-w-[1300px] mx-auto mt-5 shadow-md rounded-lg bg-white">
        <MBASyllabus semesters={semesters} />
      </div>
      <div className="max-w-[1300px] mx-auto mt-5 shadow-md rounded-lg bg-white">
        <FAQSection faqData={faqData} />
      </div>
      <div className="max-w-[1300px] mx-auto mt-5 shadow-md rounded-lg bg-white">
        <PopularCollegeCard />
      </div>
    </div>
  );
}

export default Curriculum;
