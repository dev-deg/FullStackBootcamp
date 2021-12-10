import React, { Component } from "react";
import CartItem from "./cartItem";

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center p-2">Shopping Cart</h1>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </React.Fragment>
    );
  }
}

export default Cart;
