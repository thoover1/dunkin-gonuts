import React, { Component } from "react";
import MappedCart from "./MappedCart";
import axios from "axios";
import "./Cart.scss";
// import loaderGIF from "../../assets/loader.gif";
import ScrollingCart from "../ScrollingCart";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      quantity: 0
    };
    this.getEntireCart = this.getEntireCart.bind(this);
    this.deleteProductFromCart = this.deleteProductFromCart.bind(this);
    this.inputUpdateCart = this.inputUpdateCart.bind(this);
    this.wipeCart = this.wipeCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getEntireCart();
  }

  async getEntireCart() {
    const res = await axios.get("/api/cart");
    const { data } = await res;
    this.setState({
      cart: data
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.inputUpdateCart(this.state.cart.quantity, this.state.cart.cart_id);
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

  wipeCart(user_id) {
    axios
      .delete(`/api/after_purchase_wipe_cart/${user_id}/`)
      .then(response => {
        this.setState({
          cart: response.data
        });
      })
      .catch(err => console.log(err));
  }

  inputUpdateCart(quantity, cart_id) {
    axios
      .put(`/api/input_update_cart/${cart_id}/`, { quantity })
      .then(response => {
        this.setState({
          cart: response.data
        });
      });
  }

  render() {
    const emptyCartStyle = {
      height: "60vh"
    };
    const mappedCart = this.state.cart.sort((a, b) => a.cart_id - b.cart_id);
    if (this.props.user === null) {
      return <Redirect to="/auth/login" />;
    } else if (!mappedCart.length) {
      return (
        <div className="empty-cart" style={emptyCartStyle}>
          Your cart is empty
        </div>
      );
    }

    return (
      <div className="cart-container">
        <h1>My Cart</h1>
        <ScrollingCart wipeCart={this.wipeCart} cart={this.state.cart} />
        <div className="mapped-cart">
          {mappedCart.map(newCart => {
            return (
              <MappedCart
                newCart={newCart}
                inputUpdateCart={this.inputUpdateCart}
                deleteProductFromCart={this.deleteProductFromCart}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Cart);
