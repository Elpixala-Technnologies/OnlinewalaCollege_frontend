// components/CourseCard.tsx
import React from "react";

interface CourseCardProps {
  course: {
    title: string;
    rating: number;
    reviews: number;
    courses: number;
    duration: string;
    fees: string;
    applicationDate: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-[#F7F7F7] rounded-lg shadow-md  mb-4 border border-blue-500">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="lg:w-[80%] w-full">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold">{course.title}</h2>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <span className="mr-2">{course.rating} ★</span>
              <span className="mr-2">({course.reviews} reviews)</span>
              <span>{course.courses} courses</span>
            </div>
            <div className="flex justify-between text-sm mb-2 mt-5 flex-wrap w-full">
              <div className="px-2">
                <p>Duration</p>
                <p className="font-light text-xl text-blue-400">
                  {course.duration}
                </p>
              </div>
              <div className="px-2">
                <p>Course fees</p>
                <p className="font-light text-xl text-blue-400">
                  {course.fees} <span className="text-xs">(per semester)</span>
                </p>
              </div>
              <div className="px-2">
                <p>Application date</p>
                <p className="font-light text-xl text-blue-400">
                  {course.applicationDate}
                </p>
              </div>
            </div>
            <div className="lg:hidden flex flex-row items-center gap-4 w-full mb-3 justify-start mt-5">
              <button className="bg-blue-100 w-32 text-blue-800 px-3 py-2 rounded-md text-sm">
                Brochure ↓
              </button>
              <button className="w-32 bg-blue-400 text-white  px-3 py-2 rounded-md text-sm">
                Apply Now
              </button>
            </div>
          </div>
          <div className="lg:flex hidden flex-col items-center gap-4 lg:w-[20%] w-full mb-5 justify-end">
            <button className="bg-blue-100 w-32 text-blue-800 px-3 py-2 rounded-md text-sm">
              Brochure ↓
            </button>
            <button className="w-32 bg-blue-400 text-white  px-3 py-2 rounded-md text-sm">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-b-md w-full">
        Limited seats available
      </button>
    </div>
  );
};

export default CourseCard;
