import { Box, Button, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

const Header = ({ handleAddBtn }: { handleAddBtn: () => void }) => {
  return (
    <Stack
      p={3}
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: {
          xs: "start",
          md: "space-between",
        },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          fontWeight={500}
          sx={{
            fontSize: {
              xs: "24px",
              md: "32px",
            },
          }}
        >
          Task Managment System
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 0.5 }}>
          733 restults
        </Typography>
      </Box>
      <Button
        sx={{
          textTransform: "capitalize",
          alignSelf: "start",
          mt: {
            xs: 2,
            md: 0,
          },
        }}
        size="large"
        variant="contained"
        startIcon={<Add />}
        onClick={handleAddBtn}
      >
        Add New
      </Button>
    </Stack>
  );
};
export default Header;
