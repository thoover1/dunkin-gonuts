import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Donuts from "./Donuts";
import Drinks from "./Drinks";
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
              </Link>
            </div>
            <div className="drinks-container">
              <Link to="/buy/drinks" className="subnav_links">
                <img src={drinkGIF} alt="" />
                <h3>Shop Drinks</h3>
              </Link>
            </div>
            <div className="sandwiches-container">
              <Link to="/buy/sandwiches" className="subnav_links">
                <img src={sandwichGIF} alt="" />
                <h3>Shop Sandwiches</h3>
              </Link>
            </div>
            <div className="cards-container">
              <Link to="/buy/cards" className="subnav_links">
                <img src={savingsCardGIF} alt="" />
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
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
