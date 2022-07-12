import React from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useMatch,
} from "react-router-dom";

import { Typography } from "@mui/material";

import { makeAPIGet } from "@bach/api/DataUtils";

import { getPathTail } from "@bach/api/utils";

import { ModalDialogContext } from "@bach/contexts/ModelDialogContext";
import {
  DispatchContext,
  StateContext,
} from "@bach/contexts/ReportingContexts";
import {
  StateContext as DataStateRetrievalTimeSummaryContext,
  DispatchContext as DataDispatchRetrievalTimeSummaryContext,
} from "@bach/contexts/DataContexts/RetrievalTimeReport/RetrievalTimeSummaryReport";
import {
  StateContext as DataStateRetrievalTimeLogContext,
  DispatchContext as DataDispatchRetrievalTimeLogContext,
} from "@bach/contexts/DataContexts/RetrievalTimeReport/RetrievalTimeDetailedReport";

import FilterMenu from "@bach/components/FilterMenu";
import FilterController from "@bach/components/FilterController";
import DateFilter from "@bach/components/Filters/DateFilter";
import TabMenu from "@bach/components/TabMenu";
import PageWrapper from "@bach/components/PageWrapper";
import FilterTableGrid from "@bach/components/FilterTableGrid";

import RetrievalTimeSummary from "@bach/pages/Reporting/RetrievalTime/RetrievalTimeSummary";
import RetrievalTimeDetailed from "@bach/pages/Reporting/RetrievalTime/RetrievalTimeDetailed";

import useStyles from "@bach/pages/Reporting/DataProcessing/style";

function RetrievalTime(props) {
  const location = useLocation();

  const classes = useStyles();
  const match = useMatch("retrieval-time");

  const links = [
    { path: "retrieval-time-summary", label: "Retrieval Time Summary" },
    { path: "retrieval-time-detailed", label: "Retrieval Time Detail" },
  ];

  const [filtersHidden, setFiltersHidden] = React.useState(false);
  const toggleFilters = () => setFiltersHidden(!filtersHidden);

  const state = React.useContext(StateContext);
  const modalDialogState = React.useContext(ModalDialogContext);

  const retrievalTimeSummaryState = React.useContext(
    DataStateRetrievalTimeSummaryContext
  );
  const retrievalTimeSummaryDispatch = React.useContext(
    DataDispatchRetrievalTimeSummaryContext
  );
  const retrievalTimeLogState = React.useContext(
    DataStateRetrievalTimeLogContext
  );
  const retrievalTimeLogDispatch = React.useContext(
    DataDispatchRetrievalTimeLogContext
  );

  const { startDate, endDate, preset } = state;

  const retrievalTimeSummaryData = retrievalTimeSummaryState.data;
  const setRetrievalTimeSummaryData = retrievalTimeSummaryDispatch.setData;
  const retrievalTimeLogData = retrievalTimeLogState.data;
  const setRetrievalTimeLogData = retrievalTimeLogDispatch.setData;

  const [tempStartDate, setTempStartDate] = React.useState(startDate);
  const [tempEndDate, setTempEndDate] = React.useState(endDate);
  const [tempPreset, setTempPreset] = React.useState(preset);
  const { setState: setModalDialogState } = modalDialogState;

  const [loading, setLoading] = React.useState(false);

  const [header, setHeader] = React.useState([]);

  const getRetrievalTimeReport = async (endpoint) => {
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
      case "retrieval-time-summary":
        setRetrievalTimeSummaryData(data);
        break;
      case "retrieval-time-detailed":
        setRetrievalTimeLogData(data);
        break;
      default:
        throw new Error(`No such report: ${reportName}`);
    }
  }

  const getReport = async (reportName) => {
    switch (reportName) {
      case "retrieval-time-summary":
        return getRetrievalTimeReport("RetrievalTimeSummaryReport");
      case "retrieval-time-detailed":
        return getRetrievalTimeReport("RetrievalTimeDetailedReport");
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
              <Route path="/" element={<Navigate to="retrieval-time-summary" />} exact />
              <Route
                path="retrieval-time-summary"
                element={
                  <RetrievalTimeSummary
                    data={retrievalTimeSummaryData}
                    loading={loading}
                    startDate={tempStartDate}
                    endDate={tempEndDate}
                  />
                }
              />
              <Route
                path="retrieval-time-detailed"
                element={
                  <RetrievalTimeDetailed
                    data={retrievalTimeLogData}
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

export default RetrievalTime;
