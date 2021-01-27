import React, { useState } from "react";

import Nav from "./Components_Landing/Navbar";
import Overlay from "./Components_Landing/Overlay";
import Background from "./Components_Landing/Background";
import Sidebar from "./Components_Landing/Sidebar";

const Home = ({ isAuth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <section className="main" id="home">
      <Background />
      <Overlay />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Nav isOpen={isOpen} toggle={toggle} />
    </section>
  );
};

export default Home;
