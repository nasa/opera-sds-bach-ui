import * as React from "react";

import { DATA } from "@bach/constants";

const initialState = {
  data: [],
};

function productionTimeSummaryReportReducer(state, action) {
  switch (action.type) {
    case DATA:
      return { ...state, data: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}

function useProductionTimeSummaryReportData() {
  const [{ data }, dispatch] = React.useReducer(productionTimeSummaryReportReducer, initialState);
  const setData = (val) => dispatch({ type: DATA, payload: val });

  return {
    data,
    setData,
  };
}

export { useProductionTimeSummaryReportData, initialState };
