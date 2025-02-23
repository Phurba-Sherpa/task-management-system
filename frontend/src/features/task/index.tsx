import { Box } from "@mui/material";
import Header from "./Header";
import TaskList from "./TaskList";
import { CardWrapper } from "../../components/ui/CardWrapper";
import { useDisclosure } from "../../hooks/useDisclosure";
import TaskModal from "./TaskModal";

const TaskSection = () => {
  const { open, isOpen, close } = useDisclosure(true);

  return (
    <Box>
      <Box mb={2}>
        <CardWrapper>
          <Header handleAddBtn={open} />
        </CardWrapper>
      </Box>
      <CardWrapper>
        <TaskList />
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
