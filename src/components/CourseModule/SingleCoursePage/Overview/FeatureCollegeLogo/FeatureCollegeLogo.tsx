import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/image 176.png";

function FeatureCollegeLogo() {
  const collegeData = [
    { id: "1", name: "IIT", logoUrl: Logo },
    { id: "2", name: "IIM", logoUrl: Logo },
    { id: "4", name: "IIM", logoUrl: Logo },
    { id: "5", name: "IIM", logoUrl: Logo },
    { id: "6", name: "IIM", logoUrl: Logo },
    { id: "7", name: "IIM", logoUrl: Logo },
    { id: "8", name: "IIM", logoUrl: Logo },
    { id: "9", name: "IIM", logoUrl: Logo },
    { id: "10", name: "IIM", logoUrl: Logo },
    // ... add more college data
  ];
  return (
    <div className="py-5 xl:px-0 px-2 max-w-[1332px] mx-auto">
      <div className="bg-white p-5 rounded-lg">
        <h2 className=" font-bold text-center mb-6">Featured Colleges</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {collegeData?.map((college: any) => (
            <div
              key={college.id}
              className="w-20 h-20 flex items-center justify-center"
            >
              <Image
                src={college.logoUrl}
                alt={college.name}
                width={80}
                height={80}
                className="object-fill"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureCollegeLogo;
