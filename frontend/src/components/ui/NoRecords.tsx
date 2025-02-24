import { Box, Typography } from "@mui/material";
import url from "../../assets/no-records.svg";

export const NoRecords = () => {
  return (
    <Box sx={{ textAlign: "center", maxWidth: "100%", overflow: "hidden", p: 4 }}>
      <img
        src={url}
        alt="No records visual"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Typography variant="h6" mt={0.5}>
        No activities yet
      </Typography>
    </Box>
  );
};
