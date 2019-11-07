import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Donuts from "./Donuts";
import Drinks from "./Drinks";
import Sandwiches from "./Sandwiches";
import Cards from "./Cards";
import "./Buy.scss";
import axios from "axios";

export default class Buy extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios
      .get("/api/inventory")
      .then(response => {
        this.setState({
          inventory: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const mappedInventory = this.state.inventory;
    return (
      <div>
        <div className="subnav">
          <section className="buy-container">
            <div className="inventory-container">
              <Link to="/buy" className="subnav_links">
                <h3>Shop All Products</h3>
              </Link>
            </div>
            <div className="donuts-container">
              <Link to="/buy/donuts" className="subnav_links">
                <h3>Shop Donuts</h3>
              </Link>
            </div>
            <div className="drinks-container">
              <Link to="/buy/drinks" className="subnav_links">
                <h3>Shop Drinks</h3>
              </Link>
            </div>
            <div className="sandwiches-container">
              <Link to="/buy/sandwiches" className="subnav_links">
                <h3>Shop Sandwiches</h3>
              </Link>
            </div>
            <div className="cards-container">
              <Link to="/buy/cards" className="subnav_links">
                <h3>Shop DD Cards</h3>
              </Link>
            </div>
          </section>
        </div>

        <div className="scrolling-cart">
          <div className="scrolling-cart-column">
            <h4>CART</h4>
            <h6>Total:</h6>
            <h6>Tax:</h6>
            <h6>Sum Total:</h6>
            <Link to="/cart">
              <button>Checkout</button>
            </Link>
          </div>
        </div>
        <div className="box">
          <Switch>
            <Route path="/buy/donuts" component={Donuts} />
            <Route path="/buy/drinks" component={Drinks} />
            <Route path="/buy/sandwiches" component={Sandwiches} />
            <Route path="/buy/cards" component={Cards} />
            <Route
              path="/buy"
              render={() => (
                <div>
                  <div className="inventory">
                    {mappedInventory.map(product => {
                      return (
                        <div key={product.product_id}>
                          <ul className="product" id={product.product_id}>
                            <div className="product-list">
                              <img src={product.image} />
                              <div className="product-info">
                                <a>{product.product_name}</a>
                                <a>${product.price}</a>
                                {/* insert font awesome icons (plus and minus) here as well as responsive counter 
                              that represents how much in cart*/}
                              </div>
                            </div>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
