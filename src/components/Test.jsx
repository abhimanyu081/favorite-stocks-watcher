import React, { Component } from "react";
import Header from "./Header";
import Register from "./Register";

class Test extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body-container">
          <Register />
        </div>
      </div>
    );
  }
}

export default Test;
