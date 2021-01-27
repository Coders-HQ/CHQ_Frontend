import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const Settings = ({ darkMode, setTheme }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "inline-block",
      flexWrap: "wrap",
      "& > *": {
        marginTop: "2rem",
        width: "100rem",
        height: "50rem",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div
      className={"dashboard-section " + (darkMode ? "graydark" : "graylight")}
    >
      <h1>Settings</h1>
      <div
        className={
          "dashboard-settings " + (darkMode ? "graydark" : "graylight")
        }
      >
        <ThemeSwitch darkMode={darkMode} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Settings;
