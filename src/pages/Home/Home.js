/** @jsxImportSource @emotion/core */
import { jsx, css } from "@emotion/core";
import Nav from "../../components/Navbar/Nav";
import Info from "./Info";
import Overlay from "./Overlay";
import backgroundVideo from "../../components/video/vid1.mp4";
import React from "react";
import Incentive from "../../pages/Incentive/Incentive";
import Cause from "../../pages/Cause/Cause";
import Groups from "../../pages/Groups/Groups";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => (
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
    <Switch>
      <Route path="/" exact component={Info} />
      <Route path="/incentive" component={Incentive} />
      <Route path="/cause" component={Cause} />
      <Route path="/groups" component={Groups} />
    </Switch>
  </section>
);

const styles = css`
  width: 100%;
  height: 100vh;
`;

export default Home;
