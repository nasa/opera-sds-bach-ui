import * as React from "react";

import { DATA } from "@bach/constants";

const initialState = {
  data: [],
};

function productionTimeSummaryReportReducer(state, action) {
  switch (action.type) {
    case DATA: {
      return { ...state, data: action.payload };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
}
/**
 * [observationData]
 * Takes in a reducer that defaults to the productionTimeSummaryReportReducer. This is just the syntax utilizing
 * the React Reducer functionality. The = {} is just what it would default to otherwise which is required.
 * @param {*} reducer
 * @returns Object
 */
function useProductionTimeSummaryReportData({ reducer = productionTimeSummaryReportReducer } = {}) {
  const [{ data }, dispatch] = React.useReducer(reducer, initialState);
  const setData = (val) => dispatch({ type: DATA, payload: val });

  return {
    data,
    setData,
  };
}

export { useProductionTimeSummaryReportData, initialState, productionTimeSummaryReportReducer };
