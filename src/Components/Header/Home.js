import React, { Component } from "react";
import { Link } from "react-router-dom";
import donutVideo from "./donutVideo.mp4";
import coffeeVideo from "./coffeeVideo.mp4";
import locationIMG from "../../assets/locationIMG.jpg";
import mobileAppPNG from "../../assets/mobileAppPNG.png";
import mobileApplePNG from "../../assets/mobileApplePNG.png";
import mobileGooglePNG from "../../assets/mobileGooglePNG.png";
import sandwichJPEG from "../../assets/sandwichJPEG.jpg";
import giftCardJPEG from "../../assets/giftCardJPEG.jpg";
import pumpkinGIF from "../../assets/pumpkinGIF.gif";
import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* <div className="overlay"></div> */}
        <div className="home-containers">
          <div className="menu-section">
            <video className="video" autoPlay loop muted>
              <source src={donutVideo} type="video/mp4" />
            </video>
            <Link to="/buy">
              <button className="menu-btn">Discover Dunkin'</button>
            </Link>
          </div>
          <div className="location-section">
            <img src={locationIMG} alt="" />
            <Link to="/location">
              <button className="location-btn">Find Locations Near Me</button>
            </Link>
          </div>
          <div className="coffee-section">
            <video className="video" autoPlay loop muted>
              <source src={coffeeVideo} type="video/mp4" />
            </video>
            <Link to="/buy/drinks">
              <button className="coffee-btn">Shop Drinks</button>
            </Link>
          </div>
          <div className="sandwich-section">
            <img src={sandwichJPEG} alt="" />
            <Link to="/buy/sandwiches">
              <button className="sandwich-btn">Shop Real Food</button>
            </Link>
          </div>
          <div className="giftCard-section">
            <img src={giftCardJPEG} alt="" />
            <Link to="/buy/cards">
              <button className="giftCard-btn">The Perfect Gift</button>
            </Link>
          </div>
          <div className="pumpkin-section">
            <img src={pumpkinGIF} alt="" />
          </div>
          <div className="mobileApp-section">
            <img src={mobileAppPNG} alt="" />
            <a
              href="https://apps.apple.com/us/app/new-dunkin-donuts/id1056813463"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mobileApple-btn">
                <img src={mobileApplePNG} alt="" />
              </button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dunkinbrands.otgo&hl=en.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mobileGoogle-btn">
                <img src={mobileGooglePNG} alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
