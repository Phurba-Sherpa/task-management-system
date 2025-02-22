import { useState } from "react";

export const usePagination = (records: any[]) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // If rowsPerPage is -1, show all tasks
  const recordsOnPage =
    rowsPerPage != -1
      ? records.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : records;

  const onPageChange = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const onRowsPerPageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(0);
  };

  return {
    recordsOnPage,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
  };
};
