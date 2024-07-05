// components/ExploreCollegeList.tsx
import React from "react";
import CollegeExploreCard from "./CollegeExploreCard";

interface Collection {
  id: string;
  title: string;
  imageUrl: any;
  count: number;
}

interface ExploreCollegeListProps {
  collections: Collection[];
}

const ExploreCollegeList: React.FC<ExploreCollegeListProps> = ({
  collections,
}) => {
  return (
    <div className="rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="md:text-lg sm:text-sm text-xs font-semibold bg-white sm:px-6 px-3 py-2 rounded-full">
          Explore colleges
        </h2>
        <a href="#" className="text-blue-600 hover:underline">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {collections.map((collection) => (
          <CollegeExploreCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCollegeList;
