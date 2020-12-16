/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import {ReactComponent as ReactLogo} from '../Image/whiteLogoNoBackground.svg';

const Logo = () => (
  <div className="Logo">
  <ReactLogo />
</div>
);

const styles = css`
  float : left;
  cursor: pointer;
`;

export default Logo;
