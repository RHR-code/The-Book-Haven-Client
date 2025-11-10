import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { PropagateLoader } from "react-spinners";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) return <PropagateLoader />;
  if (user) return children;
  return <Navigate to="/signin" />;
};

export default PrivateRoute;
