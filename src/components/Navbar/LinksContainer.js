/** @jsxImportSource @emotion/core */
import { jsx, css } from "@emotion/core";
import React from "react";
import ButtonLink from "./ButtonLink";
import Button from "../GlobalComponents/Button";
import github from "../Image/github.svg";
import { useState, useEffect, useCallback } from "react";
import { Router, Route } from "wouter";

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};

const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLocation());

  useEffect(() => {
    // this function is called whenever the hash changes
    const handler = () => setLoc(currentLocation());

    // subscribe to hash changes
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  // remember to wrap your function with `useCallback` hook
  // a tiny but important optimization
  const navigate = useCallback((to) => (window.location.hash = to), []);

  return [loc, navigate];
};

const LinksContainer = ({ hidden }) => {
  return (
    <div css={styles} className={(hidden ? "hidden" : "") + " linksContainer"}>
      <Router hook={useHashLocation}>
        <Route path="/about" component={github} />
        <ButtonLink name="INCENTIVE" />
        <ButtonLink name="OUR CAUSE" />
        <ButtonLink name="OUR GROUPS" />
        <Button text="JOIN NOW" />
        <Button text="SIGN IN" />
        <a href="https://github.com/orgs/Coders-HQ">
          <img
            height={55}
            margin-left={10}
            src={github}
            alt="github"
            name="github"
          />
        </a>
      </Router>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 750px;
  display: flex;
  align-items: Center;
  justify-content: space-between;
  margin-right: 4px;
  a {
    margin-right: 10px;
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
