import React from "react";

interface Course {
  name: string;
}

interface SemesterData {
  semester: number;
  courses: Course[];
}

const SemesterColumn: React.FC<{ data: SemesterData }> = ({ data }) => {
  return (
    <div className="border border-gray-300 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">Semester {data.semester}</h2>
      <ul className="list-disc pl-5">
        {data.courses.map((course, index) => (
          <li key={index} className="mb-1">
            {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SemesterColumn;
