// components/CollectionCard.tsx
import React from "react";
import Image from "next/image";

interface CollectionCardProps {
  collection: {
    title: string;
    imageUrl: string;
    count: number;
  };
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <Image
        src={collection?.imageUrl}
        alt={collection?.title}
        className="w-full h-[349px] object-fill"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-gray-900 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-white text-sm mb-2">{collection?.title}</p>
          <span className="bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold mr-2">
            {collection.count}+ more
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
