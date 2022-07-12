import * as React from "react";

import moment from "moment";

import {
  WORKFLOW_START_DATE,
  WORKFLOW_END_DATE,
  WORKFLOW_PRESET,
  LAST_MODIFIED_START_DATE,
  LAST_MODIFIED_END_DATE,
  LAST_MODIFIED_PRESET,
  OBSERVATION_START_DATE,
  OBSERVATION_END_DATE,
  OBSERVATION_PRESET,
  OBSERVATION_ID,
  DATATAKE_ID,
  L0B_RRSD_ID,
  LDF_FILENAME,
  VCID,
  SHOW_LATEST_VERSION,
  CYCLE_SECONDARY_ID,
  CYCLE_REFERENCE_ID,
  TRACK_ID,
  FRAME_ID,
  SOURCE,
  DATA,
} from "@bach/constants";

const actionTypes = {
  workflowStartDate: WORKFLOW_START_DATE,
  workflowEndDate: WORKFLOW_END_DATE,
  workflowPreset: WORKFLOW_PRESET,
  lastModifiedStartDate: LAST_MODIFIED_START_DATE,
  lastModifiedEndDate: LAST_MODIFIED_END_DATE,
  lastModifiedPreset: LAST_MODIFIED_PRESET,
  observationStartDate: OBSERVATION_START_DATE,
  observationEndDate: OBSERVATION_END_DATE,
  observationPreset: OBSERVATION_PRESET,
  observationID: OBSERVATION_ID,
  datatakeID: DATATAKE_ID,
  l0bRrsdID: L0B_RRSD_ID,
  ldfFilename: LDF_FILENAME,
  vcid: VCID,
  showLatestVersion: SHOW_LATEST_VERSION,
  cycleSecondaryID: CYCLE_SECONDARY_ID,
  cycleReferenceID: CYCLE_REFERENCE_ID,
  trackID: TRACK_ID,
  frameID: FRAME_ID,
  source: SOURCE,
  data: DATA,
};

const initialState = {
  workflowStartDate: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  workflowEndDate: moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  workflowPreset: "Today",
  lastModifiedStartDate: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  lastModifiedEndDate: moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  lastModifiedPreset: "Today",
  observationStartDate: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  observationEndDate: moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  observationPreset: "Today",
  observationID: "",
  datatakeID: "",
  l0bRrsdID: "",
  ldfFilename: "",
  vcid: "",
  showLatestVersion: true,
  cycleSecondaryID: "",
  cycleReferenceID: "",
  trackID: "",
  frameID: "",
  source: "",
  data: [],
};

