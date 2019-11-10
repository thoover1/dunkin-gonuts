import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.scss";

export default class SideDrawer extends React.Component {
  render() {
    return (
      <div className="sideDrawer-link-wrap">
        <Link className="sideDrawer-links" to="/">
          HOME
        </Link>
        <Link className="sideDrawer-links" to="/location">
          LOCATIONS
        </Link>
        <Link className="sideDrawer-links" to="/buy">
          MENU
        </Link>
        <Link className="sideDrawer-links" to="/cart">
          My Cart
        </Link>
        <Link className="sideDrawer-links" to="/auth/login">
          My Profile
        </Link>
      </div>
    );
  }
}
