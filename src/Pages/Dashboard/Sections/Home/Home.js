import React from "react";

const Home = ({ darkMode }) => {
  return (
    <div
      className={"dashboard-section " + (darkMode ? "graydark" : "graylight")}
    >
      <h1>Home</h1>
    </div>
  );
};

export default Home;
