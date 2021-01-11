import Nav from "./Navbar/Nav";
import Info from "./Info";
import Overlay from "./Overlay";
import Background from "./Background";
import React from "react";

const Home = ({ isAuth }) => {
  return (
    <section className="main" id="home">
      <Background />
      <Overlay />
      <Nav isAuth={isAuth} />
      <Info />
    </section>
  );
};

export default Home;
