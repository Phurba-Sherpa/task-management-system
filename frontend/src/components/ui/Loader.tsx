import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

export default function PageLoaderWithText({
  isLoading,
  loaderText,
}: {
  isLoading: boolean;
  loaderText: string;
}) {
  return (
    <Backdrop
      sx={(theme) => ({
        color: "#fff",
        zIndex: theme.zIndex.drawer + 1,
        display: "flex",
        flexDirection: "column",
      })}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
      {loaderText && (
        <Typography sx={{ fontSize: "18px", mt: 1 }}>
          {loaderText}{" "}
          <span style={{ fontSize: "24px", letterSpacing: "3px" }}>...</span>
        </Typography>
      )}
    </Backdrop>
  );
}
