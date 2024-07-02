import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  points?: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, points }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-5">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      {points && (
        <ul className="list-disc pl-6">
          {points.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfoCard;
