// components/MBAHighlights.tsx
import React from "react";

interface HighlightRow {
  particulars: string;
  details: string | string[];
}

const highlightsData: HighlightRow[] = [
  {
    particulars: "Course Name",
    details: "MBA or Master of Business Administration",
  },
  { particulars: "Course Level", details: "Postgraduate" },
  {
    particulars: "Types of Courses",
    details: "Full-Time, Part-Time, Distance, Online, Executive, Integrated",
  },
  {
    particulars: "MBA Course Duration",
    details: [
      "Full-Time MBA: 2 Years",
      "Part-Time MBA: 2-3 Years",
      "Distance MBA: 2-3 Years",
      "Online MBA: 2-3 Years",
      "Executive MBA: 15-18 Months",
      "Integrated MBA: 5 Years",
    ],
  },
  {
    particulars: "Top Specializations",
    details:
      "Sales, Marketing, Finance, Human Resources, IT, Operations, Business Analytics, etc.",
  },
  {
    particulars: "MBA Eligibility Criteria",
    details:
      "A bachelor's degree in any stream from a recognized university with a minimum of 50-% marks.",
  },
  {
    particulars: "MBA Entrance Exams",
    details: "CAT, MAT, XAT, ATMA, SNAP, CMAT, NMAT by GMAC, MAH MBA CET, etc.",
  },
  { particulars: "MBA Fees in India", details: "INR 20,000 to 40 Lakh" },
  {
    particulars: "Top Job Profiles",
    details:
      "HR Manager, Brand Manager, Product Manager, Marketing Manager, Sales Manager, Financial Analyst, Business Analyst, etc.",
  },
  {
    particulars: "Average Salary in India",
    details: [
      "Entry Level: INR 5 LPA to 8 LPA",
      "Mid Level: INR 10 LPA to 18 LPA",
      "Senior Level: INR 20 LPA to 50 LPA",
    ],
  },
  {
    particulars: "Top Recruiters",
    details:
      "Amazon, Citigroup, Deloitte, Apple, Bain & Company, Flipkart, Microsoft, Google, Tesla, LinkedIn",
  },
];

const MBAHighlights: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">MBA Course Highlights</h2>
      <p className="mb-4 text-sm">
        If you are interested in pursuing an MBA course, check out the major
        highlights mentioned below.
      </p>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="border p-2 text-left">Particulars</th>
            <th className="border p-2 text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          {highlightsData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="border p-2">{row.particulars}</td>
              <td className="border p-2">
                {Array.isArray(row.details) ? (
                  <ul className="list-disc pl-4">
                    {row.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  row.details
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MBAHighlights;
