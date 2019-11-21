import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../reducer";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./AuthComponent.scss";

class AuthComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      phone_number: "",
      register: true
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register() {
    const { email, password, username, phone_number } = this.state;
    const registeredUser = await axios.post("/auth/register", {
      email,
      username,
      password,
      phone_number
    });
    this.props.setUser(registeredUser.data);
  }

  async login() {
    const { email, password } = this.state;
    const loggedInUser = await axios.post("/auth/login", {
      email,
      password
    });
    this.props.setUser(loggedInUser.data);
  }

  render() {
    const { email, username, password, phone_number, register } = this.state;
    return this.props.user ? (
      <Redirect to="/profile" />
    ) : (
      <div className="auth-container">
        <h1>You must login before accessing the menu or your cart</h1>
        <div className="sabertooth">
          <form
            onSubmit={e => {
              e.preventDefault();
              if (register) {
                this.register();
              } else {
                this.login();
              }
            }}
          >
            {/* shortcircuit to use not have username when logging in to already created account */}

            {register && (
              <div className="input-container">
                {/* <label>username</label> */}
                <input
                  value={username}
                  placeholder="Username"
                  onChange={e =>
                    this.setState({
                      username: e.target.value
                    })
                  }
                />
              </div>
            )}
            <div className="input-container">
              {/* <label>email</label> */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e =>
                  this.setState({
                    email: e.target.value
                  })
                }
              />
            </div>
            <div className="input-container">
              {/* <label>password</label> */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e =>
                  this.setState({
                    password: e.target.value
                  })
                }
              />
            </div>
            {register && (
              <div className="input-container">
                {/* <label>Phone Number</label> */}
                <input
                  type="phone-number"
                  placeholder="Phone Number"
                  value={phone_number}
                  onChange={e =>
                    this.setState({
                      phone_number: e.target.value
                    })
                  }
                />
              </div>
            )}
            <div className="hmmmm">
              <button className="go-to-but">
                {register ? "Register" : "Login"}
              </button>
            </div>
          </form>
          <div className="maximum-effort">
            {!register && (
              <button
                className="go-to-but"
                onClick={() =>
                  this.setState({
                    register: true
                  })
                }
              >
                Go To Register
              </button>
            )}
            {register && (
              <button
                className="go-to-but"
                onClick={() =>
                  this.setState({
                    register: false
                  })
                }
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

const mapDispatchToProps = {
  setUser
};

const enhancedComponent = connect(mapReduxStateToProps, mapDispatchToProps);

export default enhancedComponent(AuthComponent);
