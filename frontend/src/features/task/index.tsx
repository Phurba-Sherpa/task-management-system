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
import { TaskProps } from "../../services/task-services";
import NoInternet from "../../components/ui/NoInternet";
import { NoRecords } from "../../components/ui/NoRecords";

const TaskSection = () => {
  const { open, isOpen, close } = useDisclosure(false);
  const {
    data: resp,
    isLoading,
    isPending,
    doAddTask,
    fetchError,
  } = useTasks();
  const { onError } = useSnackbar();

  useEffect(() => {
    if (resp && resp?.data?.status !== 200) {
      onError(
        resp?.data?.statusMsg || "Failed to fetch tasks. Try again later!",
      );
    }
  }, [resp]);

  if (fetchError && fetchError.code === "ERR_NETWORK") {
    return <NoInternet />;
  }

  let data = resp?.data?.status === 200 ? resp.data.data : [];

  const handleSubmit = (e: HTMLFormElement) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as TaskProps;
    doAddTask(payload);
    close();
  };

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
        {data?.length > 0 ? <TaskList data={data} /> : <NoRecords />}
      </CardWrapper>

      {isOpen && (
        <TaskModal
          isLoading={isPending}
          handleSubmit={handleSubmit}
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
