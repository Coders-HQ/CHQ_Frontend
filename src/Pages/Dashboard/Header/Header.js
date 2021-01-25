import React from "react";

const Header = ({ userData, isAuthenticated, darkMode }) => {
  return (
    <div className={"dashboard-header " + (darkMode ? "dark" : "light")}>
      <h1>Test</h1>
    </div>
  );
};

export default Header;
