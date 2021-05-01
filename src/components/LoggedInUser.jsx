import React, { Component } from "react";
import profilePhoto from "../abhimanyu_photo.png";

class LoggedInUser extends Component {
  render() {
    return (
      <div class="logged-in-user-details">
        <img
          class="user-profile-photo"
          src={profilePhoto}
          alt="user prfile photo"
        />
        <span class="user">Abhimanyu</span>
      </div>
    );
  }
}

export default LoggedInUser;
