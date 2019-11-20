import React, { PureComponent } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
// import loaderGIF from "../assets/loader.gif";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

export default class ScrollingCart extends PureComponent {
  render() {
    async function handleToken(token) {
      const checkoutResponse = await axios.post(
        "http://localhost:3000/#/checkout",
        {
          token
        }
      );
      const { status } = checkoutResponse.data;
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
    let prices = this.props.cart
      .map(totals => {
        return totals.price * totals.quantity;
      })
      .reduce(getTotal);
    // null "if" doesn't work....
    if (prices === null) {
      return <div className="loading-cart">Loading....</div>;
    } else if (prices === []) {
      return <div className="empty-cart">Your cart is empty</div>;
    } else
      return (
        <div className="scrolling-cart">
          <div className="scrolling-cart-column">
            <h5>CART</h5>
            <h6>Price: $ {prices}</h6>
            <h6>Tax: $ {prices * 0.08}</h6>
            <h6>Total: $ {prices + prices * 0.08}</h6>
            <StripeCheckout
              stripeKey="pk_test_ANIANWG25Tgt2fvXFcMOF1Ey00NI3Ls157"
              token={handleToken}
              label="Checkout"
              amount={(prices + prices * 0.08) * 100}
              closed={this.props.wipeCart}
            />
          </div>
        </div>
      );
  }
}
