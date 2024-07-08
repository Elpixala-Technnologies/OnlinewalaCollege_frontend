import React from "react";
import Stats from "@/components/Stats/Stats";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";

function Forum() {
  const link = [
    {
      id: 1,
      linktext: "Master of Computer Application",
      linkurl: "#",
    },
    {
      id: 2,
      linktext: "Master of Commerce",
      linkurl: "#",
    },
    {
      id: 3,
      linktext: "Master of Computer Application",
      linkurl: "#",
    },
    {
      id: 4,
      linktext: "Master of Commerce",
      linkurl: "#",
    },
    {
      id: 5,
      linktext: "Master of Computer Application",
      linkurl: "#",
    },
    {
      id: 6,
      linktext: "Master of Commerce",
      linkurl: "#",
    },
  ];

  const cardsData = [
    {
      category: "Online Learning",
      timeAgo: "2 days ago",
      title: "Do HR of top MNCs accept online degrees?",
      views: 24,
      answers: 32,
      upvote: 12,
      downvote: 3,
    },
    {
      category: "Online Learning",
      timeAgo: "2 days ago",
      title: "Do HR of top MNCs accept online degrees?",
      views: 24,
      answers: 23,
      upvote: 12,
      downvote: 3,
    },
    {
      category: "Online Learning",
      timeAgo: "2 days ago",
      title: "Do HR of top MNCs accept online degrees?",
      views: 24,
      answers: 32,
      upvote: 12,
      downvote: 3,
    },
    {
      category: "Online Learning",
      timeAgo: "2 days ago",
      title: "Do HR of top MNCs accept online degrees?",
      views: 24,
      answers: 32,
      upvote: 12,
      downvote: 3,
    },
    {
      category: "Online Learning",
      timeAgo: "2 days ago",
      title: "Do HR of top MNCs accept online degrees?",
      views: 24,
      answers: 32,
      upvote: 12,
      downvote: 3,
    },
  ];

  const popularQuestion = [
    {
      id: 1,
      content: "Do HR of top MNCs accept online degrees?",
    },
    {
      id: 1,
      content:
        "Is online university degree valid for government and private jobs?",
    },
    {
      id: 1,
      content: "What is the importance of approvals and what are they?",
    },
    {
      id: 1,
      content:
        "How does Online MBA fare with other degree-granting full-time programmes at IIM Ahmedabad?",
    },
    {
      id: 1,
      content: "Can I join ISRO, after MSC physics?",
    },
  ];

  return (
    <div>
      <div className="bg-[#EEF4FF] w-full h-auto bg-custom-gradient flex justify-center py-8">
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-16 w-full max-w-screen-lg">
          <p className="font-semibold text-xl sm:text-2xl md:text-2xl text-[#2C2C2C]">
            Discussion Forum: Questions Answered By{" "}
            <span className="font-semibold text-xl sm:text-2xl md:text-2xl text-[#6697FC]">
              Industry Experts
            </span>
          </p>
          <p className="text-[#2C2C2C] font-normal text-xs sm:text-sm md:text-base mt-2 sm:mt-3 md:mt-4">
            Powered by experts. Powered by you (+20K members)
          </p>
          <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
            <Stats />
          </div>
          <div className="relative w-full max-w-md mx-auto mt-4 sm:mt-6 md:mt-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-search text-gray-400"></i>
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <i className="fas fa-microphone text-gray-400"></i>
            </span>
          </div>
          <div className="flex flex-wrap justify-center mt-6 sm:mt-8 md:mt-10 gap-4">
            <button className="rounded-3xl text-xs sm:text-sm md:text-base lg:text-lg font-medium shadow-inner text-white bg-[#001CAF] px-3 py-1 sm:px-4 sm:py-2.5 md:px-5 md:py-1 lg:px-6 lg:py-1">
              Ask Questions
            </button>
            <button className="rounded-3xl text-xs sm:text-sm md:text-base lg:text-lg font-medium border border-[#6697FC] bg-white px-3 py-1 sm:px-4 sm:py-2.5 md:px-5 md:py-1 lg:px-6 lg:py-1 text-[#2C2C2C]">
              Answer Questions
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="bg-[#D0E0FF] rounded-lg col-span-1 mt-4 p-6 h-fit hidden md:block">
          <p className="text-normal text-xl">All Topics</p>
          <div>
            <input
              type="text"
              placeholder="Search Topics"
              className="w-full pl-10 mt-4 pr-10 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-4">
            {link.map((link) => {
              return (
                <div
                  className="mt-4 text-sm font-normal text-[#2C2C2C] whitespace-nowrap"
                  key={link.id}
                >
                  <Link href={link.linkurl}> {link.linktext}</Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-none mt-0 md:col-span-2 md:ml-12">
          <div>
            {cardsData.map((card, index) => (
              <QuestionCard
                key={index}
                category={card.category}
                timeAgo={card.timeAgo}
                title={card.title}
                views={card.views}
                answers={card.answers}
                upvotes={card.upvote}
                downvotes={card.downvote}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="rounded-3xl text-xl sm:text-sm md:text-base lg:text-lg font-medium shadow-inner text-white bg-[#6697FC] px-3 py-1 sm:px-4 sm:py-2.5 md:px-5 md:py-1 lg:px-6 lg:py-1">
              View More
            </button>
          </div>
        </div>

        <div className="p-4 md:col-span-1">
          <div className="rounded-xl border-2 border-[#82abf7]">
            <div className="p-4 text-white rounded-t-lg font-medium text-lg bg-[#82abf7]">
              Popular Questions
            </div>
            <div className="m-4">
              {popularQuestion.map((ques) => {
                return (
                  <div
                    className="mt-3 lg:text-sm xl:text-base font-medium"
                    key={ques.id}
                  >
                    {ques.content}
                    <hr className="border-[#6697FC] my-4" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border-2 border-[#82abf7] mt-8">
            <div className="p-4 text-white rounded-t-lg font-medium text-lg bg-[#82abf7]">
              Recent Questions
            </div>
            <div className="m-4">
              {popularQuestion.map((ques) => {
                return (
                  <div
                    className="mt-3 lg:text-sm xl:text-base font-medium"
                    key={ques.id}
                  >
                    {ques.content}
                    <hr className="border-[#6697FC] my-4" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
