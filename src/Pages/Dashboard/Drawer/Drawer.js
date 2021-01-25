import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";
import {
  Home,
  ExitToApp,
  Explore,
  Settings,
  Person,
  Message,
} from "@material-ui/icons/";
import Badge from "@material-ui/core/Badge";
import history from "../../../history";
import { BrowserRouter as Redirect } from "react-router-dom";
import LogoutDialog from "../DashboardComponents/LogoutDialog";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeight: "300",
    textTransform: "none",
  },

  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  centerbtn: {
    color: "white",
  },
  btnLabel: {
    justifyContent: "flex-start",
    paddingTop: "0.75rem",
    paddingLeft: "2rem",
    color: "white",
    height: "5rem",
    transition: "all 0.25s ease",
    "&:focus": {
      backgroundColor: "rgba(0,0,0, 0.25)",
      color: "red",
    },
  },

  activeBtn: {
    justifyContent: "flex-start",
    paddingTop: "0.75rem",
    paddingLeft: "2rem",
    color: "red",
    height: "5rem",
    transition: "all 0.25s ease",
  },

  "@media screen and (max-width: 768px) ": {
    btnLabel: {
      justifyContent: "flex-start",
      color: "white",
      transition: "all 0.25s ease",
      "&:focus": {
        color: "red",
      },
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    textTransform: "uppercase",
    backgroundColor: "red",
  },
  badge: {
    marginLeft: "1rem",
  },
}));

const Drawer = ({ userData, status, isAuthenticated }) => {
  const classes = useStyles();
  return (
    <div
      className={status ? "dashboard-drawer active-drawer" : "dashboard-drawer"}
    >
      <LogoutDialog />
      <h2 className={isAuthenticated ? "user-avatar" : "user-avatar hidden"}>
        <Avatar className={classes.large}>
          {isAuthenticated ? userData.username[0] : ""}
        </Avatar>
      </h2>
      <h1
        className={isAuthenticated ? "user-username" : "user-username hidden"}
      >
        {isAuthenticated ? userData.username : ""}
      </h1>
      <hr className="h-break" />
      <Button
        className={
          window.location.pathname === "/u" ||
          window.location.pathname === "/u/" ||
          (!isAuthenticated &&
            window.location.pathname.startsWith(`/u/profile/`))
            ? classes.activeBtn
            : classes.btnLabel
        }
        fullWidth={true}
        component={Link}
        to="/u"
      >
        <Home style={{ marginRight: "10px" }} />
        <span className={classes.typography}>Home</span>
      </Button>
      <Button
        className={
          window.location.pathname === "/u/explore" ||
          window.location.pathname === "/u/explore/"
            ? classes.activeBtn
            : classes.btnLabel
        }
        fullWidth={true}
        component={Link}
        to="/u/explore"
      >
        <Explore style={{ marginRight: "10px" }} />
        <span className={classes.typography}>Explore</span>
      </Button>
      <Button
        className={
          isAuthenticated
            ? window.location.pathname === `/u/profile/${userData.username}`
              ? classes.activeBtn
              : classes.btnLabel
            : classes.btnLabel
        }
        fullWidth={true}
        component={Link}
        to={isAuthenticated ? `/u/profile/${userData.username}` : "/login"}
      >
        <Person style={{ marginRight: "10px" }} />
        <span className={classes.typography}>My Profile</span>
      </Button>

      <Button
        className={
          window.location.pathname.startsWith("/u/messages")
            ? classes.activeBtn
            : classes.btnLabel
        }
        fullWidth={true}
        component={Link}
        to={isAuthenticated ? `/u/messages` : "/login"}
      >
        <Badge style={{ marginRight: "10px" }} badgeContent={4} color="error">
          <Message />
        </Badge>
        <span className={classes.typography}>Messages</span>
      </Button>

      <Button
        className={
          window.location.pathname === "/u/settings" ||
          window.location.pathname === "/u/settings/"
            ? classes.activeBtn
            : classes.btnLabel
        }
        fullWidth={true}
        component={Link}
        to="/u/settings"
      >
        <Settings style={{ marginRight: "10px" }} />
        <span className={classes.typography}>Settings</span>
      </Button>
      <Button
        className={classes.btnLabel}
        fullWidth={true}
        component={Link}
        to="/logout"
      >
        <ExitToApp style={{ marginRight: "10px" }} />
        <span className={classes.typography}>Logout</span>
      </Button>
    </div>
  );
};

export default Drawer;
