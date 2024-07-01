import React from "react";
import Notification from "../Overview/Notifications/Notification";
import Highlights from "./Highlights";
import AdmissionTable from "./AdmissionTable";
import ApplicationProcess from "./ApplicationProcess";
import DocumentsList from "./DocumentsList";

function EligibilityAndAdmissionProcess() {
  const highlights = {
    instituteName: "Manipal University Online",
    location: "Jaipur, Rajasthan",
    instituteType: "Private (Distance Education)",
    entranceExam:
      "National: CAT/ XAT/ MAT/ CMAT/ GMAT/ University Online Aptitude Test",
    applicationMode: "BCA, BBA, B.Com, M.Com, MCA, MJMC and MBA",
    officialWebsite: "www.onlinemanipal.com",
  };

  const ugAdmission = [
    {
      course: "BBA",
      duration: "3 years",
      fee: "28,000 (1st year)",
      specialization: "Business Administration",
      eligibility:
        "10+2 or 3-year Diploma with a minimum of 50% aggregate marks (45% for reserved category candidates).",
      selectionCriteria: "Score/Merit in the last qualifying examination",
    },
    {
      course: "B.Com",
      duration: "3 years",
      fee: "26,000 (1st year)",
      specialization: "General",
      eligibility: "10+2 from a recognized board",
      selectionCriteria: "Score/Merit in the last qualifying examination",
    },
    {
      course: "BCA",
      duration: "3 years",
      fee: "40,000 (1st year)",
      specialization: "Computer Applications",
      eligibility:
        "10+2 or 3-year Diploma with a minimum of 50% aggregate marks (45% for reserved category candidates).",
      selectionCriteria: "Score/Merit in the last qualifying examination",
    },
  ];

  const pgAdmission = [
    {
      course: "MBA",
      duration: "2 years",
      fee: "75,000 (1st year)",
      specialization: "Finance, Marketing, HRM",
      eligibility:
        "Bachelor's degree with a minimum of 50% aggregate marks (45% for reserved category candidates)",
    },
    {
      course: "MCA",
      duration: "2 years",
      fee: "76,000 (1st year)",
      specialization: "Computer Applications",
      eligibility:
        "Bachelor's degree in Computer Applications/ Computer Science/ Information Technology with a minimum of 50% aggregate marks (45% for reserved category candidates).",
    },
    {
      course: "M.Com",
      duration: "2 years",
      fee: "76,000 (1st year)",
      specialization: "General",
      eligibility: "Graduation from a recognized university",
    },
    {
      course: "M.Com",
      duration: "2 years",
      fee: "76,000 (1st year)",
      specialization: "Journalism and Mass Communication",
      eligibility: "Graduation from a recognized university",
    },
  ];

  const applicationSteps = [
    "Visit the official website of the institute.",
    'Register as the "New User" and provide the relevant details.',
    "Log in to the account created and fill the application form with all the required details.",
    "The admission Counsellor will reach out to the students to assist with the application process.",
    "Candidates are required to provide their personal details, academic details, and ID proof, and upload the requisite documents.",
    "Candidates do not need to send a printed application form to the university.",
    "Pay an application fee of INR 500 that will be adjusted against the first semester fee.",
  ];

  const documentsRequired = [
    "Class 10 Mark Sheet",
    "Class 12 Mark Sheet (if the Result is declared)",
    "Graduation Mark Sheet (For post-graduation students)",
    "Graduation Certificate",
    "Domicile Certificate (for Madhya Pradesh students)",
    "Entrance Test Result Sheet / Rank Certificate for MBA students only (If the Result is declared)",
    "ID Proof (Aadhar Card/ Election Voting Card/ Passport/Driving license)",
    "3 passport-size coloured photographs",
    "SC/ST/OBC Certificate (for SC/ST/OBC students only)",
    "Caste Certificate issued by the competent authority (for Reserve Category)",
    "Caste Validity Certificate (All reserve category candidates except ST candidates)",
    "Non-Creamy Layer Certificate (for OBC/SEBC/VJNT/SBC/NT candidates by Reserve Category but not applicable to SC & ST)",
    "Tribe Validity Certificate (Only applicable to ST)",
    "Physically Handicapped/Learning Certificate",
    "Original Migration Certificate",
    "Original Character Certificate",
    "Gap Certificate (if applicable)",
    "Certificate of change of name (if applicable published in the Government Gazette)",
    "Two sets of self-attested copies of the above documents",
    "Affidavit in case for GAP / Anti-Ragging",
    "Address of the father in case of the ward of Ex-Servicemen",
    "Blood Group",
  ];
  return (
    <div>
      <Notification />
      <div className="p-5 mt-5 shadow-md rounded-lg bg-white">
        <h1 className="sm:text-3xl font-bold mb-8">
          Manipal Online Admissions 2024
        </h1>

        <Highlights highlights={highlights} />

        <AdmissionTable
          title="Manipal Online UG Admission 2024"
          data={ugAdmission}
        />

        <AdmissionTable
          title="Manipal Online PG Admission 2024"
          data={pgAdmission}
        />

        <ApplicationProcess steps={applicationSteps} />

        <DocumentsList documents={documentsRequired} />
      </div>
    </div>
  );
}

export default EligibilityAndAdmissionProcess;
