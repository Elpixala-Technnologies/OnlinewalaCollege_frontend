// components/MBASyllabus.tsx
import React from "react";
import SemesterColumn from "./SemesterColumn";

interface Course {
  name: string;
}

interface SemesterData {
  id: number;
  semester: number;
  courses: Course[];
}

const MBASyllabus: React.FC<{ semesters: SemesterData[] }> = ({
  semesters,
}) => {
  return (
    <div className="p-4">
      <h1 className="md:text-xl font-bold mb-4">
        MBA Syllabus for Online Courses
      </h1>
      <p className="mb-4">
        The online MBA syllabus is often quite similar to that of a traditional
        on-campus MBA program, with the main difference being the delivery
        method. Check out the semester wish MBA course syllabus 2024 for online
        courses.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {semesters.map((semester) => (
          <SemesterColumn key={semester.semester} data={semester} />
        ))}
      </div>
    </div>
  );
};

export default MBASyllabus;
