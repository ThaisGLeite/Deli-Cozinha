import React from "react";
import logo from "./asseets/logo1.png";
import "./style.css";

class App extends React.Component {
  render() {
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
                <input className="input" type="email" />
                <span className="focus-input" data-placeholder="Email" />
              </div>
              <div className="wrap-input">
                <input className="input" type="password" />
                <span className="focus-input" data-placeholder="Password" />
              </div>
              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>
              <div className="text-center">
                <span className="txt1">Criar Conta</span>
                <a className="txt2" href="#"></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
