import { Button } from "@mui/material";
import React from "react";

const ButtonWrapper = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Button sx={{ borderRadius: 99 }} {...props}>
      {children}
    </Button>
  );
};
export default ButtonWrapper;