function productAccountabilityReducer(state, action) {
  switch (action.type) {
    case WORKFLOW_START_DATE:
      return { ...state, workflowStartDate: action.payload };
    case WORKFLOW_END_DATE:
      return { ...state, workflowEndDate: action.payload };
    case WORKFLOW_PRESET:
      return { ...state, workflowPreset: action.payload };
    case LAST_MODIFIED_START_DATE:
      return { ...state, lastModifiedStartDate: action.payload };
    case LAST_MODIFIED_END_DATE:
      return { ...state, lastModifiedEndDate: action.payload };
    case LAST_MODIFIED_PRESET:
      return { ...state, lastModifiedPreset: action.payload };
    case OBSERVATION_START_DATE:
      return { ...state, observationStartDate: action.payload };
    case OBSERVATION_END_DATE:
      return { ...state, observationEndDate: action.payload };
    case OBSERVATION_PRESET:
      return { ...state, observationPreset: action.payload };
    case OBSERVATION_ID:
      return { ...state, observationID: action.payload };
    case DATATAKE_ID:
      return { ...state, datatakeID: action.payload };
    case L0B_RRSD_ID:
      return { ...state, l0bRrsdID: action.payload };
    case LDF_FILENAME:
      return { ...state, ldfFilename: action.payload };
    case VCID:
      return { ...state, vcid: action.payload };
    case SHOW_LATEST_VERSION:
      return { ...state, showLatestVersion: action.payload };
    case CYCLE_REFERENCE_ID:
      return { ...state, cycleReferenceID: action.payload };
    case CYCLE_SECONDARY_ID:
      return { ...state, cycleSecondaryID: action.payload };
    case TRACK_ID:
      return { ...state, trackID: action.payload };
    case FRAME_ID:
      return { ...state, frameID: action.payload };
    case SOURCE:
      return { ...state, source: action.payload };
    case DATA:
      return { ...state, data: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}

function useProductAccountability({
  reducer = productAccountabilityReducer,
} = {}) {
  const [
    {
      workflowStartDate,
      workflowEndDate,
      workflowPreset,
      observationStartDate,
      observationEndDate,
      observationPreset,
      lastModifiedStartDate,
      lastModifiedEndDate,
      lastModifiedPreset,
      observationID,
      datatakeID,
      l0bRrsdID,
      ldfFilename,
      vcid,
      showLatestVersion,
      cycleReferenceID,
      cycleSecondaryID,
      trackID,
      frameID,
      source,
      data,
    },
    dispatch,
  ] = React.useReducer(reducer, initialState);

  const setWorkflowStartDate = (val) => {
    dispatch({ type: actionTypes.workflowStartDate, payload: val });
  };

  const setWorkflowEndDate = (val) =>
    dispatch({ type: actionTypes.workflowEndDate, payload: val });

  const setWorkflowPreset = (val) =>
    dispatch({ type: actionTypes.workflowPreset, payload: val });

  const setLastModifiedStartDate = (val) => {
    dispatch({ type: actionTypes.lastModifiedStartDate, payload: val });
  };
  const setLastModifiedEndDate = (val) =>
    dispatch({ type: actionTypes.lastModifiedEndDate, payload: val });

  const setLastModifiedPreset = (val) =>
    dispatch({ type: actionTypes.lastModifiedPreset, payload: val });

  const setObservationStartDate = (val) => {
    dispatch({ type: actionTypes.observationStartDate, payload: val });
  };

  const setObservationEndDate = (val) =>
    dispatch({ type: actionTypes.observationEndDate, payload: val });

  const setObservationPreset = (val) =>
    dispatch({ type: actionTypes.observationPreset, payload: val });

  const setObservationId = (val) =>
    dispatch({ type: actionTypes.observationID, payload: val });

  const setDatatakeId = (val) =>
    dispatch({ type: actionTypes.datatakeID, payload: val });

  const setL0bRrsdId = (val) =>
    dispatch({ type: actionTypes.l0bRrsdID, payload: val });

  const setLdfFilename = (val) =>
    dispatch({ type: actionTypes.ldfFilename, payload: val });

  const setVCID = (val) => dispatch({ type: actionTypes.vcid, payload: val });

  const setShowLatestVersion = (val) =>
    dispatch({ type: actionTypes.showLatestVersion, payload: val });

  const setCycleReferenceID = (val) =>
    dispatch({ type: actionTypes.cycleReferenceID, payload: val });

  const setCycleSecondaryID = (val) =>
    dispatch({ type: actionTypes.cycleSecondaryID, payload: val });

  const setTrackID = (val) =>
    dispatch({ type: actionTypes.trackID, payload: val });
  const setFrameID = (val) =>
    dispatch({ type: actionTypes.frameID, payload: val });

  const setSource = (val) =>
    dispatch({ type: actionTypes.source, payload: val });
  const setData = (val) => dispatch({ type: actionTypes.data, payload: val });

  return {
    workflowStartDate,
    workflowEndDate,
    workflowPreset,
    observationStartDate,
    observationEndDate,
    observationPreset,
    lastModifiedStartDate,
    lastModifiedEndDate,
    lastModifiedPreset,
    observationID,
    datatakeID,
    l0bRrsdID,
    ldfFilename,
    vcid,
    showLatestVersion,
    cycleReferenceID,
    cycleSecondaryID,
    trackID,
    frameID,
    source,
    data,
    setWorkflowStartDate,
    setWorkflowEndDate,
    setWorkflowPreset,
    setLastModifiedStartDate,
    setLastModifiedEndDate,
    setLastModifiedPreset,
    setObservationStartDate,
    setObservationEndDate,
    setObservationPreset,
    setObservationId,
    setDatatakeId,
    setL0bRrsdId,
    setLdfFilename,
    setVCID,
    setShowLatestVersion,
    setCycleReferenceID,
    setCycleSecondaryID,
    setTrackID,
    setFrameID,
    setSource,
    setData,
  };
}

export {
  useProductAccountability,
  actionTypes,
  initialState,
  productAccountabilityReducer,
};
