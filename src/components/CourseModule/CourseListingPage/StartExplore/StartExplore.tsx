import TopAll from "@/components/TopAll/TopAll";
import React from "react";
import { HiMiniComputerDesktop } from "react-icons/hi2";

const StartExplore = () => {
  const data = [
    {
      id: 1,
      image: <HiMiniComputerDesktop />,
      title: "Fully online",
      description:
        "Explore our fully online courses designed to match your ambitions and open the door to limitless growth and success.",
    },
    {
      id: 2,
      image: <HiMiniComputerDesktop />,
      title: "Flexible schedule",
      description:
        "Learn at your own pace with our flexible schedule options, making it easy to balance your studies with your personal and professional life.",
    },
    {
      id: 3,
      image: <HiMiniComputerDesktop />,
      title: "Expert instructors",
      description:
        "Our courses are taught by industry experts who provide valuable insights and hands-on experience to help you succeed.",
    },
    {
      id: 4,
      image: <HiMiniComputerDesktop />,
      title: "Career support",
      description:
        "Benefit from our comprehensive career support services, including resume building, interview preparation, and job placement assistance.",
    },
  ];

  return (
    <>
      <div className="bg-blue-400 p-5">
        <div className="max-w-[1450px] mx-auto p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 sm:px-14 px-5">
          <h1 className="text-white font-bold text-lg sm:text-xl lg:text-2xl sm:w-3/5">
            Explore courses designed to match your ambitions and open the door
            to limitless growth and success.
          </h1>
          <button className="bg-white text-black px-4 py-2 text-sm sm:text-lg font-medium rounded-md">
            Start Exploring
          </button>
        </div>
      </div>
      <div className="bg-blue-50">
        <div className="grid gap-5 px-5 py-14 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-20">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full h-auto border border-blue-700 rounded-lg p-6 bg-white"
            >
              <div className="text-blue-500 text-4xl rounded p-2 bg-blue-200 w-max mb-4">
                {item.image}
              </div>
              <h1 className="font-extrabold text-gray-700 text-xl mb-3">
                {item.title}
              </h1>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="px-5 py-10 lg:px-20">
          <TopAll />
        </div>
      </div>
    </>
  );
};

export default StartExplore;
