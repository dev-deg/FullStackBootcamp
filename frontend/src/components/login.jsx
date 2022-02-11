import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValid: "form-control",
      password: "",
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

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div
            className="col-xl-4 col-lg-6 col-md-8 col-sm-10 mx-auto"
            style={{ marginTop: "15%" }}
          >
            <form>
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
                <a href="#">Forgot your password?</a>
              </div>

              <button type="button" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
