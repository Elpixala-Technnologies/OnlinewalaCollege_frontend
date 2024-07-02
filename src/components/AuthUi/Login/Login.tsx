import Image from "next/image";
import React, { useState } from "react";
import LoginImage from "@/assets/images/Rectangle 648.png";

interface LoginProps {
  setAuthStep: (step: number) => void;
  setPhoneNumber: (number: string) => void;
}

const Login: React.FC<LoginProps> = ({ setAuthStep, setPhoneNumber }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneNumber(phone);
    setAuthStep(2);
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
          <div className="p-11">
            <div>
              <h1 className="text-xl">
                <span className="text-blue-400 font-extrabold">Online</span>
                <span className="text-blue-400 font-extralight">wala</span>
                <span className="text-blue-400 font-extrabold">college</span>
              </h1>
            </div>
            <div className="mt-14">
              <h1 className="text-[22px] font-medium">Continue with mobile </h1>
              <p className="text-gray-600 text-xs font-medium">
                {`You'll receive a 4 digit code to verify next`}
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center w-full my-5">
                <div className="w-20">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full p-2 outline-none border border-blue-400 h-[40px] rounded-l-md"
                    placeholder="+91"
                    readOnly
                  />
                </div>
                <div className="w-full">
                  <input
                    type="tel"
                    className="w-full p-2 outline-none border border-blue-400 h-[40px]  rounded-r-md"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#6697FA] font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Get OTP
              </button>
              <h1 className="text-xs text-gray-400 text-center mt-2">
                Your personal information is secured with us
              </h1>
            </form>
            <p className="mt-8 text-start font-medium">
              New to OnlinewalaCollege?{" "}
              <button
                className="text-blue-500 hover:underline font-bold"
                onClick={() => setAuthStep(1)}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
