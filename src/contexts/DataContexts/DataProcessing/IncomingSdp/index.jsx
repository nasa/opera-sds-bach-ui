import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useIncomingSdpData } from "@bach/reducers/Reporting/DataProcessing/IncomingSdp";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function IncomingSdpContexts(props) {
  const { children } = props;
  const reducer = useIncomingSdpData();
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

IncomingSdpContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
