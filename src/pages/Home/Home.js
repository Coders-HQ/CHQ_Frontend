import React from "react";

import Nav from "./Navbar/Nav";
import Overlay from "./Overlay";
import Background from "./Background";
import Active from "./Active";

const Home = ({ isAuth }) => {
  return (
    <section className="main" id="home">
      <Background />
      <Overlay />
      <Nav isAuth={isAuth} />
      <Active />
    </section>
  );
};

export default Home;
