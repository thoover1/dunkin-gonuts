import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Donuts from "./Donuts";
import Drinks from "./Drinks";
<<<<<<< HEAD
import Product from "./Product";
import Sandwiches from "./Sandwiches";
import Cards from "./Cards";
import "./Buy.scss";
import axios from "axios";
import loaderGIF from "../../../assets/loader.gif";
// import { ConfigurationServicePlaceholders } from "aws-sdk/lib/config_service_placeholders";

export default class Buy extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      cart: [],
      quantity: null,
      product_id: null
    };
    this.getInventory = this.getInventory.bind(this);
    this.getEntireCart = this.getEntireCart.bind(this);
    this.iconAddToCart = this.iconAddToCart.bind(this);
    this.inputEditCart = this.inputEditCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getInventory();
    this.getEntireCart();
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
    // const mappedCart = this.state.cart;
    const mappedInventory = this.state.inventory;
    if (!mappedInventory.length) {
      return (
        <div className="spinner-container">
          <img className="spinner" src={loaderGIF} alt="" />
          <br />
          Do-nut Freak Out! Fetching data as we speak! Sit Tight!
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
=======
import Sandwiches from "./Sandwiches";
import Cards from "./Cards";
import donutsGIF from "../../../assets/donuts.gif";
import drinkGIF from "../../../assets/drink.gif";
import sandwichGIF from "../../../assets/sandwich.gif";
import savingsCardGIF from "../../../assets/savings_card.gif";
import "./Buy.scss";

export default class Buy extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <section className="buy-container">
            <div className="donuts-container">
              <Link to="/buy/donuts" className="subnav_links">
                <img src={donutsGIF} alt="" />
                <h3>Shop Donuts</h3>
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
              </Link>
            </div>
            <div className="drinks-container">
              <Link to="/buy/drinks" className="subnav_links">
<<<<<<< HEAD
                <h3>Drinks</h3>
=======
                <img src={drinkGIF} alt="" />
                <h3>Shop Drinks</h3>
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
              </Link>
            </div>
            <div className="sandwiches-container">
              <Link to="/buy/sandwiches" className="subnav_links">
<<<<<<< HEAD
                <h3>Sandwiches</h3>
=======
                <img src={sandwichGIF} alt="" />
                <h3>Shop Sandwiches</h3>
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
              </Link>
            </div>
            <div className="cards-container">
              <Link to="/buy/cards" className="subnav_links">
<<<<<<< HEAD
                <h3>DD Cards</h3>
=======
                <img src={savingsCardGIF} alt="" />
                <h3>Shop DD Cards</h3>
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
              </Link>
            </div>
          </section>
        </div>

        <div className="scrolling-cart">
          <div className="scrolling-cart-column">
<<<<<<< HEAD
            {/* {mappedCart.map(item => {
              return ( */}
            {/* <div> */}
=======
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
            <h4>CART</h4>
            <h6>Total:</h6>
            <h6>Tax:</h6>
            <h6>Sum Total:</h6>
            <Link to="/cart">
<<<<<<< HEAD
              <button>Review Order</button>
            </Link>
            {/* </div>
              );
            })} */}
=======
              <button>Checkout</button>
            </Link>
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
          </div>
        </div>
        <div className="box">
          <Switch>
            <Route path="/buy/donuts" component={Donuts} />
            <Route path="/buy/drinks" component={Drinks} />
            <Route path="/buy/sandwiches" component={Sandwiches} />
            <Route path="/buy/cards" component={Cards} />
<<<<<<< HEAD

=======
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
            <Route
              path="/buy"
              render={() => (
                <div>
<<<<<<< HEAD
                  <div className="inventory">
                    {mappedInventory.map(product => {
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
                  <h1>Buy Dunkin!</h1>
                  <p>
                    WE DO DONUTS...AND OTHER STUFF. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed euismod eu lorem et
                    ultricies. In porta lorem at dui semper porttitor. Nullam
                    quis cursus dui. Cras tincidunt vehicula tellus eu
                    facilisis. Donec nisi turpis, iaculis et arcu a, aliquet
                    ultrices nisl. Nam in pharetra odio, ac blandit metus.
                    Suspendisse potenti. Praesent elementum diam non orci cursus
                    rutrum. Pellentesque condimentum ultrices dignissim. Sed a
                    tempor ligula, vel luctus sapien. Mauris vehicula rutrum
                    massa. Duis condimentum, ex quis ullamcorper rhoncus, erat
                    libero tempor arcu, condimentum facilisis tellus lectus ut
                    nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat
                    ex. Ut justo neque, varius aliquet erat vel, scelerisque
                    convallis lacus. Mauris semper lorem mauris, sed dignissim
                    eros consectetur nec.WE DO DONUTS...AND OTHER STUFF. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                    aliquet ultrices nisl. Nam in pharetra odio, ac blandit
                    metus. Suspendisse potenti. Praesent elementum diam non orci
                    cursus rutrum. Pellentesque condimentum ultrices dignissim.
                    Sed a tempor ligula, vel luctus sapien. Mauris vehicula
                    rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus,
                    erat libero tempor arcu, condimentum facilisis tellus lectus
                    ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu
                    erat ex. Ut justo neque, varius aliquet erat vel,
                    scelerisque convallis lacus. Mauris semper lorem mauris, sed
                    dignissim eros consectetur nec.WE DO DONUTS...AND OTHER
                    STUFF. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed euismod eu lorem et ultricies. In porta lorem at
                    dui semper porttitor. Nullam quis cursus dui. Cras tincidunt
                    vehicula tellus eu facilisis. Donec nisi turpis, iaculis et
                    arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac
                    blandit metus. Suspendisse potenti. Praesent elementum diam
                    non orci cursus rutrum. Pellentesque condimentum ultrices
                    dignissim. Sed a tempor ligula, vel luctus sapien. Mauris
                    vehicula rutrum massa. Duis condimentum, ex quis ullamcorper
                    rhoncus, erat libero tempor arcu, condimentum facilisis
                    tellus lectus ut nunc. Pellentesque vitae faucibus diam.
                    Vestibulum eu erat ex. Ut justo neque, varius aliquet erat
                    vel, scelerisque convallis lacus. Mauris semper lorem
                    mauris, sed dignissim eros consectetur nec.WE DO
                    DONUTS...AND OTHER STUFF. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed euismod eu lorem et
                    ultricies. In porta lorem at dui semper porttitor. Nullam
                    quis cursus dui. Cras tincidunt vehicula tellus eu
                    facilisis. Donec nisi turpis, iaculis et arcu a, aliquet
                    ultrices nisl. Nam in pharetra odio, ac blandit metus.
                    Suspendisse potenti. Praesent elementum diam non orci cursus
                    rutrum. Pellentesque condimentum ultrices dignissim. Sed a
                    tempor ligula, vel luctus sapien. Mauris vehicula rutrum
                    massa. Duis condimentum, ex quis ullamcorper rhoncus, erat
                    libero tempor arcu, condimentum facilisis tellus lectus ut
                    nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat
                    ex. Ut justo neque, varius aliquet erat vel, scelerisque
                    convallis lacus. Mauris semper lorem mauris, sed dignissim
                    eros consectetur nec.WE DO DONUTS...AND OTHER STUFF. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                    aliquet ultrices nisl. Nam in pharetra odio, ac blandit
                    metus. Suspendisse potenti. Praesent elementum diam non orci
                    cursus rutrum. Pellentesque condimentum ultrices dignissim.
                    Sed a tempor ligula, vel luctus sapien. Mauris vehicula
                    rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus,
                    erat libero tempor arcu, condimentum facilisis tellus lectus
                    ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu
                    erat ex. Ut justo neque, varius aliquet erat vel,
                    scelerisque convallis lacus. Mauris semper lorem mauris, sed
                    dignissim eros consectetur nec.WE DO DONUTS...AND OTHER
                    STUFF. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed euismod eu lorem et ultricies. In porta lorem at
                    dui semper porttitor. Nullam quis cursus dui. Cras tincidunt
                    vehicula tellus eu facilisis. Donec nisi turpis, iaculis et
                    arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac
                    blandit metus. Suspendisse potenti. Praesent elementum diam
                    non orci cursus rutrum. Pellentesque condimentum ultrices
                    dignissim. Sed a tempor ligula, vel luctus sapien. Mauris
                    vehicula rutrum massa. Duis condimentum, ex quis ullamcorper
                    rhoncus, erat libero tempor arcu, condimentum facilisis
                    tellus lectus ut nunc. Pellentesque vitae faucibus diam.
                    Vestibulum eu erat ex. Ut justo neque, varius aliquet erat
                    vel, scelerisque convallis lacus. Mauris semper lorem
                    mauris, sed dignissim eros consectetur nec.WE DO
                    DONUTS...AND OTHER STUFF. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed euismod eu lorem et
                    ultricies. In porta lorem at dui semper porttitor. Nullam
                    quis cursus dui. Cras tincidunt vehicula tellus eu
                    facilisis. Donec nisi turpis, iaculis et arcu a, aliquet
                    ultrices nisl. Nam in pharetra odio, ac blandit metus.
                    Suspendisse potenti. Praesent elementum diam non orci cursus
                    rutrum. Pellentesque condimentum ultrices dignissim. Sed a
                    tempor ligula, vel luctus sapien. Mauris vehicula rutrum
                    massa. Duis condimentum, ex quis ullamcorper rhoncus, erat
                    libero tempor arcu, condimentum facilisis tellus lectus ut
                    nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat
                    ex. Ut justo neque, varius aliquet erat vel, scelerisque
                    convallis lacus. Mauris semper lorem mauris, sed dignissim
                    eros consectetur nec.WE DO DONUTS...AND OTHER STUFF. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                    aliquet ultrices nisl. Nam in pharetra odio, ac blandit
                    metus. Suspendisse potenti. Praesent elementum diam non orci
                    cursus rutrum. Pellentesque condimentum ultrices dignissim.
                    Sed a tempor ligula, vel luctus sapien. Mauris vehicula
                    rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus,
                    erat libero tempor arcu, condimentum facilisis tellus lectus
                    ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu
                    erat ex. Ut justo neque, varius aliquet erat vel,
                    scelerisque convallis lacus. Mauris semper lorem mauris, sed
                    dignissim eros consectetur nec.WE DO DONUTS...AND OTHER
                    STUFF. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed euismod eu lorem et ultricies. In porta lorem at
                    dui semper porttitor. Nullam quis cursus dui. Cras tincidunt
                    vehicula tellus eu facilisis. Donec nisi turpis, iaculis et
                    arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac
                    blandit metus. Suspendisse potenti. Praesent elementum diam
                    non orci cursus rutrum. Pellentesque condimentum ultrices
                    dignissim. Sed a tempor ligula, vel luctus sapien. Mauris
                    vehicula rutrum massa. Duis condimentum, ex quis ullamcorper
                    rhoncus, erat libero tempor arcu, condimentum facilisis
                    tellus lectus ut nunc. Pellentesque vitae faucibus diam.
                    Vestibulum eu erat ex. Ut justo neque, varius aliquet erat
                    vel, scelerisque convallis lacus. Mauris semper lorem
                    mauris, sed dignissim eros consectetur nec.WE DO
                    DONUTS...AND OTHER STUFF. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed euismod eu lorem et
                    ultricies. In porta lorem at dui semper porttitor. Nullam
                    quis cursus dui. Cras tincidunt vehicula tellus eu
                    facilisis. Donec nisi turpis, iaculis et arcu a, aliquet
                    ultrices nisl. Nam in pharetra odio, ac blandit metus.
                    Suspendisse potenti. Praesent elementum diam non orci cursus
                    rutrum. Pellentesque condimentum ultrices dignissim. Sed a
                    tempor ligula, vel luctus sapien. Mauris vehicula rutrum
                    massa. Duis condimentum, ex quis ullamcorper rhoncus, erat
                    libero tempor arcu, condimentum facilisis tellus lectus ut
                    nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat
                    ex. Ut justo neque, varius aliquet erat vel, scelerisque
                    convallis lacus. Mauris semper lorem mauris, sed dignissim
                    eros consectetur nec.WE DO DONUTS...AND OTHER STUFF. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                    aliquet ultrices nisl. Nam in pharetra odio, ac blandit
                    metus. Suspendisse potenti. Praesent elementum diam non orci
                    cursus rutrum. Pellentesque condimentum ultrices dignissim.
                    Sed a tempor ligula, vel luctus sapien. Mauris vehicula
                    rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus,
                    erat libero tempor arcu, condimentum facilisis tellus lectus
                    ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu
                    erat ex. Ut justo neque, varius aliquet erat vel,
                    scelerisque convallis lacus. Mauris semper lorem mauris, sed
                    dignissim eros consectetur nec.WE DO DONUTS...AND OTHER
                    STUFF. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed euismod eu lorem et ultricies. In porta lorem at
                    dui semper porttitor. Nullam quis cursus dui. Cras tincidunt
                    vehicula tellus eu facilisis. Donec nisi turpis, iaculis et
                    arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac
                    blandit metus. Suspendisse potenti. Praesent elementum diam
                    non orci cursus rutrum. Pellentesque condimentum ultrices
                    dignissim. Sed a tempor ligula, vel luctus sapien. Mauris
                    vehicula rutrum massa. Duis condimentum, ex quis ullamcorper
                    rhoncus, erat libero tempor arcu, condimentum facilisis
                    tellus lectus ut nunc. Pellentesque vitae faucibus diam.
                    Vestibulum eu erat ex. Ut justo neque, varius aliquet erat
                    vel, scelerisque convallis lacus. Mauris semper lorem
                    mauris, sed dignissim eros consectetur nec.WE DO
                    DONUTS...AND OTHER STUFF. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed euismod eu lorem et
                    ultricies. In porta lorem at dui semper porttitor. Nullam
                    quis cursus dui. Cras tincidunt vehicula tellus eu
                    facilisis. Donec nisi turpis, iaculis et arcu a, aliquet
                    ultrices nisl. Nam in pharetra odio, ac blandit metus.
                    Suspendisse potenti. Praesent elementum diam non orci cursus
                    rutrum. Pellentesque condimentum ultrices dignissim. Sed a
                    tempor ligula, vel luctus sapien. Mauris vehicula rutrum
                    massa. Duis condimentum, ex quis ullamcorper rhoncus, erat
                    libero tempor arcu, condimentum facilisis tellus lectus ut
                    nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat
                    ex. Ut justo neque, varius aliquet erat vel, scelerisque
                    convallis lacus. Mauris semper lorem mauris, sed dignissim
                    eros consectetur nec.WE DO DONUTS...AND OTHER STUFF. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                    aliquet ultrices nisl. Nam in pharetra odio, ac blandit
                    metus. Suspendisse potenti. Praesent elementum diam non orci
                    cursus rutrum. Pellentesque condimentum ultrices dignissim.
                    Sed a tempor ligula, vel luctus sapien. Mauris vehicula
                    rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus,
                    erat libero tempor arcu, condimentum facilisis tellus lectus
                    ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu
                    erat ex. Ut justo neque, varius aliquet erat vel,
                    scelerisque convallis lacus. Mauris semper lorem mauris, sed
                    dignissim eros consectetur nec.WE DO DONUTS...AND OTHER
                    STUFF. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed euismod eu lorem et ultricies. In porta lorem at
                    dui semper porttitor. Nullam quis cursus dui. Cras tincidunt
                    vehicula tellus eu facilisis. Donec nisi turpis, iaculis et
                    arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac
                    blandit metus. Suspendisse potenti. Praesent elementum diam
                    non orci cursus rutrum. Pellentesque condimentum ultrices
                    dignissim. Sed a tempor ligula, vel luctus sapien. Mauris
                    vehicula rutrum massa. Duis condimentum, ex quis ullamcorper
                    rhoncus, erat libero tempor arcu, condimentum facilisis
                    tellus lectus ut nunc. Pellentesque vitae faucibus diam.
                    Vestibulum eu erat ex. Ut justo neque, varius aliquet erat
                    vel, scelerisque convallis lacus. Mauris semper lorem
                    mauris, sed dignissim eros consectetur nec.WE DO
                    DONUTS...AND OTHER STUFF. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed euismod eu lorem et
                    ultricies. In porta lorem at dui semper porttitor. Nullam
                    quis cursus dui. Cras tincidunt vehicula tellus eu
                    facilisis. Donec nisi turpis, iaculis et arcu a, aliquet
                    ultrices nisl. Nam in pharetra odio, ac blandit metus.
                    Suspendisse potenti. Praesent elementum diam non orci cursus
                    rutrum. Pellentesque condimentum ultrices dignissim. Sed a
                    tempor ligula, vel luctus sapien. Mauris vehicula rutrum
                    massa. Duis condimentum, ex quis ullamcorper rhoncus, erat
                    libero tempor arcu, condimentum facilisis tellus lectus ut
                    nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat
                    ex. Ut justo neque, varius aliquet erat vel, scelerisque
                    convallis lacus. Mauris semper lorem mauris, sed dignissim
                    eros consectetur nec.WE DO DONUTS...AND OTHER STUFF. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                    aliquet ultrices nisl. Nam in pharetra odio, ac blandit
                    metus. Suspendisse potenti. Praesent elementum diam non orci
                    cursus rutrum. Pellentesque condimentum ultrices dignissim.
                    Sed a tempor ligula, vel luctus sapien. Mauris vehicula
                    rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus,
                    erat libero tempor arcu, condimentum facilisis tellus lectus
                    ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu
                    erat ex. Ut justo neque, varius aliquet erat vel,
                    scelerisque convallis lacus. Mauris semper lorem mauris, sed
                    dignissim eros consectetur nec.WE DO DONUTS...AND OTHER
                    STUFF. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed euismod eu lorem et ultricies. In porta lorem at
                    dui semper porttitor. Nullam quis cursus dui. Cras tincidunt
                    vehicula tellus eu facilisis. Donec nisi turpis, iaculis et
                    arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac
                    blandit metus. Suspendisse potenti. Praesent elementum diam
                    non orci cursus rutrum. Pellentesque condimentum ultrices
                    dignissim. Sed a tempor ligula, vel luctus sapien. Mauris
                    vehicula rutrum massa. Duis condimentum, ex quis ullamcorper
                    rhoncus, erat libero tempor arcu, condimentum facilisis
                    tellus lectus ut nunc. Pellentesque vitae faucibus diam.
                    Vestibulum eu erat ex. Ut justo neque, varius aliquet erat
                    vel, scelerisque convallis lacus. Mauris semper lorem
                    mauris, sed dignissim eros consectetur nec.WE DO
                    DONUTS...AND OTHER STUFF. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed euismod eu lorem et
                    ultricies. In porta lorem at dui semper porttitor. Nullam
                    quis cursus dui. Cras tincidunt vehicula tellus eu
                    facilisis. Donec nisi turpis, iaculis et arcu a, aliquet
                    ultrices nisl. Nam in pharetra odio, ac blandit metus.
                    Suspendisse potenti. Praesent elementum diam non orci cursus
                    rutrum. Pellentesque condimentum ultrices dignissim. Sed a
                    tempor ligula, vel luctus sapien. Mauris vehicula rutrum
                    massa. Duis condimentum, ex quis ullamcorper rhoncus, erat
                    libero tempor arcu, condimentum facilisis tellus lectus ut
                    nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat
                    ex. Ut justo neque, varius aliquet erat vel, scelerisque
                    convallis lacus. Mauris semper lorem mauris, sed dignissim
                    eros consectetur nec.WE DO DONUTS...AND OTHER STUFF. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod eu lorem et ultricies. In porta lorem at dui semper
                    porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
                    tellus eu facilisis. Donec nisi turpis, iaculis et arcu a,
                    aliquet ultrices nisl. Nam in pharetra odio, ac blandit
                    metus. Suspendisse potenti. Praesent elementum diam non orci
                    cursus rutrum. Pellentesque condimentum ultrices dignissim.
                    Sed a tempor ligula, vel luctus sapien. Mauris vehicula
                    rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus,
                    erat libero tempor arcu, condimentum facilisis tellus lectus
                    ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu
                    erat ex. Ut justo neque, varius aliquet erat vel,
                    scelerisque convallis lacus. Mauris semper lorem mauris, sed
                    dignissim eros consectetur nec.WE DO DONUTS...AND OTHER
                    STUFF. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed euismod eu lorem et ultricies. In porta lorem at
                    dui semper porttitor. Nullam quis cursus dui. Cras tincidunt
                    vehicula tellus eu facilisis. Donec nisi turpis, iaculis et
                    arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac
                    blandit metus. Suspendisse potenti. Praesent elementum diam
                    non orci cursus rutrum. Pellentesque condimentum ultrices
                    dignissim. Sed a tempor ligula, vel luctus sapien. Mauris
                    vehicula rutrum massa. Duis condimentum, ex quis ullamcorper
                    rhoncus, erat libero tempor arcu, condimentum facilisis
                    tellus lectus ut nunc. Pellentesque vitae faucibus diam.
                    Vestibulum eu erat ex. Ut justo neque, varius aliquet erat
                    vel, scelerisque convallis lacus. Mauris semper lorem
                    mauris, sed dignissim eros consectetur nec.WE DO
                    DONUTS...AND OTHER STUFF. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed euismod eu lorem et
                    ultricies. In porta lorem at dui semper porttitor. Nullam
                    quis cursus dui. Cras tincidunt vehicula tellus eu
                    facilisis. Donec nisi turpis, iaculis et arcu a, aliquet
                    ultrices nisl. Nam in pharetra odio, ac blandit metus.
                    Suspendisse potenti. Praesent elementum diam non orci cursus
                    rutrum. Pellentesque condimentum ultrices dignissim. Sed a
                    tempor ligula, vel luctus sapien. Mauris vehicula rutrum
                    massa. Duis condimentum, ex quis ullamcorper rhoncus, erat
                    libero tempor arcu, condimentum facilisis tellus lectus ut
                    nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat
                    ex. Ut justo neque, varius aliquet erat vel, scelerisque
                    convallis lacus. Mauris semper lorem mauris, sed dignissim
                    eros consectetur nec.
                  </p>
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
