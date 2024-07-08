import React from "react";
import NoImage from "@/assets/images/Rectangle 797.png";
import Image from "next/image";

function PendingApplications() {
  return (
    <div className="flex items-center justify-center">
      <div className=" p-8 rounded-lg w-full">
        <h1 className="text-2xl font-bold mb-4">Common Application Form</h1>
        <p className="text-gray-600 mb-6 text-center">
          Nothing to show yet. You haven't applied to any colleges.
        </p>

        <div className="relative mb-6">
          <Image
            src={NoImage}
            alt="Illustration"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* <div className="flex justify-center items-center">
          <button className="bg-[#001CAF] text-white py-2 px-4 rounded-md hover:bg-[#1f2c70] transition duration-300 w-max">
            write a review now
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default PendingApplications;
