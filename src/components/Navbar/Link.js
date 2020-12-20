/** @jsxImportSource @emotion/core */
import { jsx, css } from "@emotion/core";
import React from "react";

const Link = ({ name, linkTo }) => (
  <a css={styles} className="link" href={linkTo}>
    {name}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  transition: color 100ms ease-in-out;
  &:hover {
    color: #9477cb;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    padding: 14px 0;
    width: 100%;
    font-size: 18px;
  }
`;

export default Link;
