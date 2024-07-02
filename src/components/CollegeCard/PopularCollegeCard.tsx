import React from "react";
import PopularSingleCard from "./PopularSingleCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PopularCollegeCard: React.FC = () => {
  const cardData = [
    {
      universityName: "Chandigarh University (CU)",
      location: "Chandigarh",
      price: "INR 1,75,000",
      rating: "4.5",
      reviews: 60,
      affiliations: ["AICTE", "NIRF", "UGC", "NAAC A+"],
    },
    // Other cards can have different data if needed
    {
      universityName: "Lovely Professional University (LPU)",
      location: "Punjab",
      price: "INR 2,00,000",
      rating: "4.3",
      reviews: 50,
      affiliations: ["AICTE", "NIRF", "UGC", "NAAC A+"],
    },
    {
      universityName: "Lovely Professional University (LPU)",
      location: "Punjab",
      price: "INR 2,00,000",
      rating: "4.3",
      reviews: 50,
      affiliations: ["AICTE", "NIRF", "UGC", "NAAC A+"],
    },
    {
      universityName: "Lovely Professional University (LPU)",
      location: "Punjab",
      price: "INR 2,00,000",
      rating: "4.3",
      reviews: 50,
      affiliations: ["AICTE", "NIRF", "UGC", "NAAC A+"],
    },
  ];

  return (
    <div className="bg-blue-400 h-[364px] flex flex-col items-center relative p-4">
      <div className="flex justify-between items-start w-full px-4 my-4">
        <h1 className="sm:text-2xl font-bold text-white">
          {`Popular colleges providing online bachelor's degrees`}
        </h1>
        <div className="text-2xl font-bold text-white flex justify-between items-center gap-6">
          <button>
            <FaAngleLeft />
          </button>
          <button>
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="flex py-4 absolute top-24 overflow-x-auto w-full px-4 hide-scrollbar ">
        {cardData.map((data, index) => (
          <PopularSingleCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default PopularCollegeCard;
