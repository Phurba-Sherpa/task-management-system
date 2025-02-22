import React, { useCallback, useState } from "react";
import { useContext, createContext } from "react";
import DefaultSnackbar from "./DefaultSnackbar";

type SnackbarContextProps = {
  onError: (value: string) => void;
  onSuccess: (value: string) => void;
};

const SnackbarContext = createContext<SnackbarContextProps | null>(null);

export default function SnackbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setError] = useState(false);

  const onSuccess = useCallback((message: string) => {
    setMessage(message);
    setError(false);
    setOpen(true);
  }, []);

  const onError = useCallback((message: string) => {
    setMessage(message);
    setError(true);
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <SnackbarContext.Provider
      value={{
        onSuccess,
        onError,
      }}
    >
      {children}
      <DefaultSnackbar
        isOpen={isOpen}
        onClose={onClose}
        message={message}
        isError={isError}
      />
    </SnackbarContext.Provider>
  );
}

// ** useHook
export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (context === null) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
}
