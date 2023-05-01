import Link from "next/link";
import React from "react";
import Darkmode from "./Darkmode";

const Header = () => {
  return (
    <>
      <header className="text-gray-800 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-blue-900 mb-4 md:mb-0"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokwidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Amann</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              className="mr-5 hover:text-cyan-700 text-teal-400 font-semibold"
              href="/"
            >
              Home
            </Link>

            <Link
              className="mr-5  hover:text-cyan-700 font-semibold text-teal-400 "
              href="/about"
            >
              About
            </Link>
            <Link
              className="mr-5  hover:text-cyan-700 font-semibold text-teal-400 "
              href="/contact"
            >
              Contact
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <Darkmode />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
