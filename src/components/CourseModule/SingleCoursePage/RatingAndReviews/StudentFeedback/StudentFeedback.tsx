// components/StudentFeedback.tsx
import React from "react";
import LikesDislikes from "./LikesDislikes";
import ReviewSection from "./ReviewSection";
import ReviewList from "./ReviewList";

interface FeedbackItem {
  likes: string[];
  dislikes: string[];
}

interface Review {
  title: string;
  rating: number;
  author: string;
  date: string;
  content: string;
}

interface StudentFeedbackProps {
  feedback: FeedbackItem;
  reviews: Review[];
}

const StudentFeedback: React.FC<StudentFeedbackProps> = ({
  feedback,
  reviews,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">What Students Say?</h1>
      <LikesDislikes likes={feedback.likes} dislikes={feedback.dislikes} />
      <ReviewSection />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default StudentFeedback;
