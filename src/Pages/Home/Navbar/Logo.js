/** @jsxImportSource @emotion/core */

import React from "react";
import { ReactComponent as ReactLogo } from "../../../Images/Logo/svg/white_text.svg";

const Logo = () => (
  <div className="Logo">
    <ReactLogo />
  </div>
);

const styles = css`
  float: left;
  cursor: pointer;
`;

export default Logo;
