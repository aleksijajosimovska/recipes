import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import { deletePost } from "../../actions/postAction";
import { useDispatch } from "react-redux";

import { useHistory, useParams } from "react-router-dom";

export default function DialogSelect() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onDelete = () => {
    dispatch(deletePost(id))
    history.push("/");
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <span onClick={handleClickOpen} className="button-text">Delete Recipe</span>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>do you really want to delete it?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onDelete} color="primary">
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
