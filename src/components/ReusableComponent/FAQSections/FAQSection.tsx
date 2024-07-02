import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

interface FAQSectionProps {
  faqData: FAQItemProps[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqData }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="sm:text-xl font-bold mb-6">
        Manipal Online Placements FAQs
      </h2>
      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
