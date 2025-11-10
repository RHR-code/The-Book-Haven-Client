import React, { use } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { IoCreateSharp } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);
  console.log("navbar", user);

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
    <div className="navbar  bg-base-100 px-5 ">
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
          <div>
            <button className="btn btn-primary" onClick={handleSignOut}>
              SignOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
