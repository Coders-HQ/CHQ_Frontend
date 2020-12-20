/** @jsxImportSource @emotion/core */
import { jsx, css } from "@emotion/core";
import React from "react";

const Overlay = () => <div css={styles} className="overlay"></div>;

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export default Overlay;