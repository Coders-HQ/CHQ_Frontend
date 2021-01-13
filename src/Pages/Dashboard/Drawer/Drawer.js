import React from "react";
import Logo from "../../../Images/Logo/png/light_text.png";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    textTransform: "uppercase",
    backgroundColor: "red",
  },
}));

const Drawer = ({ userData, drawerStatus }) => {
  const classes = useStyles();
  return (
    <div
      className={
        drawerStatus ? "dashboard-drawer active-drawer" : "dashboard-drawer"
      }
    >
      <div className="logo-wrapper">
        <img src={Logo} className="logo" width="250rem" />
      </div>
      <hr />
      <h2 className="user-section">
        <Avatar className={classes.large}>{userData.username[0]}</Avatar>
      </h2>
    </div>
  );
};

export default Drawer;
