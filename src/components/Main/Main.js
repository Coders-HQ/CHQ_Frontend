/** @jsxImportSource @emotion/core */
import { jsx, css } from "@emotion/core";
import React from "react";
import Nav from "../Navbar/Nav";
import Overlay from "./Overlay";
import Info from "./Info";
import backgroundVideo from "../video/vid2.mp4";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = () => (
  <Router>
    <section css={styles} className="main" id="home">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Overlay />
      <Nav />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Info />
    </section>
  </Router>
);

const styles = css`
  width: 100%;
  height: 100vh;
`;

export default Main;
