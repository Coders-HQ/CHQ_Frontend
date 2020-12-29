/** @jsxImportSource @emotion/core */

import React from "react";

import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
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
