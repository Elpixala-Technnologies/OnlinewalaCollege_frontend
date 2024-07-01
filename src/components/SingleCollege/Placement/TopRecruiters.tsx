// components/TopRecruiters.tsx
import React from "react";

interface Recruiter {
  name: string;
  companies: string[];
}

interface TopRecruitersProps {
  recruiters: Recruiter[];
}

const TopRecruiters: React.FC<TopRecruitersProps> = ({ recruiters }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Manipal Online Top Recruiters</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-100">
              {recruiters[0].companies.map((_, index) => (
                <th key={index} className="border p-2 text-left">
                  Company {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recruiters.map((recruiter, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                {recruiter.companies.map((company, companyIndex) => (
                  <td key={companyIndex} className="border p-2">
                    {company}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopRecruiters;
