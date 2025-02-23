import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTasks, addTask } from "../../services/task-services";
import { useSnackbar } from "../../app/snackbar-provider";

const KEY = "TASKS";

export const useTasks = () => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = useSnackbar();

  // Fetch tasks
  const { data, isLoading, status } = useQuery({
    queryKey: [KEY],
    queryFn: fetchTasks,
  });

  // Add task
  const { mutate: doAddTask, isPending } = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      onSuccess("Task successfully saved!");
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    onError: () => {
      onError("Failed to save task!");
    },
  });
  return {
    data,
    isLoading,
    status,
    doAddTask,
    isPending,
  };
};
