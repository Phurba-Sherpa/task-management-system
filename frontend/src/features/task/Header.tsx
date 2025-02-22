import { Box, Button, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

const Header = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      py={2}
      alignItems="center"
      mb={3}
    >
      <Box>
        <Typography variant="h3" fontWeight={500}>
          Task Managment System
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 0.5 }}>
          733 restults
        </Typography>
      </Box>
      <Button size="large" variant="contained" startIcon={<Add />}>
        Add
      </Button>
    </Stack>
  );
};
export default Header;
