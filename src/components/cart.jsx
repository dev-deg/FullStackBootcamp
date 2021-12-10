import React, { Component } from "react";
import CartItem from "./cartItem";

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <CartItem />
        <CartItem />
        <CartItem />
      </React.Fragment>
    );
  }
}

export default Cart;
