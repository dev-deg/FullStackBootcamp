import React, { Component } from "react";
import CartItem from "./cartItem";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { name: "Toothpaste", desc: "Goo-like thing", price: 3, quantity: 2 },
        {
          name: "Toothbrush",
          desc: "Bamboo thing with a white brush",
          price: 4,
          quantity: 1,
        },
        {
          name: "Mouthwash",
          desc: "Best brand you could buy",
          price: 4.5,
          quantity: 1,
        },
        {
          name: "Toothpick",
          desc: "Pointy thing - cleans stuff between teeth",
          price: 0.1,
          quantity: 10,
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center p-2">Shopping Cart</h1>
        {this.state.cartItems.map((item) => (
          <CartItem
            name={item.name}
            desc={item.desc}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Cart;
