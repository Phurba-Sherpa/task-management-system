import { Typography, Box } from "@mui/material";
import { Status } from "../../../types/type";

function StatusPill({ status }: { status: Status }) {
  let color = "";
  let bgColor = "";

  switch (status) {
    case "TODO":
      color = "#6b6b6b";
      bgColor = "#eeeeee";
      break;
    case "IN PROGRESS":
      color = "#2E4DF1";
      bgColor = "#F0F2FD";
      break;
    case "DONE":
      color = "#27440D";
      bgColor = "#DEF7C7";
      break;

    case "ON HOLD":
      color = "#C42B1F";
      bgColor = "#FBDFDD";
      break;
    default:
      console.error("Invalid status");
  }

  return (
    <Box display="flex" flexDirection="row" mt={0.5}>
      <Typography
        sx={{
          color,
          backgroundColor: bgColor,
          fontSize: "12px",
          borderRadius: "6px",
          paddingX: "8px",
          paddingY: "2px",
          alignContent: "center",
          fontWeight: 500,
          textTransform: "capitalize",
        }}
      >
        {status?.toLowerCase()}
      </Typography>
    </Box>
  );
}

export default StatusPill;
