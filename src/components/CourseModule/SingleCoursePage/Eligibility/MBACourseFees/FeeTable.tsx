import React from "react";

interface CollegeFee {
  name: string;
  fee: string;
}

interface FeeTableProps {
  fees: CollegeFee[];
}

const FeeTable: React.FC<FeeTableProps> = ({ fees }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-blue-300 p-3 text-left font-semibold">
              Name of the College
            </th>
            <th className="border border-blue-300 p-3 text-left font-semibold">
              Total Fees (Approx.)
            </th>
          </tr>
        </thead>
        <tbody>
          {fees.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-blue-100 p-3">{item.name}</td>
              <td className="border border-blue-100 p-3">{item.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeTable;
