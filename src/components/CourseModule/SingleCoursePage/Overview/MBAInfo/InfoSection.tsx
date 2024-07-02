// components/InfoSection.tsx
import React from "react";

interface InfoSectionProps {
  question: string;
  answer: string;
  reasons?: {
    title: string;
    description: string;
  }[];
}

const InfoSection: React.FC<InfoSectionProps> = ({
  question,
  answer,
  reasons,
}) => {
  return (
    <div className="rounded-lg p-6">
      <h2 className="md:text-xl font-medium mb-4">{question}</h2>
      <p className="mb-4">{answer}</p>
      {reasons && (
        <ul className="list-disc pl-5 space-y-2">
          {reasons.map((reason, index) => (
            <li key={index}>
              <strong>{reason.title}</strong> {reason.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfoSection;
