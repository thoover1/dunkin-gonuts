import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Header/Home";
import Location from "./Components/Header/Location";
import Buy from "./Components/Header/Buy/Buy";
import Cart from "./Components/Header/Cart";
import Profile from "./Components/Header/Profile";
import AuthComponent from "./Components/AuthComponent";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Location} path="/location" />
    <Route component={Buy} path="/buy" />
    <Route component={Cart} path="/cart" />
    <Route component={Profile} path="/profile" />
    <Route component={AuthComponent} path="/auth/login" />
  </Switch>
);
