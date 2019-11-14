import React, { Component } from "react";
<<<<<<< HEAD
// import { Link } from "react-router-dom";
=======
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
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
<<<<<<< HEAD
      phone_number: "",
=======
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
      register: true
    };
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register() {
<<<<<<< HEAD
    const { email, password, username, phone_number } = this.state;
    const registeredUser = await axios.post("/auth/register", {
      email,
      username,
      password,
      phone_number
=======
    const { email, password, username } = this.state;
    const registeredUser = await axios.post("/auth/register", {
      email,
      username,
      password
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
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
<<<<<<< HEAD
    const { email, username, password, phone_number, register } = this.state;
=======
    const { email, username, password, register } = this.state;
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
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
<<<<<<< HEAD
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
=======
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
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

<<<<<<< HEAD
const enhancedComponent = connect(
  mapReduxStateToProps,
  mapDispatchToProps
);

export default enhancedComponent(AuthComponent);
=======
export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(AuthComponent);
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
