import React, { Component } from "react";
import Cart from "./cart";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand p-2" href="#">
            Dentist Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="#"
                  onClick={() => {
                    this.setState({ display: "home" });
                  }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  onClick={() => {
                    this.setState({ display: "cart" });
                  }}
                >
                  Cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default MenuBar;
