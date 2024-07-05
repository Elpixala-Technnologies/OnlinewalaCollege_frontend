import Image from "next/image";
import React from "react";
import CollegeImage from "@/assets/images/CollegeImage.png";

function HeroSection() {
  return (
    <div>
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
        <div className="absolute top-20 left-0 p-6 text-white">
          <h1 className="md:text-[48px] text-2xl font-bold mb-2">
            Manipal University Online
          </h1>
        </div>

        <div className="absolute bottom-0 md:flex hidden items-center gap-2 w-full">
          <div className="bg-white py-2 pr-2 lg:w-[70%] sm:w-[50%] topRounded ">
            <h1 className="bg-blue-100 h-[52px] font-medium rounded-lg text-center flex justify-center items-center">
              80+ colleges providing this course
            </h1>
          </div>
          <h1 className="bg-[#6698fc] lg:w-[28%] text-white font-medium sm:w-[48%] w-full h-[56px] rounded-lg text-center flex justify-center items-center">
            MBA | BBA | BCA | MCA | BCOM | MCOM
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
