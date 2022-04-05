import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useAllData } from "@bach/reducers/DataSummary/allData";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function AllDataContexts(props) {
  const { children } = props;
  const reducer = useAllData();
  const { data, setData, sensor, setSensor, tileId, setTileId } = reducer;

  return (
    <DispatchContext.Provider value={{ setData, setSensor, setTileId }}>
      <StateContext.Provider value={{ data, sensor, tileId }}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

AllDataContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
