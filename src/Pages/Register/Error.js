import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

const errorStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Error = (status) => {
  // If status is false -> then error won't show
  const classes = errorStyles();
  return (
    <Collapse in={status.status}>
      <div className={classes.root}>
        <Alert severity="error">Please check your details</Alert>
      </div>
    </Collapse>
  );
};

export default Error;
