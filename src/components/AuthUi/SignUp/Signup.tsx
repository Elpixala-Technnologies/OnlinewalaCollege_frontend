import Image from "next/image";
import React, { useState } from "react";
import LoginImage from "@/assets/images/Rectangle 648.png";

interface SignupProps {
  setAuthStep: (step: number) => void;
  setPhoneNumber: (number: string) => void;
}

const Signup: React.FC<SignupProps> = ({ setAuthStep, setPhoneNumber }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    course: "",
    state: "",
    city: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneNumber(formData.phone);
    setAuthStep(2);
  };

  return (
    <>
      <div>
        <div className="md:flex">
          <div className="md:w-[35%] bg-blue-400">
            <div className="p-10">
              <div className="text-white">
                <h1 className="font-bold text-2xl">Sign Up</h1>
                <p className="line-clamp-3 my-4">
                  Get access to college brochures, favourites and dashboard
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
            <div className="p-10 h-[432px] overflow-y-auto hide-scrollbar">
              <div>
                <h1 className="text-xl">
                  <span className="text-blue-400 font-extrabold">Online</span>
                  <span className="text-blue-400 font-extralight">wala</span>
                  <span className="text-blue-400 font-extrabold">college</span>
                </h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-10">
                  <h1 className="text-[20px]">To Sign Up,</h1>
                  <h1 className="text-xs">
                    Please enter the following details
                  </h1>
                  <p className="mt-4 text-[14px]">
                    Already a user?{" "}
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => setAuthStep(0)}
                    >
                      Login
                    </button>
                  </p>
                </div>
                <div className="flex items-center gap-10 mt-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                <div className="mb-4 mt-5">
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className=" block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 mt-5">
                  <label htmlFor="dob" className="text-sm">
                    Date of birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className=" block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className=" block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                    placeholder="+91 Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className=" block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Course
                  </label>
                  <select
                    name="course"
                    className=" block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="course1">Course 1</option>
                    <option value="course2">Course 2</option>
                    <option value="course3">Course 3</option>
                  </select>
                </div>

                <div className="flex items-center gap-5">
                  <div className="mb-4 w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <select
                      name="state"
                      className=" block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select State</option>
                      <option value="state1">State 1</option>
                      <option value="state2">State 2</option>
                      <option value="state3">State 3</option>
                    </select>
                  </div>
                  <div className="mb-4 w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <select
                      name="city"
                      className=" block w-full rounded-md border border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select City</option>
                      <option value="city1">City 1</option>
                      <option value="city2">City 2</option>
                      <option value="city3">City 3</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6697FA] text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-10"
                >
                  Send OTP
                </button>
                <h1 className="text-xs text-center mt-2 text-gray-500">
                  Your personal information is secured with us
                </h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
