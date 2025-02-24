import { Status } from "../types/type";
import { publicApi } from "./client";

export type TaskProps = {
  title: string;
  description: string;
};
type UpdateTaskProp = {
  payload: TaskProps;
  id: number;
};
export const fetchTasks = async () => {
  const url = "/tasks";
  const resp = await publicApi.get(url);
  return resp;
};

export const addTask = async (payload: TaskProps) => {
  const url = "/tasks";
  const resp = await publicApi.post(url, payload);
  return resp;
};

export const updateTask = async ({ payload, id }: UpdateTaskProp) => {
  const url = `/tasks/${id}`;
  const resp = await publicApi.put(url, payload);
  return resp;
};

export const deleteTask = async (id: number) => {
  const url = `/tasks/${id}`;
  const resp = await publicApi.delete(url);
  return resp;
};

export const updateTaskStatus = async ({
  payload,
  id,
}: {
  payload: {
    status: Status;
  };
  id: number;
}) => {
  const url = `/tasks/${id}/status`;
  const resp = await publicApi.put(url, payload);
  return resp;
};
