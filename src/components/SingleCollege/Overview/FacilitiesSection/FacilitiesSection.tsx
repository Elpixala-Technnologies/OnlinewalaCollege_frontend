import React from "react";
import { FaGraduationCap } from "react-icons/fa";

interface Facility {
  id: number;
  name: string;
}

const facilities: Facility[] = [
  { id: 1, name: "Comp labs" },
  { id: 2, name: "Comp labs" },
  { id: 3, name: "Comp labs" },
  { id: 4, name: "Comp labs" },
  { id: 5, name: "Comp labs" },
  { id: 6, name: "Comp labs" },
  { id: 7, name: "Comp labs" },
];

const FacilitiesSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5 mb-5">
      <h2 className="text-2xl font-bold mb-2">
        Manipal University Jaipur Facilities
      </h2>
      <p className="text-gray-600 mb-6">
        You can check here to see what types of facilities Manipal University
        Jaipur provides.
      </p>
      <div className="flex flex-wrap lg:justify-start justify-center items-center gap-4">
        {facilities.map((facility) => (
          <div key={facility.id} className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-lg mb-2">
              <FaGraduationCap className="text-gray-700 text-3xl" />
            </div>
            <p className="text-center text-sm">{facility.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesSection;
