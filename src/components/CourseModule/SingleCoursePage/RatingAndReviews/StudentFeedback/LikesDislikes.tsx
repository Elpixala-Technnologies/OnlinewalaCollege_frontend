// components/LikesDislikes.tsx
import React from "react";

interface LikesDislikesProps {
  likes: string[];
  dislikes: string[];
}

const LikesDislikes: React.FC<LikesDislikesProps> = ({ likes, dislikes }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-1 bg-green-100 p-4 rounded-lg">
        <h2 className="font-semibold text-green-800 mb-2">Likes</h2>
        <ul className="list-disc pl-5">
          {likes.map((item, index) => (
            <li key={index} className="text-green-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 bg-red-100 p-4 rounded-lg">
        <h2 className="font-semibold text-red-800 mb-2">Dislikes</h2>
        <ul className="list-disc pl-5">
          {dislikes.map((item, index) => (
            <li key={index} className="text-red-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LikesDislikes;
