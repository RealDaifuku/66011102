// components/PrivateRoute.tsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }: any) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
