import * as React from "react";

import { DATA } from "@bach/constants";

const initialState = {
  data: [],
};

function outputDataReducer(state, action) {
  switch (action.type) {
    case DATA:
      return { ...state, data: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}

function useOutputData({ reducer = outputDataReducer } = {}) {
  const [{ data }, dispatch] = React.useReducer(reducer, {
    data: [],
  });
  const setData = (val) => dispatch({ type: DATA, payload: val });

  return {
    data,
    setData,
  };
}

export { useOutputData, initialState, outputDataReducer };
