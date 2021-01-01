/** @jsxImportSource @emotion/core */

import React from "react";
import Button from "../../Components/GlobalComponents/Button";
import TextLoop from "react-text-loop";

const user = JSON.parse(localStorage.getItem("userData")).username; // Represents user's first name (Work in Progress)
const Auth = () => {
  if (localStorage.getItem("accessToken") != null) {
    return true;
  } else {
    return false;
  }
};
const Info = () => (
  <div className="info">
    <div className={Auth ? "welcomeContainer" : "welcomeContainer hiddenDiv"}>
      <h1 className="welcomeMessage">
        {Auth ? "Welcome back " : "Hello there!"}{" "}
        <span className="firstname">{user}</span>
      </h1>
    </div>
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
