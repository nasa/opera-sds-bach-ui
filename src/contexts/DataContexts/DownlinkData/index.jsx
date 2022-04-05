import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useOutputData } from "@bach/reducers/DataSummary/output";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function DownlinkDataContexts(props) {
  const { children } = props;
  const reducer = useOutputData();
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

DownlinkDataContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
