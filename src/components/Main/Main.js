/** @jsxImportSource @emotion/core */
import { jsx, css } from "@emotion/core";
import React from "react";

import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = () => (
  <Router>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/" component={Home} />
  </Router>
);

const styles = css`
  width: 100%;
  height: 100vh;
`;

export default Main;
