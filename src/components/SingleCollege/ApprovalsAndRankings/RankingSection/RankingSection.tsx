import React from "react";
import RankingTable from "../RankingTable/RankingTable";
import Image from "next/image";

type RankingSectionType = {
  title: string;
  logo: string;
  rankings: any;
};

const RankingSection: React.FC<RankingSectionType> = ({
  title,
  logo,
  rankings,
}) => {
  return (
    <div className="mb-8 bg-gray-100 p-6 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="md:text-xl font-bold ">{title}</h2>
        <Image
          src={logo}
          alt={title}
          width={100}
          height={100}
          className="w-16 h-16 mr-4"
        />
      </div>
      <RankingTable rankings={rankings} />
    </div>
  );
};

export default RankingSection;
