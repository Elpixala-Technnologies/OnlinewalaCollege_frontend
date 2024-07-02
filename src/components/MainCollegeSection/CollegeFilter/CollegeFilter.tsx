"use client";
import { useState } from "react";

const CollegeFilter = () => {
  const [selectedSpecialization, setSelectedSpecialization] =
    useState("HR Management");
  const [selectedLocation, setSelectedLocation] = useState("New York");
  const [selectedFees, setSelectedFees] = useState("0-5000");
  const [selectedRating, setSelectedRating] = useState("1-2");

  const specializations = [
    "Finance Management",
    "HR Management",
    "Marketing Management",
    "General Management",
    "Business Analytics",
    "IT Management",
    "Operation Management",
  ];

  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
  ];

  const fees = [
    "0-5000",
    "5001-10000",
    "10001-20000",
    "20001-50000",
    "50001-100000",
  ];

  const ratings = ["1-2", "2-3", "3-4", "4-5"];

  return (
    <div className=" flex justify-center items-center">
      <div className="bg-white rounded-md py-3 px-1 w-full">
        <h2 className="text-xl font-semibold mb-6 mt-2 py-2">
          Search by CollegeFilters
        </h2>

        <div className="border rounded-md p-4 mb-4">
          <h3 className="text-lg font-medium mb-2">Specialization</h3>
          <ul>
            {specializations.map((specialization) => (
              <li key={specialization} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="specialization"
                    value={specialization}
                    checked={selectedSpecialization === specialization}
                    onChange={() => setSelectedSpecialization(specialization)}
                    className="mr-2"
                  />
                  {specialization}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-md p-4 mb-4">
          <h3 className="text-lg font-medium mb-2">Location</h3>
          <ul>
            {locations.map((location) => (
              <li key={location} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="location"
                    value={location}
                    checked={selectedLocation === location}
                    onChange={() => setSelectedLocation(location)}
                    className="mr-2"
                  />
                  {location}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-md p-4 mb-4">
          <h3 className="text-lg font-medium mb-2">Fees</h3>
          <ul>
            {fees.map((fee) => (
              <li key={fee} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="fees"
                    value={fee}
                    checked={selectedFees === fee}
                    onChange={() => setSelectedFees(fee)}
                    className="mr-2"
                  />
                  {fee}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-2">Rating</h3>
          <ul>
            {ratings.map((rating) => (
              <li key={rating} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={selectedRating === rating}
                    onChange={() => setSelectedRating(rating)}
                    className="mr-2"
                  />
                  {rating}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollegeFilter;
