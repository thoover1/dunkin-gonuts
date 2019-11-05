import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser } from "../../reducer";
import AuthComponent from "../AuthComponent";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>This is your Profile!</h1>
        <h3>{this.props.user && this.props.user.username}</h3>
        <button
          onClick={() => {
            axios.delete("/auth/logout").then(() => {
              this.props.setUser(null);
            });
          }}
        >
          Logout
        </button>
        <div>
          <AuthComponent />
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

const invokedConnect = connect(
  mapReduxStateToProps,
  mapReduxDispatchToProps
);

export default invokedConnect(withRouter(Profile));
