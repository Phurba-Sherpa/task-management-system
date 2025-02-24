import { Box, Button, Typography } from "@mui/material";
import url from "../../assets/no-internet.svg";
import { Refresh } from "@mui/icons-material";

const NoInternet = () => {
  return (
    <Box sx={{ display: "grid", placeContent: "center" }}>
      <Box sx={{ textAlign: "center", p: 6 }}>
        <Box
          sx={{
            width: "600px",
            height: "350px",
          }}
        >
          <img
            src={url}
            alt="no internet"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography variant="h2" fontWeight={500} mb={0.5} mt={6}>
          Whoops!!
        </Typography>
        <Typography variant="body2" sx={{ maxWidth: "50ch", mx: "auto" }}>
          Unable to connect to the server. Please check your internet connection
          or try again later.
        </Typography>
        <Button
          startIcon={<Refresh />}
          sx={{ borderRadius: 99, mt: 3, maxWidth: "60%" }}
          variant="contained"
          fullWidth
        >
          Try again
        </Button>
      </Box>
    </Box>
  );
};
export default NoInternet;
