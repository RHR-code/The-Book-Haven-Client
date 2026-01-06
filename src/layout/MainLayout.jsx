import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </>
  );
};

export default MainLayout;
