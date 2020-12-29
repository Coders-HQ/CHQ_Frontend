/** @jsxImportSource @emotion/core */

import React from "react";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default Main;
