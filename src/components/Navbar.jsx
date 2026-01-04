import React, { use, useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { IoCreateSharp } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
  }, [theme]);
  const handleTheme = (checked) => {
    checked ? setTheme("dark") : setTheme("light");
  };
  const links = (
    <>
      <NavLink
        to="/"
        className="font-semibold text-white text-base hover:text-secondary"
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/all-Books"
        className="font-semibold text-base text-white hover:text-secondary"
      >
        <li>All Books</li>
      </NavLink>
      <NavLink
        to="/add-books"
        className="font-semibold text-white text-base hover:text-secondary"
      >
        <li>Add Books</li>
      </NavLink>
      <NavLink
        to="/my-books"
        className="font-semibold text-white text-base hover:text-secondary"
      >
        <li>My Books</li>
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    userSignOut().then(() => {
      toast.success("Logged Out Successful");
    });
  };

  return (
    <div className="sticky top-0 z-50  navbar  bg-primary border-b-2 border-secondary px-5 pt-5 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="pr-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="font-black text-xl md:text-3xl text-white">
          Books Haven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex  gap-5 menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <a data-tooltip-id="my-tooltip" data-tooltip-content={theme}>
          <input
            defaultChecked={theme === "light" ? false : true}
            onChange={(e) => {
              handleTheme(e.target.checked);
            }}
            type="checkbox"
            className="toggle toggle-success border-blue-50 text-secondary"
          />
        </a>
        {!user ? (
          <div className="space-x-2 flex ">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive
                  ? " md:btn btn-secondary text-white md:text-white"
                  : "md:btn btn-secondary text-white btn-outline  "
              }
            >
              <LuLogIn className="hidden sm:flex" /> Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "md:btn btn-secondary text-white md:text-white"
                  : "md:btn btn-secondary text-white btn-outline"
              }
            >
              <IoCreateSharp className="hidden sm:flex" /> Signup
            </NavLink>
          </div>
        ) : (
          <div className="flex items-center gap-5 ">
            <div>
              <button
                className="md:btn md:btn-primary text-primary md:text-white"
                onClick={handleSignOut}
              >
                SignOut
              </button>
            </div>

            <div className="relative flex items-center">
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
              >
                <button className="flex items-center">
                  <img
                    className="md:w-11 md:h-11 w-8 h-8 rounded-full object-cover z-10"
                    src={user.photoURL}
                    alt=""
                  />
                </button>
              </a>
              <Tooltip place="top-end" id="my-tooltip" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
