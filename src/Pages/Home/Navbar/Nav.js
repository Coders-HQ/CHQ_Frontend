import React, { useState } from "react";
import Logo from "./Logo";
import LinksContainer from "./LinksContainer";
import Container from "../../../Components/GlobalComponents/Container";

const Nav = ({ isAuth }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <nav className="navbar">
      <Container>
        <Logo />
        <i
          onClick={() => setHidden(!hidden)}
          className={hidden ? "fas fa-bars fa-lg" : "fas fa-times fa-lg"}
          id="burgerMenu"
        ></i>
        <LinksContainer hidden={hidden} isAuth={isAuth} />
      </Container>
    </nav>
  );
};

export default Nav;
