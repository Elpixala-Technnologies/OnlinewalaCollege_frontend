import Image from "next/image";
import React from "react";
import CollegeImage from "@/assets/images/CollegeImage.png";

function SingleCollegeHeroSection() {
  return (
    <div className="relative rounded-3xl">
      <div className="h-[365px] relative">
        <Image
          src={CollegeImage}
          alt="Manipal University"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/100 to-transparent rounded-3xl" />
      </div>
      <div className="absolute top-0 left-0 p-6 text-white">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
            {/* Replace with actual logo */}
            <div className="w-8 h-8 bg-orange-500 rounded-full" />
          </div>
          <div className="text-sm">ONLINE MANIPAL</div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Manipal University Online</h1>
        <p className="text-sm mb-4">
          Admission 2024, Cutoff, Courses, Fees, Placement, Ranking
        </p>
        <p className="text-sm">Jaipur, Rajasthan</p>
        <div className="flex mt-4 space-x-2">
          <span className="bg-white text-blue-600 px-2 py-1 rounded text-xs">
            Private University
          </span>
          <span className="bg-white text-blue-600 px-2 py-1 rounded text-xs">
            Estd. 2011
          </span>
          <span className="bg-white text-blue-600 px-2 py-1 rounded text-xs">
            NAAC grade A+
          </span>
        </div>
      </div>
      <div className="absolute top-4 right-4 flex flex-col items-end">
        <div className="flex items-center mb-2">
          <span className="text-3xl font-bold text-white mr-1">4.1</span>
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <svg
              className="w-4 h-4 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <p className="text-white text-sm">(404 reviews)</p>
        <div className="mt-4 md:flex hidden md:flex-row flex-col md:items-center items-end gap-2 ">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            Will you get it?
          </button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            Get Contact details
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 md:flex hidden items-center gap-2 w-full">
        <div className="bg-white py-2 pr-2 lg:w-[70%] sm:w-[50%] topRounded ">
          <h1 className="bg-blue-100 h-[52px] font-medium rounded-lg text-center flex justify-center items-center">
            1900+ students opted this course
          </h1>
        </div>
        <h1 className="bg-[#6698fc] lg:w-[28%] text-white font-medium sm:w-[48%] w-full h-[56px] rounded-lg text-center flex justify-center items-center">
          MBA | BBA | BCA | MCA | BCOM | MCOM
        </h1>
      </div>
    </div>
  );
}

export default SingleCollegeHeroSection;
