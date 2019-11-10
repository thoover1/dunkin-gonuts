import React, { Component } from "react";
import axios from "axios";
import "./Drinks.scss";
// import spinnerGIF from "../../../assets/spinner.gif";
import loaderGIF from "../../../assets/loader.gif";

export default class Drinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinkInventory: []
    };
    this.getDrinkInventory = this.getDrinkInventory.bind(this);
  }

  componentDidMount() {
    this.getDrinkInventory();
  }

  getDrinkInventory() {
    axios
      .get("/api/inventory/drinks")
      .then(response => {
        this.setState({
          drinkInventory: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const mappedDrinkInventory = this.state.drinkInventory;
    if (!mappedDrinkInventory.length) {
      return (
        <div className="spinner-container">
          <img className="spinner" src={loaderGIF} alt="" />
        </div>
      );
    } else {
      return (
        <div className="getAllDrinks">
          <div className="inventory">
            {mappedDrinkInventory.map(product => {
              return (
                <div key={product.product_id}>
                  <ul className="product" id={product.product_id}>
                    <div className="product-list">
                      <img src={product.image} alt="" />
                      <div className="product-info">
                        <div className="product-info-a">
                          <a>{product.product_name}</a>
                          <a>${product.price}</a>
                        </div>
                        <div className="product-cart-options">
                          <i class="fas fa-minus-circle"></i>
                          <input placeholder="amount"></input>
                          <i class="fas fa-plus-circle"></i>
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
}
