import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
} from "../../services/task-services";
import { useSnackbar } from "../../app/snackbar-provider";
import { AxiosError } from "axios";

const KEY = "TASKS";

export const useTasks = () => {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = useSnackbar();

  // Fetch tasks
  const { data, isLoading, status, error } = useQuery({
    queryKey: [KEY],
    queryFn: fetchTasks,
  });

  // Add task
  const { mutate: doAddTask, isPending: isAdding } = useMutation({
    mutationFn: addTask,
    onSuccess: (resp) => {
      if (resp?.data?.status === 200) {
        onSuccess("Task successfully saved!");
        queryClient.invalidateQueries({ queryKey: [KEY] });
      } else {
        onError(resp?.data?.statusMsg || "Failed to save task details!");
      }
    },
    onError: () => {
      onError("Failed to save task!");
    },
  });

  // Update task
  const { mutate: doUpdateTask, isPending: isUpdating } = useMutation({
    mutationFn: updateTask,
    onSuccess: (resp) => {
      if (resp?.data?.status === 201) {
        onSuccess("Task updated successfully!");
        queryClient.invalidateQueries({ queryKey: [KEY] });
      } else {
        onError(resp?.data?.statusMsg || "Failed to save task details!");
      }
    },
    onError: (error) => {
      onError(`Failed to update task! ${error.message}`);
    },
  });

  // Update task
  const { mutate: doUpdateTaskStatus, isPending: isUpdatingStatus } =
    useMutation({
      mutationFn: updateTaskStatus,
      onSuccess: (resp) => {
        if (resp?.data?.status === 200) {
          onSuccess("Task updated successfully!");
          queryClient.invalidateQueries({ queryKey: [KEY] });
        } else {
          onError(resp?.data?.statusMsg || "Failed to save task details!");
        }
      },
      onError: (error) => {
        onError(`Failed to update task! ${error.message}`);
      },
    });

  // Delete task
  const { mutate: doDeleteTask, isPending: isDeleting } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      onSuccess("Task deleted successfully!");
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    onError: (error) => {
      onError(`Failed to delete task! ${error.message}`);
    },
  });

  return {
    data,
    fetchError: error as AxiosError,
    isLoading,
    status,
    doAddTask,
    isPending: isAdding || isUpdating || isDeleting || isUpdatingStatus,
    doUpdateTask,
    doDeleteTask,
    doUpdateTaskStatus,
  };
};
