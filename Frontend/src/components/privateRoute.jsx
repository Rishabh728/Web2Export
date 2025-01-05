import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthService from "../Services/authService";

const PrivateRoute = () => {
  const isAuthenticated = AuthService.getAccessToken();

  // If the user is authenticated, render the nested routes (via <Outlet />)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
