import ThemeProviderWrapper from "./provider";
import SnackbarProvider from "./snackbar-provider";
import React, { Suspense, lazy } from "react";

const TaskSection = lazy(() => import("../features/task"));

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
