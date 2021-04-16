import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ClearButton(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const closeAlert = () => {
    setOpen(false);
  };

  const confirmClear = () => {
    props.deleteUserData();
    closeAlert();
  };

  return (
    <Box mx={1} my={3}>
      <Button
        color="secondary"
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
      >
        Clear All
      </Button>
      <Dialog
        open={open}
        onClose={closeAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Clear all user data?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action cannot be undone. All data will be lost. Do you want to
            continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAlert} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmClear} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
