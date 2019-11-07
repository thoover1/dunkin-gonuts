import React, { Component } from "react";
import axios from "axios";

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

    return (
      <div className="getAllDrinks">
        <div className="inventory">
          {mappedDrinkInventory.map(product => {
            return (
              <div key={product.product_id}>
                <ul className="product" id={product.product_id}>
                  <div className="product-list">
                    <img src={product.image} />
                    <a>{product.product_name}</a>
                    <a>${product.price}</a>
                    {/* insert font awesome icons (plus and minus) here as well as responsive counter 
                              that represents how much in cart*/}
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
