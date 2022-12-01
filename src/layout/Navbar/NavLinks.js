import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", lable: "Home" },
  { path: "/#Customers", lable: "Customers" },
  { path: "/#Contact", lable: "Contact" },
  { path: "/Deals", lable: "Deals" },
  { path: "/#Pricing", lable: "Pricing" },
  { path: "/about", lable: "About" },
];

const NavLinks = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
      {navLinks.map((item, index) => {
        return (
          <Link
            to={item.path}
            key={index}
            className={
              "px-2.5 py-2 text-white transition-colors duration-150 transform rounded-lg dark:text-gray-200  hover:bg-blue-600 active:bg-blue-400 dark:hover:bg-gray-700 md:mx-2" +
              (location.pathname === item.path
                ? " border-b-2 border-blue-400 bg-blue-600"
                : "")
            }
          >
            {item.lable}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
