import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 500;

  @media screen and (max-width: 960px) {
    transition: 0.5s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 1rem 2rem;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  font-family: Poppins;
  color: #ffffff;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 28px;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: #da0202;
  }

  &:active {
    color: #da0202;
    border-bottom: 3px solid #da0202;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 15px;
  background: #b71c1c;
  white-space: nowrap;
  padding: 0.5rem 2rem;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:focus {
    background-color: rgba(255, 0, 0 0.5);
    color: red;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(255, 0, 0, 1);
    color: #fff;
  }
`;
