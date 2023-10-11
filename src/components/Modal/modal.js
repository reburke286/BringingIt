import { useState } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CustomModal = ({ children, open, setOpen }) => {
  const { open, setOpen } = props;
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-custom"
      aria-describedby="modal-description"
    >
      <Box>{children}</Box>
    </Modal>
  );
};
