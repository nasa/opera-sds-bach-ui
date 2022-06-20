/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

import ReactJson from "react-json-view";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import useStyles from "./style";

export default function JsonModal(props) {
  const { name, json, open, setOpen } = props;

  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <div className={classes.dialogDiv}>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.scrollableModal}
        maxWidth="lg"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent dividers>
          <ReactJson src={json} />
        </DialogContent>
        <DialogActions className={classes.closeBtn}>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

JsonModal.propTypes = {
  name: PropTypes.string,
  json: PropTypes.shape({}).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

JsonModal.defaultProps = {
  name: "DefaultModal",
};
