import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import { ReqValidation } from "../src/req";
//loading the cookie in the variable cookie
let cookie = document.cookie;

//if cookie exists
if (cookie) {
  ReqValidation(cookie.split("=")[1]).then((r) => {
    console.log(r);
    if (r === true) {
      //render home
    } else {
      //render login
    }
  });
  //cookie does not exist
} else {
  //render login page
}


ReactDOM.render(<App activePage="home" />, document.getElementById("root"));
