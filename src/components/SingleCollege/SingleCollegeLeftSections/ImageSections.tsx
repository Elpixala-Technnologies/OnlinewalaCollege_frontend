import React from "react";
import VideoImage from "@/assets/images/Rectangle 716.png";
import Image from "next/image";

function ImageSections() {
  return (
    <div>
      <div className="bg-white shadow-lg mt-5 rounded-lg">
        <div className="p-10">
          <h1>Images</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="">
              <Image
                src={VideoImage}
                alt=""
                width={500}
                height={500}
                className="w-full h-full mt-5 object-fill"
              />
            </div>
            <div className="">
              <Image
                src={VideoImage}
                alt=""
                width={500}
                height={500}
                className="w-full h-full mt-5 object-fill"
              />
            </div>
            <div className="">
              <Image
                src={VideoImage}
                alt=""
                width={500}
                height={500}
                className="w-full h-full mt-5 object-fill"
              />
            </div>
            <div className="">
              <Image
                src={VideoImage}
                alt=""
                width={500}
                height={500}
                className="w-full h-full mt-5 object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSections;
