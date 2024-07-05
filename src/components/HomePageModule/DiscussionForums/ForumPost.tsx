import React from "react";

interface ForumPostProps {
  category: string;
  title: string;
  upvotes: number;
  views: number;
  answers: number;
  timeAgo: string;
}

const ForumPost: React.FC<ForumPostProps> = ({
  category,
  title,
  upvotes,
  views,
  answers,
  timeAgo,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300">
      <div className="text-sm text-gray-500 mb-2 flex justify-between">
        <span>{category}</span>
        <span>{timeAgo}</span>
      </div>
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="flex items-center text-sm text-gray-500">
        <button className="mr-4">
          <span className="mr-1">👍</span> Upvote
        </button>
        <span className="mr-4">👁 {views}</span>
        <span>💬 Answers ({answers})</span>
      </div>
    </div>
  );
};

export default ForumPost;
