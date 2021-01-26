import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const Settings = ({ darkMode, setTheme }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        clear: "both",
        width: "100rem",
        height: "15rem",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div
      className={"dashboard-section " + (darkMode ? "graydark" : "graylight")}
    >
      <h1>Settings</h1>
      <div className={classes.root}>
        <Paper elevation={3}>
          <ThemeSwitch darkMode={darkMode} setTheme={setTheme} />
        </Paper>
      </div>
    </div>
  );
};

export default Settings;
