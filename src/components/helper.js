export function validateName(name) {
  const min = 3;
  const max = 25;

  if (isBlank(name)) {
    return "name can not be left blank";
  } else if (!isBetween(min, max, name.length)) {
    return `name must be between ${min} and ${max} characters.`;
  }

  return "";
}

export function validateEmail(email) {
  if (isBlank(email)) {
    return "email cannot be blank";
  } else if (!isEmailValid(email)) {
    return "email is not valid";
  }

  return "";
}

export function validatePassword(password) {
  if (isBlank(password)) {
    return "password cannot be blank.";
  } else if (!isPasswordString(password)) {
    return "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)";
  }

  return "";
}

export function validateConfirmPassword(password, confirmPassword) {
  if (isBlank(password)) {
    return "confirm password cannot be blank.";
  } else if (password !== confirmPassword) {
    return "The password does not match";
  }

  return "";
}

export function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isEmailValid = re.test(email);

  console.log("isEmailValid = " + isEmailValid);

  return isEmailValid;
}

export function isPasswordString(password) {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
}

export function isBlank(value) {
  return value === "" ? true : false;
}

export function isBetween(min, max, value) {
  return value < min || value > max ? false : true;
}

export function isGenderSelected(gender) {
  if (isBlank(gender)) {
    return "gender cannot be blank.";
  }

  return "";
}
