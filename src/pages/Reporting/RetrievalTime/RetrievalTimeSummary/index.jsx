import PropTypes from "prop-types";
import Table from "@bach/components/Table";
import React from "react";
import { Button, Link } from "@mui/material";
import { DEFAULT_HOST, SUFFIX } from "@bach/config";
import BasicModal from "@bach/components/BasicModal";

function RetrievalTimeSummary(props) {
  const { data, loading, startDate, endDate } = props;

  const [selectedHistogram, setSelectedHistogram] = React.useState(<></>);
  const [open, setOpen] = React.useState(false);

  const columns = [
    {
      field: "id",
      headerName: "#",
      flex: 0,
      minWidth: 85,
    },
    {
      field: "opera_product_short_name",
      headerName: "OPERA Product Short Name",
      flex: 0,
      minWidth: 200,
    },
    {
      field: "input_product_short_name",
      headerName: "Input Product Short Name",
      flex: 0,
      minWidth: 200,
    },
    {
      field: "retrieval_time_count",
      headerName: "Input Products Retrieved",
      flex: 0,
      minWidth: 170,
    },
    {
      field: "retrieval_time_p90",
      headerName: "Retrieval Time (90th Percentile)",
      flex: 0,
      minWidth: 250,
    },
    {
      field: "retrieval_time_min",
      headerName: "Retrieval Time (minimum)",
      flex: 0,
      minWidth: 250,
    },
    {
      field: "retrieval_time_mean",
      headerName: "Retrieval Time (mean)",
      flex: 0,
      minWidth: 250,
    },
    {
      field: "retrieval_time_max",
      headerName: "Retrieval Time (maximum)",
      flex: 0,
      minWidth: 250,
    },
    {
      field: "retrieval_time_median",
      headerName: "Retrieval Time (median)",
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
          <Button
            onClick={() => {
              setSelectedHistogram(image);
              setOpen(true);
            }}
          >
            View Histogram
          </Button>
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
        Click here to download the retrieval time summary report for {startDate}Z to {endDate}Z.
      </Link>
      <Table data={data} columns={columns} loading={loading} />
      <BasicModal
        title="Histogram"
        content={selectedHistogram}
        open={open}
        setOpen={setOpen}
      />
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
