import * as React from "react";

import moment from "moment";

import {
  START_DATE,
  END_DATE,
  PRESET,
  CRID,
  PROCESSING_MODE,
  REPORT_TYPE,
} from "@bach/constants";

const actionTypes = {
  startDate: START_DATE,
  endDate: END_DATE,
  preset: PRESET,
  crid: CRID,
  processingMode: PROCESSING_MODE,
  reportType: REPORT_TYPE,
};

const initialState = {
  startDate: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  endDate: moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  preset: "",
  crid: "",
  processingMode: "",
  reportType: "brief",
};

function reportingReducer(state, action) {
  switch (action.type) {
    case START_DATE:
      return { ...state, startDate: action.payload };
    case END_DATE:
      return { ...state, endDate: action.payload };
    case PRESET:
      return { ...state, preset: action.payload };
    case PROCESSING_MODE:
      return { ...state, productType: action.payload };
    case CRID:
      return { ...state, source: action.payload };
    case REPORT_TYPE:
      return { ...state, source: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}

function useReporting({ reducer = reportingReducer } = {}) {
  const [
    { startDate, endDate, preset, processingMode, crid, reportType },
    dispatch,
  ] = React.useReducer(reducer, {
    startDate: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
    endDate: moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
    preset: "Today",
    processingMode: "",
    crid: "",
    reportType: "brief",
  });

  const setStartDate = (val) => {
    dispatch({ type: START_DATE, payload: val });
  };
  const setEndDate = (val) => dispatch({ type: END_DATE, payload: val });
  const setPreset = (val) => dispatch({ type: PRESET, payload: val });
  const setProcessingMode = (val) =>
    dispatch({ type: PROCESSING_MODE, payload: val });
  const setCRID = (val) => dispatch({ type: CRID, payload: val });
  const setReportType = (val) => dispatch({ type: REPORT_TYPE, payload: val });

  return {
    startDate,
    endDate,
    preset,
    crid,
    processingMode,
    reportType,
    setStartDate,
    setEndDate,
    setPreset,
    setProcessingMode,
    setCRID,
    setReportType,
  };
}

export { useReporting, actionTypes, initialState, reportingReducer };
