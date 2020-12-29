import Nav from "./Navbar/Nav";
import Info from "./Info";
import Overlay from "./Overlay";
import Background from "./Background";
import React from "react";

const Home = () => (
  <section className="main" id="home">
    <Background />
    <Overlay />
    <Nav />
    <Info />
  </section>
);

export default Home;
