/** @jsxImportSource @emotion/core */

import React from "react";
import Link from "./Link";
import Button from "../../../Components/GlobalComponents/Button";
import github from "../../../Images/Other/github.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../../../Features/userSlice";

const LinksContainer = ({ hidden }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className={(hidden ? "hidden" : "") + " linksContainer"}>
      <Link name="HOME" linkTo="/" />
      <Link name="INCENTIVE" linkTo="/incentive" />
      <Link name="OUR CAUSE" linkTo="/cause" />
      <Link name="OUR GROUPS" linkTo="/groups" />
      {user ? "" : <Button text="JOIN NOW" linkTo="/register" />}
      {user ? (
        <Button text="LOGOUT" onClick={(e) => handleLogout(e)} />
      ) : (
        <Button text="LOGIN" linkTo="/login" />
      )}
      <a href="https://github.com/orgs/Coders-HQ">
        <img
          height={55}
          margin-left={10}
          src={github}
          alt="github"
          name="GitHub"
        />
      </a>
    </div>
  );
};

export default LinksContainer;
