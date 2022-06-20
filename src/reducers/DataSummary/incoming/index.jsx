import * as React from "react";

import { DATA } from "@bach/constants";

const initialState = {
  data: [],
};

function incomingDataReducer(state, action) {
  switch (action.type) {
    case DATA:
      return { ...state, data: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}

function useIncomingData({ reducer = incomingDataReducer } = {}) {
  const [{ data }, dispatch] = React.useReducer(reducer, {
    data: [],
  });
  const setData = (val) => dispatch({ type: DATA, payload: val });

  return {
    data,
    setData,
  };
}

export { useIncomingData, initialState, incomingDataReducer };
