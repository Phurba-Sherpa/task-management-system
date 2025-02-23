import {
  TableCell,
  TableRow,
  TableBody,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Status } from "../../../types/type";
import StatusPill from "./StatusPill";
import StatusUpdateField from "./StatusUpdateField";

type TaskProps = {
  id: number;
  title: string;
  description: string;
  status: Status;
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
      <TableCell sx={{ minWidth: "170px" }}>
        {title}
        <StatusPill status={status} />
      </TableCell>
      <TableCell>
        <Tooltip title={description}>
          <Typography
            sx={{
              maxWidth: "55ch",
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
      <TableCell>{createdAt}</TableCell>
      <TableCell
        sx={{
          minWidth: "130px",
        }}
      >
        <StatusUpdateField />
      </TableCell>
    </TableRow>
  );
};
