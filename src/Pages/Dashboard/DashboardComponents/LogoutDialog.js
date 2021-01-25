import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

export default function LogoutDialog({ isOpen, classes, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are sure you would like to logout?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.NoSpaceBtn}
            onClick={handleClose}
            color="primary"
          >
            No
          </Button>
          <Button
            className={classes.NoSpaceBtn}
            onClick={handleClose}
            color="primary"
            component={Link}
            to="/logout"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
