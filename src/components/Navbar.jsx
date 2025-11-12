import React, { use, useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { IoCreateSharp } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);
  console.log("navbar", user);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    // if (theme === "light") {
    //   html.setAttribute("data-theme",theme)
    // }else{
    //   html.setAttribute("data-theme",theme)
    // }
  }, [theme]);
  const handleTheme = (checked) => {
    checked ? setTheme("dark") : setTheme("light");
  };
  const [isHover, setIsHover] = useState(false);
  const links = (
    <>
      <NavLink to="/" className="font-semibold text-base hover:text-secondary">
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/all-Books"
        className="font-semibold text-base hover:text-secondary"
      >
        <li>All Books</li>
      </NavLink>
      <NavLink
        to="/add-books"
        className="font-semibold text-base hover:text-secondary"
      >
        <li>Add Books</li>
      </NavLink>
      <NavLink
        to="/my-books"
        className="font-semibold text-base hover:text-secondary"
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
    <div className="navbar  bg-base-100 px-5 mt-5">
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
        <a className="font-black text-xl md:text-3xl text-primary">
          Books Haven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex  gap-5 menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <input
          onChange={(e) => {
            handleTheme(e.target.checked);
          }}
          type="checkbox"
          className="toggle toggle-success "
        />
        {!user ? (
          <div className="space-x-2 flex ">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? " btn btn-primary" : "btn btn-primary btn-outline"
              }
            >
              <LuLogIn className="hidden sm:flex" /> Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-primary btn-outline"
              }
            >
              <IoCreateSharp className="hidden sm:flex" /> Signup
            </NavLink>
          </div>
        ) : (
          <div className="flex items-center gap-5 ">
            <div>
              <button className="btn btn-primary" onClick={handleSignOut}>
                SignOut
              </button>
            </div>

            <div className="relative flex items-center">
              <button>
                <img
                  className="w-11 h-11 rounded-full object-cover z-10"
                  src={user.photoURL}
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}
                  alt=""
                />
              </button>
              {isHover && (
                <p className="absolute bg-secondary/50 backdrop-blur-2xl w-[200px] right-0 rounded-full  text-center -top-7">
                  {user.displayName}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
