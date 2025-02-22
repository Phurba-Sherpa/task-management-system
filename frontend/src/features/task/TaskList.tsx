import { useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableFooter,
  TablePagination,
} from "@mui/material";
import TableRowWrapper from "./TableRowWrapper";
import data from "./sample-data";
import { usePagination } from "../../hooks/usePagination";

export default function TaskList() {
  const { recordsOnPage } = usePagination(data);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHeadWrapper />
          <TableBody>
            {recordsOnPage.map(
              ({ id, status, title, description, createdAt }) => (
                <TableRowWrapper
                  key={id}
                  id={id}
                  status={status}
                  title={title}
                  description={description}
                  createdAt={createdAt}
                />
              ),
            )}
          </TableBody>
          <TablePaginationWrapper length={recordsOnPage.length} />
        </Table>
      </TableContainer>
    </>
  );
}

const TablePaginationWrapper = ({ length }: { length: number }) => {
  const { onPageChange, onRowsPerPageChange, rowsPerPage, page } =
    usePagination(data);
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
          count={length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </TableRow>
    </TableFooter>
  );
};

const TableHeadWrapper = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>title</TableCell>
        <TableCell>description</TableCell>
        <TableCell>status</TableCell>
        <TableCell>Created At</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};
