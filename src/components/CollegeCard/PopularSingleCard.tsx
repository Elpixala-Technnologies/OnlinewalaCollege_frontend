import React from "react";
import College from "@/assets/images/Rectangle 7.png";
import Image from "next/image";

interface PopularSingleCardProps {
  universityName: string;
  location: string;
  price: string;
  rating: string;
  reviews: number;
  affiliations: string[];
}

const PopularSingleCard: React.FC<PopularSingleCardProps> = ({
  universityName,
  location,
  price,
  rating,
  reviews,
  affiliations,
}) => {
  return (
    <div className="min-w-[250px] max-w-[250px] rounded overflow-hidden shadow-lg bg-white mx-4">
      <Image
        src={College}
        alt="University Building"
        width={164}
        height={160}
        className="w-full h-[136px] object-fill p-2"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[20px] mb-2">{universityName}</div>
        <p className="text-gray-700 text-base">{location}</p>
        <p className="text-blue-500 text-xl mt-2">{price}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-xl">⭐</span>
          <span className="ml-2">{rating}/5</span>
          <span className="ml-2 text-gray-600">({reviews} reviews)</span>
        </div>
        <div className="mt-2">
          {affiliations.map((affiliation, index) => (
            <span key={index} className="">
              {affiliation}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSingleCard;
