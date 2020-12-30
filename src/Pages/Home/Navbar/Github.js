import React from "react";
import github from "../../../Images/Other/github.svg";

const Github = () => {
  return (
    <a href="https://github.com/orgs/Coders-HQ" className="github-button">
      <img
        height={55}
        margin-left={10}
        src={github}
        alt="github"
        name="GitHub"
      />
    </a>
  );
};

export default Github;
