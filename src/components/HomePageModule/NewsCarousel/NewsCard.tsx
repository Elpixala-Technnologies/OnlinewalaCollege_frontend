// components/NewsCard.tsx
import React from "react";
import Image from "next/image";

interface NewsCardProps {
  newsItem: {
    title: string;
    imageUrl: any;
    date: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem }) => {
  return (
    <div className="flex-shrink-0 w-64 sm:w-80">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <Image
          src={newsItem.imageUrl}
          alt={newsItem.title}
          width={320}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-3">
            {newsItem.title}
          </h3>
          <p className="text-sm text-gray-600">{newsItem.date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
