import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-12 md:mt-12 mt-4 max-w-[1450px] mx-auto p-5 ">
      <div className="flex md:flex-row flex-col justify-between items-center mb-20">
        <div>
          <h1 className="text-2xl xl:text-3xl">
            <span className="text-white font-extrabold">Online</span>
            <span className="text-white font-extralight">wala</span>
            <span className="text-white font-extrabold">college</span>
          </h1>
        </div>
        <div className="md:w-[40%] w-full md:mt-0 mt-2">
          <p className="text-black md:text-start text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
            incidunt sequi, voluptates cum dolore nostrum est quaerat laudantium
          </p>
        </div>
      </div>
      <div className="px-4">
        <div className="flex flex-wrap lg:justify-between justify-center">
          <div className="w-full lg:w-1/5 md:text-start text-center mb-8 lg:mb-0">
            <h2 className="text-black font-bold mb-4">Product</h2>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Case studies
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Updates
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:text-start text-center mb-8 lg:mb-0">
            <h2 className="text-black font-bold mb-4">Company</h2>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Contact us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Culture
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:text-start text-center mb-8 lg:mb-0">
            <h2 className="text-black font-bold mb-4">Support</h2>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Getting started
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Help center
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Server status
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Report a bug
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Chat support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:text-start text-center mb-8 lg:mb-0">
            <h2 className="text-black font-bold mb-4">Downloads</h2>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  iOS
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Android
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Mac
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline">
                  Windows
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Chrome
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:text-start lg:text-start text-center lg:block hidden">
            <h2 className="text-black font-bold mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              mauris sed ma
            </p>
            <form>
              <input
                type="email"
                className="w-full px-4 py-2 mb-4 text-gray-700 bg-white rounded focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="w-max px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
