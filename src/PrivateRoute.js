import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // import the context

const PrivateRoute = (props) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Route {...props} /> : <Navigate to="/" />;
};

export default PrivateRoute;
