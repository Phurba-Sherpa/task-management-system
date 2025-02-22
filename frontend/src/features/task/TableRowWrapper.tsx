import { TableCell, TableRow, TextField } from "@mui/material";
import { FC } from "react";

type TaskProps = {
  id: number;
  title: string;
  description: string;
  status: "TODO" | "IN PROGRESS" | "DONE";
  createdAt: number;
};

const TableRowWrapper: FC<TaskProps> = ({
  id,
  title,
  description,
  status,
  createdAt,
}) => {
  return (
    <TableRow>
      <TableCell>TASK-{id}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>{createdAt}</TableCell>
      <TableCell>
        <TextField size="small" label="Status" />
      </TableCell>
    </TableRow>
  );
};

export default TableRowWrapper;
