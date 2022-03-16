import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Grid } from "@material-ui/core";

import Table from "@bach/components/Table";

import useStyles from "./style";

function toByteString(value) {
  if (!Number.isInteger(value)) return `${String(value)}`;

  if (value < 1024) {
    return `${String(value)} bytes`;
  }
  if (value < 1024 * 1024) {
    return `${String(Math.round(value / 1024))} KB`;
  }
  if (value < 1024 * 1024 * 1024) {
    return `${String(Math.round(value / 1024 / 1024))} MB`;
  }
  if (value < 1024 * 1024 * 1024 * 1024) {
    return `${String(Math.round(value / 1024 / 1024 / 1024))} GB`;
  }
  if (value < 1024 * 1024 * 1024 * 1024 * 1024) {
    return `${String(Math.round(value / 1024 / 1024 / 1024 / 1024))} TB`;
  }
  return `${String(Math.round(value / 1024 / 1024 / 1024 / 1024))} PB`;
}

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
      headerName: "Volume",
      flex: 0,
      minWidth: 180,
      valueFormatter: (params) => {
        const { value } = params;
        return toByteString(value);
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
