import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";
import SideDrawer from "./Components/SideDrawer";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      toggle: false
    };
    this.toggler = this.toggler.bind(this);
  }

  toggler() {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  }

  render() {
    let sideDrawer;

    if (this.state.toggle) {
      sideDrawer = <SideDrawer />;
    }
    return (
      <div className="App">
        <Header toggler={this.toggler} />
        {sideDrawer}
        {routes}
        <Footer />
      </div>
    );
  }
}
