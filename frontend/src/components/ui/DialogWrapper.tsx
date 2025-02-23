import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  maxWidth: "lg" | "md" | "sm";
};
const DialogWrapper: React.FC<DialogProps> = ({
  maxWidth = "lg",
  open,
  onClose,
  children,
  title,
}) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={maxWidth}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialogTitle-root": {
          px: 4,
          py: 2,
        },
        "& .MuiDialogContent-root": {
          p: 4,
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 500, fontSize: "24px" }}>
        {title}
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default React.memo(DialogWrapper);
