import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";
import "./Sandwiches.scss";
import loaderGIF from "../../../assets/loader.gif";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Sandwiches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sandwichInventory: [],
      quantity: null,
      product_id: null
    };
    this.getSandwichInventory = this.getSandwichInventory.bind(this);
    this.iconAddToCart = this.iconAddToCart.bind(this);
    this.inputEditCart = this.inputEditCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  iconAddToCart(product_id) {
    axios
      .post("/api/button_add_to_cart", { product_id })
      .then(response => {
        this.setState({
          cart: response.data
        });
      })
      .catch(err => console.log(err));
  }

  // i believe this will be a .put(UPDATE!!!! WASSSSSUP!!!!)
  // iconRemoveFromCart = () => {};

  inputEditCart(quantity, product_id) {
    axios
      .post("/api/input_add_to_cart", { quantity, product_id })
      .then(response => {
        this.setState({
          cart: response.data
        });
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.inputEditCart(this.state.quantity, this.state.product_id);
  }

  render() {
    const mappedSandwichInventory = this.state.sandwichInventory;
    if (this.props.user === null) {
      return <Redirect to="/auth/login" />;
    } else if (!mappedSandwichInventory.length) {
      return (
        <div className="spinner-container">
          <img className="spinner" src={loaderGIF} alt="" />
        </div>
      );
    } else {
      return (
        <div className="getAllSandwiches">
          <div className="inventory">
            {mappedSandwichInventory.map(product => {
              return (
                <Product
                  product={product}
                  iconAddToCart={this.iconAddToCart}
                  inputEditCart={this.inputEditCart}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Sandwiches);
