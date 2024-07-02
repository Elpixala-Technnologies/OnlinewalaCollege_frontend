import React, { useState } from "react";

const FAQItem = ({ item }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium sm:text-base text-sm">
          {item.question}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 sm:text-base text-xs">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQList = ({ faqs }: any) => {
  return (
    <div className=" bg-white shadow-md rounded-lg p-4 mt-5">
      <h2 className="text-xl font-bold mb-6">
        Manipal Online Scholarship FAQs
      </h2>
      <div className="bg-white rounded-lg">
        {faqs.map((faq: any, index: any) => (
          <FAQItem key={index} item={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
