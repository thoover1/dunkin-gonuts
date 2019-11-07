import React, { Component } from "react";
import axios from "axios";

export default class Donuts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donutInventory: []
    };
    this.getDonutInventory = this.getDonutInventory.bind(this);

    // this.addProductToCart = this.addProductToCart.bind(this);
    // this.deleteProdocutFromCart = this.deleteProdocutFromCart.bind(this);
  }

  // // not sure if this is correct....
  // addProductToCart(id) {
  //   axios.put(`/api/inventory/${id}`).then(response => {
  //     this.setState({ product: response.data})
  //   })
  // }
  // // this is probably correct
  // deleteProductFromCart(id) {
  //   axios.put(`/api/inventory/${id}`).then(response => {
  //     this.setState({ product: response.data})
  //   })
  // }

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
    return (
      <div className="getAllDonuts">
        <div className="inventory">
          {mappedDonutInventory.map(product => {
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
