/** @jsxImportSource @emotion/core */

import React, { useState, useEffect } from "react";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Logout from "../../Pages/Logout/Logout";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import NotFound from "../../Pages/NotFound/NotFound";
import Loading from "../GlobalComponents/Loading";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { authHeader } from "../../Services/auth-header";
import history from "../../history";

const Main = ({ props }) => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await authHeader();
      userHasAuthenticated(true);
      setLoading(false);
      console.log("User is Authenticated");
      console.log(isAuthenticated);
    } catch (e) {
      userHasAuthenticated(false);
      setLoading(false);
      console.log("User not Authenticated");
      console.log(isAuthenticated);
    }
  }
  return (
    <Router history={history}>
      <Switch>
        <Route path="/u">
          {isLoading ? (
            <Loading loading={isLoading} />
          ) : isAuthenticated ? (
            <Dashboard />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>

        <Route exact path="/login">
          {isLoading ? (
            <Loading loading={isLoading} />
          ) : isAuthenticated ? (
            <Redirect to="/u" />
          ) : (
            <Login />
          )}
        </Route>
        <Route exact path="/register">
          {isLoading ? (
            <Loading loading={isLoading} />
          ) : isAuthenticated ? (
            <Redirect to="/u" />
          ) : (
            <Register />
          )}
        </Route>
        <Route exact path="/logout">
          {isLoading ? (
            <Loading loading={isLoading} />
          ) : isAuthenticated ? (
            <Logout />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/w">
          {isLoading ? (
            <Loading loading={isLoading} />
          ) : isAuthenticated ? (
            <Redirect to="/u" />
          ) : (
            <Home />
          )}
        </Route>
        <Route exact path="/">
          {isLoading ? (
            <Loading loading={isLoading} />
          ) : isAuthenticated ? (
            <Redirect to="/u" />
          ) : (
            <Redirect to="/w/home" />
          )}
        </Route>
        <Route>
          {isLoading ? <Loading loading={isLoading} /> : <NotFound />}
        </Route>
      </Switch>
    </Router>
  );
};

const LoggedInRoutes = [
  <Route exact path="/" component={Home} />,
  <Route exact path="/u" component={Dashboard} />,
];

const LoggedOutRoutes = [
  <Route exact path="/login" component={Login} />,
  <Route exact path="/register" component={Register} />,
  <Route exact path="/" component={Home} />,
];

export default Main;
