import { Box, IconButton, Tooltip } from "@mui/material";
import {
  EditNote,
  DeleteOutlined,
} from "@mui/icons-material";
import { useDisclosure } from "../../../hooks/useDisclosure";
import DeleteConfirmationDialog from "../../../components/ui/DeleteConfirmationDialog";
import TaskModal from "../TaskModal";

const TaskControls = ({}) => {
  const { open, isOpen, close } = useDisclosure(false);
  const {
    open: openUpdateModal,
    isOpen: isUpdateModalOpen,
    close: closeUpdateModal,
  } = useDisclosure(false);

  const handleDeleteBtn = () => {
    open();
  };

  const handleUpdateBtn = () => {
    openUpdateModal();
  };
  const handleViewBtn = () => {};
  const handleConfirm = () => {};
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Tooltip title="Update task details">
          <IconButton
            color="primary"
            onClick={handleUpdateBtn}
            aria-label="update-task"
          >
            <EditNote />
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
        {isUpdateModalOpen && (
          <TaskModal
            open={isUpdateModalOpen}
            onClose={closeUpdateModal}
            modalTitle="Edit task details"
            initialValues={{
              title: "Learn bash in 3 months",
              description: "",
            }}
          />
        )}
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
