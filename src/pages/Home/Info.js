/** @jsxImportSource @emotion/core */

import React from "react";
import Button from "../../Components/GlobalComponents/Button";
import TextLoop from "react-text-loop"; // Used this package to create a text loop effect

const Info = () => (
  <div className="info">
    <h1 className="maintext">
      <TextLoop
        className="purple"
        children={[
          "Designing",
          "Creating",
          "Engineering",
          "Envisioning",
          "Planning",
          "Picturing",
          "Making",
        ]}
      ></TextLoop>{" "}
      the future using code. <br />
      <span className="subtext">Coders HQ</span>
    </h1>
  </div>
);

export default Info;
