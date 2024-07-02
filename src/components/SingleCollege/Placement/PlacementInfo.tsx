// components/PlacementInfo.tsx
import React from "react";

interface PlacementInfoProps {
  title: string;
  description: string;
}

const PlacementInfo: React.FC<PlacementInfoProps> = ({
  title,
  description,
}) => {
  return (
    <div className="mb-8">
      <h1 className="sm:text-xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default PlacementInfo;
