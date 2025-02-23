import {
  TableCell,
  TableRow,
  TextField,
  TableBody,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC } from "react";

type TaskProps = {
  id: number;
  title: string;
  description: string;
  status: "TODO" | "IN PROGRESS" | "DONE" | "ON HOLD";
  createdAt: number;
};

const TableBodyWrapper = ({ data }: { data: any[] }) => {
  return (
    <TableBody>
      {data.map(({ id, status, title, description, createdAt }) => (
        <TableRowWrapper
          key={id}
          id={id}
          status={status}
          title={title}
          description={description}
          createdAt={createdAt}
        />
      ))}
    </TableBody>
  );
};
export default TableBodyWrapper;

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
      <TableCell>
        <Tooltip title={description}>
          <Typography
            sx={{
              maxWidth: "65ch",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {description}
          </Typography>
        </Tooltip>
      </TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>{createdAt}</TableCell>
      <TableCell>
        <TextField size="small" label="Status" />
      </TableCell>
    </TableRow>
  );
};
