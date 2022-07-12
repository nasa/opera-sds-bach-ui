import React from "react";
import { Navigate, Route, Routes, useLocation, useMatch } from "react-router-dom";

import { Typography } from "@mui/material";

import { makeAPIGet } from "@bach/api/DataUtils";

import { getPathTail } from "@bach/api/utils";

import { ModalDialogContext } from "@bach/contexts/ModelDialogContext";
import {
  DispatchContext,
  StateContext,
} from "@bach/contexts/ReportingContexts";
import {
  StateContext as DataStateProductionTimeSummaryContext,
  DispatchContext as DataDispatchProductionTimeSummaryContext,
} from "@bach/contexts/DataContexts/ProductionTimeReport/ProductionTimeSummaryReport";
import {
  StateContext as DataStateProductionTimeLogContext,
  DispatchContext as DataDispatchProductionTimeLogContext,
} from "@bach/contexts/DataContexts/ProductionTimeReport/ProductionTimeDetailedReport";

import FilterMenu from "@bach/components/FilterMenu";
import FilterController from "@bach/components/FilterController";
import DateFilter from "@bach/components/Filters/DateFilter";
import TabMenu from "@bach/components/TabMenu";
import PageWrapper from "@bach/components/PageWrapper";
import FilterTableGrid from "@bach/components/FilterTableGrid";

import ProductionTimeSummary from "@bach/pages/Reporting/ProductionTime/ProductionTimeSummary";
import ProductionTimeDetailed from "@bach/pages/Reporting/ProductionTime/ProductionTimeDetailed";

import useStyles from "@bach/pages/Reporting/DataProcessing/style";

function ProductionTime(props) {
  const location = useLocation();

  const classes = useStyles();
  const match = useMatch("production-time");

  const links = [
    { path: "production-time-summary", label: "Production Time Summary" },
    { path: "production-time-detailed", label: "Production Time Detail" },
  ];

  const [filtersHidden, setFiltersHidden] = React.useState(false);
  const toggleFilters = () => setFiltersHidden(!filtersHidden);

  const state = React.useContext(StateContext);
  const modalDialogState = React.useContext(ModalDialogContext);

  const productionTimeSummaryState = React.useContext(
    DataStateProductionTimeSummaryContext
  );
  const productionTimeSummaryDispatch = React.useContext(
    DataDispatchProductionTimeSummaryContext
  );
  const productionTimeLogState = React.useContext(
    DataStateProductionTimeLogContext
  );
  const productionTimeLogDispatch = React.useContext(
    DataDispatchProductionTimeLogContext
  );

  const { startDate, endDate, preset } = state;

  const productionTimeSummaryData = productionTimeSummaryState.data;
  const setProductionTimeSummaryData = productionTimeSummaryDispatch.setData;
  const productionTimeLogData = productionTimeLogState.data;
  const setProductionTimeLogData = productionTimeLogDispatch.setData;

  const [tempStartDate, setTempStartDate] = React.useState(startDate);
  const [tempEndDate, setTempEndDate] = React.useState(endDate);
  const [tempPreset, setTempPreset] = React.useState(preset);
  const { setState: setModalDialogState } = modalDialogState;

  const [loading, setLoading] = React.useState(false);

  const [header, setHeader] = React.useState([]);

  const getProductionTimeReport = async (endpoint) => {
    const paths = ["reports", endpoint];
    const params = {
      startDateTime: `${tempStartDate}Z`,
      endDateTime: `${tempEndDate}Z`,
      reportType: "sdp",
      mime: "application/json",
    };
    let results = {};
    try {
      results = await makeAPIGet(paths, params);
    } catch (err) {
      console.error(err);
      setModalDialogState({
        open: true,
        title: "Something went wrong",
        contentText: "Please try again.",
      });
    }
    return results;
  };

  function setReportInfo(reportName, data) {
    switch (reportName) {
      case "production-time-summary":
        setProductionTimeSummaryData(data);
        break;
      case "production-time-detailed":
        setProductionTimeLogData(data);
        break;
      default:
        throw new Error(`No such report: ${reportName}`);
    }
  }

  const getReport = async (reportName) => {
    switch (reportName) {
      case "production-time-summary":
        return getProductionTimeReport("ProductionTimeSummaryReport");
      case "production-time-detailed":
        return getProductionTimeReport("ProductionTimeDetailedReport");
      default:
        throw new Error(`No such report: ${reportName}`);
    }
  };

  const search = async () => {
    // WORKAROUND: spinner is rendered below table rows.
    //  Clear table on subsequent search so users can see the spinner.

    const path = getPathTail(location);
    setReportInfo(path, {});
    setHeader([]);

    setLoading(true);

    const results = await getReport(path);
    const { header, payload } = results.data;
    setHeader(header);

    // generate row number
    for (let i = 0; i < payload.length; i++) {
      payload[i].id = i + 1;
    }

    setLoading(false);

    const reportName = path;
    setReportInfo(reportName, payload);
  };
  const reset = () => {};

  const reportHeaderLines = [];
  for (let i = 0; i < header.length; i++) {
    const headerLine = header[i];
    Object.entries(headerLine).forEach(([key, value]) => {
      reportHeaderLines.push(<Typography>{key}: {value}</Typography>);
    });
  }

  return (
    <PageWrapper>
      <FilterController hidden={filtersHidden} toggleFilters={toggleFilters} />
      <FilterTableGrid filtersHidden={filtersHidden}>
        <FilterMenu title="REPORT SETTINGS" search={search} reset={reset} searchButtonValue="GENERATE">
          <DateFilter
            label="Date"
            startValue={tempStartDate}
            setStartValue={setTempStartDate}
            endValue={tempEndDate}
            setEndValue={setTempEndDate}
            presetValue={tempPreset}
            setPresetValue={setTempPreset}
            presets
          />
        </FilterMenu>
        <>
          <div className={classes.summaryTable}>
            <Typography variant="h6">Report Summary</Typography>
            {reportHeaderLines}
          </div>
          <Typography variant="h6">Report Data</Typography>
          <TabMenu links={links} match={match} classes={classes.reportTab} />

          <div className={classes.subPage}>
            <Routes>
              {/* this allows to move to the first tab when clicking the link in the sidebar */}
              <Route path="/" element={<Navigate to="production-time-summary" />} exact />
              <Route
                path="production-time-summary"
                element={
                  <ProductionTimeSummary
                    data={productionTimeSummaryData}
                    loading={loading}
                    startDate={tempStartDate}
                    endDate={tempEndDate}
                  />
                }
              />
              <Route
                path="production-time-detailed"
                element={
                  <ProductionTimeDetailed
                    data={productionTimeLogData}
                    loading={loading}
                    startDate={tempStartDate}
                    endDate={tempEndDate}
                  />
                }
              />
            </Routes>
          </div>
        </>
      </FilterTableGrid>
    </PageWrapper>
  );
}

export default ProductionTime;
