import React from "react";

interface ApplicationProcessProps {
  steps: string[];
}

const ApplicationProcess: React.FC<ApplicationProcessProps> = ({ steps }) => {
  return (
    <div className="mb-8">
      <h2 className="sm:text-xl font-bold mb-4">
        How to Apply for Admission at Manipal Online?
      </h2>
      <ol className="list-decimal pl-6">
        {steps.map((step, index) => (
          <li key={index} className="mb-2 sm:text-base text-sm">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ApplicationProcess;
