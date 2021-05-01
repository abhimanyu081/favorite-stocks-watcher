import React, { Component } from "react";
import "../css/Login.css";

class Login extends Component {
  render() {
    return (
      <div class="form-container">
        <div class="title">Login</div>
        <div class="content">
          <form action="#" id="login">
            <div class="user-details">
              <div class="input-box success">
                <span class="details">Email</span>
                <input type="text" placeholder="enter email" id="email" />
                <small></small>
              </div>

              <div class="input-box">
                <span class="details">Password</span>
                <input
                  type="password"
                  placeholder="enter password"
                  id="password"
                />
                <small></small>
              </div>
            </div>

            <div class="button">
              <input id="register-button" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
