import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useIncomingGdsData } from "@bach/reducers/Reporting/DataProcessing/IncomingGds";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function IncomingGdsContexts(props) {
  const { children } = props;
  const reducer = useIncomingGdsData();
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

IncomingGdsContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
