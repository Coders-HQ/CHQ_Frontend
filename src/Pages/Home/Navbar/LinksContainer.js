/** @jsxImportSource @emotion/core */

import React from "react";
import Link from "./Link";
import Button from "../../../Components/GlobalComponents/Button";
import github from "../../../Images/Other/github.svg";

const LinksContainer = ({ hidden }) => {
  return (
    <div className={(hidden ? "hidden" : "") + " linksContainer"}>
      <Link name="HOME" linkTo="/" />
      <Link name="INCENTIVE" linkTo="/incentive" />
      <Link name="OUR CAUSE" linkTo="/cause" />
      <Link name="OUR GROUPS" linkTo="/groups" />
      <Button text="JOIN NOW" linkTo="/register" />
      <Button text="SIGN IN" linkTo="/login" />
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
