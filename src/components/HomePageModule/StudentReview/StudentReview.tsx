import React from "react";
import StudentTestimonials from "./StudentTestimonials/StudentTestimonials";
import ProfileImage from "@/assets/images/profileImage.png";

const StudentReview: React.FC = () => {
  const testimonials = [
    {
      id: "1",
      name: "Greg Stuart",
      institution: "MBA, IIM Ahmedabad",
      imageUrl: ProfileImage,
      quote:
        "Thanks to the guidance I received from this platform, I not only found the perfect college but also gained invaluable insights into the admission process. Highly recommended!",
    },
    {
      id: "2",
      name: "Aman Sherawat",
      institution: "B.tech, IIT Delhi",
      imageUrl: ProfileImage,
      quote:
        "I was overwhelmed with options until I came across this website. The personalized counseling helped me narrow down my choices and make informed decisions.",
    },
    {
      id: "3",
      name: "Priya Mehra",
      institution: "Computer sciences, IIT Bombay",
      imageUrl: ProfileImage,
      quote:
        "The counselors went above and beyond to understand my aspirations and suggest colleges that aligned with my goals. I am grateful for the support throughout the application process.",
    },
    {
      id: "4",
      name: "Priya Mehra",
      institution: "Computer sciences, IIT Bombay",
      imageUrl: ProfileImage,
      quote:
        "The counselors went above and beyond to understand my aspirations and suggest colleges that aligned with my goals. I am grateful for the support throughout the application process.",
    },
  ];
  return (
    <div className="hide-scrollbar">
      <StudentTestimonials testimonials={testimonials} />
    </div>
  );
};

export default StudentReview;
