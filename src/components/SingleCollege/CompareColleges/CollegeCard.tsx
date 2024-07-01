import Image from "next/image";
import React from "react";

type CollegeCardProps = {
  name: string;
  fees: string;
  image: string;
  logo: string;
  button: string;
};

const CollegeCard: React.FC<CollegeCardProps> = ({
  name,
  fees,
  image,
  logo,
  button,
}) => (
  <div className="border p-4 rounded-lg shadow-sm">
    <div className="relative h-40 mb-4">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute bottom-2 left-2 bg-white p-1 rounded-full">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{name}</h3>
    <p className="text-blue-600 mb-4">Fees: {fees}</p>
    <button
      className={`w-full py-2 px-4 ${
        button === "Compare"
          ? "bg-blue-100 text-blue-600"
          : "bg-blue-600 text-white"
      } rounded-md`}
    >
      {button}
    </button>
  </div>
);

export default CollegeCard;
