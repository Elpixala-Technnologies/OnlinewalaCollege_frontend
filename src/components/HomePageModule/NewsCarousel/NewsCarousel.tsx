"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import NewsCard from "./NewsCard";
import CollegeImage from "@/assets/images/CollegeImage.png";

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * (carouselRef.current.offsetWidth / 3);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % newsItems.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  const newsItems = [
    {
      id: "1",
      title:
        "UP cabinet clears ordinance to curb paper leaks, offenders to face life imprisonment",
      imageUrl: CollegeImage,
      date: "June 18, 2024",
    },
    {
      id: "2",
      title:
        "UP cabinet clears ordinance to curb paper leaks, offenders to face life imprisonment",
      imageUrl: CollegeImage,
      date: "June 18, 2024",
    },
    {
      id: "3",
      title:
        "UP cabinet clears ordinance to curb paper leaks, offenders to face life imprisonment",
      imageUrl: CollegeImage,
      date: "June 18, 2024",
    },
    {
      id: "4",
      title:
        "UP cabinet clears ordinance to curb paper leaks, offenders to face life imprisonment",
      imageUrl: CollegeImage,
      date: "June 18, 2024",
    },
    {
      id: "5",
      title:
        "UP cabinet clears ordinance to curb paper leaks, offenders to face life imprisonment",
      imageUrl: CollegeImage,
      date: "June 18, 2024",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6 text-black mt-28">
        We have been in News!
      </h1>
      <div className="relative py-5">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-5 pb-4 hide-scrollbar snap-x snap-mandatory"
        >
          {newsItems.map((item) => (
            <div key={item.id} className="snap-start">
              <NewsCard newsItem={item} />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <FaChevronLeft className="text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <FaChevronRight className="text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default NewsCarousel;
