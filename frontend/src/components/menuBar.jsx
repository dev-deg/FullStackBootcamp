import React, { Component } from "react";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      onPageChanged: props.onPageChanged,
    };
  }

  updatePage(page) {
    this.state.onPageChanged(page);
    this.setState({ active: page });
  }

  isActive(page) {
    return this.state.active === page ? "nav-link active" : "nav-link";
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand p-2" href="#">
            Dentist Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a
                  className={this.isActive("home")}
                  href="#"
                  onClick={() => {
                    this.updatePage("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={this.isActive("cart")}
                  href="#"
                  onClick={() => {
                    this.updatePage("cart");
                  }}
                >
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
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
