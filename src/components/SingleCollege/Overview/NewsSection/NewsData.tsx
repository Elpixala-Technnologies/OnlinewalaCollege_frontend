import React from "react";

interface NewsItem {
  title: string;
  author: string;
  date: string;
}

interface NewsProps {
  news: NewsItem[];
}

const NewsData: React.FC<NewsProps> = ({ news }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Manipal University Jaipur Latest News
      </h1>
      <p className="text-gray-600 mb-6">Recent news about this college</p>

      {news.map((item, index) => (
        <div
          key={index}
          className="mb-6 flex items-center bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="flex-grow p-4">
            <h2 className="md:text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600">
              Written By{item.author} {item.date}
            </p>
          </div>
          <div className="bg-orange-100 p-4 flex items-center justify-center">
            <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm">
              ADMIT CARD
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-center items-center">
        <button className="w-40 font-semibold rounded-full text-center py-2 bg-gray-200 mt-4">
          View more
        </button>
      </div>
    </div>
  );
};

export default NewsData;
