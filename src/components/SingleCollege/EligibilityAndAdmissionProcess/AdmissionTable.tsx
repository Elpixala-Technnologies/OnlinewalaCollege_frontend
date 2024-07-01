import React from "react";

interface AdmissionTableProps {
  title: string;
  data: {
    course: string;
    duration: string;
    fee: string;
    specialization: string;
    eligibility: string;
    selectionCriteria?: string;
  }[];
}

const AdmissionTable: React.FC<AdmissionTableProps> = ({ title, data }) => {
  return (
    <div className="mb-8">
      <h2 className="sm:text-xl font-bold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-100">
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="border p-2 text-left ">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                {Object.values(item).map((value, i) => (
                  <td
                    key={i}
                    className="border p-2 sm:text-base text-xs sm:min-w-max min-w-48"
                  >
                    {value}
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

export default AdmissionTable;
