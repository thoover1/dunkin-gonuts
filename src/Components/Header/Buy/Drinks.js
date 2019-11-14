import React, { Component } from "react";
<<<<<<< HEAD
import Product from "./Product";
import axios from "axios";
import "./Drinks.scss";
import loaderGIF from "../../../assets/loader.gif";

export default class Drinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinkInventory: [],
      quantity: null,
      product_id: null
    };
    this.getDrinkInventory = this.getDrinkInventory.bind(this);
    this.iconAddToCart = this.iconAddToCart.bind(this);
    this.inputEditCart = this.inputEditCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
=======

export default class Donuts extends Component {
  render() {
    return (
      <div>
        <li>Drink1</li>
        <li>Drink2</li>
        <li>Drink3</li>
        <li>Drink4</li>
        <li>Drink5</li>
        <li>Drink6</li>
        <li>Drink7</li>
        <li>Drink8</li>
        <li>Drick9</li>
        <li>Drick10</li>
      </div>
    );
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
  }
}
