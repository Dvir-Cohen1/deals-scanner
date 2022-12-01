import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FooterAlt from "./FooterAlt";
import { Outlet } from "react-router-dom";
import { useThemeContext } from "../context/themeContext";

function DefaultLayout() {
  const isDarkMode = useThemeContext();

  return (
    <div
      className={"App flex flex-col space-between text-white " + (isDarkMode && " dark")}>
      <Header />
      <main className="grow bg-gray-900 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
