import React from "react";
import NewsCardImage from "@/assets/images/CollegeImage.png";
import NewsGrid from "./NewsArticle/NewsGrid";

const newsItems = [
  {
    id: "1",
    title: "MET 2024 Admit Card Released @Manipal.Edu; Check Direct Link Here",
    imageUrl: NewsCardImage,
  },
  {
    id: "2",
    title: "MET 2024 Admit Card Released @Manipal.Edu; Check Direct Link Here",
    imageUrl: NewsCardImage,
  },
  {
    id: "3",
    title: "MET 2024 Admit Card Released @Manipal.Edu; Check Direct Link Here",
    imageUrl: NewsCardImage,
  },

  // Add more items as needed...
];

const NewsArticles: React.FC = () => {
  return (
    <div className="py-8">
      <NewsGrid newsItems={newsItems} />
    </div>
  );
};

export default NewsArticles;
