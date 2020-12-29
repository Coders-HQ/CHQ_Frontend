/** @jsxImportSource @emotion/core */

import React from "react";
import Link from "./Link";
import Button from "../../../Components/GlobalComponents/Button";
import github from "../../../Images/Other/github.svg";
import { useState, useEffect, useCallback } from "react";
import { Router, Route } from "wouter";

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

const styles = css`
  width: 100%;
  max-width: 750px;
  display: flex;
  align-items: Center;
  justify-content: space-between;
  margin-right: 6px;
  a {
    margin-right: 5px;
  }
  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0 30px 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 70px;
    background: rgb(106, 68, 178);
    transition: top 400ms ease-in-out, opacity 400ms ease-in-out;
    &.hidden {
      left: 0;
      top: -500px;
      opacity: 0;
    }
    .btn {
      width: 100%;
      text-align: center;
      padding: 16px;
    }
  }
`;

export default LinksContainer;
