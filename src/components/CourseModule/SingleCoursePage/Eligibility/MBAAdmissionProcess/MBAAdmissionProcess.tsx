// components/MBAAdmissionProcess.tsx
import React from "react";
import ProcessStep from "./ProcessStep";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface MBAAdmissionProcessProps {
  steps: Step[];
}

const MBAAdmissionProcess: React.FC<MBAAdmissionProcessProps> = ({ steps }) => {
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          MBA Admission Process in India
        </h1>
        <p className="mb-4">
          The basic admission process for MBA courses consists of certain phases
          that are similar across a majority of management institutes. Here are
          the stages that every MBA candidate must go through to seek admission
          into an MBA:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li>
            Apply for Entrance Exams: The first step is to apply for the MBA
            entrance exams accepted by the colleges one is seeking admission to.
            Check all the requirements of the entrance exam and ensure you meet
            them.
          </li>
          <li>
            Qualify for Entrance Exams: If you qualify for the entrance exam and
            meet the minimum cutoff, you will be called for selection rounds.
            Students need to register to take part in the counselling and
            fulfill all the requirements.
          </li>
          <li>
            Participate in Counselling: Based on the entrance exam scores,
            candidates are shortlisted and called for Group Discussions, Written
            Ability Test, or Personal Interview rounds. MBA colleges offering
            direct admissions to MBA, on a merit basis also conduct personal
            interview rounds.
          </li>
          <li>
            Appear in the Merit List: After evaluating candidates based on
            entrance exam scores, GD/PI performance, academic performance, and
            work experience (if any), the final list of selected students will
            be declared.
          </li>
          <li>
            Report to the College: Those who have been allocated a seat in the
            MBA college will be required to do the reporting (offline or online)
            and pay the admission fees. The classes will commence after that.
          </li>
        </ul>
      </div>
      <div className="bg-white p-4 mt-5 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          MBA Admission Process in India
        </h2>
        <div className="rounded-lg p-10  bg-blue-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((step) => (
              <ProcessStep key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MBAAdmissionProcess;
