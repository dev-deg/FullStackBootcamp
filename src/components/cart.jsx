import React, { Component } from "react";
import CartItem from "./cartItem";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 18,
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
        {
          name: "Floss",
          desc: "String sort of",
          price: 3.25,
          quantity: 1,
        },
      ],
    };
  }

  QuantityChanged(name, quantity) {
    var items = this.state.cartItems;
    items.forEach((i) => {
      if (i.name === name && i.quantity !== quantity) {
        i.quantity = quantity;
        this.setState({ cartItems: items });
        return;
      }
    });
  }

  GetSubTotal(items) {
    var subtotal = 0;
    items.forEach((i) => {
      subtotal += i.price * i.quantity;
    });
    return subtotal;
  }

  GetVAT(subtotal, rate) {
    return (rate / 100) * subtotal;
  }

  GetTotal(subtotal, rate) {
    return subtotal + this.GetVAT(subtotal, rate);
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
            onQuantityChanged={(name, quantity) =>
              this.QuantityChanged(name, quantity)
            }
          />
        ))}
        <h3 className="m-3">
          Subtotal: €{this.GetSubTotal(this.state.cartItems).toFixed(2)}
        </h3>
        <h3 className="m-3">
          VAT: €
          {this.GetVAT(
            this.GetSubTotal(this.state.cartItems),
            this.state.rate
          ).toFixed(2)}
        </h3>
        <h3 className="m-3">
          Total: €
          {this.GetTotal(
            this.GetSubTotal(this.state.cartItems),
            this.state.rate
          ).toFixed(2)}
        </h3>
      </React.Fragment>
    );
  }
}

export default Cart;
