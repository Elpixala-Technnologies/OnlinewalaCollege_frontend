// components/ProcessStep.tsx
import React from "react";

interface Step {
  number: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<{ step: Step }> = ({ step }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-center">
      <div className="flex items-center justify-center  mb-4 rounded-full  text-blue-500 font-bold text-xl">
        <h1 className="w-14 h-14 flex justify-center items-center rounded-full bg-blue-100">
          {step.number}
        </h1>
      </div>
      <h3 className="font-semibold mb-2">{step.title}</h3>
      <p className="text-sm">{step.description}</p>
    </div>
  );
};

export default ProcessStep;
