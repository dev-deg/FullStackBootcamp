import React, { Component } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      desc: props.desc,
      price: props.price,
      quantity: props.quantity,
      onQuantityChanged: props.onQuantityChanged,
    };
  }

  //isNewItemAdd true (+), false (-)
  UpdateQuantity(isNewItemAdded) {
    var quantity = this.state.quantity;
    //Add
    if (isNewItemAdded) {
      this.setState({ quantity: (quantity += 1) });
    } else {
      //Subtract
      this.setState({
        quantity: quantity > 0 ? (quantity -= 1) : quantity,
      });
    }
    this.state.onQuantityChanged(this.state.name, quantity);
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
            <p className="card-text">
              Total Cost: €{(this.state.quantity * this.state.price).toFixed(2)}
            </p>

            <div className="btn-group" role="group" aria-label="Quantity">
              <button
                className="btn btn-success btn-sm"
                onClick={() => this.UpdateQuantity(true)}
              >
                +
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.UpdateQuantity(false)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CartItem;
