import { withTheme } from "@emotion/react";
import { WarningAmber, Clear, CheckOutlined } from "@mui/icons-material";
import {
  DialogContentText,
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { FC, memo } from "react";

type DeleteConfirmProps = {
  open: boolean;
  onClose: () => void;
  handleConfirm: () => void;
  isLoading: boolean;
};

const DeleteConfirmationDialog: FC<DeleteConfirmProps> = ({
  open,
  onClose,
  handleConfirm,
  isLoading,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Stack direction="row" spacing={4}>
          <Box
            sx={{
              bgcolor: "red.100",
              borderRadius: "999px",
              alignSelf: "flex-start",
              padding: "4px 8px",
            }}
          >
            <WarningAmber sx={{ color: "red.500" }} fontSize="large" />
          </Box>
          <Box>
            <Typography variant="h4" gutterBottom>
              Delete confirmation
            </Typography>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete task? All of data will be
              permanently removed from our servers forever. This action cannot
              be undone.
            </DialogContentText>
          </Box>
          <IconButton
            aria-label="close"
            sx={{ alignSelf: "flex-start", padding: 0 }}
            onClick={onClose}
          >
            <Clear fontSize="medium" />
          </IconButton>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button variant="outlined" onClick={onClose} sx={{ mr: 1 }}>
          Cancel
        </Button>
        <Button
          loading={isLoading}
          loadingPosition="start"
          startIcon={<CheckOutlined />}
          variant="outlined"
          onClick={handleConfirm}
        >
          Acknowledged
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(DeleteConfirmationDialog);
