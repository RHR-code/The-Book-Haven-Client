import React, { use } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { FaHome, FaCog, FaBook, FaBell, FaUser } from "react-icons/fa";
import ProfileLogo from "../components/ProfileLogo";
import { AuthContext } from "../context/AuthContext";
import { FaBookAtlas, FaBookBible, FaBookBookmark } from "react-icons/fa6";

const DashboardLayout = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav
            className="navbar w-full shadow-lg"
            style={{ backgroundColor: "#1a535c" }}
          >
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-white hover:bg-secondary hover:bg-opacity-20"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-6"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="flex-1 px-4 flex items-center gap-3">
              <FaUser className="text-2xl" style={{ color: "#4ecdc4" }} />
              <span className="text-xl font-bold text-white">
                User Dashboard
              </span>
            </div>
            <div className="flex-none gap-2 mr-10">
              {/* Profile */}
              <div className="dropdown dropdown-end">
                {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div
                    className="w-10 rounded-full ring-2 ring-offset-2"
                    style={{ ringColor: "#4ecdc4" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                      alt="User"
                    />
                  </div>
                </label> */}
                <ProfileLogo />
              </div>
            </div>
          </nav>
          {/* Page content here */}
          <Outlet />
        </div>

        <div className="drawer-side shadow-2xl is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div
            className="flex min-h-full flex-col items-start is-drawer-close:w-20 is-drawer-open:w-72 transition-all duration-300"
            style={{ backgroundColor: "#1a535c" }}
          >
            {/* Logo Section */}
            <div className="w-full p-6 border-b border-white border-opacity-20">
              <Link to="/" className="flex items-center gap-3">
                <FaBook
                  className="text-3xl flex-shrink-0"
                  style={{ color: "#4ecdc4" }}
                />
                <div className="is-drawer-close:hidden text-xl font-bold text-white">
                  Book Haven
                </div>
              </Link>
            </div>

            {/* Sidebar content here */}
            <ul className="menu w-full grow p-4 space-y-2">
              {/* Homepage */}
              <li>
                <NavLink
                  to="/dashboard/my-books"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "bg-secondary" : "bg-transparent"
                    } is-drawer-close:tooltip is-drawer-close:tooltip-right  hover:bg-gray-400 rounded-lg transition-all group`
                  }
                  data-tip="Your Books"
                >
                  <FaBookBookmark className="text-xl flex-shrink-0 text-white" />
                  <span className="is-drawer-close:hidden text-white font-medium group-hover:translate-x-1 transition-transform ">
                    Your Books
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-books"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "bg-secondary" : ""
                    } is-drawer-close:tooltip is-drawer-close:tooltip-right  hover:bg-gray-400 rounded-lg transition-all group`
                  }
                  data-tip="Add Books"
                >
                  <FaBookBookmark className="text-xl flex-shrink-0 text-white" />
                  <span className="is-drawer-close:hidden text-white font-medium group-hover:translate-x-1 transition-transform ">
                    Add Books
                  </span>
                </NavLink>
              </li>

              {/* Settings */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-gray-400 rounded-lg transition-all group"
                  data-tip="Settings"
                >
                  <FaCog
                    className="text-xl flex-shrink-0"
                    style={{ color: "#4ecdc4" }}
                  />
                  <span className="is-drawer-close:hidden text-white font-medium group-hover:translate-x-1 transition-transform">
                    Settings
                  </span>
                </button>
              </li>
            </ul>

            {/* User Info at Bottom */}
            <div className="w-full p-4 border-t border-white border-opacity-20">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer">
                <div className="avatar">
                  <div
                    className="w-10 rounded-full ring-2"
                    style={{ ringColor: "#4ecdc4" }}
                  >
                    <ProfileLogo />
                  </div>
                </div>
                <div className="is-drawer-close:hidden">
                  <p className="text-white font-semibold text-sm">
                    {user ? user?.displayName : "User Name"}
                  </p>
                  <p className="text-gray-300 text-xs">
                    {user ? user?.email : "User Email"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
