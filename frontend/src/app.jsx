import React, { Component } from "react";
import Home from "./components/home";
import Cart from "./components/cart";
import MenuBar from "./components/menuBar";
import PNF from "./components/pnf";
import Login from "./components/login";
import Register from "./components/register";
import { ReqValidation } from "../src/req";

//loading the cookie in the variable cookie
let cookie = document.cookie;

// //if cookie exists
// if (cookie) {
//   ReqValidation(cookie.split("=")[1]).then((r) => {
//     console.log(r);
//     if (r === true) {
//       //render home
//     } else {
//       //render login
//     }
//   });
//   //cookie does not exist
// } else {
//   //render login page
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: props.activePage,
    };
  }

  OnPageChanged(page) {
    this.setState({ activePage: page });
  }

  GetActivePage(active) {
    if (active === "home") {
      return <Home />;
    } else if (active === "cart") {
      return <Cart />;
    } else if (active === "login") {
      return <Login />;
    } else if (active === "register") {
      return <Register />;
    } else {
      <PNF />;
    }
  }
  render() {
    return (
      <React.Fragment>
        <MenuBar
          active={this.state.activePage}
          onPageChanged={(page) => this.OnPageChanged(page)}
        />
        {this.GetActivePage(this.state.activePage)}
      </React.Fragment>
    );
  }
}

export default App;
