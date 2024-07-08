"use client";

import { useState } from "react";
import AppliedColleges from "./AppliedColleges/AppliedColleges";
import YourReviews from "./YourReviews/YourReviews";
import PendingApplications from "./PendingApplications/PendingApplications";
import AccountSettings from "./AccountSettings/AccountSettings";
import Logout from "./Logout/Logout";
import YourProfile from "./YourProfile/YourProfile";
import EducationalDetails from "./EducationalDetails/EducationalDetails";
import StepIndicator from "./StepIndicator";
import DesiredColleges from "./DesiredColleges/DesiredColleges";

function RightSection({ selectedItem }: any) {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const renderComponent = () => {
    if (selectedItem && selectedItem !== "Your Profile") {
      switch (selectedItem) {
        case "Applied Colleges":
          return <AppliedColleges />;
        case "Your Reviews":
          return <YourReviews />;
        case "Pending Applications":
          return <PendingApplications />;
        case "Account settings":
          return <AccountSettings />;
        case "Logout":
          return <Logout />;
        default:
          return <YourProfile onNext={handleNextStep} />;
      }
    } else {
      // Use currentStep to determine which component to render
      switch (currentStep) {
        case 1:
          return <YourProfile onNext={handleNextStep} />;
        case 2:
          return <EducationalDetails onNext={handleNextStep} />;
        case 3:
          return <DesiredColleges onNext={handleNextStep} />;
        default:
          return <YourProfile onNext={handleNextStep} />;
      }
    }
  };

  const showProfileHeader = !selectedItem || selectedItem === "Your Profile";

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full">
      {showProfileHeader && (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">Hi Madhur,</h1>
          <p className="text-gray-600 mb-6">Welcome to OnlineWalaCollege</p>
          <StepIndicator currentStep={currentStep} />
        </div>
      )}
      {renderComponent()}
    </div>
  );
}

export default RightSection;
