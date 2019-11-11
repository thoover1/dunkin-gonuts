import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../reducer";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
              <label>username</label>
              <input
                value={username}
                onChange={e =>
                  this.setState({
                    username: e.target.value
                  })
                }
              />
            </div>
          )}
          <div className="input-container">
            <label>email</label>
            <input
              type="email"
              value={email}
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
            />
          </div>
          <div className="input-container">
            <label>password</label>
            <input
              type="password"
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
              <label>Phone Number</label>
              <input
                type="phone-number"
                value={phone_number}
                onChange={e =>
                  this.setState({
                    phone_number: e.target.value
                  })
                }
              />
            </div>
          )}
          <button>{register ? "Register" : "Login"}</button>
        </form>
        {!register && (
          <button
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
            onClick={() =>
              this.setState({
                register: false
              })
            }
          >
            Go To Login
          </button>
        )}
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

const enhancedComponent = connect(
  mapReduxStateToProps,
  mapDispatchToProps
);

export default enhancedComponent(AuthComponent);
