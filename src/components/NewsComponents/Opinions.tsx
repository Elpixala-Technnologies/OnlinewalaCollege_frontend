import React from "react";
import Image from "next/image";
import lady from "@/assets/images/lady.png";
function Opinions() {
  const array = [
    {
      id: 1,
      images: lady,
      content:
        "NEET was far from fair even before this year's grace marks, paper-leak controversies",
    },
    {
      id: 1,
      images: lady,
      content:
        "NEET was far from fair even before this year's grace marks, paper-leak controversies",
    },
    {
      id: 1,
      images: lady,
      content:
        "NEET was far from fair even before this year's grace marks, paper-leak controversies",
    },
    {
      id: 1,
      images: lady,
      content:
        "NEET was far from fair even before this year's grace marks, paper-leak controversies",
    },
    {
      id: 1,
      images: lady,
      content:
        "NEET was far from fair even before this year's grace marks, paper-leak controversies",
    },
    {
      id: 1,
      images: lady,
      content:
        "NEET was far from fair even before this year's grace marks, paper-leak controversies",
    },
  ];

  return (
    <div className="m-10 lg:p-8 p-6 rounded-lg bg-white">
      <div className="flex justify-between">
        <p className="font-bold text-2xl">Opinions</p>
        <p className="text-[#6697FC] font-medium">See all</p>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4 p-1">
        {array.map((data) => (
          <div key={data.id} className=" flex  lg:p-2 xl:p-4 m-5 lg:m-0">
            <Image
              src={data.images}
              alt="image"
              
              className="rounded-lg lg:mr-5 mr-3 lg:aspect-square lg:w-16 xl:w-20 w-16 "
            />
            <p className="font-medium lg:text-sm xl:text-lg text-[10px]">
              {data.content}
              <span className="text-[8px] mt-1 lg:mt-2 block text-slate-500">
                June 18, 2024
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opinions;
