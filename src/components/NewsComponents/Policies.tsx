import React from "react";
import Image from "next/image";
import exam from "@/assets/images/exam.png";
import policies from "@/assets/images/policies.png";

function Policies() {
  const news = [
    {
      id: 1,
      content: "UP cabinet clears ordinance to curb paper leaks, offenders to face life imprisonment",
      image: policies,
    },
    {
      id: 1,
      content: "UP cabinet clears ordinance to curb paper leaks, offenders to face life imprisonment",
      image: policies,
    },
    {
      id: 1,
      content: "UP cabinet clears ordinance to curb paper leaks, offenders to face life imprisonment",
      image: policies,
    },
    {
      id: 1,
      content: "UP cabinet clears ordinance to curb paper leaks, offenders to face life imprisonment",
      image: policies,
    },
  ];

  return (
    <div className="m-10 p-8 rounded-lg bg-white">
        <p className="text-2xl font-bold">Policies</p>
      <div className=" xl:m-14 lg:m-6 lg:grid lg:grid-cols-4  xl:gap-8 lg:gap-4 mt-6">
        {news.map((news) => {
          return (
            <div key={news.id} className="mb-5">
              <div>
                <Image src={news.image} alt="image" className="rounded-lg" />
              </div>
              <p className=" mt-3 xl:text-lg font-medium lg:text-sm ">
                {news.content}
                <span className="xl:text-sm lg:text-xs block text-slate-500">
                  June 18, 2024
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Policies;
