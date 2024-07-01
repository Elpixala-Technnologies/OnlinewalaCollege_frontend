import React from "react";

const Scholarships: React.FC = () => {
  const scholarshipsData = [
    {
      name: "Divyaang Scholarship (for persons with disabilities)",
      description:
        "Candidates with Divyaang Certificate are eligible and 20% of the tuition fee is waived.",
    },
    {
      name: "Scholarship Defence Personnel",
      description:
        "Manipal Online offers 20% of scholarships under the defence personnel category.",
    },
    {
      name: "Scholarship for Government Employees",
      description:
        "Candidates serving PSU, Central or State Government are eligible for a 10% scholarship at Manipal Online.",
    },
    {
      name: "Merit-Based Scholarship",
      description:
        "Candidates securing 60% and above in Class 12 exams are granted with 10% scholarship.",
    },
    {
      name: "Scholarship for Women",
      description:
        "The university also granted 23 women applicants between March 3 - March 12, 2023, a scholarship of 25% to aid and empower women pursuing higher education.",
    },
  ];
  return (
    <div className="bg-white rounded-md p-5 shadow-md">
      <h1 className="text-2xl font-bold mb-4">
        Scholarship norms for Manipur University online
      </h1>
      <p className="mb-4">
        Manipal Online Scholarships are awarded to students based on their merit
        in Class 12. Students from low economic backgrounds and other special
        categories are also eligible for Manipal Online Scholarships. Some of
        the scholarships offered by Manipal Online are as follows:
      </p>
      <ul className="space-y-4">
        {scholarshipsData?.map((scholarship: any, index: any) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-blue-600">•</span>
            <div>
              <span className="font-semibold text-blue-600">
                {scholarship.name}:
              </span>
              <span className="ml-1">{scholarship.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scholarships;
