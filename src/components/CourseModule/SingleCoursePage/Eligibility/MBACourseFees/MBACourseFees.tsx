import React from "react";
import FeeTable from "./FeeTable";

interface CollegeFee {
  name: string;
  fee: string;
}

interface MBAFeesProps {
  fees: CollegeFee[];
}

const MBACourseFees: React.FC<MBAFeesProps> = ({ fees }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="md:text-xl font-bold mb-4 text-gray-800">
        MBA Course Fees in India
      </h1>
      <p className="mb-6 text-gray-600">
        Before applying to their desired colleges, candidates must check out MBA
        fees in India so that they do not face any financial issues down the
        road. Here's the MBA fee of top colleges in India:
      </p>
      <FeeTable fees={fees} />
    </div>
  );
};

export default MBACourseFees;
