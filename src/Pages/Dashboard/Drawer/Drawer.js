import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExploreIcon from "@material-ui/icons/Explore";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";
import CloseIcon from "@material-ui/icons/Close";
import history from "../../../history";
import { BrowserRouter as Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeight: "300",
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
  btngroup: {
    width: "100%",
  },
  btnLabel: {
    justifyContent: "flex-start",
    paddingTop: "0.75rem",
    paddingLeft: "2rem",
    color: "white",
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
    backgroundColor: "rgba(0,0,0, 0.25)",
    color: "red",
    transition: "all 0.25s ease",
  },

  "@media screen and (max-width: 768px) ": {
    btnLabel: {
      justifyContent: "flex-start",
      color: "white",
      transition: "all 0.25s ease",
      "&:focus": {
        backgroundColor: "rgba(0,0,0, 0.25)",
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
}));

const Drawer = ({ userData, drawerStatus }) => {
  const [activeButton, setActiveButton] = useState("");
  const [innerDrawerStatus, setDrawerStatus] = useState(true);

  const classes = useStyles();
  return (
    <div
      className={
        drawerStatus && innerDrawerStatus
          ? "dashboard-drawer active-drawer"
          : "dashboard-drawer"
      }
    >
      <Button
        className={classes.centerbtn}
        fullWidth={true}
        onClick={() => {
          setDrawerStatus(false);
        }}
      >
        <CloseIcon />
        Close
      </Button>
      <h2 className="user-avatar">
        <Avatar className={classes.large}>{userData.username[0]}</Avatar>
      </h2>
      <h1 className="user-username">{userData.username}</h1>
      <hr className="h-break" />
      <ButtonGroup
        orientation="vertical"
        color="light"
        aria-label="vertical contained primary button group"
        variant="text"
        className={classes.btngroup}
      >
        <Button
          className={
            window.location.pathname === "/u" ||
            window.location.pathname === "/u/"
              ? classes.activeBtn
              : classes.btnLabel
          }
          fullWidth={true}
          component={Link}
          to="/u"
        >
          <HomeIcon style={{ marginRight: "10px" }} />
          Home
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
          <ExploreIcon style={{ marginRight: "10px" }} />
          <span className={classes.typography}>Explore</span>
        </Button>
        <Button
          className={
            window.location.pathname.startsWith("/u/profile")
              ? classes.activeBtn
              : classes.btnLabel
          }
          fullWidth={true}
          component={Link}
          to={"/u/profile/" + userData.username}
        >
          <PersonIcon style={{ marginRight: "10px" }} />
          Profile
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
          <SettingsIcon style={{ marginRight: "10px" }} />
          Settings
        </Button>
        <Button
          className={classes.btnLabel}
          fullWidth={true}
          component={Link}
          to="/logout"
        >
          <ExitToAppIcon style={{ marginRight: "10px" }} />
          Logout
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Drawer;
