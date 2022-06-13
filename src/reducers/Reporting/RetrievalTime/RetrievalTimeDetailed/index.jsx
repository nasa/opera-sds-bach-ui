import * as React from "react";

import { DATA } from "@bach/constants";

const initialState = {
  data: [],
};

function retrievalTimeDetailedReportReducer(state, action) {
  switch (action.type) {
    case DATA:
      return { ...state, data: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}

function useRetrievalTimeDetailedReportData() {
  const [{ data }, dispatch] = React.useReducer(retrievalTimeDetailedReportReducer, initialState);
  const setData = (val) => dispatch({ type: DATA, payload: val });

  return {
    data,
    setData,
  };
}

export { useRetrievalTimeDetailedReportData, initialState };
