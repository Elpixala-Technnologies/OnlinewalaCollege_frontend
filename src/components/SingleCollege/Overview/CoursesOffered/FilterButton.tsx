import React from "react";

const FilterButtons: React.FC = () => {
  const filters = ["Popular", "Degree", "Program type", "Course type"];

  return (
    <div className="flex mb-4 flex-wrap gap-4">
      {filters?.map((filter: any, index: any) => (
        <button
          key={index}
          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
        >
          {filter} ▼
        </button>
      ))}
      <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
        <span className="mr-1">☰</span> Filters
      </button>
    </div>
  );
};

export default FilterButtons;
