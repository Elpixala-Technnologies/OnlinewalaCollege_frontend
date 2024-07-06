import React from "react";
import CourseCard from "./CourseCard";

interface Course {
  id: number;
  title: string;
  memberCount: number;
  color: string;
}

const courses: Course[] = [
  { id: 1, title: "Online MBA", memberCount: 4, color: "bg-blue-500" },
  { id: 2, title: "B.Tech", memberCount: 2, color: "bg-gray-800" },
  { id: 3, title: "M.Tech", memberCount: 4, color: "bg-blue-400" },
  { id: 4, title: "B.Sc/M.Sc", memberCount: 7, color: "bg-blue-800" },
  { id: 5, title: "Ph.D", memberCount: 1, color: "bg-blue-900" },
  { id: 6, title: "Ph.D", memberCount: 1, color: "bg-blue-900" },
  { id: 7, title: "Ph.D", memberCount: 1, color: "bg-blue-900" },
];

const PopularCourses: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Popular Courses</h1>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        {`We are here as a solution to improve people's competence in getting
        jobs, increasing income, and starting a professional business with
        quality learning at affordable prices.`}
      </p>
      <div className="flex justify-center gap-5 overflow-x-auto overflow-scroll hide-scrollbar">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            memberCount={course.memberCount}
            color={course.color}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
