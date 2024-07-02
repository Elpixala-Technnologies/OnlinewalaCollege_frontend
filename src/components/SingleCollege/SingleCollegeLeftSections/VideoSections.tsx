import Image from "next/image";
import React from "react";
import VideoImage from "@/assets/images/Rectangle 716.png";

function VideoSections() {
  return (
    <div className="bg-white shadow-lg mt-5 rounded-lg">
      <div className="p-10">
        <h1>Videos</h1>
        <div className="">
          <Image
            src={VideoImage}
            alt=""
            width={500}
            height={500}
            className="w-full h-full mt-5"
          />
        </div>
        <div className="">
          <Image
            src={VideoImage}
            alt=""
            width={500}
            height={500}
            className="w-full h-full mt-5"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoSections;
