/** @jsxImportSource @emotion/core */

import React, { useState } from "react";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Logout from "../../Pages/Logout/Logout";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import authHeader from "../../Services/auth-header";
console.log(authHeader());

const Main = () => {
  console.log(authHeader().then());
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          {authHeader() ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          {authHeader() ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route exact path="/register">
          {authHeader() ? <Redirect to="/dashboard" /> : <Register />}
        </Route>
        <Route exact path="/logout">
          {authHeader() ? <Logout /> : <Redirect to="/dashboard" />}
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
