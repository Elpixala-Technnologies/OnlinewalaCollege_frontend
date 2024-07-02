import Image from "next/image";
import React, { useState } from "react";
import LoginImage from "@/assets/images/Rectangle 648.png";

interface OTPVerificationProps {
  phoneNumber: string;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ phoneNumber }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(parseInt(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <>
      <div className="md:flex">
        <div className="md:w-[35%] bg-blue-400">
          <div className="p-10">
            <div className="text-white">
              <h1 className="font-bold text-2xl">Login</h1>
              <p className="line-clamp-3 my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <Image
              src={LoginImage}
              alt=""
              width={500}
              height={500}
              className="w-[204px] h-[216px]"
            />
          </div>
        </div>
        <div className="md:w-[65%]">
          <div className="p-10">
            <div>
              <h1 className="text-xl">
                <span className="text-blue-400 font-extrabold">Online</span>
                <span className="text-blue-400 font-extralight">wala</span>
                <span className="text-blue-400 font-extrabold">college</span>
              </h1>
            </div>
            <div className="mb-4 mt-12">
              <h1 className="text-[20px] font-medium">
                {" "}
                Please enter the 6-digit OTP
              </h1>
              <span className="text-xs ">
                sent on <span className="text-blue-500">{phoneNumber}</span>
              </span>
            </div>
            <div className="my-6">
              <h1 className="text-xs text-blue-500">Change Mobile Number </h1>
            </div>
            <div className="flex justify-start gap-2 mb-4">
              {otp.map((data, index) => {
                return (
                  <input
                    className="w-10 h-10 text-center text-2xl border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="otp"
                    maxLength={1}
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Confirm OTP
            </button>
            <p className="mt-4 text-center">
              {`Didn't receive the OTP? `}
              <button className="text-blue-500 hover:underline">Resend</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;
