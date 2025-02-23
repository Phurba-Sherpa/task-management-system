import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeadWrapper = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>title</TableCell>
        <TableCell>description</TableCell>
        <TableCell>Created At</TableCell>
        <TableCell>Update progress</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadWrapper;
