import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="grow bg-gray-900 w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
