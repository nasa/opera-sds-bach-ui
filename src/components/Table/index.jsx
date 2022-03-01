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
  } = props;

  const [pageSize, setPageSize] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const classes = useStyles();

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handlePageSize = (newPageSize) => {
    setPageSize(Number(newPageSize));
  };

  return (
    <div className={classes.parentDiv}>
      <JsonModal
        name={jsonData.id}
        json={jsonData}
        open={open}
        setOpen={setOpen}
      />
      <div className={classes.dataGridDiv}>
        <DataGrid
          autoHeight
          headerHeight={42}
          rowHeight={50}
          rows={data}
          columns={columns}
          checkboxSelection={checkboxSelection}
          loading={loading}
          className={classes.dataGrid}
          page={page}
          onPageChange={handleChangePage}
          pageSize={pageSize}
          onPageSizeChange={handlePageSize}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </div>
    </div>
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
};

Table.defaultProps = {
  data: [],
  columns: [],
  jsonData: {},
  open: false,
  setOpen: () => {},
  checkboxSelection: false,
  loading: false,
};
