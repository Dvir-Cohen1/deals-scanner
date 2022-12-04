import React from "react";
import { Link, useLocation } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import InfoIcon from '@mui/icons-material/Info';

const navLinks = [
  { path: "/", lable: "Home" },
  { path: "/#Customers", lable: "Customers", icon:"" },
  { path: "/Contact", lable: "Contact", icon: "" },
  { path: "/Deals", lable: "Deals", icon:""},
  { path: "/#Pricing", lable: "Pricing", icon:""},
  { path: "/about", lable: "About", icon: "" },
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
              "px-2.5 py-2 font-normal text-white transition-colors duration-150 transform rounded-lg dark:text-gray-700  hover:bg-blue-600 active:bg-blue-400 dark:hover:bg-gray-200 md:mx-2" +
              (location.pathname === item.path
                ? " border-b-2 border-blue-400 bg-blue-600 dark:bg-gray-200 dark:border-gray-300 active:"
                : "")
            }
          >
            {item.icon} {item.lable}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
