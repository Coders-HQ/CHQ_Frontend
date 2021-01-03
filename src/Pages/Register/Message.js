import React, { useEffect, useState } from "react";
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

const Message = ({ status, message }) => {
  const classes = errorStyles();

  return (
    <Collapse className="errorDiv" in={status}>
      <div className={classes.root}>
        <Alert severity="success">{message}</Alert>
      </div>
    </Collapse>
  );
};

export default Message;
