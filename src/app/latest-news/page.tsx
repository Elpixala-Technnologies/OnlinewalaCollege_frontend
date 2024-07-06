import React from "react";
import Link from "next/link";
import Image from "next/image";
import myImage from "@/assets/images/building.png";
import lady from "@/assets/images/lady.png";
import classroom from "@/assets/images/classroom.png";
import office from "@/assets/images/office.png";
import collegeGate from "@/assets/images/college-gate.png";
import girl from "@/assets/images/girl-standing.png";
import study1 from "@/assets/images/study1.png";
import study2 from "@/assets/images/study2.png";
import army1 from "@/assets/images/army1.png";
import army2 from "@/assets/images/army2.png";
import NewsComponent from "@/components/NewsComponents/NewsComponent";
import SchoolNews from "@/components/NewsComponents/SchoolNews";
import Policies from "@/components/NewsComponents/Policies";
import StudyAbroad from "@/components/NewsComponents/StudyAbroad";
import Opinions from "@/components/NewsComponents/Opinions";
import AskAnything from "@/components/NewsComponents/AskAnything";
function NewsPage() {
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

  const sideBarLeft = [
    {
      id: 1,
      image: lady,
      content:
        "Masters in Liberal Arts: Bringing technology,data into Humanities and .....",
    },
    {
      id: 2,
      image: lady,
      content:
        "Masters in Liberal Arts: Bringing technology,data into Humanities and .....",
    },
    {
      id: 3,
      image: lady,
      content:
        "Masters in Liberal Arts: Bringing technology,data into Humanities and .....",
    },
    {
      id: 4,
      image: lady,
      content:
        "Masters in Liberal Arts: Bringing technology,data into Humanities and .....",
    },
  ];

  const sideBarRight = [
    {
      id: 1,
      content:
        "Latur ITI professor making students do household chores, claims ABVP; seeks her suspension",
    },
    {
      id: 2,
      content:
        "WB Class 10th PPR, PPS result 2024 out at wbresults.nic.in; passing marks",
    },
    {
      id: 3,
      content:
        "MP Board 5th, 8th re-exam results 2024 declared at rskmp.in; passing marks",
    },
    {
      id: 4,
      content:
        "WB Class 10th PPR, PPS result 2024 out at wbresults.nic.in; passing marks",
    },
    {
      id: 5,
      content:
        "Latur ITI professor making students do household chores, claims ABVP; seeks her suspension",
    },
  ];

  return (
    <>
      <div className="bg-slate-100 pb-20 ">
        <div className="bg-gradient-to-r from-[#7AA5FF] to-[#5A8EFA] xl:px-56 lg:px-20 px-2 overflow-auto flex text-center items-center justify-around h-16 ">
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"latest-news/latest"}
          >
            Latest News
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"latest-news/featured"}
          >
            Featured
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"latest-news/exams"}
          >
            Exams
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"latest-news/colleges"}
          >
            Colleges
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"latest-news/schools"}
          >
            Schools
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"latest-news/workplace"}
          >
            Workplace
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"latest-news/opinions"}
          >
            Opinions
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"latest-news/abroad"}
          >
            Study Abroad
          </Link>
          <Link
            className=" text-white xl:text-lg lg:text-base text-xs xl:mx-0 lg:mx-0 mx-5"
            href={"latest-news/policies"}
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

        <div className="grid grid-cols-12  lg:mx-10 mx-4  gap-8">
          <div className=" rounded-xl col-span-12 lg:col-span-4 xl:col-span-3 h-[880px] lg:h-[800px] xl:h-[840px]   bg-white p-5">
            <p className="font-medium text-xl">Featured News</p>

            <div>
              <Link href={"/newsId"}>
                <div className="my-3">
                  <Image src={myImage} alt="image" />
                  <p className="font-medium my-3">
                    `Rising demand for talents with cross disciplinary
                    exposures`
                  </p>
                  <p className="text-sm text-slate-500">June 18,2024</p>
                </div>
              </Link>
            </div>

            <div>
              {sideBarLeft.map((item) => {
                return (
                  <Link key={item.id} href={"/newsId"}>
                    <div className="grid grid-cols-4 my-8 items-center">
                      <div className="col-span-1">
                        <Image
                          src={item.image}
                          alt="image"
                          height={75}
                          width={75}
                          className="rounded-lg"
                        />
                      </div>
                      <p className="ml-4 col-span-3 font-medium lg:text-sm ">
                        {item.content}
                        <span className="text-xs block text-slate-500">
                          June 18, 2024
                        </span>
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <hr className="border-[#6697FC]" />

            <div className="flex mt-4 justify-between">
              <p className="text-[#6697FC] font-medium">See more</p>

              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="  col-span-12 lg:col-span-4 xl:col-span-6 ">
            <NewsComponent
              image1={classroom}
              image2={office}
              name="Recent News"
            />
            <NewsComponent
              image1={collegeGate}
              image2={girl}
              name="College News"
            />
            <NewsComponent
              image1={study1}
              image2={study2}
              name="College Entrance News"
            />
            <NewsComponent
              image1={army1}
              image2={army2}
              name="Recruitment News"
            />
          </div>

          <div className=" mb-10 rounded-xl col-span-12 lg:col-span-4 xl:col-span-3 h-[680px] lg:h-[720px] xl:h-[680px] bg-white p-5">
            <p className="font-medium text-xl mb-10">Latest News</p>
            {sideBarRight.map((item) => {
              return (
                <Link key={item.id} href={"/newsId"}>
                  <div className="mb-8">
                    <p className="mb-2 font-semibold text-sm">{item.content}</p>
                    <span className="text-xs block text-slate-500">
                      June 18, 2024
                    </span>
                  </div>
                </Link>
              );
            })}
            <hr className="border-[#6697FC]" />

            <div className="flex mt-4 justify-between">
              <p className="text-[#6697FC] font-medium">See more</p>

              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <SchoolNews />
        <Policies />
        <StudyAbroad />
        <Opinions />
        <AskAnything />
      </div>
    </>
  );
}

export default NewsPage;
