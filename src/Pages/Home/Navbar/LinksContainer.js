/** @jsxImportSource @emotion/core */

import React, { useEffect, useState } from "react";
import CustomLink from "./Link";
import Github from "./Github";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

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
  linkLabel: {
    color: "white",
  },
  btngroup: {
    width: "100%",
  },
  btnLabel: {
    justifyContent: "flex-start",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    fontSize: "16px",
    transition: "all 0.25s ease",
    border: "0.5px solid rgba(255, 0, 0, 0)",
    "&:focus": {
      backgroundColor: "rgba(255,0,0 0.5)",
      color: "red",
      borderBottom: "0.5px solid rgba(255, 0, 0, 1)",
    },
    "&:hover": {
      backgroundColor: "rgba(255,0,0, 1)",
      color: "white",
    },
  },
  firstBtnLabel: {
    justifyContent: "flex-start",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    fontSize: "16px",
    transition: "all 0.25s ease",
    borderRadiusTopRight: "15px",
    borderRadiusBottomRight: "15px",
    borderBottom: "0.5px solid rgba(255, 0, 0, 0.25)",
    "&:focus": {
      backgroundColor: "rgba(255,0,0 0.5)",
      color: "red",
      borderBottom: "0.5px solid rgba(255, 0, 0, 1)",
    },
    "&:hover": {
      backgroundColor: "rgba(255,0,0, 1)",
      color: "white",
    },
  },
  lastBtnLabel: {
    justifyContent: "flex-start",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    fontSize: "16px",
    transition: "all 0.25s ease",
    borderRadiusTopRight: "15px",
    borderRadiusBottomRight: "15px",
    borderBottom: "0.5px solid rgba(255, 0, 0, 0.25)",
    "&:focus": {
      backgroundColor: "rgba(255,0,0 0.5)",
      color: "red",
      borderBottom: "0.5px solid rgba(255, 0, 0, 1)",
    },
    "&:hover": {
      backgroundColor: "rgba(255,0,0, 1)",
      color: "white",
    },
  },
}));

const LinksContainer = ({ hidden, isAuth }) => {
  const classes = useStyles();
  return (
    <div className={(hidden ? "hidden" : "") + " linksContainer"}>
      <Button
        variant="outlined"
        className={classes.btnLabel}
        component={Link}
        to="/w/home"
      >
        Home
      </Button>
      <Button
        variant="outlined"
        className={classes.btnLabel}
        component={Link}
        to="/w/incentive"
      >
        Incentive
      </Button>
      <Button
        variant="outlined"
        className={classes.btnLabel}
        component={Link}
        to="/w/cause"
      >
        Cause
      </Button>
      <Button
        variant="outlined"
        className={classes.btnLabel}
        component={Link}
        to="/w/groups"
      >
        Groups
      </Button>
      <Button
        variant="outlined"
        className={classes.firstBtnLabel}
        component={Link}
        to={isAuth ? "/u" : "/register"}
      >
        {isAuth ? "Home" : "Register"}
      </Button>
      <Button
        variant="outlined"
        className={classes.lastBtnLabel}
        component={Link}
        to={isAuth ? "/logout" : "/login"}
      >
        {isAuth ? "Logout" : "Login"}
      </Button>
      <Github />
    </div>
  );
};

export default LinksContainer;
