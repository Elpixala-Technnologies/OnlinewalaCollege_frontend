import { useState } from "react";
import CollegeImage from "@/assets/images/Rectangle 648.png";
import Image from "next/image";

const tabs = ["All", "College", "Exams", "Admissions"];

interface NewsItem {
  id: number;
  title: string;
  image: any;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "College News 1",
    image: CollegeImage,
    category: "College",
  },
  {
    id: 2,
    title: "Exam News 1",
    image: CollegeImage,
    category: "Exams",
  },
  {
    id: 3,
    title: "Admission News 1",
    image: CollegeImage,
    category: "Admissions",
  },
  {
    id: 4,
    title: "College News 2",
    image: CollegeImage,
    category: "College",
  },
  {
    id: 5,
    title: "Exam News 2",
    image: CollegeImage,
    category: "Exams",
  },
];

export default function NewsAndUpdates() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredNewsItems =
    activeTab === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === activeTab);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">
        Manipal University Jaipur Latest News
      </h1>

      <div className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNewsItems.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>

      <button className="mt-4 px-4 py-2 bg-gray-200 rounded">View more</button>
    </div>
  );
}

// components/NewsCard.tsx
interface NewsCardProps {
  title: string;
  image: string;
}

export function NewsCard({ title, image }: NewsCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <Image src={image} alt={title} className="w-full h-48 object-fill" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-transparent p-8">
        <p className="text-white text-sm">{title}</p>
      </div>
    </div>
  );
}
