import { FC, FormEventHandler, useEffect, useState } from "react";
import DialogWrapper from "../../components/ui/DialogWrapper";
import { Button, Stack, TextField } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";

type TaskModalProps = {
  onClose: () => void;
  open: boolean;
  initialValues: {
    title: string;
    description: string;
  };
  modalTitle: string;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  isLoading: boolean;
};

const TaskModal: FC<TaskModalProps> = ({
  open,
  onClose,
  initialValues,
  modalTitle,
  handleSubmit,
  isLoading,
}) => {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [description, setDescription] = useState(
    initialValues?.description || "",
  );

  useEffect(() => {
    if (initialValues?.title) {
      setTitle(initialValues?.title);
    }

    if (initialValues?.description) {
      setDescription(initialValues.description);
    }
  }, [initialValues.title, initialValues.description]);

  return (
    <DialogWrapper
      open={open}
      title={modalTitle}
      onClose={onClose}
      maxWidth="sm"
    >
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          fullWidth
          type="text"
          required
          label="Task title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Task description (optional)"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Stack flexDirection="row" gap={1} justifyContent="flex-end" mt={4}>
          <Button
            disabled={isLoading}
            onClick={onClose}
            type="reset"
            sx={{ textTransform: "capitalize", borderRadius: 99 }}
          >
            Cancel
          </Button>
          <Button
            loading={isLoading}
            type="submit"
            variant="contained"
            startIcon={<SaveOutlined />}
            sx={{
              textTransform: "capitalize",
              borderRadius: 99,
            }}
          >
            Save
          </Button>
        </Stack>
      </form>
    </DialogWrapper>
  );
};
export default TaskModal;
