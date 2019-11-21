import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../reducer";
import "./Profile.scss";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <h1>Successfully logged in!</h1>
        </div>
        <div>
          <h3>Go Nuts!</h3>
        </div>
        <div>
          <Link to="/auth/login">
            <button
              onClick={() => {
                axios.delete("/auth/logout").then(() => {
                  this.props.setUser(null);
                });
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

const mapReduxDispatchToProps = {
  setUser
};

const invokedConnect = connect(mapReduxStateToProps, mapReduxDispatchToProps);

export default invokedConnect(withRouter(Profile));
