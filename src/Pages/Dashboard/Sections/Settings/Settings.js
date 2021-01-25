import React from "react";

const Settings = ({ darkMode }) => {
  return (
    <div
      className={"dashboard-section " + (darkMode ? "graydark" : "graylight")}
    >
      <h1>Settings</h1>
    </div>
  );
};

export default Settings;
