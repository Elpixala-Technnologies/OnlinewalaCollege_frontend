import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Rectangle 728.png";

const newsItems = [
  {
    title: "Manipal School of Architecture and Planning - [MSAP]",
    date: "May 15, 2024",
    logo: Logo,
  },
  {
    title: "Manipal School of Architecture and Planning - [MSAP]",
    date: "May 15, 2024",
    logo: Logo,
  },
  {
    title: "Manipal School of Architecture and Planning - [MSAP]",
    date: "May 15, 2024",
    logo: Logo,
  },
  {
    title: "Manipal School of Architecture and Planning - [MSAP]",
    date: "May 15, 2024",
    logo: Logo,
  },
];

const TopNews: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg mt-5">
      <div className="p-10">
        <h2 className="text-xl font-semibold mb-4">News</h2>
        {newsItems?.map((item: any, index: any) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-[18px]">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.date}</p>
            </div>
            <Image
              src={item.logo}
              alt="Logo"
              className="w-12 h-12 rounded-full"
            />
          </div>
        ))}
        <button className="w-full py-2 mt-4 bg-gray-200 text-gray-800 rounded-lg">
          View more
        </button>
      </div>
    </div>
  );
};

export default TopNews;
