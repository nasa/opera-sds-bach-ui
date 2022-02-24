import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useAllData } from "../../../reducers/DataSummary/allData";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function AllDataContexts(props) {
  const { children } = props;
  const reducer = useAllData();
  const { data, setData } = reducer;

  return (
    <DispatchContext.Provider
      value={{
        setData,
      }}
    >
      <StateContext.Provider value={{ data }}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

AllDataContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
