"use client";

import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";
import backGroundImage from "@/assets/images/Rectangle 12.png";
import Quate from "@/assets/images/qeute.png";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  institution: string;
  imageUrl: any;
  quote: string;
}

interface StudentTestimonialsProps {
  testimonials: Testimonial[];
}

const StudentTestimonials: React.FC<StudentTestimonialsProps> = ({
  testimonials,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const testimonialsContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (testimonialsContainerRef.current) {
      testimonialsContainerRef.current.scrollLeft -= 300;
      setScrollPosition(testimonialsContainerRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (testimonialsContainerRef.current) {
      testimonialsContainerRef.current.scrollLeft += 300;
      setScrollPosition(testimonialsContainerRef.current.scrollLeft);
    }
  };

  return (
    <div className="relative bg-cover bg-center py-16">
      <div className="absolute inset-0 w-full">
        <Image src={backGroundImage} alt="" className="w-full h-[830px]" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-2">
          What Our Students Say About Us
        </h2>
        <p className="text-xl text-white text-center mb-8">
          Discover Success Stories from Our Satisfied Students
        </p>
        <div className="flex justify-center items-center space-x-4">
          <button
            className="bg-white rounded-full p-2"
            onClick={scrollLeft}
            disabled={scrollPosition === 0}
          >
            <FaChevronLeft className="text-gray-800" />
          </button>
          <div
            className="flex gap-5 overflow-x-auto hide-scrollbar"
            ref={testimonialsContainerRef}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <button className="bg-white rounded-full p-2" onClick={scrollRight}>
            <FaChevronRight className="text-gray-800" />
          </button>
        </div>
      </div>
      <div className="absolute top-4 right-8 text-white text-9xl opacity-20">
        <Image src={Quate} alt="" width={100} height={100} className="" />
      </div>
    </div>
  );
};

export default StudentTestimonials;
