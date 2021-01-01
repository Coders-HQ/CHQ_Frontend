/** @jsxImportSource @emotion/core */

import React from "react";
import Link from "./Link";
import Button from "../../../Components/GlobalComponents/Button";
import Github from "./Github";

const LinksContainer = ({ hidden }) => {
  const user = false;

  const handleLogout = (e) => {
    e.preventDefault();
    //dispatch(logout());
  };

  return (
    <div className={(hidden ? "hidden" : "") + " linksContainer"}>
      <div className="mid">
        <Link name="HOME" linkTo="/" />
        <Link name="INCENTIVE" linkTo="/incentive" />
        <Link name="OUR CAUSE" linkTo="/cause" />
        <Link name="OUR GROUPS" linkTo="/groups" />
      </div>
      {user ? "" : <Button text="JOIN NOW" linkTo="/register" />}
      {user ? (
        <Button text="LOGOUT" onClick={(e) => handleLogout(e)} />
      ) : (
        <Button text="LOGIN" linkTo="/login" />
      )}
      <Github />
    </div>
  );
};

export default LinksContainer;
