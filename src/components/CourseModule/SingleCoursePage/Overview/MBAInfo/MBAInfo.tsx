import React from "react";
import InfoSection from "./InfoSection";

const MBAInfo = () => {
  const mbaFullFormData = {
    question: "What is MBA Full Form?",
    answer:
      "MBA full form is Master of Business Administration (also known as Master in Business Administration). MBA is a post-graduate degree that offers fundamental management knowledge and enhances an individual's skills and abilities to make them competent enough to work at managerial levels. This degree is widely recognized and respected in the business world, offering a gateway to numerous career opportunities across various industries and sectors. Admission to top MBA colleges is done based on MBA entrance exams and a bachelor's degree in Business Administration or any other stream.",
  };

  const whyChooseMBAData = {
    question: "Why Choose an MBA Degree?",
    answer:
      "MBA is an internationally acclaimed degree preferred by individuals who wish to get a holistic view of the business across areas like finance, marketing, human resources, operations, accounting, etc., all while developing vital skills necessary to lead. If you're wondering 'Is MBA a useful degree?' or 'How does an MBA help your career?' then read below to get all the answers for why you should do an MBA.",
    reasons: [
      {
        title: "Acquire Managerial Skills:",
        description:
          "MBA course helps develop business acumen and managerial skills and prepares a candidate to perform various managerial duties. It also instils communication, analytical, logical, comprehension, and various other crucial skills.",
      },
      {
        title: "Better Career Opportunities:",
        description:
          "With an MBA degree from a well-recognized institute, one can find high-paying jobs in some of the biggest organizations in India and abroad. Many working professionals choose MBA courses to boost their careers and grab better career opportunities.",
      },
      // Add more reasons here...
    ],
  };

  return (
    <div className="space-y-6">
      <div className=" bg-white rounded-lg shadow-md mt-3">
        <InfoSection
          question={mbaFullFormData.question}
          answer={mbaFullFormData.answer}
        />
      </div>
      <div className=" bg-white rounded-lg shadow-md mt-5">
        <InfoSection
          question={whyChooseMBAData.question}
          answer={whyChooseMBAData.answer}
          reasons={whyChooseMBAData.reasons}
        />
      </div>
    </div>
  );
};

export default MBAInfo;
