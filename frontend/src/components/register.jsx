import React, { Component } from "react";
import { ReqRegistration } from "../req";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValid: "form-control",
      password: "",
      password2: "",
      name: "",
      surname: "",
    };
  }

  setEmail(email) {
    this.setState({ email: email });

    if (email !== "") {
      const isValid = this.validateEmail(email);
      if (!isValid) {
        this.setState({ emailValid: "form-control is-invalid" });
      } else {
        this.setState({ emailValid: "form-control" });
      }
    } else {
      this.setState({ emailValid: "form-control" });
    }
  }

  validateEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) === null
      ? false
      : true;
  }

  processRegister() {
    if (
      this.validateEmail(this.state.email) &&
      this.state.password != "" &&
      this.state.password2 != "" &&
      this.state.name != "" &&
      this.state.surname != ""
    ) {
      const state = this.state;
      ReqRegistration(
        state.email,
        state.password,
        state.name,
        state.surname
      ).then((result) => {
        console.log("Register Success!");
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div
            className="col-xl-4 col-lg-6 col-md-8 col-sm-10 mx-auto"
            style={{ marginTop: "5%" }}
          >
            <form>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="nameInput"
                  aria-describedby="nameHelp"
                  onBlur={(e) => this.setState({ name: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Surname
                </label>
                <input
                  type="surname"
                  className="form-control"
                  id="surnameInput"
                  aria-describedby="surnameHelp"
                  onBlur={(e) => this.setState({ surname: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={this.state.emailValid}
                  id="emailInput"
                  aria-describedby="emailHelp"
                  onBlur={(e) => this.setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  onBlur={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="passwordInput2" className="form-label">
                  Re-type Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput2"
                  onBlur={(e) => this.setState({ password2: e.target.value })}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => this.processRegister()}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
