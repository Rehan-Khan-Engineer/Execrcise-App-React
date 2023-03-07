import { Box, Button, Typography } from "@mui/material";

function Modal(props) {
  function cancelModalHandler() {
    props.customOnClickCancel();
  }

  function confirmModalHandler() {
    props.customOnClickConfirm();
  }

  return (
    <Box className="modal">
      <Typography>Are you sure?</Typography>
      <Button className="btn btn--alt" onClick={cancelModalHandler}>
        Cancel
      </Button>
      <Button className="btn" onClick={confirmModalHandler}>
        Okay
      </Button>
    </Box>
  );
}

export default Modal;
