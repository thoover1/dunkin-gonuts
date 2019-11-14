import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="cart" key={this.props.newCart.cart_id}>
          <ul className="cart-list" id={this.props.newCart.cart_id}>
            <div className="cart-list-a">
              <button
                onClick={() =>
                  this.props.deleteProductFromCart(this.props.newCart.cart_id)
                }
              >
                X
              </button>
              <img src={this.props.newCart.image} alt="" />
              <div>{this.props.newCart.product_name}</div>
              <div>{this.props.newCart.quantity}</div>
              <div>${this.props.newCart.price} Each</div>
              <div className="cart-options">
                <i class="fas fa-minus-circle"></i>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    this.props.inputEditCart(
                      this.state.quantity,
                      this.props.newCart.cart_id
                    );
                  }}
                >
                  <input
                    value={this.state.quantity}
                    onChange={e => this.handleChange(e)}
                    name="quantity"
                    type="number"
                    placeholder="amount"
                  >
                    {/* {this.props.product.quantity} */}
                  </input>
                  <input type="submit" value="Enter Amount" />
                </form>
                <i
                  //   onClick={() =>
                  //     this.props.iconAddToCart(this.props.newCart.cart_id)
                  //   }
                  class="fas fa-plus-circle"
                ></i>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
