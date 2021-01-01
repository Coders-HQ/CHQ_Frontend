/** @jsxImportSource @emotion/core */

import React from "react";
import Button from "../../Components/GlobalComponents/Button";
import TextLoop from "react-text-loop";

const user = "Abdulrahman"; // Represents user's first name
const Auth = true;
const Info = () => (
  <div className="info">
    <h1 className="welcomeMessage">
      {Auth ? "Welcome back, " : "Hello there!"}{" "}
      <span className="firstname">{user}</span>
    </h1>
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
      the future using code.
      <h1 className="subtext">Coders HQ</h1>
    </h1>
  </div>
);

export default Info;
