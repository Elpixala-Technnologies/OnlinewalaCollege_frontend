import Image from "next/image";
import React from "react";
import HomeImage from "@/assets/images/Group 39930.png";
import CropImage from "@/assets/images/crop.png";
import NumberImage from "@/assets/images/Group 39936.png";

function HomeImageLine() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Image
          src={HomeImage}
          alt="Home Image"
          width={1400}
          height={160}
          className="w-full lg:h-[160px] lg:object-fill object-contain"
        />
      </div>
      <div className="relative">
        <div className="flex justify-center items-center">
          <Image src={NumberImage} alt="" />
        </div>
        <Image src={CropImage} alt="" className="w-full absolute bottom-0" />
      </div>
    </>
  );
}

export default HomeImageLine;
