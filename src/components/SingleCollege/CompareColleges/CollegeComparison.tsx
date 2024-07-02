import React from "react";
import CollegeCard from "./CollegeCard";

type College = {
  name: string;
  fees: string;
  image: any;
  logo: any;
  button: string;
};

type CollegeComparisonProps = {
  colleges: College[];
};

const CollegeComparison: React.FC<CollegeComparisonProps> = ({ colleges }) => (
  <div>
    <div className="flex space-x-4 mb-6">
      {/* <button className="py-2 px-4 bg-blue-100 text-blue-600 rounded-full">
        MBA
      </button>
      <button className="py-2 px-4 bg-blue-50 text-blue-600 rounded-full">
        MBBS
      </button> */}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {colleges.map((college, index) => (
        <CollegeCard
          key={index}
          name={college.name}
          fees={college.fees}
          image={college.image}
          logo={college.logo}
          button={college.button}
        />
      ))}
    </div>
  </div>
);

export default CollegeComparison;
