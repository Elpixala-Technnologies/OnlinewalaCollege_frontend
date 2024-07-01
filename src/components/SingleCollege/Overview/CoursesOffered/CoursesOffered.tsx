"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButton";
import CourseCard from "./CourseCard";
import AdmissionsBanner from "./AdmissionsBanner";

interface Course {
  title: string;
  rating: number;
  reviews: number;
  courses: number;
  duration: string;
  fees: string;
  applicationDate: string;
}

const courses: Course[] = [
  {
    title: "Master of Business Administration (MBA)",
    rating: 4.1,
    reviews: 402,
    courses: 12,
    duration: "24 Months",
    fees: "INR 43,750",
    applicationDate: "25 June 2024",
  },

  {
    title: "Master of Business Administration (MBA)",
    rating: 4.1,
    reviews: 402,
    courses: 12,
    duration: "24 Months",
    fees: "INR 43,750",
    applicationDate: "25 June 2024",
  },
  {
    title: "Master of Business Administration (MBA)",
    rating: 4.1,
    reviews: 402,
    courses: 12,
    duration: "24 Months",
    fees: "INR 43,750",
    applicationDate: "25 June 2024",
  },
];

const CoursesOffered: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white mt-5 p-5 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-1">
        Courses Offered By Manipal University online 2024
      </h1>
      <p className="text-sm text-gray-600 mb-4">
        Select Degree and Stream to See Course Fees and Admission Details.
      </p>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <FilterButtons />

      {courses?.map((course: any, index: any) => (
        <CourseCard key={index} course={course} />
      ))}

      <AdmissionsBanner />

      <div className="flex justify-center items-center">
        <button className="w-40 py-2 mt-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
          View more
        </button>
      </div>
    </div>
  );
};

export default CoursesOffered;
