// components/TestimonialCard.tsx
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    institution: string;
    imageUrl: string;
    quote: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg min-w-[355px] min-h-[440px]">
      <div className="flex flex-col items-center mb-4">
        <Image
          src={testimonial.imageUrl}
          alt={testimonial.name}
          width={200}
          height={200}
          className="rounded-full w-[156px] h-[156px]"
        />
        <h3 className="mt-2 text-xl font-semibold text-blue-600">
          {testimonial.name}
        </h3>
        <p className="text-sm text-gray-600">{testimonial.institution}</p>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-gray-700 text-center mb-4">
        &quot;{testimonial.quote}&quot;
      </p>
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
        Watch their Story
      </button>
    </div>
  );
};

export default TestimonialCard;
