import { TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const statusOptions = ["TODO", "IN PROGRESS", "DONE", "ON HOLD"];
const StatusUpdateField = () => {
  const [newStatus, setNewStatus] = useState("TODO");
  const handleChange = (e) => {
    console.log(e.target.value);
    setNewStatus(e.target.value);
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
      helperText="Update task status"
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
