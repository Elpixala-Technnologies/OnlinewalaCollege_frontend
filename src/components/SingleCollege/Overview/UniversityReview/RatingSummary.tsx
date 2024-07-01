// components/RatingSummary.tsx
import React from "react";
import StarRating from "./StarRating";

interface RatingSummaryProps {
  data: {
    overallRating: number;
    totalReviews: number;
    ratingDistribution: { [key: number]: number };
    categoryRatings: { [key: string]: number };
  };
}

const RatingSummary: React.FC<RatingSummaryProps> = ({ data }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      <div className="flex items-center mb-4">
        <div className="text-4xl font-bold mr-2">{data.overallRating}</div>
        <StarRating rating={data.overallRating} />
        <div className="text-gray-600 ml-2">({data.totalReviews} reviews)</div>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar">
        {Object?.entries(data?.categoryRatings)?.map(([category, rating]) => (
          <div
            key={category}
            className="text-center min-w-40 flex justify-center flex-col items-center "
          >
            <StarRating rating={rating} size="small" />
            <div className="text-sm mt-1">{category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSummary;
