// components/PopularTags.tsx
import React from "react";

interface PopularTagsProps {
  tags: { name: string; count: number }[];
}

const PopularTags: React.FC<PopularTagsProps> = ({ tags }) => {
  return (
    <div className="mb-4">
      <h3 className="font-bold mb-2">Most Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
          >
            {tag.name} ({tag.count})
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
