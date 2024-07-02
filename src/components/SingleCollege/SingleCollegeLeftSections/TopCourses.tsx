import React from "react";

const courses = [
  {
    name: "B.Sc (Hons.) Biotechnology",
    duration: "36 months",
    fees: "INR 60,000",
  },
  {
    name: "B.Sc (Hons.) Biotechnology",
    duration: "36 months",
    fees: "INR 60,000",
  },
  {
    name: "B.Sc (Hons.) Biotechnology",
    duration: "36 months",
    fees: "INR 60,000",
  },
];

const TopCourses: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg mt-5">
      <div className="p-10">
        <h2 className="text-xl font-semibold mb-2">Top Courses</h2>
        <hr />
        {courses?.map((course: any, index: any) => (
          <>
            <div key={index} className="mb-4 mt-4">
              <h3 className="text-[18px] font-medium">{course.name}</h3>
              <p className="text-sm text-gray-600">
                Course duration:{" "}
                <span className="text-blue-500">{course.duration}</span>
              </p>
              <p className="text-sm text-blue-500">
                {course.fees}{" "}
                <span className="text-gray-600">first year fees</span>
              </p>
            </div>
            <hr />
          </>
        ))}
        <button className="w-full py-2 mt-4 bg-gray-200 text-gray-800 rounded-lg">
          View more
        </button>
      </div>
    </div>
  );
};

export default TopCourses;
