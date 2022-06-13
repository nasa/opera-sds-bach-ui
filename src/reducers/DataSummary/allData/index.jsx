import * as React from "react";

import { DATA } from "@bach/constants";

const initialState = {
  data: [],
  sensor: "",
  tileId: "",
};

function allDataReducer(state, action) {
  switch (action.type) {
    case DATA:
      return { ...state, data: action.payload };
    case "SENSOR":
      return { ...state, sensor: action.payload };
    case "TILE_ID":
      return { ...state, tileId: action.payload };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}
/**
 * [useAllData]
 * Takes in a reducer that defaults to the allDataReducer. This is just the syntax utilizing
 * the React Reducer functionality. The = {} is just what it would default to otherwise which is required.
 * @param {*} reducer
 * @returns Object
 */
function useAllData({ reducer = allDataReducer } = {}) {
  const [{ data, sensor, tileId }, dispatch] = React.useReducer(reducer, {
    data: [],
    sensor: "",
    tileId: "",
  });
  const setData = (val) => dispatch({ type: DATA, payload: val });
  const setSensor = (val) => dispatch({ type: "SENSOR", payload: val });
  const setTileId = (val) => dispatch({ type: "TILE_ID", payload: val });

  return {
    data,
    setData,
    sensor,
    setSensor,
    tileId,
    setTileId,
  };
}

export { useAllData, initialState, allDataReducer };
