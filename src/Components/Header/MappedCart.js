import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   quantity: null
    // };

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
                className="delete-button"
                onClick={() =>
                  this.props.deleteProductFromCart(this.props.newCart.cart_id)
                }
              >
                Remove From Cart
              </button>
              <div className="cart-img-name-price">
                <img src={this.props.newCart.image} alt="" />
                <div>{this.props.newCart.product_name}</div>
                <div>${this.props.newCart.price} Each</div>
              </div>

              <div className="cart-quantity">
                X {this.props.newCart.quantity}
              </div>
              <div className="cart-options">
                <form
                  className="cart-form"
                  onSubmit={e => {
                    e.preventDefault();
                    this.props.inputEditCart(
                      this.props.newCart.quantity,
                      this.props.newCart.cart_id
                    );
                  }}
                >
                  <input
                    className="cart-input"
                    value={this.props.newCart.quantity}
                    onChange={e => this.handleChange(e)}
                    name="quantity"
                    type="number"
                    placeholder="amount"
                  >
                    {/* {this.props.product.quantity} */}
                  </input>
                  <input type="submit" value="Edit Amount" />
                </form>
              </div>
              <div className="cart-total">
                Total = {this.props.newCart.quantity * this.props.newCart.price}
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
