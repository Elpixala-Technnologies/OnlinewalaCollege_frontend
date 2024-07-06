import React from "react";
import Image from "next/image";
import exam from "@/assets/images/exam.png";
import exam2 from "@/assets/images/exam2.png";
import Link from "next/link";

function SchoolNews() {

  const news=[
    {
      id:1,
      content:"‘Rising demand for talents with cross-disciplinary exposures’",
      image:exam2
    },
    {
      id:1,
      content:"‘Rising demand for talents with cross-disciplinary exposures’",
      image:exam2
    },
    {
      id:1,
      content:"‘Rising demand for talents with cross-disciplinary exposures’",
      image:exam2
    },
    {
      id:1,
      content:"‘Rising demand for talents with cross-disciplinary exposures’",
      image:exam2
    },

  ]


  return (
    <div className="mx-10 p-8 rounded-lg bg-white">
      <p className="text-2xl font-bold">School News</p>

      <div className="lg:grid lg:gap-10 lg:grid-cols-2 mt-8">

        <Link href={"/newsId"}>
        <div className=" relative mt-6">
          <Image src={exam} alt="image" className="rounded-xl aspect-square lg:aspect-auto "></Image>
          <div className="absolute bottom-0 rounded-lg w-full blur-sm bg-black bg-opacity-60 h-2/6 "></div>
          <p className=" xl:mx-8 lg:mx-5 lg:my-6 absolute lg:bottom-8 bottom-8 text-sm mx-5 font-bold xl:text-xl lg:text-lg text-white">
            WB Class 10th PPR, PPs result out at ......
          </p>
          <p className=" lg:mx-5 xl:mx-8 font-medium lg:text-sm bottom-4 text-xs mx-5 text-slate-300  absolute lg:bottom-6">
            18 June, 2024
          </p>
        </div>
        </Link>

        <Link href={"/newsId"}>
        <div className=" relative mt-6">
          <Image src={exam} alt="image" className="rounded-xl aspect-square lg:aspect-auto "></Image>
          <div className="absolute bottom-0 rounded-lg w-full blur-sm bg-black bg-opacity-60 h-2/6 "></div>
          <p className=" xl:mx-8 lg:mx-5 lg:my-6 absolute lg:bottom-8 bottom-8 text-sm mx-5 font-bold xl:text-xl lg:text-lg text-white">
            WB Class 10th PPR, PPs result out at ......
          </p>
          <p className=" lg:mx-5 xl:mx-8 font-medium lg:text-sm bottom-4 text-xs mx-5 text-slate-300  absolute lg:bottom-6">
            18 June, 2024
          </p>
        </div>
        </Link>

        
      </div>

      <div className=" xl:m-14 lg:m-6 lg:grid lg:grid-cols-4  xl:gap-8 lg:gap-4 mt-6 ">
        {news.map( (news)=>{
          return(
            <Link key={news.id} href={"/newsId"}>
            <div  className="xl:mr-5 mb-5 ">
          <div>
            <Image src={news.image} alt="image" className="rounded-lg" />
          </div>
          <p className=" mt-3 xl:text-lg font-medium lg:text-sm  ">
            {news.content}
            <span className="xl:text-sm lg:text-xs block text-slate-500">June 18, 2024</span>
          </p>
        </div>
        </Link>
          )
        } )}
      </div>

    </div>
  );
}

export default SchoolNews;
