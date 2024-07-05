import React from "react";
import { PaginationTwo } from "@/components/Pagination/Pagination";
import Image from "next/image";
import picone from "@/assets/images/picone.png";
import pictwo from "@/assets/images/pictwo.png";
import abroad1 from "@/assets/images/abroad1.png";
import abroad from "@/assets/images/abroad.png";

export default function page() {
  const card = [
    {
      id: 1,
      image: picone,
      content1:
        "SRMJEEE Result 2024 (Out) Live: SRM University phase 2 results declared at srmist.edu.in; login link",
      content2:
        "SRMIST has announced the SRMJEEE results 2024 for phase 2 on June 29. Applicants check all the latest news here.",
      content3: "K Guna Sahiti | Jun 29, 2024",
    },
    {
      id: 2,
      image: pictwo,
      content1:
        "AP ECET 2024 counselling registration deadline tomorrow; fees, documents required",
      content2:
        "AP ECET Counselling 2024: The institute will issue the seat allotment list on July 8, 2024. Register online at ecet-sche.aptonline.in.",
      content3: "K Guna Sahiti | Jun 29, 2024",
    },
    {
      id: 3,
      image: picone,
      content1:
        "SRMJEEE Result 2024 (Out) Live: SRM University phase 2 results declared at srmist.edu.in; login link",
      content2:
        "SRMIST has announced the SRMJEEE results 2024 for phase 2 on June 29. Applicants check all the latest news here.",
      content3: "K Guna Sahiti | Jun 29, 2024",
    },
    {
      id: 4,
      image: pictwo,
      content1:
        "AP ECET 2024 counselling registration deadline tomorrow; fees, documents required",
      content2:
        "AP ECET Counselling 2024: The institute will issue the seat allotment list on July 8, 2024. Register online at ecet-sche.aptonline.in.",
      content3: "K Guna Sahiti | Jun 29, 2024",
    },
    {
      id: 5,
      image: picone,
      content1:
        "SRMJEEE Result 2024 (Out) Live: SRM University phase 2 results declared at srmist.edu.in; login link",
      content2:
        "SRMIST has announced the SRMJEEE results 2024 for phase 2 on June 29. Applicants check all the latest news here.",
      content3: "K Guna Sahiti | Jun 29, 2024",
    },
  ];

  return (
    <>
      <div className="bg-[#eef4ff]">
        <div className="bg-white m-8 rounded">
          <div className="pl-8">
            <p className="text-2xl font-bold text-[#2C2C2C] py-2">
              Latest News
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
          <div className="col-span-2">
          <div className="relative">
            <Image src={abroad1} alt="image" className="rounded-xl" />
            <div className="absolute bottom-0 rounded-lg w-full blur-sm bg-black bg-opacity-70  h-2/6"></div>
            <p className="mx-8 my-6 absolute bottom-8 font-bold text-xl text-white">
              WB Class 10th PPR, PPs result out at ......
            </p>
            <p className="mx-8 font-medium text-sm text-slate-300 absolute bottom-6">
              18 June, 2024
            </p>
          </div>
        </div>
            <div className="hidden md:block md:w-full">
              <Image src={abroad} alt="image" className="rounded-lg" />
              <p className="mt-4 font-semibold text-sm text-[#2C2C2C] leading-4">
                UP cabinet clears ordinance to curb paper leaks, offenders to
                face life imprisonment
              </p>
              <p className="text-[#848484] mt-3 font-medium text-xs">
                June 18, 2024
              </p>
            </div>
            <div className="hidden md:block md:w-full">
              <Image src={abroad} alt="image" className="rounded-lg" />
              <p className="mt-4 font-semibold text-sm text-[#2C2C2C] leading-4">
                UP cabinet clears ordinance to curb paper leaks, offenders to
                face life imprisonment
              </p>
              <p className="text-[#848484] mt-3 font-medium text-xs">
                June 18, 2024
              </p>
            </div>
          </div>
          <div className="p-8">
            {card.map((item) => {
              return (
                <div
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8"
                  key={item.id}
                >
                  <div className="md:col-span-3">
                    <Image
                      src={item.image}
                      alt="image"
                      className="rounded w-full"
                    />
                  </div>
                  <div className="md:col-span-9">
                    <p className="font-medium text-3xl mb-1">{item.content1}</p>
                    <p className="font-medium text-l text-[#848484] mb-1">
                      {item.content2}
                    </p>
                    <p className="font-medium text-l text-[#848484]">
                      {item.content3}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <PaginationTwo/>
    </>
  );
}
