import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import Table from "@bach/components/Table";

import useStyles from "./style";

function IncomingGdsProducts(props) {
  const classes = useStyles();

  const { data, loading } = props;

  const columns = [
    { field: "id", headerName: "File Name", width: 360 },
    {
      field: "num_ingested",
      headerName: "Files Ingested",
      width: 360,
    },
    {
      field: "volume",
      headerName: "Volume (Bytes)",
      width: 360,
      valueFormatter: (params) => {
        return `${String(params.value)}`;
      },
    },
  ];

  return (
    <Grid item xs={12} className={classes.reportTable}>
      <Table data={data} columns={columns} loading={loading} />
    </Grid>
  );
}

IncomingGdsProducts.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape),
};

IncomingGdsProducts.defaultProps = {
  data: [],
};

export default withRouter(IncomingGdsProducts);
