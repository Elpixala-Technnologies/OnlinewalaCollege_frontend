// components/ReviewList.tsx
import React from "react";
import ReviewItem from "./ReviewItem";

interface Review {
  title: string;
  rating: number;
  author: string;
  date: string;
  content: string;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
