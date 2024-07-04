// components/ReviewItem.tsx
import React from "react";

interface ReviewItemProps {
  review: {
    title: string;
    rating: number;
    author: string;
    date: string;
    content: string;
  };
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="font-bold text-lg">{review.title}</h3>
      <div className="flex items-center mb-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < review.rating ? "fill-current" : "fill-gray-300"
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          Review for: MBA Program by {review.author}
        </span>
      </div>
      <p className="text-sm text-gray-700 mb-2">{review.date}</p>
      <p className="text-gray-600 bg-gray-100 p-3 rounded">{review.content}</p>
    </div>
  );
};

export default ReviewItem;
