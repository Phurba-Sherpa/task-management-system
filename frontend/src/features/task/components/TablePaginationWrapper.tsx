import { TableRow, TablePagination, TableFooter } from "@mui/material";
import React from "react";

type PaginationProps = {
  onPageChange: (
    e: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
  onRowsPerPageChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  count: number;
  page: number;
  rowsPerPage: number;
};

const TablePaginationWrapper: React.FC<PaginationProps> = ({
  onPageChange,
  onRowsPerPageChange,
  rowsPerPage,
  page,
  count,
}) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </TableRow>
    </TableFooter>
  );
};

export default TablePaginationWrapper;
