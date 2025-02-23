import { Table, TableContainer } from "@mui/material";
import { usePagination } from "../../hooks/usePagination";
import TableHeadWrapper from "./components/TableHeadWrapper";
import TableBodyWrapper from "./components/TableBodyWrapper";
import TablePaginationWrapper from "./components/TablePaginationWrapper";
import { useTasks } from "./useTask";

export default function TaskList({data}) {
  const {
    onPageChange,
    onRowsPerPageChange,
    recordsOnPage,
    rowsPerPage,
    page,
  } = usePagination(data);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHeadWrapper />
          <TableBodyWrapper data={recordsOnPage} />
          <TablePaginationWrapper
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            count={data.length}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
    </>
  );
}
