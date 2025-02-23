import { Box } from "@mui/material";
import React from "react";

export const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#EBEBEB",
        borderStyle: "solid",
        boxShadow: "0px 2px 10px 0px #CDCDCD1A",
      }}
    >
      {children}
    </Box>
  );
};
