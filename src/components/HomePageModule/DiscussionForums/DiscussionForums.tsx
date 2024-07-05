import React from "react";
import ForumPost from "./ForumPost";
import ViewMoreButton from "./ViewMoreButton";

const DiscussionForums = () => {
  const forumData = [
    {
      id: 1,
      category: "Online Learning",
      title: "Do HR of top MNCs accept online degrees?",
      upvotes: 0,
      views: 1200,
      answers: 12,
      timeAgo: "2 days ago",
    },
    {
      id: 2,
      category: "Online Learning",
      title: "Do HR of top MNCs accept online degrees?",
      upvotes: 0,
      views: 1200,
      answers: 12,
      timeAgo: "2 days ago",
    },
    {
      id: 3,
      category: "Online Learning",
      title: "Do HR of top MNCs accept online degrees?",
      upvotes: 0,
      views: 1200,
      answers: 12,
      timeAgo: "2 days ago",
    },
    {
      id: 4,
      category: "Online Learning",
      title: "Do HR of top MNCs accept online degrees?",
      upvotes: 0,
      views: 1200,
      answers: 12,
      timeAgo: "2 days ago",
    },
    {
      id: 5,
      category: "Online Learning",
      title: "Do HR of top MNCs accept online degrees?",
      upvotes: 0,
      views: 1200,
      answers: 12,
      timeAgo: "2 days ago",
    },
    // Add more forum data as needed
  ];
  return (
    <div className="container mx-auto p-7">
      <h1 className="text-3xl font-bold mb-6">Discussions Forums</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-24">
        {forumData?.map((post: any, index: any) => (
          <ForumPost key={index} {...post} />
        ))}
      </div>
      <ViewMoreButton />
    </div>
  );
};

export default DiscussionForums;
