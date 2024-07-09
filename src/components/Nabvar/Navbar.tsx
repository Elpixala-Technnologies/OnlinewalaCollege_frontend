"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Profile from "@/assets/images/Profile.png";
import India from "@/assets/images/India.png";
import AuthModal from "../AuthUi/AuthModal/AuthModal";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAuthModal = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  const getLinkClassName = (href: any) => {
    const baseClasses =
      "block lg:inline-block px-2 py-[7px] rounded xl:text-[18px]";
    const activeClasses = "bg-[#6698FC] text-white";
    return `${baseClasses} ${pathname === href ? activeClasses : ""}`;
  };

  return (
    <>
      <div className="h-[102px] shadow-lg px-4 xl:px-12 flex justify-between items-center relative">
        <Link href={"/"}>
          <h1 className="text-2xl xl:text-3xl">
            <span className="text-blue-400 font-extrabold">Online</span>
            <span className="text-blue-400 font-extralight">wala</span>
            <span className="text-blue-400 font-extrabold">college</span>
          </h1>
        </Link>

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
          className={`lg:flex xl:gap-6 gap-4 lg:items-center absolute lg:static left-0 top-[102px] w-64 z-50 lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <Link href="/colleges" className={getLinkClassName("/colleges")}>
            Explore Colleges
          </Link>
          <Link
            href="/top-universities"
            className={getLinkClassName("/top-universities")}
          >
            Top universities
          </Link>
          <Link href="/programs" className={getLinkClassName("/programs")}>
            Programs
          </Link>
          <Link
            href="/latest-news"
            className={getLinkClassName("/latest-news")}
          >
            Latest News
          </Link>
          <Link href="/more" className={getLinkClassName("/more")}>
            More
          </Link>
        </div>

        {/* User info and language selection */}
        <div className="hidden lg:flex items-center gap-6">
          <div
            className="bg-blue-200 flex items-center gap-5 px-4 py-1 rounded-md cursor-pointer"
            onClick={toggleAuthModal}
          >
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
      {isAuthModalOpen && (
        <AuthModal onClose={() => setIsAuthModalOpen(false)} />
      )}
    </>
  );
}

export default Navbar;
