// components/ReviewSection.tsx
import React from "react";

const ReviewSection: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg mb-6 flex justify-between items-center">
      <div className="md:w-[65%]">
        <h2 className="md:text-2xl font-bold mb-2">YOUR OWN REVIEW</h2>
        <hr className="my-8 w-full md:block hidden" />
        <p className="mb-4 md:text-base text-xs">
          Submit a Verified Review and get a Reward
        </p>
      </div>
      <div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold md:w-40 md:text-base text-sm">
          Create
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
