import React, { Component } from "react";
import Home from "./components/home";
import Cart from "./components/cart";
import MenuBar from "./components/menuBar";
import PNF from "./components/pnf";

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
