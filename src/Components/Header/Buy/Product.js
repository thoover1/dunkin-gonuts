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
        <div key={this.props.product.product_id}>
          <ul className="product" id={this.props.product.product_id}>
            <div className="product-list">
              <img src={this.props.product.image} alt="" />
              <div className="product-info">
                <div className="product-info-a">
                  <div>{this.props.product.product_name}</div>
                  <div>${this.props.product.price}</div>
                </div>
                <div className="product-cart-options">
                  <i class="fas fa-minus-circle"></i>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      this.props.inputEditCart(
                        this.state.quantity,
                        this.props.product.product_id
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
                    onClick={() =>
                      this.props.iconAddToCart(this.props.product.product_id)
                    }
                    class="fas fa-plus-circle"
                  ></i>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
