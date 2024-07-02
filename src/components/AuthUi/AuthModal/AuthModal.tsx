import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../SignUp/Signup";
import OTPVerification from "../OTPVerification/OTPVerification";

enum AuthStep {
  Login,
  Signup,
  OTP,
}

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [authStep, setAuthStep] = useState<AuthStep>(AuthStep.Login);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex md:items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl md:w-[771px] md:h-[432px] relative">
        <div className="absolute right-4 top-2">
          <button
            className="text-gray-500 hover:text-gray-700 text-3xl font-extrabold"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        {authStep === AuthStep.Login && (
          <Login setAuthStep={setAuthStep} setPhoneNumber={setPhoneNumber} />
        )}
        {authStep === AuthStep.Signup && (
          <Signup setAuthStep={setAuthStep} setPhoneNumber={setPhoneNumber} />
        )}
        {authStep === AuthStep.OTP && (
          <OTPVerification phoneNumber={phoneNumber} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
