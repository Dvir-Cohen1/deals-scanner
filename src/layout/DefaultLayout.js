import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useThemeContext } from "../context/themeContext";
import DealsProvider from "../context/todayDealsContext";
import {styles} from '../assets/css/style'

function DefaultLayout() {
  const isDarkMode = useThemeContext();

  return (
    <div className={"App flex flex-col space-between text-white " + (isDarkMode && " dark")}>
      <Header />
      <main className={"grow w-full " + styles.defaultBackground}>
        <DealsProvider>
          <Outlet />
        </DealsProvider>
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
