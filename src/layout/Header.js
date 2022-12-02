import React from "react";
import NavLinks from "./Navbar/NavLinks";
import ThemeSwitchButton from "../components/ThemeSwitchButton";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav className="items-center pt-5 px-4 mx-auto sm:px-8 sm:flex sm:space-x-6">
        <a href="/">
          <img
            src="https://www.floatui.com/images/logo.svg"
            width={120}
            height={50}
            alt="Float UI logo"
          />
        </a>
        <NavLinks />
        <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
          <li>
            <ThemeSwitchButton />
          </li>
          <li>
            <div className="relative mt-4 md:mt-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                className="bg-transparent w-full py-2 pl-10 pr-4 text-gray-700 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-500"
                placeholder="Search"
              />
            </div>
          </li>
          <li>

            <Link to='/login' className="flex items-center text-gray-200">
            Log In
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
