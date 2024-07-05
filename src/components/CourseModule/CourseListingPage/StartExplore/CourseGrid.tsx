import React from "react";
import { HiMiniComputerDesktop } from "react-icons/hi2";

const CourseGrid = () => {
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
    <div className="grid gap-5 px-5 py-14 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-28">
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
  );
};

export default CourseGrid;
