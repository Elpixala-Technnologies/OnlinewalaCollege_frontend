"use client";

import React from "react";

interface CourseInfo {
  course: string;
  fees: string;
  duration: string;
  applicationDate: string;
}

const courses: CourseInfo[] = [
  {
    course: "MBA",
    fees: "INR 2.2 lakh (first year fees)",
    duration: "24 months",
    applicationDate: "15 June 2024",
  },
  {
    course: "MBA",
    fees: "INR 2.2 lakh (first year fees)",
    duration: "24 months",
    applicationDate: "15 June 2024",
  },
  {
    course: "MBA",
    fees: "INR 2.2 lakh (first year fees)",
    duration: "24 months",
    applicationDate: "15 June 2024",
  },
  {
    course: "MBA",
    fees: "INR 2.2 lakh (first year fees)",
    duration: "24 months",
    applicationDate: "15 June 2024",
  },
  {
    course: "MBA",
    fees: "INR 2.2 lakh (first year fees)",
    duration: "24 months",
    applicationDate: "15 June 2024",
  },
  {
    course: "MBA",
    fees: "INR 2.2 lakh (first year fees)",
    duration: "24 months",
    applicationDate: "15 June 2024",
  },
];

const Table: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md mt-5">
      <h2 className="text-xl font-semibold mb-4">
        Manipal University Online Fees & Eligibility
      </h2>
      <div className="overflow-x-auto hide-scrollbar">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="border p-4 font-semibold text-center lg:w-auto min-w-60">
                Course
              </th>
              <th className="border p-4 font-semibold text-center lg:w-auto min-w-60">
                Fees
              </th>
              <th className="border p-4 font-semibold text-center lg:w-auto min-w-60">
                Duration
              </th>
              <th className="border p-4 font-semibold text-center lg:w-auto min-w-60">
                Application Date
              </th>
              <th className="border p-4 font-semibold text-center lg:w-auto min-w-60">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border p-3 font-light lg:w-auto min-w-60 text-center">
                  {course.course}
                </td>
                <td className="border p-3 font-light lg:w-auto min-w-60 text-blue-600 text-center">
                  {course.fees}
                </td>
                <td className="border p-3 font-light lg:w-auto min-w-60 text-center">
                  {course.duration}
                </td>
                <td className="border p-3 font-light lg:w-auto min-w-60 text-center">
                  {course.applicationDate}
                </td>
                <td className="border p-3 font-light lg:w-auto min-w-60 text-center">
                  <button className="text-blue-600 lg:w-auto min-w-60 hover:underline">
                    Apply now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
