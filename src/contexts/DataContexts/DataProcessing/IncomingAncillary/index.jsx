import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useIncomingAncillaryData } from "@bach/reducers/Reporting/DataProcessing/IncomingAncillary";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function IncomingAncillaryContexts(props) {
  const { children } = props;
  const reducer = useIncomingAncillaryData();
  const { data, summary, setData, setSummary } = reducer;

  return (
    <DispatchContext.Provider
      value={{
        setData,
        setSummary,
      }}
    >
      <StateContext.Provider value={{ data, summary }}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

IncomingAncillaryContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
