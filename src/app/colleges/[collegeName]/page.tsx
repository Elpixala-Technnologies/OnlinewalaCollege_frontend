"use client";
import SingleCollegeMain from "@/components/SingleCollege/SingleCollegeMain";
import { useParams } from "next/navigation";

function CollegeDetails() {
  const { collegeName } = useParams();

  return (
    <div className="">
      {/* <h1>This is college details for {collegeName}</h1> */}
      <div className="mt-5">
        <SingleCollegeMain />
      </div>
    </div>
  );
}

export default CollegeDetails;
