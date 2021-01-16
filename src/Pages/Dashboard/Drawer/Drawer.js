import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import history from "../../../history";
import { BrowserRouter as Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    paddingLeft: "2rem",
    color: "white",
    transition: "all 0.25s ease",
    "&:focus": {
      backgroundColor: "rgba(0,0,0, 0.25)",
      color: "red",
    },
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
  const classes = useStyles();
  return (
    <div
      className={
        drawerStatus ? "dashboard-drawer active-drawer" : "dashboard-drawer"
      }
    >
      <h2 className="user-avatar">
        <Avatar className={classes.large}>{userData.username[0]}</Avatar>
      </h2>
      <h1 className="user-username">{userData.username}</h1>
      <Button
        className={classes.centerbtn}
        fullWidth={true}
        onClick={() => {
          history.push("/dashboard/profile");
          window.location.reload();
        }}
      >
        Edit Profile
      </Button>
      <hr className="h-break" />
      <ButtonGroup
        orientation="vertical"
        color="light"
        aria-label="vertical contained primary button group"
        variant="text"
        className={classes.btngroup}
      >
        <Button
          className={classes.btnLabel}
          fullWidth={true}
          onClick={() => {
            window.location = "/dashboard/feed";
          }}
        >
          Feed
        </Button>
        <Button
          className={classes.btnLabel}
          fullWidth={true}
          onClick={() => {
            window.location = "/dashboard/profile";
          }}
        >
          Profile
        </Button>
        <Button className={classes.btnLabel} fullWidth={true}>
          Explore
        </Button>
        <Button className={classes.btnLabel} fullWidth={true}>
          Notifications
        </Button>
        <Button className={classes.btnLabel} fullWidth={true}>
          Chat
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Drawer;
