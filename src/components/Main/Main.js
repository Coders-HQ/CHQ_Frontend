/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Nav from "../Navbar/Nav";
import Overlay from "./Overlay";
import Info from "./Info";
import background from "../Image/background2.png";


const Main = () => (
  <section css={styles} className="main" id="home">
    <Overlay />
    <Nav />
    <Info />
    
  </section>
);

const styles = css`
  width: 100%;
  height: 100vh;
  background: url('${background}') no-repeat center/cover;
`;

export default Main;
