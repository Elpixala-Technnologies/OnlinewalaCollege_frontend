import Image from "next/image";

export const CollegeCard = ({ college }: any) => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg p-4 mb-4">
      <div className="flex md:flex-row flex-col md:justify-center justify-start  md:items-center items-start">
        <div className="md:w-1/2 w-full flex items-center justify-start mb-4">
          <Image
            src={college.logo}
            alt={college.name}
            width={50}
            height={50}
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold text-white">{college.name}</h2>
            <p className="text-sm text-white">{college.location}</p>
            <p className="text-xs text-white">{college.accreditation}</p>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-between items-center mb-4">
          <div>
            <p className="font-bold text-xs">Course fees</p>
            <p className="text-sm text-white">
              INR {college.courseFees.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="font-bold text-xs">Placement</p>
            <p className="text-sm text-white">
              INR {college.highestPackage.toLocaleString()}
            </p>
            <p className="text-sm text-white">
              INR {college.averagePackage.toLocaleString()}
            </p>
          </div>
          <div className="text-right ">
            <p className="text-xl font-bold">{college.rating}</p>
            <p className="text-xs">({college.reviews} reviews)</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="text-sm text-blue-500 bg-blue-100 px-4 bg-opacity-50 border border-blue-500 rounded outline-none">
          Brochure
        </button>
        <button className="bg-white text-black px-4 py-2 rounded text-sm">
          Apply Now
        </button>
      </div>
    </div>
  );
};
