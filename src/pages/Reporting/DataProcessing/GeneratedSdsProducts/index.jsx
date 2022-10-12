import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Table from "@bach/components/Table";

import { toByteString } from "@bach/pages/Reporting/DataProcessing/utils";

function GeneratedSdsProducts(props) {
  const { data, loading } = props;

  const columns = [
    {
      field: "id",
      headerName: "OPERA Product Short Name",
      flex: 0,
      minWidth: 150,
    },
    {
      field: "files_produced",
      headerName: "Products Produced",
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

GeneratedSdsProducts.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape),
};

GeneratedSdsProducts.defaultProps = {
  data: [],
};

export default GeneratedSdsProducts;
