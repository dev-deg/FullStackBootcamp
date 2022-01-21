import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "home",
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome Home</h1>
      </React.Fragment>
    );
  }
}

export default Home;
