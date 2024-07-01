import College from "@/assets/images/Rectangle 7.png";
import CollegeAllCard from "./CollegeAllCard";

const colleges = [
  {
    name: "Manipal University Online",
    image: College,
    rating: 4.5,
    reviews: 60,
    accreditations: "AICTE, NIRF, UGC, NAAC A+",
    optedCount: 1900,
    fee: 175000,
  },
  {
    name: "Jain University Online",
    image: College,
    rating: 4.5,
    reviews: 60,
    accreditations: "AICTE, NIRF, UGC, NAAC A+",
    optedCount: 1700,
    fee: 160000,
  },
  {
    name: "LPU Online",
    image: College,
    rating: 4.5,
    reviews: 60,
    accreditations: "AICTE, NIRF, UGC, NAAC A+",
    optedCount: 1600,
    fee: 144000,
    emi: 5999,
  },
];

const CollegeMain = () => (
  <div className=" py-8">
    <h1 className="text-3xl font-bold mb-6">
      Top colleges in India for{" "}
      <span className="text-blue-500">HR Management</span>
    </h1>
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {colleges.map((college, index) => (
        <CollegeAllCard key={index} college={college} />
      ))}
    </div>
  </div>
);

export default CollegeMain;
