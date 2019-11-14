import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Header/Home";
import Location from "./Components/Header/Location";
import Buy from "./Components/Header/Buy/Buy";
import Cart from "./Components/Header/Cart";
import Profile from "./Components/Header/Profile";
<<<<<<< HEAD
import AuthComponent from "./Components/AuthComponent";
=======
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Location} path="/location" />
    <Route component={Buy} path="/buy" />
    <Route component={Cart} path="/cart" />
    <Route component={Profile} path="/profile" />
<<<<<<< HEAD
    <Route component={AuthComponent} path="/auth/login" />
=======
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
  </Switch>
);
