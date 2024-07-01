import React from "react";

const QuestionInput: React.FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Your question"
        className="w-full p-3 pr-12 border rounded-lg"
      />
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default QuestionInput;
