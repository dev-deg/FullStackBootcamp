import React, { Component } from "react";
import CartItem from "./cartItem";

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center p-2">Shopping Cart</h1>
        <CartItem name="Floss" desc="Teeth wire" price={2} />
        <CartItem name="Toothpaste" desc="Goo-like thing" price={3} />
        <CartItem
          name="Toothbrush"
          desc="Bamboo thing with a white brush"
          price={4}
        />
        <CartItem
          name="Electric Toothbrush"
          desc="Brushes your teeth automatically"
          price={100}
        />
        <CartItem
          name="Mouthwash"
          desc="Best brand you could buy"
          price={4.5}
        />
      </React.Fragment>
    );
  }
}

export default Cart;
