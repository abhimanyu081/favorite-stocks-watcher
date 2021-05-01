import React, { Component } from "react";
import logo from "../FSW.png";
import "../css/header.css";
import LoggedInUser from "./LoggedInUser";
import LoginButton from "./LoginButton";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
    };
  }

  render() {
    return (
      <div class="header-container">
        <img src={logo} alt="Faviourite Sotcks Watcher Logo" />
        <div class="logged-in-user-details">
          {this.state.loggedin ? <LoggedInUser /> : <LoginButton />}
        </div>
      </div>
    );
  }
}

export default Header;
