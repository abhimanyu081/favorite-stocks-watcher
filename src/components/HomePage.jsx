//<a href='https://www.freepik.com/vectors/money'>Money vector created by freepik - www.freepik.com</a>
import React, { Component } from "react";
import bannerImage from "../assets/home_banner.jpg";

import "../css/banner.css";
import "../css/home.css";
import LoginButton from "./LoginButton";
import Register from "./Register";
import RegisterButton from "./RegisterButton";

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="banner-image-text">
          <img
            className="home-page-banner-image"
            src={bannerImage}
            alt="home page banner"
          />
          <h1>Watch your stocks !</h1>
          <h5>Keep track of your stocks and make informed decisions.</h5>
        </div>
        <Register />
      </div>
    );
  }
}

export default HomePage;
