import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.scss";

export default class SideDrawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sideDrawer-link-wrap">
        <Link className="sideDrawer-links" to="/" onClick={this.props.toggler}>
          HOME
        </Link>
        <Link
          className="sideDrawer-links"
          to="/location"
          onClick={this.props.toggler}
        >
          LOCATIONS
        </Link>
        <Link
          className="sideDrawer-links"
          to="/buy"
          onClick={this.props.toggler}
        >
          MENU
        </Link>
        <Link
          className="sideDrawer-links"
          to="/cart"
          onClick={this.props.toggler}
        >
          My Cart
        </Link>
        <Link
          className="sideDrawer-links"
          to="/auth/login"
          onClick={this.props.toggler}
        >
          My Profile
        </Link>
      </div>
    );
  }
}
