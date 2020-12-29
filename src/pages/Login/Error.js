import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const errorStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Error = () => {
  const classes = errorStyles();
  return (
    <div className={classes.root}>
      <Alert severity="error">Wrong username or password</Alert>
    </div>
  );
};

export default Error;
