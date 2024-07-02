import Link from "next/link";

interface Course {
  id: number;
  title: string;
  duration: string;
  averageFees: string;
  reviews: number;
  courses: number;
  description: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Master of Business Administration (MBA)",
    duration: "24 Months",
    averageFees: "INR 43,750-1,56,000",
    reviews: 4.2,
    courses: 12,
    description:
      "The Online MBA is a super-flexible, part-time MBA experience, allowing you to continue working while studying from the comfort of your home.",
  },
  {
    id: 2,
    title: "Master of Business Administration (MBA)",
    duration: "24 Months",
    averageFees: "INR 43,750-1,56,000",
    reviews: 4.2,
    courses: 12,
    description:
      "The Online MBA is a super-flexible, part-time MBA experience, allowing you to continue working while studying from the comfort of your home.",
  },
  // Add more courses...
];

export default function CourseList() {
  return (
    <div className="">
      {courses.map((course: any, index: any) => (
        <div key={index} className="rounded-lg mb-5">
          <div className="border p-4 rounded-t-lg bg-white border-blue-300">
            <Link href={`/programs/${course.title}`}>
              <h2 className="text-xl font-medium text-gray-900">
                {course.title}
              </h2>
            </Link>
            <div className="flex justify-between mt-2">
              <div className="md:w-[45%] w-full grid grid-cols-2">
                <p className="text-blue-500">{course.reviews} ★</p>
                <p className="text-blue-500 text-xl">
                  {course.courses} courses
                </p>
                <p className="flex flex-col text-xs">
                  Duration:{" "}
                  <span className="text-xl font-medium text-blue-500">
                    {course.duration}
                  </span>
                </p>
                <p className="flex flex-col text-xs">
                  Average fees:{" "}
                  <span className="text-xl font-medium text-blue-500">
                    {course.averageFees}
                  </span>
                </p>
              </div>
              <div className="md:w-[30%] w-full">
                <p className=" text-gray-900">{course.description}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-blue-500 items-center rounded-b-lg px-5 py-2">
            <div>
              <h1 className="text-white">
                Explore colleges providing online MBA
              </h1>
            </div>
            <div>
              <button className="bg-white text-black px-4 py-1 rounded">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
