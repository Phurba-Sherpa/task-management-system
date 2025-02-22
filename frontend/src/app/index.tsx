import ThemeProviderWrapper from "./provider";
import SnackbarProvider from "./snackbar-provider";
import TaskSection from "../features/task";

function App() {
  return (
    <ThemeProviderWrapper>
      <SnackbarProvider>
        <TaskSection />
      </SnackbarProvider>
    </ThemeProviderWrapper>
  );
}

export default App;
