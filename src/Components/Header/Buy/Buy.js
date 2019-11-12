import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Donuts from "./Donuts";
import Drinks from "./Drinks";
import Sandwiches from "./Sandwiches";
import Cards from "./Cards";
import "./Buy.scss";
import axios from "axios";
import loaderGIF from "../../../assets/loader.gif";

export default class Buy extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
      // ,
      // cart: []
    };
    this.getInventory = this.getInventory.bind(this);
    this.getEntireCart = this.getEntireCart.bind(this);
  }

  componentDidMount() {
    this.getInventory();
    this.getEntireCart();
  }

  // iconAddToCart = () => {};

  // iconRemoveFromCart = () => {};

  // inputEditCart = () => {};

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

  getEntireCart() {
    axios
      .get("/api/cart")
      .then(response => {
        this.setState({
          cart: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const mappedCart = this.state.cart;
    const mappedInventory = this.state.inventory;
    if (!mappedInventory.length) {
      return (
        <div className="spinner-container">
          <img className="spinner" src={loaderGIF} alt="" />
          <br />
          Do-nut Worry! Fetching data as we speak! Sit Tight!
        </div>
      );
    }
    return (
      <div className="main-buy-container">
        <div className="subnav">
          <section className="buy-container">
            <div className="inventory-container">
              <Link className="link-styler" to="/buy" className="subnav_links">
                <h3>All Products</h3>
              </Link>
            </div>
            <div className="donuts-container">
              <Link to="/buy/donuts" className="subnav_links">
                <h3>Donuts</h3>
              </Link>
            </div>
            <div className="drinks-container">
              <Link to="/buy/drinks" className="subnav_links">
                <h3>Drinks</h3>
              </Link>
            </div>
            <div className="sandwiches-container">
              <Link to="/buy/sandwiches" className="subnav_links">
                <h3>Sandwiches</h3>
              </Link>
            </div>
            <div className="cards-container">
              <Link to="/buy/cards" className="subnav_links">
                <h3>DD Cards</h3>
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
              <button>Review Order</button>
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
                              <img src={product.image} alt="" />
                              <div className="product-info">
                                <div className="product-info-a">
                                  <div>{product.product_name}</div>
                                  <div>${product.price}</div>
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
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
