import React, { Component } from "react";
import axios from "axios";
import "./Cart.scss";
import loaderGIF from "../../assets/loader.gif";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };

    this.deleteProductFromCart = this.deleteProductFromCart.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/cart")
      .then(response => {
        this.setState({
          cart: response.data
        });
      })
      .catch(err => console.log(err));
  }

  // // this is maybe correct
  deleteProductFromCart(cart_id) {
    axios
      .delete("/api/delete_from_cart", { cart_id })
      .then(response => {
        this.setState({
          cart: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.cart);
    const mappedCart = this.state.cart;
    if (!mappedCart.length) {
      return (
        <div className="spinner-container">
          <img className="spinner" src={loaderGIF} alt="" />
          <br />
          Do-nut Worry! Fetching data as we speak! Sit Tight!
        </div>
      );
    }

    return (
      <div className="cart-container">
        <h1>Cart</h1>
        <div className="scrolling-cart">
          <div className="scrolling-cart-column">
            <h4>CART</h4>
            <h6>Total:</h6>
            <h6>Tax:</h6>
            <h6>Sum Total:</h6>
            <button>Checkout</button>
          </div>
        </div>
        <div className="mapped-cart">
          {mappedCart.map(newCart => {
            console.log(444, newCart);
            return (
              <div className="cart" key={newCart.cart_id}>
                <ul className="cart-list" id={newCart.cart_id}>
                  <button
                    onClick={() =>
                      this.deleteProductFromCart(newCart.product_id)
                    }
                  >
                    X
                  </button>
                  <img src={newCart.image} />
                  <div>{newCart.product_name}</div>
                  <div>{newCart.quantity}</div>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// function mapReduxStateToProps(state) {
//   return state;
// }

// export default connect(
//   mapReduxStateToProps,
//   { getEntireCart }
// )(Cart);
