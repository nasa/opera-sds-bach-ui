import PropTypes from "prop-types";
import Table from "@bach/components/Table";
import React from "react";
import { Link } from "@mui/material";
import { DEFAULT_HOST, SUFFIX } from "@bach/config";
import moment from "moment";

function RetrievalTimeDetailed(props) {
  const { data, loading, startDate, endDate } = props;

  const columns = [
    {
      field: "id",
      headerName: "#",
      flex: 0,
      minWidth: 85,
    },
    {
      field: "input_product_name",
      headerName: "Input Product Name",
      flex: 0,
      minWidth: 360,
    },
    {
      field: "input_product_type",
      headerName: "Input Product Type",
      flex: 0,
      minWidth: 200,
    },
    {
      field: "opera_product_short_name",
      headerName: "OPERA Product Short Name",
      flex: 0,
      minWidth: 200,
    },
    {
      field: "opera_product_name",
      headerName: "OPERA Product Name",
      flex: 0,
      minWidth: 700,
    },
    {
      field: "public_available_datetime",
      headerName: "Public Available Datetime",
      flex: 0,
      minWidth: 250,
      renderCell: (params) => {
        const { value } = params;
        return moment.utc(value).format();
      },
    },
    {
      field: "opera_detect_datetime",
      headerName: "OPERA Detect Datetime",
      flex: 0,
      minWidth: 250,
      renderCell: (params) => {
        const { value } = params;
        return moment.utc(value).format();
      },
    },
    {
      field: "product_received_datetime",
      headerName: "Product Received Datetime",
      flex: 0,
      minWidth: 250,
      renderCell: (params) => {
        const { value } = params;
        return moment.utc(value).format();
      },
    },
    {
      field: "retrieval_time",
      headerName: "Retrieval Time",
      flex: 0,
      minWidth: 250,
    },
  ];

  return (
    <>
      <Link
        href={
          `${DEFAULT_HOST}${SUFFIX}` +
          `/reports/RetrievalTimeDetailedReport` + `?` +
          `startDateTime=${startDate}` + `&` +
          `endDateTime=${endDate}` + `&` +
          `reportType=` + `sdp` + `&` +
          `mime=` + `text/csv`
        }
      >
        Click here to download the retrieval time detailed report for {startDate}Z to {endDate}Z.
      </Link>
      <Table data={data} columns={columns} loading={loading} />
    </>
  );
}

RetrievalTimeDetailed.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape),
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

RetrievalTimeDetailed.defaultProps = {
  data: [],
};

export default RetrievalTimeDetailed;
