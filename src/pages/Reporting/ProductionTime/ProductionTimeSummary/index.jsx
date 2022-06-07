import PropTypes from "prop-types";
import Table from "@bach/components/Table";
import React from "react";
import { Button, Link } from "@mui/material";
import { DEFAULT_HOST, SUFFIX } from "@bach/config";
import BasicModal from "@bach/components/BasicModal";

function ProductionTimeSummary(props) {
  const { data, loading, startDate, endDate } = props;

  const [open, setOpen] = React.useState(false);


  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0,
      minWidth: 85,
    },
    {
      field: "OPERA Product Short Name",
      headerName: "OPERA Product Short Name",
      flex: 0,
      minWidth: 200,
    },
    {
      field: "ProductionTime (count)",
      headerName: "ProductionTime (count)",
      flex: 0,
      minWidth: 170,
    },
    {
      field: "ProductionTime (min)",
      headerName: "ProductionTime (min) (HH:mm:ss)",
      flex: 0,
      minWidth: 250,
    },
    {
      field: "ProductionTime (mean)",
      headerName: "ProductionTime (mean) (HH:mm:ss)",
      flex: 0,
      minWidth: 250,
    },
    {
      field: "ProductionTime (max)",
      headerName: "ProductionTime (max) (HH:mm:ss)",
      flex: 0,
      minWidth: 250,
    },
    {
      field: "ProductionTime (median)",
      headerName: "ProductionTime (median) (HH:mm:ss)",
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
          `/reports/ProductionTimeSummaryReport` + `?` +
          `startDateTime=${startDate}` + `&` +
          `endDateTime=${endDate}` + `&` +
          `reportType=` + `sdp` + `&` +
          `mime=` + `application/zip`
        }
      >
        Click here to download the production time summary report for {startDate.replace("T00:00", "")} to {endDate.replace("T23:59", "")}.
      </Link>
      <Table data={data} columns={columns} loading={loading} />
    </>
  );
}

ProductionTimeSummary.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape),
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

ProductionTimeSummary.defaultProps = {
  data: [],
};

export default ProductionTimeSummary;
