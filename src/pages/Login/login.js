import { useState } from "react";
import { CustomModal as Modal } from "../../components/Modal/modal";
import { Box, TextField } from "@mui/material";

const LoginDetails = () => {
  return (
    <Box>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="email"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
    </Box>
  );
};
export const Login = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal open={open} setOpen={setOpen} children={<LoginDetails />}></Modal>
  );
};
