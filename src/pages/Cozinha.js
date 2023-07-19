import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Cozinha = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // If the user is not authenticated, redirect them to the login page
  if (!isAuthenticated) {
    navigate("/");
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page of our application.</p>
    </div>
  );
};

export default Cozinha;
