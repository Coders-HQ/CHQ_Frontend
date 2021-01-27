import React from "react";

const Explore = ({ darkMode }) => {
  return (
    <div
    className={"dashboard-section " + (darkMode ? "graydark" : "graylight")}
  >
      <h1>Explore</h1>
    </div>
  );
};

export default Explore;
