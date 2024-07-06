import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface Props {
  image1: StaticImageData;
  image2: StaticImageData;
  name: string;
}

const NewsComponent: React.FC<Props> = ({ image1, image2, name }) => {
  return (
    <div className="bg-white p-6 rounded-xl mb-8" id="college-news">
      <div className="flex justify-between">
        <p className="xl:font-bold xl:text-2xl lg:font-semibold lg:text-xl font-semibold text-xl ">
          {name}
        </p>
        <p className="text-[#6697FC]  hidden xl:block xl:font-medium">
          See all
        </p>
      </div>

      <Link href={"/newsId"}>
        <div className="mt-5">
          <div>
            <Image
              src={image1}
              alt="image"
              className="rounded-lg w-[860px] h-[331px]"
            />
          </div>
          <p className="mt-4 font-medium  xl:text-xl lg:text-base">
            NEET,NET Row: Govt seeks public suggesstions on NTA exam reforms
          </p>
          <p className="xl:font-medium text-slate-500 lg:text-sm ">
            June 18,2024
          </p>
        </div>
      </Link>

      <div className=" xl:flex mt-8">
        <Link href={"/newsId"}>
          <div className="xl:mr-5 mb-5">
            <div>
              <Image src={image2} alt="image" className="rounded-lg" />
            </div>
            <p className=" mt-3 xl:text-lg lg:text-base xl:font-medium lg:font-semibold font-semibold ">
              Liberal arts universities are taking a ‘problem-centric approach’
              to education
              <span className="xl:text-sm block lg:text-sm lg:font-medium text-slate-500 font-normal">
                June 18, 2024
              </span>
            </p>
          </div>
        </Link>
        <Link href={"/newsId"}>
          <div>
            <div>
              <Image src={image2} alt="image" className="rounded-lg" />
            </div>
            <p className=" mt-3 xl:text-lg lg:text-base xl:font-medium lg:font-semibold font-semibold">
              Liberal arts universities are taking a ‘problem-centric approach’
              to education
              <span className="xl:text-sm block lg:text-sm lg:font-medium text-slate-500 font-normal">
                June 18, 2024
              </span>
            </p>
          </div>
        </Link>
      </div>
      <p className="  mt-4  text-[#6697FC] text-center xl:hidden xl:font-medium">
        See all
      </p>
    </div>
  );
};

export default NewsComponent;
