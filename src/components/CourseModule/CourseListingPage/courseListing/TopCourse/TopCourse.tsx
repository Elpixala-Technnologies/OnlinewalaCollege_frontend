// components/TopCourses.tsx
import React from "react";
import AvatarImage from "@/assets/images/Ellipse 147.png";
import CollegeImage from "@/assets/images/CollegeImage.png";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: 1,
    title: "MBA from OnlineWalaCollege",
    instructor: {
      name: "John Doe",
      role: "MBA Specialist and Director of Admission",
      avatar: AvatarImage,
    },
    enrolled: 1500,
    courses: 13,
    duration: {
      hours: 2,
      months: 15,
    },
    backgroundImage: CollegeImage,
  },
  {
    id: 2,
    title: "MBA from OnlineWalaCollege",
    instructor: {
      name: "John Doe",
      role: "MBA Specialist and Director of Admission",
      avatar: AvatarImage,
    },
    enrolled: 1500,
    courses: 13,
    duration: {
      hours: 2,
      months: 15,
    },
    backgroundImage: CollegeImage,
  },
  {
    id: 3,
    title: "MBA from OnlineWalaCollege",
    instructor: {
      name: "John Doe",
      role: "MBA Specialist and Director of Admission",
      avatar: AvatarImage,
    },
    enrolled: 1500,
    courses: 13,
    duration: {
      hours: 2,
      months: 15,
    },
    backgroundImage: CollegeImage,
  },

  // Add more course data objects here
];

const TopCourse: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Top courses</h2>
      <h3 className="text-xl font-semibold mb-4">MBA (12)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
          View more
        </button>
      </div>
    </div>
  );
};

export default TopCourse;
