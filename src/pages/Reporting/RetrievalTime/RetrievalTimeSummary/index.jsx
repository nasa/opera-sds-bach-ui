import PropTypes from "prop-types";
import Table from "@bach/components/Table";
import React from "react";
import { Button, Link } from "@mui/material";
import { DEFAULT_HOST, SUFFIX } from "@bach/config";
import BasicModal from "@bach/components/BasicModal";

function RetrievalTimeSummary(props) {
  const { data, loading, startDate, endDate } = props;

  const [open, setOpen] = React.useState(false);


  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0,
      minWidth: 85,
      hide: true,
    },
    {
      field: "OPERA Product Short Name",
      headerName: "OPERA Product Short Name",
      flex: 0,
      minWidth: 200,
    },
    {
      field: "RetrievalTime (count)",
      headerName: "RetrievalTime (count)",
      flex: 0,
      minWidth: 170,
    },
    {
      field: "RetrievalTime (min)",
      headerName: "RetrievalTime (min) (HH:mm:ss)",
      flex: 0,
      minWidth: 250,
    },
    {
      field: "RetrievalTime (mean)",
      headerName: "RetrievalTime (mean) (HH:mm:ss)",
      flex: 0,
      minWidth: 250,
    },
    {
      field: "RetrievalTime (max)",
      headerName: "RetrievalTime (max) (HH:mm:ss)",
      flex: 0,
      minWidth: 250,
    },
    {
      field: "RetrievalTime (median)",
      headerName: "RetrievalTime (median) (HH:mm:ss)",
      flex: 0,
      minWidth: 270,
    },
    {
      field: "histogram",
      headerName: "Histogram",
      flex: 0,
      minWidth: 210,
      renderCell: (params) => {
        const { value } = params;
        const image = (<img src={`data:image/png;base64,${value}`} alt="histogram" style={{ maxWidth: "100%" }} />);
        return (
          <>
            <Button onClick={() => setOpen(true)}>View Histogram</Button>
            <BasicModal title="Histogram" content={image} open={open} setOpen={setOpen}/>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Link
        href={
          `${DEFAULT_HOST}${SUFFIX}` +
          `/reports/RetrievalTimeSummaryReport` + `?` +
          `startDateTime=${startDate}` + `&` +
          `endDateTime=${endDate}` + `&` +
          `reportType=` + `sdp` + `&` +
          `mime=` + `application/zip`
        }
      >
        Click here to download the retrieval time summary report for {startDate.replace("T00:00", "")} to {endDate.replace("T23:59", "")}.
      </Link>
      <Table data={data} columns={columns} loading={loading} />
    </>
  );
}

RetrievalTimeSummary.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape),
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

RetrievalTimeSummary.defaultProps = {
  data: [],
};

export default RetrievalTimeSummary;
