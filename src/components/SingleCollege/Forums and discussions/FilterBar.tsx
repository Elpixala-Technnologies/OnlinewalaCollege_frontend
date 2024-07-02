import React from "react";

const FilterBar: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <select className="bg-blue-100 text-blue-800 rounded-full px-4 py-2">
        <option>Popular</option>
      </select>
      <select className="bg-blue-100 text-blue-800 rounded-full px-4 py-2">
        <option>Degree</option>
      </select>
      <select className="bg-blue-100 text-blue-800 rounded-full px-4 py-2">
        <option>Program type</option>
      </select>
      <select className="bg-blue-100 text-blue-800 rounded-full px-4 py-2">
        <option>Course type</option>
      </select>
      <button className="bg-blue-100 text-blue-800 rounded-full px-4 py-2 flex items-center">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        Filters
      </button>
    </div>
  );
};

export default FilterBar;
