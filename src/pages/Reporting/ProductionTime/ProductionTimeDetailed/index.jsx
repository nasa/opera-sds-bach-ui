import PropTypes from "prop-types";
import Table from "@bach/components/Table";
import React from "react";
import { Link } from "@mui/material";
import { DEFAULT_HOST, SUFFIX } from "@bach/config";

function ProductionTimeDetailed(props) {
  const { data, loading, startDate, endDate } = props;

  const columns = [
    {
      field: "id",
      headerName: "#",
      flex: 0,
      minWidth: 85,
    },
    {
      field: "opera_product_name",
      headerName: "OPERA Product Name",
      flex: 0,
      minWidth: 700,
    },
    {
      field: "opera_product_short_name",
      headerName: "OPERA Product Short Name",
      flex: 0,
      minWidth: 200,
    },
    {
      field: "production_time",
      headerName: "Production Time",
      flex: 0,
      minWidth: 250,
    },
  ];

  return (
    <>
      <Link
        href={
          `${DEFAULT_HOST}${SUFFIX}` +
          `/reports/ProductionTimeDetailedReport` + `?` +
          `startDateTime=${startDate}` + `&` +
          `endDateTime=${endDate}` + `&` +
          `reportType=` + `sdp` + `&` +
          `mime=` + `text/csv`
        }
      >
        Click here to download the production time detailed report for {startDate}Z to {endDate}Z.
      </Link>
      <Table data={data} columns={columns} loading={loading} />
    </>
  );
}

ProductionTimeDetailed.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape),
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

ProductionTimeDetailed.defaultProps = {
  data: [],
};

export default ProductionTimeDetailed;
