import React, { Component } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Toothpaste",
      desc: "Your teeth need this.",
      price: 3,
      quantity: 1,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="card m-3">
          <div className="card-header">{this.state.name}</div>
          <div className="card-body">
            <p className="card-text">Description: {this.state.desc}</p>
            <p className="card-text">Price: €{this.state.price}</p>
            <p className="card-text">Quantity: {this.state.quantity}</p>
            <p className="card-text">Total Cost: €</p>

            <div className="btn-group" role="group" aria-label="Quantity">
              <button className="btn btn-success btn-sm">+</button>
              <button className="btn btn-danger btn-sm">-</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CartItem;
