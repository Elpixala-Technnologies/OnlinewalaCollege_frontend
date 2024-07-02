// components/NewsGrid.tsx
import React from "react";
import NewsCard from "./NewsCard";

interface NewsItem {
  id: string;
  title: string;
  imageUrl: any;
}

interface NewsGridProps {
  newsItems: NewsItem[];
}

const NewsGrid: React.FC<NewsGridProps> = ({ newsItems }) => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">News Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm">
          View more
        </button>
      </div>
    </div>
  );
};

export default NewsGrid;
