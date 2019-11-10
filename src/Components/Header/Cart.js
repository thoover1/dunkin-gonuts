import React, { Component } from "react";
import axios from "axios";
import "./Cart.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);

    // const reduxState = store.getState();

    // this.state = {
    //   entireCart: reduxState.entireCart
    // };

    // this.deleteProdocutFromCart = this.deleteProdocutFromCart.bind(this);
  }

  // // this is probably correct
  deleteProductFromCart(product_id) {
    axios.put(`/api/cart/${product_id}`).then(response => {
      this.setState({ ...this.props.cart, product_id });
    });
  }

  render() {
    // const entireCart = this.state.entireCart.map((newProduct, i) => {
    //   return (
    //     <div
    //       key={i}
    //       image={newProduct.image}
    //       product_name={newProduct.product_name}
    //       quantity={newProduct.quantity}
    //     />
    //   );
    // });
    return (
      <div className="cart">
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
      </div>
    );
  }
}
