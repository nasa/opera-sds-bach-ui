import * as React from "react";

import { DATA } from "@bach/constants";

const initialState = {
  data: [],
};

function retrievalTimeSummaryReportReducer(state, action) {
  switch (action.type) {
    case DATA:
      return { ...state, data: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}

function useRetrievalTimeSummaryReportData() {
  const [{ data }, dispatch] = React.useReducer(retrievalTimeSummaryReportReducer, initialState);
  const setData = (val) => dispatch({ type: DATA, payload: val });

  return {
    data,
    setData,
  };
}

export { useRetrievalTimeSummaryReportData, initialState };
