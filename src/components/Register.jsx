import React, { Component } from "react";

import {
  validateName,
  validatePassword,
  validateConfirmPassword,
  validateEmail,
  isGenderSelected,
  isBlank,
} from "./helper.js";

const intialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  nameError: "",
  emailError: "",
  passwordError: "",
  confirmPasswordError: "",
  genderError: "",
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = intialState;
  }

  handleChange = (event) => {
    console.log(
      "field name = " + event.target.name + " value = " + event.target.value
    );
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";
    let genderError = "";

    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;
    const gender = this.state.gender;

    nameError = validateName(name);
    emailError = validateEmail(email);
    passwordError = validatePassword(password);
    confirmPasswordError = validateConfirmPassword(password, confirmPassword);
    genderError = isGenderSelected(gender);

    this.setState({
      nameError,
      emailError,
      passwordError,
      confirmPasswordError,
      genderError,
    });

    console.log("nameError = " + nameError);
    console.log("emailError = " + emailError);
    console.log("passwordError = " + passwordError);
    console.log("confirmPasswordError = " + confirmPasswordError);
    console.log("genderError = " + genderError);

    return (
      isBlank(nameError) ||
      isBlank(emailError) ||
      isBlank(passwordError) ||
      isBlank(confirmPasswordError) ||
      isBlank(genderError)
    );
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();

    console.log("isvaliud = " + isValid);

    if (isValid) {
      console.log(this.state);

      fetch("http://localhost:8090/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state),
      }).then(function (response) {
        console.log(response);
        return response.json();
      });

      //reset form
      this.setState(intialState);
    }
  };

  render() {
    return (
      <div className="form-container">
        <div className="title">Register</div>
        <div className="content">
          <form action="#" id="register" onSubmit={this.handleFormSubmit}>
            <div className="user-details">
              <div
                className={
                  "input-box " + (this.state.nameError ? "error" : "success")
                }
              >
                <span className="details">Name</span>
                <input
                  type="text"
                  placeholder="enter your name"
                  id="name"
                  value={this.state.name}
                  name="name" //passed as a props to handle change
                  onChange={this.handleChange}
                />
                <small>{this.state.nameError}</small>
              </div>
              <div
                className={
                  "input-box " + (this.state.emailError ? "error" : "success")
                }
              >
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="enter your email"
                  id="email"
                  name="email" //passed as a props to handle change
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <small>{this.state.emailError}</small>
              </div>

              <div
                className={
                  "input-box " +
                  (this.state.passwordError ? "error" : "success")
                }
              >
                <span className="details">Choose Password</span>
                <input
                  type="password"
                  placeholder="create a password"
                  id="password"
                  name="password" //passed as a props to handle change
                  onChange={this.handleChange}
                  value={this.state.password}
                />
                <small>{this.state.passwordError}</small>
              </div>
              <div
                className={
                  "input-box " +
                  (this.state.confirmPasswordError ? "error" : "success")
                }
              >
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="confirm password"
                  id="confirmpassword"
                  name="confirmPassword" //passed as a props to handle change
                  onChange={this.handleChange}
                  value={this.state.confirmPassword}
                />
                <small>{this.state.passwordError}</small>
              </div>
            </div>
            <div
              className={
                "gender-details " +
                (this.state.confirmPasswordError ? "error" : "success")
              }
            >
              <input
                type="radio"
                name="gender"
                id="dot-1"
                value="male"
                onChange={this.handleChange}
              />
              <input
                type="radio"
                name="gender"
                id="dot-2"
                value="female"
                onChange={this.handleChange}
              />
              <input
                type="radio"
                name="gender"
                id="dot-3"
                value="prefer not to say"
                onChange={this.handleChange}
              />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
              <small>{this.state.genderError}</small>
            </div>
            <div className="button">
              <input id="register-button" type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
