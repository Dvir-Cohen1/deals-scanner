import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useThemeContext } from "../context/themeContext";
import DealsProvider from "../context/todayDealsContext";

function DefaultLayout() {
  const isDarkMode = useThemeContext();

  return (
    <div className={"App flex flex-col space-between text-white " + (isDarkMode && " dark")}>
      <Header />
      <main className="grow bg-gray-900 dark:bg-slate-100 w-full">
        <DealsProvider>
          <Outlet />
        </DealsProvider>
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
