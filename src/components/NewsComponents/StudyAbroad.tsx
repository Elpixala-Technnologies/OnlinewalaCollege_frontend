import React from "react";
import Image from "next/image";
import abroad1 from "@/assets/images/abroad1.png";
import abroad2 from "@/assets/images/abroad2.png";
import Link from "next/link";
function StudyAbroad() {
  return (
    <div className="m-10 p-8 rounded-lg bg-white">
      <p className="text-2xl font-bold">Study Abroad</p>

      <div className="lg:grid lg:gap-4 lg:grid-cols-4 mt-8 ">
        <div className="lg:col-span-2 mb-5">
          <Link href={"/newsId"}>
            <div className=" relative">
              <Image
                src={abroad1}
                alt="image"
                className="rounded-xl w-full lg:aspect-auto aspect-square "
              ></Image>
              <div className="absolute bottom-0 rounded-lg w-full blur-sm bg-black bg-opacity-60 h-2/6 "></div>
              <p className=" xl:mx-8 lg:mx-6 xl:my-6 lg:my-4 absolute xl:bottom-8 lg:bottom-6 font-bold lg:text-lg xl:text-xl bottom-5 text-sm mx-4 my-1 text-white">
                WB Class 10th PPR, PPs result out at ......
              </p>
              <p className=" xl:mx-8 lg:mx-6 xl:font-medium xl:text-sm lg:text-xs text-slate-300 lg:bottom-4 text-xs bottom-2 mx-4  absolute xl:bottom-6">
                18 June, 2024
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href={"/newsId"}>
            <div className="my-4 lg:my-0">
              <div>
                <Image src={abroad2} alt="image" className="rounded-lg" />
              </div>
              <p className=" mt-3 text-base font-semibold ">
                UP cabinet clears ordinance to curb paper leaks, offenders to
                face life imprisonment
                <span className=" mt-3 text-sm block text-slate-500">
                  June 18, 2024
                </span>
              </p>
            </div>
          </Link>
        </div>

        <div className="lg:col-span-1">
          <Link href={"/newsId"}>
            <div>
              <div>
                <Image src={abroad2} alt="image" className="rounded-lg" />
              </div>
              <p className=" mt-3 text-base font-semibold ">
                UP cabinet clears ordinance to curb paper leaks, offenders to
                face life imprisonment
                <span className=" mt-3 text-sm block text-slate-500">
                  June 18, 2024
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudyAbroad;
