/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

import useStyles from "./style";

export default function BasicModal(props) {
  const { title, content, open, setOpen } = props;

  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <div className={classes.dialogDiv}>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.scrollableModal}
        maxWidth="sm"
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent dividers>
          <Typography variant="h6" component="h6">
            {title}
          </Typography>
          {content}
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

BasicModal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
