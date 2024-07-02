// components/DetailedReviews.tsx
import React from "react";
import StarRating from "./StarRating";
import { IoMdStar } from "react-icons/io";

interface Review {
  title: string;
  author: string;
  date: string;
  content: {
    overall: string;
    placement: string;
    infrastructure: string;
    faculty: string;
    hostel: string;
  };
  rating: number;
  helpful: number;
}

interface DetailedReviewsProps {
  reviews: Review[];
}

const DetailedReviews: React.FC<DetailedReviewsProps> = ({ reviews }) => {
  return (
    <>
      <h1 className="my-5 text-[20px] font-bold">
        Manipal University online Reviews
      </h1>
      <div>
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 mb-4 mt-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-medium">{review.title}</h3>
              <div className="flex items-center">
                <span className="text-2xl font-semibold mr-2">
                  {review.rating}{" "}
                </span>
                <span>
                  <IoMdStar className="text-blue-500 text-xl" />
                </span>
                <button className="bg-blue-500 md:block hidden text-white px-4 py-1 rounded ml-4">
                  Helpful
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              By {review.author} | {review.date}
            </p>

            {Object.entries(review.content).map(([key, value]) => (
              <div key={key} className="mb-4">
                <div className="flex gap-10">
                  <div className="">
                    <p>
                      <span className="font-bold capitalize">{key}:</span>{" "}
                      {value}
                    </p>
                  </div>
                  <div className="mt-1 md:block hidden">
                    <StarRating rating={review.rating} size="small" />
                  </div>
                </div>
                <div className="mt-1 block md:hidden">
                  <StarRating rating={review.rating} size="small" />
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center my-10">
              <button className="py-2 w-40 bg-gray-300 rounded-full font-semibold">
                View more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailedReviews;
