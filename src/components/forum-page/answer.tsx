import React from "react";
import Image from "next/image";
import profile from "@/assets/images/man-cartoon.png";
import { StaticImageData } from "next/image";

interface Props{
    name:string;
    post:string;
    answer:string;
    image:StaticImageData;
}

const Answer: React.FC<Props> = ({ name, post, answer, image }) => {
  return (
    <div className="bg-[#c7d7f1] p-10 rounded-lg">
      <div className="lg:flex justify-between items-center">

        <div className="flex justify-start  items-center mt-4">
          <div>
            <Image src={image} alt="image" className="w-11 rounded-full" />
          </div>
          <p className="font-semibold ml-5 text-base">
            {name}
            <span className="block text-slate-500 text-sm">
              {post}
            </span>
          </p>
        </div>

        <p className="font-semibold my-4">Poster 3 days ago</p>
      </div>
      <p className=" text-xs xl:text-base lg:text-sm font-medium mt-6 ">
        {answer}
      </p>

      <div className="flex justify-between lg:justify-start items-center mt-10">
        <div className="flex lg:mr-6">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.22 9.55C19.79 9.04 19.17 8.75 18.5 8.75H14.47V6C14.47 4.48 13.24 3.25 11.64 3.25C10.94 3.25 10.31 3.67 10.03 4.32L7.49 10.25H5.62C4.31 10.25 3.25 11.31 3.25 12.62V18.39C3.25 19.69 4.32 20.75 5.62 20.75H17.18C18.27 20.75 19.2 19.97 19.39 18.89L20.71 11.39C20.82 10.73 20.64 10.06 20.21 9.55H20.22ZM5.62 19.25C5.14 19.25 4.75 18.86 4.75 18.39V12.62C4.75 12.14 5.14 11.75 5.62 11.75H7.23V19.25H5.62ZM17.92 18.63C17.86 18.99 17.55 19.25 17.18 19.25H8.74V11.15L11.41 4.9C11.45 4.81 11.54 4.74 11.73 4.74C12.42 4.74 12.97 5.3 12.97 5.99V10.24H18.5C18.73 10.24 18.93 10.33 19.07 10.5C19.21 10.67 19.27 10.89 19.23 11.12L17.91 18.62L17.92 18.63Z"
              fill="#000000"
            />
          </svg>

          <p className="text-base lg:ml-5 font-medium">Upvote</p>
        </div>

        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.38 3.25H6.81C5.72 3.25 4.79 4.03 4.6 5.11L3.29 12.61C3.18 13.27 3.36 13.94 3.78 14.45C4.21 14.96 4.83 15.25 5.5 15.25H9.53V18C9.53 19.52 10.76 20.75 12.36 20.75C13.06 20.75 13.69 20.33 13.97 19.68L16.51 13.75H18.39C19.7 13.75 20.76 12.69 20.76 11.38V5.61C20.76 4.31 19.7 3.25 18.39 3.25H18.38ZM15.26 12.85L12.59 19.1C12.55 19.19 12.46 19.26 12.27 19.26C11.58 19.26 11.03 18.7 11.03 18.01V13.76H5.5C5.27 13.76 5.07 13.67 4.93 13.5C4.78 13.33 4.73 13.11 4.77 12.88L6.08 5.38C6.14 5.02 6.45001 4.76 6.82 4.76H15.26V12.85ZM19.25 11.38C19.25 11.86 18.86 12.25 18.38 12.25H16.77V4.75H18.38C18.86 4.75 19.25 5.14 19.25 5.61V11.38Z"
            fill="#000000"
          />
        </svg>

        
          <p className=" text-base lg:ml-5 font-medium">Comments(2)</p>
        
      </div>
    </div>
  );
}

export default Answer;
