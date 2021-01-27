import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
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
import LogoutDialog from "../DashboardComponents/LogoutDialog";
import Divider from "@material-ui/core/Divider";
import DarkLogo from "../../../Components/GlobalComponents/DarkLogo";
import LightLogo from "../../../Components/GlobalComponents/LightLogo";

const Drawer = ({ userData, isAuthenticated, darkMode }) => {
  const useStyles = makeStyles((theme) => ({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "300",
      textTransform: "none",
      color: darkMode ? "white" : "black",
    },

    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },

    label: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "300",
      textTransform: "none",
      color: darkMode ? "white" : "black",
    },

    btnLabel: {
      justifyContent: "flex-start",
      paddingTop: "0.75rem",
      paddingLeft: "2rem",
      height: "5rem",
      transition: "all 0.25s ease",
      color: darkMode ? "white" : "black",
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

    activeIcon: {
      marginRight: "10px",
      color: "red",
      transition: "all 0.25s ease",
    },

    activeBadgeIcon: {
      color: "red",
      transition: "all 0.25s ease",
    },

    activeLabel: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "300",
      textTransform: "none",
      color: "red",
      transition: "all 0.25s ease",
    },

    badgeIcon: {
      transition: "all 0.25s ease",
      color: darkMode ? "white" : "black",
    },

    NoSpaceBtn: {
      transition: "all 0.25s ease",
      color: darkMode ? "white" : "black",
      "&:focus": {
        backgroundColor: "rgba(0,0,0, 0.25)",
        color: "red",
      },
    },

    btnIcon: {
      marginRight: "10px",
      color: darkMode ? "white" : "black",
      transition: "all 0.25s ease",
    },

    "@media screen and (max-width: 768px) ": {
      btnLabel: {
        justifyContent: "flex-start",
        color: darkMode ? "white" : "black",
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
      color: darkMode ? "white" : "black",
    },
    badge: {
      marginLeft: "1rem",
    },
  }));

  const [isOpen, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();
  return (
    <div className={"dashboard-drawer " + (darkMode ? "dark" : "light")}>
      <LogoutDialog classes={classes} isOpen={isOpen} setOpen={setOpen} />
      {darkMode ? (
        <LightLogo className="drawer-logo" />
      ) : (
        <DarkLogo className="drawer-logo" />
      )}
      <div className="btn-group">
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
          <Home
            className={
              window.location.pathname === "/u" ||
              window.location.pathname === "/u/" ||
              (!isAuthenticated &&
                window.location.pathname.startsWith(`/u/profile/`))
                ? classes.activeIcon
                : classes.btnIcon
            }
          />
          <span
            className={
              window.location.pathname === "/u" ||
              window.location.pathname === "/u/" ||
              (!isAuthenticated &&
                window.location.pathname.startsWith(`/u/profile/`))
                ? classes.activeLabel
                : classes.label
            }
          >
            Home
          </span>
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
          <Explore
            className={
              window.location.pathname === "/u/explore" ||
              window.location.pathname === "/u/explore/"
                ? classes.activeIcon
                : classes.btnIcon
            }
          />
          <span
            className={
              window.location.pathname === "/u/explore" ||
              window.location.pathname === "/u/explore/"
                ? classes.activeLabel
                : classes.label
            }
          >
            Explore
          </span>
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
          <Person
            className={
              isAuthenticated
                ? window.location.pathname === `/u/profile/${userData.username}`
                  ? classes.activeIcon
                  : classes.btnIcon
                : classes.btnIcon
            }
          />
          <span
            className={
              isAuthenticated
                ? window.location.pathname === `/u/profile/${userData.username}`
                  ? classes.activeLabel
                  : classes.label
                : classes.label
            }
          >
            My Profile
          </span>
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
            <Message
              className={
                window.location.pathname === "/u/messages" ||
                window.location.pathname === "/u/messages/"
                  ? classes.activeBadgeIcon
                  : classes.badgeIcon
              }
            />
          </Badge>
          <span
            className={
              window.location.pathname === "/u/messages" ||
              window.location.pathname === "/u/messages/"
                ? classes.activeLabel
                : classes.label
            }
          >
            Messages
          </span>
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
          <Settings
            className={
              window.location.pathname === "/u/settings" ||
              window.location.pathname === "/u/settings/"
                ? classes.activeIcon
                : classes.btnIcon
            }
          />
          <span
            className={
              window.location.pathname === "/u/settings" ||
              window.location.pathname === "/u/settings/"
                ? classes.activeLabel
                : classes.label
            }
          >
            Settings
          </span>
        </Button>
        <Button
          className={classes.btnLabel}
          fullWidth={true}
          onClick={handleClickOpen}
          style={{ bottom: "0px" }}
        >
          <ExitToApp className={classes.btnIcon} />
          <span className={classes.label}>Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default Drawer;
