import FAQSection from "@/components/ReusableComponent/FAQSections/FAQSection";
import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
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
    <div className="bg-white rounded-lg shadow-md">
      <FAQSection faqData={faqData} />
    </div>
  );
};

export default FAQs;
