"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Profile from "@/assets/images/Profile.png";
import India from "@/assets/images/India.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-[102px] shadow-lg px-4 xl:px-12 flex justify-between items-center relative">
      <div>
        <h1 className="text-2xl xl:text-3xl">
          <span className="text-blue-400 font-extrabold">Online</span>
          <span className="text-blue-400 font-extralight">wala</span>
          <span className="text-blue-400 font-extrabold">college</span>
        </h1>
      </div>

      {/* Hamburger menu for mobile and tablets */}
      <button className="lg:hidden" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menu items */}
      <div
        className={`lg:flex xl:gap-10 gap-4 lg:items-center absolute lg:static left-0 top-[102px] w-64 z-50 lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-4 lg:p-0">
          <button className="bg-blue-400 xl:p-2 xl:text-[18px] rounded-md text-white w-full lg:w-auto">
            Explore colleges
          </button>
        </div>
        <Link
          href={""}
          className="block lg:inline-block p-4 lg:p-0 xl:text-[18px]"
        >
          Top universities
        </Link>
        <Link
          href={""}
          className="block lg:inline-block p-4 lg:p-0 xl:text-[18px]"
        >
          Program
        </Link>
        <Link
          href={""}
          className="block lg:inline-block p-4 lg:p-0 xl:text-[18px]"
        >
          Latest News
        </Link>
        <Link
          href={""}
          className="block lg:inline-block p-4 lg:p-0 xl:text-[18px]"
        >
          More
        </Link>
      </div>

      {/* User info and language selection */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="bg-blue-200 flex items-center gap-5 px-4 py-1 rounded-md">
          <Image src={Profile} width={40} height={24} alt="Profile" />
          <h1 className="text-[20px]">login</h1>
        </div>
        <div>
          <Image src={India} width={30} height={30} alt="India flag" />
        </div>
        <div>
          <h1 className="font-semibold text-xl">ENG</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
