import React from "react";
import { FaBars } from "react-icons/fa";
import LightLogo from "./LightLogo";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <LightLogo />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Incentive</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="cause">Our Cause</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="partners">Our Partners</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
