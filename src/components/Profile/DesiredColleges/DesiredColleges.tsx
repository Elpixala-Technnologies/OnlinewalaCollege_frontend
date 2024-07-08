"use client";

import React, { useState } from "react";

function DesiredColleges({ onNext }: any) {
  const [selectedColleges, setSelectedColleges] = useState("");

  return (
    <>
      <div className="p-8 mt-4 bg-white lg:w-[50%] w-full mx-auto border border-gray-400 rounded-xl">
        <h2 className="text-lg font-medium mb-4">
          Colleges You Applied/Applying To:
        </h2>
        <div className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Select Colleges"
              value={selectedColleges}
              onChange={(e) => setSelectedColleges(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Status"
              className="w-full p-2 bg-gray-200 border border-gray-300 rounded"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="mt-6 text-right">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save
        </button>
      </div>
    </>
  );
}

export default DesiredColleges;
