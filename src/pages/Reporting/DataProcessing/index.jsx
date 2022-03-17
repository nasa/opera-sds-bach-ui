import React from "react";
import PropTypes from "prop-types";
import { withRouter, useHistory, Redirect, Route } from "react-router-dom";

import { Typography } from "@material-ui/core";

import moment from "moment";

import {
  onMount,
  pushUrlParams,
  pushTempToState,
  getTempValues,
  makeAPIGet,
} from "@bach/api/DataUtils";

import { getPathTail } from "@bach/api/utils";

import {
  DispatchContext,
  StateContext,
} from "@bach/contexts/ReportingContexts";

import {
  StateContext as DataStateIncomingL2HLSFilesContext,
  DispatchContext as DataDispatchL2HLSFilesContext,
} from "@bach/contexts/DataContexts/DataProcessing/IncomingSdp";

import {
  StateContext as DataStateAncillaryContext,
  DispatchContext as DataDispatchAncillaryContext,
} from "@bach/contexts/DataContexts/DataProcessing/IncomingAncillary";

import {
  StateContext as DataStateGeneratedContext,
  DispatchContext as DataDispatchGeneratedContext,
} from "@bach/contexts/DataContexts/DataProcessing/GeneratedSds";

import {
  StateContext as DataStateOutgoingContext,
  DispatchContext as DataDispatchOutgoingContext,
} from "@bach/contexts/DataContexts/DataProcessing/OutgoingDaac";

import FilterMenu from "@bach/components/FilterMenu";
import FilterController from "@bach/components/FilterController";
import DateFilter from "@bach/components/Filters/DateFilter";
import StringFilter from "@bach/components/Filters/StringFilter";
import SelectFilter from "@bach/components/Filters/SelectFilter";
import RadioFilter from "@bach/components/Filters/RadioFilter";
import SummaryTable from "@bach/components/SummaryTable";
import TabMenu from "@bach/components/TabMenu";
import PageWrapper from "@bach/components/PageWrapper";
import FilterTableGrid from "@bach/components/FilterTableGrid";

import IncomingSdpProducts from "./IncomingSdpProducts";
import IncomingAncillaryProducts from "./IncomingAncillaryProducts";
import GeneratedSdsProducts from "./GeneratedSdsProducts";
import OutgoingDaacProducts from "./OutgoingDaacProducts";

import useStyles from "./style";

