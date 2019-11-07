import React, { Component } from "react";
import axios from "axios";
import "./Sandwiches.scss";

export default class Sandwiches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sandwichInventory: []
    };
    this.getSandwichInventory = this.getSandwichInventory.bind(this);
  }

  componentDidMount() {
    this.getSandwichInventory();
  }

  getSandwichInventory() {
    axios
      .get("/api/inventory/sandwiches")
      .then(response => {
        this.setState({
          sandwichInventory: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const mappedSandwichInventory = this.state.sandwichInventory;
    return (
      <div className="getAllSandwiches">
        <div className="inventory">
          {mappedSandwichInventory.map(product => {
            return (
              <div key={product.product_id}>
                <ul className="product" id={product.product_id}>
                  <div className="product-list">
                    <img src={product.image} />
                    <div className="product-info">
                      <div className="product-info-a">
                        <a>{product.product_name}</a>
                        <a>${product.price}</a>
                        {/* insert font awesome icons (plus and minus) here as well as responsive counter 
                              that represents how much in cart*/}
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
