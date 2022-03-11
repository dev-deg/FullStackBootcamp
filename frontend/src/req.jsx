import Axios from "axios";

export const ReqLogin = async (email, password) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": true,
  };
  const response = await Axios.post(
    "http://localhost:3001/login?email=" + email + "&password=" + password,
    {},
    { headers }
  );
  if (response.data.result === "success") {
    //save as a cookie
    document.cookie = "session=" + response.data.token;
    return true;
  } else {
    return false;
  }
};

export const ReqRegistration = async (email, password, name, surname) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": true,
  };
  const response = await Axios.post(
    "http://localhost:3001/register?email=" +
      email +
      "&password=" +
      password +
      "&name=" +
      name +
      "&surname=" +
      surname,
    {},
    { headers }
  );
  if (response.data.result === "success") {
    return true;
  } else {
    return false;
  }
};

export const ReqValidation = async (token) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": true,
  };
  const response = await Axios.post(
    "http://localhost:3001/session?token=" + token,
    {},
    { headers }
  );
  if (response.data.result === "success") {
    console.log("User automatically logged in.");
    return true;
  } else {
    console.log("Session expired. Please login again.");
    return false;
  }
};

// export const SignOut = () => {
//   document.cookie = "session=" + response.data.token;
// };

export default ReqLogin;