function DataProcessing(props) {
  const history = useHistory();
  const classes = useStyles();

  const { match } = props;

  const links = [
    { path: "incoming-l2-hls", label: "Incoming L2 HLS Files" },
    { path: "incoming-ancillary", label: "Incoming Ancillary Files" },
    { path: "generated-sds", label: "Generated SDS Products" },
    { path: "outgoing-to-daac", label: "Outgoing Products To DAAC" },
  ];

  const [filtersHidden, setFiltersHidden] = React.useState(false);

  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);

  const incomingL2HLSFilesDataState = React.useContext(DataStateIncomingL2HLSFilesContext);
  const incomingL2HLSFilesDataDispatch = React.useContext(DataDispatchL2HLSFilesContext);

  const ancillaryDataState = React.useContext(DataStateAncillaryContext);
  const ancillaryDataDispatch = React.useContext(DataDispatchAncillaryContext);

  const generatedDataState = React.useContext(DataStateGeneratedContext);
  const generatedDataDispatch = React.useContext(DataDispatchGeneratedContext);

  const outgoingDataState = React.useContext(DataStateOutgoingContext);
  const outgoingDataDispatch = React.useContext(DataDispatchOutgoingContext);

  const {
    startDate,
    endDate,
    preset,
    processingMode,
    reportType,
  } = state;

  const incomingL2HLSFilesData = incomingL2HLSFilesDataState.data;
  const incomingL2HLSFilesSummary = incomingL2HLSFilesDataState.summary;
  const setIncomingL2HLSFilesData = incomingL2HLSFilesDataDispatch.setData;
  const setIncomingL2HLSFilesSummary = incomingL2HLSFilesDataDispatch.setSummary;

  const ancillaryData = ancillaryDataState.data;
  const ancillarySummary = ancillaryDataState.summary;
  const setAncillaryData = ancillaryDataDispatch.setData;
  const setAncillarySummary = ancillaryDataDispatch.setSummary;

  const generatedData = generatedDataState.data;
  const generatedSummary = generatedDataState.summary;
  const setGeneratedData = generatedDataDispatch.setData;
  const setGeneratedSummary = generatedDataDispatch.setSummary;

  const outgoingData = outgoingDataState.data;
  const outgoingSummary = outgoingDataState.summary;
  const setOutgoingData = outgoingDataDispatch.setData;
  const setOutgoingSummary = outgoingDataDispatch.setSummary;

  const [tempStartDate, setTempStartDate] = React.useState(startDate);
  const [tempEndDate, setTempEndDate] = React.useState(endDate);
  const [tempPreset, setTempPreset] = React.useState(preset);
  const [tempProcessingMode, setTempProcessingMode] = React.useState(
    processingMode
  );
  const [tempReportType, setTempReportType] = React.useState(reportType);

  const [loading, setLoading] = React.useState(false);

  const tempState = {
    tempStartDate,
    tempEndDate,
    tempPreset,
    tempProcessingMode,
    tempReportType,
  };

  const tempDispatch = {
    setStartDate: setTempStartDate,
    setEndDate: setTempEndDate,
    setPreset: setTempPreset,
    setProcessingMode: setTempProcessingMode,
    setReportType: setTempReportType,
  };

  const keyMap = {
    data_received_time_range: "Data Received Time Range",
    processing_mode: "Processing Mode",
    time_of_report: "Time of Report",
    total_data_volume: "Total Data Volume",
    total_products_produced: "Total Products Produced",
    venue: "Venue",
  };

  const radioFilterOptions = [
    {
      label: "Brief",
      color: "primary",
      value: "brief",
      name: "brief",
      labelColor: "primary",
    },
    {
      label: "Detailed",
      color: "primary",
      value: "detailed",
      name: "detailed",
      labelColor: "primary",
    },
  ];

  const toggleFilters = () => setFiltersHidden(!filtersHidden);

  const getIncomingL2HLSFiles = async () => {
    const paths = ["reports", "IncomingFiles"];
    const params = {
      startDateTime: `${tempStartDate}:00Z`,
      endDateTime: `${tempEndDate}:00Z`,
      reportType: "sdp",
      mime: "application/json",
    };
    let results = {};
    try {
      results = await makeAPIGet(paths, params);
    } catch (err) {
      console.error(err);
    }
    return results;
  };

  const getIncomingAncillary = async () => {
    const paths = ["reports", "IncomingFiles"];
    const params = {
      startDateTime: `${tempStartDate}:00Z`,
      endDateTime: `${tempEndDate}:00Z`,
      reportType: "ancillary",
      mime: "application/json",
    };
    let results = {};
    try {
      results = await makeAPIGet(paths, params);
    } catch (err) {
      console.error(err);
    }
    return results;
  };

  const getGeneratedSdsProducts = async () => {
    const paths = ["reports", "GeneratedSdsProducts"];
    const params = {
      startDateTime: `${tempStartDate}:00Z`,
      endDateTime: `${tempEndDate}:00Z`,
      reportType: "sdp",
      mime: "application/json",
    };
    let results = {};
    try {
      results = await makeAPIGet(paths, params);
    } catch (err) {
      console.error(err);
    }
    return results;
  };

  const getOutgoingDaacProducts = async () => {
    const paths = ["reports", "DaacOutgoingProducts"];
    const params = {
      startDateTime: `${tempStartDate}:00Z`,
      endDateTime: `${tempEndDate}:00Z`,
      reportType: "sdp",
      mime: "application/json",
    };
    let results = {};
    try {
      results = await makeAPIGet(paths, params);
    } catch (err) {
      console.error(err);
    }
    return results;
  };

  const formatReportData = (idField, reportData) => {
    const newData = reportData.map((val) => {
      const newVal = val;
      const id = newVal[idField];
      delete newVal[idField];
      newVal.id = id;
      return newVal;
    });

    return newData;
  };

  const getReport = async (reportName) => {
    switch (reportName) {
      case "incoming-l2-hls":
        return getIncomingL2HLSFiles();
      case "incoming-ancillary":
        return getIncomingAncillary();
      case "generated-sds":
        return getGeneratedSdsProducts();
      case "outgoing-to-daac":
        return getOutgoingDaacProducts();
      default:
        throw new Error(`No such report: ${reportName}`);
    }
  };

  const setReportInfo = (reportName, results) => {
    switch (reportName) {
      case "incoming-l2-hls":
        setIncomingL2HLSFilesSummary(results.data.header);
        setIncomingL2HLSFilesData(formatReportData("name", results.data.products));
        return true;
      case "incoming-ancillary":
        setAncillarySummary(results.data.header);
        setAncillaryData(formatReportData("name", results.data.products));
        return true;
      case "generated-sds":
        setGeneratedSummary(results.data.header);
        setGeneratedData(formatReportData("name", results.data.products));
        return true;
      case "outgoing-to-daac":
        setOutgoingSummary(results.data.header);
        setOutgoingData(formatReportData("name", results.data.products));
        return true;
      default:
        throw new Error(`No such report: ${reportName}`);
    }
  };

  const getSummary = () => {
    const currentPath = getPathTail(history);
    switch (currentPath) {
      case "data-processing":
        return {};
      case "incoming-l2-hls":
        return incomingL2HLSFilesSummary || {};
      case "incoming-ancillary":
        return ancillarySummary || {};
      case "generated-sds":
        return generatedSummary || {};
      case "outgoing-to-daac":
        return outgoingSummary || {};
      default:
        throw new Error(`No such summary associated with path: ${currentPath}`);
    }
  };

  const search = async () => {
    setLoading(true);
    pushTempToState(dispatch, tempState);

    pushUrlParams(getTempValues(state, tempState, true), history);
    const path = getPathTail(history);
    const results = await getReport(path);
    setLoading(false);
    setReportInfo(path, results);
  };

  const reset = () => {
    setTempStartDate(moment().startOf("day").format("YYYY-MM-DDTHH:mm"));
    setTempEndDate(moment().endOf("day").format("YYYY-MM-DDTHH:mm"));
    setTempPreset("Today");
    setTempReportType("brief");
  };

  React.useEffect(() => {
    // grans url params if they are passed into url manually, otherwise grabs the current state.
    onMount(history, getTempValues(state, tempState, true), tempDispatch);
  }, [history.location.pathname]);

  return (
    <PageWrapper>
      <FilterController hidden={filtersHidden} toggleFilters={toggleFilters} />
      <FilterTableGrid filtersHidden={filtersHidden}>
        <FilterMenu title="REPORT SETTINGS" search={search} reset={reset}>
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
          <SelectFilter
            label="Processing Mode"
            options={[]}
            value={tempProcessingMode}
            setValue={setTempProcessingMode}
          />
          <RadioFilter
            label="Report Type"
            value={tempReportType}
            setValue={setTempReportType}
            options={radioFilterOptions}
          />
        </FilterMenu>
        <div>
          <div className={classes.summaryTable}>
            <Typography variant="h6">Report Summary</Typography>
            <SummaryTable data={getSummary()} keyMap={keyMap} />
          </div>
          <Typography variant="h6">Report Data</Typography>
          <TabMenu links={links} match={match} classes={classes.reportTab} />

          <div className={classes.subPage}>
            {/* this allows to move to the first tab when clicking the link in the sidebar */}
            <Route
              exact
              path={`${match.path}`}
              render={() => <Redirect to={`${match.path}/incoming-l2-hls`} />}
            />

            {/* todo: may move this to config file and map over array */}
            <Route
              path={`${match.path}/incoming-l2-hls`}
              render={() => (
                <IncomingSdpProducts data={incomingL2HLSFilesData} loading={loading} />
              )}
            />
            <Route
              path={`${match.path}/incoming-ancillary`}
              render={() => (
                <IncomingAncillaryProducts data={ancillaryData} loading={loading} />
              )}
            />
            <Route
              path={`${match.path}/generated-sds`}
              render={() => (
                <GeneratedSdsProducts data={generatedData} loading={loading} />
              )}
            />
            <Route
              path={`${match.path}/outgoing-to-daac`}
              render={() => (
                <OutgoingDaacProducts data={outgoingData} loading={loading} />
              )}
            />
          </div>
        </div>
      </FilterTableGrid>
    </PageWrapper>
  );
}

DataProcessing.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(DataProcessing);
export { toByteString } from "@bach/pages/Reporting/DataProcessing/utils";