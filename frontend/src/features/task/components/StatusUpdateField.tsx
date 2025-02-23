import { TextField, MenuItem } from "@mui/material";

const status = ["TODO", "IN PROGRESS"];
const StatusUpdateField = () => {
  return (
    <TextField
      fullWidth
      id="task-status-update"
      select
      label="Current status"
      defaultValue="TODO"
      helperText="Update task status"
      variant="standard"
    >
      {status.map((status) => (
        <MenuItem key={status} value={status}>
          {status}
        </MenuItem>
      ))}
    </TextField>
  );
};
export default StatusUpdateField;
