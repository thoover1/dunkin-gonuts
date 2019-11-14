import React, { Component } from "react";
<<<<<<< HEAD
import Product from "./Product";
import axios from "axios";
import "./Donuts.scss";
import loaderGIF from "../../../assets/loader.gif";

export default class Donuts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donutInventory: [],
      quantity: null,
      product_id: null
    };
    this.getDonutInventory = this.getDonutInventory.bind(this);
    this.iconAddToCart = this.iconAddToCart.bind(this);
    this.inputEditCart = this.inputEditCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
              <Product
                product={product}
                iconAddToCart={this.iconAddToCart}
                inputEditCart={this.inputEditCart}
              />
            );
          })}
        </div>
=======

export default class Donuts extends Component {
  render() {
    return (
      <div>
        <li>Donut1</li>
        <li>Donut2</li>
        <li>Donut3</li>
        <li>Donut4</li>
        <li>Donut5</li>
        <li>Donut6</li>
        <li>Donut7</li>
        <li>Donut8</li>
        <li>Donut9</li>
        <li>Donut10</li>
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
      </div>
    );
  }
}
