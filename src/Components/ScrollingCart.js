import React, { Component } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
// import loaderGIF from "../assets/loader.gif";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

export default class ScrollingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollingCart: [],
      total: []
    };
    this.getScrollingCart = this.getScrollingCart.bind(this);
  }

  async getScrollingCart() {
    const res = await axios.get("/api/scrolling_cart");
    const { data } = await res;
    this.setState({
      scrollingCart: data
    });
    let prices = this.state.scrollingCart.map(totals => {
      return totals.price * totals.quantity;
    });
    this.setState({
      total: prices
    });
    console.log("get");
  }

  componentDidMount() {
    this.getScrollingCart();
    console.log("mount");
  }
  componentDidUpdate(prevProps) {
    if (prevProps.scrollingCart.length !== this.props.scrollingCart)
      this.getScrollingCart();
    console.log("update");
  }

  render() {
    async function handleToken(token) {
      const checkoutResponse = await axios.post(
        "http://localhost:3000/#/checkout",
        {
          token
        }
      );
      const { status } = checkoutResponse.data;
      this.props.wipeCart();
      console.log("Response:", checkoutResponse.data);
      if (status === "success") {
        // toast
        alert("Success! Payment Submitted!", { type: "success" });
      } else {
        // toast
        alert("Something went wrong", { type: "error" });
      }
    }

    function getTotal(totally, num) {
      return totally + num;
    }

    if (this.state.total === null) {
      return <div className="loading-cart">Loading....</div>;
    } else if (!this.state.total.length) {
      return <div className="empty-cart">Your cart is empty</div>;
    } else
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
            <StripeCheckout
              stripeKey="pk_test_ANIANWG25Tgt2fvXFcMOF1Ey00NI3Ls157"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={
                (
                  this.state.total.reduce(getTotal) +
                  this.state.total.reduce(getTotal) * 0.08
                ).toFixed(2) * 100
              }
            />
          </div>
        </div>
      );
  }
}
