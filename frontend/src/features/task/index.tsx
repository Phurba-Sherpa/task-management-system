import { Box } from "@mui/material";
import Header from "./Header";
import TaskList from "./TaskList";

const TaskSection = () => {
  return (
    <Box>
      <Header />
      <TaskList />
    </Box>
  );
};
export default TaskSection;
