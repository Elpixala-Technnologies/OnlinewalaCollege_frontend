// components/AdmissionsBanner.tsx
import React from "react";

const AdmissionsBanner: React.FC = () => {
  return (
    <div className="bg-blue-400 text-white p-4 rounded-lg text-center mb-4 min-h-52 flex justify-center items-center flex-col">
      <h3 className="lg:text-4xl font-semibold mb-2">
        Get admissions in top universities in India
      </h3>
      <button className="bg-white text-black px-4 py-2 rounded-md w-52">
        Apply now
      </button>
    </div>
  );
};

export default AdmissionsBanner;
