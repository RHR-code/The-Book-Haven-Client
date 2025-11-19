import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { PropagateLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { pathname } = useLocation();

  if (loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <PropagateLoader />
      </div>
    );
  if (user) return children;
  return <Navigate state={pathname} to="/signin" />;
};

export default PrivateRoute;
