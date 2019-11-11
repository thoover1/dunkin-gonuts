import React, { Component } from "react";
import axios from "axios";
import "./Donuts.scss";
import loaderGIF from "../../../assets/loader.gif";

export default class Donuts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donutInventory: []
    };
    this.getDonutInventory = this.getDonutInventory.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  // // not sure if this is correct....
  addProductToCart(product_id) {
    axios.post(`/api/inventory/donuts/${product_id}`).then(response => {
      this.setState({ ...this.props.cart, product_id });
    });
    console.log(`onclick worked on product id = ${product_id}`);
  }

  componentDidMount() {
    this.getDonutInventory();
  }

  getDonutInventory() {
    axios
      .get("/api/inventory/donuts")
      .then(response => {
        this.setState({
          donutInventory: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const mappedDonutInventory = this.state.donutInventory;
    if (!mappedDonutInventory.length) {
      return (
        <div className="spinner-container">
          <img className="spinner" src={loaderGIF} alt="" />
        </div>
      );
    }
    return (
      <div className="getAllDonuts">
        <div className="inventory">
          {mappedDonutInventory.map(product => {
            return (
              <div key={product.product_id}>
                <ul className="product" id={product.product_id}>
                  <div className="product-list">
                    <img src={product.image} alt="" />
                    <div className="product-info">
                      <div className="product-info-a">
                        <div>{product.product_name}</div>
                        <div>${product.price}</div>
                      </div>
                      <div className="product-cart-options">
                        <i class="fas fa-minus-circle"></i>
                        <input placeholder="amount"></input>
                        <i
                          onClick={this.addProductToCart}
                          class="fas fa-plus-circle"
                        ></i>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
