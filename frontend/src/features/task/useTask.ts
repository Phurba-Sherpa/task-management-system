import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../../services/task-services";

const KEY = "TASKS";

export const useTasks = () => {
  // Fetch tasks
  const { data, isLoading, status } = useQuery({
    queryKey: [KEY],
    queryFn: fetchTasks,
  });

  return {
    data,
    isLoading,
    status,
  };
};
