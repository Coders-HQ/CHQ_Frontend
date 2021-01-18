/** @jsxImportSource @emotion/core */

import React from "react";

const CustomLink = ({ name, linkTo }) => (
  <a className="link" href={linkTo}>
    {name}
  </a>
);

export default CustomLink;
