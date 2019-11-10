import React from "react";
import { Link } from "react-router-dom";
import Header_gif from "../../assets/header.gif";
import "./Header.css";
// import SideDrawer from "../SideDrawer";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-container">
        <nav className="nav">
          <Link to="/">
            <img className="header-gif" src={Header_gif} alt="" />
          </Link>
          <div className="link-wrap">
            <Link className="links" to="/">
              HOME
            </Link>
            <Link className="links" to="/location">
              LOCATIONS
            </Link>
            <Link className="links" to="/buy">
              MENU
              <i className="fas fa-chevron-down fa-xs"></i>
            </Link>
            <Link className="links" to="/cart">
              <i className="fas fa-shopping-cart" samesite="none"></i>
            </Link>
            <Link className="links" to="/auth/login">
              <i className="fas fa-user-circle" samesite="none"></i>
            </Link>
          </div>
          <button className="hamburger-button" onClick={this.props.toggler}>
            <i class="fas fa-bars"></i>
          </button>
        </nav>
      </div>
    );
  }
}
