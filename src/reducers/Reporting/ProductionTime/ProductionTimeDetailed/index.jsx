import * as React from "react";

import { DATA } from "@bach/constants";

const initialState = {
  data: [],
};

function productionTimeDetailedReportReducer(state, action) {
  switch (action.type) {
    case DATA:
      return { ...state, data: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}

function useProductionTimeDetailedReportData() {
  const [{ data }, dispatch] = React.useReducer(productionTimeDetailedReportReducer, initialState);
  const setData = (val) => dispatch({ type: DATA, payload: val });

  return {
    data,
    setData,
  };
}

export { useProductionTimeDetailedReportData, initialState };
