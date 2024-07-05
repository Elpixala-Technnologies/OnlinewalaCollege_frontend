import React from "react";
import picone from "@/assets/images/picone.png";
import Image from "next/image";
import Link from "next/link";
import question from "@/assets/images/question.png";

function NewsPage() {
  const newsItems = [
    "Green hydrogen will generate 6 lakh jobs: Skill Council for Green Jobs CEO",
    "Liberal arts courses at Chandigarh University are a mix of social sciences, humanities, AI: Dean",
    "Ques. Is the MBA syllabus for MBA Marketing easier than MBA Finance?",
    "Liberal arts universities are taking a ‘problem-centric approach’ to education",
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
    <div className="bg-[#EEF4FF]">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className=" md:w-full  mt-12 m-16 bg-white rounded-xl">
          <div>
            <div className="m-12">
              <p className="text-[#2C2C2C] font-medium text-4xl leading-10 mb-4">
                SRMJEEE Result 2024 (Out) Live: SRM University phase 2 results
                declared at srmist.edu.in; login link
              </p>
              <p className="font-medium text-xl text-[#2C2C2C] mb-8">
                SRMIST has announced the SRMJEEE results 2024 for phase 2 on
                June 29. Applicants check all the latest news here.
              </p>
              <Image
                src={picone}
                alt="SRMJEEE Result"
                className=" w-full rounded-xl "
              />
            </div>
            <div className="m-12">
              <p>
                <span className="font-semibold text-">New Delhi</span> - SRM
                Institute of Science and Technology (SRMIST) published the phase
                2 results of the SRM Joint Entrance Examination on June 29,
                2024. Aspirants can check their SRMJEEE results through the
                login portal at srmist.edu.in. Candidates require their
                application number and password to login to the SRMJEEE 2024
                result portal.
              </p>
              <Link href="https://example.com/result" className="text-blue-700">
                Direct link to check the SRMJEEE phase 2 result 2024.
              </Link>
              <div className="mt-8">
                <p className="font-bold text-lg mb-8">
                  How to Check SRMJEEE Result 2024?
                </p>
                <p>
                  Applicants can refer to the following steps to check the phase
                  2 SRMJEEE 2024 results.
                </p>
                <ul className="list-disc mt-6 ml-4">
                  <li className="mb-6">
                    Visit the official website, srmist.edu.in.
                  </li>
                  <li className="mb-6">
                    Click on the link for “SRM Exam Results”.
                  </li>
                  <li className="mb-6">
                    Click on the link for “SRM Exam Results”.
                  </li>
                  <li className="mb-6">
                    Input the candidate login credentials, that is, application
                    number and password.
                  </li>
                  <li className="mb-6">Click on “Submit”.</li>
                  <li className="mb-6">
                    SRMJEEE 2024 results for phase 2 will be displayed in the
                    form of rank card.
                  </li>
                  <li className="mb-6">
                    Download the SRMJEEE 2024 rankcard and take a printout
                  </li>
                </ul>
              </div>
            </div>
            <div className="m-12">
              <p className="font-bold text-lg mt-6">
                What after SRMJEEE 2024 results?
              </p>
              <p className="mb-8 font-normal">
                The authority will release the merit list of students based on
                SRMJEEE result 2024. The SRMJEEE rank list is based on the total
                marks scored by the examinee. Shortlisted candidates have to
                register for SRM counselling and the seat allotment process to
                be considered for admission to SRM campuses.
              </p>

              <p className="font-bold text-lg">
                What is good score in SRMJEEE 2024?
              </p>
              <p className="mb-8 font-normal">
                A score above 90 is good as candidates can get admission to the
                best courses. 110+ marks in SRMJEEE 2024 results are considered
                excellent.
              </p>

              <p className="font-bold text-lg">
                What is good score in SRMJEEE 2024?
              </p>
              <p className="mb-8 font-normal">
                A score above 90 is good as candidates can get admission to the
                best courses. 110+ marks in SRMJEEE 2024 results are considered
                excellent.
              </p>

              <p className="font-bold text-lg">
                SRM results BTech: College predictor
              </p>
              <p className="font-normal">
                Students can use the college predictor tool to anticipate the
                name of the institute that might be allotted to them based on
                the SRM BTech results. 
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl w-2/5  m-12 h-fit hidden md:block">
          <p className="font-normal text-xl mb-5">Latest News</p>
          {sideBarRight.map((item) => (
            <div key={item.id} className="mb-5">
              <p className="mb-2 font-semibold text-sm">{item.content}</p>
              <span className="text-xs text-gray-500">June 18, 2024</span>
            </div>
          ))}
          <hr className="border-[#6697FC]" />
          <div className="flex mt-4 justify-between items-center">
            <p className="text-[#6697FC] font-normal">See more</p>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M18 12L13 7M18 12L13 17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-0 m-16  bg-white rounded-xl">
        <div className="p-9">
          <h2 className="text-lg font-bold mb-6">Featured News</h2>
          {newsItems.map((news, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-center mb-4">
                <p>{news}</p>
                <button className="text-black my-4">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 9l6 6 6-6"
                    ></path>
                  </svg>
                </button>
              </div>
              {index < newsItems.length - 1 && <hr className="my-2" />}
            </div>
          ))}
        </div>
      </div>

      <div className=" relative lg:h-56 h-64 my-3 rounded-2xl mx-14" >
        <Image
        src={question}
        alt='image'
        layout="fill"
        objectFit="cover"
        className="w-full h-full rounded-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl blur-sm flex items-center  p-4"></div>
        <p className="xl:text-4xl text-2xl lg:text-3xl lg:font-semibold absolute lg:top-1 top-6 text-center lg:my-14 lg:mx-8 text-white p-9 ">Have a doubt in selecting College ?</p>
        <p className="absolute  lg:text-lg text-white lg:top-16 text-center top-24 text-sm mx-6 lg:m-14 lg:font-medium p-9 ">Ask anything and get your answers in 48 hours</p>
        <button className=" absolute lg:top-20 rounded-xl lg:text-2xl text-xl font-medium lg:font-semibold lg:right-6 lg:px-14 px-8 top-44 mx-10 py-2 lg:py-3 bg-white">Ask Anything</button>
        
    </div>
    </div>
  );
}

export default NewsPage;
