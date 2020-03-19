import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";
import "./Cards.scss";
import loaderGIF from "../../../assets/loader.gif";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardInventory: [],
      quantity: null,
      product_id: null
    };
    this.getCardInventory = this.getCardInventory.bind(this);
    this.iconAddToCart = this.iconAddToCart.bind(this);
    this.inputEditCart = this.inputEditCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getCardInventory();
  }

  getCardInventory() {
    axios
      .get("/api/inventory/cards")
      .then(response => {
        this.setState({
          cardInventory: response.data
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
    const mappedCardInventory = this.state.cardInventory;
    if (this.props.user === null) {
      return <Redirect to="/auth/login" />;
    } else if (!mappedCardInventory.length) {
      return (
        <div className="spinner-container">
          <img className="spinner" src={loaderGIF} alt="" />
        </div>
      );
    }
    return (
      <div className="getAllCards">
        <div className="inventory">
          {mappedCardInventory.map(product => {
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

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Cards);
