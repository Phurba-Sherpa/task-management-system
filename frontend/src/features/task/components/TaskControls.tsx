import { Box, IconButton, Tooltip } from "@mui/material";
import { EditNote, DeleteOutlined } from "@mui/icons-material";
import { useDisclosure } from "../../../hooks/useDisclosure";
import DeleteConfirmationDialog from "../../../components/ui/DeleteConfirmationDialog";
import TaskModal from "../TaskModal";
import { useTasks } from "../useTask";
import { TaskProps } from "../../../services/task-services";

const TaskControls = ({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) => {
  const {
    open: openDelConfirmModal,
    isOpen: isDelConfirmModalOpen,
    close: closeDelConfirmModal,
  } = useDisclosure(false);
  const { doUpdateTask, doDeleteTask, isPending } = useTasks();
  const {
    open: openUpdateModal,
    isOpen: isUpdateModalOpen,
    close: closeUpdateModal,
  } = useDisclosure(false);

  const handleDeleteBtn = () => {
    openDelConfirmModal();
  };

  const handleUpdateBtn = () => {
    openUpdateModal();
  };
  const handleViewBtn = () => {};
  const handleConfirm = () => {
    doDeleteTask(id);
    closeDelConfirmModal();
  };

  const handleSubmit = (e: HTMLFormElement) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as TaskProps;
    doUpdateTask({ payload, id });
    closeUpdateModal();
  };

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
              title,
              description,
            }}
            handleSubmit={handleSubmit}
            isLoading={isPending}
          />
        )}
        {isDelConfirmModalOpen && (
          <DeleteConfirmationDialog
            isLoading={isPending}
            handleConfirm={handleConfirm}
            open={isDelConfirmModalOpen}
            onClose={closeDelConfirmModal}
          />
        )}
      </div>
    </>
  );
};

export default TaskControls;
