import React, { Component } from "react";
import MenuBar from "./menuBar";

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
        <MenuBar />
        <h1>Welcome Home</h1>
      </React.Fragment>
    );
  }
}

export default Home;
