import React from "react";
import { PaginationTwo } from "@/components/Pagination/Pagination";
import Image from "next/image";
import picone from "@/assets/images/picone.png";
import pictwo from "@/assets/images/pictwo.png";
import abroad1 from "@/assets/images/abroad1.png";
import abroad from "@/assets/images/abroad.png";
import Link from "next/link";

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

  const topSearches = [
    {
      name: 1,
      content: "Neet Controvery 2024",
    },
    {
      name: 2,
      content: "Jossa round 1 cutoff 2024",
    },
    {
      name: 3,
      content: "Jossa round 2 cutoff 2024",
    },
    {
      name: 4,
      content: "Class 10th CBSE Results",
    },
    {
      name: 5,
      content: "ComeDK BArch Counselling 2024",
    },
  ];

  return (
    <>
      <div className="bg-[#eef4ff]">
        <div className="bg-gradient-to-r from-[#7AA5FF] to-[#5A8EFA] xl:px-56 lg:px-20 px-2 overflow-auto flex text-center items-center justify-around h-16 ">
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"/latest-news/latest"}
          >
            Latest News
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"/latest-news/featured"}
          >
            Featured
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"/latest-news/exams"}
          >
            Exams
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"/latest-news/colleges"}
          >
            Colleges
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"/latest-news/schools"}
          >
            Schools
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"/latest-news/workplace"}
          >
            Workplace
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"/latest-news/opinions"}
          >
            Opinions
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"/latest-news/abroad"}
          >
            Study Abroad
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"/latest-news/policies"}
          >
            Policies
          </Link>
        </div>

        <div className="m-10 rounded-2xl pt-6 px-5 pb-3 bg-white">
            <h1 className="lg:text-2xl lg:font-bold text-lg font-semibold">
              Top Searches
            </h1>
            <div className=" m-3 pb-2 flex lg:flex-wrap text-center items-center xl:justify-around lg:justify-start justify-start overflow-auto">
              {topSearches.map((search) => {
                return (
                  <button
                    className="border-2 border-[#6697FC] lg:py-2 rounded-full lg:px-6 lg:mx-4 lg:my-2 xl:m-0 mx-5 text-nowrap px-6 py-2 lg:text-base text-xs"
                    key={search.name}
                  >
                    {search.content}
                  </button>
                );
              })}
            </div>
          </div>

        <div className="bg-white m-8 rounded">
          <div className="pl-8">
            <p className="text-2xl font-bold text-[#2C2C2C] py-2">
              Latest News
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
            <div className="col-span-2">
              <Link href={"/newsId"}>
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
              </Link>
            </div>

            <Link href={"/newsId"}>
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
            </Link>

            <Link href={"/newsId"}>
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
            </Link>
          </div>

         

          <div className="p-8">
            {card.map((item) => {
              return (
                <Link href={"/newsId"} key={item.id}>
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
                      <p className="font-medium text-3xl mb-1">
                        {item.content1}
                      </p>
                      <p className="font-medium text-l text-[#848484] mb-1">
                        {item.content2}
                      </p>
                      <p className="font-medium text-l text-[#848484]">
                        {item.content3}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <PaginationTwo />
    </>
  );
}
