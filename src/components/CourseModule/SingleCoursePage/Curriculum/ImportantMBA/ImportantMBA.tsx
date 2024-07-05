"use client";
import { useState, useEffect } from "react";
import SubjectTable from "./SubjectCard";

interface Subject {
  name: string;
  topics: string[];
}

export default function Home() {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    // Simulating data fetch
    const data: Subject[] = [
      {
        name: "Financial Accounting",
        topics: [
          "Generally Accepted Accounting Principles",
          "Financial statement preparation and analysis",
          "Revenue recognition",
          "Inventory valuation methods",
          "Financial reporting standards",
        ],
      },
      {
        name: "Business Economics",
        topics: [
          "Economics of firm strategy",
          "Managerial economics",
          "Economics of the money and banking",
          "Statistics for business analysis",
          "Fiscal economics",
        ],
      },
      // Add other subjects here...
    ];
    setSubjects(data);
  }, []);

  return (
    <div className="px-4 py-8 mt-5">
      <h1 className="md:text-xl font-bold mb-4">
        What are the Important MBA Subjects?
      </h1>
      <p className="mb-6">
        MBA syllabus in top B-Schools of India is structured to equip students
        with the knowledge, skills, and practical experience required to succeed
        in the dynamic and competitive world of business. Check out some of the
        important MBA subjects below:
      </p>
      <SubjectTable subjects={subjects} />
    </div>
  );
}
