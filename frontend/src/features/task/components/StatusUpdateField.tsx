import { TextField, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useTasks } from "../useTask";
import { Status } from "../../../types/type";

const statusOptions = ["TODO", "IN PROGRESS", "DONE", "ON HOLD"];
const StatusUpdateField = ({ id, status }: { id: number; status: Status }) => {
  const [newStatus, setNewStatus] = useState("TODO");
  const { doUpdateTaskStatus } = useTasks();

  useEffect(() => {
    setNewStatus(status);
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = {
      status: e.target.value as Status,
    };
    doUpdateTaskStatus({ payload, id });
  };

  return (
    <TextField
      value={newStatus}
      onChange={handleChange}
      name="status"
      fullWidth
      id="task-status-update"
      select
      label="Current status"
      defaultValue="TODO"
      variant="standard"
    >
      {statusOptions.map((status) => (
        <MenuItem key={status} value={status}>
          {status}
        </MenuItem>
      ))}
    </TextField>
  );
};
export default StatusUpdateField;
