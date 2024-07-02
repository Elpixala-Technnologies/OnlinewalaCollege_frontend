// components/NewsCard.tsx
import React from "react";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  imageUrl: any;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative rounded-lg shadow-lg h-[300px] ">
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-full object-fill rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-transparent px-4 pt-10 pb-5 rounded-lg">
        <p className="text-white text-sm">{title}</p>
      </div>
    </div>
  );
};

export default NewsCard;
