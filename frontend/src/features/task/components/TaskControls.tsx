import { Box, IconButton, Tooltip } from "@mui/material";
import {
  EditNote,
  FormatListBulleted,
  DeleteOutlined,
} from "@mui/icons-material";
import { useDisclosure } from "../../../hooks/useDisclosure";
import DeleteConfirmationDialog from "../../../components/ui/DeleteConfirmationDialog";

const TaskControls = ({}) => {
  const { open, isOpen, close } = useDisclosure(false);

  const handleDeleteBtn = () => {
    open();
  };

  const handleUpdateBtn = () => {};
  const handleViewBtn = () => {};
  const handleConfirm = () => {};
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Tooltip title="Update task details">
          <IconButton
            color="primary"
            onClick={handleUpdateBtn}
            aria-label="approve"
          >
            <EditNote />
          </IconButton>
        </Tooltip>
        <Tooltip title="View details">
          <IconButton
            color="primary"
            onClick={handleViewBtn}
            aria-label="details"
          >
            <FormatListBulleted />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Task">
          <IconButton
            color="error"
            onClick={handleDeleteBtn}
            aria-label="details"
          >
            <DeleteOutlined />
          </IconButton>
        </Tooltip>
      </Box>
      <div>
        <DeleteConfirmationDialog
          isLoading={false}
          handleConfirm={handleConfirm}
          open={isOpen}
          onClose={close}
        />
      </div>
    </>
  );
};

export default TaskControls;
