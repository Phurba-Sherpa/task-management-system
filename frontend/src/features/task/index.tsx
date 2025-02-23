import { Box } from "@mui/material";
import Header from "./Header";
import TaskList from "./TaskList";
import { CardWrapper } from "../../components/ui/CardWrapper";

const TaskSection = () => {
  return (
    <Box>
      <Box mb={2}>
      <CardWrapper>
        <Header />
      </CardWrapper>
      </Box>
      <CardWrapper>
        <TaskList />
      </CardWrapper>
    </Box>
  );
};
export default TaskSection;
