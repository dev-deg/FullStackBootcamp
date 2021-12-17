import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card m-3">
          <div className="card-header">Item</div>
          <div className="card-body">
            <h5 className="card-title">You should totally buy this</h5>

            <p className="card-text">Price: €5</p>
            <p className="card-text">Quantity: 0</p>

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
