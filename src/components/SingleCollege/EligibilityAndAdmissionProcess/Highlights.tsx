import React from "react";

interface HighlightsProps {
  highlights: {
    instituteName: string;
    location: string;
    instituteType: string;
    entranceExam: string;
    applicationMode: string;
    officialWebsite: string;
  };
}

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg mb-8">
      <h2 className="sm:text-xl font-bold mb-4">Manipal Online Highlights</h2>
      <table className="w-full">
        <tbody>
          {Object.entries(highlights).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="py-2 font-semibold sm:text-base text-xs">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </td>
              <td className="py-2 sm:text-base text-xs">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Highlights;
