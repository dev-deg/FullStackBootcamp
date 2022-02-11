import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                  className="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
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
