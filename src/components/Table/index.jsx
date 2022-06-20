import * as React from "react";
import PropTypes from "prop-types";

import { DataGrid } from "@mui/x-data-grid";

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
  } = props;

  const [pageSize, setPageSize] = React.useState(rowsPerPageOptions[0]);
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
        rows={data}
        columns={columns}
        checkboxSelection={checkboxSelection}
        density="compact"
        disableSelectionOnClick
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
};

Table.defaultProps = {
  data: [],
  columns: [],
  jsonData: {},
  open: false,
  setOpen: () => {},
  checkboxSelection: false,
  loading: false,
  rowsPerPageOptions: [25, 50, 100],
};
