import React, { useState } from "react";
import Image from "next/image";
import CardImage from "@/assets/images/Rectangle 716.png";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface College {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  imageUrl: any;
}

interface CollegeCarouselProps {
  colleges: College[];
}

const CollegeCard: React.FC<{ college: College }> = ({ college }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image
      src={college.imageUrl}
      alt={college.name}
      width={300}
      height={200}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-1">{college.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{college.location}</p>
      <div className="flex items-center mb-2">
        <span className="text-blue-500 mr-1">★</span>
        <span>{college.rating}</span>
        <span className="text-gray-500 ml-2">({college.reviews} reviews)</span>
      </div>
      <button className="w-full bg-gray-100 text-gray-800 py-2 rounded mb-2">
        Course and fees
      </button>
      <button className="w-full bg-blue-500 text-white py-2 rounded">
        Apply Now
      </button>
    </div>
  </div>
);

const CollegeCarousel: React.FC<CollegeCarouselProps> = ({ colleges }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= colleges.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? colleges.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white mt-5 shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4 pl-2">
        <div>
          <h2 className="text-2xl font-bold">
            Other Colleges in the Same Group
          </h2>
          <p className="text-gray-600">Scholarship provided by college</p>
        </div>
        <div className="flex gap-4 font-bold">
          <button
            onClick={prevSlide}
            className="bg-white w-12 h-12 rounded-full border border-blue-500 flex justify-center items-center"
          >
            <MdOutlineArrowBackIosNew />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white w-12 h-12 rounded-full border border-blue-500 flex justify-center items-center"
          >
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 10}%)`,
            }}
          >
            {colleges?.map((college: any, index: any) => (
              <div key={index} className="w-[300px] flex-shrink-0 mx-2">
                <CollegeCard college={college} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {colleges.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage
const SameGroupCollege: React.FC = () => {
  const colleges: College[] = [
    {
      name: "Manipal School of Architecture and Planning",
      location: "Karnataka",
      rating: 3.9,
      reviews: 176,
      imageUrl: CardImage,
    },
    {
      name: "Manipal Institute of Technology",
      location: "Karnataka",
      rating: 4.5,
      reviews: 210,
      imageUrl: CardImage,
    },
    {
      name: "Manipal College of Dental Sciences",
      location: "Karnataka",
      rating: 4.2,
      reviews: 134,
      imageUrl: CardImage,
    },
    {
      name: "Manipal College of Pharmaceutical Sciences",
      location: "Karnataka",
      rating: 4.0,
      reviews: 190,
      imageUrl: CardImage,
    },
    {
      name: "Manipal Institute of Management",
      location: "Karnataka",
      rating: 4.1,
      reviews: 158,
      imageUrl: CardImage,
    },
    {
      name: "Manipal School of Information Sciences",
      location: "Karnataka",
      rating: 4.3,
      reviews: 142,
      imageUrl: CardImage,
    },
    {
      name: "Manipal College of Allied Health Sciences",
      location: "Karnataka",
      rating: 4.4,
      reviews: 178,
      imageUrl: CardImage,
    },
    {
      name: "Manipal Academy of Higher Education",
      location: "Karnataka",
      rating: 4.6,
      reviews: 220,
      imageUrl: CardImage,
    },
    {
      name: "Manipal School of Communication",
      location: "Karnataka",
      rating: 4.0,
      reviews: 165,
      imageUrl: CardImage,
    },
    {
      name: "Manipal College of Nursing",
      location: "Karnataka",
      rating: 4.1,
      reviews: 140,
      imageUrl: CardImage,
    },
    // Add more college objects here...
  ];

  return <CollegeCarousel colleges={colleges} />;
};

export default SameGroupCollege;
