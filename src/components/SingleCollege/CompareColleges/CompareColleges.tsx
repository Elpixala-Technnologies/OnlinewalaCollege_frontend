"use client";

import React, { useState } from "react";
import CollegeComparison from "./CollegeComparison";
import CollegeImage from "@/assets/images/CollegeImage.png";
import CollegeImage2 from "@/assets/images/Rectangle 745.png";
import AmityLogo from "@/assets/images/CollegeImage.png";

function CompareColleges() {
  const allColleges = [
    {
      name: "Manipal University Online",
      fees: "INR 2.20 Lakh per year",
      image: CollegeImage,
      logo: CollegeImage,
      button: "Download Brochure",
    },
    {
      name: "Manipal School of Architecture and Planning Online",
      fees: "INR 2.20 Lakh per year",
      image: CollegeImage,
      logo: AmityLogo,
      button: "Compare",
    },
    {
      name: "Manipal School of Architecture and Planning Online",
      fees: "INR 2.20 Lakh per year",
      image: CollegeImage2,
      logo: CollegeImage,
      button: "Compare",
    },
    {
      name: "Manipal School of Architecture and Planning Online",
      fees: "INR 2.20 Lakh per year",
      image: CollegeImage,
      logo: CollegeImage,
      button: "Compare",
    },
    {
      name: "Manipal School of Architecture and Planning Online",
      fees: "INR 2.20 Lakh per year",
      image: CollegeImage2,
      logo: CollegeImage,
      button: "Compare",
    },
    {
      name: "Manipal School of Architecture and Planning Online",
      fees: "INR 2.20 Lakh per year",
      image: CollegeImage2,
      logo: CollegeImage,
      button: "Compare",
    },
    {
      name: "Manipal School of Architecture and Planning Online",
      fees: "INR 2.20 Lakh per year",
      image: CollegeImage,
      logo: CollegeImage,
      button: "Compare",
    },
    {
      name: "Manipal School of Architecture and Planning Online",
      fees: "INR 2.20 Lakh per year",
      image: CollegeImage2,
      logo: CollegeImage,
      button: "Compare",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const collegesPerPage = 3;

  const colleges = allColleges.slice(
    currentPage * collegesPerPage,
    (currentPage + 1) * collegesPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(Math.floor((allColleges.length - 1) / collegesPerPage), prev + 1)
    );
  };

  return (
    <>
      <div className="bg-white p-4 mb-5 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Compare Popular Colleges With Manipal University Online
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-gray-200 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-blue-600 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Basic Information About the Colleges
        </p>
        <CollegeComparison colleges={colleges} />
      </div>
    </>
  );
}

export default CompareColleges;
