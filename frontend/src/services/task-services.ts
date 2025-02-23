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
