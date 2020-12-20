/** @jsxImportSource @emotion/core */
import { jsx, css } from "@emotion/core";
import React from "react";

const Button = ({ text, linkTo }) => (
  <a css={styles} href={linkTo} className="btn">
    {text}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  background: #b19cd9;
  color: #fff;
  font-size: 14px;
  padding: 12px 14px;
  transition: background 150ms ease-in-out;
  &:hover {
    background: #6a44b2;
  }
`;

export default Button;
