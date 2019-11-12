import React, { Component } from "react";
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
