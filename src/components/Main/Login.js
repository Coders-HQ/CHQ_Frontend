/** @jsxImportSource @emotion/core */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";

const Login = () => (
  <div css={styles} className="login">
    <h1>
      <span>THIS IS A TEST</span>
    </h1>
  </div>
);

const styles = css`
  h1 {
    font-size: 64px;
  }
`;

export default Login;
