import React from "react";
import { Link } from "react-router-dom";
import Header_gif from "../../assets/header.gif";
import "./Header.css";

export default class Header extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
  }
=======
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
  render() {
    return (
      <div className="header-container">
        <nav className="nav">
          <Link to="/">
<<<<<<< HEAD
            <img className="header-gif" src={Header_gif} alt="" />
          </Link>
          <div className="link-wrap">
=======
            <img src={Header_gif} alt="" />
          </Link>
          <div className="link_wrap">
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
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
<<<<<<< HEAD
            <Link className="links" to="/auth/login">
              <i className="fas fa-user-circle" samesite="none"></i>
            </Link>
          </div>
          <button className="hamburger-button" onClick={this.props.toggler}>
            <i class="fas fa-bars"></i>
          </button>
=======
            <Link className="links" to="/profile">
              <i className="fas fa-user-circle" samesite="none"></i>
            </Link>
          </div>
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
        </nav>
      </div>
    );
  }
}
