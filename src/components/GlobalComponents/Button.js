/** @jsxImportSource @emotion/core */

import React from "react";

const Button = ({ text, linkTo }) => (
  <a href={linkTo} className="btn">
    {text}
  </a>
);

export default Button;
