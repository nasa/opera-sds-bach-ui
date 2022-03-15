import * as React from "react";
import PropTypes from "prop-types";

import { DataGrid } from "@material-ui/data-grid";

import JsonModal from "../JsonModal";

import useStyles from "./style";

export default function Table(props) {
  const {
    columns,
    data,
    jsonData,
    open,
    setOpen,
    checkboxSelection,
    loading,
    rowsPerPageOptions,
    initialPageSize,
  } = props;

  const [pageSize, setPageSize] = React.useState(initialPageSize);
  const [page, setPage] = React.useState(0);

  const classes = useStyles();

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handlePageSize = (newPageSize) => {
    setPageSize(Number(newPageSize));
  };

  return (
    <>
      <JsonModal
        name={jsonData.id}
        json={jsonData}
        open={open}
        setOpen={setOpen}
      />
      <DataGrid
        classes={{
          root: classes.root,
          columnHeader: classes.columnHeader,
          cell: classes.cell,
          row: classes.row,
        }}
        autoHeight
        density="compact"
        rows={data}
        columns={columns}
        checkboxSelection={checkboxSelection}
        loading={loading}
        page={page}
        onPageChange={handleChangePage}
        pageSize={pageSize}
        onPageSizeChange={handlePageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        pagination
      />
    </>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  columns: PropTypes.arrayOf(PropTypes.shape()),
  jsonData: PropTypes.shape(),
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  checkboxSelection: PropTypes.bool,
  loading: PropTypes.bool,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  initialPageSize: PropTypes.number,
};

Table.defaultProps = {
  data: [],
  columns: [],
  jsonData: {},
  open: false,
  setOpen: () => {},
  checkboxSelection: false,
  loading: false,
  rowsPerPageOptions: [5, 10, 20],
  initialPageSize: 5,
};
