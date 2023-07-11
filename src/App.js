import React, { useState } from "react";
import logo from "./asseets/logo1.png";
import "./style.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const API_URL = process.env.LOGIN_API_URL || "https://your-api-url.com";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error occurred while fetching data");
      }

      const data = await response.json();
      console.log(data);

      // Handle API response as needed
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
            <span className="login-form-title">Cozinha</span>
            <span className="login-form-title">
              <img src={logo} alt="logo" />
            </span>
            <div className="wrap-input">
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email" />
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password" />
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

export default App;
