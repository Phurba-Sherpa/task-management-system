import ThemeProviderWrapper from "./provider";
import SnackbarProvider from "./snackbar-provider";
import TaskSection from "../features/task";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProviderWrapper>
        <SnackbarProvider>
          <TaskSection />
        </SnackbarProvider>
      </ThemeProviderWrapper>
    </QueryClientProvider>
  );
}

export default App;
