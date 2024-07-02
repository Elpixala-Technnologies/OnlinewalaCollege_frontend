import NewsData from "./NewsData";

const newsData = [
  {
    title: "MET 2024 Admit Card Released @Manipal.Edu; Check Direct Link Here",
    author: "Ankita Garkotion",
    date: "May 15, 2024",
  },
  {
    title: "MET 2024 Admit Card Released @Manipal.Edu; Check Direct Link Here",
    author: "Ankita Garkotion",
    date: "May 15, 2024",
  },
  {
    title: "MET 2024 Admit Card Released @Manipal.Edu; Check Direct Link Here",
    author: "Ankita Garkotion",
    date: "May 15, 2024",
  },
  // Add more news items...
];

const News: React.FC = () => {
  return (
    <div className="bg-white mt-5 p-4 rounded-lg shadow-md">
      <NewsData news={newsData} />
    </div>
  );
};

export default News;
