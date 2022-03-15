import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import Table from "@bach/components/Table";

import useStyles from "./style";

function GeneratedSdsProducts(props) {
  const classes = useStyles();

  const { data, loading } = props;

  const columns = [
    {
      field: "id",
      headerName: "File Name",
      flex: 0,
      minWidth: 150,
    },
    {
      field: "num_ingested",
      headerName: "Files Ingested",
      flex: 0,
      minWidth: 170,
    },
    {
      field: "volume",
      headerName: "Volume (Bytes)",
      flex: 0,
      minWidth: 180,
      valueFormatter: (params) => {
        return `${String(params.value)}`;
      },
    },
  ];

  return (
    <>
      <Grid item xs={12} className={classes.reportTable}>
        <Table data={data} columns={columns} loading={loading} />
      </Grid>
    </>
  );
}

GeneratedSdsProducts.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape),
};

GeneratedSdsProducts.defaultProps = {
  data: [],
  loading: false,
};

export default withRouter(GeneratedSdsProducts);
