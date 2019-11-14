import React, { Component } from "react";
<<<<<<< HEAD
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../reducer";

class Profile extends Component {
  render() {
    const { lastName, firstName } = this.props;
    return (
      <div>
        <h1>This is your Profile!</h1>
        <h3>
          {lastName}, {firstName}
        </h3>
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
=======
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
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
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
