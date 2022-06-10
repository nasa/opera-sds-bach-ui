import PropTypes from "prop-types";
import Table from "@bach/components/Table";
import React from "react";
import { Link } from "@mui/material";
import { DEFAULT_HOST, SUFFIX } from "@bach/config";

function RetrievalTimeDetailed(props) {
  const { data, loading, startDate, endDate } = props;

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0,
      minWidth: 85,
    },
    {
      field: "OPERA Product File Name",
      headerName: "OPERA Product File Name",
      flex: 0,
      minWidth: 680,
    },
    {
      field: "ProductType",
      headerName: "Product Type",
      flex: 0,
      minWidth: 200,
    },
    {
      field: "RetrievalTime",
      headerName: "RetrievalTime (HH:mm:ss)",
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
        Click here to download the retrieval time detailed report for {startDate} to {endDate}.
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
