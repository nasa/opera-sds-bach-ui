import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import Table from "../../../../components/Table";

import useStyles from "./style";

function OutgoingDaacProducts(props) {
  const classes = useStyles();

  const { data, loading } = props;

  const columns = [
    { field: "id", headerName: "File Name", width: 360 },
    {
      field: "products_delivered",
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

OutgoingDaacProducts.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape),
};

OutgoingDaacProducts.defaultProps = {
  data: [],
};

export default withRouter(OutgoingDaacProducts);
