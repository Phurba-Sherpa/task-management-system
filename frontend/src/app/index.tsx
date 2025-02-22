import { Typography } from "@mui/material";
import ThemeProviderWrapper from "./provider";
import SnackbarProvider from "./snackbar-provider";

function App() {
  return (
    <ThemeProviderWrapper>
      <SnackbarProvider>
        <Typography>Task Management System</Typography>
      </SnackbarProvider>
    </ThemeProviderWrapper>
  );
}

export default App;
