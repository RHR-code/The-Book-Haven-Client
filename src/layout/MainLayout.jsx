import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default MainLayout;
