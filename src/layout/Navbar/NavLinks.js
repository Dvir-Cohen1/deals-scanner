import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { path: "./", lable: "Careers" },
  { path: "./", lable: "Customers" },
  { path: "./", lable: "Contact" },
  { path: "/#Pricing", lable: "Pricing" },
  { path: "./about", lable: "About" },
];

const NavLinks = () => {
  return (
    <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
      {navLinks.map((item) => {
        return (
          <Link
            to={item.path}
            className="px-2.5 py-2 text-white transition-colors duration-150 transform rounded-lg dark:text-gray-200  hover:bg-blue-600 active:bg-blue-400 dark:hover:bg-gray-700 md:mx-2"
          >
            {item.lable}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
