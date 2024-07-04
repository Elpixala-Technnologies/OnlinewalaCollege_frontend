import React from "react";

interface CurriculumSectionProps {
  title: string;
  content: string;
}

const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  title,
  content,
}) => {
  return (
    <div className="p-6 max-w-[1300px] mx-auto bg-white rounded-xl shadow-md space-y-4 mb-5">
      <h2 className="md:text-xl font-medium text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default CurriculumSection;
