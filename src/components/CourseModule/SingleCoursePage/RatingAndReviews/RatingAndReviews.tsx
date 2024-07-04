import React from "react";
import StudentFeedback from "./StudentFeedback/StudentFeedback";

function RatingAndReviews() {
  const feedbackData = {
    likes: [
      "Campus Life is very good you'll experience all the things in this campus",
      "Campus life is very good at university it gives you good vibes",
      "Wide Range of Programs",
      "Diverse Networking Opportunities",
    ],
    dislikes: [
      "Campus Life is very good you'll experience all the things in this campus",
      "Limited Face-to-Face Interaction",
      "Technology Issues",
      "Campus life is very good at university it gives you good vibes",
    ],
  };

  const reviewsData = [
    {
      title: "Great course",
      rating: 4,
      author: "Madhur",
      date: "June 15 | 2024",
      content:
        "The program exceeded my expectations by providing a comprehensive, immersive experience. The curriculum was well-structured, aligning perfectly with my career goals and enhancing my skills.",
    },
    {
      title: "Exceeded my expectation",
      rating: 4,
      author: "Madhur",
      date: "June 15 | 2024",
      content:
        "The program exceeded my expectations by providing a comprehensive, immersive experience. The curriculum was well-structured, aligning perfectly with my career goals and enhancing my skills.",
    },
  ];
  return (
    <div className="max-w-[1300px] mx-auto  shadow-md">
      <StudentFeedback feedback={feedbackData} reviews={reviewsData} />
    </div>
  );
}

export default RatingAndReviews;
