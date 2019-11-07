import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      register: true
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register() {
    const { email, password, username } = this.state;
    const registeredUser = await axios.post("/auth/register", {
      email,
      username,
      password
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
    const { email, username, password, register } = this.state;
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
          <Link to="/profile">
            <button>{register ? "Register" : "Login"}</button>
          </Link>
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

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(AuthComponent);
