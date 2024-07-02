// components/CourseCard.tsx
import React from "react";
import Image from "next/image";

interface CourseProps {
  course: {
    title: string;
    instructor: {
      name: string;
      role: string;
      avatar: any;
    };
    enrolled: number;
    courses: number;
    duration: {
      hours: number;
      months: number;
    };
    backgroundImage: any;
  };
}

const CourseCard: React.FC<CourseProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-40">
        <Image
          src={course.backgroundImage}
          alt={course.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center p-4">
          <div className="flex items-center">
            <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              width={70}
              height={70}
              className="rounded-full"
            />
            <div className="ml-3 text-white">
              <p className="font-semibold text-sm">{course.instructor.name}</p>
              <p className="text-xs">{course.instructor.role}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.enrolled}+ enrolled</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Courses Details</h4>
          <div className="flex items-center text-sm text-gray-600">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            {course.courses} Courses
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {course.duration.hours} Hours
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {course.duration.months} Months
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
