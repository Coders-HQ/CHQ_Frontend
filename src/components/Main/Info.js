/** @jsxImportSource @emotion/core */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";

const Info = () => (
  <div css={styles} className="info">
    <h1>
      <span>SHAKING</span> THE <span>WORLD</span> USING <span>CODE</span>
    </h1>
    <p>
      <Button center text="WHAT ARE WE?"></Button>
    </p>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #fff;
  
  
  p{
    width: 100%;
    max-width: 900px;
    position: absolute;
    top: 170%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #fff;
    text-align:center;
  }
  h1 {
    font-size: 90px;
    margin-left:auto;
    margin-right:auto;
    width: 8em
    line-height: 1;
    font-weight: 900;
    span {
      color: #8565c4;
    }
  }
  .btn {
    padding: 14px 16px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 42px;
    }
  }
`;

export default Info;
