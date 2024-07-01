"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface College {
  name: string;
  image: any;
  rating: number;
  reviews: number;
  accreditations: string;
  optedCount: number;
  fee: number;
  emi?: number;
}

const CollegeAllCard = ({ college }: { college: College }) => {
  const router = useRouter();

  return (
    <div className="rounded-lg shadow-md p-4 border border-blue-400 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="relative h-40 mb-4">
        <Image
          src={college.image}
          alt={college.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className="absolute top-2 right-2 text-blue-500 bg-white p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
      <div className="text-start mb-4">
        <Link
          href={`/colleges/${college.name}`}
          className="text-lg font-semibold mb-2 cursor-pointer"
        >
          {college.name}
        </Link>
        <div className="flex items-center justify-start mb-2">
          <span className="text-yellow-400 mr-1">★</span>
          <span>{college.rating}/5</span>
          <span className="ml-2 text-gray-500">
            ({college.reviews} reviews)
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{college.accreditations}</p>
        <div className="flex justify-between mb-2">
          <button className="text-gray-800 font-medium bg-blue-200 px-2 py-1 rounded-md text-sm">
            Add to Compare
          </button>
          <span className="text-gray-800 font-medium bg-blue-200 px-2 py-1 rounded-md text-sm">
            {college.optedCount}+ opted
          </span>
        </div>
        <p className="text-lg text-blue-500 font-semibold mb-2">
          INR {college.fee.toLocaleString()}
          {college.emi && (
            <span className="text-sm font-normal ml-1">
              EMI starts at INR {college.emi}
            </span>
          )}
        </p>
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CollegeAllCard;
