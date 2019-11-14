import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import routes from "./routes";
<<<<<<< HEAD
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
      sideDrawer = <SideDrawer toggler={this.toggler} />;
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
=======

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
      'hi'
    </div>
  );
}

export default App;
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
