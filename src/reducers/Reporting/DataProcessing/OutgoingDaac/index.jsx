import * as React from "react";

import { DATA, SUMMARY } from "@bach/constants";

const initialState = {
  data: [],
  summary: {},
};

function outgoingDaacReducer(state, action) {
  switch (action.type) {
    case DATA:
      return { ...state, data: action.payload };
    case SUMMARY:
      return { ...state, summary: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}
/**
 * [observationData]
 * Takes in a reducer that defaults to the generatedSdsReducer. This is just the syntax utilizing
 * the React Reducer functionality. The = {} is just what it would default to otherwise which is required.
 * @param {*} reducer
 * @returns Object
 */
function useOutgoingDaacData({ reducer = outgoingDaacReducer } = {}) {
  const [{ data, summary }, dispatch] = React.useReducer(reducer, initialState);
  const setData = (val) => dispatch({ type: DATA, payload: val });
  const setSummary = (val) => dispatch({ type: SUMMARY, payload: val });

  return {
    data,
    summary,
    setData,
    setSummary,
  };
}

export { useOutgoingDaacData, initialState, outgoingDaacReducer };
