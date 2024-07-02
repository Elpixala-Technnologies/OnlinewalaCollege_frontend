// components/CollectionGrid.tsx
import React from "react";
import CollectionCard from "./CollectionCard";

interface Collection {
  id: string;
  title: string;
  imageUrl: any;
  count: number;
}

interface CollectionGridProps {
  collections: Collection[];
}

const CollectionGrid: React.FC<CollectionGridProps> = ({ collections }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="md:text-lg sm:text-sm text-xs font-semibold bg-white sm:px-6 px-3 py-2 rounded-full">
          Top Collections for MBA/PGDM
        </h2>
        <a href="#" className="text-blue-600 hover:underline">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default CollectionGrid;
