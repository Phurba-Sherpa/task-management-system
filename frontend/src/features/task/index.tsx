import { Box } from "@mui/material";
import Header from "./Header";
import TaskList from "./TaskList";
import { CardWrapper } from "../../components/ui/CardWrapper";
import { useDisclosure } from "../../hooks/useDisclosure";
import TaskModal from "./TaskModal";
import { useTasks } from "./useTask";
import { useSnackbar } from "../../app/snackbar-provider";
import { useEffect } from "react";
import PageLoaderWithText from "../../components/ui/Loader";

const TaskSection = () => {
  const { open, isOpen, close } = useDisclosure(false);
  const { data: resp, isLoading } = useTasks();
  const { onError } = useSnackbar();

  let data = resp?.data?.status === 200 ? resp.data.data : [];

  useEffect(() => {
    if (resp && resp?.data?.status !== 200) {
      onError(
        resp?.data?.statusMsg || "Failed to fetch tasks. Try again later!",
      );
    }
  }, [resp]);

  return (
    <Box>
      {isLoading && (
        <PageLoaderWithText
          isLoading={isLoading}
          loaderText="Fetching tasks, please wait"
        />
      )}
      <Box mb={2}>
        <CardWrapper>
          <Header recordsCount={data?.length} handleAddBtn={open} />
        </CardWrapper>
      </Box>
      <CardWrapper>
        <TaskList data={data} />
      </CardWrapper>

      {isOpen && (
        <TaskModal
          open={isOpen}
          modalTitle="Add new task"
          onClose={close}
          initialValues={{ title: "", description: "" }}
        />
      )}
    </Box>
  );
};
export default TaskSection;
