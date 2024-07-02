// components/CareerAssistance.tsx
import React from "react";

interface AssistanceItem {
  title: string;
  description: string;
  subItems?: string[];
}

interface CareerAssistanceProps {
  items: AssistanceItem[];
}

const CareerAssistance: React.FC<CareerAssistanceProps> = ({ items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">
        Manipal Online Career and Placement Assistance
      </h2>
      <ul className="list-disc pl-5 space-y-4">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <strong>{item.title}:</strong> {item.description}
            {item.subItems && (
              <ul className="list-disc pl-5 mt-2">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerAssistance;
