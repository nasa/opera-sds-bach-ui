import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Table from "@bach/components/Table";

import { toByteString } from "@bach/pages/Reporting/DataProcessing/utils";

function OutgoingDaacProducts(props) {
  const { data, loading } = props;

  const columns = [
    {
      field: "id",
      headerName: "OPERA Product Short Name",
      flex: 0,
      minWidth: 200,
    },
    {
      field: "products_delivered",
      headerName: "Products Published",
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

  return <Table data={data} columns={columns} loading={loading} />;
}

OutgoingDaacProducts.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape),
};

OutgoingDaacProducts.defaultProps = {
  data: [],
};

export default OutgoingDaacProducts;
