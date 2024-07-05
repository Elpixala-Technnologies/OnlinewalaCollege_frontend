import { useState } from "react";
import { CollegeCard } from "./CollegeCard";
import LogoImage from "@/assets/images/image 176.png";
import PopularCollegeCard from "@/components/CollegeCard/PopularCollegeCard";
import AboutMBA from "../Overview/AboutMBA";

const collegesData = [
  {
    id: "1",
    name: "IIMA - Indian Institute of Management, Ahmedabad",
    location: "Ahmedabad, Gujarat",
    accreditation: "UGC Approved",
    courseFees: 2500000,
    highestPackage: 11500000,
    averagePackage: 3436000,
    rating: 4.1,
    reviews: 402,
    logo: LogoImage,
  },
  {
    id: "2",
    name: "SP Jain [SPJIMR], Mumbai",
    location: "Mumbai, Maharashtra",
    accreditation: "AICTE, NBA, AACSB, AMBA Approved",
    courseFees: 2400000,
    highestPackage: 8100000,
    averagePackage: 3336000,
    rating: 4.1,
    reviews: 402,
    logo: LogoImage,
  },
  {
    id: "3",
    name: "IIFT Delhi Indian Institute of Foreign Trade, New Delhi",
    location: "New Delhi, Delhi NCR",
    accreditation: "AACSB Approved",
    courseFees: 3300000,
    highestPackage: 11500000,
    averagePackage: 3436000,
    rating: 4.1,
    reviews: 402,
    logo: LogoImage,
  },
];

export default function TopColleges() {
  const [colleges] = useState(collegesData);

  return (
    <>
      <div className="max-w-[1300px] mx-auto p-4 bg-white rounded-lg">
        <AboutMBA />
      </div>
      <div className="max-w-[1300px] mx-auto p-4 bg-white rounded-lg mt-5">
        <h1 className="md:text-xl mb-4">83 colleges providing online MBA</h1>
        <div className="flex flex-wrap mb-4 space-x-2">
          <button className="bg-blue-100 px-4 py-1 text-sm rounded-full">
            Stream
          </button>
          <button className="bg-blue-100 px-4 py-1 text-sm rounded-full">
            Course
          </button>
          <button className="bg-blue-100 px-4 py-1 text-sm rounded-full">
            Program type
          </button>
          <button className="bg-blue-100 px-4 py-1 text-sm rounded-full">
            Course type
          </button>
          <button className="bg-blue-100 px-4 py-1 text-sm rounded-full">
            Filters
          </button>
        </div>
        <div>
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
        <div>
          <PopularCollegeCard />
        </div>
      </div>
    </>
  );
}
