import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import logo from "./asseets/logo1.png";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext); // Use AuthContext to get setIsAuthenticated
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const API_URL = process.env.REACT_APP_LOGIN_API_URL;
    try {
      console.log("Entrou na chamada da API");
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: usuario,
          senha: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error occurred while fetching data");
      }

      const data = await response.json();
      console.log(data);

      // Check if the API response is "Authorized"
      if (data === "Authorized") {
        // Set isAuthenticated state to true upon successful login
        setIsAuthenticated(true);
        // Navigate to the kitchen page using React Router
        navigate("/cozinha"); // MODIFIED: Use navigate instead of history.push
      }

      // Handle API response error as needed
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-form-title">Cozinha - Login</span>
            <span className="login-form-title">
              <img src={logo} alt="logo" />
            </span>
            <div className="wrap-input">
              <input
                name="usuario"
                className={usuario ? "has-value input" : "input"}
                type="text"
                value={usuario}
                autoComplete="on"
                onChange={(e) => setUsuario(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Usuario" />
            </div>
            <div className="wrap-input">
              <input
                name="password"
                className={password ? "has-value input" : "input"}
                type="password"
                value={password}
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha" />
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn" type="submit">
                Login
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
