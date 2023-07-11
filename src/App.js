import React, { useState } from "react";
import logo from "./asseets/logo1.png";
import "./style.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Cozinha</span>
            <span className="login-form-title">
              <img src={logo} alt="logo" />
            </span>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-value input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email" />
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-value input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password" />
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
