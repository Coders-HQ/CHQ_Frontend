/** @jsxImportSource @emotion/core */

import React from "react";

const Link = ({ name, linkTo }) => (
  <a className="link" href={linkTo}>
    {name}
  </a>
);

export default Link;
