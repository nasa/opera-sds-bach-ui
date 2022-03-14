import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import Table from "@bach/components/Table";

import useStyles from "./style";

function IncomingSdpProducts(props) {
  const classes = useStyles();

  const { data, loading } = props;

  const columns = [
    { field: "id", headerName: "File Name", width: 450 },
    {
      field: "files_produced",
      headerName: "Files Ingested",
      width: 330,
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

IncomingSdpProducts.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape),
};

IncomingSdpProducts.defaultProps = {
  data: [],
};

export default withRouter(IncomingSdpProducts);
