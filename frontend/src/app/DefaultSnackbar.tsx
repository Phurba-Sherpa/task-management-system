import { Snackbar, Alert } from "@mui/material";
import React from "react";

type SnackbarProps = {
  isOpen: boolean;
  message: string;
  isError: boolean;
  onClose: () => void;
};

const DefaultSnackbar: React.FC<SnackbarProps> = ({
  isOpen,
  onClose,
  message,
  isError,
}) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        variant={isError ? "standard" : "filled"}
        onClose={onClose}
        severity={isError ? "error" : "success"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default DefaultSnackbar;
