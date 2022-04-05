import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useIncomingData } from "@bach/reducers/DataSummary/incoming";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function IncomingDataContexts(props) {
  const { children } = props;
  const reducer = useIncomingData();
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

IncomingDataContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
