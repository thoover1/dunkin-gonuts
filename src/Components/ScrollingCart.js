import React, { Component } from "react";
import axios from "axios";
import loaderGIF from "../assets/loader.gif";

export default class ScrollingCart extends Component {
  constructor() {
    super();

    this.state = {
      scrollingCart: [],
      total: []
    };
    this.getEntireCart = this.getEntireCart.bind(this);
  }

  componentDidMount() {
    this.getEntireCart();
  }

  componentDidUpdate() {
    this.getEntireCart();
  }

  async getEntireCart() {
    await axios
      .get("/api/cart")
      .then(response => {
        this.setState({
          scrollingCart: response.data
        });
        let prices = this.state.scrollingCart.map(totals => {
          return totals.price * totals.quantity;
        });
        this.setState({
          total: prices
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    function getTotal(totally, num) {
      return totally + num;
    }
    if (!this.state.total.length) {
      return <div className="empty cart">Your cart is empty</div>;
    } else {
      return (
        <div className="scrolling-cart">
          <div className="scrolling-cart-column">
            <h4>CART</h4>
            <h6>
              Total:
              {this.state.total.reduce(getTotal)}
            </h6>
            <h6>
              Tax: {(this.state.total.reduce(getTotal) * 0.08).toFixed(2)}
            </h6>
            <h6>
              Sum Total:
              {(
                this.state.total.reduce(getTotal) +
                this.state.total.reduce(getTotal) * 0.08
              ).toFixed(2)}
            </h6>
            <button>Checkout</button>
          </div>
        </div>
      );
    }
  }
}
