import React, { Component } from "react";
import MappedCart from "./MappedCart";
import axios from "axios";
import "./Cart.scss";
import loaderGIF from "../../assets/loader.gif";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      quantity: null,
      product_id: null
    };
    this.deleteProductFromCart = this.deleteProductFromCart.bind(this);
    this.iconAddToCart = this.iconAddToCart.bind(this);
    this.inputEditCart = this.inputEditCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  iconAddToCart(cart_id) {
    axios
      .post("/api/button_add_to_cart", { cart_id })
      .then(response => {
        this.setState({
          cart: response.data
        });
      })
      .catch(err => console.log(err));
  }

  // i believe this will be a .put(UPDATE!!!! WASSSSSUP!!!!)
  // iconRemoveFromCart = () => {};

  inputEditCart(quantity, cart_id) {
    axios
      .post("/api/input_add_to_cart", { quantity, cart_id })
      .then(response => {
        this.setState({
          cart: response.data
        });
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.inputEditCart(this.state.quantity, this.state.cart_id);
  }

  deleteProductFromCart(cart_id) {
    axios
      .delete(`/api/delete_from_cart/${cart_id}/`)
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
            return (
              <MappedCart
                newCart={newCart}
                iconAddToCart={this.iconAddToCart}
                inputEditCart={this.inputEditCart}
                deleteProductFromCart={this.deleteProductFromCart}
              />
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
