import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import WarningIcon from "@material-ui/icons/Warning";

import PageWrapper from "../../../components/PageWrapper";
import FilterTableGrid from "../../../components/FilterTableGrid";

import {
  DispatchContext,
  StateContext,
} from "../../../contexts/ProductAccountabilityContexts";

import useStyles from "./style";
import CompleteIcon from "../../../images/complete.svg";
import PartialIcon from "../../../images/partial.svg";
import NoneIcon from "../../../images/none.svg";

import {
  StateContext as DataStateContext,
  DispatchContext as DataDispatchContext,
} from "../../../contexts/DataContexts/TrackFrameData";

import {
  onMount,
  pushUrlParams,
  pushTempToState,
  getTempValues,
} from "../../../api/DataUtils";

import FilterMenu from "../../../components/FilterMenu";
import FilterController from "../../../components/FilterController";
import Table from "../../../components/Table";
import StringFilter from "../../../components/Filters/StringFilter";
import RangeFilter from "../../../components/Filters/RangeFilter";
import CheckboxFilter from "../../../components/Filters/CheckboxFilter";

import makeLabel from "../../../components/Filters/Labeler";

function TrackFrames() {
  const classes = useStyles();
  const history = useHistory();

  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const dataState = React.useContext(DataStateContext);
  const dataDispatch = React.useContext(DataDispatchContext);

  const {
    observationID,
    l0bRrsdID,
    cycleReferenceID,
    cycleSecondaryID,
    trackID,
    frameID,
  } = state;

  const { data } = dataState;
  const { setData } = dataDispatch;

  const [tempObservationID, setTempObservationID] = React.useState(
    observationID
  );
  const [tempL0bRrsdID, setTempL0bRrsdID] = React.useState(l0bRrsdID);
  const [tempCycleReferenceID, setTempCycleReferenceID] = React.useState(
    cycleReferenceID
  );
  const [tempCycleSecondaryID, setTempCycleSecondaryID] = React.useState(
    cycleSecondaryID
  );
  const [tempTrackID, setTempTrackID] = React.useState(trackID);
  const [tempFrameID, setTempFrameID] = React.useState(frameID);

  const [tempFinished, setTempFinished] = React.useState(false);
  const [tempWarning, setTempWarning] = React.useState(false);
  const [tempProcessing, setTempProcessing] = React.useState(false);
  const [tempFailed, setTempFailed] = React.useState(false);

  const [tempComplete, setTemplComplete] = React.useState(false);
  const [tempPartial, setTempPartial] = React.useState(false);
  const [tempNone, setTempNone] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const [filtersHidden, setFiltersHidden] = React.useState(false);

  const tempState = {
    tempObservationID,

    tempL0bRrsdID,

    tempCycleReferenceID,
    tempCycleSecondaryID,
    tempTrackID,
    tempFrameID,
  };

  const tempDispatch = {
    setObservationID: setTempObservationID,
    setL0bRrsdID: setTempL0bRrsdID,
    setCycleReferenceID: setTempCycleReferenceID,
    setCycleSecondaryID: setTempCycleSecondaryID,
    setTrackID: setTempTrackID,
    setFrameID: setTempFrameID,
  };

  const toggleFinished = () => setTempFinished(!tempFinished);
  const toggleWarning = () => setTempWarning(!tempWarning);
  const toggleProcessing = () => setTempProcessing(!tempProcessing);
  const toggleFailed = () => setTempFailed(!tempFailed);

  const toggleComplete = () => setTemplComplete(!tempComplete);
  const togglePartial = () => setTempPartial(!tempPartial);
  const toggleNone = () => setTempNone(!tempNone);

  const columns = [
    { field: "id", headerName: "Product Type", width: 350 },
    {
      field: "count",
      headerName: "Files Ingested",
      width: 350,
    },
  ];

  const workflowStatusFormats = {
    workflowFinished: {
      label: makeLabel(
        <CheckCircleOutlineIcon />,
        "Finished",
        "finished workflow",
        "#4CAF50",
        classes
      ),
      name: "finished",
      value: tempFinished,
      setValue: toggleFinished,
      color: "primary",
      labelColor: "#4CAF50",
    },
    workflowProcessing: {
      name: "processing",
      label: makeLabel(
        <HourglassEmptyIcon />,
        "Processing",
        "Sent to CNM",
        "#007DFF",
        classes
      ),
      value: tempProcessing,
      setValue: toggleProcessing,
      color: "primary",
      labelColor: "#007DFF",
    },
    workflowFailed: {
      label: makeLabel(
        <ErrorOutlineOutlinedIcon />,
        "Failed",
        "Failed to send to DAAC",
        "#F44336",
        classes
      ),
      name: "failed",
      value: tempFailed,
      setValue: toggleFailed,
      color: "primary",
      labelColor: "#F44336",
    },
    workflowWarning: {
      label: makeLabel(
        <WarningIcon />,
        "Warning",
        "Warning encountered during processing",
        "#FF9800",
        classes
      ),
      name: "warning",
      value: tempWarning,
      setValue: toggleWarning,
      color: "primary",
      labelColor: "#FF9800",
    },
  };

  const workflowStatusOptions = [
    workflowStatusFormats.workflowFinished,
    workflowStatusFormats.workflowProcessing,
    workflowStatusFormats.workflowWarning,
    workflowStatusFormats.workflowFailed,
  ];

  const productCoverageFormats = {
    coverageComplete: {
      label: makeLabel(
        <img alt="complete" src={CompleteIcon} />,
        "Complete",
        "Partial Coverage",
        "rgba(0, 0, 0, 0.54)",
        classes
      ),
      name: "complete",
      value: tempComplete,
      setValue: toggleComplete,
      color: "primary",
      labelColor: "rgba(0, 0, 0, 0.54)",
    },
    coveragePartial: {
      name: "partial",
      label: makeLabel(
        <img alt="complete" src={PartialIcon} />,
        "Partial",
        "Partial Coverage",
        "rgba(0, 0, 0, 0.54)",
        classes
      ),
      value: tempPartial,
      setValue: togglePartial,
      color: "primary",
      labelColor: "rgba(0, 0, 0, 0.54)",
    },
    coverageNone: {
      label: makeLabel(
        <img alt="complete" src={NoneIcon} />,
        "None",
        "No Coverage",
        "rgba(0, 0, 0, 0.54)",
        classes
      ),
      name: "failed",
      value: tempNone,
      setValue: toggleNone,
      color: "primary",
      labelColor: "rgba(0, 0, 0, 0.54)",
    },
  };

  const productCoverageOptions = [
    productCoverageFormats.coverageComplete,
    productCoverageFormats.coveragePartial,
    productCoverageFormats.coverageNone,
  ];

  const toggleFilters = () => setFiltersHidden(!filtersHidden);

  const search = async () => {
    setLoading(true);

    pushTempToState(dispatch, tempState);

    pushUrlParams(getTempValues(state, tempState, true), history);
    setLoading(false);
    setData([]);
  };

  const reset = () => {
    setTempCycleReferenceID("");
    setTempCycleSecondaryID("");
    setTempObservationID("");
    setTempL0bRrsdID("");
  };

  React.useEffect(() => {
    onMount(history, getTempValues(state, tempState, true), tempDispatch);
  }, [history.location.pathname]);

  return (
    <PageWrapper>
      <FilterController hidden={filtersHidden} toggleFilters={toggleFilters} />
      <FilterTableGrid filtersHidden={filtersHidden}>
        <FilterMenu title="FILTERS" search={search} reset={reset}>
          <RangeFilter
            label="Cycle"
            labelA="Secondary"
            valueA={tempCycleSecondaryID}
            setValueA={setTempCycleSecondaryID}
            labelB="Reference"
            valueB={tempCycleReferenceID}
            setValueB={setTempCycleReferenceID}
          />
          <StringFilter
            label="Track"
            value={tempTrackID}
            setValue={setTempTrackID}
          />
          <StringFilter
            label="Frame"
            value={tempFrameID}
            setValue={setTempFrameID}
          />
          <CheckboxFilter
            label="Product Workflow Status"
            options={workflowStatusOptions}
          />
          <CheckboxFilter
            label="Product Coverage"
            options={productCoverageOptions}
          />
          <StringFilter
            label="Observation ID"
            value={tempObservationID}
            setValue={setTempObservationID}
          />
          <StringFilter
            label="L0B RRSD ID"
            value={tempL0bRrsdID}
            setValue={setTempL0bRrsdID}
          />
        </FilterMenu>
        <Table data={data} columns={columns} loading={loading} />
      </FilterTableGrid>
    </PageWrapper>
  );
}

export default withRouter(TrackFrames);
