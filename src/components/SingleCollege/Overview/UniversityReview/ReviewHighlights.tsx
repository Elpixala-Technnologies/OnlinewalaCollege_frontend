import React from "react";

interface ReviewHighlightsProps {
  data: {
    likes: string[];
    dislikes: string[];
  };
}

const ReviewHighlights: React.FC<ReviewHighlightsProps> = ({ data }) => {
  return (
    <>
      <div className="my-6 text-[20px] font-semibold">
        <h1>What Students Say?</h1>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2 text-xl text-green-500">Likes</h3>
          <ul className="list-disc pl-5">
            {data.likes.map((like, index) => (
              <li key={index}>{like}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2 text-xl text-red-500">Dislikes</h3>
          <ul className="list-disc pl-5">
            {data.dislikes.map((dislike, index) => (
              <li key={index}>{dislike}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ReviewHighlights;
