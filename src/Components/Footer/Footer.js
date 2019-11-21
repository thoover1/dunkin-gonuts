import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="sponser-left">
          <h3>OUR SPONSOR</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/432px-Dallas_Cowboys.svg.png"
            alt=""
          />
        </div>
        <div className="follow-us">
          <h3>FOLLOW US</h3>
          <div className="media-icons">
            <div className="media-icons-a">
              <a
                href="https://twitter.com/dunkindonuts?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/DunkinUS/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.pinterest.com/DunkinDonuts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-pinterest-square"></i>
              </a>
              <a
                href="https://www.instagram.com/dunkin/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/user/dunkindonuts#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="enter-form">
          <h3>ENTER TO WIN BIG!!!!!</h3>
          <form>
            <input name="enter_phone" placeholder="Phone Number Here"></input>
            <input type="submit" value="ENTER" />
          </form>
        </div>
        <div className="sponser-right">
          <h3>OUR SPONSOR</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/432px-Dallas_Cowboys.svg.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}
